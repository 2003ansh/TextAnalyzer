import React, { useState, useEffect, useRef } from 'react';

function SpeechRecognitionComponent(props) {
    const [transcript, setTranscript] = useState('');
    const [listening, setListening] = useState(false);
    const recognitionRef = useRef(null);

    useEffect(() => {
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

            recognitionRef.current.onstart = () => {
                setListening(true);
            };

            recognitionRef.current.onresult = (event) => {
                const lastResult = event.results[event.results.length - 1];
                setTranscript(lastResult[0].transcript);
            };

            recognitionRef.current.onend = () => {
                setListening(false);
            };
        } else {
            console.error('Speech recognition is not supported in this browser.');
        }
    }, []);

    const startListening = () => {
        if (recognitionRef.current) {
            recognitionRef.current.start();
        }
    };

    const stopListening = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
    };
    let handlecopy = () => {
        navigator.clipboard.writeText(transcript);
        alert('Copied to clipboard');
    }

    return (
        <>
            <div className='container'>
                <h1 style={props.mode === 'dark' ? { color: 'white' } : { color: '#042743' }}>Speech To Text converter</h1>

                <button type='button' className='btn btn-dark ' onClick={startListening} disabled={listening}> Start Listening </button>
                <button type='button' className='btn btn-dark my-2 mx-3' onClick={stopListening} disabled={!listening}>Stop Listening</button>
                <button type='button' className='btn btn-dark  ' onClick={handlecopy} disabled={listening}>Copy to clipboard</button>
                <button type='button' className='btn btn-dark mx-3' onClick={() => setTranscript('')}>Reset Transcript</button>

                
            </div>
            <div className="container my-3 ">
                <div className="card" style={{background:"transparent",border:"2px solid white"}}>
                    <div className="card-body" style={props.mode === 'dark' ? { color: 'white' } : { color: 'black' }}>
                        <p className='fs-4'>Transcript: {transcript}</p>
                        <p>{transcript.split(/\s+/).filter(element => { return element.length !== 0 }).length} words and {""}
                            {transcript.split("").length} characters</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SpeechRecognitionComponent;
