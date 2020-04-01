import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '60px',
        padding: '0 60px'
    }
})

export const AppBarComponent = (props) => {

    const classes = useStyles();

    return (
        <AppBar position="static" classes={{ root: classes.root }}>
            <Typography variant='h6' className="title>">Where in the world?</Typography>
            <div className="mode">
                <Typography onClick={props.handleMode}>Dark Mode</Typography>
            </div>
        </AppBar>
    )
}