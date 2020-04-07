
const animationArray = ['\r|', '\r/', '\r-', '\r\\','\r|','\r/', '\r-', '\r\\','\r|' ]
let timeout = 200;
for (const char of animationArray) {
  setTimeout(() =>  process.stdout.write(char), timeout); 
  timeout += 200;
}
setTimeout(() => {
  console.log()
}, 200*(animationArray.length+1));
