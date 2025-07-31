import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import DepartmentFilter from './DepartmentFilter';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [departmentId, setDepartmentId] = useState('');

    useEffect(()=>{
        let url = 'http://127.0.0.1:8000/api/products/';
        if(departmentId) url+= `?department=${departmentId}`;
        axios.get(url)  
        .then(res=> {
            setProducts(res.data);
        })
        .catch(err => { 
            console.log(err);
        });
    }, [departmentId]);
  return (
    <div>
      <h2>Product List</h2>
      <DepartmentFilter setDepartmentId={setDepartmentId} />
      <div style={{display:'flex', flexWrap: 'wrap'}}>
        {products.map(product => (
          <div key={product.id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px'}}>
            <Link to={`/product/${product.id}`}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
