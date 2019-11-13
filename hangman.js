const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const hangman = {
    numberOfWords: 4,
    randomWords: [
        'array',
        'object',
        'function',
        'module'
    ],
    wordState: '',
    guessedLetter: '',
    head: '0',
    body: '|',
    arm1: '-',
    arm2: '-',
    leg1: '/',
    leg2: '\\',
    layout: '',
    initializeLayout() {
        this.layout = `
        _______________
       |      _____    |
       |     |     |   |
       |     O     |   |
       |    -I-    |   |
       |    / \\    |   |
       |___________|___|`
    },
    sweepLayout(target) {
        const characters = this.layout.split('')
        const newCharacters = characters.map(character => {
            if (character === target) {
                character = ' '
            }
            return character
        })
        const newString = newCharacters.join('')
        this.layout = newString
    },
    removeHead() {
        this.sweepLayout('O')
    },
    removeBody() {
        this.sweepLayout('I')
    },
    removeArm() {
        this.sweepLayout('-')
    },
    removeLeftLeg() {
        this.sweepLayout('/')
    },
    removeRightLeg() {
        this.sweepLayout('\\')
    },
    wrongGuessCount(word, guesses) {
        let count = 0
        guesses.forEach(letter => {
            if (word.indexOf(letter) === -1) {
                count++
            }
        })
        switch (count) {
            case 0:
                this.removeHead()
                this.removeBody()
                this.removeArm()
                this.removeArm()
                this.removeLeftLeg()
                this.removeRightLeg()
                break;
            case 1:
                this.removeBody()
                this.removeArm()
                this.removeArm()
                this.removeLeftLeg()
                this.removeRightLeg()
                break;
            case 2:
                this.removeArm()
                this.removeArm()
                this.removeLeftLeg()
                this.removeRightLeg()
                break;
            case 3:
                this.removeArm()
                this.removeLeftLeg()
                this.removeRightLeg()
                break;
            case 4:
                this.removeLeftLeg()
                this.removeRightLeg()
                break;
            case 5:
                this.removeRightLeg()
                break;
            case 6: 
                break;
        }
        console.log(this.layout)
        return count
    },
    showGuess(word, guesses) {
        const letters = word.split('')
        const stringToPrint = letters.map(letter => {
            if (guesses.indexOf(letter) === -1) {
                return '_ '
            }
            return `${letter} `
        })
        return stringToPrint.join('')
    },
    isWinner(word, guesses) {
        const letters = word.split('')
        const booleanString = letters.map(letter => {
            if (guesses.indexOf(letter) === -1) {
                return false
            }
            return true
        })
        return booleanString.reduce((a, b) => (a && b))
    },
    next(word, guesses) {
        Object.freeze(guesses)
        this.initializeLayout()
        if (this.wrongGuessCount(word, guesses) === 6) {
            console.log('Player lost!')
            rl.close()
        }
        if (this.isWinner(word, guesses)) {
            console.log('Player won!')
            rl.close()
        }
        console.log(this.showGuess(word, guesses))
        rl.question('next letter? ', answer => {
            console.log('player wrote:', answer)
            guesses.push(answer)
            this.next(word, guesses)
        })
    }
}

hangman.next('hello', [])