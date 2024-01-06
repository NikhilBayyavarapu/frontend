import React, { useState } from 'react';
import axios from 'axios';

const GetStudent = () => {
  // State to manage form fields

  const defaultData = {
    sid: ''
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
    if (parseInt(formData.sid) <= 0) {
        return false;
    }
    return true;
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!validateForm(formData)) {
      console.log(formData)
      window.alert("Form validation failed. Please enter student ID correctly.");
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
    window.location.href = '/getStudent'
    
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
          <button type="submit">Submit</button>
        </div>   
      </form>
    </div>
  );
};

export default GetStudent;