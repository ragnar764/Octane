import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    // eslint-disable-next-line
const [file,setFile] = useState(null);
const types = ['image/png','image/jpeg', 'image/jpg'];
const[error,setError] = useState(null);
const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    if(selected && types.includes(selected.type)) {
        setFile(selected);
        setError('');
    } else {
        setFile(null);
        setError('Please select an image file (png, jpeg or jpg)');
    }
        
}

return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{}</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
}

export default UploadForm;