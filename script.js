class Fill{
    constructor(arr){
        this.smallArr = arr
        
        this.makeFive = ()=>{
            for(var i=this.smallArr.length; i<5; i++){
                this.smallArr.push('')
            }
        }
        
        this.makeAllOneNum = (num) => {
            this.smallArr = this.smallArr.map(()=>{
                return num
            })
        }
    }
}

let harray = new Array(1,3,5)
arr = new Fill(harray)



$(() => {
    'use strict'
    
    $('#output').text(JSON.stringify(arr))
    
    arr.makeFive()
    
    $('#output').append('<div>[ ' + arr.smallArr + ' ]</div>') 
    
    arr.makeAllOneNum(1)
    
    $('#output').append('<div>[ ' + arr.smallArr + ' ]</div>')
    
//    $('button').on('click', () => {
//        $('#output').css('display','none')
//    })
    
    setTimeout(()=>{
        alert( arr.smallArr['0'] ** 2 == 1 ? "hi Dan" : "bye Dan")
        arr.otherKey = "About done with " +
        "this timeout."                   //<--Preferred way to line 
        $('#output').append(arr.otherKey)   //-break a string in JS.
    }, 5000)
    

})
