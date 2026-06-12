import React, { useState, useEffect } from "react";
import Doctorcard from "./Doctorcard";

function Home({ newDoctor }) {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");

  function fetchdata() {
    const data = [
      {
        id: 1,
        name: "Teja",
        age: 26,
        gender: "Male",
        specialization: "Muscles",
        salary: 7000000,
      },
      {
        id: 2,
        name: "Sam",
        age: 26,
        gender: "Male",
        specialization: "Bones",
        salary: 4000000,
      },
      {
        id: 3,
        name: "Anu",
        age: 25,
        gender: "Female",
        specialization: "Heart",
        salary: 5000000,
      },
    ];

    setDoctors(data);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    if (newDoctor) {
      setDoctors((prev) => [...prev, newDoctor]);
    }
  }, [newDoctor]);

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesSpecialization =
      specialization === "" ||
      doctor.specialization === specialization;

    return matchesSearch && matchesSpecialization;
  });

  return (
    <div>
      <div className="filters">
        <input type="text" className="text-field" value={search} placeholder="Search Doctor" onChange={(e) => setSearch(e.target.value)}/>

        <select className="select-field" value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
          
          <option value="Muscles">Muscles</option>
          <option value="Bones">Bones</option>
          <option value="Heart">Heart</option>
        </select>
      </div>

      {filteredDoctors.length > 0 ? (
        <div className="doctorparent">
          {filteredDoctors.map((doctor) => (
            <Doctorcard
              key={doctor.id}
              name={doctor.name}
              gender={doctor.gender}
              specialization={doctor.specialization}
              id={doctor.id}
            />
          ))}
        </div>
      ) : (
        <h1>No Doctors Available</h1>
      )}
    </div>
  );
}

export default Home;