
function promiss(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("data resolve");
        } else {
            reject("data reject");
        }
    });
}

// promiss("akhilesh");