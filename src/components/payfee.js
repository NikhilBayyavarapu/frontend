import React, { useState } from 'react';
import axios from 'axios';

const PayFee = () => {
  // State to manage form fields

  const defaultData = {
    sid: '',
    busfee: '',
    tutionfee: '',
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
    if (!formData.sid || !formData.busfee || !formData.tutionfee) {
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

      const response = await axios.post('http://localhost:8080/pay/student',data,axiosConfig)
      console.log("Form submitted successfully: ",response.data)

    }catch(error){
        console.error("Error submitting form:",error.message)
    }

    setFormData(defaultData)
    window.location.href = '/payFee'
    
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
          <button type="submit">Submit</button>
        </div>   
      </form>
    </div>
  );
};

export default PayFee;