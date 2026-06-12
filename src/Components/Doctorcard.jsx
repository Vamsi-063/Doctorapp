import { useNavigate } from "react-router-dom";
function Doctorcard(props) {
  let navigate = useNavigate()
  return (
    <div className="card">
        <div>
           <img src="https://cdn-icons-png.flaticon.com/512/387/387561.png" width="100"/>
        </div>
        <h2>{props.name}</h2>
        <p>{props.specialization}</p>
        <p>{props.gender}</p>
        <button onClick={() => navigate(`/doctor/${props.id}`)}>view details</button>
    </div>
  )
}
export default Doctorcard;

