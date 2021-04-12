// const closureCounter = (money, output) => { // .25
//   return ( money >= .25 ? closureCounter(money % 0.25, output.concat(Math.floor(money/.25) + " quarters ")) 
//     : money >= .10 ? closureCounter(money % 0.10, output.concat(Math.floor(money/.10) + " dimes "))
//      : money >= .05 ? closureCounter(money % 0.05, output.concat(Math.floor(money/.05) + " nickels "))
//       : money >= .01 ? closureCounter(money % 0.01, output.concat(Math.floor(money/.01) + " pennies"))
//        : output );
const closureCounter = (money, output) => {

    var quarters = () => {
      if (money >= .25) {
        output = output.concat(Math.floor(money / .25) + " quarters ");
        money = money % 0.25;
        return output;
      }
    }
    var dimes = () => {
      if (money >= .10) {
        output = output.concat(Math.floor(money / .10) + " dimes ");
        money = money % .1;
        return output;
      }
    }
    var nickels = () => {
      if (money >= .05) {
        output = output.concat(Math.floor(money / .05) + " nickels ");
        money = money % .05;
        return output;
      }
    }
    var pennies = () => {
      if (money >= .01) {
        output = output.concat(Math.floor(money / .01) + " pennies");
        money = money % .01;
        return output;
      }
    }
    quarters();
    dimes();
    nickels();
    pennies();
    return output;
  }

    
  //  var lol = () => {
  //    console.log("made it inside anon function");
  //    if (money >= .25) {
  //     output = output.concat(Math.floor(money / .25) + " quarters ");
  //     money = money % 0.25;
  //     console.log(output);
  //     return output;
  //   }
    // return function () {
    // }
  // }
  // return lol();
  //}



export default closureCounter;





  // return function() { money >= .25 ? money % 0.25, output.concat(Math.floor(money/.25) + " quarters ") : money {
  //   return function() {money >= .10 ? money % 0.10, output.concat(Math.floor(money/.10)+ " dimes " ) : money {
  //     return function() {(money >= .05 ? money % .05, output.concat(Math.floor(money/.05)) + " nickels ") {

  //     }
  //   }
  // }


  //     return function ()
  //    }
  //   if (money >= .10) { 
  //     return closureCounter(money % 0.10, output.concat(Math.floor(money/.10) + " dimes "));
  //   }
  //   if (money >= .05) { 
  //     return closureCounter(money % 0.05, output.concat(Math.floor(money/.05) + " nickels "));
  //   }
  //   if (money >= .01) { 
  //     return closureCounter(money % 0.01, output.concat(Math.floor(money/.01) + " pennies"))
  //   }
  //   else {
  //     return output;
  //   }
  //   // }
  // }





// function closureCounter (money, output) {
//   return function () {
//     (money % 0.01, output.concat(Math.floor(money/.01) + " pennies"))
// }
//   function nickel (money, output) {
//     return closureCounter(money % 0.05, output.concat(Math.floor(money/.05) + " nickels "))
//   }
//     function dimes (money) {
//       return closureCounter(money % 0.10, output.concat(Math.floor(money/.10) + " dimes "))
//     }
//       function quarters (money) {
//         return closureCounter(
//           if (money > .25) {
//             output.concat(Math.floor(money/.25) + " quarters ");
//             return money % 0.25;
//       }
//     }