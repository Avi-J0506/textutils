import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleDownClick = ()=>{
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        // console.log("Lowercase was clicked");
        let newText = text.replace(text , '');
        setText(newText)
    }
    const handleTitleCase = ()=>{
        let newText = text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText)
    }
    const handleCopyText = ()=>{
      var text = document.getElementById('myBox')
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard","success")
    }
    var [vowel, setVowel] = useState(0);
    const handleVowel = ()=>{
      var v = 0;
      for(var i = 0; i<text.length; i++){
        switch (text[i]){
          case 'a':case 'i': case 'o':case 'u':case 'e':case 'A':case 'E': case 'I':case 'O':case 'U':
            v++
            break;
        }
      }
      setVowel(v);
    }
    const handleOnChange = (event)=>{
      // console.log("On Change");
      // console.log("hi");

      setText(event.target.value);
    }
    
    // const VowelCounter = ()=>{
    //   var m = text.match(/[aeiou]/gi);
    //   return m === null ? 0 : m.length;
    // }
    const [text, setText] = useState('Enter text here');
    // console.log(vowel);
    // const VowelCounter = () =>{
    // }
  return (
    <>
    <div className='container'  style = {{color: props.mode === 'light' ? 'black': 'white'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'light' ? 'white': '#13346e', color:props.mode === 'light' ? 'black': 'white'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-success mx-1 my-2" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-warning mx-2 my-2" onClick={handleDownClick}>Convert to Lower Case</button>
      <button className="btn btn-danger mx-1  my-1" onClick={handleClearClick}>Remove Text</button>
      <button className="btn btn-primary mx-1 my-1 " onClick={handleTitleCase}>Title Case</button>
      <button className="btn btn-primary mx-1 my-1 " onClick={handleCopyText}>Copy Text</button>
      <button className="btn btn-primary mx-1 my-1 " onClick={handleVowel}>Count Vowels</button>
    </div>
    <div className="container my-5" style = {{color: props.mode === 'light' ? 'black': 'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read </p>
      <p>Number of vowels in your text is:{vowel} </p>
      <h2>Preview</h2>
      <p>{text.length>0?text : "Preview your text here"}</p>
    </div>
    </>
  )
}
