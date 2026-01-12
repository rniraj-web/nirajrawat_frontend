import React from "react";

const SignUp = () => {
  return (
    <div className="card signup-form shadow-sm w-100">
      <div className="card-body p-4 p-lg-2rem">
        <h2 className="h4 fw-bold mb-1">Sign up to SCWonline</h2>
        <p
          className="mb-4"
          style={{
            color: "#52525b",
            padding: "12px 0 12px 0",
            fontSize: "18px",
          }}
        >
          Please create your account
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="d-grid gap-3">
          <div className="form-floating signup-floating">
            <select
              className="form-select signup-control"
              name="title"
              id="title"
              defaultValue=""
            >
              <option value="" disabled>
                Select your title
              </option>
              <option value="">Mr</option>
              <option value="">Mrs</option>
              <option value="">Ms</option>
              <option value="">Other</option>
            </select>
            <label htmlFor="title">Title</label>
          </div>

          <div className="form-floating signup-floating">
            <input
              className="form-control signup-control"
              type="text"
              id="forename"
              name="forename"
              placeholder="Enter your Forename(s)"
            />
            <label htmlFor="Forename">Forename(s)</label>
          </div>

          <div className="form-floating signup-floating">
            <input
              className="form-control  signup-control"
              type="text"
              name="Enter your Surname"
              id="Enter your Surname"
              placeholder="Enter your Surname"
            />
            <label htmlFor="Surname">Surname</label>
          </div>

          <div className="form-floating signup-floating">
            <input
              className="form-control  signup-control"
              type="email"
              name="name"
              id="email"
              placeholder="Enter your email address"
            />
            <label htmlFor="Email address">Email Address</label>
          </div>

          <div className="form-floating signup-floating">
            <input
              className="form-control  signup-control"
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="Enter your mobile number"
            />
            <label htmlFor="mobile">Mobile telephone number</label>
          </div>

          <div className="form-floating signup-floating">
            <input
              className="form-control  signup-control"
              type="text"
              name="dob"
              id="dob"
              placeholder="DD / MM / YYYY"
            />
            <label htmlFor="dateofbirth">Date of birth</label>
          </div>

          <div className="form-floating signup-floating">
            <select
              className="form-select signup-control"
              name="language"
              id="language"
              defaultValue=""
            >
              <option value="" disabled>
                Select your preferred language
              </option>
              <option value="">English</option>
              <option value="">Cymraeg</option>
            </select>
            <label htmlFor="language">Preferred language</label>
          </div>

          <div className="form-floating signup-floating">
            <input
              className="form-control  signup-control"
              type="password"
              name="password"
              id="password"
              placeholder="••••••••••"
            />
            <label htmlFor="Password">Password</label>
          </div>

          <button className="btn submit btn-lg mt-2" type="submit">
            Sign up
          </button>

          <div className="text-center mt-2 login" style={{ fontSize: "18px" }}>
            <span>Already signed up?</span>
            <a href="" className="login-link">
              Login here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
