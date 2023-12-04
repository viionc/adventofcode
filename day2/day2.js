const {input} = require("./day2input.js");

//12 red cubes, 13 green cubes, and 14 blue cubes

const limits = {
    red: 12,
    green: 13,
    blue: 14,
};

const checkGames = (input) => {
    let result = 0;
    input.forEach((string) => {
        let gameId = 0;
        const rolls = string.split(";");
        let failed = false;
        for (let i = 0; i < rolls.length; i++) {
            let colors = rolls[i].split(",");
            for (let j = 0; j < colors.length; j++) {
                let color = colors[j];
                if (color.includes("Game")) {
                    let test = color.split(":");
                    gameId = parseInt(test[0].split(" ")[1]);
                    color = test[1];
                }
                color = color.trim();
                const number = color.split(" ")[0];
                const colorName = color.split(" ")[1];
                if (number > limits[colorName]) {
                    failed = true;
                    break;
                }
            }
        }
        if (!failed) {
            result += gameId;
        }
    });
    console.log(result);
};

checkGames(input.split("\n"));
