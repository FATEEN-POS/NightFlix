// ===== DATA =====
const movies = [
  {id:1,title:"Extraction",titleAr:"الإنقاذ",category:"action",year:2020,duration:"1س 56د",country:"أمريكا",rating:"7.2",badge:"Netflix",badgeClass:"green",
    poster:"https://image.tmdb.org/t/p/w500/uLhlqWVJhjz8xU1tZp02YkixWGR.jpg",
    desc:"مرتزق بلا خوف يتلقى مهمة استعادة ابن أحد أكبر تجار المخدرات المختطف في قلب مدينة خطرة.",
    cast:"Chris Hemsworth, Rudhraksh Jaiswal",director:"Sam Hargrave",
    watchUrl:"https://www.netflix.com/title/80230399",youtubeId:"L4DrolmDxmw"},

  {id:2,title:"Avengers: Endgame",titleAr:"المنتقمون: النهاية",category:"action",year:2019,duration:"3س 2د",country:"أمريكا",rating:"8.4",badge:"Marvel",badgeClass:"red",
    poster:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    desc:"بعد أن محو ثانوس نصف الكون، يتجمع الأبطال الباقون لمحاولة الانتقام وإعادة من فقدوهم.",
    cast:"Robert Downey Jr., Chris Evans, Scarlett Johansson",director:"Anthony & Joe Russo",
    watchUrl:"https://www.disneyplus.com/movies/avengers-endgame/aemchO4bMHvy",youtubeId:"TcMBFSGVi1c"},


  {id:5,title:"Money Heist",titleAr:"البروفيسور",category:"drama",year:2017,duration:"مسلسل",country:"إسبانيا",rating:"8.2",badge:"Netflix",badgeClass:"green",
    poster:"https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    desc:"عبقري الجريمة 'البروفيسور' يقود عصابة لتنفيذ أكبر سطو في التاريخ على دار سك العملة.",
    cast:"Álvaro Morte, Úrsula Corberó, Pedro Alonso",director:"Álex Pina",
    watchUrl:"https://www.netflix.com/title/80192098",youtubeId:"htQYEWMpFWQ"},

  {id:6,title:"Breaking Bad",titleAr:"كسر القواعد",category:"drama",year:2008,duration:"مسلسل",country:"أمريكا",rating:"9.5",badge:"أسطورة",badgeClass:"gold",
    poster:"https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    desc:"معلم كيمياء مصاب بالسرطان يتحول إلى أخطر تاجر مخدرات في أمريكا. أعظم مسلسل أمريكي.",
    cast:"Bryan Cranston, Aaron Paul, Anna Gunn",director:"Vince Gilligan",
    watchUrl:"https://www.netflix.com/title/70143836",youtubeId:"HhesaQXLuRY"},

  {id:7,title:"Inception",titleAr:"البداية",category:"scifi",year:2010,duration:"2س 28د",country:"أمريكا",rating:"8.8",badge:"كلاسيك",badgeClass:"gold",
    poster:"https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    desc:"لص يسرق الأسرار من العقل الباطن خلال الأحلام يتلقى مهمة معاكسة: زرع فكرة في عقل إنسان.",
    cast:"Leonardo DiCaprio, Joseph Gordon-Levitt, Tom Hardy",director:"Christopher Nolan",
    watchUrl:"https://www.netflix.com/title/70131314",youtubeId:"YoHD9XEInc0"},

  {id:8,title:"Interstellar",titleAr:"بين النجوم",category:"scifi",year:2014,duration:"2س 49د",country:"أمريكا",rating:"8.7",badge:"نولان",badgeClass:"",
    poster:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    desc:"في مستقبل تحتضر فيه الأرض، يسافر رواد فضاء عبر ثقب دودي بحثاً عن كوكب جديد للبشرية.",
    cast:"Matthew McConaughey, Anne Hathaway, Jessica Chastain",director:"Christopher Nolan",
    watchUrl:"https://www.netflix.com/title/70305903",youtubeId:"zSWdZVtXT7E"},


  {id:10,title:"Joker",titleAr:"الجوكر",category:"crime",year:2019,duration:"2س 2د",country:"أمريكا",rating:"8.4",badge:"أوسكار",badgeClass:"gold",
    poster:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    desc:"قصة أصل الشرير الأشهر. رجل فاشل يدفعه المجتمع إلى الجنون ليصبح رمزاً للفوضى.",
    cast:"Joaquin Phoenix, Robert De Niro, Zazie Beetz",director:"Todd Phillips",
    watchUrl:"https://www.max.com",youtubeId:"GRRTpBMBrE4"},

  {id:11,title:"John Wick",titleAr:"جون ويك",category:"action",year:2014,duration:"1س 41د",country:"أمريكا",rating:"7.4",badge:"أكشن",badgeClass:"",
    poster:"https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    desc:"قاتل محترف متقاعد يُجبر على العودة بعد أن يقتلوا كلبه. أكشن لا يتوقف.",
    cast:"Keanu Reeves, Michael Nyqvist, Willem Dafoe",director:"Chad Stahelski",
    watchUrl:"https://www.amazon.com/gp/video/detail/B00TPYXKIQ",youtubeId:"2AUmvWm5ZDQ"},

  {id:12,title:"Parasite",titleAr:"طفيلي",category:"drama",year:2019,duration:"2س 12د",country:"كوريا",rating:"8.5",badge:"أوسكار",badgeClass:"gold",
    poster:"https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    desc:"عائلة فقيرة تتسلل إلى حياة عائلة ثرية في خطة محكمة. فيلم كوري حاز أوسكار أفضل فيلم.",
    cast:"Song Kang-ho, Lee Sun-kyun, Choi Woo-shik",director:"Bong Joon-ho",
    watchUrl:"https://www.amazon.com/gp/video/detail/B07YD96HNR",youtubeId:"5xH0HfJHsaY"},

  {id:13,title:"Get Out",titleAr:"اخرج",category:"horror",year:2017,duration:"1س 44د",country:"أمريكا",rating:"7.7",badge:"رعب",badgeClass:"",
    poster:"https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    desc:"شاب أسود يزور عائلة صديقته ليكتشف أسراراً مرعبة. رعب اجتماعي ذكي.",
    cast:"Daniel Kaluuya, Allison Williams, Bradley Whitford",director:"Jordan Peele",
    watchUrl:"https://www.amazon.com/gp/video/detail/B01MSTHKAD",youtubeId:"DzfpyUB60YY"},

  {id:14,title:"The Hangover",titleAr:"خمار",category:"comedy",year:2009,duration:"1س 40د",country:"أمريكا",rating:"7.7",badge:"كوميدي",badgeClass:"",
    poster:"https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    desc:"ثلاثة أصدقاء يستيقظون في لاس فيغاس ولا يتذكرون شيئاً من ليلة العريس.",
    cast:"Bradley Cooper, Zach Galifianakis, Ed Helms",director:"Todd Phillips",
    watchUrl:"https://www.max.com",youtubeId:"tcdUFgon_j4"},

 
  {id:16,title:"Squid Game",titleAr:"لعبة الحبار",category:"drama",year:2021,duration:"مسلسل",country:"كوريا",rating:"8.0",badge:"Netflix",badgeClass:"green",
    poster:"https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    desc:"مئات المتعثرين مالياً يتنافسون في ألعاب أطفال قاتلة مقابل جائزة ضخمة.",
    cast:"Lee Jung-jae, Park Hae-soo, Jung Ho-yeon",director:"Hwang Dong-hyuk",
    watchUrl:"https://www.netflix.com/title/81040344",youtubeId:"oqxAJKy0ii4"},

  {id:17,title:"The Dark Knight",titleAr:"فارس الظلام",category:"action",year:2008,duration:"2س 32د",country:"أمريكا",rating:"9.0",badge:"كلاسيك",badgeClass:"gold",
    poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    desc:"باتمان يواجه الجوكر في معركة فكرية وأخلاقية لا تنتهي. من أعظم أفلام السوبرهيرو.",
    cast:"Christian Bale, Heath Ledger, Aaron Eckhart",director:"Christopher Nolan",
    watchUrl:"https://www.max.com",youtubeId:"EXeTwQWrcwY"},

  {id:18,title:"Dune",titleAr:"كثيب الرمال",category:"scifi",year:2021,duration:"2س 35د",country:"أمريكا",rating:"8.0",badge:"ملحمة",badgeClass:"",
    poster:"https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    desc:"شاب من عائلة نبيلة يُرسل إلى كوكب صحراوي نادر المورد، ليكتشف مصيره الأسطوري.",
    cast:"Timothée Chalamet, Rebecca Ferguson, Oscar Isaac",director:"Denis Villeneuve",
    watchUrl:"https://www.max.com",youtubeId:"8g18jFHCLXk"},

  {id:19,title:"Spirited Away",titleAr:"رحلة شيهيرو",category:"animation",year:2001,duration:"2س 4د",country:"اليابان",rating:"8.6",badge:"جبلي",badgeClass:"gold",
    poster:"https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    desc:"طفلة تنجرف إلى عالم الأرواح وتعمل في حمام خاص بالآلهة لإنقاذ والديها.",
    cast:"Daveigh Chase, Suzanne Pleshette",director:"Hayao Miyazaki",
    watchUrl:"https://www.netflix.com",youtubeId:"ByXuk9QqQkk"},



  {id:21,title:"Titanic",titleAr:"تيتانيك",category:"romance",year:1997,duration:"3س 14د",country:"أمريكا",rating:"7.9",badge:"خالد",badgeClass:"gold",
    poster:"https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    desc:"قصة حب أسطورية على متن السفينة الأشهر في التاريخ. أعظم قصص الحب السينمائية.",
    cast:"Leonardo DiCaprio, Kate Winslet, Billy Zane",director:"James Cameron",
    watchUrl:"https://www.amazon.com",youtubeId:"kVrqfYjkTdQ"},


  {id:23,title:"Oppenheimer",titleAr:"أوبنهايمر",category:"biography",year:2023,duration:"3س",country:"أمريكا",rating:"8.9",badge:"أوسكار",badgeClass:"gold",
    poster:"https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    desc:"السيرة الملحمية لأب القنبلة الذرية الذي غيّر مجرى التاريخ للأبد.",
    cast:"Cillian Murphy, Emily Blunt, Robert Downey Jr.",director:"Christopher Nolan",
    watchUrl:"https://www.amazon.com",youtubeId:"uYPbbksJxIg"},

  {id:25,title:"Scarface",titleAr:"وجه مشقوق",category:"crime",year:1983,duration:"2س 50د",country:"أمريكا",rating:"8.3",badge:"خالد",badgeClass:"gold",
    poster:"https://image.tmdb.org/t/p/w500/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
    desc:"مهاجر كوبي يبني إمبراطورية المخدرات في ميامي. أسطورة لا تُنسى.",
    cast:"Al Pacino, Michelle Pfeiffer, Steven Bauer",director:"Brian De Palma",
    watchUrl:"https://www.amazon.com",youtubeId:"LBjaTU4qzts"},

  {id:26,title:"The Shawshank Redemption",titleAr:"الخلاص",category:"drama",year:1994,duration:"2س 22د",country:"أمريكا",rating:"9.3",badge:"خالد",badgeClass:"gold",
    poster:"https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    desc:"رجل بريء يُسجن ظلماً ويصنع صداقات لا تنتهي بينما يبني خطة هروبه.",
    cast:"Tim Robbins, Morgan Freeman, Bob Gunton",director:"Frank Darabont",
    watchUrl:"https://www.max.com",youtubeId:"PLl99DlL6b4"},
];

// ===== HERO SETUP =====
const heroMovie = movies.find(m=>m.id===6);
document.getElementById('heroPlayBtn').onclick=()=>{ openVideoPlayerDirect(heroMovie); };
document.getElementById('heroInfoBtn').onclick=()=>{ openModal(heroMovie); };

// ===== STATE =====
let currentFilter='all';
let currentMovie=null;

// ===== RENDER =====
const catLabels={action:'أكشن',drama:'دراما',comedy:'كوميدي',scifi:'خيال علمي',horror:'رعب',crime:'جريمة',animation:'أنيميشن',thriller:'إثارة',romance:'رومانسي',biography:'سيرة ذاتية'};
const catTitles={all:'🔥 الكل',action:'💥 أكشن',drama:'💔 دراما',comedy:'😂 كوميدي',scifi:'🚀 خيال علمي',horror:'👻 رعب',crime:'🔫 جريمة',animation:'🎨 أنيميشن',thriller:'😱 إثارة',romance:'❤️ رومانسي',biography:'📖 سيرة ذاتية'};

function renderMovies(list){
  const c=document.getElementById('moviesContainer');
  const count=document.getElementById('movieCount');
  c.innerHTML='';
  count.textContent=list.length+' عنوان';
  list.forEach((m,i)=>{
    const div=document.createElement('div');
    div.className='movie';
    div.style.animationDelay=(i*40)+'ms';
    div.onclick=()=>openModal(m);
    const badgeCls=m.badgeClass==='gold'?'gold':m.badgeClass==='green'?'green':'';
    div.innerHTML=`
      <div class="movie-thumb">
        <img src="${m.poster}" alt="${m.title}" loading="lazy"
          onerror="this.src='https://placehold.co/300x400/1a1a1a/E50914?text=${encodeURIComponent(m.title)}'">
        <div class="movie-overlay">
          <div class="overlay-play">▶</div>
          <div class="overlay-title">${m.title}</div>
          <div class="overlay-meta">${m.year} · ⭐${m.rating}</div>
        </div>
        ${m.badge?`<div class="movie-badge ${badgeCls}">${m.badge}</div>`:''}
        <div class="movie-rating">⭐ ${m.rating}</div>
      </div>
      <div class="movie-info">
        <h3>${m.title}</h3>
        <div class="movie-sub"><span>${m.year}</span><span style="color:#555">·</span><span style="color:#888">${m.duration}</span></div>
        <div class="movie-cat-tag">${catLabels[m.category]||m.category}</div>
      </div>`;
    c.appendChild(div);
  });
}

// ===== FILTER =====
function filterMovies(cat){
  currentFilter=cat;
  document.getElementById('sectionTitle').textContent=catTitles[cat]||'الأفلام';
  // update tabs
  document.querySelectorAll('.cat-tab').forEach(t=>t.classList.remove('active'));
  event && event.target && event.target.classList && event.target.classList.add('active');
  applyFilters();
}
function applyFilters(){
  const q=document.getElementById('searchInput').value.toLowerCase().trim();
  const filtered=movies.filter(m=>{
    const mc=currentFilter==='all'||m.category===currentFilter;
    const ms=!q||m.title.toLowerCase().includes(q)||m.titleAr.includes(q);
    return mc&&ms;
  });
  renderMovies(filtered);
}
document.getElementById('searchInput').addEventListener('input',applyFilters);

// ===== MODAL =====
function openModal(m){
  currentMovie=m;
  document.getElementById('modalHeroImg').src=m.poster;
  document.getElementById('modalPoster').src=m.poster;
  document.getElementById('modalTitle').textContent=m.title;
  document.getElementById('modalTitleAr').textContent=m.titleAr;
  document.getElementById('modalRating').textContent=m.rating;
  document.getElementById('modalYear').textContent=m.year;
  document.getElementById('modalDuration').textContent=m.duration;
  document.getElementById('modalCountry').textContent=m.country;
  document.getElementById('modalDesc').textContent=m.desc;
  document.getElementById('modalCast').textContent=m.cast;
  document.getElementById('modalDirector').textContent=m.director;
  document.getElementById('modalGenre').textContent=catLabels[m.category]||m.category;
  showOverlay();
  const modal=document.getElementById('movieModal');
  modal.style.display='block';
  requestAnimationFrame(()=>modal.classList.add('show'));
  document.body.style.overflow='hidden';
}
function closeModal(){
  const modal=document.getElementById('movieModal');
  modal.classList.remove('show');
  hideOverlay();
  setTimeout(()=>{modal.style.display='none';},300);
  document.body.style.overflow='';
}

// ===== VIDEO =====
function openVideoPlayer(){
  if(!currentMovie)return;
  openVideoPlayerDirect(currentMovie);
}
function openVideoPlayerDirect(m){
  closeModal();
  document.getElementById('videoTitle').textContent=m.title+' — '+m.titleAr;
  const iframe=document.getElementById('videoIframe');
  const unavail=document.getElementById('videoUnavailable');
  document.getElementById('externalLink').href=m.watchUrl;
  if(m.youtubeId){
    iframe.src='https://www.youtube.com/embed/'+m.youtubeId+'?autoplay=1&rel=0';
    iframe.style.display='block';
    unavail.style.display='none';
  }else{
    iframe.style.display='none';
    unavail.style.display='flex';
  }
  showOverlay();
  const vm=document.getElementById('videoModal');
  vm.style.display='block';
  requestAnimationFrame(()=>vm.classList.add('show'));
  document.body.style.overflow='hidden';
}
function closeVideo(){
  const vm=document.getElementById('videoModal');
  vm.classList.remove('show');
  hideOverlay();
  setTimeout(()=>{
    vm.style.display='none';
    document.getElementById('videoIframe').src='';
  },300);
  document.body.style.overflow='';
}

// ===== CONTACT =====
function openContact(){
  showOverlay();
  const cm=document.getElementById('contactModal');
  cm.style.display='block';
  requestAnimationFrame(()=>cm.classList.add('show'));
  document.body.style.overflow='hidden';
}
function closeContact(){
  const cm=document.getElementById('contactModal');
  cm.classList.remove('show');
  hideOverlay();
  setTimeout(()=>{cm.style.display='none';},300);
  document.body.style.overflow='';
}

// ===== OVERLAY =====
function showOverlay(){document.getElementById('modalOverlay').classList.add('show')}
function hideOverlay(){document.getElementById('modalOverlay').classList.remove('show')}
function closeAll(){closeModal();closeContact();closeVideo();}

// ===== ESC =====
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAll();});

// ===== INIT =====
renderMovies(movies);
