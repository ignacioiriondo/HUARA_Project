import { useState, useEffect } from 'react';
import React from 'react';
import LastProduct from './LastProduct';



function UltimoProduct() {
  
const [products, setProducts] = useState([])

useEffect ( () => {
    fetch('http://localhost:3001/api/products/')
    .then(response => (response.json()))
    .then(data => {setProducts(data.products)} )
    .catch(error => console.error(error))
  }, []);

  let ultimo = [products[products.length - 1]]
 
  
  return (


<div className="padre-last-product"> 
       
         {   ultimo.map((u, i) => {    
           
           return <LastProduct {...u} key={i}/>
              
                       
                
                
})} 
        
        
</div>


      )
 
  }

export default UltimoProduct;
