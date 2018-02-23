'use strict';

//#region class Fill constructor 
class Fill {
    /**
     * JSDOC comment
     * @param {Array} arr 
     */
    constructor(arr) {                    // Region to initialize class objects.           
        //if (arr === undefined) {arr = []}   Good to initialize params.
        this.smallArr = arr || []         // This does the same as the previous extra line above.
    }
    makeFive() {                          // Region where methods exist and how their syntax looks.
        for(var i = this.smallArr.length; i < 5; i++) {
                this.smallArr.push(0)
            }
        }
        
    makeAllOneNum(num) {
            this.smallArr = this.smallArr.fill(num)
        }
    }
//#endregion

let harray //= new Array(3)
let arr

try {
    arr = new Fill(harray)
} catch (e) {
    //document.write(e.message)
}

//#region factorialize function
 /*                     First way I learned to make this function.
function factorialize(num) {
    let result = 1
	for (let i = 1; i <= num ; i++){
		result *= i;
	}
	return result;
} 
                     Second way I learned to make this function.
function factorialize(num) {		 
	if (num == 1 || !num){
      return 1}
	return num * factorialize(num-1)
} */
                // Most recent way I've learned to make this function.
// let factorialize = (num) => {		
// 	return (num === 1 || num === 0 ? 1 : num * factorialize(num - 1))
// }
//#endregion

//$( () => {                                 // Old jQuery stuff
//})

window.onload = function() {                // Main outputs for index.html
    let stringArr = JSON.stringify(arr, null, 2)
    console.count()
    console.log(stringArr)
    let outputDOM = document.getElementById('output')
    outputDOM.innerHTML = stringArr 
    //$('#output').text(stringArr)
    
    arr.makeFive()
    outputDOM.innerHTML += '<div>[ ' + arr.smallArr + ' ]</div>'
    //$('#output').append('<div>[ ' + arr.smallArr + ' ]</div>') 
    
    arr.makeAllOneNum(1)
    outputDOM.innerHTML += '<div>[ ' + arr.smallArr + ' ]</div>'
    //$('#output').append('<div>[ ' + arr.smallArr + ' ]</div>')

    
    //#region playing with setTimeout
    // let timeout = setTimeout(() => {
    //     alert( arr.smallArr[0] ** 2 == 1 ? 'hi Dan' : 'bye Dan')
        
    //     arr.otherKey = "About done with " + //<--Preferred way to line
    //     "this timeout."                        //-break a string in JS.
    //     //$('#output').append(arr.otherKey)   
    //     $('#output').append('<br/><p>Five factorial is: ' + 
    //                         factorialize(5) + '</p>')
    // }, 2000)
    //#endregion

    //#region Closure example to access, increase a local variable in the self-invoked function.
    let largestOfFour = ( () => {
        let counter = 0
        return function () {
            return ++counter
        }
    })()

    outputDOM.innerHTML += largestOfFour()
    //#endregion

    //#region    Test code region 
    // document.getElementById('output').innerHTML += largestOfFour()

        //Example of using continue in a for loop to jump over certain numbers & keep them from 
        //  adding to the text string to later output to the screen.
    // var text = "";
    // var i;
    // for (i = 1; i < 10; i++) {
    //     if (i === 5 || i === 7) continue
    //     text += i + "<br>"
    // }

    // document.getElementById("output").innerHTML += text

    // let person = {
    //     firstName:"John",
    //     lastName: "Doe",
    //     fullName: function() {
    //         return this.firstName + " " + this.lastName
    //     }
    // }

    // let myObject = {
    //     firstName:"Mary",
    //     lastName: "Doe"
    // }

    // document.getElementById("output").innerHTML += person.fullName.call(myObject)

    // let chunkArrayInGroups = (arr, size) => {
    //     let newRay = []
        
    //     while( arr.length ) { 
    //         newRay.push(arr.splice(0,size))
    //     }
    //     return newRay
    // }
    
    // console.error(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));
    //#endregion

}