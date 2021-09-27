import './style.css'
import React from 'react';
import { useState } from 'react';
import Discriptions from './Discriptions'






function MenuHeader() {
    const [data, setData] = useState('');
    const parentToChild = (props) => {
        setData(props);

    }
    return (
        <div>
            < div className="nav-bar" >
                <div className="container">
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                        <a href="#" className="navbar-brand">MENU</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <a primary onClick={() => parentToChild('Home')} className="nav-item nav-link">Home</a>
                                <a onClick={() => parentToChild('About Us')} className="nav-item nav-link">About Us</a>
                                <a onClick={() => parentToChild('Service')} className="nav-item nav-link">Service</a>
                                <a onClick={() => parentToChild('Washing Plan')} className="nav-item nav-link">Price</a>
                                <a onClick={() => parentToChild('Washing Point')} className="nav-item nav-link">Washing Points</a>
                                {/* <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="expand">Pages</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item">Blog Grid</a>
                                        <a className="dropdown-item">Detail Page</a>
                                        <a className="dropdown-item">Team Member</a>
                                        <a className="dropdown-item">Schedule Booking</a>
                                    </div>
                                </div> */}
                                <a onClick={() => parentToChild('Contact Us')} className="nav-item nav-link">Contact</a>
                            </div>
                            <div className="ml-auto">
                                <a className="btn btn-custom" >Get Appointment</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div >
            <Discriptions data={data}></Discriptions>
        </div>
    );
}

export default MenuHeader;
