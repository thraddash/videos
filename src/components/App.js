import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
// add callback method to class App when user submits SearchBar form
    onTermSubmit = (term) => {
        // pre configure instance of axios 
        youtube.get('/search', {
            params: {
                q: term
            }
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;