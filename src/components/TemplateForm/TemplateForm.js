import React from 'react';
import "./TemplateForm.css"

const TemplateForm = props => (
    <div className=" templateForm z-depth-4"> 
        <form>
            <h5>Add a new message template:</h5>
            <p>To customize your template, use {'{'}greeting{'}'}, {'{'}guest{'}'}, {'{'}hotel{'}'}, and/or {'{'}room{'}'} as placeholders to add their corresponding values.</p>
            <div className="row">
                <div className="input-field col s12">
                <textarea 
                id="templateText" 
                className="materialize-textarea"
                onChange={props.handleInputChange}
                value={props.value}
                name="newTemplate"
                type="text">
                </textarea>
                <label htmlFor="templateText">Textarea</label>
                </div>
            </div>
        </form>
        <button onClick={props.save} className="btn waves-effect waves-light blue darken-4">Submit
            <i className="material-icons right">send</i>
        </button>
    </div>
);

export default TemplateForm;