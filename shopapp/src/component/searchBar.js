import React from 'react'
import{Container, Form, Col} from 'react-bootstrap'

const searchBar=({filterTerm, filterChange})=>{



    return (
    <Container className="formCont">
        <Form>
        <Form.Row className="justify-content-md-center">
        <Col sm={4} className="my-1">
                        <Form.Control type="text" value={filterTerm} onChange={e => filterChange(e)} placeholder="Search..." id="inlineFormInputName"></Form.Control>
        </Col>
        <Col sm={3} className="my-1">
        <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom >
        <option value="0">Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Control>
      </Col>
      </Form.Row>
    </Form>
    </Container>
        )
}
export default searchBar