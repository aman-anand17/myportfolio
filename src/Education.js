import "./Education.css";
function Education(props){
    return(
        <div className="Education">
            <h2>
                Education 
            </h2>
            <div className="Education-Details">
                <div className="Education-Details-List">
                    <p className="Education-Details-List-Title">10th</p>
                    <ul className="Education-Details-List-Ul">
                        <li>CBSE</li>
                        <li>St. Karen's High School</li>
                        <li>Patna,Bihar</li>
                    </ul>

                </div>
                <div className="Education-Details-List">
                <p className="Education-Details-List-Title">12th</p>
                    <ul className="Education-Details-List-Ul">
                        <li>CBSE</li>
                        <li>St. Karen's High School</li>
                        <li>Patna,Bihar</li>
                    </ul>

                </div>
                <div className="Education-Details-List">
                <p className="Education-Details-List-Title">B.Tech</p>
                    <ul className="Education-Details-List-Ul">
                        <li>Information Technology</li>
                        <li>3rd Year</li>
                        <li>Netaji Subhash Engineering College</li>
                        <li>Kolkata, West Bengal</li>
                    </ul>

                </div>

            </div>
            
        </div>
    )
}
export default Education;