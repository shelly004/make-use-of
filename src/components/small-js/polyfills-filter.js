Array.prototype.myFilter = function(callback){
  let result = [];
  for(let i=0;i<this.length;i++){
    if(Object.hasOwnProperty.call(this, i) && callback(this[i]))
      result.push(this[i]); 
  }
  return result;
}

const arr = [1,2,3,4,5,6];

const ans = arr.myFilter((item)=>item%2==0);

console.log(ans);