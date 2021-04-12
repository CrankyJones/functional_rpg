const recursiveCounter = (money, output) => { // .25
  return (money >= .25 ? recursiveCounter(money % 0.25, output.concat(Math.floor(money / .25) + " quarters "))
  : money >= .10 ? recursiveCounter(money % 0.10, output.concat(Math.floor(money / .10) + " dimes "))
  : money >= .05 ? recursiveCounter(money % 0.05, output.concat(Math.floor(money / .05) + " nickels "))
  : money >= .01 ? recursiveCounter(money % 0.01, output.concat(Math.floor(money / .01) + " pennies"))
  : output);
  
  //   if (money >= .25) {
    //     return recursiveCounter(money % 0.25, output.concat(Math.floor(money/.25) + " quarters "));
    //   }
    //   if (money >= .10) { 
      //     return recursiveCounter(money % 0.10, output.concat(Math.floor(money/.10) + " dimes "));
      //   }
      //   if (money >= .05) { 
        //     return recursiveCounter(money % 0.05, output.concat(Math.floor(money/.05) + " nickels "));
        //   }
        //   if (money >= .01) { 
          //     return recursiveCounter(money % 0.01, output.concat(Math.floor(money/.01) + " pennies"))
          //   }
          //   else {
            //     return output;
            //   }
            }
            export default recursiveCounter;