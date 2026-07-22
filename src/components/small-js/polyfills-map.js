Array.prototype.myMap = function(callback){

  let result = [];
  for(let i=0;i<this.length;i++){
    if(Object.hasOwnProperty.call(this,i)){ //Does arr have element at index i?
        result.push(callback(this[i], i, this)) //element, index, array
    }
  }
  return result;
}

const arr = [1,2,3,4,5,6];

const ans = arr.myMap((item)=>item*2);

console.log(ans);