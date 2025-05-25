import image from "../assets/image.png"
import {Link , useNavigate} from "react-router-dom"
export const PageNotFound = () => {
    const navigate=useNavigate()

    const handileClick=()=>{
        console.log("Handile click function called")
        navigate("/login")
    }
  return (
    <div>
        <h1>PageNotFound</h1>
        <img className ="w-full" src ={image} alt="404"/>
        <button onClick={handileClick}>Login</button>

    </div>
  )
}
export default PageNotFound