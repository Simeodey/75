import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState('')

  useEffect(()=>{
    setText(localStorage.getItem('savedText'))
  },[])

  const handleChange = useCallback((e)=>{
    setText(e.target.value)
  },[])
  const handleClear = useCallback(()=>{
    setText('')
  },[])

  const onSave = ()=>{
    console.log(text)
    localStorage.setItem('savedText', text)
  }
  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea className="textarea is-large" placeholder="Notes..." onChange={handleChange} value = {text}/>
          </div>
        </div>
        <button className="button is-large is-primary is-active" onClick={onSave}>Save</button>
        <button className="button is-large" onClick = {handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
