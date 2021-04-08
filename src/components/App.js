import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
// add callback method to class App when user submits SearchBar form
    onTermSubmit = (term) => {
        console.log(term);
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