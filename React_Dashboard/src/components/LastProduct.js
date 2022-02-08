import React from 'react';
import '../assets/css/SmallCard.css'
import '../assets/css/LastProduct.css'

function LastProduct(props){
    return(
        <div className="hijo-last-product">
            
                        <div className="black ultimo-prod">
                                 <img src={props.image} alt='imagen producto' className="imagen-last-product"/> 
                            
                            <div className="descripcion">
                            <div className="black desc-dash"> Producto ID: {props.id}</div>
                            <div className="black desc-dash">Nombre: {props.name}</div>
                            <div className="black desc-dash">Descripción: {props.description}</div>
                            <div className="black desc-dash">Precio: {props.price}</div>                     
                            </div>
                        </div>
                        
        </div>
        
    )
}

export default LastProduct