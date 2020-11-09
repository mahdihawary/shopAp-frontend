import React from 'react'


function total({ product }) {


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

          </tr>

        
    )


}

export default total