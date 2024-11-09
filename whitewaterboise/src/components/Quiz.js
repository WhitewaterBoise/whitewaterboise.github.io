import React, { useState } from 'react';
import Question from './Question';
import PageNavBar from "./PageNavBar"
import PageFooter from './PageFooter';
import { Label, Radio } from "flowbite-react";
export default function Quiz() {

    const STEP = 33;
    const [QOne, setQOne] = useState(0);
    const [QTwo, setQTwo] = useState(0);
    const [QThree, setQThree] = useState(0);
    const [QFour, setQFour] = useState(0);
    const [QFive, setQFive] = useState(0);
    const [QSix, setQSix] = useState(0);
    const [QSeven, setQSeven] = useState(0);
    const [QEight, setQEight] = useState(0);
    const [QNine, setQNine] = useState(0);
    const [QTen, setQTen] = useState(0);
    const [QOneResponse, setQOneResponse] = useState("Not at all");
    const [QTwoResponse, setQTwoResponse] = useState("Not at all");
    const [QThreeResponse, setQThreeResponse] = useState("Not at all");
    const [QFourResponse, setQFourResponse] = useState("Not at all");
    const [QFiveResponse, setQFiveResponse] = useState("Not at all");
    const [QSixResponse, setQSixResponse] = useState("Not at all");
    const [QSevenResponse, setQSevenResponse] = useState("Not at all");
    const [QEightResponse, setQEightResponse] = useState("Not at all");
    const [QNineResponse, setQNineResponse] = useState("Not at all");
    const [QTenResponse, setQTenResponse] = useState("Not at all");

    // Function to handle slider change
    const handleSliderChange = (e, setFunction, setResponseFunction) => {
        setFunction(e.target.value);
        if (e.target.value < 25) {
            setResponseFunction("Not at all")
        } else if (e.target.value <= 50) {
            setResponseFunction("Several days")
        } else if (e.target.value <= 75) {
            setResponseFunction("More than half of the days")
        } else if (e.target.value <= 100) {
            setResponseFunction("Nearly everyday")
        }
    };

    const [score, setScore] = useState(0); // State for the total score
    const [comment, setComment] = useState("");
    // Function to calculate the total score
    const calculateScore = () => {
        const totalScore = Number(QOne) +
            Number(QTwo) +
            Number(QThree) +
            Number(QFour) +
            Number(QFive) +
            Number(QSix) +
            Number(QSeven) +
            Number(QEight) +
            Number(QNine) +
            Number(QTen);

        var adjustedScore = totalScore / STEP
        setScore(adjustedScore);
        if (adjustedScore > 20) {
            setComment("Severe Depression")
        } else if (adjustedScore > 15) {
            setComment("Moderately Severe Depression")
        } else if (adjustedScore > 10) {
            setComment("Depression")
        } else if (adjustedScore > 5) {
            setComment("Mild Depression")
        } else if (adjustedScore >= 1) {
            setComment("Minimal Depression")
        } else {
            setComment("No sign of depression. ")
        }
    };


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <><PageNavBar></PageNavBar>
            <div className="quiz-container" >
                <div className='flex flex-col h-screen my-auto items-center'>
                    <br />
                    <div>
                        <div style={{ textAlign: "center", maxWidth: "500px", margin: "0 auto" }} >
                            <h1 style={{ fontSize: "20px" }}><strong>Patient Health Self Accessment Questionnaire</strong></h1>
                            <br></br>


                            <div className='flex'>
                                <span> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"
                                    style={{ fill: "#228BE6", width: "19px", height: "19px" }}>
                                    <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                                </svg>
                                </span>
                                <span>
                                    <h2 style={{ fontSize: "15px", alignItems: "center" }}>This questionnaire is not to be considered a medical diagnosis. After completing your questionnaire, please contact us to determine what steps may be best for you.

                                        If you are experiencing a mental health crisis or are experiencing thoughts of self-harm, call the National Suicide Hotline at 800-273-TALK (8255). If you are experiencing a medical emergency, call 911 immediately.</h2>
                                </span>
                            </div>
                        </div>

                        <br />
                        <Question
                            label="1. Little interest or pleasure in doing things."
                            value={QOne}
                            onChange={(e) => handleSliderChange(e, setQOne, setQOneResponse)}
                            response={`${QOneResponse}`}
                            step={STEP}
                        />
                        <Question
                            label="2. Feeling down, depressed, or hopeless."
                            value={QTwo}
                            onChange={(e) => handleSliderChange(e, setQTwo, setQTwoResponse)}
                            response={`${QTwoResponse}`}
                            step={STEP}
                        />
                        <Question
                            label="3. Trouble falling or staying asleep, or sleeping too much."
                            value={QThree}
                            onChange={(e) => handleSliderChange(e, setQThree, setQThreeResponse)}
                            response={`${QThreeResponse}`}
                            step={STEP}
                        />

                        <Question
                            label="4. Feeling tired or having little energy."
                            value={QFour}
                            onChange={(e) => handleSliderChange(e, setQFour, setQFourResponse)}
                            response={`${QFourResponse}`}
                            step={STEP}
                        />

                        <Question
                            label="5. Poor appetite or overeating."
                            value={QFive}
                            onChange={(e) => handleSliderChange(e, setQFive, setQFiveResponse)}
                            response={`${QFiveResponse}`}
                            step={STEP}
                        />

                        <Question
                            label="6. Feeling bad about yourself – or that you are a failure or have let yourself or your family down."
                            value={QSix}
                            onChange={(e) => handleSliderChange(e, setQSix, setQSixResponse)}
                            response={`${QSixResponse}`}
                            step={STEP}
                        />

                        <Question
                            label="7. Trouble concentrating on things, such as reading
the newspaper or watching television."
                            value={QSeven}
                            onChange={(e) => handleSliderChange(e, setQSeven, setQSevenResponse)}
                            response={`${QSevenResponse}`}
                            step={STEP}
                        />

                        <Question
                            label="8. Moving or speaking so slowly that other people could
notice. Or the opposite – being so figety or restless that
you have been moving around a lot more than usual."
                            value={QEight}
                            onChange={(e) => handleSliderChange(e, setQEight, setQEightResponse)}
                            response={`${QEightResponse}`}
                            step={STEP}
                        />
                        <Question
                            label="9. Thoughts that you would be better off dead, or of
hurting yourself."
                            value={QNine}
                            onChange={(e) => handleSliderChange(e, setQNine, setQNineResponse)}
                            response={`${QNineResponse}`}
                            step={STEP}
                        />
                        <Question
                            label="10. If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?"
                            value={QTen}
                            onChange={(e) => handleSliderChange(e, setQTen, setQTenResponse)}
                            response={`${QTenResponse}`}
                            step={STEP}
                        />
                        <div style={{ textAlign: "center", maxWidth: "500px", margin: "0 auto" }}>
                            <fieldset className="">
                                <legend className="mb-4 text-lg">Would you be interested in learning about NeuroStar TMS, an FDA-cleared, non-drug treatment
                                    option that has been proven effective for people with depression?</legend>
                                <div className="">
                                    <Radio id="united-state" name="countries" value="USA" defaultChecked />
                                    <Label htmlFor="united-state">Yes</Label>
                                </div>
                                <div className="">
                                    <Radio id="germany" name="countries" value="Germany" />
                                    <Label htmlFor="germany">No</Label>
                                </div>

                            </fieldset>
                            {/* Submit button to calculate the total score */}
                            <button
                                onClick={calculateScore}
                                style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "black", color: "white", border: "none", borderRadius: "5px" }}>
                                Submit
                            </button>

                            {/* Display the score */}
                            {score !== null && (
                                <div style={{ marginTop: "20px" }}>
                                    <strong >Your Total Score: {score}</strong>
                                </div>
                            )}
                            {comment !== "" && (
                                <div style={{ marginTop: "5px" }}>
                                    <strong >Depression severity: {comment}</strong>
                                </div>
                            )}
                        </div>
                        <br></br>

                        <form className="contact-form" action="https://formsubmit.co/whitewaterboise@gmail.com" method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone:</label>
                                <input
                                    type="phone"
                                    id="phone"
                                    name="phone"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group" style={{ visibility: "hidden" }} hidden>
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            {/* <input type="hidden" name="_captcha" value="false" /> */}
                            <input type="text" name="_honey" style={{ display: 'none' }}></input>
                            <input type="hidden" name="_next" value="http://localhost:3000/" />
                            <div > <button className="submit-btn" type="submit">Send</button></div>
                            <div className='flex'>
                                <span> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"
                                    style={{ fill: "#228BE6", width: "19px", height: "19px" }}>
                                    <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                                </svg>
                                </span>
                                <span>
                                    <h2 style={{ fontSize: "12px", alignItems: "center" }}>Information will be stored in our official Gmail inbox. Information will not be shared with third-party services.</h2>
                                </span>
                            </div>
                        </form>
                        <br></br>
                    </div>
                    <PageFooter></PageFooter>
                </div>

            </div >
        </>
    );
}