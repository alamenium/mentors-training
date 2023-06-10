import React, { useState } from 'react';
import mailLogo from '../images/mail.png';
import certLogo from '../images/cert.png';
import foodLogo from '../images/food.png';
import updateSheetData from '../Utils/updateSheet';
import eyeLogo from '../images/eye.png';
import nerd from '../images/nerd.png';
import cool from '../images/cool.png';
import crazy from '../images/crazy.png';
import calm from '../images/nutreal.png';
import angry from '../images/angry.png';

const impressions = {
    nerd,
    cool,
    crazy,
    calm,
    angry
};

const UserPanel = ({ panelProps, focusHander }) => {
    const [subjectValue, setSubjectValue] = useState('');
    const [textValue, setTextValue] = useState('');
    const [gradeValue, setGradeValue] = useState('');
    const [foodValue, setFoodValue] = useState('');
    const [impValue, setImpValue] = useState('');
    const [show, setShow] = useState({
        email: false,
        grade: false,
        food: false,
        impression: false
    });
    const handleInputChange = (event) => {
        setSubjectValue(event.target.value);
    };

    const handleTextChange = (event) => {
        setTextValue(event.target.value);
    };

    const handleGradeChange = (event) => {
        setGradeValue(event.target.value);
    };

    const handleFoodChange = (event) => {
        setFoodValue(event.target.value);
    };

    const handleImpChange = (id) => {
        setImpValue((prevState) => (prevState === id ? '' : id));
        panelProps.impression = id;
        updateSheetData(panelProps.index, {
            impression: id
        });
    };

    const handleFoodSet = (event) => {
        updateSheetData(panelProps.index, {
            favouriteFood: foodValue
        });
    };

    const handleGradeSet = (event) => {
        updateSheetData(panelProps.index, {
            finalProjectGrade: gradeValue
        });
    };

    const postData = async () => {
        const url = 'http://localhost:3011/api/test-email/';
        const requestBody = {
            email: 'cruncogames@gmail.com',
            subject: 'hello',
            text: 'hi'
        };

        setTextValue('sex');

        const headers = {
            'Content-Type': 'application/json'
        };

        return fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Request failed with status ' + response.status);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Response:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const sendMailHandler = async () => {
        console.log('the');
        await postData();
    };

    const toggleContainer = (containerId) => {
        const container = document.getElementById(containerId);
        container.classList.toggle('hidden');
    };

    const flipShow=(id)=>{
        let tempShow = {...show};
        tempShow[id] = !tempShow[id]
        setShow(tempShow)
    }

    return (
        <>
            <h1>{panelProps.name}</h1>
            <div className="UserPanel">
                <div className="flex">
                    <img className="pfp" src={`https://picsum.photos/id/${panelProps.index}/200/`}/>
                    <hr className="line" />
                </div>

                <div className="actionPanel">
                    <div className="action" onClick={() => flipShow('0')}>
                        <img src={mailLogo} />
                        <p>Send Email</p>
                    </div>
                    {show[0] && <div className="actionContainer hidden" id="emailContainer">
                        <p>Email: </p>
                        <p id="email" className="hiddden">
                            {panelProps.email}
                        </p>
                        <input type="text" placeholder="subject" id="subject" value={subjectValue}
                               onChange={handleInputChange}/>
                        <textarea id="message" placeholder="message" value={textValue}
                                  onChange={handleTextChange}></textarea>
                        <br/>
                        <button onClick={postData}>Send Email</button>
                    </div>}
                    <hr className="line" />
                    <div className="action" onClick={() => flipShow('1')}>
                        <img src={certLogo} />
                        <p>Final Project Grade</p>
                    </div>
                    {show[1] && <div className="actionContainer hidden" id="certContainer">
                        <p>GRADE: </p>
                        <input type="text" id="grade" placeholder={panelProps.grade} value={gradeValue} onChange={handleGradeChange} />
                        <br />
                        <button onClick={handleGradeSet}>Set Grade</button>
                    </div>}
                    <hr className="line" />
                    <div className="action"  onClick={() => flipShow('2')}>
                        <img src={foodLogo} />
                        <p>Favourite Food</p>
                    </div>
                    {show[2] && <div className="actionContainer hidden" id="foodContainer">
                        <p>Food: </p>
                        <input type="text" id="food" placeholder={panelProps.food} value={foodValue} onChange={handleFoodChange} />
                        <br />
                        <button onClick={handleFoodSet}>Set Favourite Food</button>
                    </div>}
                    <hr className="line" />
                    <div className="action"  onClick={() => flipShow('3')}>
                        <img src={eyeLogo} />
                        <p>Impression</p>
                    </div>
                    {show[3] && <div className="actionContainer hidden" id="impContainer">
                        <div className="impressionView">
                            <p>Current: </p>
                            <img src={impressions[panelProps.impression.toLowerCase()]} />
                        </div>
                        <div className="flex">
                            {Object.keys(impressions).map((impression) => (
                                <button
                                    type="text"
                                    id={impression}
                                    value={impression}
                                    onClick={() => handleImpChange(impression)}
                                    key={impression}
                                >
                                    <img src={impressions[impression]} alt={impression} />
                                </button>
                            ))}
                        </div>
                    </div>}
                    <hr className="line" />
                    <div style={{backgroundColor: "rgba(0,255,0,0.7)"}} className="action">
                        <p onClick={focusHander}>&lt; Back</p>
                    </div>
                    <br />
                </div>
            </div>
        </>
    );
};

export default UserPanel;