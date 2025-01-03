function Skills(){
    return(
        <>
        <div id="skills">
            <h1 className="h1" style={{textAlign : "center",
                            fontSize:"2rem",
                }}>Skills</h1>
            <div id="skills" className="skills">
                <div className="left">
                    <h1>Professional Skills</h1>
                    <p>
                        I am skilled in various web development and programming languages,
                        with expertise in designing and building modern applications.
                    </p>
                    <div className="skill">
                        <label><i className="fa-brands fa-html5"></i><b>HTML5</b></label>
                        <label> - 95%</label>
                        <div className="progress-bar">
                            <div className="progress" style={{width:"95%"}}></div>
                        </div>
                    </div>
                    <div className="skill">
                        <label><i className="fa-brands fa-css3-alt"></i><b>CSS</b></label>
                        <label> - 85%</label>
                        <div className="progress-bar">
                            <div className="progress" style={{width:"85%"}}></div>
                        </div>
                    </div>
                    <div className="skill">
                        <label><i className="fa-brands fa-square-js"></i><b>JAVASCRIPT</b></label>
                        <label> - 75%</label>
                        <div className="progress-bar">
                            <div className="progress" style={{width:"75%"}}></div>
                        </div>
                    </div>
                    <div className="skill">
                        <label><i className="fa-brands fa-react"></i><b>REACT</b></label>
                        <label> - 55%</label>
                        <div className="progress-bar">
                            <div className="progress" style={{width:"55%"}}></div>
                        </div>
                    </div>
                    <div className="skill">
                        <label><i className="fa-brands fa-python"></i><b>PYTHON</b></label>
                        <label> - 85%</label>
                        <div className="progress-bar">
                            <div className="progress" style={{width:"85%"}}></div>
                        </div>
                    </div>
                    {/* <div className="skill">
                        <label style={{marginLeft : "25px"}}>
                        <b>DJANGO</b></label>
                        <label> - 75%</label>
                        <div className="progress-bar">
                            <div className="progress" style={{width:"75%"}}></div>
                        </div>
                    </div> */}
                </div>
                <div className="right">
                    <img src="src/assets/work3.jpg" alt="" />
                </div>
            </div>
            </div>
        </>
    )
}
export default Skills