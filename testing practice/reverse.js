const reverse = (string) => {

   const arrayWord = Array.from(string);
   const reversedArray = [];

   for( let i = arrayWord.length -1; i >= 0; i--){

    reversedArray.push(arrayWord[i]);
   };

   const reversedWord = reversedArray.join("");

   return reversedWord

}

export default reverse;