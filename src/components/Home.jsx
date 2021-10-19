import React from 'react'




const bestScore = localStorage.getItem("bestScore")
const time = localStorage.getItem("time")

function Home() {

    function again(e){
        if(e.key === "Enter" | e.key === " " | !e.key){
            window.location = "/game"
        }
    }
    window.document.addEventListener('keypress', e => again(e))

    return (
        <div>
            <title>Randprix</title>
            <button className="startB" onClick={(e)=>again(e)}>Play</button>

            <h1>Hint:</h1>
            <h3>Use {window.innerHeight > 820 ? "WASD" : "the arrow buttons on the screen"} to move.</h3>
            <h3>Collect 3 out of 4 coins to win.</h3>

            <h2 className="yourTime">Your time: <span className="time">{localStorage.getItem("time")}s</span></h2>
            <br />
            <h1 className="yourTime">Your best time: <span className="besttime">{bestScore}s</span></h1>

        </div>
    )
}

export default Home
