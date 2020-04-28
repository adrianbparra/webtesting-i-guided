module.exports = {
  add,
};


function add(args) {

  const values = Array.isArray(args) ? args : Array.from(arguments);
  
    if( !values.every(num => !isNaN(num)) ){
      throw new Error("not a number")
    }
  
    return values.reduce((sum,num)=> {
      return sum+num
    },0);
    
}