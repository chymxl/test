import React, { Component } from 'react';
import { Grid, Row, Col, Table } from "react-bootstrap";
import {observer} from "mobx-react";
import ReactDataGrid from "react-data-grid";

import UserStore from "../stores/user/UserStore";

let _this;
@observer
class User extends Component{
    constructor(){
        super();
        this.userStore = new UserStore();
        _this = this;
    }
    componentDidMount(){
        this.userStore.getUsers(1, 50, "");
    }
    handleGridSort(sortColumn, sortDirection){
        const comparer = (a, b) => {
            if(sortDirection === 'ASC'){
                return (a[sortColumn] > b[sortColumn])? 1 : -1;
            }
            else if(sortDirection === 'DESC'){
                return (a[sortColumn] < b[sortColumn])? 1: -1;
            }
        };
        const rows = sortDirection === 'NONE'? _this.userStore.users.slice(0): _this.userStore.users.sort(comparer);
        _this.userStore.users = rows;
    }
    rowGetter(i){
        return _this.userStore.users[i];
    }

    render(){
        let elements = this.userStore.users.map((val, key) => {
            return (
                <tr>
                    <td>{key}</td>
                    <td>{val.id}</td>
                    <td>{val.username}</td>
                    <td>{val.password}</td>
                    <td>{val.password_salt}</td>
                </tr>
            )
        });
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>username</th>
                    <th>password</th>
                    <th>salt</th>
                </tr>
                </thead>
                <tbody>
                {elements}
                </tbody>
            </Table>
        );
        // return (
        //     <ReactDataGrid onGridSort={this.handleGridSort} columns={this.userStore._columns}
        //         rowGetter={this.rowGetter}
        //         rowsCount={this.userStore.users.length}
        //         minHeight={500}/>
        // )
    }
}
export default User;