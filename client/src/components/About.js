import Stack from 'react-bootstrap/Stack';
import NavBar from "./NavBar";

function About() {
  return (
    <div id="about">
        <NavBar />
        <header className="about">
            About ServiceSquad
        </header>
        <div className="container">
            <div className="left-div">
                <h2>Beginnings</h2>
                <p>ServiceSquad was first imagined in 2014 by 
                    two high school students. 
                    The two students were in pursuit of service 
                    opportunities to meet the requirements for the 
                    IB Diploma Programme’s CAS element 
                    (“community, activity, service"). As they 
                    searched for ways to serve their community, 
                    and met with folks from different organizations, 
                    they thought- what if we make it easier to connect 
                    those looking for service opportunities with those 
                    that are in need of volunteers? From there, ServiceSquad 
                    began to take shape. </p>
                <br></br>
                <h2>Today</h2>
                <p>ServiceSquad is now utilized by 143 different organizations 
                    nation wide, operates in 37 different localities, and 
                    has successfully connected 627 individuals with service 
                    opportunities in their neighborhoods. And, it is growing! 
                    ServiceSquad is a tool that can be used anywhere, and it 
                    provides the framework for organizations and volunteers to 
                    connect. </p>
            </div>
            <div className="right-div">
                <Stack gap={3}>
                    <h3 className="right-div-header">Impact</h3>
                    <div className="right-div-stack">627 Volunteers</div>
                    <div className="right-div-stack">143 Organizations</div>
                    <div className="right-div-stack">37 Communities</div>
                </Stack>
            </div>
        </div>
    </div>
    )
}

export default About;