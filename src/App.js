import React from 'react';
import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail } from './components'; // index.js dosyası oluşturup component klasorunde importları bu şekilde geçtik

import youtube from './api/youtube'
class App extends React.Component {
    handleSubmit = async (searchTerm) => {

        const response = await youtube.get('search', {    
            params:{
            part : 'snippet',
            maxResult: 5,
            key :'AIzaSyDDT_0tasvFUIGqC0kBFKqHnUnbUZmeg7A',
            q: searchTerm
        }}) // q => youtube api larında default olarak kullanılıyor ve query manasına geliyor
      
        console.log(response);
    }
    render() {
        return (
            <Grid justify='center' container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit()} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail />
                        </Grid>
                        <Grid item xs={4}>
                            {/* video list */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}


export default App;