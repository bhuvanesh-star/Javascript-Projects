
//NORMAL PROGRESS BAR
const progress = document.querySelector(".progress");
const loading = document.querySelector(".loading");

let i=0;
const dummyProgress = [0,3,19,25,37,49,61,78,83,90,98,100];


const loader = setInterval(()=>{
    progress.style.width = dummyProgress[i] + "%";
    loading.innerHTML = dummyProgress[i] + "%";
    i++;
    if(i == dummyProgress.length){
        clearInterval(loader);
        loading.innerHTML = "Completed"
    }
}, 1000)
//setInterval example
// let i=0;
// const interval = setInterval(()=>{
//     i++;
//     console.log("HELLO WORLD");
//     if(i == 5) clearInterval(interval);
// }, 1000)