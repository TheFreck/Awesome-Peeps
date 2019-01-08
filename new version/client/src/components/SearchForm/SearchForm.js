import React from "react";

const SearchForm = props => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an article"
          id="search"
        />
        <button
          onClick={() => props.handleFormSubmit(this)}
          className="btn btn-primary mt-3"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
