import React from "react"; 
import 'bulma/css/bulma.min.css';
import background1 from '../img/bigbackground.jpg';
import background2 from '../img/guys-phone.jpg';
import app from "../img/app.png"
import notebook from '../img/notebook.png';
import chat from '../img/chat.png';
import rating from '../img/rating.png';
import push1 from "../img/home/pushnotif.jpg";
import push2 from "../img/home/newsfeed.jpg";
import push3 from "../img/home/connect.jpg";

import { Link, Button, Section, Container, Hero } from 'react-bulma-components';
const figma = "https://www.figma.com/proto/8gDNaRc4vajT23yJlpTvj6/Untitled?node-id=16%3A5333&scaling=scale-down&page-id=0%3A1&starting-point-node-id=16%3A5333";
const Home = () => {
    return (
    
    <div className="Home">
      <div className="Main">
            <Section class="fullheight">
            <Hero size="large" id="has-bg-img">
            <img class='is-bg-img is-transparent' src={background1} alt='background1'/>
    
            <Hero.Body>
              <Container fluid breakpoint="widescreen">
                <div class="columns">
                  <div class="column is-8">
                 
                      <h1 class="title is-1">
                      Welcome to TCS Beyond
                      </h1>
                      <p>A User-contributed, Interactive bulletin board built on belief for TCS community.</p>
                      <p>Our greater futures begin here, together. </p>
                      <br/><br/>
                      <h2 class="title is-5">Build and Stay Connected with TCS Brand & Community. Be Proud.</h2>
                      <br/><br/>
                      <a href={figma} target='_blank'> 
                        <Button color="primary">
                          Try Now!
                        </Button>
                      </a>
                  </div>
                  <div class="column is-4">
                    <figure style={{width:'70%', height:"auto"}}>
                      <img src={app}></img>
                    </figure>
                  </div>
                </div>

              </Container>
              </Hero.Body>
              </Hero>
            </Section>
            
              <Section>
              <Container>
              <div class="has-text-centered title h1" >
                  <h1 >Features</h1>
                </div>
              <div class="columns has-text-centered">
                
                <div class="column is-4 is-centered">
                  <figure class="image is-256x256 is-inline-block">
                  <img src={push1}></img>
                  </figure>
                  <h2><strong>Push Notifications</strong></h2>
                  <p>Share photos and videos on Company-wide events</p>
                  </div>
                <div class="column is-4">
                  <figure class="image is-256x256 is-inline-block">
                    <img src={push2}></img>
                  </figure>
                  <h2><strong>News Feed</strong></h2>   
                  <p>Opt-in to become the first to know the news</p>             
                  </div>
                <div class="column is-4">
                <figure class="image is-256x256 is-inline-block">
                    <img src={push3}></img>
                  </figure>
                  <h2><strong>Meetup</strong></h2>
                  <p>Meet Locally for lunch-on mentorship or online</p>
                </div>

              </div>
                
              </Container>

            </Section>
          </div>
        </div>


    );
};



export default Home;