import "./Navbar.css"
import {NavLink} from "react-router-dom";
function Navbar(props){
    function handlechange(){
        let x = window.matchMedia("(max-width: 600px)")
        if (x.matches) { 
            setTimeout(()=>{
                props.setIs(false)  
            },500)
          }
        
    }
    return(
        <div  className={`Navbar ${props.toOn?"Navbar-on":""}`}>
            <NavLink onClick={handlechange} className="Navbar-links" exact to ='/'><span className="Navbar-links-text">About</span></NavLink>
            <NavLink onClick={handlechange} className="Navbar-links" exact to ='/Skill'><span className="Navbar-links-text">Skill</span></NavLink>
            <NavLink onClick={handlechange} className="Navbar-links" exact to ='/Project'><span className="Navbar-links-text">Project</span></NavLink>
            <NavLink onClick={handlechange} className="Navbar-links" exact to ='/Education'><span className="Navbar-links-text">Education</span></NavLink>
         
        </div>
    )
}
export default Navbar;