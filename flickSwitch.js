function flickSwitch(arr) {
    let state = true;
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "flick") {
        state = !state;
      }
      result.push(state);
    }
  
    return result;
  }