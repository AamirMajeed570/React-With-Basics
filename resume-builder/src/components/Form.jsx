import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import './Form.css';
const Form = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address: '',
        dob: '',
        city: '',
        state: '',
        country: '',
        graduation: '',
        accomplishments: '',
        university: '',
        summary: '',
    })
    const handleChange = (e) =>{
        const {name, value} = e.target;
        console.log(name, value);
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = () => {
        console.log('Form submitted');
        navigate('/resume',{state: formData});
    }
    return (
        <div className='container'>
            <div>
                <input type="text" name="fname" id="name" onChange={handleChange} placeholder="First Name" />
                <input type="text" name="lname" id="name" onChange={handleChange} placeholder="Last Name" />
                <input type="email" name="email" id="email" onChange={handleChange} placeholder="Email" />
            </div>
            <div>
                <input type="number" name="phone" id="phone" onChange={handleChange} placeholder="Phone" />
                <input type="text" name="address" id="address" onChange={handleChange} placeholder="Address" />
                <input type="date" name="dob" id="dob" onChange={handleChange} placeholder='Your Date of Birth'/>
            </div>
            <div>
                <input type="text" name="city" id="city" onChange={handleChange} placeholder='City'/>
                <input type="text" name="state" id="state" onChange={handleChange} placeholder='State'/>
                <input type="text" name="country" id="country" onChange={handleChange} placeholder='Country'/>
            </div>
            <div>
                <input type="number" name="graduation" id="graduation" onChange={handleChange} placeholder='Graduation Year'/>
                <input type="text" name="accomplishments" id="Accomplishments" onChange={handleChange} placeholder='Accomplishments'/>
                <input type="text" name="university" id="University" onChange={handleChange} placeholder='University'/>
            </div>
            <div>
                <textarea name="summary" id="summary" onChange={handleChange} placeholder='Summary'></textarea>
            </div>
            <div>
                <button onClick={handleSubmit}>Generate Resume  <i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default Form
