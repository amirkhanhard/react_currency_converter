import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  './assets/style.css'
import './App.css'

function App() {

    const divRef = useRef(null);
    const [length, setLength]  = useState(12);
    const [isUppercaseAllow, setUppercaseAllow] = useState(true);
    const [isLowercaseAllow, setLowercaseAllow] = useState(false);
    const [isNumberAllow, setNumberAllow] = useState(false);
    const [isSymbolAllow, setSymbolAllow] = useState(false);
    const [pass, setPass] = useState("");


    const generatePasswordFromChars = (length, allowedChars) => {
        let password = '';
        for (let i = 0; i < length; i++) {
            // Get a random index from the allowedChars string
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            // Add the character at that index to the password
            password += allowedChars[randomIndex];
        }
        return password;
    }
    useEffect(() => {
        let str="";
        if(isUppercaseAllow) {
            str += "ABCDEFGHIJK";
        }
        if(isLowercaseAllow) {
            str += "abcdefghijk";
        }
        if(isNumberAllow) {
            str += "1234567890";
        }
        if(isSymbolAllow) {
            str += "{:>?}";
        }
        if(str == "") {
            str += "ABCDEFGHIJK";
        }
        let pass = generatePasswordFromChars(length, str);
        setPass(pass);
        console.log(`outer`);
        if (divRef.current) {
            const textContent = divRef.current.textContent; // Get the text content of the div
            const leftFourChars = textContent.slice(0, 4); // Select the left 4 characters
            console.log(`Selected characters: ${leftFourChars}`);
        }

    }, [length, isUppercaseAllow, isLowercaseAllow, isNumberAllow, isSymbolAllow]);
    const copyDivContent = async () => {
        if (divRef.current) {
            const textContent = divRef.current.textContent; // Get the text content of the div
            try {
                await navigator.clipboard.writeText(textContent); // Copy text to clipboard
                alert('Text copied to clipboard!'); // Notify the user
            } catch (err) {
                console.error('Failed to copy: ', err); // Handle errors
            }
        }
    }
    const uppercaseAllow = (event)=> {setUppercaseAllow(!isUppercaseAllow)}
    const lowercaseAllow = (event)=> { setLowercaseAllow(!isLowercaseAllow)}
    const numberAllow = (event)=> { setNumberAllow(!isNumberAllow)}
    const symbolAllow = (event)=> { setSymbolAllow(!isSymbolAllow)}

return (
    <>
     <h1>Customize your password</h1>
    
    <div className="option-group">
        <div className="option-title">Password Length</div>
        <div className="length-display">{length}</div>
        <div className="slider-container">
            <input type="range" min="4" max="15" value={length} className="slider" id="lengthSlider" onChange={(e) => {setLength(e.target.value)}}/>
        </div>
    </div>
    
    <div className="option-group">
        <div className="option-title">Include</div>
        <div className="checkbox-options">
            <div className="checkbox-option">
                <input type="checkbox" id="uppercase" checked={isUppercaseAllow} onChange={uppercaseAllow}/>
                <label htmlFor="uppercase">Uppercase</label>
            </div>
            <div className="checkbox-option">
                <input type="checkbox" id="lowercase"  checked={isLowercaseAllow} onChange={lowercaseAllow} />
                <label htmlFor="lowercase">Lowercase</label>
            </div>
            <div className="checkbox-option">
                <input type="checkbox" id="numbers" checked={isNumberAllow} onChange={numberAllow}/>
                <label htmlFor="numbers">Numbers</label>
            </div>
            <div className="checkbox-option">
                <input type="checkbox" id="symbols" checked={isSymbolAllow} onChange={symbolAllow}/>
                <label htmlFor="symbols">Symbols</label>
            </div>
        </div>
    </div>
    <div className="password-text" ref={divRef}>{pass}</div>
    
    <button id="copyPassword" onClick={copyDivContent}>Copy password</button>
    
    
    </>
  )
}

export default App
