import "./Skill.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Skill(props){
    return(
        <div className="Skill">
            <h2 className="Skill-h2">
                Skills
            </h2>
            <div className="Skill-types">
            <CircularProgressbar strokeWidth="6" className="Skill-types-bar" value={66} text="CSS" />
            </div>
            <div className="Skill-types">
            <CircularProgressbar strokeWidth="6" className="Skill-types-bar" value={75} text="HTML" />

            </div>
            <div className="Skill-types">
            <CircularProgressbar strokeWidth="6" className="Skill-types-bar" value={80} text="JS" />

            </div>
            <div className="Skill-types">
            <CircularProgressbar strokeWidth="6" className="Skill-types-bar" value={85} text="REACT" />

            </div>
            <div className="Skill-types">
            <CircularProgressbar strokeWidth="6" className="Skill-types-bar" value={83} text="PYTHON" />

            </div>
            <div className="Skill-types">
            <CircularProgressbar strokeWidth="6" className="Skill-types-bar" value={89} text="C/C++" />

            </div>

        </div>
    )
}
export default Skill;