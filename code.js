const fs = require('fs');

const dic = fs.readFileSync('example.in', 'utf8');
const lines = dic.split('\n');
let output = [];
const testCases = lines.shift() * 1;
let caseLength = [];
let counter = 0;
let linesObj = {};
let lineNum = 0;
let dict = {};

lines.forEach(item => {
  if (!isNaN(item) && item !== '') {
    lineNum = item;
    caseLength.push(item);
    linesObj[lineNum] = [];
  } else {
    if(item !== '') {
      linesObj[lineNum] = linesObj[lineNum].length === 0 ? 
                    [item] : [...linesObj[lineNum], item];
    }
  }
  
})

const synonyms = (lines) => {
  let dict = {};
  for(let i=0; i<lines.length; i++){
    let [a, b] = lines[i].split(' ');
    a = a.toLocaleLowerCase();
    b = b.toLocaleLowerCase();
  
    if(dict[a] === undefined){
      dict[a] = [b]
    } else {
      dict[a] = [...dict[a], b];
      const item = dict[a][0]
      if(dict[item].includes(a)) {
        dict[item] = [...dict[item], b]
      }
    }
  
    if(dict[b] === undefined){
      dict[b] = [a]
    } else {
      dict[b] = [...dict[b], a];
      const item = dict[b][0]
      if(dict[item].includes(b)) {
        dict[item] = [...dict[item], a]
      }
    }
  }

  return dict;
}

const queryDict = (lines, dict) => {
  for(let i=0; i<lines.length; i++) {
      let [a, b] = lines[i].split(' ');
      a = a.toLocaleLowerCase();
      b = b.toLocaleLowerCase();
      if(dict[a]?.includes(b) ||
          dict[b]?.includes(a) ||
          a === b) 
          { output.push('synonyms') }
        else {
        output.push('different');
      }
  }
}

for(let index=0; index<caseLength.length; index++) {
  item = linesObj[caseLength[index]];
  if(index === 0 || index % 2 === 0) {
    dict = synonyms(item);
  } else {
    queryDict(item, dict);
    counter++
    if(counter === testCases) break
  }
  
}

fs.writeFileSync('test.out', output.join('\n'));
