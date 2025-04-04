function findShort(s) { 
    let arr = s.split(/\s+/);
    let shortest = arr[0].length;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length < shortest) {
        shortest = arr[i].length;
      }
    }
  
    return shortest;
  }