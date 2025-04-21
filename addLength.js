function addLength(str) {
    let newStr = [];
    let arr = str.split(" ");
    
    for (let i = 0; i < arr.length; i++) {
      newStr.push(`${arr[i]} ${arr[i].length}`);
    }
  
    return newStr;
  }