import React from "react"; 
import 'bulma/css/bulma.min.css';
import eunice from '../img/team/eunice.png';
import sharon from '../img/team/sharon.png';
import songyu from '../img/team/songyu.jpg';
import tianyun from '../img/team/tianyun.png';
import yanjun from '../img/team/yanjun.png';
import yutian from '../img/team/yutian.png';

import {Notification, Heading, Content, Card, Media, Image, Columns, Column, Section, Container, Hero } from 'react-bulma-components';

function About(){
    return(
        <div className="about">  
            <Heading align="center">
                Meet our team!
            </Heading>
            <Container>
            <Columns>
                <Columns.Column>

                    <a href="https://www.linkedin.com/in/3888yey/" target='_blank'>
                        <Card style={{ width: 160, margin: 'auto' }}>
                        <Card.Image size={160} alt="60x60" src={eunice} align="center"/>
                        <Card.Content>
                        <Content align="center">
                            <strong> Eunice Yoo </strong>
                            <span style={{color: '#D16587'}}><br/>MBA</span>
                        </Content>
                        </Card.Content>
                        </Card>
                    </a>
                </Columns.Column>
                <Columns.Column>
                <a href="https://www.linkedin.com/in/sharonmaryli/" target='_blank'>
                    <Card style={{ width: 160, margin: 'auto' }}>
                    <Card.Image size={160} alt="60x60" src={sharon} align="center"/>
                    <Card.Content>
                    <Content align="center">
                        <strong> Sharon Li </strong>
                        <span style={{color: '#D16587'}}><br/>MBA</span>
                    </Content>
                    </Card.Content>
                    </Card>
                    </a>
                </Columns.Column>
                <Columns.Column>
                <a href="https://github.com/sonipapa" target='_blank'>
                    <Card style={{ width: 160, margin: 'auto' }}>
                    <Card.Image size={160} alt="60x60" src={songyu} align="center"/>
                    <Card.Content>
                    <Content align="center">
                        <strong> Songyu Du </strong>
                        <span style={{color: '#D16587'}}><br/>CM</span>
                    </Content>
                    </Card.Content>
                    </Card>
                </a>
                </Columns.Column>
                <Columns.Column>
                <a href="https://github.com/TianyunZ" target='_blank'>
                    <Card style={{ width: 160, margin: 'auto' }}>
                    <Card.Image size={160} alt="60x60" src={tianyun} align="center"/>
                    <Card.Content>
                    <Content align="center">
                        <strong> Tianyun Zou </strong>
                        <span style={{color: '#D16587'}}><br/>CM</span>
                    </Content>
                    </Card.Content>
                    </Card>
                </a>
                </Columns.Column>
                <Columns.Column>
                <a href="https://github.com/Kingfisherzh" target='_blank'>
                    <Card style={{ width: 160, margin: 'auto' }}>
                    <Card.Image size={160} alt="60x60" src={yanjun} align="center"/>
                    <Card.Content>
                    <Content align="center">
                        <strong> Yanjun Zhou </strong>
                        <span style={{color: '#D16587'}}><br/>CM</span>
                    </Content>
                    </Card.Content>
                    </Card>
                </a>
                </Columns.Column>
                <Columns.Column>
                <a href="https://www.linkedin.com/in/lexi-yutian-nan-6647311ab/" target='_blank'>
                    <Card style={{ width: 160, margin: 'auto' }}>
                    <Card.Image size={160} alt="60x60" src={yutian} align="center"/>
                    <Card.Content>
                    <Content align="center">
                        <strong> Yutian Nan </strong>
                        <span style={{color: '#D16587'}}><br/>ORIE</span>
                    </Content>
                    </Card.Content>
                    </Card>
                </a>
                </Columns.Column>
            </Columns>
            </Container>
            


      {/* <div class="columns">
            <div class="column">
                <img size={256} src={eunice} alt="60x60"/>
            </div>
            <div class="column">
                <img size={256} src={sharon} alt="60x60"/>
            </div>
            <div class="column">
                <img src={songyu}/>
            </div>
            <div class="column">
                <img src={tianyun}/>
            </div>
            <div class="column">
                <img src={yanjun}/>
            </div>
            <div class="column">
                <img src={yutian}/>
            </div>
        </div> */}
      </div>

    );
};

export default About;