import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import DepartmentFilter from './DepartmentFilter';

function ProductList() {
    const [products, setProducts] = useState([]);
    

    useEffect(()=>{
        let url = 'http://127.0.0.1:8000/api/products/';
        
        axios.get(url)  
        .then(res=> {
            setProducts(res.data);
        })
        .catch(err => { 
            console.log(err);
        });
    }, []);
  return (
    <div>
      <h2>Product List</h2>
      <div>
        {products.map(product => (  
            <div className='card' key={product.id}>
                <h3>{product.name}</h3> 
                <p>{product.description}</p>
                <p>Price: ${product.retail_price}</p>   
                <p>Department: {product.department ? product.department.name : 'N/A'}</p>
                <Link to={`${product.id}`}>View Details</Link>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
