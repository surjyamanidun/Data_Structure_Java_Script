var lastNo,firstNo,sum;
for(var i=0;i<100;i++){
    lastNo=i%10;
    firstNo=Math.floor(i/10);
    sum=lastNo*10+firstNo;
    if(sum===i){
        console.log(i);
    }
}