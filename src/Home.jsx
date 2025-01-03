import '@fortawesome/fontawesome-free/css/all.min.css';
function Home(){
    return(
        <section id='home'>
            <div className="left">
                <h1 className='first'>Hi,</h1>
                <h2 className='second'
                >I' am <span>Krishna Mohan</span></h2>
                <h2 className='third'
                    >Web Designer</h2>
                <button className='contact' style={{
                    padding: "10px 20px", 
                    color: "#fff", 
                    border: "none", 
                    borderRadius: "5px", 
                    cursor: "pointer",

                }}>
                    <a href="#contactUs">Contact</a>
                </button>
                <div className="icons" style={{ marginTop: "20px", fontSize: "1.5rem" }}>
                    <a href="https://www.linkedin.com/in/krishna-mohan-2a2971259/" target="_blank"><i className="fab fa-linkedin-in" style={{ marginRight: "15px" }}></i></a>
                    <a href="https://github.com/Mohan5488" target="_blank"><i className="fa-brands fa-github" style={{ marginRight: "15px" }}></i></a>
                    <a href="https://www.instagram.com/krishna_5488_/?hl=en" target="_blank"><i className="fa-brands fa-instagram" style={{ marginRight: "15px" }}></i></a>
                    <a href="https://x.com/BudumuruMohan" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.facebook.com/krishna.budumuru.5" target="_blank"><i className='fa-brands fa-facebook'></i></a>
                </div>
            </div>
            <div className="right">
                <img src="src/assets/WhatsApp Image 2025-01-03 at 19.06.45.jpeg" alt="ProfilePhoto" />
            </div>
        </section>
    )
}
export default Home