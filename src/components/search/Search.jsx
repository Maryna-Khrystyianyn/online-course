import { useState } from "react";

const Search = ({title, onSubmit}) => {
  const [value, setValue] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Search for a course"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" id="btn-serchCourse">
        {title}
      </button>
    </form>
  );
};

export default Search;
