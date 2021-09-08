let UserInfo =
    {
        stats:
            [
                {
                    name: "church",
                    value: 50,
                },
                {
                    name: "king",
                    value: 50,
                },
                {
                    name: "money",
                    value: 50,
                },
                {
                    name: "health",
                    value: 50,
                }
        ],
        threshold:
            {
               max: 100,
               min: 0
            },
        score: 0,
        highScore: 0,
        isGameOver: false,
        endingThreshold: "",
        endingStat: ""
}

export default UserInfo;