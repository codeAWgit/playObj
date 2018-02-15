class Fill{
    constructor(arr){
        this.arr = arr
        this.makeFive = ()=>{
            for(var i=this.arr.length; i<5; i++){
                this.arr.push(10)
            }
        }
    }
}

let arr = new Array(1,3,5)
arr2 = new Fill(arr)

arr2.makeFive()

$(() => {
    'use strict'
    
    $('.output').text(JSON.stringify(arr2))
    $('.output').append('[' + arr2.arr.join(', ') + ']')
    
    console.log(arr2)  
})

