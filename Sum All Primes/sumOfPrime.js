function sumPrimes(num) {
  var Prime = Array(num+1).fill(true);
  Prime[0] = Prime[1] = false;
  for ( i = 2; i<=Math.sqrt(num); i++){
      if(Prime[i]){
          for(k = i;k*i<=num; k++){
              Prime[i*k] = false;
          }
      }
  }
  console.log(Prime);
  var resArr = [];
  for(j = 0; j<Prime.length; j++){
      resArr.push(Prime.indexOf(true,j));
  }//indexOf()返回在数组中可以找到给定元素的第一个索引,若找不到则返回-1
    resArr = Array.from(new Set(resArr)).filter(function(val){
    return val>0;
  });//排除重复数以及-1;
  return resArr.reduce(function(a,b){
    return a + b;
  });
}
sumPrimes(10);
