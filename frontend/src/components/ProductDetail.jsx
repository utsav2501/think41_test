import React, { useEffect } from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useState } from 'react';

function ProductDetail() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);   

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/products/${id}/`)
        .then(res => {
            setProduct(res.data);
        })  
        .catch(err => {
            console.log(err);
        });
    }, [id]);

    if(!product) {
        return <div>Loading...</div>;   
    }
  return (
    <div>
        <h2>{product.name}</h2>
        <p>Category:{product.category}</p>
        <p>{product.description}</p>
        <p>Price: ${product.cost}</p>  
        <p>inventory:{product.inventory}</p>
        <p>Added:{newDate(product.created_at).toDateString()}</p>
        
      
    </div>
  )
}

export default ProductDetail
