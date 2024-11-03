import React, { useState } from "react";

const Form = (props) => {
  const { field, targetedOrganisation, yoe, ryoe, onSubmit } = props;

  // State variables for field validations
  const [fieldValue, setFieldValue] = useState("");
  const [organisationValue, setOrganisationValue] = useState("");
  const [yoeValue, setYoeValue] = useState("");
  const [ryoeValue, setRYoeValue] = useState("");

  const [isFieldEmpty, setIsFieldEmpty] = useState(false);
  const [isOrganisationEmpty, setIsOrganisationEmpty] = useState(false);
  const [isYoeEmpty, setIsYoeEmpty] = useState(false);
  const [isRYoeEmpty, setIsRYoeEmpty] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track form submission

  const handleFieldChange = (e) => {
    const value = e.target.value;
    setFieldValue(value);
    setIsFieldEmpty(value === "");
    field(value); // Assuming this function handles the field value in parent component
  };

  const handleOrganisationChange = (e) => {
    const value = e.target.value;
    setOrganisationValue(value);
    setIsOrganisationEmpty(value === "");
    targetedOrganisation(value); // Assuming this function handles the organisation value in parent component
  };

  const handleYoeChange = (e) => {
    const value = e.target.value;
    setYoeValue(value);
    setIsYoeEmpty(value === "");
    yoe(value); // Assuming this function handles the years of experience in parent component
  };

  const handleRYoeChange = (e) => {
    const value = e.target.value;
    setRYoeValue(value);
    setIsRYoeEmpty(value === "");
    ryoe(value); // Assuming this function handles the required years of experience in parent component
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true); // Mark form as submitted

    // Perform validation before submitting
    const fieldEmpty = fieldValue === "";
    const organisationEmpty = organisationValue === "";
    const yoeEmpty = yoeValue === "";
    const ryoeEmpty = ryoeValue === "";

    setIsFieldEmpty(fieldEmpty);
    setIsOrganisationEmpty(organisationEmpty);
    setIsYoeEmpty(yoeEmpty);
    setIsRYoeEmpty(ryoeEmpty);

    if (fieldEmpty || organisationEmpty || yoeEmpty || ryoeEmpty) {
      console.log("Please fill in all required fields.");
      return; // Stop submission if any field is empty
    }

    // Call onSubmit if all validations pass
    onSubmit();
  };

  return (
    <div className="">
      <form className="space-y-3 p-2" onSubmit={handleSubmit}>
        {/* Field */}
        <div className="flex items-center space-x-4">
          <label
            htmlFor="field"
            className="w-1/3 text-sm font-medium text-gray-700 text-right"
          >
            Field*
          </label>
          <input
            type="text"
            id="field"
            value={fieldValue}
            onChange={handleFieldChange}
            className={`w-2/3 p-2 border rounded-lg focus:outline-none ${
              isFieldEmpty && isFormSubmitted
                ? "border-red-500"
                : "border border-gray-300 focus:border-blue-500"
            }`}
            placeholder="Eg. Software Developer, Medical Student"
          />
        </div>

        {/* Organisation Field */}
        <div className="flex items-center space-x-4">
          <label
            htmlFor="organisation"
            className="w-1/3 text-sm font-medium text-gray-700 text-right"
          >
            Targeted Organisation*
          </label>
          <input
            type="text"
            id="organisation"
            value={organisationValue}
            onChange={handleOrganisationChange}
            className={`w-2/3 p-2 border rounded-lg focus:outline-none ${
              isOrganisationEmpty && isFormSubmitted
                ? "border-red-500"
                : "border border-gray-300 focus:border-blue-500"
            }`}
            placeholder="Eg. Nvidia, Google, Microsoft"
          />
        </div>

        {/* Years of Experience */}
        <div className="flex items-center space-x-4">
          <label
            htmlFor="yoe"
            className="w-1/3 text-sm font-medium text-gray-700 text-right"
          >
            Years Of Experience*
          </label>
          <input
            type="text"
            id="yoe"
            value={yoeValue}
            onChange={handleYoeChange}
            className={`w-2/3 p-2 border rounded-lg focus:outline-none ${
              isYoeEmpty && isFormSubmitted
                ? "border-red-500"
                : "border border-gray-300 focus:border-blue-500"
            }`}
            placeholder="3 yoe, 4, 5"
          />
        </div>

        {/* Required Years of Organisation */}
        <div className="flex items-center space-x-4">
          <label
            htmlFor="ryoe"
            className="w-1/3 text-sm font-medium text-gray-700 text-right"
          >
            Required Years of Experience*
          </label>
          <input
            type="text"
            id="ryoe"
            value={ryoeValue}
            onChange={handleRYoeChange}
            className={`w-2/3 p-2 border rounded-lg focus:outline-none ${
              isRYoeEmpty && isFormSubmitted
                ? "border-red-500"
                : "border border-gray-300 focus:border-blue-500"
            }`}
            placeholder="3, 4, 5"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/3 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
