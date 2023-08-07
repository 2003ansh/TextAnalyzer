import React, { useState } from 'react';

export default function Keyword(props) {
    let [Texts, setTexts] = useState('');
    let [keywords, setkeywords] = useState([]);
    let [loader, setloader] = useState(false);

    let handleonchange = (e) => {
        setTexts(e.target.value);
    };

    let fetchdata = async (text) => {
        const url = 'https://keyword-extractor-api.p.rapidapi.com/text?count=50';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '9cd0ae6215msh8170a87a9c0a2b0p130fbejsnb75592365d0a',
                'X-RapidAPI-Host': 'keyword-extractor-api.p.rapidapi.com'
            },
            body: JSON.stringify({
                text: text,
            }),
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            const data = await JSON.parse(result);
            setkeywords(data.data);
            setloader(false);
            console.log(data);
            console.log(data.data);
        } catch (error) {
            console.error(error);
            setkeywords('Some error occured,Try again later');
        }
    };

    let handleclick = () => {
        if (Texts.length === 0) {
            alert('Please enter some text');
        } else {
            props.showAlert('Your text has been submitted,wait for 5sec for processing', 'success');
            fetchdata(Texts);
            setloader(true);
        }
    };
    let handlecopy = () => {
        navigator.clipboard.writeText(keywords);
        alert('Copied to clipboard');
    }
    let handleclear = () => {
        setTexts('');
        setkeywords([]);
    }

    return (
        <>
            <div className='container'>
                <h1 style={props.mode === 'dark' ? { color: 'white' } : { color: '#042743' }}>Enter your text</h1>
                <div className='mb-3'>
                    <textarea
                        className='form-control'
                        id='mybox'
                        value={Texts}
                        rows='8'
                        placeholder='Type...'
                        style={props.mode === 'dark' ? { backgroundColor: 'transparent',color:"white" } : { backgroundColor: '#042743', color: 'white', opacity: 0.5 }}
                        onChange={handleonchange}
                    ></textarea>
                </div>
                <div className='container d-flex align-items-center justify-content-center my-3'>
                    <button type='button' className='btn btn-dark' onClick={handleclick}>
                        Submit
                    </button>
                    <button type='button' className='btn btn-dark mx-3' onClick={handlecopy}>
                        Cpy to clipboard
                    </button>
                    <button type='button' className='btn btn-dark ' onClick={handleclear}>
                        Clear
                    </button>
                </div>
            </div>
            <div className="container my-3 ">
                <div className="card"style={{backgroundColor:"transparent",border:"2px solid white"}}>
                    <div className="card-body"style={props.mode === 'dark' ? { color: 'white' } : { color: '#042743' }}>
                        <h2>Your text keywords :</h2>
                        {loader && (<div className="spinner-border d-flex align-items-center justify-content-center text-warning disabled" style={{width:"6rem", height: "6rem"}} role="status">
                            {/* <span className="visually-hidden">Loading...</span> */}
                        </div>)}
                        <div className='container' style={{}}>
                        <ul>
                        {keywords.map((element, index) => {
                            
                            return <li key={index}>{element}</li>

                        })}
                        </ul>
                        </div>
                        
                        
                    </div>
                </div>

            </div>
        </>
    );
}
