module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map(x => x[0] + x[1]);
  let oldStr;
  
  while(oldStr != str){
    oldStr = str;
    brackets.forEach(bracket => {
      str = str.replace(bracket, '');
    });
  }

  return str.length == 0;
}
