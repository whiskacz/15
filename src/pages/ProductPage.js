import React from "react";
import { Link } from "react-router-dom";
import Product from '../components/Product'
import { Params } from "react-router-dom";

const ProductPage =({match}) => {
 
 return(
   <>
    <h3>Strona produktów</h3>
    <Product id={match.params.id}/>
    <Link to="/products">Powrót do listy produktów</Link>
    </>
 )   
}

export default ProductPage