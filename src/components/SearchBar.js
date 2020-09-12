import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    handleSubmit = e => {
        e.preventDefault();

        this.props.searchApi(this.state.term);
    }

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type='text' 
                        placeholder="Search for a Video..." 
                        value={this.state.term} 
                        onChange={e => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;