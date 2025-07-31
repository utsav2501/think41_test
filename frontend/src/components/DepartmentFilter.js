import React, { useEffect } from 'react'

function DepartmentFilter() {
    const [departments, setDepartments] = React.useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/departments/')
        .then(res => {
            setDepartments(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    },[]);
  return (
    <div>
      <select onChange={(e)=>onselect(e.target.value)}>
        <option value="">All Departments</option>
        {departments.map(department => (
          <option key={department.id} value={department.id}>
            {department.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DepartmentFilter
