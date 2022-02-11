document.querySelector('#weekly').addEventListener("click", trackWeek);
document.querySelector('#daily').addEventListener("click", trackDay);
document.querySelector('#monthly').addEventListener("click", trackMonth);

let currentWork = document.querySelector("#current-work");
let previousWork = document.querySelector("#previous-work");

let currentPlay = document.querySelector("#current-play");
let previousPlay = document.querySelector("#previous-play");

let currentStudy = document.querySelector("#current-study");
let previousStudy = document.querySelector("#previous-study");

let currentExercise = document.querySelector("#current-exercise");
let previousExercise = document.querySelector("#previous-exercise");

let currentSocial = document.querySelector("#current-social");
let previousSocial = document.querySelector("#previous-social");

let currentSelfCare = document.querySelector("#current-self-care");
let previousSelfCare = document.querySelector("#previous-self-care");

window.onload = trackWeek;

 dataWeek = (data) => {
    currentWork.innerHTML = `${data[0].timeframes.weekly.current}hrs` 
    previousWork.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous}hrs`
    currentPlay.innerHTML = `${data[1].timeframes.weekly.current}hrs`
    previousPlay.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous}hrs`
    currentStudy.innerHTML = `${data[2].timeframes.weekly.current}hrs`
    previousStudy.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous}hrs`
    currentExercise.innerHTML = `${data[3].timeframes.weekly.current}hrs`
    previousExercise.innerHTML = `Last Week - ${data[3].timeframes.weekly.previous}hrs`
    currentSocial.innerHTML = `${data[4].timeframes.weekly.current}hrs`
    previousSocial.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous}hrs`
    currentSelfCare.innerHTML = `${data[5].timeframes.weekly.current}hrs`
    previousSelfCare.innerHTML = `Last Week - ${data[5].timeframes.weekly.previous}hrs`
}

 dataDay = (data) => {
    currentWork.innerHTML = `${data[0].timeframes.daily.current}hrs` 
    previousWork.innerHTML = `Yesterday - ${data[0].timeframes.daily.previous}hrs`
    currentPlay.innerHTML = `${data[1].timeframes.daily.current}hrs`
    previousPlay.innerHTML = `Yesterday - ${data[1].timeframes.daily.previous}hrs`
    currentStudy.innerHTML = `${data[2].timeframes.daily.current}hrs`
    previousStudy.innerHTML = `Yesterday - ${data[2].timeframes.daily.previous}hrs`
    currentExercise.innerHTML = `${data[3].timeframes.daily.current}hrs`
    previousExercise.innerHTML = `Yesterday - ${data[3].timeframes.daily.previous}hrs`
    currentSocial.innerHTML = `${data[4].timeframes.daily.current}hrs`
    previousSocial.innerHTML = `Yesterday - ${data[4].timeframes.weekly.previous}hrs`
    currentSelfCare.innerHTML = `${data[5].timeframes.daily.current}hrs`
    previousSelfCare.innerHTML = `Yesterday - ${data[5].timeframes.weekly.previous}hrs`
}

 dataMonth = (data) => {
    currentWork.innerHTML = `${data[0].timeframes.monthly.current}hrs` 
    previousWork.innerHTML = `Last month - ${data[0].timeframes.monthly.previous}hrs`
    currentPlay.innerHTML = `${data[1].timeframes.monthly.current}hrs` 
    previousPlay.innerHTML = `Last month - ${data[1].timeframes.monthly.previous}hrs`
    currentStudy.innerHTML = `${data[2].timeframes.monthly.current}hrs`
    previousStudy.innerHTML = `Last month - ${data[2].timeframes.monthly.previous}hrs`
    currentExercise.innerHTML = `${data[3].timeframes.monthly.current}hrs`
    previousExercise.innerHTML = `Last month - ${data[3].timeframes.monthly.previous}hrs`
    currentSocial.innerHTML = `${data[4].timeframes.monthly.current}hrs`
    previousSocial.innerHTML = `Last month - ${data[4].timeframes.monthly.previous}hrs`
    currentSelfCare.innerHTML = `${data[5].timeframes.monthly.current}hrs`
    previousSelfCare.innerHTML = `Last month - ${data[5].timeframes.monthly.previous}hrs`
}

function trackWeek() {
    document.querySelector('#weekly').classList.add("active");
    document.querySelector('#daily').classList.remove("active");
    document.querySelector('#monthly').classList.remove("active");
    fetch('js/data.json')
    .then(res => res.json())
    .then(data => {
        dataWeek(data)
    })
}

function trackDay() {
    document.querySelector('#daily').classList.add("active");
    document.querySelector('#weekly').classList.remove("active");
    document.querySelector('#monthly').classList.remove("active");
    fetch('js/data.json')
    .then(res => res.json())
    .then(data => {
        dataDay(data)
    })
}

function trackMonth() {
    document.querySelector('#monthly').classList.add("active");
    document.querySelector('#weekly').classList.remove("active");
    document.querySelector('#daily').classList.remove("active");
    fetch('js/data.json')
    .then(res => res.json())
    .then(data => {
        dataMonth(data)
    })
}

