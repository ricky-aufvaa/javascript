//0 1 1 2 3 5 8 13

a = 0;
b = 1;
n = 6;
sum = 0;
for(i =2; i<6;i++){
    sum = a+b;
    a=b;
    b = sum;
}
console.log(sum)