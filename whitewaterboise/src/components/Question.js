import React from 'react';
import { Label } from "flowbite-react";
const Question = ({ label, value, onChange, response ,step}) => {

    // Function to dynamically set the thumb color based on the value
    const getThumbColor = (value) => {
        const startColor = { r: 111, g: 227, b: 121 };

        const middleColor = { r: 245, g: 159, b: 10 };

        const endColor = { r: 242, g: 104, b: 99 };
        let r, g, b;
    
        if (value <= 50) {
            // Interpolate between startColor and middleColor for values between 0 and 50
            const ratio = value / 50;
            r = Math.round(startColor.r + (middleColor.r - startColor.r) * ratio);
            g = Math.round(startColor.g + (middleColor.g - startColor.g) * ratio);
            b = Math.round(startColor.b + (middleColor.b - startColor.b) * ratio);
        } else {
            // Interpolate between middleColor and endColor for values between 51 and 100
            const ratio = (value - 50) / 50;
            r = Math.round(middleColor.r + (endColor.r - middleColor.r) * ratio);
            g = Math.round(middleColor.g + (endColor.g - middleColor.g) * ratio);
            b = Math.round(middleColor.b + (endColor.b - middleColor.b) * ratio);
        }
        return `rgb(${r}, ${g}, ${b})`;
    };

    const getBackgroundColor = (value) => {
        const startColor = { r: 206, g: 243, b: 209 };
        const middleColor = { r: 245, g: 200, b: 122 };
        const endColor = { r: 243, g: 206, b: 206 };
        let r, g, b;
        if (value <= 50) {
            // Interpolate between startColor and middleColor for values between 0 and 50
            const ratio = value / 50;
            r = Math.round(startColor.r + (middleColor.r - startColor.r) * ratio);
            g = Math.round(startColor.g + (middleColor.g - startColor.g) * ratio);
            b = Math.round(startColor.b + (middleColor.b - startColor.b) * ratio);
        } else {
            // Interpolate between middleColor and endColor for values between 51 and 100
            const ratio = (value - 50) / 50;
            r = Math.round(middleColor.r + (endColor.r - middleColor.r) * ratio);
            g = Math.round(middleColor.g + (endColor.g - middleColor.g) * ratio);
            b = Math.round(middleColor.b + (endColor.b - middleColor.b) * ratio);
        }
    
        return `rgb(${r}, ${g}, ${b})`;
    };


    return (
        <>
        <hr style={{borderWidth:"2px", marginTop:"1em",margin:"0 2px 0 2em", borderImage: 'linear-gradient(to right,   #dfe8f7, #50eb7c, #ebbd50, #f52f7b, #dfe8f7) 2'}} />
        
        <div className="slider-container mb-2">
            
            <br></br>
            <Label className="text-lg" htmlFor="default-range" value={label} />
            <br/>
            <input
                type="range"
                min="0"
                max="100"
                step={step} 
                value={value}
                className="slider"
                onChange={onChange}
                style={{
                    "--SliderColor": getThumbColor(value), // Custom CSS variable for thumb color
                    "--SliderBackgroundColor": getBackgroundColor(value),

                }}
            />
            <p><strong>{response}</strong></p>
            <br/>
        </div></>
    );
};

export default Question;