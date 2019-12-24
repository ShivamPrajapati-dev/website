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
          <Header.Content>Shivam Prajapati</Header.Content>
           <Header.Subheader>Live life to the fullest...</Header.Subheader>
        </Header>
        <div style={{
            marginTop:'100px'
          }} centered>
        <Grid centered>
        <Grid.Row centered>
          <Grid.Column>
            <a>
            <Image className="img-fluid z-depth-2" circular src={git} size='mini'/>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a>
              <Image className="img-fluid z-depth-2" circular src={linkedin} size='mini'/>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a>
            <Image className="img-fluid z-depth-2" circular src={resume} size='mini'/>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a>
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
