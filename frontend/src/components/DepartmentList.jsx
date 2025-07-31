import React, { useEffect, useState } from 'react'

function DepartmentList() {
    // This component will fetch and display a list of departments
    const [departments, setDepartments] = useState([]);
    useEffect(()=>{
        let url = 'http://127.0.0.1:8000/api/departments/';
        
        axios.get(url)  
        .then(res=> {
            setDepartments(res.data);
        })
        .catch(err => { 
            console.log(err);
        });
    })
  return (
    <div>
      <h2>Departments</h2>
      <ul>
        {departments.map(dept => (
            <li><Link to={`/departments/${dept.id}`}></Link>
            <strong>{dept.name}</strong> - {dept.product_count} products
            </li>
        ))}
      </ul>
    </div>
  )
}

export default DepartmentList
