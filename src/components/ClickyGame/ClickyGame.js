import { useEffect, useState } from "react";

function ClickyGame() {
        // Task 2
        const [clickedTimes,setClickedTimes] = useState(0)

        useEffect(() => {
            if (clickedTimes !== 0){
                // clear clicked times
                let timer = setInterval(() => {
                    setClickedTimes(0);
                }, 3000);
    
                return () => clearInterval(timer)
            }
            
        },[clickedTimes]) 
    
        function clickGame(){
            setClickedTimes(clickedTimes + 1)
            if (clickedTimes === 3){
                alert("Fizz");
            }
            else if (clickedTimes === 5) {
                alert("Buzz");
            }
            else if (clickedTimes === 15) {
                alert("FizzBuzz");
    
                // reset clicked 
                setClickedTimes(0);
            }
        }
    
    return(
        <div>
            <button onClick={() => clickGame()}> Clicky Game</button>
            <h3 style={{color: "red"}}>{clickedTimes} Times</h3>
        </div>
    );
}

export default ClickyGame;