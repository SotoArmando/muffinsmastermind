export default () => {
    return {
        randomSecret: () => {
            const colors = ["red", "blue", "green", "yellow", "white", "black"]
            return [0, 1, 2, 3].map(e => {
                return colors[Math.floor(Math.random() * 6)]
            })
        }
    }
}