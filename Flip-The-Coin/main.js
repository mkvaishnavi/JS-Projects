const coin = document.getElementById("coin");

coin.addEventListener("click", function(){
    flipCoin();
});

const coinImage = document.querySelector(".coin-image");
const result = document.getElementById("result");

function flipCoin(){
    const randomNumber = Math.random();
    console.log(randomNumber);

    if (randomNumber < 0.5){
        result.textContent="Heads";
        coinImage.src = "flip-the-coin-master/flip-the-coin-master/resources/heads.svg";
    }
    else{
        result.textContent="Tails"
        coinImage.src = "flip-the-coin-master/flip-the-coin-master/resources/tails.svg";
    }
}

const randomButton = document.querySelector(".random");
randomButton.addEventListener("click", function(){
    flipCoin();
});