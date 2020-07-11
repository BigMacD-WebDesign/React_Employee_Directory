import React, { Component } from "react";
import axios from "axios";

class Employees extends Component {

    state = {
        employeeData: []
    };

    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=200&nat=us")
        .then(response => {
            console.log(response);
        });
    };

    render () {
        return(
            <div>
                <h1>This is a Heading</h1>
            </div>
        )
    }
};

export default Employees