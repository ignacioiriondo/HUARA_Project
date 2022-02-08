import React from 'react';
import '../assets/css/PanelCategorias.css'
import { useState, useEffect } from 'react';
import PanelCat from './PanelCat';




function PanelCategorias() {
  
    const [category, setCategory] = useState([])
    
    useEffect ( () => {
        fetch('http://localhost:3001/api/products/')
        .then(response => (response.json()))
        .then(data => {setCategory(data.countByCategory)} )
        .catch(error => console.error(error))
      }, []);

      


      return (

    
        <div className="padre-panel"  >
            
            {category.map( (cat, i) => {

                return <PanelCat {...cat} key={i}/>
            
            })}

        </div>
    )
}

export default PanelCategorias;