import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function DepartmentPage() {
    const {id} = useParams();
    const [products, setProducts] = React.useState([]);
    const [department, setDepartment] = React.useState(null);
    const [Loading, setLoading] = React.useState(true);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/departments/${id}/`)
        .then(res => {
            setDepartment(res.data);
        })  
        .catch(err => {
            console.log(err);
        });
    },[id])

    if(!department) {
        return <div>Loading...</div>;   
    }

  return (
    <div>
      <h2>department detail</h2>
      <span>{department.name}</span>
    </div>
  )
}

export default DepartmentPage
