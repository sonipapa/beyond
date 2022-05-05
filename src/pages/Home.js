import React from "react"; 
import 'bulma/css/bulma.min.css';
import background1 from '../img/background1.jpeg';
import background2 from '../img/background2.svg';

import notebook from '../img/notebook.png';
import chat from '../img/chat.png';
import rating from '../img/rating.png';

import { Section, Container, Hero } from 'react-bulma-components';
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
                  <div class="column h1"> 
                 
                    <h1 class="title is-1">
                    Placeholder:
                    </h1>
                    <h1 class="title is-1">
                    Placeholder 
                    </h1>
                    <p>PlaceholderPlaceholderPlaceholder. </p>
                    </div>
                </div>
              </Container>
              </Hero.Body>
              </Hero>
            </Section>
            
              <Section>
              <Container>
              <div class="has-text-centered title h1" >
                  <h1 >Placeholder</h1>
                </div>
              <div class="columns has-text-centered">
                
                <div class="column is-4 is-centered">
                  <figure class="image is-64x64 is-inline-block">
                  <img src={notebook}></img>
                  </figure>
                  <h2>Placeholder</h2>
                  <p>PlaceholderPlaceholderPlaceholderPlaceholder.</p>
                  </div>
                <div class="column is-4">
                  <figure class="image is-64x64 is-inline-block">
                    <img src={chat}></img>
                  </figure>
                  <h2>Placeholder</h2>   
                  <p>PlaceholderPlaceholderPlaceholderPlaceholderPlaceholder. </p>             
                  </div>
                <div class="column is-4">
                <figure class="image is-64x64 is-inline-block">
                    <img src={rating}></img>
                  </figure>
                  <h2>Placeholder</h2>
                  <p>PlaceholderPlaceholderPlaceholderPlaceholderPlaceholder.</p>
                </div>

              </div>
                
              </Container>

            </Section>

            <Section>
              {/* <Hero size="fullheight">
              <Hero.Body> */}
                <Container breakpoint="widescreen" size="fullheight" class="primary-background">
                  <div class="columns">
                  <div class="column is-6">
                    <img src={background2} ></img>
                  </div>
                    <div class="column is-6 vertical-center">
                    <figure class="image is-64x64">
                    <img src={notebook}></img>
                    </figure>
                    
                    <h1 class="h1 title">PlaceholderPlaceholderPlaceholderPlaceholder.</h1>
                    <p>PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder.</p>  
                      </div>
              </div>
              </Container>
              {/* </Hero.Body>
              </Hero>  */}
            </Section>
          </div>
        </div>


    );
};



export default Home;