import {observable, action} from 'mobx';
import fetch from "isomorphic-fetch";

class UserStore{

    _columns = [
        {key: "id", name: "ID", locked: true},
        {key: "username", name: "User", width: 200, sortable: true},
        {key: "password", name: "Password", width: 200, sortable: true},
        {key: "password_salt", name: "Salt", width: 200, sortable: true}
    ];
    @observable users = [];

    @action getUsers(pageNo, pageSize, param){
        let _this = this;
        let params = {
            pageNo: pageNo,
            pageSize: pageSize,
            param: param
        };
        let esc = encodeURIComponent;
        let paramStr = Object.keys(params)
                .map(key => esc(key) + "=" + esc(params[key]))
                .join("&");
        let opts = {
            method: 'get',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };
        let url = "http://localhost:8080/test/admin/user/query";
        fetch(url + "?" + paramStr, opts)
            .then(response => {
                if(response.ok)
                    return response.json();
                console.error("eroor");
                return {};
            })
            .then(data => {
                if(data.success){
                    _this.users = data.data;
                }
            })
    }

}

export default UserStore;