import React,{useState} from 'react'

export default function TextForm(props) { 
    // const handleUpClick=(event,text)=>{
    //     event.preventDefault();
    //     console.log("Uppercase was click");
    //     let NewText = text.toUpperCase();
        
    //     setText(NewText);
    //     // props.showAlert("Converted to Uppercase","success");
    //     //used to prevent reload page 
    // }
    const handleLoClick=(event)=>{
        event.preventDefault();
        console.log("Lowercase was click");
        let NewText = text.toLocaleLowerCase();
        setText(NewText);
        // props.showAlert("Converted to Lowercase","success");
        //used to prevent reload page 
    }
    const handleClearClick=(event)=>{
        event.preventDefault();
        console.log("Clear was click");
        let NewText = "";
        setText(NewText);
        //used to prevent reload page 
    }
    const handleCopyClick=(event)=>{
        event.preventDefault();
        console.log("Copy was click");
        let NewText = document.getElementById("myText");
        NewText.select();
        navigator.clipboard.writeText(NewText.value)
        // props.showAlert("Text Copied","success");
        //used to prevent reload page 
    }
    // const handleCapClick=(event)=>{
    //     event.preventDefault();
    //     console.log("Capitalize was click");
    //     // let NewText = text.toCapita();
    //     // let NewText = text.split(" ");
    //     props.showAlert("Text Copitalized","success");
    //     var NewText = text.toLowerCase().split(' ');
        
    //     for (let i = 0; i < NewText.length; i++) {
    //         NewText[i] = NewText[i][0].toUpperCase() + NewText[i].substring(1);
    //         // NewText[i] = NewText[i].charAt(0).toUpperCase() + NewText[i].substring(1);     
    //     }
        
    //     setText(NewText.join(" "));
    //     //used to prevent reload page 
    // }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const[text,setText] = useState('');
  return (
    <   >
    <div className="container" style = {{color :props.mode==='dark'?'white':'#525253'}}>
    <h3 style = {{color :props.mode==='dark'?'white':'#525253'}}>{props.heading}  </h3>
        <form >
    <div className="mb-3">
        <textarea type="text" id="myText" className="form-control" onChange={handleOnChange} value={text} row = "8" style = {{backgroundColor: props.mode==='dark'?'#525253':'white',
    color :props.mode==='dark'?'white':'grey'}} /> 
    </div>

    {/* <button  onClick={handleUpClick} className="btn btn-primary mx-1">UpperCase</button> */}
    <button  onClick={handleLoClick} className="btn btn-primary mx-1">LowerCase</button>
    {/* <button  onClick={handleCapClick} className="btn btn-primary mx-1">CapitalCase</button> */}
    <button  onClick={handleCopyClick} className="btn btn-primary mx-1">Copy Text</button>
    <button  onClick={handleClearClick} className="btn btn-primary mx-1">Clear Text</button>
    </form>
    <div className="container my-3">
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} Words and {text.length} Character</p>
    </div>
    </div>
    </>
  )
}
