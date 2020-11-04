import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // when user types something, set a timer to update debounce term, and cancel it immediately if user types again
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);
  // if term state changes, this useEffect runs again

  useEffect(() => {
    // defined the search function to use async await
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      // sets results state
      setResults(data.query.search);
    };

    // calling the search function
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);
  // if debouncedTerm state changes, this useEffect runs again

  const renderedResults = results.map((result) => (
    <div key={result.pageid} className='item'>
      <div className='right floated content'>
        <a
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
          className='ui button'
        >
          Go
        </a>
      </div>
      <div className='content'>
        <div className='header'>{result.title}</div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    </div>
  ));

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            className='input'
            type='search'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;
