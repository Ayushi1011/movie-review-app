import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => navigate("/Movies")}>Back</button>
      </div>
      <div> 404 PageNotFound </div>
    </>
  );
}

export default PageNotFound;
