import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
  // State to manage form fields

  const defaultData = {
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
  }

  const [formData, setFormData] = useState(defaultData);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const validateForm = (formData) => {
    if (!formData.sid || !formData.fname || !formData.lname || !formData.parent || !formData.contact || !formData.acadyear || !formData.class || !formData.section || !formData.busfee || !formData.tutionfee || !formData.totalmonths ) {
        return false;
    }
    return true;
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!validateForm(formData)) {
      console.log(formData)
      window.alert("Form validation failed. Please enter all inputs correctly.");
      return;
    }

    try{
      let axiosConfig = {
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded',
        }
      };

      const data = new URLSearchParams()
      Object.entries(formData).forEach(([key,val])=>{
          data.append(key,val)
      })

      const response = await axios.post('http://localhost:8080/student',data,axiosConfig)
      console.log("Form submitted successfully: ",response.data)

    }catch(error){
        console.error("Error submitting form:",error.message)
    }

    setFormData(defaultData)
    window.location.href = '/addStudent'
    
  };

  return (
    <div>
      <h2>Student Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Student ID:
            <input type="text" name="sid"  onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            First Name:
            <input type="text" name="fname"  onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" name="lname"  onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Parent:
            <input type="text" name="parent"  onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Contact:
            <input type="text" name="contact" placeholder='Eg: 1234567890'  onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Academic Year:
            <input type="text" name="acadyear" placeholder='Eg: 2015-16' onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Class:
            <input type="text" name="class" placeholder='Eg: 1 No Roman Letters'  onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Section:
            <input type="text" name="section" placeholder='Eg: A,B,C'  onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Bus Fees:
            <input type="text" name="busfee" placeholder='Eg: 1500 or 1500.00 No Symbols'  onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Tution Fees:
            <input type="text" name="tutionfee"  onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Total Months:
            <input type="text" name="totalmonths"  onChange={handleInputChange} />
          </label>
        </div> 
        <div>
          <button type="submit">Submit</button>
        </div>   
      </form>
    </div>
  );
};

export default AddStudent;