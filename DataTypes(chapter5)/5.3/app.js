// 3.1
const ucFirst = str => str[0].toUpperCase() + str.slice(1);
//3.2
function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
};
//3.3
function truncate(str, maxlength) {
  if(str.length > maxlength) {
    return `${str.slice(0,maxlength - 3)}...`;
  };
  return str;
}
//3.4
const extractCurrenctValue = currency => +currency.slice(1);