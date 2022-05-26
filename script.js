const ourIDs = "WqojmUbB8A3rjuXUI";
const ourID = "VquE0tA2WmPqHydxagQA";
const oursID = "WqojmU";

const poo = " https://api.tvmaze.com/seasons/1/episodes";
let baseUrl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps";
let item_id = "item_id";

let cards = document.querySelector(".cards");
const displayPoke = (card) => {
  let splice = card.slice(0, 3);
  let item = "";

  splice.forEach((element) => {


    
    item += `<div class="card-body">
       <img src="${element.image.medium}" alt="" >
       <h3>${element.name} </h3>
       <div class="${element.id}">
       <i class="fa fa-heart-o" aria-hidden="true"id='card${element.id}'></i> <span class=" likesnumber">${element.id}</span>
        </div>
       <input type="text" placeholder="comment" id='${element.id}'>
    </div>`;
  });
  cards.innerHTML = item;
};
const displaylikes = (likes) => {
  let splice = likes.slice(0, 3);
  let item = "";

  splice.forEach((element) => {
    item += `<div class="card-body">
       <img src="${element.image.medium}" alt="" >
       <h3>${element.name} </h3>
       <div class="${element.id}">
       <i class="fa fa-heart-o" aria-hidden="true"id='card${element.id}'></i> <span>${element.id}</span>
        </div>
       <input type="text" placeholder="comment" id='${element.id}'>
    </div>`;
  });
  cards.innerHTML = item;
};


let likesNumber=document.createElement('span')
likesNumber.classList.add('likesnumber')
likesNumber.innerHTML='am a winer'

if(likesNumber){
console.log(likesNumber.innerHTML)
}else{
    console.log('no apan for likes')
}


function compare(data,likes){
    if(data.length>likes.length){
        console.log('data is bigger')
    }else{
        console.log('likes is bigger')
    }
}





async function getpoke() {
  let res = await fetch(poo);
  let data = await res.json();

  displayPoke(data);
  // console.log(data)}
}
window.addEventListener("load", getpoke);

const postLike = (item) => {
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
const likeItem = document.querySelector(".cards");
if (!likeItem) {
  getpoke();
  console.log("no");
} else {
  likeItem.addEventListener("click", (e) => {
    let id = e.target.parentElement.className;
    if (isNaN(id)) {
      console.log("is not a number");
    } else {
      postLike(id);
      console.log("is a number");
    }
  });
}

const getLikes = () => {
  fetch(`${baseUrl}/${ourID}/likes`)
    .then(res=(response) => response.json())
    .then(resp=(res) => console.log(res));
   
   
};

window.addEventListener("load", getLikes);
const comment = document.querySelector(".comment");

const postComent = (id,name,comment) => {
  console.log(id,name,comment);
    fetch(`${baseUrl}/${ourID}/comments`, {
        method: "POST",
        headers: {
        Accept: "application/json",
    
        "Content-Type": 'application/json; charset="utf-8"',
        },
        body: JSON.stringify({
        item_id: id,
        username: name,
        comment: comment,
        }),
    }).then((response) => response.json());
    }
    let ids=3;
    
    comment.addEventListener("submit", (e) => {
        
        e.preventDefault();
        let name = document.querySelector(".names").value;
        let comment = document.querySelector("textarea").value;

        postComent(77,name,comment);
        name.value = "";
        comment.value = "";

       
    });
 const getComments = () => {
    fetch(`${baseUrl}/${ourID}/comments?item_id=2`)
    .then((response) => response.json())
    .then((json) => console.log(json));
    }
    window.addEventListener("load", getComments);
