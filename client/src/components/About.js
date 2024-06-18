import Stack from 'react-bootstrap/Stack';

function About() {
  return (
    <div>
        <header className="about">
            About ServiceSquad
        </header>
        <div className="container">
            <div className="left-div">
                <h2>Beginnings</h2>
                <p>ServiceSquad was first founded in... </p>
                <br></br>
                <h2>Today</h2>
                <p>SeriveSquad now serves multiple communites...</p>
            </div>
            <div className="right-div">
                <Stack gap={3}>
                    <div className="p-2">Volunteers: 627</div>
                    <div className="p-2">Organizations: 143</div>
                    <div className="p-2">Communities: 37</div>
                </Stack>
            </div>
        </div>
    </div>
    )
}

export default About;