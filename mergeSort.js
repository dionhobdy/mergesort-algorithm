let a1 = [4, 1, 2, 8, 7, 5, 3, 6];
let half = a1.length / 2;
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

merge(a2, a3);