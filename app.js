const url="https://api.openweathermap.org/data/2.5/"
const key="c628c5d84e0cebf2ba773adddcb2ab3d"


const setQuery=(e)=>{
    if(e.keyCode==13)
    getResult(searchBar.value)
}

const getResult=(cityName)=>{
    let query=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query);
    fetch(query).then(weather=>{
        return weather.json()
    }).then(displayResult)
}
const displayResult=(result)=>{
    let city=document.querySelector(".city")
    city.innerText=`${result.name}, ${result.sys.country}`
    let temp=document.querySelector(".temp")
    temp.innerText=`${Math.round(result.main.temp)}`
    let desc=document.querySelector(".desc")
    desc.innerText=result.weather[0].description
    let minmax=document.querySelector(".minmax")
    minmax.innerText=`${Math.round(result.main.temp_min)} c / ${Math.round(result.main.temp_min)}`
}

const searchBar=document.getElementById("searchBar")
searchBar.addEventListener("keypress",setQuery)