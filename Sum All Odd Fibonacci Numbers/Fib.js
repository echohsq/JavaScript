function sumFibs(num) {
    var sum = 0;
    if (num < 2) {
        sum = 1;
        return sum;
    } else{
    var a = 1, b = 1;
    sum = 2;
    while(num>=b+a) {
        b = a+b;
        a =b-a;
       if(b%2 !== 0){
    sum = sum +  b;
       }
    }  return sum;
 }
}
sumFibs(4);
