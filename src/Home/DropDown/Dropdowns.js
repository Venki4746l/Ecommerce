import React from "react";

const Dropdowns = () => {
  return (
    <div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/">
              Action
            </a>
            <a className="dropdown-item" href="/">
              Another action
            </a>
            <a className="dropdown-item" href="/">
              Something else here
            </a>
            <div role="separator" className="dropdown-divider"></div>
            <a className="dropdown-item" href="/">
              Separated link
            </a>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown button"
        />
      </div>
    </div>
  );
};

export default Dropdowns;
