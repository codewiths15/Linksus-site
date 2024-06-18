import React from "react";
import "./../../../styles/Freelancer/ApplyTask/Apply.css";

function ApplicationForm() {
  return (
    <div className="application-form">
      <div className="description">
        <h2>Description</h2>
        <p>
          Stripe is looking for Social Media Marketing expert to help manage our
          online networks. You will be responsible for monitoring our social
          media channels, creating content, finding effective ways to engage the
          community and incentivize others to engage on our channels.
        </p>
      </div>
      <h2 className="form-title">Submit your application</h2>
      <p className="form-subtitle">
        The following is required and will only be shared with Nomad
      </p>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullName" className="label1">Full name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your fullname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="portfolioUrl" className="label1">Portfolio URL</label>
          <input
            type="url"
            id="portfolioUrl"
            name="portfolioUrl"
            placeholder="Link to your portfolio URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label1">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="previousWorks" className="label1">Previous Works/ Live Websites</label>
          <textarea
            id="previousWorks"
            name="previousWorks"
            placeholder="Add links to sites of your previous projects"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="label1">Phone number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="techStack" className="label1">Tech Stack</label>
          <input
            type="text"
            id="techStack"
            name="techStack"
            placeholder="What will be the tech stack you will use for the project"
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedinUrl" className="label1">LinkedIn URL</label>
          <input
            type="url"
            id="linkedinUrl"
            name="linkedinUrl"
            placeholder="Link to your LinkedIn URL"
          />
        </div>
        <div className="form-group noborder">
          <label htmlFor="certificates" className="label1">Attach your certificates</label>
          <input type="file" id="certificates" name="certificates"/>
        </div>
        <div className="form-group noborder">
          <label htmlFor="resume" className="label1">Attach your resume</label>
          <input type="file" id="resume" name="resume"/>
        </div>
      </div>
      <button type="submit" className="submit-button">
        Submit Application
      </button>
    </div>
  );
}

export default ApplicationForm;
