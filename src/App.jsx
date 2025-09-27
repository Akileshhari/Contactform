import { useState } from 'react'


function App() {
   const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const allFilled = Object.values(formData).every((v) => v.trim() !== "");
    if (!allFilled) return;

    setSubmitted(true);
  };

  const handleBack = () => {
    setSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };


  return (
     <div className="app-container">
      <div className="card">
        <h2 className="title">Contact Form</h2>

        {!submitted && (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="row">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                pattern="[0-9]{10}"   
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="row">
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}

        {submitted && (
          <div className="modal-overlay">
            <div className="modal animate">
              <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#4CAF50" />
                  <path
                    d="M16 9L10.5 14.5L8 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                     />
              </svg>
              <h3 className='title'>Your form is submitted</h3>
              <button className="close-btn" onClick={handleBack}>
                Back to Form
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )

}

export default App
