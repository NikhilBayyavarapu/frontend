import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    sid: '',
    fname: '',
    lname: '',
    parent: '',
    contact: '',
    acadyear: '',
    class: '',
    section: '',
    busfee: '',
    tutionfee: '',
    totalmonths: '',
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic for form submission here

    try{
        const response = await axios.post('http://localhost:8080/add/student',formData)
        console.log("Form submitted successfully: ",response.data)

    }catch(error){
        console.error("Error submitting form:",error.message)
    }
    // You can add further processing or API calls here
  };

  return (
    <div>
      <h2>Student Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student ID:
          <input type="text" name="sid" value={formData.SID} onChange={handleInputChange} />
        </label>
        <label>
          First Name:
          <input type="text" name="fname" value={formData.Fname} onChange={handleInputChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lname" value={formData.Lname} onChange={handleInputChange} />
        </label>
        <label>
          Parent:
          <input type="text" name="parent" value={formData.Parent} onChange={handleInputChange} />
        </label>
        <label>
          Contact:
          <input type="text" name="contact" value={formData.Contact} onChange={handleInputChange} />
        </label>
        <label>
          Academic Year:
          <input type="text" name="acadyear" value={formData.Acadyear} onChange={handleInputChange} />
        </label>
        <label>
          Class:
          <input type="text" name="class" value={formData.Class} onChange={handleInputChange} />
        </label>
        <label>
          Section:
          <input type="text" name="section" value={formData.Section} onChange={handleInputChange} />
        </label>
        <label>
          Bus Fees:
          <input type="text" name="busfee" value={formData.Busfee} onChange={handleInputChange} />
        </label>
        <label>
          Tution Fees:
          <input type="text" name="tutionfee" value={formData.Tutuionfee} onChange={handleInputChange} />
        </label>
        <label>
          Total Months:
          <input type="text" name="totalmonths" value={formData.Totalmonths} onChange={handleInputChange} />
        </label>     
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStudent;