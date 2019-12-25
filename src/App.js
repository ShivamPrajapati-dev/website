import React from 'react'
import Lottie from 'react-lottie';
import  animationData from './wave.json';
import logo from './nik.jpg';
import {Image, Header, Grid, Icon} from 'semantic-ui-react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import git from './github-logo.png';
import linkedin from './linkedin.png';
import resume from './resume.png';
import email from './email.png';
import pdf from './resume.pdf';
import Typing from 'react-typing-animation';



class App extends React.Component {
  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div fluid>
        <Lottie options={defaultOptions}
          height={200} />
        <Image className="img-fluid z-depth-3" alt="" src={logo} size='small' circular centered />
        <Header as='h1' textAlign='center'>
          <Header.Content><h3>Hello & Welcome</h3></Header.Content>
          <br />
          <Header.Content>
            <Typing hideCursor={false} speed={1}>
                <span>I Am Shivam Prajapati.</span>
              </Typing></Header.Content>
           <Header.Subheader>"Live life to the fullest..."</Header.Subheader>
        </Header>
        <div style={{
            marginTop:'100px'
          }} centered>
        <Grid centered>
        <Grid.Row centered>
          <Grid.Column>
            <a href={'https://github.com/ShivamPrajapati-dev'}>
            <Image className="img-fluid z-depth-2" circular src={git} size='mini'/>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a href={'https://www.linkedin.com/in/shivam-prajapati-b5bbb0190/'}>
              <Image className="img-fluid z-depth-2" circular src={linkedin} size='mini'/>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a href={pdf}>
            <Image className="img-fluid z-depth-2" circular src={resume} size='mini'/>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a href={'mailto:shivam_bt18@iiitkalyani.ac.in'}>
              <Image className="img-fluid z-depth-2" circular src={email} size='mini'/>
            </a>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>

      </div>

    );
  }
}

export default App;
