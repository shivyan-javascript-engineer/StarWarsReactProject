import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import styles from './search.module.scss';
import Button from '../Button';
import { API_URL } from '../../../config/constants';
import ListItem from './ListItem';

function Search() {
  const [searchResults, setSearchResult] = useState([]);

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  let Timer = null;

  const handleSubmit = (event) => {
    event.preventDefault();
    event.persist();
    clearTimeout(Timer);

    if (!event.target.value) {
      return;
    }
    setLoading(true);
    Timer = setTimeout(() => {
      Axios.get(`${API_URL}/private/planets/search?name=${event.target.value}`)
        .then((response) => {
          setLoading(false);
          setSearchResult(response.data.data);
        })
        .catch((err) => {
          // console.log(err.response.status, 'login Error');
          if (err.response.status === 401) {
            history.push('/');
          } else {
            setLoading(false);
          }
        });
    }, 200);
  };


  useEffect(() => {
    !localStorage.getItem('token') && history.push('/');
  }, []);


  function renderList() {
    let fontSize = 15;

    const listData = [...searchResults].sort((a, b) => a.diameter - b.diameter);
    return listData.map((results) => {
      fontSize += 3;
      return <ListItem key={results.name} style={{ fontSize: `${fontSize}px` }} name={results.name} />;
    });
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBarContainer}>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search..." onChange={(e) => handleSubmit(e)} />
          <Button loading={loading} type="submit" label="Search" />
        </form>

      </div>

      <div>
        <ul>
          {
            renderList()
          }
        </ul>
      </div>
    </div>
  );
}

export default Search;
