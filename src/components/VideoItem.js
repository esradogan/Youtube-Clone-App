import React from 'react';


import { Grid, Paper, Typography } from '@material-ui/core';


const VideoItem = ({ video }) => {

    return (
        <Grid item xs={12}>
            <Paper style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ margin: '20px' }} alt='thumbnail' src={video.snippet.thumbnails.medium.url}></img>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )


}

export default VideoItem;