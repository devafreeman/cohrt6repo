// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities(age) {
    if (age < 16) {
        return "You can't drive."
    } else if (age >= 16 && age <= 17) {
        return "You can drive but not vote."
    } else if (age >= 18 && age <= 24) {
        return "You can vote but not rent a car."
    } else {
        return "You can do pretty much anything."
    }

}
function oddIndices(index) {

    let dog = [];
    for (let i = 1; i < index.length; i += 2) {
        dog.push(index[i])

    }
    return dog
}
function numOddValues(arr) {
    let cat = 0;
    //hi im cat??
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            cat++
        }
    }
    return cat
}
function averageStringLength(arr) {
    let total = 0

    if (arr.length === 0) {
        return 0
    }
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].length
    }
    return total / arr.length
}

function firstPunctuationIndex(str) {

    if (str.indexOf("!") == -1 && str.indexOf("?") == -1 && str.indexOf(".") == -1) {
        return -1
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "!" || str[i] == "?" || str[i] == ".") {

            return i
        }
    }
}










function addToObj(person, key, value){

if(typeof key !== "string"){
    return "Function must be called with a valid key."
}
person[key] = value
}



// let calcu = ["25", "36", "74", "92", "37" ];
// return 
//    }








// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
};
