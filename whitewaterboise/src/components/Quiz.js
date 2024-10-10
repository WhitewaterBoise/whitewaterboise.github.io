import React, { useState } from 'react';
import Question from './Question';
import PageNavBar from "./PageNavBar"
import PageFooter from './PageFooter';
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
            setComment("Fuck off")
        }
    };
    return (
        <><PageNavBar></PageNavBar>
        <div className="quiz-container" >
            <div className='flex flex-col h-screen my-auto items-center'>
                <br />
                <div >
                    <h1 style={{ fontSize: "20px" }}><strong>Patient Health Questionnaire</strong></h1>
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
                            <strong >Result: {comment}</strong>
                        </div>
                    )}

                    <br></br>
                    <br></br>
                </div>
                <PageFooter></PageFooter>
            </div>
            
        </div>
       </>
    );
}