import "./Mypages.css"
import {Route,Switch} from "react-router-dom";
import Info from "./Info";
import About from './About.js';
import Skill from './Skill.js';
import Education from './Education.js';
import Project from './Project.js';

function Mypages(props){
    return(
        <div  className="Mypages">
            <Info/>
            <Switch>
                <Route exact path='/' component ={About}/>
                <Route exact path='/Skill' component ={Skill}/>
                <Route exact path='/Education' component ={Education}/>
                <Route exact path='/Project' component ={Project}/>
            </Switch>
            
        </div>
    )
}

export default Mypages;