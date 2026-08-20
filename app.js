const characters = [
  {id:'xiao-an',name:'小安',role:'温柔咖啡厅服务员',image:'assets/characters/xiao-an.webp',alt:'暖色日系咖啡厅服务员小安',speech:'今天想吃点什么？选个心情，我来帮你摇～',accent:'#2fa05a',soft:'#eaf3e8'},
  {id:'lin',name:'凛',role:'清冷甜品侍者',image:'assets/characters/lin.webp',alt:'清冷蓝调甜品服务员凛',speech:'选择很难？把杂音留给夜色，把答案交给我。',accent:'#5277b7',soft:'#dfe8f6'},
  {id:'tuan-tuan',name:'团团',role:'Q 萌甜点助手',image:'assets/characters/tuan-tuan.webp',alt:'Q萌甜点助手团团',speech:'今天也要吃一顿让心情变软的饭呀！',accent:'#e99a72',soft:'#f7eadc'},
  {id:'a-yao',name:'阿曜',role:'元气运动系饭搭子',image:'assets/characters/a-yao.webp',alt:'阳光运动系饭搭子阿曜',speech:'刚好有风，刚好饿了——接住今天的答案！',accent:'#65a965',soft:'#eef4df'},
  {id:'mu-chuan',name:'暮川',role:'周末居家料理担当',image:'assets/characters/mu-chuan.webp',alt:'清晨居家料理担当暮川',speech:'早餐还是正餐？先笑一下，答案马上出锅。',accent:'#9b82b7',soft:'#f1eaf5'},
  {id:'xia-ye',name:'夏野',role:'泳池边的夏日服务生',image:'assets/characters/xia-ye.webp',alt:'泳池阳光男大夏野',speech:'天气这么好，今天的选择也要清爽一点。',accent:'#3a9fc5',soft:'#def2f4'}
];

const foods = [
  {name:'寿喜烧',cuisine:'日料',image:'assets/food/sukiyaki.webp',hint:'暖乎乎的，今天正合适',reason:'甜咸汤汁裹着嫩牛肉，给今天一点刚刚好的满足感。',tags:['casual','tired','premium','light']},
  {name:'精致寿司',cuisine:'日料',image:'assets/food/sushi.webp',hint:'清爽新鲜，吃完没有负担',reason:'一口一个的小幸福，很适合想把今天过得精致一点。',tags:['light','premium','casual']},
  {name:'川味辣鱼',cuisine:'川湘菜',image:'assets/food/sichuan-fish.webp',hint:'热烈一点，唤醒今天的胃口',reason:'鲜、辣、香都在线，适合想痛快吃一顿的今天。',tags:['spicy','friends','premium']},
  {name:'韩式烤肉',cuisine:'韩餐',image:'assets/food/korean-bbq.webp',hint:'滋滋作响，快乐也一起上桌',reason:'肉香和丰富小菜很有满足感，和朋友分享尤其合适。',tags:['friends','tired','casual']}
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let characterIndex = Math.max(0, characters.findIndex(item => item.id === localStorage.getItem('fandazi-character')));
let foodIndex = 0;
let rollCount = Number(localStorage.getItem('fandazi-roll-count') || 0);
let toastTimer;

const stage = $('#characterStage');
const image = $('#characterImage');
const dots = $('#characterDots');

characters.forEach((character,index) => {
  const button = document.createElement('button');
  button.className = 'character-dot';
  button.type = 'button';
  button.setAttribute('aria-label',`切换到${character.name}`);
  button.addEventListener('click',() => switchCharacter(index));
  dots.appendChild(button);
});

function switchCharacter(index){
  characterIndex = (index + characters.length) % characters.length;
  const character = characters[characterIndex];
  stage.classList.add('switching');
  const preload = new Image();
  preload.src = character.image;
  preload.onload = () => {
    image.src = character.image;
    image.alt = character.alt;
    $('#characterName').textContent = character.name;
    $('#characterRole').textContent = character.role;
    $('#speechBubble').textContent = character.speech;
    stage.style.background = character.soft;
    document.documentElement.style.setProperty('--character-accent',character.accent);
    $$('.character-dot').forEach((dot,i) => dot.classList.toggle('active',i === characterIndex));
    localStorage.setItem('fandazi-character',character.id);
    requestAnimationFrame(() => stage.classList.remove('switching'));
  };
}

function selectedMoods(){return $$('.mood.active').map(button => button.dataset.mood)}
function chooseFood(){
  const selected = selectedMoods();
  const weighted = foods.flatMap((food,index) => Array(selected.some(mood => food.tags.includes(mood)) ? 3 : 1).fill(index));
  let next = weighted[Math.floor(Math.random() * weighted.length)];
  if(foods.length > 1 && next === foodIndex) next = (next + 1 + Math.floor(Math.random() * (foods.length - 1))) % foods.length;
  return next;
}

function roll(){
  const cta = $('#rollCta');
  const photo = $('.fortune-photo');
  cta.classList.remove('rolling');
  void cta.offsetWidth;
  cta.classList.add('rolling');
  photo.classList.add('changing');
  rollCount += 1;
  localStorage.setItem('fandazi-roll-count',String(rollCount));
  setTimeout(() => {
    foodIndex = chooseFood();
    const food = foods[foodIndex];
    const character = characters[characterIndex];
    $('#fortuneImage').src = food.image;
    $('#fortuneImage').alt = food.name;
    $('#cuisineTag').textContent = food.cuisine;
    $('#foodName').textContent = food.name;
    $('#fortuneHint').textContent = food.hint;
    $('#fortuneReason').textContent = food.reason;
    $('#fortuneCount').textContent = `LUCKY ${String(rollCount).padStart(2,'0')}`;
    $('#speechBubble').textContent = rollCount >= 4 ? '已经摇了好几次……你是不是其实心里有答案了？' : `今天吃${food.name}怎么样？`;
    $('.fortune-reason span').textContent = `${character.name}说`;
    photo.classList.remove('changing');
    if(innerWidth < 900) $('#fortune').scrollIntoView({behavior:'smooth',block:'center'});
  },520);
}

function showToast(message){
  const toast = $('#toast');
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'),2200);
}

$$('.mood').forEach(button => button.addEventListener('click',() => {
  button.classList.toggle('active');
  button.setAttribute('aria-pressed',String(button.classList.contains('active')));
}));
$('#prevCharacter').addEventListener('click',() => switchCharacter(characterIndex - 1));
$('#nextCharacter').addEventListener('click',() => switchCharacter(characterIndex + 1));
$('#rollCta').addEventListener('click',roll);
$('#rerollFood').addEventListener('click',roll);
$('#acceptFood').addEventListener('click',() => showToast(`好，今天就吃${foods[foodIndex].name}！打卡功能将在下一阶段开放。`));

switchCharacter(characterIndex);
