import React from 'react'
import  animationData from './wave.json';
import logo from './0.jpeg';
import {Image, Header, Grid, Container} from 'semantic-ui-react';
import { VscGithubInverted } from 'react-icons/vsc';
import {IoLogoLinkedin} from 'react-icons/io';
import {IoIosDocument} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';
import {AiFillPhone} from 'react-icons/ai';
import {SiTwitter} from 'react-icons/si';
import {BsFillCircleFill} from 'react-icons/bs'
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
                
        <div className="head">
          <h1 className="head-text">
             <Typing hideCursor={false} speed={10}>
                <span>"Shivam Prajapati"</span>
              </Typing>
          </h1>
        </div>



        <Image style={{
            marginTop:'100px'
          }} src={logo} size='small' circular centered/>
        <Header as='h1' textAlign='center'centered>
          <Header.Content><h3>Hello & Welcome</h3></Header.Content>
          <br />
           
        </Header>
        <Container text textAlign='justified'>
            <p>
            I am an experienced Back End Developer with a demonstrated history of working in the education management industry. Skilled in Firebase, Java, Android Development, Node.js, and Algorithms. Strong engineering professional with a Bachelor of Technology - BTech focused in Computer Science from Indian Institute of Information Technology Kalyani, West Bengal. 
            </p>
        </Container>


        <div style={{
            marginTop:'50px'
          }}>
        <Grid centered>
        <Grid.Row centered>
        <Grid.Column style={{
            margin:'5px'
          }} >
            <a href={'https://www.linkedin.com/in/shivam-prajapati-b5bbb0190/'}>
              <IoLogoLinkedin size="2em" color="black" title="Linkedin"/>
            </a>
          </Grid.Column>
          <Grid.Column style={{
            margin:'5px'
          }} >
            <a href={'https://github.com/ShivamPrajapati-dev'}>
                <VscGithubInverted size ='2em' color="black" title="GitHub"/>            
            </a>
          </Grid.Column>
         
          <Grid.Column style={{
            margin:'5px'
          }} >
            <a href={pdf}>
            <IoIosDocument size="2em" color="black" title="Resume"/>
            </a>
          </Grid.Column>
          <Grid.Column style={{
            margin:'5px'
          }} >
            <a href={'mailto:shivam_bt18@iiitkalyani.ac.in'}>
              <MdEmail size="2em" color="black" title="Email"/>
            </a>
            </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className='foot'>
          
          <Grid >
            <Grid.Row className="grid">
              <Grid.Column className="grid">
                 <AiFillPhone color="white" size="1.5em"/>      
              </Grid.Column>
              <Grid.Column>
                <h5 className="text-foot">+918960507109</h5>
              </Grid.Column>
               
            </Grid.Row>
            <Grid.Row className="grid">
              <Grid.Column className="grid">
                <a href="https://twitter.com/ShivamP47856405">
                  <SiTwitter color="blue" size="1.7em"/>
                </a>
                      
              </Grid.Column>
              <Grid.Column className="grid">
                <a href="https://devfolio.co/@Shivamprajapati">
                  <BsFillCircleFill color="blue" size="1.7em"/>
                </a>
                 
              </Grid.Column>
            </Grid.Row>
        </Grid>
       
      </div> 
    </div>     
    </div>

    );
  }
}

export default App;
