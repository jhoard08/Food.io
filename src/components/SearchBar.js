import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className={'segment container searchBar'}>
            <div className={'ui fluid massive action input inputBar'}>
                <input className={'inputBar'} type={'text'} placeholder={'Search...'}/>
                <button className={'ui button'}>Search</button>
            </div>
        </div>
    )
};

export default SearchBar