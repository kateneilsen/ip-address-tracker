'use client'
import styles from "../styles/search.module.css"
import { getDetails } from "../lib/getDetails";
import { useState } from "react";

export default function Search({getSearchResults}){
  const [query, setQuery] = useState('');

  const handleSearch = async(e) => {
    e.preventDefault();
    const response = await getDetails(query);
    getSearchResults(response);
  }
    return (
        <section className={styles.top}>
        <h1>IP Address Tracker</h1>
        <div className={styles.search}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for any IP address or domain"
          />
          <button onClick={handleSearch}>
            <img src="../images/icon-arrow.svg" alt="arrow right" />
          </button>
        </div>
      </section>
    
    );
  };