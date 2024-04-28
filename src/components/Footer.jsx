import React from 'react';
import '../index.css'




function Footer() {
    return (
        <div className="footer-container">
            <div className="info">
                <h3>Contact Us:</h3>
                <p>Phone: 031-13 83 83</p>
                <p>Email: <a href="mailto:summershop@se">summershop@se</a></p>
            </div>
            <div className="info">
                <p>Facebook: /Summershop</p>
                <p>Instagram: @Summershop</p>
                <p>Twitter/X: @Summershop</p>
            </div>
        </div>

    );
}


export default Footer