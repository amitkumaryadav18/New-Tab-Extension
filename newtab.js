// Start the time
console.log('Js handshake');
const container = document.querySelector('.container');
const timer = document.querySelector('#Timer');

function getCurrentTime(){
    let currentTime = new  Date().toLocaleTimeString();
    let inLocal = new Date().getHours();
    if(inLocal>12){
        inLocal = inLocal - 12;
        let curmin = new Date().getMinutes();
        let cursec = new Date().getSeconds(); 
        currentTime = inLocal+':'+curmin + ':'+cursec;
    }
        if(currentTime.length>=8)
                currentTime = currentTime.slice(0,8);
        let getOnlyTime = currentTime;
        timer.textContent = getOnlyTime;
}
function getAmPm(){
    let getHour = new Date().getHours();
    const setAmPm = document.getElementById('am-pm');
    if(getHour<12){
        setAmPm.textContent = 'AM';
    }
    else{
        setAmPm.textContent ='PM';
    }
}

function getRandom(array){
    for(let i=0;i<array.length;i++){
    let j = Math.floor(Math.random()*(array.length));
    let t = array[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    return array;
}
const getTime = ()=>{
    getCurrentTime();
    setInterval(()=>{
        getCurrentTime();
    },1000);
    getAmPm();
   setInterval(()=>{
    getAmPm();    
   },3600000)
    
}
// To get The Currect wish and time
const getGoodWish = ()=>{
    let currentTime = new Date().getHours();
    const dayWish = document.querySelector('.dayTime');
    
    if(currentTime<12&&currentTime>4){
        // Show Good Morning
        dayWish.textContent = 'Good Morning';
        
        container.style.background = 'url(\'./images/city-dark-dawn-248159.jpg\') no-repeat center center fixed';
        container.style.color = 'black';

    }
    else if(currentTime<18&&currentTime>4){
        // Show good Afternoon
        dayWish.textContent = 'Good Afternoon';
      
        container.style.backgroundImage = 'url(\'./images/background-beach-blue-sky-1007657.jpg\')';
        if(currentTime>16){
            container.style.backgroundImage = 'url(\'./images/mountains-1412683.png\')';
            container.style.color = 'black';
        }
        
    }
    
    else{
        dayWish.textContent = 'Good Evening';
        if(currentTime<20&&currentTime>4){
           
            container.style.backgroundImage = 'url(\'./images/backlit-curve-dark-724712.jpg\')';
        }
        else{
        container.style.backgroundImage = 'url(\'./images/dubai-1767540_1920.jpg\')';
        
        }
    }
}
getGoodWish();



// Get the User data and store it locally...
const focusContent = document.getElementById('enter-focus');
const UserName = document.getElementById('user-name');
let content = '[Enter Focus]';
let name = '[Enter Name]';
UserName.textContent = name;
focusContent.textContent = content;
// Check For existing Data..
const checkLocalStorage = (key,target,modify)=>{
    if(localStorage.getItem(key)){
        modify = localStorage.getItem(key);
        target.textContent = modify;

    }
    
}
checkLocalStorage('todayFocus',focusContent,content);
checkLocalStorage('userName',UserName,name);

const addELFor = (target,key)=>{
    target.addEventListener('blur',function(){
        content = this.textContent;
        localStorage.setItem(key,content);
    })
    target.addEventListener('keypress',function(e){
        if(e.keyCode == 13|| e.which == 13){
            content = this.textContent;
            localStorage.setItem(key,content);
        }
    })
    target.addEventListener('focus',function(){
        let just = target.textContent.slice(0,6);
        if(just==='[Enter')
            this.innerHTML = '&nbsp';
     },{once: true})
     
}
addELFor(focusContent,'todayFocus');
addELFor(UserName,'userName');
getTime();

