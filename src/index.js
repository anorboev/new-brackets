module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map(x => x[0] + x[1]);

  while(str.length > 1){
    var oldStr = str;
    brackets.forEach(bracket => {
      str = str.replace(bracket, '');
    });
    if(oldStr == str)
      break;
  }
  
  return str.length == 0;
}