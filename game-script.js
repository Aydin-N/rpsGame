const btn = document.querySelectorAll(".btn")
const yourHandImg = document.querySelector("#your-hand")
const compHandImg = document.querySelector("#comp-hand")
const resultWindow = document.querySelector("#result-window")
const resultText = document.querySelector("#text")
const resultButton = document.querySelector("#again-btn")
let yourScore = parseInt(document.querySelector("#your-score").textContent)
let compScore = parseInt(document.querySelector("#comp-score").textContent)

resultButton.addEventListener("click", () => {
    yourScore = 0
    document.querySelector("#your-score").textContent = yourScore
    yourHandImg.src = "your rock.jpg"
    compScore = 0
    document.querySelector("#comp-score").textContent = compScore
    resultWindow.style.display = "none"
    compHandImg.src = "comp rock.jpg"
})

btn.forEach((each) => each.addEventListener("click", () => {
    let yourHand
    let compHand
    // Your Hand
    yourHandImg.src = "your rock.jpg"
    yourHandImg.classList.toggle("your-hand-active")
    compHandImg.src = "comp rock.jpg"
    compHandImg.classList.toggle("comp-hand-active")
    const animation = setTimeout(() => {
        yourHandImg.classList.toggle("your-hand-active")
        compHandImg.classList.toggle("comp-hand-active")
        if (each.textContent.toLowerCase() === "rock") {
            yourHandImg.src = "your rock.jpg"
            yourHand = "rock"
        } else if (each.textContent.toLowerCase() === "paper") {
            yourHandImg.src = "your paper.jpg"
            yourHand = "paper"
        } else if (each.textContent.toLowerCase() === "scissors") {
            yourHandImg.src = "your scissors.jpg"
            yourHand = "scissors"
        }
        // Comp Hand
        let num = Math.floor(Math.random()*3)
        if (num === 0) {
            compHandImg.src = "comp rock.jpg"
            compHand = "rock"
        } else if (num === 1) {
            compHandImg.src = "comp paper.jpg"
            compHand = "paper"
        } else if (num === 2) {
            compHandImg.src = "comp scissors.jpg"
            compHand = "scissors"
        }
        //Checking Hands
        let result = checkLogic(yourHand,compHand)
        console.log(result)
        if (result === "win") {
            yourScore += 1
            document.querySelector("#your-score").textContent = yourScore
        } else if (result === "lose") {
            compScore += 1
            document.querySelector("#comp-score").textContent = compScore
        }
        if (yourScore === 5) {
            resultWindow.style.display = "flex"
            resultWindow.style.background = "rgba(22, 241, 66, 0.6)"
            resultText.textContent = "You Won"
        } else if (compScore === 5) {
            resultWindow.style.display = "flex"
            resultWindow.style.background = "rgba(241, 22, 22, 0.6)"
            resultText.textContent = "You Lost"
        }
    }, 2100)
}))

function checkLogic(yourHand, compHand){
    rules = {
        "rock" : {
            "paper" : "lose",
            "scissors" : "win",
            "rock" : "draw"
        },
        "paper" : {
            "paper" : "draw",
            "scissors" : "lose",
            "rock" : "win"
        },
        "scissors" : {
            "paper" : "win",
            "scissors" : "draw",
            "rock" : "lose"
        }
    }
    let result = rules[yourHand][compHand]
    return result
}
