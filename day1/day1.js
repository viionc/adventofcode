const {input} = require("./day1input.js");

const calibrate = (array) => {
    let total = 0;
    array.forEach((string) => {
        let j = string.length - 1;
        let firstnumber = -1;
        let lastnumber = -1;
        for (let i = 0; i < string.length - 1; i++, j--) {
            if (firstnumber === -1 && Number.isInteger(parseInt(string[i]))) firstnumber = string[i];
            if (lastnumber === -1 && Number.isInteger(parseInt(string[j]))) lastnumber = string[j];
            if (firstnumber > -1 && lastnumber > -1) break;
        }
        if (lastnumber === -1) lastnumber = firstnumber;
        if (firstnumber === -1) firstnumber = lastnumber;
        const combined = `${firstnumber}${lastnumber}`;
        total += parseInt(combined);
    }, 0);
    console.log(total);
};

calibrate(input.split("\n"));
