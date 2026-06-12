
import { useState } from 'react'
import Home from './Home'
function Addnewdoctor() {
  const [Name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [salary, setSalary] = useState('')
  let [newDoctor, setNewDoctor] = useState(null)
 function handleSubmit(e){
  e.preventDefault();

  let formdata = {
  name: Name,
  age,
  gender,
  specialization,
  salary,
  id: Date.now()
};
  setNewDoctor(formdata);
}
  return (
    <div>
        <h1 className="add-doctor-heading">Add New Doctor</h1>
        <form action="" className='form-container' onSubmit={handleSubmit}>
            <input value={Name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Doctor Name' className='text-feild'/>
            <input value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder='Enter Age' className='text-feild'/>
            
            <select value={gender} onChange={(e) => setGender(e.target.value)} name="" id="">
                <option>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input value={specialization} onChange={(e) => setSpecialization(e.target.value)} type="text" placeholder='Enter Doctor Specialization' className='text-feild'/>
            <input value={salary} onChange={(e) => setSalary(e.target.value)} type="text" placeholder='Enter salary' className='text-feild'/>
            <button type="submit">Add Doctor</button>
        </form>
        <Home newDoctor={newDoctor}  /> 
    </div>
  )
}

export default Addnewdoctor;