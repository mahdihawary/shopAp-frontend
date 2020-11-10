import React from 'react'


 const modalProduct=({ product, removeCartItem, cartIds})=> {




    
    function localItemRemover(){
        let id =cartIds.find(item => item.product_id === product.id).id
        console.log(id)
        
        removeCartItem(id)
    }
  
    return (
        
            <tr>
                    <td>
                        <h5 className="mt-3">
                            <strong>{product.name}</strong>
                        </h5>
                    </td>
                    <td></td>
                    
                        <td className="font-weight-bold">
                            <strong>${product.price}</strong>
                        </td>
                        <td>
                            <button onClick={localItemRemover} type="button" className="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top"
                                title="Remove item">X
                            </button>
                        </td>
          </tr>

        
    )


}

export default modalProduct