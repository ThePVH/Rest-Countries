import React from 'react';
import { InputBase } from '@material-ui/core';
import { Search as SearchIcon } from "@material-ui/icons";

export const SearchField = (props) => {

    return (
        <div className="search">
            <div>
                <SearchIcon />
            </div>
            <InputBase
                className="inputBase"
                placeholder="Search for a country..."
                onChange={props.handleInput}
            />
        </div>
    )
}