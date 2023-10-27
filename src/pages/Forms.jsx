import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Forms() {
  const navigate = useNavigate();

  const data = { name: "", organization: "", number: "", textarea: "", date: "", choice: "" };

  const [inputData, setInputData] = useState(data);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  const handleData = (e) => {
    if (e.target.name === 'choice') {
      console.log('Selected Location:', e.target.options[e.target.selectedIndex].text);
    } else {
      setInputData({ ...inputData, [e.target.name]: e.target.value });
    }
  }

  const handleSubmit = () => {
    const errors = {};

    if (!inputData.name) {
      errors.name = 'Name is required';
    }

    if (!inputData.organization) {
      errors.organization = 'Organization is required';
    }

    if (!inputData.number) {
      errors.number = 'Contact Number is required';
    }

    if (!inputData.date) {
      errors.date = 'Date and Time of Visit is required';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // No errors, navigate to the next page
      navigate('/mainscreen');
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <Form className="p-4 rounded" style={{ backgroundColor: '#f8f9fa' }}>
        <Form.Select aria-label="Default select example" name='choice' className="mb-3" onChange={handleData}>
          <option>Location</option>
          <option value="1">Karachi</option>
          <option value="2">Islamabad</option>
          <option value="3">Muscat</option>
        </Form.Select>

        <Form.Group className="mb-3">
          <Form.Label><strong>Visitor Details</strong></Form.Label>
          <Form.Control type="text" placeholder="Visitor Name" name='name' className="mb-2" value={inputData.name} onChange={handleData} />
          {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
          
          <Form.Control type="datetime-local" placeholder="Date and Time of Visit" name='date' className="mb-2" value={inputData.date} onChange={handleData} />
          {formErrors.date && <div className="text-danger">{formErrors.date}</div>}
          
          <Form.Control type="text" placeholder="Organization" className="mb-2" name='organization' value={inputData.organization} onChange={handleData} />
          {formErrors.organization && <div className="text-danger">{formErrors.organization}</div>}
          
          <Form.Label>Purpose Of Visit</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Type a description (500 words max)" name='textarea' className="mb-2" value={inputData.textarea} onChange={handleData} />
          <Form.Control type="number" placeholder="Contact Number" name='number' value={inputData.number} onChange={handleData} />
          {formErrors.number && <div className="text-danger">{formErrors.number}</div>}
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Forms;
