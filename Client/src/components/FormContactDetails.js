import React from 'react'

import ReactSVG from 'react-svg';
require('../library/MorphSVGPlugin')
const tickAnimation =  require('../images/tickAnimation.svg')


const FormContactDetails = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const {elements} = event.target;
    const {email, phone, person} = elements;
    console.log(email.value,phone.value, person.value);

  }

  return (
    <div className="form-inputs">
      <label>Email:
        <input
          className="contactDetails"
          onChange={props.handleChange}
          name="email"
          type="email"
          />
      </label>
      &nbsp;
      <label>Phone Number:
        <input
          className="contactDetails"
          autoComplete="tel"
          onChange={props.handleChange}  name="phoneNumber" type="text"/>
      </label>
      &nbsp;

      <label>Point of contact:
        <input
          className="contactDetails"
          onChange={props.handleChange} name="pointOfContact" type="text"/>
      </label>
      &nbsp;
  </div>
  )
}

export default FormContactDetails
