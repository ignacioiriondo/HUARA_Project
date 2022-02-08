import React from 'react';
import ProductsTable from './ProductsTable';
import Header from './Header';
import BarraLateral from './BarraLateral';
import ContentProducts from './ContentProducts';
import UltimoProduct from './UltimoProduct';
import PanelCategorias from './PanelCategorias';
import NotFound from './NotFound';
import Wrapper from './Wrapper';
import Footer from './Footer';
import { Route, Routes, } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
    <Header />
    <BarraLateral />
    <Routes>
    <Route path='*' element={<NotFound/>}></Route>
    <Route exact path='/' element={<Wrapper/>}></Route>
    <Route path='/totales' element={<ContentProducts/>} ></Route>
    <Route path='/ultimo' element={<UltimoProduct/>}></Route>
    <Route path='/categorias' element={<PanelCategorias/>}></Route>
    <Route path='/productos' element={<ProductsTable/>}></Route>
    </Routes>
    <Footer/>
    </React.Fragment>
  );
}

export default App;


/*<Router>
    <Header />
    <BarraLateral/>
    <Route path='/totales' component={ContentProducts} />
    <Route path='/ultimo' component={UltimoUser} />
    <Route path='/categorias' component={PanelCategorias} />
    <Route path='/productos' component={ProductsTable} />
    <Route  component={NotFound} />
    
    </Router>*/