let songIndex = 0;
let music = new Audio('Songs/1.mp3');
// music.play();
let play = document.getElementById("play");
let active = document.getElementsByClassName('wave')[0];
let songItems = Array.from(document.getElementsByClassName("songItems"));
// let songItems = Array.from(document.getElementsByTagName("li"));
let listPlay1 = Array.from(document.getElementsByClassName("listPlay"));
let listPlay2 = Array.from(document.getElementsByClassName("far"));
let poster_Master_Play = document.getElementById("poster-master-play");

let img_play = Array.from(document.getElementsByClassName("songsItems"));
// creating Array of songs
const songs = [
        {id:"1",songName:'Raatan Lambiyan<div class="subtitle">ARIJIT SINGH</div>' ,poster: 'Covers/1.jpg'},
        {id:"2",songName:'Jeene Laga Hoon<div class="subtitle">ATIF ASLAM</div>' ,  poster: 'Covers/2.jpg'},
        {id:"3",songName:'Heart-Attack(P)<div class="subtitle">Mosis enrique</div>' ,poster: 'Covers/3.jpg'},
        {id:"4",songName:'Manike Mage<div class="subtitle">Yohani</div>' ,poster: 'Covers/4.jpg'},
        {id:"5",songName:'udja-kale-kawan<div class="subtitle">college ki ladkiyun</div>' ,poster: 'Covers/5.jpg'},
        {id:"6",songName:'Tera Fitoor<div class="subtitle">Arijit Singh</div>' ,poster: 'Covers/6.jpg'},
        {id:"7",songName:'college ki ladkiyun<div class="subtitle">Yeh Dil Aashiqanaa</div>' ,poster: 'Covers/7.jpg'},
        {id:"8",songName:'Akeli Na Bazaar Jaaya Kero<div class="subtitle">Arijit Singh</div>' ,poster: 'Covers/8.jpg'},
        {id:"9",songName:'Zara Sa Full Video - Jannat|<div class="subtitle">Sayeed Quadri|Mahesh Bhatt</div>' ,poster: 'Covers/9.jpg'},
        {id:"10",songName:'Thodi Jagah <div class="subtitle">Arijit Singh</div>' ,poster: 'Covers/10.jpg'},
        {id:"11",songName:'Sun Zarra <div class="subtitle">Sonu Nigam</div>' ,poster: 'Covers/11.jpg'},
        {id:"12",songName:'Kuch Iss Tarah<div class="subtitle">Sonu Nigam</div>' ,poster: 'Covers/12.jpg'},
        {id:"13",songName:'Likhe Jo Khat Tujhe<div class="subtitle">Kanyadan</div>' ,poster: 'Covers/13.jpg'},
        {id:"14",songName:'O Jaana<div class="subtitle">Udit Narayan, Alka Yagnik, KK, Shaan, Kamaal Khan</div>' ,poster: 'Covers/14.jpg'},
        {id:"15",songName:'Tumse Milna<div class="subtitle">Udit Narayan, Alka Yagnik</div>' ,poster: 'Covers/14.jpg'},
        {id:"16",songName:'AFSOS KAROGE<div class="subtitle">Stebin Ben</div>' ,poster: 'Covers/16.jpg'},
        {id:"17",songName:'Is Se Pehle Ke Yaad Tu Aaye<div class="subtitle">Kishore Kumar</div>' ,poster: 'Covers/17.jpg'},
        {id:"18",songName:'Made In India<div class="subtitle">Guru Randhawa</div>' ,poster: 'Covers/18.jpg'},

];
// <----  or this code can executes ----->

// const songs = [
//     {songsName:'Raatan Lambiyan', filePath:'Songs/1.mp3',coverPath:'Covers/1.jpg'},
//     {songsName:'Jeene Laga Hoon', filePath:'Songs/2.mp3',coverPath:'Covers/2.jpg'},
//     {songsName:'Heart-Attack(PagalWorld)', filePath:'Songs/3.mp3',coverPath:'Covers/3.jpg'},
//     {songsName:'Manike Mage ', filePath:'Songs/4.mp3',coverPath:'Covers/4.jpg'},
//     {songsName:'udja-kale-kawan', filePath:'Songs/5.mp3',coverPath:'Covers/5.jpg'},
//     {songsName:'Tera Fitoor', filePath:'Songs/6.mp3',coverPath:'Covers/6.jpg'},
//     {songsName:'college ki ladkiyun ',filePath:'Songs/7.mp3' ,coverPath:'Covers/7.jpg'}

// ];
// Array.from(document.getElementsByClassName("songItems")).forEach((e,i) =>{
//     e.getElementsByTagName('img')[0].src = songs[i].poster;
//     e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
// });
songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});
// // Play or pause Icons handles
play.addEventListener('click',() =>{
    if(music.paused || music.currentTime<=0){
        music.play();
        play.classList.remove("fa-play-circle");
        play.classList.add("fa-pause-circle");
        active.classList.add("active2");
        }
    else{
        music.pause();
        play.classList.remove("fa-pause-circle");
        play.classList.add("fa-play-circle");
        active.classList.remove("active2");
    }
});

// background play
const allPlay1background = ()=> {
    img_play.forEach((element)=>{
        element.style.background = "rgb(105,105,184,0)"
    })
}
// // list play items

const allPlay1 = ()=> {
    listPlay1.forEach((element)=>{
        element.classList.add("fa-play-circle");
        element.classList.remove("fa-pause-circle");
    })
}
listPlay1.forEach((element) =>{
    element.addEventListener('click',(e)=>{
        songIndex = e.target.id;
        allPlay1();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
    })
})

const allPlay2 = ()=> {
    listPlay2.forEach((element)=>{
        element.classList.add("fa-play-circle");
        element.classList.remove("fa-pause-circle");
    })
}
listPlay2.forEach((element) =>{
    element.addEventListener('click',(e)=>{
        songIndex = e.target.id;
        allPlay2();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        music.src = `Songs/${songIndex}.mp3`;
        poster_Master_Play.src = `Covers/${songIndex}.jpg`;
        music.play();
        let song_title = songs.filter((ele) =>{
            return ele.id == songIndex;
        })

        song_title.forEach((ele) =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        play.classList.remove("fa-play-circle");
        play.classList.add("fa-pause-circle");
        active.classList.add("active2");
        music.addEventListener('ended', () => {
            play.classList.remove("fa-pause-circle");
            play.classList.add("fa-play-circle");
            active.classList.remove("active2");
        })
        allPlay1background();
        img_play[`${songIndex}`].style.background = "rgb(105,105,184,.1)";
    })
})

// timeupdate start and end
let current_start = document.getElementById("current-start");
let current_end = document.getElementById("current-end");
// progrees bar or  bar
let myprogress = document.getElementById("progrees");
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    if(sec1<10){
        sec1 = `0${sec1}`;
    }
    current_end.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);
    if(sec2<10){
        sec2 = `0${sec2}`;
    }
    current_start.innerText = `${min2}:${sec2}`;


    let progressBar1 = parseInt((music.currentTime/music.duration)*100);

    myprogress.value = progressBar1;
    let progress2 = myprogress.value;

    bar2.style.width = `${progress2}%`;
    dot.style.left = `${progress2}%`;
})

myprogress.addEventListener('change',()=>{
    music.currentTime = myprogress.value * music.duration/100
});

music.addEventListener('ended',()=>{
    play.classList.remove("fa-pause-circle");
    play.classList.add("fa-play-circle");
    active.classList.remove("active2");
});

// volume icons handle
let vol_icon = document.getElementById('vol-icon');
let volume = document.getElementById("vol2");
let vol_bar = document.getElementsByClassName("vol-bar")[0];
let vol_dott = document.getElementById("vol_dott")
volume.addEventListener('change',()=>{
    if(volume.value == 0){
        vol_icon.classList.remove("fa-volume-down");
        vol_icon.classList.add("fa-volume-mute");
        vol_icon.classList.remove('fa-volume-up');
    }

    if(volume.value > 0){
        vol_icon.classList.add("fa-volume-down");
        vol_icon.classList.remove("fa-volume-mute");
        vol_icon.classList.remove('fa-volume-up');
    }

    if(volume.value > 50){
        vol_icon.classList.remove("fa-volume-down");
        vol_icon.classList.remove("fa-volume-mute");
        vol_icon.classList.add('fa-volume-up');
    }

    let vol_a = volume.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dott.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})
// Music mute or play icon handle 
vol_icon.addEventListener('click',()=>{
    music.muted = !music.muted;
    if(music.muted || music.currentTime<=0){
        vol_icon.classList.remove("fa-volume-down");
        vol_icon.classList.add("fa-volume-mute");
        vol_icon.classList.add('fa-volume-up');
    }
   else {
    vol_icon.className.remove("fa-volume-down");
    vol_icon.classList.remove("fa-volume-mute");
    vol_icon.classList.add('fa-solid fa-volume-high');
    vol_icon.classList.remove('fa-volume-up');
   }
});

// vol_icon.addEventListener('click',()=>{
//     if(music.paused)
// })

// next and back buttons
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");

backward.addEventListener('click',()=>{
    songIndex -=1;
    if(songIndex <1){
        songIndex = Array.from(document.getElementsByClassName("songItems")).length;
    }
    music.src = `Songs/${songIndex}.mp3`;
    poster_Master_Play.src = `Covers/${songIndex}.jpg`;
    music.play();
    let song_title = songs.filter((ele) =>{
        return ele.id == songIndex;
    })

    song_title.forEach((ele) =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    allPlay2();

   document.getElementById(`${songIndex}`).classList.remove("fa-play-circle");
   document.getElementById(`${songIndex}`).classList.add("fa-pause-circle");
   allPlay1background();
   img_play[`${songIndex}`].style.background = "rgb(105,105,184,.1)";
})

forward.addEventListener('click',()=>{
    songIndex +=1;
    if(songIndex >Array.from(document.getElementsByClassName("songItems")).length){
        songIndex = 1;
    }
    music.src = `Songs/${songIndex}.mp3`;
    poster_Master_Play.src = `Covers/${songIndex}.jpg`;
    music.play();
    let song_title = songs.filter((ele) =>{
        return ele.id == songIndex;
    })

    song_title.forEach((ele) =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    allPlay2();

   document.getElementById(`${songIndex}`).classList.remove("fa-play-circle");
   document.getElementById(`${songIndex}`).classList.add("fa-pause-circle");
   allPlay1background();
   img_play[`${songIndex}`].style.background = "rgb(105,105,184,.1)";
})

// Scroll bars move left and right
let left_scrolls = document.getElementById("left-scrolls");
let right_scrolls = document.getElementById('right-scrolls');
let hit_songs = document.getElementsByClassName('hit-songs')[0];

left_scrolls.addEventListener('click',()=>{
    hit_songs.scrollLeft -= 330;
});
 
right_scrolls.addEventListener('click',()=>{
    hit_songs.scrollLeft += 330;
});

// Artist scroll bar
let left_scroll = document.getElementById("left-scroll");
let right_scroll = document.getElementById('right-scroll');
let Items = document.getElementsByClassName('Items')[0];

left_scroll.addEventListener('click',()=>{
    Items.scrollLeft -= 300;
});
 
right_scroll.addEventListener('click',()=>{
    Items.scrollLeft += 300;
});


// button play handle


