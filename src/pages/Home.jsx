import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ListStudents from "../components/ListStudents";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // For keeping data we need to create state
  const [students, setStudents] = useState(null);

  // useEffect
  useEffect(() => {
    axios
      .get("http://localhost:3004/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        alert("Veri Cekerken bir hata olustu")
      });
  }, []);

  // validation
  if (students === null) {
    return null;
  }
  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-end my-2">
        <button
          onClick={() =>
            navigate("/add-student")
          }
          className="btn btn-primary"
        >
          Yeni Ogrenci Ekle
        </button>
      </div>
      <ListStudents students={students} setStudents={setStudents} />
    </div>
  );
};

export default Home;
