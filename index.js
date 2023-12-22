let cardData = [
     {
          img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          address1: "655 W. 1525 S.",
          address2: "CLEARFIELD, UT",
          address3: "LOT: 116",
          price: "$915,900",
          place: "Wilcox Farms Middleton"
     },
     {
          img: "https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg",
          address1: "995 W. 1525 S.",
          address2: ["CLEARFIELD, UT", "LOT: 116"],
          address3: "LOT: 116",
          price: "$999,900",
          place: "Wilcox Farms "
     },
     {
          img: "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp",
          address1: "889 W. 1525 S.",
          address2: ["CLEARFIELD, UT", "LOT: 116"],
          address3: "LOT: 116",
          price: "$5,419,900",
          place: "Wilcox  Middleton"
     },

     {
          img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          address1: "655 W. 1525 S.",
          address2: "CLEARFIELD, UT",
          address3: "LOT: 116",
          price: "$915,900",
          place: "Wilcox Farms Middleton"
     },
];
let cardData1 = [
     {
          img: "https://media.istockphoto.com/id/1279204567/photo/colorful-townhouses-in-calgary-alberta-canada.jpg?s=612x612&w=0&k=20&c=hxBTNWm5u4pgJCCks4VXq0jXOeA92qUF4sV6Ppp6dxU=",
          address1: "655 W. 1525 S.",
          address2: "CLEARFIELD, UT",
          address3: "LOT: 116",
          price: "$915,900",
          place: "Wilcox Farms Middleton"
     },
     {
          img: "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.jpg?s=612x612&w=0&k=20&c=vgQesOXDRzz0UfOZxmUtE-rFe75YgA9GvkKS8eeeumE=",
          address1: "995 W. 1525 S.",
          address2: ["CLEARFIELD, UT", "LOT: 116"],
          address3: "LOT: 116",
          price: "$999,900",
          place: "Wilcox Farms"
     },
     {
          img: "https://www.shutterstock.com/image-illustration/3d-rendering-townhouses-evening-260nw-1505613629.jpg",
          address1: "889 W. 1525 S.",
          address2: ["CLEARFIELD, UT", "LOT: 116"],
          address3: "LOT: 116",
          price: "$5,419,900",
          place: "Wilcox Middleton"
     },
     {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxVx2A6aLcxxxdfzNsm21MAgs4kXjluztW5_MSkZDr7jC6jyo4WSMwfZcJz5Q_op9jWS0&usqp=CAU",
          address1: "123 Main St.",
          address2: "Anytown, USA",
          address3: "LOT: 117",
          price: "$750,000",
          place: "Sunny Valley Estates"
     },

];




let con1 = document.getElementById("con1");
let container = document.getElementById("container");
let cardimg = document.getElementById("cardimg")
let address1 = document.getElementById("address1")
let address2 = document.getElementById("address2")
let address3 = document.getElementById("address3")
let price = document.getElementById("price")
let place = document.getElementById("Wilcox")
let arrowfwd = document.getElementById("arrow-btn-fwd");
let arrowrev = document.getElementById("arrow-btn-rev")
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let outercontainer = document.getElementById("outer-container");





cardData.forEach(obj1 => {
     let stickers = document.getElementById("stickers")

     let container = document.createElement("div");

     let stickerimg = document.createElement('img');
     stickerimg.src = obj1.img;
     stickerimg.id = "sticker-img"

     let stickertext = document.createElement("p");
     stickertext.innerHTML = obj1.address1;


     let stickerbold = document.createElement("h1");
     stickerbold.innerHTML = obj1.address2;
     stickerbold.id = "sticker-text"
     stickertext.id = "sticker-text"
     container.id = "stick-img-text"
     container.appendChild(stickerimg);
     container.appendChild(stickertext);
     container.appendChild(stickerbold);
     stickers.appendChild(container)

});









btn1.addEventListener("click", single);
btn2.addEventListener("click", town);

let cardsAdded = false;

function single() {

     if (cardsAdded) return;


     for (let i = 0; i < 2 && i < cardData.length; i++) {
          createcard(cardData[i]);
     }

     cardsAdded1 = true;
     cardsAdded = true;
}

function createcard(data) {
     const cardClone = container.cloneNode(true);
     cardimg.src = data.img;
     address1.innerHTML = data.address1;
     address2.innerHTML = data.address2;
     address3.innerHTML = data.address3;
     price.innerHTML = data.price;
     place.innerHTML = `<p><br/>${data.place}</p>`;
     con1.appendChild(cardClone);
     //console.log(data);
}



let cardsAdded1 = false;

function town() {

     if (cardsAdded1) return;


     for (let i = 0; i < 2 && i < cardData.length; i++) {
          createcard(cardData[i]);
     }


     cardsAdded1 = true;
     cardsAdded = true;


}

function createcard(data) {
     const cardClone = container.cloneNode(true);
     cardimg.src = data.img;
     address1.innerHTML = data.address1;
     address2.innerHTML = data.address2;
     address3.innerHTML = data.address3;
     price.innerHTML = data.price;
     place.innerHTML = `<p><br/>${data.place}</p>`;
     con1.appendChild(cardClone);
     //  console.log(data);
}



const words = [
     "living Room",
     "Bath room",
     "Hall",
     "living Room",
     "Bath room",
     "living Room",
     "Bath room",
     "Hall",
     "living Room",
     "Bath room",
     "Hall",
];

const images = [
     "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
     "https://www.rennovate.co.in/wp-content/uploads/2022/09/blog10-1.jpg",
     "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
     "https://www.rennovate.co.in/wp-content/uploads/2022/09/blog10-1.jpg", "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
     "https://www.rennovate.co.in/wp-content/uploads/2022/09/blog10-1.jpg",
     "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
     "https://www.rennovate.co.in/wp-content/uploads/2022/09/blog10-1.jpg",
];

images.forEach((imgSrc, index) => {
     let container = document.getElementById("imageContainer");

  
     let imageContainer = document.createElement("div");
     imageContainer.className = "image-container";

    
     let image = document.createElement('img');
     image.src = imgSrc;

     
     let textOverlay = document.createElement("div");
     textOverlay.className = "text-overlay";
     textOverlay.innerHTML = words[index];

    
     imageContainer.appendChild(image);
     imageContainer.appendChild(textOverlay);

    
     container.appendChild(imageContainer);
});

let menu = document.getElementById("nav-menu");
let manu = document.getElementsByClassName("manu")[0]
let i=0;
menu.addEventListener("click",()=>{
     if(i%2==0){
     manu.style.display = "flex"
     console.log("click")
     }else{
          manu.style.display = "none"
     }
     i++
})



let search = document.getElementsByClassName("sear")[0]
let search1 = document.getElementsByClassName("search")[0];

let x=0;
search.addEventListener("click",()=>{
     if(x%2==0){
          search1.style.display = "block"
     }else{
          search1.style.display = "none"

     }
     x++;
})


///////////////////////////////////////////////////contrast
let Contrast = document.getElementById("Contrast");
let wordings1 = document.querySelectorAll(".wordings-1");
let wordings = document.querySelectorAll(".wordings");
let z=0;
Contrast.addEventListener("click", () => {

     if(z%2==0){
          z++;
    let body = document.body;
    body.style.backgroundColor = "black";
    body.style.color = "white";
    
    wordings.forEach(el => {
        el.style.backgroundColor = "black";
    });

    wordings1.forEach(el => {
        el.style.backgroundColor = "black";
    });
    Contrast.style.border = "1px solid blue"
}else{
     z++;
     let body = document.body;
    body.style.backgroundColor = "white";
    body.style.color = "black";
    
    wordings.forEach(el => {
        el.style.backgroundColor = "white";
    });

    wordings1.forEach(el => {
        el.style.backgroundColor = "white";
    });
    Contrast.style.border = "none"
}



});



/////////////////////////////////////////////////////cancel
let cancel = document.getElementsByClassName("cancel")[0];

cancel.addEventListener("click",()=>{
let botclose = document.getElementById("bot-feature");
botclose.style.display = "none"
})

//////////////////////////////////////////////////////bot open
let body = document.body;

let botopen = document.getElementsByClassName("bot-open")[0];
     let bt=0;
botopen.addEventListener("click", () => {
if(bt%2==0){
    let bot = document.getElementById("bot-feature");
    bot.style.display = "block";
    console.log("hello");
    bt++;
}else{
    let bot = document.getElementById("bot-feature");
     bot.style.display = "none";
     bt++;
}
});


///////////////////////////////////////////////// HIGH LIGHT
let highlight = document.getElementById("high");
let c = 0;

highlight.addEventListener("click", () => {
    let anchortags = document.getElementsByTagName("a");
    
    if (c % 2 == 0) {
        c++;
        for (let i = 0; i < anchortags.length; i++) {
            anchortags[i].style.backgroundColor = "yellow";
            anchortags[i].style.color = "black";
        }
    } else {
        for (let i = 0; i < anchortags.length; i++) {
            anchortags[i].style.backgroundColor = ""; // Reset to default
            anchortags[i].style.color = "black";
        }
        c++;
    }
});


//////////////////////////////////////////////video play pause
let pause = document.getElementById("pause");
let s = 0; 
let vid = document.getElementsByTagName("video")[0];

pause.addEventListener("click", () => {
    if (s % 2 == 0) {
        s++;
        vid.pause(); 
    } else {
        s++;
        vid.play(); 
    }
});




///////////////////////////////////cursor

let cursor = document.getElementById("cursor");
let cur = ["pointer","grab","wait","default"]
let q = 0;
cursor.addEventListener("click", () => {
    document.body.style.cursor = cur[q];
    q++;
});



////////////////////////font family
let textalline = document.getElementById("text-alline");
let fount = document.getElementById("fount");

const fontFamilyArray = [
    "Arial, sans-serif",
    "Helvetica, sans-serif",
    "Georgia, serif",
    "Times New Roman, Times, serif",
    "Courier New, Courier, monospace",
    "Verdana, Geneva, sans-serif",
    "Tahoma, Geneva, sans-serif",
    "Comic Sans MS, cursive, sans-serif"
];

let xx = 0;

fount.addEventListener("click", () => {
    let body = document.body;
    body.style.fontFamily = fontFamilyArray[xx];
    xx++;
    if (xx >= fontFamilyArray.length) {
        xx = 0;  
    }
});


let hide = document.getElementById("hide");
let ss = 0;

hide.addEventListener("click", () => {
    let imgList = document.getElementsByTagName("img");
    if (ss % 2 == 0) {
        for (let i = 0; i < imgList.length; i++) {
            imgList[i].style.visibility = "hidden";
        }
    } else {
        for (let i = 0; i < imgList.length; i++) {
            imgList[i].style.visibility = "visible";
        }
    }
    ss++;
});


let chat = document.getElementById("chat")

let textus = document.getElementsByClassName("text-us")[0]
     let ch=0;
textus.addEventListener("click",()=>{
     if(ch%2==0){
          ch++;
     chat.style.display = "block"
     }else{
          chat.style.display = "none"
          ch++;
     }
})
