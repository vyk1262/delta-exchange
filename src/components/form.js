import React from 'react';
import './form.css'

function Form() {
  return (
    <div>
        <form className="form">
            <label>Name</label>
                <input type='text'></input>
            <label>Company</label>
                <input type='text'></input>
            <label>Status</label>
                <input type='text'></input>
            <label>Notes</label>
                <input type='text'></input>
        </form>
    </div>
  );
}

export default Form;
