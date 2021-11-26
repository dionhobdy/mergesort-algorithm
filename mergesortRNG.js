function randomInt(max) {
    return Math.floor(Math.random() * max);
}

let a1 = [];
let half = a1.length / 2;

for (i = 0; i < 8; i++) {
    a1.push(randomInt(100));
}

let a2 = a1.splice(0, half);
let a3 = a1.splice(-half);
let a4 = [];

a2.sort();
a3.sort();

let merge = (a2, a3) => {
    while (a2.length && a3.length) {
        if (a2[0] < a3[0]) {
            a4.push(a2.shift());
        } else {
            a4.push(a3.shift());
        }
    }
    return a4.concat(a2.slice().concat(a3.slice()));
}

console.log(merge(a2, a3));
