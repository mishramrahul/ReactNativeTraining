import './style.css'
import React from 'react';



function Discriptions(props) {

    let newData = props.data
    let chilePageName = ''
    if (newData === '' || newData === 'Home') {
        newData = 'Home'
    } else {
        chilePageName = newData;
    }

    return (
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{newData}</h2>
                    </div>
                    <div className="col-12">
                        <a href="">Home</a>
                        <a href="">{chilePageName}</a>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Discriptions;
