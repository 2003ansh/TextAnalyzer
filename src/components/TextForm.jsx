import React, { useState } from 'react'

export default function TextForm(props) {  //here props carry the value of heading from app.js.which is passed as a attribute in TextForm tag in app.js

  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', "Z", 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', "p", 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '|', ';', ':', '"', "'", '<', '>', '?', ',', '.', '/', '`', '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ']
  let code = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43, 45, 61, 123, 125, 91, 93, 124, 59, 58, 34, 39, 60, 62, 63, 44, 46, 47, 96, 126, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 32]
  let ascii = [];
  let char = [];
  for (let i = 0; i < alphabet.length; i++) {
    let a = alphabet[i]
    let b = code[i]
    let obj = { [a]: b }
    let obj1 = { [b]: a }
    ascii.push(obj)
    char.push(obj1)
  }
  // console.log(ascii)
  // console.log(char)
  //-----------------------------------------------------------------------------------------------------------------------------------------------
  let Asciitocharcode = (e) => {
    let newText = text.split(" ");
    // console.log(newText)
    let arr = []
    for (let i = 0; i < newText.length; i++) {
      for (let j = 0; j < char.length; j++) {


        if (newText[i] === Object.keys(char[j])[0]) {  // Object.keys(char[j])[0] is the key of the object. Object.Keys() is the predefine function in javascript which shows or return the keys of the object.so here we only one object at each index so we use [0] to get the key of the object. 


          arr.push(Object.values(char[j])[0]) // Object.values(char[j])[0] is the value of the object. Object.values() is the predefine function in javascript which shows or return the values of the object.so here we have only one object at each index so we use [0] to get the value of the object.
        }
      }

    }
    setText(arr.join(" "))
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  let ASCIICODE = (e) => {
    let newText = text.split("");
    // console.log(newText)
    let newtext = []
    for (let i = 0; i < newText.length; i++) {
      for (let j = 0; j < ascii.length; j++) {
        if (newText[i] === Object.keys(ascii[j])[0]) {  // Object.keys(ascii[j])[0] is the key of the object. Object.Keys() is the predefine function in javascript which shows or return the keys of the object.so here we only one object at each index so we use [0] to get the key of the object. 
          newtext.push(Object.values(ascii[j])[0]) // Object.values(ascii[j])[0] is the value of the object. Object.values() is the predefine function in javascript which shows or return the values of the object.so here we have only one object at each index so we use [0] to get the value of the object.
        }
      }
    }
    setText(newtext.join(" "))
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  let spacereducer = () => {
    let newText = text.split(/\s+/);
    // console.log(newText)
    setText(newText.join(" "))
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  const capsInitials = () => {
    let newText = text.split(" ");
    let newtext = [];
    if (newText.length === 0) {
      return;
    }
    for (let i = 0; i < newText.length; i++) {
      if (newText[i].length === 0) {
        newtext.push("");
      } else {
        newtext.push(newText[i][0].toUpperCase() + newText[i].slice(1));
      }
    }
    setText(newtext.join(" "));
  };
  
 
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  let copytext = () => {
    let text = document.getElementById("mybox");
    text.select();
    // console.log(text.value)
    if (text.value.length === 0) {
      alert("Nothing to copy");
      return;
    }
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    alert("Copied to clipboard");
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  const handleclicklowercase = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    // console.log(text);
  };
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  const handleclick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    // console.log(text);
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  const handleonchange = (e) => {
    // console.log(e.target.value);
    // console.log(text);
    setText(e.target.value)

  }
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  const clearText = () => {
    setText("");
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  const [text, setText] = useState('');
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  //-----------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <div className='container'>
        <h1 style={props.mode === 'dark' ? { color: 'white' } : { color: '#042743' }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8" placeholder='Type...' style={props.mode === 'dark' ? { backgroundColor: 'transparent',color: 'white' } : { backgroundColor: '#042743', color: 'white', opacity: 0.5 }}></textarea>
        </div>
        <button className="btn btn-dark mb-1" onClick={handleclick}>Convert to Uppercase</button>
        {/* onclick={function name should be there not this type name functionname()} */}
        <button className="btn btn-dark mb-1 mx-1 " onClick={handleclicklowercase}>Convert to Lowercase</button>
        <button className="btn btn-dark mx-0.8" onClick={ASCIICODE}>Char to ASCII</button>
        <button type="button" className="btn btn-dark mx-1" onClick={capsInitials}>Caps Initials</button>
        <button type="button" className="btn btn-dark" onClick={Asciitocharcode}>ASCII to Char</button>
        <button type="button" className="btn btn-dark my-1 mx-1" onClick={spacereducer} >Delete xtra space</button>
        <button type="button" className="btn btn-dark my-1 " onClick={copytext} >Copy Text</button>
        <button type="button" className="btn btn-dark mx-1" onClick={clearText}>Clear Textfield</button>

      </div>
      <div className="container my-3 ">
        <div className="card" style={{backgroundColor:"transparent",border:"2px solid white"}}>
          <div className="card-body" style={props.mode === 'dark' ? { color: 'white' } : { color: '#042743' }}>
            <h2>Your text Anylasis</h2>
            <p>{text.split(/\s+/).filter(element => { return element.length !== 0 }).length} words and {text.split("").length} characters</p>
            <p>{0.008 * text.split("").length} Minutes required to read</p>
            <h2>Preview :</h2>
            <p style={{ color: 'grey', fontSize: '1em' }}>{text.length > 0 ? text : "Nothing to show"}</p>
          </div>
        </div>

      </div>
    </>
  )
}