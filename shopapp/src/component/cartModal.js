import React from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import ModalProduct from './modalProduct'



class cartModal extends React.Component {

    state = {
        show: false,

    }
    setShow=()=>{
      this.setState({show:true})
    }
  setClose = () => {
    this.setState({ show: false })
  }

   renderCartItems=()=>{
       return this.props.cart.map(product => <ModalProduct key={product.id} product={product} cartIds={this.props.cartIds} removeCartItem={this.props.removeCartItem} clickHandler="something" />)
    }

    localPurchase=()=>{
        this.props.makePurchase(this.props.cart, this.props.cartIds)
    }

    getTotal=()=>{
        let total=0
        this.props.cart.forEach(product=>total=total+product.price)
            return total
        
    }

    
    render() {
        return (<>
           <Button variant="dark" onClick={this.setShow}>
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
      </Button>

      <Modal show={this.state.show} onHide={this.setClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body >
           <div>
                <div className="card">
                    <div className="card-body tahead">
        <Table responsive className="table product-table">
        <thead className="table-head">
                                    <tr>
                                        
                                        <th className="font-weight-bold">
                                            <strong>Product</strong>
                                        </th>
                                       
                                        <th></th>
                                        <th className="font-weight-bold">
                                            <strong>Price</strong>
                                        </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                     {this.renderCartItems()} 
                                <tr>
                                    <td colspan="3"></td>
                                    <td>
                                        <h4 class="mt-2">
                                            <strong>Total</strong>
                                        </h4>
                                    </td>
                                    <td class="text-right">
                                        <h4 class="mt-2">
                                             <strong>${this.getTotal()}</strong> 
                                        </h4>
                                    </td>
                                    <td colspan="3" class="text-right">
                                        <button type="button" onClick={this.localPurchase} class="btn btn-dark btn-rounded">Complete purchase
                        <i class="fas fa-angle-right right"></i>
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                                </Table>
                        </div>
                </div>
            </div>
        </Modal.Body>
 

      </Modal>
    </>
        )
    }
}

export default cartModal