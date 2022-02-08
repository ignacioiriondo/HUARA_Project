import { useState, useEffect } from 'react';
import '../assets/css/Table.css'
import '../assets/css/Test.css'
import TableRow from './TableRow';



function ProductsTable() {
  
const [productos, setProductos] = useState([])

useEffect ( () => {
    fetch('http://localhost:3001/api/products/')
    .then(response => (response.json()))
    .then(data => {setProductos(data.products)} )
    .catch(error => console.error(error))
  }, []);

 

  return (

  
  <table >
    <caption>
      LISTADO DE PRODUCTOS
    </caption>
    
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Categoría</th>
        <th scope="col">Stock</th>

      </tr>
    </thead>

    <tbody>

    {   productos.map((p,i)  =>{
      return <TableRow { ...p} key={i}/>
    }
    )}

    </tbody>

    <tfoot>
      <tr>
        <th scope="row" colSpan={2}>
          Total de productos
        </th>
        <td colSpan={2}>{productos.length}</td>
      </tr>
    </tfoot>

  </table>

    )
 
  }

export default ProductsTable;
