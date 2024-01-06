import React, { useState } from 'react';


const TextForm = (props) => {
    const HandlerUpperCaseFunction = () => {
        // setText is used to set state which is coming by button click as text variable
        // which set new value in text
        let newText = text.toUpperCase();
        setText(newText);
    };
    const HandlerLowerCaseFunction = () => {
        // setText is used to set state which is coming by button click as text variable
        // which set new value in text
        let newText = text.toLowerCase();
        setText(newText);
    };
    const ClearText = () => {
        // setText is used to set state which is coming by button click as text variable
        // which set new value in text
        let newText = "";
        setText(newText);
    };
    const TitleCaseFunction = () => {
        // setText is used to set state which is coming by button click as text variable
        // which set new value in text
        const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

        let newText = toTitleCase(text);
        setText(newText);
    };
    const HandleonChange = (event) => {
        // onChange event handle the value present in event.target and then set is to setText
        // which set new value in text
        setText(event.target.value);

    };
    const CopyText=()=>{
        let text=document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const [text, setText] = useState('Enter here');
    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={HandleonChange}
                        id="myBox"
                        rows="5"
                    ></textarea>
                </div>
                <button type="button" onClick={HandlerUpperCaseFunction} className="btn btn-primary mx-2">Convert To UpperCase</button>
                <button type="button" onClick={HandlerLowerCaseFunction} className="btn btn-primary mx-2">Convert To LowerCase</button>
                <button type="button" onClick={TitleCaseFunction} className="btn btn-primary mx-2">Convert To TitleCase</button>
                <button type="button" onClick={ClearText} className="btn btn-primary mx-2">Clear Text</button>
                <button type="button" onClick={CopyText} className="btn btn-primary mx-2">Copy Text</button>

            </div>
            <div className='container my-3'>
                <h2>Text Summary</h2>
                <p>{text.split(' ').length} words {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>

    );
};

export default TextForm;
