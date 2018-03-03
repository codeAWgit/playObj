'use strict';

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

let arr = new Fill()

try {} 
catch (e) {//document.write(e.message)
}

//$( () => {                      
//})
//window.onload = function() {     // Not using currently due to defer attr. in external 
                                    // script file tag in index.html.
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

    $("#anima").click(function(){
        $("#output").animate({
            left: '220px',
            opacity: '0.75',
            fontSize: '179%'
        });
    }); 

    $("#tog").click( function() {
        $("h4:odd").toggle();
    }); 

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

    const a = Object.freeze(['11','22','33']);
    const [n, ...nums] = a;   

    //console.log(n)

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
    //console.log(add3(9))

        /**
         * JSDOC comment
         * @param {Function} funcz
         *  @param {number} a
         */
    const partial = (funcz, a) => funcz(a)
    const add9 = partial(add, 9)
    //console.log(add9(9))
// https://www.youtube.com/watch?v=FYXpOjwYzcs   34 min mark

    var obj = {};
    Object.defineProperty(obj, "x", {value:0, writable:false});
    //console.log(obj.x)
    //obj.x = 3.14;  This is not allowed because use strict is in use.    
    
    function f() {
        return this.a;
      }

    var g = f.bind({a: 'unicycle'});
    console.log(g());

    var h = g.bind({a: 'lens'});
    console.log(h())


    function theSameOldFoo(name){ 
        name = name || 'Bar';
        //name = name && 'Bar';
        console.log("My best friend's name is " + name);
      }
      
      theSameOldFoo(); 
      theSameOldFoo('Beau'); 

      var myNumber = 15;
      console.log(myNumber.toString(16),  // returns 80
      myNumber.toString(8),   // returns 200
      myNumber.toString(2))   // returns 10000000

    //#endregion
//}
