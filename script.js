'use strict';
function clrWork() {
    document.getElementById("output").style.display = "none"
    document.getElementById("output2").style.display = "none"
}
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

    let outputDOM = document.getElementById('output')
    outputDOM.innerHTML = '<p> ' + stringArr + ' </p>' 
    //$('#output').text(stringArr)
    
    arr.makeFive()
    outputDOM.innerHTML += '<p>[ ' + arr.smallArr + ' ]</p>'
    //$('#output').append('<div>[ ' + arr.smallArr + ' ]</div>') 
    
    arr.makeAllOneNum(1)
    outputDOM.innerHTML += '<p>[ ' + arr.smallArr + ' ]</p>';
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
    //  let chgCounterClosure = ( () => {
    //      let counter = 0
    //      return {
    //          count: function(){
    //              return counter
    //          },
    //          inc: function() {
    //              counter++
    //          },
    //          dec: function() {
    //              counter--
    //          }
    //      }
    //  })()
     
    //  chgCounterClosure.count()
    //  chgCounterClosure.inc()
    //  chgCounterClosure.inc()
    //  chgCounterClosure.count()
    //  chgCounterClosure.dec()

    // document.getElementById('output').innerHTML += '<br/>' + chgCounterClosure.count()
    //#endregion
    //#region   IIFEs  
    // (function () {
    //     console.log("My favorite number is 3");
    //   })()

    // let favNumber
    // (favNumber = function(num = 4) {
    //     console.log("My favorite number is " + num);
    //   })()
      
    // favNumber(11)
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

    const a = Object.freeze(['11','22','33']);
    const [n, ...nums] = a;   

    console.log(n)

    const head = ([x, ...rest]) => rest

    console.log(head(a))


        /**
         * JSDOC comment
         * @param {number} x
         */
    const add = x => {
            /**
             * JSDOC comment
             * @param {number} y
             */
        return y => x + y
    }
    const add3 = add(3)
    console.log(add3(9))


        /**
         * JSDOC comment
         * @param {Function} funcz
         *  @param {number} a
         */
    const partial = (funcz, a) => funcz(a)
    const add9 = partial(add, 9)
    console.log(add9(9))
// https://www.youtube.com/watch?v=FYXpOjwYzcs   34 min mark

    //#endregion
}

//#region saved VS code settings
// User settings
// {
//     "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
//     "workbench.activityBar.visible": true,
//     "window.menuBarVisibility": "default",
//     "editor.wordWrap": "on",
//     "window.zoomLevel": 0.1,
//     "git.autofetch": true,
//     "diffEditor.ignoreTrimWhitespace": true
// }

//Keybindings.JSON
// Place your key bindings in this file to overwrite the defaults
// [
//     {
//         "key": "ctrl+w",
//         "command": "workbench.action.toggleZenMode"
//     },
//     {
//         "key": "ctrl+k z",
//         "command": "-workbench.action.toggleZenMode"
//     },
//     {
//         "key": "ctrl+alt+s",
//         "command": "workbench.action.files.saveAll"
//     },
//     {
//         "key": "ctrl+k s",
//         "command": "-workbench.action.files.saveAll"
//     },
//     {
//         "key": "ctrl+g",
//         "command": "editor.foldAll",
//         "when": "editorTextFocus"
//     },
//     {
//         "key": "ctrl+k ctrl+0",
//         "command": "-editor.foldAll",
//         "when": "editorTextFocus"
//     },
//     {
//         "key": "ctrl+l",
//         "command": "editor.unfoldAll",
//         "when": "editorTextFocus"
//     },
//     {
//         "key": "ctrl+k ctrl+j",
//         "command": "-editor.unfoldAll",
//         "when": "editorTextFocus"
//     }
// ]
//#endregion
