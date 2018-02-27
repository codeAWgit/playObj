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
    constructor(arr) {            
        this.smallArr = arr || []
    }
    makeFive() {           // Region where methods exist and what their syntax is.
        for(var i = this.smallArr.length; i < 5; i++) {
                this.smallArr.push(0)
            }
        }
        
    makeAllOneNum(num) {
            this.smallArr = this.smallArr.fill(num)
        }
    }
//#endregion

try {
    let arr = new Fill()
} catch (e) {
    //document.write(e.message)
}

//$( () => {                      // Old jQuery stuff
//})
window.onload = function() {     // Main outputs for index.html
    let stringArr = JSON.stringify(arr, null, 3)

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

    var obj = {};
    Object.defineProperty(obj, "x", {value:0, writable:false});
    console.log(obj.x)
    //obj.x = 3.14;
    //#endregion
}
