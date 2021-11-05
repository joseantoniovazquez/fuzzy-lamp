var _ = require('lodash');
var fs = require('fs');

let datos = JSON.parse(fs.readFileSync('data.js'))

function sort() {  
  sortKey = 'GMST'
datos.sort((a, b) => {
      let sortVal = 0;
      const aVal = a.stats[sortKey] || a[sortKey];
      const bVal = b.stats[sortKey] || b[sortKey];
      if (isNaN(aVal) && isNaN(bVal)) {
        if (aVal > bVal) sortVal = 1;
        if (aVal < bVal) sortVal = -1;
      } else {
        if (aVal > bVal || isNaN(bVal)) sortVal = 1;
        if (aVal < bVal || isNaN(aVal)) sortVal = -1;
      }
      if (sortVal !== 0 ) sortVal *= -1;
      return sortVal;
    });
  print(datos)
}

function validate(value){
  if(isNaN(value)){
    return "";
  }else{
    return value;
  }
}
console.log('hol')
function print(input) {
  table = []
  input.forEach(item => {
    let obj={
      'GMS':validate(item.stats['GMS']),
      'GMST':validate(item.stats["GMST"]),
      'RCTG':validate(item.stats["RCTG"] ),
      'REC':validate(item.stats["REC"] ),
      'RCLNG':validate(item.stats["RCLNG"] ),
      'RCYDS':validate(item.stats["RCYDS"] ),
      'RUYDS':validate(item.stats["RUYDS"] ),
      'RUTDS':validate(item.stats["RUTDS"] ),
      'RUATT':validate(item.stats["RUATT"]) 
      }
    table.push(obj)
  })
  console.table(table)
}
sort()