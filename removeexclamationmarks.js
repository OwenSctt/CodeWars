function remove(string) {
  return string
    .split(' ')                         
    .map(word => {
      while (word.endsWith('!')) {      
        word = word.slice(0, -1);
      }
      return word;
    })
    .join(' ');                         
}