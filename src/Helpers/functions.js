//function that insertes space before capital letters
const checkUppercase = (title) => {
    //declare an array, where the positions of the uppercase letters are stored
    let uppercaseArray = [];

    //finds the positions of the uppercase letters
    for(let i = 0; i < title.length; i++) {
        let character = title.charAt(i);
        if (character === character.toUpperCase()) {
            uppercaseArray = [...uppercaseArray, i];
        }
    };

    //declare an array, where each word from the title is found and stored 
    let arrayOfWords = [];

    //slices the title, and stores each word in the array above
    for (let i = 0; i < uppercaseArray.length; i++) {
        arrayOfWords = [...arrayOfWords, title.slice(uppercaseArray[i], uppercaseArray[i + 1])];
    }

    //joins the array to a string again, and removed the commas
    return arrayOfWords.join(" ");
}

export { checkUppercase }