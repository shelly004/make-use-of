Array.prototype.myReduce= function(callback, accumulator){
    for(let i=0;i<this.length;i++){
        if(Object.hasOwnProperty.call(this,i)){
           accumulator = callback(accumulator, this[i],i,this);
        }
    }
    return accumulator;
}

const arr = [1,2,3,4,5];

const ans = arr.myReduce((acc, item)=>acc + item, 0);

console.log(ans);