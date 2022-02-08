import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react';
import '../assets/css/SmallCard.css'



function ContentProducts() {
  
    const [productos, setProductos] = useState([])
    
    useEffect ( () => {
        fetch('http://localhost:3001/api/products/')
        .then(response => (response.json()))
        .then(data => {setProductos(data.products)} )
        .catch(error => console.error(error))
      }, []);
    
      const [users, setUsers] = useState([])

    useEffect ( () => {
    fetch('http://localhost:3001/api/users/')
    .then(response => (response.json()))
    .then(data => {setUsers(data.users)} )
    .catch(error => console.error(error))
  }, []);

  const [category, setCategories] = useState([])

    useEffect ( () => {
    fetch('http://localhost:3001/api/products/')
    .then(response => (response.json()))
    .then(data => {setCategories(data.countByCategory)} )
    .catch(error => console.error(error))
  }, []);

     let array = [{total:productos.length, title:"Total Productos"},
      {total:users.length, title:"Total Usuarios"},
    {total:category.length, title:"Total Categorías"}
    ]
    
      return (

    
        <div className="triple-panel">
            
            {array.map( (total, i) => {

                return <SmallCard {...total} key={i}/>
            
            })}

        </div>
    )
}

export default ContentProducts;