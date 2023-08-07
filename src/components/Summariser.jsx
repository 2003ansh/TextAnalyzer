import React, { useState } from 'react';

export default function Summariser(props) {
    let [Texts, setTexts] = useState('');
    let [summary, setsummary] = useState('');
    let [loader, setloader] = useState(false);

    let handleonchange = (e) => {
        setTexts(e.target.value);
    };

    let fetchdata = async (text) => {
        const url = 'https://gpt-summarization.p.rapidapi.com/summarize';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '9cd0ae6215msh8170a87a9c0a2b0p130fbejsnb75592365d0a',
                'X-RapidAPI-Host': 'gpt-summarization.p.rapidapi.com',
            },
            body: JSON.stringify({
                text: text,
                num_sentences: 5,
            }),
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            const data = await JSON.parse(result);
            setsummary(data.summary);
            setloader(false);
            console.log(Texts);
            console.log(data);
        } catch (error) {
            console.error(error);
            setsummary('Some error occured,Try again later');
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
        navigator.clipboard.writeText(summary);
        alert('Copied to clipboard');
    }
    let handleclear = () => {
        setTexts('');
        setsummary('');
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
                        style={props.mode === 'dark' ? { backgroundColor: 'transparent',color: 'white' } : { backgroundColor: '#042743', color: 'white', opacity: 0.5 }}
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
                <div className="card" style={{backgroundColor:"transparent",border:"2px solid white"}}>
                    <div className="card-body" style={props.mode === 'dark' ? { color: 'white' } : { color: '#042743' }}>
                        <h2>Your text Summary :</h2>
                        {loader && (<div className="spinner-border d-flex align-items-center justify-content-center text-warning disabled" style={{width:"6rem", height: "6rem"}} role="status">
                            {/* <span className="visually-hidden">Loading...</span> */}
                        </div>)}
                        <p className='fs-5'>{summary}</p>
                        <p>{summary.split(/\s+/).filter(element => { return element.length !== 0 }).length} words and {summary.split("").length} characters</p>
                    </div>
                </div>

            </div>
        </>
    );
}
