import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

import SignUpForm from './SignUpForm'


class LoginPage extends Component {
  state = {
    users: []
  }

componentWillMount(){
    this.getAllUsers()
}

// Error: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access.

// by default, when you build out an API -- access control origin center. Is it coming from the same server the data is living on or is it coming form a server that has not been given access?
// Access Control Origin will prevent outsiders from hitting the server. You cannot hit the FBI server from a server that is not the FBI server. 

// add "proxy": http://localhost:3001
// AND restart server 
// AND then, change the axios.getfrom the local host to ('api/users')
  getAllUsers = async () => {
   const res = await axios.get('api/users')
    this.setState({users: res.data})
    }
  
    // we need to be able to handle a change
    

    // _id because that's how Mongoose sends it back to us
    render () {
      return (
        <div>
          <h1>Log-In</h1>
          <h3>Please Select an Existing User</h3>
          {this.state.users.map(user => {
            return (<div><Link key={user._id} to={`/idea/${user._id}`}>{user.userName}</Link></div>)
          })}
          <SignUpForm />
        </div>
      )
    }
  }

export default LoginPage