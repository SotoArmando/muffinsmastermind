export default () => ({
    getRandom: (difficulty) => {
        const levels = [64, 84, 96];
        const d = Math.random() * 100;
        const e = levels[difficulty];
        return (d < e);
    },
    setDifficulty: (val) => { this.difficulty = val },
    getNext: () => {
        const {
            isPlayer1turn,
        } = this.history[this.history.length - 1]
        const result = (isPlayer1turn) ? this.getCodebreakerplay() : this.getCodemakerplay();
        return result;
    },

    getCodemakerplay: (Codebreakerchecked, Secret) => {
        let result = [];
        let countBlanks = 0;
        Codebreakerchecked.forEach((e, i) => {
            if (e === Secret[i]) {
                result.push("red");
            } else if (Secret.indexOf(e) != -1) {
                result.push("white");
            } else {
                countBlanks += 1;
            }
        });
        for (let i = 0; i < countBlanks; i++) { result.push("") }
        return result;
    }
})