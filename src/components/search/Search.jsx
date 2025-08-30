import { useState } from "react";
import styles from "./search.module.scss";

const Search = ({ title, onSubmit }) => {
  const [value, setValue] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("")
  };
  return (
    <form className={styles.form_search} onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Search for a course"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className={styles.btn_search}>
        {title}
      </button>
    </form>
  );
};

export default Search;
