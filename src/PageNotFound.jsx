import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="home-background">
      <div className="App-header">
        <div className="content-wrapper">
          <div className="back-button">
            <button onClick={() => navigate("/Movies")}>Back</button>
          </div>
          <div className="error-message">
            ERROR <br />
            404 Page Not Found !!
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
