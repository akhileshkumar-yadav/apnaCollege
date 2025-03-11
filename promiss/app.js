
function saveDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        // console.log("Your internet speed is " + internetSpeed + " Mbps");
        success();
    }
    else {
        // console.log("Your internet speed is " + internetSpeed + " Mbps. Please check your internet connection.");
        failure();
    }
}

saveDb("akhilesh", () => {
    console.log("data 1 successfully store");
    saveDb("KUMAR", () => {
        console.log("data 2 successfully store");
        saveDb("yadav", () => {
            console.log("data 3 successfully store");
        }, () => {
            console.log("3rd data failed");
        })
    }, () => {
        console.log("2nd data failed");
    })
}, () => {
    console.log("1st data failed");
});