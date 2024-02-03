import React from "react";

const ListStudents = (props) => {
  const { students } = props;
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
            students.map((student,index)=>(
                <tr key={student.id}>
                <th scope="row">{index+1}</th>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.surname}</td>
                <td>{student.studentClass}</td>
                <td>{student.schoolName}</td>
              </tr>
            ))
         }
      
     
      </tbody>
    </table>
    </div>
  );
};

export default ListStudents;
