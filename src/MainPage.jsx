function MainPage(){
    const list = ['Home', 'About', 'Services','Skills', 'Project','Contact Us'];
    const index = ['#home', '#about','#services', '#skills', '#project','#contactUs']
    const listMap = list.map((l,i) => <li><a href={index[i]}>{l}</a></li>)
    return(
        <nav>
            <h2 className="logo">Krishna Mohan</h2>
            <ul className="nav-items">
                {listMap}
            </ul>
        </nav>
    )
}

export default MainPage