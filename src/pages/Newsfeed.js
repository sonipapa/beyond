import React, { useState, useEffect }  from "react";
import { Columns, Container, Card, Button } from 'react-bulma-components';
import { useNavigate } from "react-router-dom";
import meeting from '../img/meeting.jpg';
import marathon from '../img/marathon.png';
import { PopupWidget,InlineWidget,PopupButton, PopupModal } from "react-calendly";

import news1 from '../img/news/news1.png';
import news2 from '../img/news/news2.png';
import news3 from '../img/news/news3.png';
import news4 from '../img/news/news4.png';
import news5 from '../img/news/news5.png';
import news6 from '../img/news/news6.jpg';


const placeholder = "placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder";
const postLists = [
    {
        "category": "category",
        "title": "Giving back to Teachers who trusted ",
        "content": "Time to Run Together",
        "img": news1,
    },
    {
        "category": "category",
        "title": "Be the first Marathon-day journalist",
        "content": "upload what you’ve seen & experienced #NYC Marathon #Run with TCS #Love TCS Community",
        "img": news2,
    },
    {
        "category": "category",
        "title": "Never too late to overcome obesity & start running ",
        "content": "Read our consultants’ stories",
        "img": news3,
    },
    {
        "category": "category",
        "title": "TCS Brand Ambassadors ",
        "content": "Why they volunteer every year at TCS Marathon",
        "img": news4,
    },
];

const selectedPost = [
    {
        "category": "category",
        "title": "Run and Donate",
        "content": "Mexican TCS Employees’ stories",
        "img": news6,
    },
    {
        "category": "category",
        "title": "Where to take best photos & Eat durin",
        "content": "NYC Marathon (Employee Choices & why)",
        "img": news5,
    },
]

function Newsfeed({ isAuth }){
    let navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
          navigate("/login");
        }
      }, []);

    return(
        <div>
            <div class='primary-background news'>
            <Container>
                <p className="newsBar">
                
                    <span>FEATURED </span>
                    <span style={{color: '#f8eac1'}}>THIS WEEK</span>
                </p>
                <p className="newsHeader">New & Noteworthy</p>
                <Columns>
                <Columns.Column>
                {selectedPost.map((post) => {
                    return (
                        <Card class="box">
                        <img width="436" height="436" src={post.img}></img>
                        <p className="newsCate">{post.category}</p>
                        <p className="newsTitle">{post.title}</p>
                        <Columns>
                            <Columns.Column>
                            <p style={{height:'125px',overflow:"hidden"}}>{post.content}</p>
                            </Columns.Column>
                        </Columns>
                        </Card>
                    )
                    })}
                </Columns.Column>
                <Columns.Column>
                {postLists.map((post) => {
                    return (
                        <Card class="box">
                        
                        <Columns>
                        
                            <Columns.Column>
                            <img width="336" height="336" src={post.img}></img>
                            </Columns.Column>
                            <Columns.Column>
                            <p className="newsCate">{post.category}</p>
                            <p className="newsTitle">{post.title}</p>
                            <p style={{height:'75px',overflow:"hidden"}}>{post.content}</p>
                            </Columns.Column>
                        </Columns>
                        </Card>
                    )
                    })}
                </Columns.Column>
                
                </Columns>
            </Container>
            </div>
        </div>
    );
};

export default Newsfeed;