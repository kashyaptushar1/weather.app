const inputBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")





const apikey = "a1b6f748c77a51b3460b6eafb2cfc96f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
 async function checkWeather(city){
    if (city.toLowerCase() === "jaypee") {
        weatherIcon.src = "./photo.svg"
        document.querySelector(".temp").innerHTML = "Hello, I am tushar";
        document.querySelector(".city").innerHTML = "B.sc(c.s)";
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"  // This will print "bhag gandu" to the console
        return;  // Stop execution if the city is "jaypee"
    }


    const response =await fetch(apiUrl +city + `&appid=${apikey}`)
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        const data = await response.json()
        // console.log(data)
       
            document.querySelector(".city").innerHTML = data.name;
        
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
    
    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear-sky.png"
    }else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloudy.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png"
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"
    
    }
    }
   
searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value)
    inputBox.value = ""

   
})
inputBox.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        checkWeather(inputBox.value)
        inputBox.value = ""
    }
 
})

