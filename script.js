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
            left: '120px',
            opacity: '0.75',
            fontSize: '179%'
        });
    }); 

    $("#tog").click( function() {
        $("h4:odd").toggle();
    }); 

    //#region 
    const a = Object.freeze(['11','22','33']);
    const [n, nums] = a;   

    console.log(nums)

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


    function template(strings, ...keys) {
    return (function(...values) {
        var dict = values[values.length - 1] || {};
        var result = [strings[0]];
        keys.forEach(function(key, i) {
        var value = Number.isInteger(key) ? values[key] : dict[key];
        result.push(value, strings[i + 1]);
        });
        return result.join('');
    });
    }
    
    var t1Closure = template`${0}${1}${0}!`;
    console.log(t1Closure('Y', 'A'));  // "YAY!"
    var t2Closure = template`${0} ${'foo'}!`;
    var tmp = t2Closure('Hello', {foo: 'World'})  // "Hello World!"

    console.log(typeof tmp)
    console.log(tmp.valueOf())
    console.log(tmp.toString()) 

    //#endregion
// //}

// {
//     "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
//     "workbench.activityBar.visible": true,
//     "window.menuBarVisibility": "default",
//     "editor.wordWrap": "on",
//     "window.zoomLevel": 0.2,
//     "git.autofetch": true,
//     "diffEditor.ignoreTrimWhitespace": true,
//     "git.confirmSync": false
// }

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