import React from 'react'
import{Container, Form, Col} from 'react-bootstrap'

const searchBar=({filterTerm, filterChange, filterHandle})=>{



    return (
    <Container className="formCont">
        <Form>
        <Form.Row className="justify-content-md-center">
        <Col sm={4} className="my-1">
                        <Form.Control type="text" value={filterTerm} onChange={e => filterChange(e)} placeholder="Search..." id="inlineFormInputName"></Form.Control>
        </Col>
        <Col sm={3} className="my-1">
        <Form.Control as="select" onChange={e =>filterHandle(e.target.value)} className="mr-sm-2" id="inlineFormCustomSelect" custom >
        <option value="">Select Sport</option>
        <option value="soccer">soccer</option>
        <option value="basketball">basketball</option>
        <option value="football">football</option>
      </Form.Control>
      </Col>
      </Form.Row>
    </Form>
    </Container>
        )
}
export default searchBar