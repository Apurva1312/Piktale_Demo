import React from 'react'
import './Footer.css'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        top:"92vh",
        width:"100%",
        background: "black",
    }
    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">
                Piktale   mypiktaledemo.com
            </p>
        </footer>
    )
}


export default Footer