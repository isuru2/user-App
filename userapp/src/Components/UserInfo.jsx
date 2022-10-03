import React, { Component } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import { Card } from "react-bootstrap";
import '../Css/view.css'
import { Link } from "react-router-dom";

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            //get the user id 
            id: localStorage.getItem("data")
        }
    }
    componentDidMount() {

        //call the selected user's details
        axios.get("https://reqres.in/api/users/" + this.state.id).then((res) => {
            this.setState({
                data: res.data.data
            }, () => {
                console.log("res...", this.state.data)

            })
        })
    }


    render() {
        return (
            <div>
                <header className="viewInfoH"><Link to="/" className="linkTwo">Back</Link></header>
                <Grid container spacing={4} className="infoGrid">
                    <Grid item xs={6} className="innerGrid">
                        <Card style={{ backgroundColor: 'rgb(235, 235, 235)' }}>
                            <Avatar alt="" src={this.state.data.avatar} sx={{ width: '15em', height: '15em' }} />
                        </Card>
                    </Grid>
                    <Grid item xs={6} className="innerInfoGrid">

                        <Card className="cardStyles">
                            <div className="divStyles">
                                <p>First Name</p>
                                <p>Last Name</p>
                                <p>Email</p>
                            </div>

                            <div className="divStyles">
                                <p>{this.state.data.first_name}</p>
                                <p>{this.state.data.last_name}</p>
                                <p>{this.state.data.email}</p>
                            </div>
                        </Card>


                    </Grid>
                </Grid>

            </div >

        );
    }
}
export default (UserInfo);