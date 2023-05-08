import { useEffect, useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [role, setRole] = useState('')
  const [bio, setBio] = useState('');
  const [emailSignup, setEmailSignup] = useState(true);
  const [validationErrors, setValidationErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function validateEmail() {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (!email.match(validRegex)) {
      return false;
    } 

    return true;
  }

  function validatePhone() {
    const validRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (!phone.match(validRegex)) {
      return false;
    } 

    return true;
  }

  useEffect(() => {
    const errors = {};
    if (name.length <= 0) {
      errors.name = 'Please enter your Name';
    };

    if (!validateEmail()) {
      errors.email = 'Please provide a valid Email';
    };

    if(phone && !validatePhone()) {
      errors.phone = 'Please provide a valid phone number'
    }

    if(!phoneType && phone) {
      errors.phoneType = 'Please indicate the type of phone'
    }

    if (bio.length > 280) {
      errors.bio = 'Bio must not exceed 280 characters'
    }

    if(!phone) {
      setPhoneType('');
    }

    setValidationErrors(errors)
  }, [name, email, phoneType, phone, email, bio]);

  const onSubmit = e => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();

    setHasSubmitted(true);

    if(Object.keys(validationErrors).length > 0) {
      let errorAlert = 'The following errors were found:\n';
      for (const error in validationErrors) {
        errorAlert += `\n* ${validationErrors[error]}`;
      }
      return window.alert(errorAlert)
    }

    // Create a new object for the contact us information.
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      role,
      bio,
      emailSignup,
      submittedOn: new Date()
    };

    // Ideally, we'd persist this information to a database using a RESTful API.
    // For now, though, just log the contact us information to the console.
    console.log(contactUsInformation)

    // Reset the form state.
    setHasSubmitted(false)
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setRole('');
    setBio('');
    setEmailSignup(false);
  }

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className='error'>
          {hasSubmitted && validationErrors.name && `* ${validationErrors.name}`}
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='error'>
          {hasSubmitted && validationErrors.email && `* ${validationErrors.email}`}
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
            disabled={!phone}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div className='error'>
          {hasSubmitted && validationErrors.phone && `* ${validationErrors.phone}`}
        </div>
        <div className='error'>
          {hasSubmitted && validationErrors.phoneType && `* ${validationErrors.phoneType}`}
        </div>
        <div> Role: 
          <input
            onChange={e => setRole(e.target.value)}
            type='radio'
            value="instructor"
            name="role"
            checked={role === 'instructor'}
          />Instructor
          <input
            onChange={e => setRole(e.target.value)}
            type='radio'
            value="student"
            name="role"
            checked={role === 'student'}
          />Student
        </div>
        <div>
          <label htmlFor='bio'>Bio:</label>
          <textarea
            id='bio'
            name='bio'
            onChange={e => setBio(e.target.value)}
            value={bio}
          />
        </div>
        <div className='error'>
          {hasSubmitted && validationErrors.bio && `* ${validationErrors.bio}`}
        </div>
        <div>
          Sign up for emails!
          <input
            type='checkbox'
            name="emailSignup"
            checked={emailSignup}
            onChange={() => setEmailSignup(!emailSignup)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;