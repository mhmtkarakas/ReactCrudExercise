import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'


const EditStudent = () => {
    const params = useParams()
    console.log(params);
  return (
    <div>
        <Header />
        <h1>Edit Student</h1>
      
    </div>
  )
}

export default EditStudent
