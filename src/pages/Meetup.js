import React, { useState, useEffect }  from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PopupWidget,InlineWidget,PopupButton, PopupModal } from "react-calendly";
import { Button,Columns, Container, Card, Section, Link} from 'react-bulma-components';

import john from '../img/meetup/john.jpg';
import christina from '../img/meetup/christina.jpg';
import gaurav from '../img/meetup/gaurav.jpg';

const personLists = [
    {
        "name": "John Doe",
        "title": "Senior Software Engineer",
        "location": "Amsterdam, Netherlands",
        "calendly": "https://calendly.com/beyondp1",
        "img": john,
    },
    {
        "name": "Christina Devley",
        "title": "Associate Investment Consultant",
        "location": "Los Angeles, USA",
        "calendly": "https://calendly.com/beyondp2",
        "img": christina,
    },
    {
        "name": "Gaurav Bhuwan",
        "title": "Head of Brand, Content and Creative",
        "location": "New York City, USA",
        "calendly": "https://calendly.com/beyondp3",
        "img": gaurav,
    },
];

function Meetup({isAuth}){
    let navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
          navigate("/login");
        }
      }, []);
    return(
        <div>
            <div className="news primary-background">
            <Section>
            <div className = "meetupHeader">
                <p className="newsHeader">Connect with other TCSers all around the world!</p>
            </div>
                {personLists.map((person) => {
                    return (
                        <Card class="box">
                        <Columns vCentered >
                        
                            <Columns.Column size='one-quarter'>
                            <figure class="image is-128x128">
                                <img class="is-rounded" src={person.img}></img>
                            </figure>
                            </Columns.Column>
                            <Columns.Column size='two-quarters'>
                            <p className="newsTitle">{person.name}</p>
    
                            <p className="newsCate">{person.title}</p>
                            <p>{person.location}</p>
                            
                            <br />
                            </Columns.Column>
                            <Columns.Column size='one-quarter'>
                            <PopupButton
                                    className="calendButton"
                                    url={person.calendly}
                                    rootElement={document.getElementById("root")}
                                    text="Click here to schedule!"
                            />
                            
                            </Columns.Column>
                        </Columns>
                        </Card>
                    )
                    })}

            </Section>
            </div>
        </div>

    );
};

export default Meetup;