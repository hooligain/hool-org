import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
export default function ComingSoon() {
  return (
    <div className="ComingSoon">
      <Header />
      <div className="ComingSoon-content">
        <p>Coming soon</p>
        <Link to="/">
          <button>
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
