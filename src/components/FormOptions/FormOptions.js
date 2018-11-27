import React from 'react';

//FormOption component to render an option for each guest and hotel in the selection forms
const FormOptions = props => (

    <option value={props.id}>{props.value}</option>

);

export default FormOptions;