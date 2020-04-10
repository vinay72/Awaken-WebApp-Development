import React, { Component } from 'react';
import "./SearchBarHeader.scss";

export default class SearchBarHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        
        this.refs.search.focus();
    }

    handleChange() {
        this.setState({
            searchString: this.refs.search.value
        });
    }

    render() {
        return (
            <div>
                
                <div>
                    <input
                        type="text"
                        value={this.state.searchString}
                        ref="search"
                        onChange={this.handleChange}
                        placeholder="Search skills, subjects or software"
                    />
                    
                </div>
                
            </div>
            
        );
    }

}
