import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 mx-auto">LEX GENAPI</span>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg">
        <form className="d-flex mx-auto" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Project"
            aria-label="Search Project"
            style={{
              height: "50px",
              width: "300px",
              color: "black",
            }}
          />
          {/* <button className="btn btn-outline-success" type="submit">
            Search
          </button> */}
        </form>
      </nav>
    </div>
  );
}
