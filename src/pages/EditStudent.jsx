// 1. with useParams we are reading id in the url
// 2. we are pulling the student datas
// 3. Datas are setted in the realtions state
// 4. Relations states are printed on the screen with the setted situations
// 5. We are getting the editted data from the form
// 6. Finally after the user pressing the edit button we are going to do enrollment 

import React from 'react'
import Header from '../components/Header'
import { useParams,useNavigate } from 'react-router-dom'
import  axios  from 'axios';
import { useEffect,useState } from 'react';


const EditStudent = () => {
    // for reading id in the URL we need to use useParams hook and then with distraction 
    const {studentId} = useParams()
    const navigate = useNavigate();
    // we must to create a state to control the student data that we pulled from the data
    const [editStudent, setEditStudent] = useState(null)
     // to control input we need to create states
    const [studentNo, setStudentNo] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [schoolName, setSchoolName] = useState("");
    
    useEffect(() => {
      axios.get(`http://localhost:3004/students/${studentId}`)
      .then((response)=>{
        console.log(response.data);
        // will edit student
        setEditStudent(response.data)
        // to pull initial value of student data on our table we need to perform this process
        setStudentNo(response.data.studentNo)
        setName(response.data.name)
        setSurname(response.data.surname)
        setStudentClass(response.data.studentClass)
        setSchoolName(response.data.schoolName)
      })
      .catch((error)=>{
        console.log(error)
        alert("Ogrenci verilerini cekerken bir hata olustu")
        //after error, we want to return home page so we are using navigate
        navigate("/")
      })
    
    }, [])

    // handleEdit function is written here
    const handleEdit=(e)=>{
      e.preventDefault();

      //validation
    if (
      studentNo === "" ||
      name === "" ||
      surname === "" ||
      studentClass === "" ||
      schoolName === ""
    ) {
        alert("Bütün Alanları Doldurmak Zorunludur.")
        return
  }
       const updatedStudent = {
        id: editStudent.id, // we dont need to edit the id, id must be the same so we took the id in the edit state
        studentNo: studentNo,
        name: name,
        surname:surname,
        studentClass:studentClass,
        schoolName:schoolName
       }
       axios.put(`http://localhost:3004/students/${editStudent.id}`, updatedStudent)
       .then((res)=>{
           navigate("/") // we want to return homepage if the edit process is successful
         
       })
       .catch((err)=>{
        alert("Guncelleme islemi esnasinda bir hata olustu")
       })
    }

    // validation
    if(editStudent === null){
      return null;
    }
    
  return (
    <div>
        <Header />
        <div className="container my-5
      ">
        <form onSubmit={handleEdit}>
          <div class="mb-3">
            <label htmlFor="studentNo" class="form-label">
              Ogrenci Numarasi
            </label>
            <input
              type="text"
              className="form-control"
              id="studentNo"
              placeholder="Or:100"
              value={studentNo}
              onChange={(event) => setStudentNo(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Öğrenci Adı
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Ör: Ahmet"
              value={name}
              onChange={(event) => setName(event.target.value)}
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="surname" className="form-label">
              Öğrenci Soyadı
            </label>
            <input
              type="text"
              className="form-control"
              id="surname"
              placeholder="Ör: Kılıç"
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="studentClass" className="form-label">
              Öğrenci Sınıfı
            </label>
            <input
              type="text"
              className="form-control"
              id="studentClass"
              placeholder="Ör: 5/B"
              value={studentClass}
              onChange={(event) => setStudentClass(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="schoolName" className="form-label">
              Okul Adı
            </label>
            <input
              type="text"
              className="form-control"
              id="schoolName"
              placeholder="Ör: Cumhuriyet İ.Ö.O."
              value={schoolName}
              onChange={(event) => setSchoolName(event.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center my-5">
            <button type="submit" className="btn btn-outline-primary w-50">
              Duzenle
            </button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default EditStudent
