let maindiv= document.getElementById("root")

 async function  Fetc() {
    try {
        fetch(`http://localhost:3000/user`)
        .then((res)=>res.json())
        .then((data) =>{
            console.log(data)

        } )
    } catch (error) {
        console.log(error)
    }
  
 }  

// Fetc()


let div= document.createElement("div");
let h2= document.createElement("h2");
let category= document.createElement("h2");
let favourite= document.createElement("h2");