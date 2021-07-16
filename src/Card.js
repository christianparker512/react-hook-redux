import React from 'react'
import './App.css'

const Card = () => {
    return (
        <div className="card">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: '100%' }} />
            <div className="container">
                <h4><b>Christian Parker</b></h4>
                <p>Software Engineer</p>
            </div>
        </div>
    )
}

export default Card
