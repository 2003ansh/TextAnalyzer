import React from 'react'
import './About.css'
// import TextForm from './TextForm';
export default function About(props) {


    return (

        <div className='container' >
            <h3 style={props.mode === 'dark' ? { color: 'white' } : { color: '#042743' }}>About Us</h3>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <b>About Text Analyzer Web App</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Welcome to the Text Analyzer Web App – your all-in-one solution for manipulating and analyzing text in various ways! Whether you need to convert text between different cases, perform ASCII conversions, capitalize initials, summarize content, extract keywords, or even transcribe speech into text, this versatile tool has got you covered. Best of all, it’s completely free to use!
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <b>Key Features:</b>  
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            
                                <ul>
                                    <li>Uppercase and Lowercase Conversion: Easily switch between uppercase and lowercase 
                                        letters to suit your formatting needs.</li>
                                    <li>ASCII Code Conversion: Convert characters to their corresponding ASCII codes and 
                                        vice versa, enabling you to work with both characters and their numeric 
                                        representations.</li>
                                    <li>Capitalize Initials: Automatically capitalize the first letter of each word to 
                                        enhance the appearance and professionalism of your text.</li>
                                    <li>Summarization: Condense lengthy text into concise summaries, making it easier to extract important information quickly.</li>
                                    <li>Keyword Extraction: Extract essential keywords from your text, facilitating content understanding and search engine optimization.</li>
                                    <li>Speech-to-Text Conversion: Effortlessly transcribe spoken words into written text, making it handy for note-taking, transcription, and more.</li>
                                </ul>



                          
                        </div>
                    </div>
                </div>
               
            </div>
            {/* <TextForm heading="Enter the text to" mode={props.mode} showAlert={props.showAlert}/> */}
        </div>
    )
}
