export default () => {
    return {
        randomSecret: () => {
            const colors = ["red", "blue", "green", "yellow", "white", "black"]
            return [0, 1, 2, 3].map(() => {
                return colors[Math.floor(Math.random() * 6)]
            })
        }
    }
}