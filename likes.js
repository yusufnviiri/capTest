import { baseUrl, ourID,  } from './urls.js';

 export const postLike = (item) => {
  console.log(item);
  fetch(`${baseUrl}/${ourID}/likes`, {
    method: "POST",
    headers: {
      Accept: "application/json",

      "Content-Type": 'application/json; charset="utf-8"',
    },
    body: JSON.stringify({
      item_id: item,
    }),
  }).then((response) => response.json());
};
export const checkLikes = () => {
    const likeItem = document.querySelector(".app-container");

  likeItem.addEventListener("click", (e) => {
    let id = e.target.className;
    let likeItem=e.target.parentElement.className;

    let k=e.target.nextElementSibling;

    if (id==="fa fa-heart-o") {
      
      postLike(likeItem);
      console.log("is a number");
       getLikes();
    } else {
       return;
    }
  });
}

  async function getLikes  () {
    const res=await fetch(`${baseUrl}/${ourID}/likes`)
      const data=await res.json()
    //    console.log(data)       
       getLikesNumber(data);
   }






export const getLikesNumber = (likesData) => {
    let likeSpan = document.querySelectorAll('.likes');
    likeSpan.forEach((element,index) => {
likesData.forEach((like) => {
    if(like.item_id===element.id){
        element.innerHTML=`${like.likes} likes`;
    }
   
});
});}




      
export const init = () => {
checkLikes();
window.addEventListener("load", getLikes);
 
;}
export default init;

    
   