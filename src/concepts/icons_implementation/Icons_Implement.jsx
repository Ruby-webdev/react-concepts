import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiSpacex } from "react-icons/si";
import sundari from "../../assets/sundari.jpg"
import VIDEO from "../../assets/v1.mp4"

const Icons_Implement=()=>{
   return(
     <div>
        <h1><SiSpacex size={100} color="red" fill="green"/></h1>
        <h1><FaHome size={100} fill="red"/></h1>
        <h1><GiHamburgerMenu size={100} fill='blue'/></h1>

        <img src={sundari} alt="" width={300} /><br />
        <video src={VIDEO} width={500}></video>

        </div>
   )
}



export default Icons_Implement