import { useEffect, useState, useRef, useCallback } from 'react';
import './assets/style.css';
import './App.css';

function App() {
    const divRef = useRef(null);
    const [length, setLength] = useState(12);
    const [options, setOptions] = useState({
        uppercase: true,
        lowercase: false,
        numbers: false,
        symbols: false,
    });
    const [pass, setPass] = useState("");

    const generatePasswordFromChars = (length, allowedChars) => {
        return Array.from({ length }, () => {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            return allowedChars[randomIndex];
        }).join('');
    };

    useEffect(() => {
        const allowedChars = [
            options.uppercase ? "ABCDEFGHIJK" : "",
            options.lowercase ? "abcdefghijk" : "",
            options.numbers ? "1234567890" : "",
            options.symbols ? "{:>?}" : "",
        ].join('');

        // Default to uppercase if no options are selected
        const finalChars = allowedChars || "ABCDEFGHIJK";
        const newPass = generatePasswordFromChars(length, finalChars);
        setPass(newPass);

        if (divRef.current) {
            const leftFourChars = divRef.current.textContent.slice(0, 4);
            console.log(`Selected characters: ${leftFourChars}`);
        }
    }, [length, options]);

    const copyDivContent = async () => {
        if (divRef.current) {
            const textContent = divRef.current.textContent;
            try {
                await navigator.clipboard.writeText(textContent);
                alert('Text copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        }
    };

    const toggleOption = useCallback((option) => {
        setOptions(prev => ({ ...prev, [option]: !prev[option] }));
    }, []);

    return (
        <>
            <h1>Customize your password</h1>

            <div className="option-group">
                <div className="option-title">Password Length</div>
                <div className="length-display">{length}</div>
                <div className="slider-container">
                    <input
                        type="range"
                        min="4"
                        max="15"
                        value={length}
                        className="slider"
                        id="lengthSlider"
                        onChange={(e) => setLength(Number(e.target.value))}
                    />
                </div>
            </div>

            <div className="option-group">
                <div className="option-title">Include</div>
                <div className="checkbox-options">
                    {Object.keys(options).map(option => (
                        <div className="checkbox-option" key={option}>
                            <input
                                type="checkbox"
                                id={option}
                                checked={options[option]}
                                onChange={() => toggleOption(option)}
                            />
                            <label htmlFor={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="password-text" ref={divRef}>{pass}</div>
            <button id="copyPassword" onClick={copyDivContent}>Copy password</button>
        </>
    );
}

export default App;