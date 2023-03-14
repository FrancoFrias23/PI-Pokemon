import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
// import SearchBar from "../SearchBar/SearchBar";

const NavBar = () =>{
    return(
        <div className={style.mainContainer}>
    
        <Link className={style.link} to="/home">HOME</Link>
        <div className={style.imgCont}> 
            <img src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon-500x313.png"   alt="" />
            </div> 
        <Link className={style.link} to="/create">CREATE</Link>
          
        </div>
    )
}
export default NavBar;