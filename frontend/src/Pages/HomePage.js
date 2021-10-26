import "../Styles/HomePageStyles.css";
import Typist from "react-typist";
import { useState } from "react";
import { Card, Button, Row } from "react-bootstrap";

export default function HomePage() {
  const [typingStatus, setTypingStatus] = useState(0);

  function typingLoop() {
    typingStatus === 0 ? setTypingStatus(1) : setTypingStatus(0);
    console.log("Done");
  }

  return (
    <div>
      <h1 className="HomeHeader">SWEseek</h1>
      <Typist
        className="HomeSubHeader"
        key={typingStatus}
        onTypingDone={typingLoop}
      >
        <span>A Job Tracker</span>
        <Typist.Backspace count={7} delay={1200} />
        <span>Finder</span>
        <Typist.Backspace count={10} delay={1200} />
        <span>Salary Information Hub</span>
        <Typist.Backspace count={22} delay={1200} />
        <span>Learning Resource</span>
        <Typist.Backspace count={17} delay={1200} />
      </Typist>
      <h2 className="HomeMidHeader">What we do.</h2>
      <Row style={{justifyContent:`center`, gap:`5%`}}>
        <Card className="HomeCard" >
          <Card.Img className="HomeCardImg" src="./Assets/20945628.png" />
          <a href="https://www.freepik.com/vectors/calendar"></a>
          <Card.Body>
            <Card.Title>Job Tracking</Card.Title>
            <Card.Text>
              Track your job search and see stats with one easy tool. No features locked behind
              a paywall, no fees, no bs. 
            </Card.Text>
            <Button className="HomeCardButton">Start Tracking</Button>
          </Card.Body>
        </Card>
        <Card className="HomeCard" >
          <Card.Img className="HomeCardImg" src="./Assets/20943588.png" />
          <a href='https://www.freepik.com/vectors/poster'></a>
          <Card.Body>
            <Card.Title>Discover opportunities</Card.Title>
            <Card.Text>
              Search through a curated database of entry level and internship jobs specific to 
              your skillset that dont require "50 years profesional experience in x langauge"...
            </Card.Text>
            <Button className="HomeCardButton">Start Searching</Button>
          </Card.Body>
        </Card>
        <Card className="HomeCard" >
          <Card.Img className="HomeCardImg" src="./Assets/20943608.png" />
          <a href="https://www.freepik.com/vectors/business"></a>
          <Card.Body>
            <Card.Title>Salary Reports</Card.Title>
            <Card.Text>
              Key insights into what top tech companys are paying, aswell as the smaller ones.
              Salary information shouldnt be a secret, we are here to fix that.
            </Card.Text>
            <Button className="HomeCardButton">Find your worth</Button>
          </Card.Body>
        </Card>
        <Card className="HomeCard" >
          <Card.Img className="HomeCardImg" src="./Assets/5437683.png" />
          <a href="https://www.freepik.com/vectors/school"></a>
          <Card.Body>
            <Card.Title>Learning Resources</Card.Title>
            <Card.Text>
              Technical interviews are tough. We have organized the top learning resources and 
              practice questions to help you ace the coding interview. For Free.
            </Card.Text>
            <Button className="HomeCardButton">Hone your skills</Button>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}
