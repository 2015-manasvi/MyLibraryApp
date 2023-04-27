import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context.";
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.length === 0) {
      setSearchTerm("Start your search here...");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };
  useEffect(() => searchText.current.focus(), []);

  const handleReset = () => {
    setSearchTerm("React");
    setResultTitle([]);
    searchText.current.value = "";
  };

  return (
    <div className="search-form">
      <div className="search-form-content">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-form-elem">
            <input
              type="text"
              className="form-control"
              placeholder="Start your search here ..."
              ref={searchText}
            />
          </div>
        </form>
        <br />
        <div>
          <button className="reset-btn" onClick={handleReset}>
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
