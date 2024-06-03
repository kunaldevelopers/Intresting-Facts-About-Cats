let url = "https://catfact.ninja/fact";

fetch(url)
.then((res)=>{
    return res.json();
})
    .then((data)=>{
        console.log("Data 1 : ",data.fact);
        return fetch(url);
    })
        .then((res)=>{
            return res.json();
    })
            .then((data)=>{
                console.log("Data 2 : ", data.fact);
                return fetch(url);
            })
                .then((res)=>{
                    return res.json();
                })
                    .then((data)=>{
                        console.log("data 3 : ", data.fact)
                    })
.catch((err)=>{
    console.log("Error is: ", err);
})

console.log("Cats Fact Data Is Gven Below:")