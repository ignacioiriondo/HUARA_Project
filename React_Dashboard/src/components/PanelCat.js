import React from 'react';
import '../assets/css/SmallCard.css'

function PanelCat(props){
    return(
        <div className="hijo-panel">
                            
                            <div className="black hijito"> Categoría: {props.name}</div>
                            <div className="black hijito"> Total productos: {props.count}</div>
        </div>
                       
                    
        
    )
}

export default PanelCat