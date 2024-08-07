let words = [
    "walk", "talk", "show", "play", "regret", "use", "jump", "say", "think", "break", "avoid",
    "me", "you", "I", "we", "them", "us",
    "car", "bus", "door", "bicycle", "karlatornet", "vehicle", "driver", "traffic", "hållplats",
    "big", "nice", "slow", "fast", "red", "blue", "white", "full", "empty",
    "centralstationen", "school", "lindholmen", "lärdomsgatan", "pressbyrån", "monster", "street", "drive", "break",
    "delete", "hello", "world", "ticket", "app", "västtrafik", "line", "pling"
]

const randomWords = (amount) => {
    let slump
    let retur = []

    for(let i=0; i < amount; i++) {
        slump = Math.floor(Math.random() * words.length);
        retur.push(words.splice(slump, 1))
    }
    return retur
}

const populateScreen = (arr) => {
    let main = document.getElementById('main')

    arr.forEach(word => {
        let wordElement = document.createElement('article');
        wordElement.innerText = word
        main.appendChild(wordElement)
    })

}


document.addEventListener('DOMContentLoaded', () => {
    let selectedWords = randomWords(17)
    populateScreen(selectedWords)
})
