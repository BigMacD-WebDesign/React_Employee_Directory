//Required imports
import React, { Component } from "react";
import axios from "axios";
import { MDBDataTable } from "mdbreact";


//Class function.
class Employees extends Component {

    state = {
        employeeRecords: []
    };

    //API call for randomuser.me
    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=200&nat=us")
            .then(response => {
                
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
                
            });
    };

    //Render to the table.
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
                    label: "Last Name",
                    field: "lastName",
                    sort: "asc",
                    width: 150

                },
                {
                    label: "E-Mail",
                    field: "email",
                    sort: "asc",
                    width: 150

                },
                {
                    label: "Phone Number",
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

//Required Export
export default Employees