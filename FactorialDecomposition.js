function decomp(n) {
  // your code
  let ctr, stno, enno;
  let p = [];
  let count = 0;
  let factorialElement = 0;
  let pNumber = 0;
  let result = '';
  
  
  stno = 2;
  enno = n;
  
  for(let num = stno; num <= enno; num++) {
     ctr = 0;
     for(let i = 2 ; i <= num /2 ; i++) {
       if(num % i == 0){
           ctr++;
           break;
       }
    }
    
    if(ctr==0 && num!= 1) {
      p.push(num);
    }
  }

  for(let i = 0; i < p.length; i++){
    for(let j = n ; j > 0; j--){
      factorialElement = j;
      pNumber = p[i];
      while(factorialElement % pNumber == 0){
        count++;
        factorialElement = factorialElement / pNumber;
      }
    }
    result += count > 1 ? p[i].toString() + '^' +count.toString() + ' * ' : p[i].toString() + ' * ';  
    count = 0;
  }
  
  return result.substring(0, result.length - 3);
}
