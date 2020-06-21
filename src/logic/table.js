export default () => {
    return {
        randomSecret: () => {
            const colors = ["red", "blue", "green", "yellow", "white", "black"]
            return [0, 1, 2, 3].map(() => {
                return colors[Math.floor(Math.random() * 6)]
            })
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
                    result.push("")
                }
            });
            return result;
        }
    }
}