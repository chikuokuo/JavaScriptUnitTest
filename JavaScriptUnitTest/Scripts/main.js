$(document).ready(function () {

});

function GetStake(betType = "") {
    var defaultStake = localStorage["PreviousStake" + betType];
    console.log(defaultStake);
    if (defaultStake === "0"
        || defaultStake === ""
        || defaultStake === "undefined"
        || typeof (defaultStake) === "undefined")
        defaultStake = "0";
    else {
        defaultStake = formatNumber(defaultStake.replace(/,/g, ""));
    }

    return defaultStake;
}


function FormatOddsType(oddsType, betInfo) {
    switch (betInfo) {
    case "Correct Score":
        return oddsType.toString().replace(":", "");
    case "Total Goal":
        return oddsType.toString().replace("+", "over");
    default:
        return oddsType;
    }
}

module.exports = { FormatOddsType, GetStake };
