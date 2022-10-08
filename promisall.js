const promise1=Promise.resolve("hello");
const promise2=10;
const promise3=new Promise((resolve,reject)=>
    setTimeout(resolve,1000,'goodbye')


);
const prmise4=
Promise.all([promise1,promise2,promise3]).then(values=>
    console.log(values));