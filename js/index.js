const a = parseInt(prompt(`Enter a`));
const b = parseInt(prompt("Enter b"));
const c = parseInt(prompt("Enter c"));

function discriminant(a, b, c) {

 let discr = (b * b) + (4 * a * c);
 return discr;
}
const d = discriminant;

function quadraticEq(a, b, c) {
 if (d > 0) {
  
  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = -b / (2 * a) + Math.sqrt(d) / (2 * a);
  return [x1, x2];
 }
 else if (d===0) {

  const x3 = -b / (2 * a);
  return x3;
 }
 else{
  document.write("No answer");
 }
}

const result = quadraticEq(a, b, c);
document.write(result);



