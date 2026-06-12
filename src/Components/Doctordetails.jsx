import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
function Doctordetails() {
  let { id } = useParams()
  let [doctor, setDoctor] = useState([])
  function fetchDoctor() {
    let data = [
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
    let doctor = data.find((val) => val.id ==(id))
    setDoctor(doctor)
  }
  useEffect(() => {
    fetchDoctor()
  }, [ ])
  return (
    <div>
      <h1>Doctor Details</h1>
      <h1>{doctor.name}</h1>
      <h2>{doctor.age}</h2>
      <h6>{doctor.gender}</h6>
      <h2>{doctor.specialization}</h2>
      <h2>{doctor.salary}</h2>
    </div>
  )
}

export default Doctordetails