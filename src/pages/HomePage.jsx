import React from "react";
import { Link } from "react-router-dom";
import complianceImage from "../assets/compliance-management.jpg";

const HomePage = () => {
  return (
    <div
      className="hero min-h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${complianceImage})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Welcome to the Compliance Dashboard
          </h1>
          <p className="py-6">
            Manage your compliance documents and fulfill buyer requests with
            ease. Navigate to the Evidence Vault to manage your documents or to
            Buyer Requests to see pending requests.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/vault" className="btn btn-primary">
              Go to Evidence Vault
            </Link>
            <Link to="/requests" className="btn btn-secondary">
              Go to Buyer Requests
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
