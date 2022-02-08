import React from 'react';
import ProductsTable from './ProductsTable';
import ContentProducts from './ContentProducts';
import UltimoProduct from './UltimoProduct';
import PanelCategorias from './PanelCategorias';
import '../assets/css/Wrapper.css';


function Wrapper(){
    return(
        <React.Fragment>
            <ContentProducts/>
            <UltimoProduct/>
            <ProductsTable/>
            <PanelCategorias/>
        </React.Fragment>
    )
}
export default Wrapper;