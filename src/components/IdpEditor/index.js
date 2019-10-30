import React, { useState, useRef } from 'react';
import axios from 'axios';

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
    title: '',
    goal: '',
    outcome: '',
    deadline: '',
  });

  const [formFieldIndex, setFormFieldIndex] = useState(0);
  const formFields = ['goal', 'outcome', 'deadline', 'submit'];

  const buttonText = [
    'Set Goal',
    'Set Anticipated Outcome',
    'Set Date',
    'Save Plan',
  ];

  const createPlanHandler = e => {
    e.preventDefault();
    const allLabels = [
      ...document.querySelectorAll('.user-plan-section-button-area label'),
    ];
    //Fix all this issues later
    try {
      allLabels[formFieldIndex].classList.add('done');
      allLabels[formFieldIndex + 1].classList.add('active');
      allLabels[formFieldIndex].innerHTML = '<i class="mdi mdi-check-all"></i>';
    } catch (error) {
      console.log(error);
    }
    setFormFieldIndex(formFieldIndex + 1);
    const text = document.getElementById('user-development-plan-eidtor')
      .innerHTML;
    setPlan({ ...plan, [e.target.name]: text });
    document.getElementById('user-development-plan-eidtor').innerHTML = '';
    if (e.target.name === 'submit') {
      setFormFieldIndex(0);
      console.log(plan);
      axios({
        method: 'POST',
        url: '',
        data: plan,
      });
    }
  };

  const handleTitleChange = e => {
    setPlan({ ...plan, [e.target.name]: e.target.value });
  };

  const IdpEditorCloseHandler = e => {
    e.preventDefault();
    const editor = document.querySelector('.editor-area');
    editor.classList.remove('show');
  };

  return (
    <>
      <div className="main-eidtor-area">
        <p>
          IDP Editor{' '}
          <img
            onClick={IdpEditorCloseHandler}
            src="/assets/img/cross.svg"
            alt="close"
          />
        </p>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Plan Title"
          onChange={handleTitleChange}
        />
        <div className="user-plan-section-button-area">
          <label className="active" htmlFor={formFields[0]}>
            1
          </label>
          <button name="moA" id={formFields[0]}>
            Your Goal
          </button>
          <label htmlFor={formFields[1]}>2</label>
          <button id={formFields[1]}>Anticipated Outcome</button>
          <label htmlFor={formFields[2]}>3</label>
          <button id={formFields[2]}>Expected Date of Completion</button>
        </div>
        <div className="editor-toolbar">
          {/**Come Back here to redesing form flow experiemce */}
          <label></label>
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
          id="user-development-plan-eidtor"
          contentEditable="true"
        ></div>
        <button
          className="idpSaveButton"
          onClick={createPlanHandler}
          name={formFields[formFieldIndex]}
        >
          {buttonText[formFieldIndex]}
        </button>
      </div>
    </>
  );
}

export default IdpEditor;
