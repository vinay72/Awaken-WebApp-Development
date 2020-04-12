import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "./Navbar.scss";
import SearchBarHeader from '../SearchBar/SearchBarHeader';
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../../images/logo.png";
import Dropdown from "../Dropdown/Dropdown";
import Login from "../Login/Login";
import FreeTrial from "../FreeTrial/FreeTrial";
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarLinks: [
                // {
                //   title: 'Home',
                //   url: '/',
                //   icon: HomeIcon
                // },
                {
                    title: 'Read',
                    url: '/',
                    // icon: ReadIcon
                },
                {
                    title: 'Activities',
                    url: '/activities',
                    // icon: DoIcon
                },
                // {
                //   title: 'Quiz',
                //   url: '/quiz',
                //   icon: QuizIcon
                // }
            ]
        };
    }
    render() {
        return (
            <div className="navbar-container">

                <div style={{ display: 'flex' }} className="navbar-left">
                    <img src={Logo} style={{ height: '100%' }} className="logo" alt="logo" />



                    <div className="navbar-links-container flex">
                        <h2>LEARNING</h2>
                        
                        

                    </div>
                    
                    <div className="navbar-links-container flex">
                        <Dropdown />
                        
                        

                    </div>
                    <div style={{ display: 'flex' }} className="navbar-left">
                        
                        <SearchBarHeader />
                        <AiOutlineSearch
                            size={39}
                            style={
                                {
                                    color: 'blue',
                                    border: '1px solid black', 
                                    
                                    
                                }
                            }



                        />
                        
                        
                    </div>
                    
                    <div className="navbar-links-container flex">
                        
                        <FreeTrial />
                    </div>
                    <div className="navbar-links-container flex">
                        
                        <Login />
                    </div>
                    

                    
                    
                </div>
                
                
            </div>


        )
    }
}
export default Navbar;


