
const settings = [
    {
        name: "level", isActive: false, choiceValue: "10x4",
        options: ["4x4", "6x5", "7x6", "10x6"]
    },
    {
        name: "color", isActive: false, choiceValue: "purple", 
        colorOfMatchingCards: "lightgray",
        options: ["violet", "blue", "orange", "green"]
    },
    {
        name: "speed", isActive: false, choiceValue: "normal",
        options: ["normal", "blue", "orange", "green"]
    },

];


function setLevels(value) {
    settings[0].choiceValue = value;
}

function setColor(value) {
    settings[1].choiceValue = value;
}

function setChoiceValue(idxSetting, value) {
    settings[idxSetting].choiceValue = value;
}

function getLevel() {
    return settings[0].choiceValue;
}
function getColor() {
    return settings[1];
}



export {
    settings,
    setColor,
    setLevels,
    setChoiceValue,
    getColor,
    getLevel,

}