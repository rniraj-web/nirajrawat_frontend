import React from "react";

const CheckList = () => {
  const checkListItems = [
    "Register as a social care worker",
    "Apply for signatory",
    "Manage your SCW account online",
    "Start or further your career in social care",
  ];
  return (
    <ul className="list-unstyled d-grid gap-3 checklist">
      {checkListItems.map((text) => (
        <li className="d-flex gap-3 align-items-start">
          <i className="bi bi-check-circle-fill check-mark" />
          <span className="fw-semibold">{text}</span>
        </li>
      ))}
      {/* <li className="d-flex gap-3 align-items-start">
        <i className="bi bi-check-circle-fill check-mark" />
        <span className="fw-semibold"></span>
      </li> */}
    </ul>
  );
};

export default CheckList;
