function remove(string) {  
    if (string.endsWith("!")) {
     string = string.replace(/!+$/, "")
      }
   return string;
 }