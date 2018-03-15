$(document).ready(function () {

});

function GetLocalStorageData(betType = "") {
    var defaultData = localStorage["Previous" + betType];
    console.log(defaultData);
    if (defaultData === "0"
        || defaultData === ""
        || defaultData === "undefined"
        || typeof (defaultData) === "undefined")
        defaultData = "0";
    else {
        defaultData = formatNumber(defaultData.replace(/,/g, ""));
    }

    return defaultData;
}


function FormatType(type, info) {
    switch (info) {
    case "Correct":
        return type.toString().replace(":", "");
    case "Total":
        return type.toString().replace("+", "over");
    default:
        return type;
    }
}

module.exports = { GetLocalStorageData, FormatType };
