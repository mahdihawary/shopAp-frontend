import React from 'react'
import { Table} from 'react-bootstrap'
import Total from '../component/total'

class Cart extends React.Component{
    renderCartItems=()=>{
       return this.props.cart.map(product => <Total key={product.id} product={product} cartIds={this.props.cartIds} removeCartItem={this.props.removeCartItem} clickHandler="something" />)
    }

    localPurchase=()=>{
        this.props.makePurchase(this.props.cart, this.props.cartIds)
    }

    getTotal=()=>{
        let total=0
        this.props.cart.forEach(product=>total=total+product.price)
            return total
        
    }

    render(){
        console.log(this.props.cartIds)
        return(
            <div>

                <div className="card">
                    <div className="card-body">

                        
    

        <Table responsive className="table product-table">
        <thead className="table-head">
                                    <tr>
                                        <th></th>
                                        <th className="font-weight-bold">
                                            <strong>Team</strong>
                                        </th>
                                        <th className="font-weight-bold">
                                            <strong>Player</strong>
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
                                        <button type="button" onClick={this.localPurchase} class="btn btn-primary btn-rounded">Complete purchase
                        <i class="fas fa-angle-right right"></i>
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                                </Table>
                        </div>
                </div>
       
            {/* <CardColumns>
                {this.renderCartItems()}
            </CardColumns>*/}
           
            </div>
        )
    }

}

export default Cart