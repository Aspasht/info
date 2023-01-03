import React from "react";

const PrimaryButton = ({ label, onSubmit }) => {
  return (
    <>
      <button className="bg-blue-400 px-3 py-1 font-semibold" onClick={onSubmit}>{label}</button>
    </>
  );
};

export default PrimaryButton;
 