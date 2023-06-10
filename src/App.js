import './App.css';
import {useState} from "react";
import {marked} from "marked";
import {iniText} from "./iniText.js";
export default function App() {
const [message, setMessage] = useState(iniText);
  let val={__html: marked(message)};
  const handleChange = (event)=>setMessage(event.target.value);
  return (
    <main>
     <h1 id="hookline">Markdown Previewer</h1>
      <div className="flex-container">
     <textarea id="editor" className="little-boxes" type="text" onChange={handleChange}>{iniText}</textarea>
    <div id="preview" className="little-boxes"  dangerouslySetInnerHTML={val}/></div>
    </main>
  )
}
