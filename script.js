const container = document.querySelector('.container');

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async() =>{
  const response = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
  //console.log(response);
  const posts = await response.json();
  //console.log(posts[0].body);

  posts.map((curElm,index)=>{
      const htmlData =` <div class ="posts">
      <p class="post-id">${postCount++}</p>
      <h2 class="title">${curElm.title}</h2>
      <p class="post-info">${curElm.body}</p>
  </div>`;

  container.insertAdjacentHTML('beforeend',htmlData);

  })

}
 getPost();

 const showData = () =>{
     setTimeout(() => {
         pageCount++;
         getPost();
     }, 300);

 }

 window.addEventListener('scroll', ()=>{
     const {scrollHeight,scrollTop,clientHeight}=document.documentElement;

     if(scrollTop + clientHeight >= scrollHeight){
         console.log('i am at bottom');
         showData();
     }
 })