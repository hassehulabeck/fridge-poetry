let words = [
    "drive", "hour", "twice", "if", "can", "use", "waste", "approval", "not",
    "me", "stopping", "shouts", "full", "break-even", "douche", "brain", "overflow",
    "nasty", "blur", "front", "over", "meaningful", "lady", "bounce", "contains",
    "swedish", "final", "three", "unlimited", "sahara", "west", "park", "twelve", "by",
    "free", "world", "sharing", "gate", "base", "foul", "bird", "evening", "rudimentary", "allow",
    "special", "kite", "bite", "white", "lite", "enterprise", "mode", "root"
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