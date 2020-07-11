import React, { Component } from "react";
import axios from "axios";
import { MDBDataTable } from "mdbreact";

class Employees extends Component {

    state = {
        employeeRecords: []
    };

    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=200&nat=us")
            .then(response => {
                console.log(response);
                var employeeRecords = []
                for (let i = 0; i < response.data.results.length; i++) {
                    let employee = {
                        firstName: response.data.results[i].name.first,
                        lastName: response.data.results[i].name.last,
                        email: response.data.results[i].email,
                        phoneNum: response.data.results[i].cell
                    }
                    employeeRecords.push(employee)
                    console.log(employeeRecords);
                }
                this.setState({ employeeRecords: employeeRecords });
                console.log(employeeRecords,this.state.employeeRecords);
            });
    };

    render() {

        var employeeData = {
            columns: [
                {
                    label: "First Name",
                    field: "firstName",
                    sort: "asc",
                    width: 150

                },
                {
                    label: "lastName",
                    field: "lastName",
                    sort: "asc",
                    width: 150

                },
                {
                    label: "email",
                    field: "email",
                    sort: "asc",
                    width: 150

                },
                {
                    label: "phoneNum",
                    field: "phoneNum",
                    sort: "asc",
                    width: 150

                }

            ],
            rows: this.state.employeeRecords
        }

        return (
            <div>
                <MDBDataTable bordered responsive striped data={employeeData}/>
            </div>
        )
    }
};

export default Employees