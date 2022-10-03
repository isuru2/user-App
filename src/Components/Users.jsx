import React, {Component} from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import { Card } from "react-bootstrap";
import '../Css/view.css'
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";

class Users extends Component {
    constructor(props) {
        super(props)

        this.onChangeInfo = this.onChangeInfo.bind(this);

        this.state = {
            data: [],
            id:''
        }
    }

    componentDidMount(){
        //call the users API

        axios.get(" https://reqres.in/api/users?page=1").then((res) => {
            this.setState({
        
        //set the user details to data array
                data: res.data.data
            }, () => {
                console.log("res...", this.state.data)

            })
        })
    }

    onChangeInfo(e, id) {
        //set the clicked user's id
        
        localStorage.setItem("data", id)
}

render(){
    return(
        <div>
        <header className="viewH">Title</header>
        <p className="p">Users</p>
        <Grid container spacing={4} className="grid">
            {this.state.data.map((data, index) => {
                return (
                    <Grid item xs={4} className="innerGrid" key={index} >
                        <Link className="link" to='/info' onClick={(e) => { this.onChangeInfo(e, JSON.stringify(data.id)) }}>
                            <Card >
                                <div className="innerDiv">
                                    <div className="avatar"> <Avatar alt="" src={data.avatar} sx={{ width: '15em', height: '15em' }} /></div>
                                </div>
                                <Card.Body>
                                    <Card.Title className="nameStyle">{data.first_name}</Card.Title>
                                    <Card.Text className="emailStyle">
                                        {data.email}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Grid>
                )
            }
            )}
            
        </Grid>

    </div>
    )
}
}
export default (Users);