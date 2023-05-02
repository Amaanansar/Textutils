// import React from 'react'
import React, {useState} from 'react'


// eslint-disable-next-line
export default function(props) {

    const handeleOC = (event) => {
        setText(event.target.value)
    }

    const uPPerCase = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to UpperCase", "success")
    }
    
    const toLowerC = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to LowerCase", "success")
    }
    
    const RemSpa = () => {
        setText(text.replaceAll(" ", ""))
        props.showAlert("Extra Space is removed", "success")
    }
    
    const handelFirstCap = () => {
        var textWeGot = text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(textWeGot)
        navigator.clipboard.writeText(textWeGot)
        props.showAlert("First Character is Now Capital", "success")
    }
    
    const clearText = () => {
        setText('')
    }
    const handelExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert("Extra Space is removed", "success")
    }

    const [text,setText] = useState("")
    
    return (
        <>
    <div className='container' style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
    <h1 className='my-4'>Try TextUtils - word counter, character counter, remove extra spaces</h1>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea style={{background:props.mode === 'dark' ? '#13466e' : 'white',color:props.mode === "dark" ? 'white' : '#13466e'}} className="form-control" value={text} placeholder="Enter Text" onChange={handeleOC} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={uPPerCase}>Convert to UpperCase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={toLowerC}>Convert to LowerCase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={clearText}>Clear</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={RemSpa}>Remove Space</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handelFirstCap}>First Char Capital</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handelExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark' ? 'white':'black'}}>
        <h1>Text Summary</h1>
        <p>Total words : {text.split(/\s+/).filter(Boolean).length} , Total characters : {text.length}</p>
        <p>Average Reading Time is {text.length > 0 ? (0.008 * text.split(" ").filter(Boolean).length) : "0"} Minutes</p>
        <h2 className='my-3'>Preview</h2>
        <p>{text.length>0 ? text : "Please Enter something to preview."}</p>
    </div>
    </>
  )
}
