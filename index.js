let words = [
    "can", "will", "do", "play", "show", "use", "don't", "say", "think", "start", "stop",
    "me", "you", "I", "we", "them", "us", "society", "all",
    "car", "bus", "door", "bicycle", "vehicle", "driver", "traffic", "stop",
    "swedish", "nice", "slow", "fast", "red", "blue", "white", "full", "empty",
    "free", "school", "lindholmen", "lärdomsgatan", "three", "pressbyrån", "walk", "street", "drive", "break",
    "ok", "hello", "world", "ticket", "app", "västtrafik", "line", "pling"
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
    let selectedWords = randomWords(21)
    populateScreen(selectedWords)
})
