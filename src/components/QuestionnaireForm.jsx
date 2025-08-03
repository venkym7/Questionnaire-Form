import React, { useState } from "react";
import { countries } from "./CountryList"; 

const QuestionnaireForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    age: "",
    location: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateAgeFromDOB = (dobStr) => {
    const [day, month, year] = dobStr.split("-").map(Number);
    const dobDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const m = today.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }
    return age;
  };

  const validate = () => {
    const errs = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required.";
    }

    if (!/^\d{2}-\d{2}-\d{4}$/.test(formData.dob)) {
      errs.dob = "DOB must be in DD-MM-YYYY format.";
    } else {
      const ageFromDOB = calculateAgeFromDOB(formData.dob);
      if (isNaN(ageFromDOB) || ageFromDOB < 0) {
        errs.dob = "Invalid DOB provided.";
      } else {
        if (!formData.age || isNaN(formData.age) || formData.age <= 0) {
          errs.age = "Age must be a positive number.";
        } else if (parseInt(formData.age) !== ageFromDOB) {
          errs.age = `Age should match DOB (Calculated age: ${ageFromDOB}).`;
        }
      }
    }

    if (!formData.location) {
      errs.location = "Please select a country.";
    }

    const country = countries.find((c) => c.name === formData.location);
    const expectedLength = country?.code === "+91" ? 12 : 13;
    if (!/^\d+$/.test(formData.mobile) || formData.mobile.length !== expectedLength) {
      errs.mobile = `Mobile number must be ${expectedLength} digits based on selected country.`;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submitClick = (data) => {
    const country = countries.find((c) => c.name === data.location);
    console.log("Submitted Form Data:");
    console.log("Full Name:", data.fullName);
    console.log("Date of Birth:", data.dob);
    console.log("Age:", data.age);
    console.log("Location:", data.location);
    console.log("Country Code:", country?.code || "-");
    console.log("Mobile:", data.mobile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setSubmittedData(formData);
      submitClick(formData);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-xl p-6 mt-10 border"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-black-800">
          Questionnaire Form
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* DOB */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Date of Birth (DD-MM-YYYY)</label>
          <input
            type="text"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.dob && (
            <p className="text-red-500 text-sm mt-1">{errors.dob}</p>
          )}
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age}</p>
          )}
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a country</option>
            {countries.map((c, i) => (
              <option key={i} value={c.name}>
                {c.name} ({c.code})
              </option>
            ))}
          </select>
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">{errors.location}</p>
          )}
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 mt-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="w-full max-w-md mt-6 bg-white p-4 shadow-md rounded-md border">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 text-center">Behind Work</h3>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>Location:</strong> {submittedData.location}</p>
          <p>
            <strong>Country Code:</strong>{" "}
            {countries.find((c) => c.name === submittedData.location)?.code || "-"}
          </p>
          <p><strong>Mobile:</strong> {submittedData.mobile}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionnaireForm;
