import React, { useState } from 'react';

const MulInputs = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: '',
    lastname: '',
    email: '',
    phoneno: '',
  });

  const [formValid, setFormValid] = useState(true);
  const [fieldStatus, setFieldStatus] = useState({
    username: true,
    lastname: true,
    email: true,
    phoneno: true,
  });
  
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
    setFieldStatus({ ...fieldStatus, [name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const isAnyFieldEmpty = Object.values(userRegistration).some((value) => value === '');

    if (isAnyFieldEmpty) {
      setFormValid(false);

      
      const updatedFieldStatus = {};
      for (const [key, value] of Object.entries(userRegistration)) {
        updatedFieldStatus[key] = value !== '';
      }
      setFieldStatus(updatedFieldStatus);
    } else {
      const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
      
      console.log(newRecord);
      setRegistrationStatus('Registration completed successfully.');
      setFormValid(true);
      setUserRegistration({ username: '', lastname: '', email: '', phoneno: '' });
    }
  };

  return (
    <>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">First Name</label>
          <input
            type="text"
            value={userRegistration.username}
            onChange={handleInput}
            name="username"
            id="username"
          />
          {!fieldStatus.username && (
            <p className="error-message">Fill this field.</p>
          )}
        </div>

        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            value={userRegistration.lastname}
            onChange={handleInput}
            name="lastname"
            id="lastname"
          />
          {!fieldStatus.lastname && (
            <p className="error-message">Fill this field.</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={userRegistration.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
          {!fieldStatus.email && (
            <p className="error-message">Fill this field.</p>
          )}
        </div>

        <div>
          <label htmlFor="phoneno">Phone Number</label>
          <input
            type="text"
            value={userRegistration.phoneno}
            onChange={handleInput}
            name="phoneno"
            id="phoneno"
          />
          {!fieldStatus.phoneno && (
            <p className="error-message">Fill this field.</p>
          )}
        </div>

        <button type="submit">Registration</button>
        {!formValid && <p className="error-message">{registrationStatus}</p>}
        {formValid && registrationStatus && (
          <p className="success-message">{registrationStatus}</p>
        )}
      </form>
    </>
  );
};

export default MulInputs;
