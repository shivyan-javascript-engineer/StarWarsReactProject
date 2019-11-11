import React, { useState } from 'react';
import styles from './search.module.scss'
import Button from '../Button';



function Search(){

    const [searchInput, setSearchInput ] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        alert("searching")
    }

    return (
        <div className={styles.searchContainer} >
            <div className={styles.searchBarContainer} >
                 <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Search..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                    <Button type="submit" label="Search" />
                 </form>
                 
            </div>
        </div>
    )
}

export default Search;