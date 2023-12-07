let painter = document.getElementById("c1").getContext("2d");
let big = 10; // size of the large square
let small = 4; // size of the small square

for (let r = 0; r < 600 / big; ++r) {
    for (let c = 0; c < 600 / big; ++c) {
        if ((r + c) % 2 === 0) {
            painter.fillStyle = "#BBBBBB";
        } else {
            painter.fillStyle = "#555555";
        }
        painter.fillRect(c * big, r * big, big, big);
    }
}

for (let r = 0; r < 600 / big - 1; ++r) {
    for (let c = 0; c < 600 / big - 1; ++c) {
        if ((r + c) % 2 === 0) {
            painter.fillStyle = "#000000";
        } else {
            painter.fillStyle = "#FFFFFF";
        }
        if (r >= (1 / 4) * (600 / big) && r <= (3 / 4) * (600 / big) && c >= (1 / 4) * (600 / big) && c <= (3 / 4) * (600 / big)) {
            if (painter.fillStyle === "#000000") {
                painter.fillStyle = "#FFFFFF";
            } else {
                painter.fillStyle = "#000000";
            }
        }
        painter.fillRect(c * big + big - small / 2, r * big + big - small / 2, small, small);
    }
}