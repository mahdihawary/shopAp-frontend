import React from 'react'
import { Container, Form, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


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
            <Container className="login-form">
                {this.props.error ? <h5 style={{ color: "red" }}>Incorrect username or password</h5> : null}
                <h1 >Log in</h1>
                <div className="row h-100 justify-content-center align-items-center">
            <Form onSubmit={this.localSubmitHandler} className="col-12 ">
                <Form.Row className=" h-100 justify-content-md-center">
                    <Col sm={4} className="my-1">
                                <Form.Control type="text" name="username" value={this.state.username} onChange={e => this.changeHandler(e)} placeholder="username" id="inlineFormInputName" className="login-input"/>
                    
                    
                        <Form.Control type="password" name="password" value={this.state.password} onChange={e => this.changeHandler(e)} className="login-input"/>
                                <button type="submit" className="login-input btn-dark btn">submit</button>
                    </Col>
                    
                </Form.Row>
            </Form>
            
          <p>Don't have an account? <NavLink to={`/signup`} exact className="signUp-link">Sign Up</NavLink></p>


            </div>
            </Container>
        )
    }
    }

export default Login