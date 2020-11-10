import React from 'react'
import { Container, Form, Col } from 'react-bootstrap'



class Signup extends React.Component{

    state={
        username:'',
        password:'',
        userImg: ''

    }    
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    localSubmitHandler=(e)=>{
        e.preventDefault()
        this.props.submitHandler(this.state)
    }
    render(){
        return(
            <Container className="login-form">
            <h1>Sign Up</h1>
            <div className="row h-100 justify-content-center align-items-center">
        <Form onSubmit={this.localSubmitHandler} className="col-12 ">
            <Form.Row className=" h-100 justify-content-md-center">
                <Col sm={4} className="my-1">
                    <Form.Control type="text" name="username" value={this.state.username} onChange={e => this.changeHandler(e)} placeholder="username" id="inlineFormInputName" className="login-input"/>
                    <Form.Control type="password" name="password" value={this.state.password} onChange={e => this.changeHandler(e)} placeholder="password" className="login-input"/>
                    {/* <Form.Control type="text" name="userImg" value={this.state.userImg} onChange={e => this.changeHandler(e)} placeholder="image" id="inlineFormInputName" className="login-input"/> */}
                            <button type="submit" className="login-input btn-dark btn">submit</button>
                </Col>
                
            </Form.Row>
        </Form>
        </div>
        </Container>
        )
    }
}

export default Signup