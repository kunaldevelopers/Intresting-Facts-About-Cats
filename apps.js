let url = "https://catfact.ninja/fact";
let para = document.querySelector("p");
let btn = document.querySelector("button");
let catsData = "";
let btn2 = document.getElementById("btn2");

let refreshPage = function(){
    location.reload();
}

let catFact = function(){
    let n= prompt("Enter Number Only!!");
    n=parseInt(n);
    if(isNaN(n)){
        alert("Invalid Input, Please Try Again!!");
    }

    for(let i =1; i <=n; i++){
        
        fetch(url)
        .then((res)=>{
            return res.json();
        })
            .then((data)=>{
                console.log(`Data ${i}: ${data.fact}`);
                catsData += (`Data ${i}: ${data.fact} <br><br>`);
                para.innerHTML = catsData;
                
            })
        .catch((err)=>{
            console.log(`Error is: ${err}`);
        })

        btn2.addEventListener("click", ()=>{
            para.innerHTML = "";
            refreshPage();
        })
    }
}

btn.addEventListener("click", ()=>{
    catFact();
})