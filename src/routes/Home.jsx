import Search from "../components/search/Search";

const Home = () => {
  const handelSearch = (searchValue) => {
    console.log("get from search", searchValue);
  };
  return (
    <div>
      Home
      <Search title="Search" onSubmit={handelSearch} />
    </div>
  );
};

export default Home;
