import "./Education.css";
function Education(props){
    return(
        <div className="Education">
            <h2>
                Education 
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
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