import "./Navbar.css"
import {NavLink} from "react-router-dom";
function Navbar(props){
    return(
        <div  className={`Navbar ${props.toOn?"Navbar-on":""}`}>
            <NavLink className="Navbar-links" exact to ='/'><span className="Navbar-links-text">About</span></NavLink>
            <NavLink className="Navbar-links" exact to ='/Skill'><span className="Navbar-links-text">Skill</span></NavLink>
            <NavLink className="Navbar-links" exact to ='/Project'><span className="Navbar-links-text">Project</span></NavLink>
            <NavLink className="Navbar-links" exact to ='/Education'><span className="Navbar-links-text">Education</span></NavLink>
         
        </div>
    )
}
export default Navbar;