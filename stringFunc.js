const stringLength=(str)=>{
if(str.length<1||str.length>10) throw new Error('Not Valid string length!');   
 return str.length;

}

const reverseString=(str)=>{
   return str.split('').reverse().join('');
}


