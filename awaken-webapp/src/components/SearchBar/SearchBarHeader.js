import React, { Component } from 'react';
import "./SearchBarHeader.scss";
import { AiOutlineSearch } from "react-icons/ai";

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
            <div className="searchbar-header">
                <form>
                    <section >
                        <input
                            type="text"
                            value={this.state.searchString}
                            ref="search"
                            onChange={this.handleChange}
                            placeholder="Search skills, subjects or software"
                        />
                       
                        
                    </section>
                    <section>
                        <button className="searchbar-btn" type="submit">
                            <icon className="base-searchbar onload lazy-loaded " area-hidden="true">
                                <AiOutlineSearch
                                    type=""
                                    size={28}
                                    style={
                                        {
                                            color: 'blue',
                                            
                                            // border: '2px solid black', 
                                            // display:'flex'
                                            
                                            
                                        }
                                    }



                                />
                            </icon>    
                        </button>
                    </section>
                </form>    
                
            </div>
           
        );
    }

}
