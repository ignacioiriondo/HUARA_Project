import React from 'react';


function TableRow(props){
    return (
        <tr>
            <th scope="row">{props.name}</th>
            <td>$ {props.price}</td>
            <td>{props.category}</td>
            <td>{props.stock}</td>
        </tr>
            )
    }
    
        

export default TableRow;



