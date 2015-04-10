document.write("Euler probs 1-3 <br>");

sum=0;
for(i=0;i<1000;i++){
  if(i%3==0||i%5==0){
    sum=sum+i;
  }
}
document.write("<br>Sum is: "+sum+"<br>");

lVal=1;
cVal=1;
nVal=0;
sum=0;
while(lVal<4000000){
  if(lVal%2==0){
    sum=sum+lVal;
  }
  nVal=cVal+lVal;
  lVal=cVal;
  cVal=nVal;    
}
document.write("<br>Sum is: "+sum+"<br><br>");

num =600851475143;
prime=0;
for(i=10000;i>1;i--){
	for(j=i;j>2;j--){
    if(i%(j-1)==0){prime=1;}    
  }
  if(prime==0){
    if(num%i==0){
    	document.write("max is: " i );
      break;
    }    	
  }
  prime=0;
}	
