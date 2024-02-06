import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const ListStudents = (props) => {

  const { students,setStudents } = props;

  
   // Delete process has done
   const handleDelete = (student) =>{
     
     axios.delete(`http://localhost:3004/students/${student.id}`)
     .then((response) =>{
          const filteredStudent = students.filter(item=>item.id !== student.id)
          setStudents(filteredStudent);
     })
     .catch((error)=>{
          alert("Silme Islemi esnasinda hata olustu")
     })
   }
  return (
    <div className="container my-1">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sira No</th>
            <th scope="col">Ogr. No</th>
            <th scope="col">Ad</th>
            <th scope="col">Soyad</th>
            <th scope="col">Sinifi</th>
            <th scope="col">Okul Adi</th>
          </tr>
        </thead>
        <tbody>
         {
          students.length === 0 ? (
            <tr>
              <td className="text-center" colSpan={7}>Henuz Kayitli bir Ogrenci Yoktur</td>
            </tr>
          ) : (
            <>
            {students.map((student, index) => (
              <tr key={student.id}>
                <th scope="row">{index + 1}</th>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.surname}</td>
                <td>{student.studentClass}</td>
                <td>{student.schoolName}</td>
                <td>
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button onClick={()=>handleDelete(student)} type="button" className="btn btn-sm btn-outline-danger">
                      Sil
                    </button>
                    <Link to={`/edit-student/${student.id}`} type="button" className="btn btn-sm btn-outline-primary">
                      Duzenle
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
            </>
          )
         }
        </tbody>
      </table>
    </div>
  );
};

export default ListStudents;
