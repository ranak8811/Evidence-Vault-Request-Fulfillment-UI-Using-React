import React from "react";

const StatusChip = ({ status }) => {
  let badgeColorClass = "";
  if (status === "Valid") {
    badgeColorClass = "badge-success";
  } else if (status === "Expired") {
    badgeColorClass = "badge-error";
  } else if (status === "Pending") {
    badgeColorClass = "badge-warning";
  } else {
    badgeColorClass = "badge-info";
  }

  return <span className={`badge ${badgeColorClass} badge-md`}>{status}</span>;
};

export default StatusChip;
