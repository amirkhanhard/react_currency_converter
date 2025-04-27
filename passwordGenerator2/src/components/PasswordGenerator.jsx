import { useEffect, useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numberValue, setNumberValue] = useState(true);
  const [specialCharacter, setSpecialCharacter] = useState(true);

  const generatePasswordFromChars = (length, allowedChars) => {
    let generatePassword = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        generatePassword += allowedChars[randomIndex];
    }
    return generatePassword;
  }
  const arrangeString = () => {
    let char = "";
    char += uppercase?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"";
    char += lowercase?"abcdefghijklmnopqrstuvwxyz":"";
    char += numberValue?"1234567890":"";
    char += specialCharacter?"!@#$%^&*()_+":"";
    char += char == ""?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"";
    let pass = generatePasswordFromChars(length, char);
    setPassword(pass);
  }
  useEffect(()=> {
    arrangeString();
  },[length, uppercase, lowercase, numberValue, specialCharacter])

  const handleSubmit = (e) => {
    e.preventDefault();
    arrangeString()
  }

  const copyDivContent = async () => {
    if (password) {
        const textContent = password;
        try {
            await navigator.clipboard.writeText(textContent);
            alert('Text copied to clipboard! = '+password);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div>
        <div>{length}</div>
        <input
            style={{width: "50%"}}
            min="4"
            max="20"
            className="slider"
            id="lengthSlider"
            type="range"
            name="length"
            value={length}
            onChange={(e)=> {setLength(e.target.value)}}
        />
        <div>
          <div>
            <input
                type="checkbox"
                name="uppercase"
                checked={uppercase} onChange={() => setUppercase(!uppercase) }></input> 
                Uppercase ( ABC ... XYZ )
          </div>
          <div>
            <input
                  type="checkbox"
                  name="lowercase"
                  checked={lowercase} onChange={() => setLowercase(!lowercase) }></input> 
                  Lowercase ( abc ... xyz )
          </div>
          <div>
            <input
                type="checkbox"
                name="numberValue"
                checked={numberValue} onChange={() => setNumberValue(!numberValue) }></input> 
                Number ( 123 ... 890 )
          </div>
          <div>
            <input
                type="checkbox"
                name="specialCharacter"
                checked={specialCharacter} onChange={() => setSpecialCharacter(!specialCharacter) }></input> 
                Special character( !@#$% )
          </div>
          <div style={
            {
              display:"flex",
              justifyContent:"center"
            }
            }>
            <div
              style={
                {
                  color:"white",
                  backgroundColor:"black",
                  padding:"5px 10px",
                  marginTop:"5px",
                  width:"300px"
                }
              }
              >
              {password}
            </div>
            <button
            type="button"
            name="copy"
            onClick={copyDivContent}
            style={
              {
                color:"white",
                backgroundColor:"blue",
                padding:"5px 10px",
                marginTop:"5px",
                borderRadius:"3px",
                marginLeft:"5px"
              }
            }>
              Copy
          </button>
          </div>
          <button
            type="submit"
            name="generatePassword"
            style={
              {
                color:"white",
                backgroundColor:"blue",
                padding:"5px 10px",
                marginTop:"5px",
                borderRadius:"3px"
              }
            }>
              Generate Password
          </button>
        </div>
    </div>
    </form>
    </>
  );
}
