import React from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap'

class Login extends React.Component {

// function postUser(){
//     fetch('http://localhost:3000/api/v1/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json'
//         },
//         body: JSON.stringify({
//             user: {
//                 username: "Messi",
//                 password: "123abc",
//                 user_img: "https://upload.wikimedia.org/wikipedia/commons/4/49/Syvia_of_Sylvia%27s_reaturant_N.Y.C_%28cropped%29.jpg"
//             }
//         })
//     })
//         .then(r => r.json())
//         .then(console.log)
// }

    state={
        username:'',
        password:''

    }    
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    localSubmitHandler=(e)=>{
        e.preventDefault()
        this.props.loginHandler(this.state)
    }

    render(){
        return (
            <Form onSubmit={this.localSubmitHandler}>
                <Form.Row className="justify-content-md-center">
                    <Col sm={4} className="my-1">
                        <Form.Control type="text" name="username" value={this.state.username} onChange={e => this.changeHandler(e)} placeholder="username" id="inlineFormInputName"/>
                    </Col>
                    <Col sm={3} className="my-1">
                        <Form.Control type="password" name="password" value={this.state.password} onChange={e => this.changeHandler(e)}/>
                    </Col>
                    <button type="submit">submit</button>
                </Form.Row>
            </Form>
        )
    }
    }

export default Login