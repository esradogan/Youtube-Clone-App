import React from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {

    state = {
        searchTerm: '',
    }

    handleChange = (event) => {
        //console.log(event.target.value);
        this.setState({ searchTerm: event.target.value });

    }

    handleSubmit = (event) => {
        if (event.keyCode === 13) {
            const { searchTerm } = this.state;
            const { onFormSubmit } = this.props;
            // this.props yoluyla onFormSubmit fonksiyonuna erişilir ve fonksiyon çağrılabilir, kullanılabilir
            // bu fonksiyon da searchTerm e erişmemizi sağlar,
            // bu dataya da state den erişilir.

            onFormSubmit(searchTerm);
            event.preventDefault();
        }

    }

    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onKeyDown={this.handleSubmit}>
                    <TextField fullWidth label="Search.." onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }

}

export default SearchBar;