function Project(){
    return(
        <>
            <div id="project" className="project-container">
                <h2 className="project-title">My Projects</h2>
                <p className="project-description">
                    Here are a couple of projects I've worked on. One is an Electronic Health Record Management System (EHRMS), and the other is a bulk YouTube video downloader through a channel link.
                </p>
                <div className="project-list">
                    <div className="project-card">
                    <h3>EHRMS - Electronic Health Record Management System</h3>
                    <p>
                        A digital health record management system to help patients and doctors easily manage health information.
                    </p>
                    <a href="https://github.com/Mohan5488/Dbms_EHRMS_pbl" target="_blank">
                        Learn More
                    </a>
                    </div>
                    <div className="project-card">
                    <h3>Bulk YouTube Video Downloader</h3>
                    <p>
                        A tool that allows you to download all videos from a YouTube channel just by providing the channel link.
                    </p>
                    <a href="https://github.com/Mohan5488/youtube_videos_downloaders" target="_blank">
                        Learn More
                    </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Project