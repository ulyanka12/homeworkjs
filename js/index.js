const a  = parseInt(prompt(`Enter a`));
const b = parseInt(prompt("Enter b"));
const c = parseInt(prompt("Enter c"));

function discriminant(a, b, c) {
 
    let discr =(b*b) + (4 * a * c);
    return discr;
}
 const d = discriminant;
 
 function quadraticEq (a, b, c){
    if (d > 0) {
        const twoA=parseInt(2*a);
        let x1 = (-b + Math.sqrt(d)) / twoA;
       let x2 = -b / twoA + Math.sqrt(d) / twoA;
        return x1, x2;
    }
     else  {
        const twoA=parseInt(2*a);
        const x3 = -b / twoA;
        return x3;
    }
   
 }    

const result = quadraticEq (a, b, c);
document.write(result);
