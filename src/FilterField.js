import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    root: {
        width: '300px',
        border: '0',
    }
})

export const FilterField = (props) => {

    const classes = useStyle();
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
    return (
        <Autocomplete
            id="filter-field"
            options={regions}
            getOptionLabel={option => option}
            classes={{ root: classes.root }}
            onInputChange={props.handleInputChange}
            renderInput={params => <TextField {...params} label="Filter by Region" variant="outlined" />}
        />
    )
};
