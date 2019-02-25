import React from "react";

const AddImgFormPart = ({ onChangeActivity, number }) => {
  return (
    <div className="form-control">
      <label htmlFor="imgName">Activity no {number} - name:</label>
      <input
        type="text"
        name={`${number}_name`}
        minLength="3"
        maxLength="20"
        onChange={onChangeActivity}
      />
      <label htmlFor="imgUrl">Activity no {number} - url:</label>
      <input
        type="text"
        name={`${number}_url`}
        minLength="3"
        maxLength="60"
        onChange={onChangeActivity}
      />
    </div>
  );
};

// propTypes

export default AddImgFormPart;
