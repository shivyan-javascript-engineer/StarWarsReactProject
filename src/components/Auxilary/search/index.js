import React, { useState } from 'react';
import Axios from 'axios';
import styles from './search.module.scss';
import Button from '../Button';
import { API_URL } from '../../../config/constants';
import ListItem from './ListItem';

function Search() {
  const [searchResults, setSearchResult] = useState([]);

  let Timer = null;

  const handleSubmit = (event) => {
    event.preventDefault();
    event.persist();

    clearTimeout(Timer);

    if (!event.target.value) {
      return;
    }
    Timer = setTimeout(() => {
      Axios.get(`${API_URL}/private/planets/search?name=${event.target.value}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => {
          console.log(response.data, "search dyaa ")
          setSearchResult(response.data.data);
        })
        .catch((err) => {
          console.log(err, 'login Error');
        });
    }, 200);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBarContainer}>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search..." onChange={(e) => handleSubmit(e)} />
          <Button type="submit" label="Search" />
        </form>

      </div>

      <div>
        <ul>
          {searchResults.map((results) => <ListItem key={results.name} name={results.name} />)}
        </ul>
      </div>
    </div>
  );
}

export default Search;
