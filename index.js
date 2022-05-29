

// https://swapi.dev/api/people/?search={your_search_term}

let id;

let input = document.getElementById("input").value;

async function getData(){
    let url = `https://swapi.dev/api/people/?search=${input}`;


    let res = await fetch(url)

    let data = await res.json()

    console.log(data)
    return data.results
}

function appendData(data){

    let container = document.getElementById("container")
            container.innerHTML= null;

    data.forEach(function(ele){

        let p = document.createElement("p")
            p.innerText = ele.name;

        container.append(p)
    })
}
    
async function main(){
    let etdata = await getData()

    appendData(etdata)
}

function debouncing(func, delay){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function () {
    func();
    },delay);
}

