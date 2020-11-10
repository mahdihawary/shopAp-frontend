import { func } from 'prop-types'
import React from 'react'


function total({ product, removeCartItem, cartIds}) {

    // function findCartIds(){
        
    //     return cartIds.find(item => item.product_id === product.id).id

    // }


    
    function localItemRemover(){
        let id =cartIds.find(item => item.product_id === product.id).id
        console.log(id)
        
        removeCartItem(id)
    }
  
    return (
        
            <tr>
                <th scope="row ">
                    <img src={product.image} alt="" className="img-fluid z-depth-0 w-25"/>
                </th>
                    <td>
                        <h5 className="mt-3">
                            <strong>{product.name}</strong>
                        </h5>
                        <p className="text-muted">{product.sport}</p>
                    </td>
                    <td>{product.team}</td>
                    <td></td>
                    
                        <td className="font-weight-bold">
                            <strong>${product.price}</strong>
                        </td>
                        <td>
                            <button onClick={localItemRemover} type="button" className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top"
                                title="Remove item">X
                            </button>
                        </td>
          </tr>

        
    )


}

export default total