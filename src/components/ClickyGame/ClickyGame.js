import { useEffect, useState } from "react";

function ClickyGame() {
        // Task 2
        const [clickedTimes,setClickedTimes] = useState(0)

        // reset unless click after 3s
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
            // Incorrect logic, this should be clickedTimes % 3 === 0, clickedTimes % 5 === 0, clickedTimes % 15 === 0
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
