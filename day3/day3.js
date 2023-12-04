const {input} = require("./day3input.js");

const symbols = {"*": 1, "$": 1, "#": 1, "+": 1, "&": 1, "/": 1, "%": 1, "@": 1, "-": 1, "=": 1};

const test = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

const checkEngine = (input) => {
    let total = 0;

    for (let i = 0; i < input.length; i++) {
        let currentNumber = "";
        let hasSymbolAttached = false;
        for (let j = 0; j < input[i].length; j++) {
            const cell = input[i][j];

            if (cell === "." || symbols[cell]) continue;
            currentNumber += cell;

            if (
                (input[i + 1] && symbols[input[i + 1][j]]) ||
                (input[i - 1] && symbols[input[i - 1][j]]) ||
                (input[i + 1] && input[i][j + 1] && symbols[input[i + 1][j + 1]]) ||
                (input[i + 1] && input[i][j - 1] && symbols[input[i + 1][j - 1]]) ||
                (input[i - 1] && input[i][j + 1] && symbols[input[i - 1][j + 1]]) ||
                (input[i - 1] && input[i][j - 1] && symbols[input[i - 1][j - 1]]) ||
                (input[i][j - 1] && symbols[input[i][j - 1]]) ||
                (input[i][j + 1] && symbols[input[i][j + 1]])
            ) {
                hasSymbolAttached = true;
            }
            if (input[i][j + 1] === "." || symbols[input[i][j + 1]] || !input[i][j + 1]) {
                if (hasSymbolAttached) {
                    total += parseInt(currentNumber);
                }
                currentNumber = "";
                hasSymbolAttached = false;
            }
        }
    }
    console.log(total);
};
checkEngine(input.split("\n"));
