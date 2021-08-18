import "./About.css"
function About(props){
    return(
        <div className="About">
            <h1 className="About-text"> 
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className=" About-text-icon bi bi-person-bounding-box" viewBox="0 0 16 16">
                            <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    </svg>
              </span>
                About Me 
            </h1>
            <p className="About-body">
                Hi, Everyone!!<br></br>
                This is <b>Aman Anand </b>, B.Tech 3rd Year student at Netaji Subhash Engineering College,
                Kolkata.<br></br>
                I am front-end Web Developer, Andriod Developer and a coder...
                <br></br>
                I like to read book and play cricket and chess .
                <br></br>
                 "We may encounter many defeats but we must not be defeated."
                 <br></br> is moto of my life


            </p>
        </div>
    )
}
export default About;