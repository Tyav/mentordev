import React, { useState } from 'react';

//Helper Function
import {
  makeBold,
  makeItalic,
  strikeThrough,
  underLineText,
  justifyLeft,
  justifyCenter,
  justifyRight,
  undoChange,
  redoChange,
} from '../../helper/textEditor';

function IdpEditor() {
  const [plan, setPlan] = useState({
    moA: '',
    atO: '',
    acO: '',
    exR: '',
  });

  const createPlanHandler = e => {
    e.preventDefault();
    console.log(e.target.name);
  };

  return (
    <>
      <div className="main-eidtor-area">
        <p>IDP Editor</p>
        <input
          type="text"
          name="idpTitle"
          id="idpTitle"
          placeholder="Plan Title"
        />
        <div className="user-plan-section-button-area">
          <button onClick={createPlanHandler} name="moA">
            Method of Assesment
          </button>
          <button>Anticipated Outcome</button>
          <button>Acheived Outcome</button>
          <button>Expected Result</button>
        </div>
        <div className="editor-toolbar">
          {/**Come Back here to redesing form flow experiemce */}
          <button className="toobar-button" onClick={makeBold}>
            <i className="mdi mdi-format-bold"></i>
          </button>
          <button className="toobar-button" onClick={makeItalic}>
            <i className="mdi mdi-format-italic"></i>
          </button>
          <button className="toobar-button" onClick={underLineText}>
            <i className="mdi mdi-format-underline"></i>
          </button>
          <button className="toobar-button" onClick={justifyLeft}>
            <i className="mdi mdi-format-align-left"></i>
          </button>
          <button className="toobar-button" onClick={justifyCenter}>
            <i className="mdi mdi-format-align-justify"></i>
          </button>
          <button className="toobar-button" onClick={justifyRight}>
            <i className="mdi mdi-format-align-right"></i>
          </button>
          <button className="toobar-button" onClick={strikeThrough}>
            <i className="mdi mdi-format-strikethrough-variant"></i>
          </button>
          <button className="toobar-button" onClick={undoChange}>
            <i className="mdi mdi-undo"></i>
          </button>
          <button className="toobar-button" onClick={redoChange}>
            <i className="mdi mdi-redo"></i>
          </button>
          <button className="toobar-button" onClick={redoChange}>
            <i className="mdi mdi-code-tags"></i>
          </button>
        </div>
        <div
          className="user-development-plan-eidtor"
          contentEditable="true"
        ></div>
        <button className="idpSaveButton">
          <i className="mdi mdi-checkbox-marked-circle-outline"></i>&nbsp;Save
          Plan
        </button>
      </div>
    </>
  );
}

export default IdpEditor;
