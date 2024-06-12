
let product=[
    {
      image:" https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw24b6f761/2023/c1_000156067_000163169_bc_moistrvn_sit_vn_01_00.jpg?yocs=A_",
      emer: "today only!",
      type :"men's body,skin & Hair care",
      offer :      "$5.95",
     offr2 :  "Limit 24 with code: GIFT"
    },
 {  
    image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4d2a6687/2023/c1_000156207_000163260_can_allcndlvn_sit_vn_01_00.jpg?yocs=A_",
    emer :" limited time only!  ",
    type:"  All candles",
    offer: "Buy 3, Get 1 FREE",
    offr2 :"Lowest-priced item is free"
 },
 {
 image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwde5ee19b/2023/xcat_luminoussfllaunch_sit_s_01_00.jpg?yocs=A_",
 emer :" ",
 type: "Select full size body, skin & Hair care",
 offer :" Buy 3 Get 1 free",
 offr2 :"Lowest priced item  is free"
 
 },
 
 {
 image:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw087261b5/2023/c1_000154924_000164066_dif_xmasmind_sit_vn_01_00.jpg?yocs=A_",
   emer :" ",
    type:"Wallflowers Fragrance Refills",
    offer :"5/$27",
   offr2 :" "
 
    }
 ]
 let gran =document.getElementById('grand')
 
 product.map((ele)=>
 
 {
 
 let card =document.createElement("div")
 
 let card2=document.createElement("div")
 card2.className="cl"
 let imggg=document.createElement("img")
 imggg.src= ele.image
 let h2 =document.createElement("h2")
 let p=document.createElement("p")
 let h3 =document.createElement("h2")
 let p2 =document.createElement("p")
 //   let imgg= document.getElementById("imgg")
 //imggg
 h2.innerText=ele.emer
 p.innerText= ele.type
 h3.innerText=ele.offer
 p2.innerText=ele.offr2
 card2.append(imggg)
 card.append(card2,h2,p,h3,p2)
 document.querySelector("#grand").append(card)
 
 })
 let  pick=[
    {
       img:"https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe985d447/hires/026651016.jpg?sh=1500&sfrm=jpg",
       name:" Mahogany Teakwood",
       quality:"Wallflowers Fragrance Refill",
       price:"$7.95",
       mfgdate:"Mix & Match: 5/$27"
    },
    {
       img:"https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw91846810/hires/026580708.jpg?sh=1500&sfrm=jpg",
       name:"Vanillamint Supreme 2X",
       quality:"Mentha Lip Shine",
       price:"$8.95",
       mfgdate:"Mix $ Match All Minis :Buy 3 Get 1 Free"
    },
    {
       img:"https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9851b60c/hires/026664328.jpg?sh=1500&sfrm=jpg",
       name:"Barely There",
       quality:"Nourishing lip tint",
       price:"$12.95",
       mfgdate:"Mix $ Match All Minis :Buy 3 Get 1 Free"
    },
    {
       img:"https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3f374790/hires/026766212.jpg?sh=1500&sfrm=jpg",
       name:"Vanilla bean Noel",
       quality:"Wallflowers Fragrance Refill",
       price:"$7.95",
       mfgdate:"Mix & Match: 5/$27"
    },
 
 
 ]
 
  pick.map((elem)=>
 
 {
 let picdiv=document.createElement("div")
 picdiv.className=("imageee")
 let name = document.createElement("h2")
 
 let imag=document.createElement("img")
 imag.src=elem.img
 //imag.setAttribute.className="imagee"
 
 let p=document.createElement("p")
 let h32=document.createElement("h3")
  
 let btn=document.createElement("button")
 btn.innerText= "ADD TO BAG"
 btn.className=("btnn")
 let mfg =document.createElement("p")
 mfg.style="color: red;"
 p.innerText=elem.quality
 h32.innerText=elem.price
 name.innerText=elem.name
 mfg.textContent=elem.mfgdate
 
 
 // console.log(elem)
 // let Picked= document.getElementById("picked")
 picdiv.append(imag,name,p,h32,mfg,btn)
 
 document.querySelector("#picked").append(picdiv)
 
 })
 
 let image=[ 
 "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw35465dfc/2023/c1_000156117_000163091_bc_tbcmenwoodlnds_sit_hm_01_00.gif?yocs=A_"
 ,
 
 "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw711f3f7e/2023/c1_000156058_000163127_bc_tbcwellaroma_sit_hm_01_00.gif?yocs=A_"
 
 ,
 
 " https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw72a74199/2023/c1_000155869_000224997_ldy_hollaundry_sit_hm_01_00.gif?yocs=A_"
 
 ]
 
 let count=0;
 let prev=document.getElementById('prev')
 let after = document.getElementById('after')
 
 let di=document.createElement("div")
 di.className=("dii")
 let imge=document.createElement("img")
 imge.src=image[count]
 prev.addEventListener("click" , function() {
 count--;
 if(count<0){
 count=image.length-1
 }
 
 imge.setAttribute('src',image[count])
 })
 after.addEventListener("click" , function() {
 count++;
 if(count==image.length){
    count=0;
 }
 
 imge.setAttribute('src',image[count])
 })
 //image.innerText=imag.imgg
 di.append(imge)
 document.querySelector("#new").append(di)
 
 console.log(count) 
 
 
 
 
 
  
 