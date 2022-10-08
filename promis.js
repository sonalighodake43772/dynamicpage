const posts=[
    {title:'post one',body:'this is post one',CreatedAt:new Date().getTime()},
    {title:'post two',body:'this is post two',CreatedAt:new Date().getTime()}
];

let intervalid=0;
function getPosts()
{
    clearInterval(intervalid);
    intervalid=setInterval(()=>{
        let output=''; 
        posts.forEach((post,index)=> {
            output+=`<li>${post.title}- last updated-${(new Date().getTime()-post.CreatedAt)/1000} seconds ago</li>`;

        });
        // console.log(intervalid);
        document.body.innerHTML=output;
},1000);
}

function createPost(post)
{
    return new Promise((resolve,reject)=>
    {

   
    setTimeout(() => {
        posts.push({...post,CreatedAt:new Date().getTime()});

        
const error=false;
if(!error)
    {
        resolve();
    }
    else{
        reject('wrng');
    }
    
        
    }, 1000);
})
}
//  createPost( {title:"post three",body:"this is post three"})
// .then(getPosts)

//.catch( err=>console.log(err));

function deletePost(post)
{
    return new Promise((resolve,reject)=>
    {

   
    setTimeout(() => {
        if(posts.length>0)
        {
  const element=posts.pop();
  resolve(element);
        }
        else{
            reject("arr is empty now");
        }
    },1000)



        

})
}
createPost( {title:"post three",body:"this is post three"})
createPost( {title:"post four",body:"this is post four"})
.then(()=>{
    getPosts();
    deletePost().then(()=>{
        getPosts();
        deletePost().then(()=>{
            getPosts();
            deletePost().then(()=>{
                getPosts();
                deletePost().then(()=>{
                    getPosts();
                deletePost().then(()=>{})
                    .catch((err)=>(
                        console.log(err)
                    ))
                
                })
            })
        })

    })
    
})

