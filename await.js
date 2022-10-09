// promise
/*console.log("person1:shows ticket");
console.log("person2:shows ticket");

const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');

    },3000);
}
)

const getPopcorn=promiseWifeBringingTicks.then((t)=>
{
    console.log('wife:i have tics');
    console.log('husband:we should go in');
    console.log('wife:i am hungry');
  return new Promise((resolve,reject)=>
  resolve(`${t} popcorn`));

})
const getButter=getPopcorn.then((t)=>{
    console.log('husband:i got some popcoorn');
    console.log('husband:we should go in');
    console.log('wife:i need butter on my popcorn');
  return new Promise((resolve,reject)=>
  resolve(`${t} butter`));


});
const getColdDrinks=getButter.then((t)=>
{
    
    console.log('wife:i need coldrinks with my popcorn')
    console.log('husband:i get colddrinks')
    return new Promise((resolve,reject)=>
    resolve(`${t} colddrink`)
    )
})

console.log("person4:shows ticket");
console.log("person5:shows ticket");*/


// async await
console.log("person1:shows ticket");
console.log("person2:shows ticket");

const preMovie = async () => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');

        }, 3000);
    }
    )
    const getPopcorn = new Promise((resolve, reject) => { resolve('popcorn') })
    const addbutter = new Promise((resolve, reject) => { resolve('butter') })
    const getColdDrinks = new Promise((resolve, reject) => { resolve('colddrink') })
    // let ticket = await promiseWifeBringingTicks;
    // console.log('wife:i have tics');
    // console.log('husband:we should go in');
    // console.log('wife:i am hungry');



    // let popcorn = await getPopcorn;
    // console.log(`husband:i got some ${popcorn} `);
    // console.log('husband:we should go in');
    // console.log('wife:i need butter on my popcorn');

    // let butter = await addbutter;
    // console.log(`husband:i got some ${butter} on popcoorn`);
    // console.log('husband:anything else ');
    // console.log('Wife:lets goo we are getting late');
    // console.log('husband:thank you');

    // let coke=await getColdDrinks;
    // console.log('wife:i need coldrinks with my popcorn')
    // console.log(`husband:i got ${coke}`)

    // promise.all
    let  ticket=await promiseWifeBringingTicks
    let [popcorn,butter,coke]=await Promise.all([getPopcorn,addbutter,getColdDrinks])
    console.log(`${popcorn},${butter},${coke}`);

    return ticket;
}


preMovie().then((m) => console.log(`person 3 shows: ${m}`))
console.log("person4:shows ticket");
console.log("person5:shows ticket");