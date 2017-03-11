/**
 * Created by Administrator on 2017/3/10.
 */
import React, { Component } from 'react';
import config from './config.json';

import styles from './Greeter.css';

class Greeter extends Component{
    render(){
        return(
            <div className={styles.root}>
            {config.greetText}
            </div>
        );
    }

    sayHi = (data) => {
        this.state.data = data;
    }
}

export default Greeter;
