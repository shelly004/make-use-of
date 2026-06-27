import { useState, useEffect, useMemo } from "react";
export default function SearchData() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const filteredData = useMemo(() => {
    const search = debouncedSearch.toLowerCase();

    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.email.toLowerCase().includes(search) ||
        item.website.toLowerCase().includes(search)
    );
  }, [data, debouncedSearch]);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const dataFetched = await response.json();
      console.log(dataFetched);
      setData(dataFetched);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearch(searchValue);
    }, 300);
    return () => clearTimeout(timerId);
  }, [searchValue]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="App">
      <h1>Fetching Data in Table</h1>
      <label htmlFor="search">Search Here</label>
      <input
        id="search"
        type="text"
        placeholder="Search Here"
        style={{ padding: "5px" }}
        value={searchValue}
        aria-label="search-users"
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <table style={{ border: "2px solid black", margin: "3px" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
