import React from 'react';

const SearchBar = ({ onSearch }) =>
{
    const handleSearch = (e) =>
    {
        onSearch(e.target.value);
    };

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search by name" onChange={handleSearch} />
        </div>
    );
};

export default SearchBar;
