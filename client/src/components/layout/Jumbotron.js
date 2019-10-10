import React from 'react'

const styles = {
   
    
    black : {
        color: "black"
    },
    background : {
        backgroundImage: 'url("/bgimage.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "bottom",
        color: "white"
    }
}

export default function Jumbotron() {
    return (
        <div style={styles.background} className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 style={styles.title} className="display-4" align="center">Book Search</h1>
                <p className="lead" align="center" style={styles.black}>Search and save books using Google Books API.</p>
            </div>
        </div>
    )
}