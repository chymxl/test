import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { observer } from 'mobx-react'
import InfoStore from '../stores/InfoStore'

@observer
export default class Info extends Component{
    constructor(){
        super()
        this.store = new InfoStore()
    }
    componentDidMount(){
        this.store.getInfo()
    }
    render(){
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>appCode</th>
                        <th>appName</th>
                        <th>host</th>
                        <th>port</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.store.data.map(info => (
                            <tr key={info.code}>
                                <td>{info.code}</td>
                                <td>{info.name}</td>
                                <td>{info.host}</td>
                                <td>{info.port}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
             </Table>
        )
        
    }
}