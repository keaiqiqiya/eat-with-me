const characters = [
  {id:'xiao-an',name:'小安',role:'温柔咖啡厅服务员',image:'assets/characters/xiao-an.webp',alt:'暖色日系咖啡厅服务员小安',speech:'今天想吃点什么？选个心情，我来帮你摇～',accent:'#2fa05a',soft:'#eaf3e8'},
  {id:'lin',name:'凛',role:'清冷甜品侍者',image:'assets/characters/lin.webp',alt:'清冷蓝调甜品服务员凛',speech:'选择很难？把杂音留给夜色，把答案交给我。',accent:'#5277b7',soft:'#dfe8f6'},
  {id:'tuan-tuan',name:'团团',role:'Q 萌甜点助手',image:'assets/characters/tuan-tuan.webp',alt:'Q萌甜点助手团团',speech:'今天也要吃一顿让心情变软的饭呀！',accent:'#e99a72',soft:'#f7eadc'},
  {id:'a-yao',name:'阿曜',role:'元气运动系饭搭子',image:'assets/characters/a-yao.webp',alt:'阳光运动系饭搭子阿曜',speech:'刚好有风，刚好饿了——接住今天的答案！',accent:'#65a965',soft:'#eef4df'},
  {id:'mu-chuan',name:'暮川',role:'周末居家料理担当',image:'assets/characters/mu-chuan.webp',alt:'清晨居家料理担当暮川',speech:'早餐还是正餐？先笑一下，答案马上出锅。',accent:'#9b82b7',soft:'#f1eaf5'},
  {id:'xia-ye',name:'夏野',role:'泳池边的夏日服务生',image:'assets/characters/xia-ye.webp',alt:'泳池阳光男大夏野',speech:'天气这么好，今天的选择也要清爽一点。',accent:'#3a9fc5',soft:'#def2f4'}
];

const foodImage = {
  warm:'assets/food/sukiyaki.webp',
  fresh:'assets/food/sushi.webp',
  spicy:'assets/food/sichuan-fish.webp',
  grill:'assets/food/korean-bbq.webp'
};

const foods = [
  {id:'sichuan-fish',name:'酸菜鱼',cuisine:'川湘菜',image:foodImage.spicy,hint:'酸辣开胃，今天就痛快一点',reason:'热气和酸香很提神，适合想认真吃顿饭的今天。',tags:['spicy','friends','tired']},
  {id:'jiangxi-stirfry',name:'江西小炒',cuisine:'川湘菜',image:foodImage.spicy,hint:'锅气十足，下饭刚刚好',reason:'鲜辣小炒很有烟火气，配一碗米饭就很满足。',tags:['spicy','casual']},
  {id:'beijing-hotpot',name:'北京铜锅涮肉',cuisine:'火锅',image:foodImage.warm,hint:'热气腾腾，适合慢慢涮',reason:'清汤、麻酱和羊肉简单直接，很适合一起分享。',tags:['friends','premium','tired']},
  {id:'coconut-chicken',name:'椰子鸡火锅',cuisine:'火锅',image:foodImage.warm,hint:'清甜暖胃，不想吃辣也合适',reason:'汤底清爽温和，累的时候吃起来没有负担。',tags:['light','friends','tired']},
  {id:'lamb-skewers',name:'炭烤羊肉串',cuisine:'烧烤',image:foodImage.grill,hint:'焦香上线，今晚放松一点',reason:'炭火香气足够治愈，适合和朋友边吃边聊。',tags:['friends','casual','tired']},
  {id:'grilled-fish',name:'香辣烤鱼',cuisine:'烧烤',image:foodImage.spicy,hint:'外焦里嫩，香辣很过瘾',reason:'一锅有鱼也有配菜，想吃辣时它很难出错。',tags:['spicy','friends']},
  {id:'sukiyaki',name:'寿喜烧',cuisine:'日料',image:foodImage.warm,hint:'暖乎乎的，今天正合适',reason:'甜咸汤汁裹着嫩牛肉，给今天一点刚刚好的满足感。',tags:['casual','tired','premium','light']},
  {id:'sushi',name:'精致寿司',cuisine:'日料',image:foodImage.fresh,hint:'清爽新鲜，吃完没有负担',reason:'一口一个的小幸福，很适合想把今天过得精致一点。',tags:['light','premium','casual']},
  {id:'korean-bbq',name:'韩式烤肉',cuisine:'韩餐',image:foodImage.grill,hint:'滋滋作响，快乐一起上桌',reason:'肉香和丰富小菜很有满足感，和朋友分享尤其合适。',tags:['friends','tired','casual']},
  {id:'bibimbap',name:'石锅拌饭',cuisine:'韩餐',image:foodImage.grill,hint:'一锅拌匀，简单又满足',reason:'主食、蔬菜和肉都有，想省心时很合适。',tags:['casual','tired','light']},
  {id:'pasta',name:'番茄肉酱意面',cuisine:'西餐',image:foodImage.grill,hint:'浓郁但不冒险的安心选择',reason:'酸甜番茄与肉香很经典，适合想吃好一点的今天。',tags:['premium','casual']},
  {id:'steak',name:'香煎牛排',cuisine:'西餐',image:foodImage.grill,hint:'今天值得一顿有仪式感的',reason:'焦香外壳和丰盈肉汁，给普通一天加一点庆祝感。',tags:['premium','friends']},
  {id:'beef-noodles',name:'兰州牛肉面',cuisine:'面 / 粉',image:foodImage.warm,hint:'热汤落胃，踏实又舒服',reason:'一碗热汤面出餐快、满足感足，忙碌时尤其可靠。',tags:['casual','tired']},
  {id:'rice-noodles',name:'酸汤米线',cuisine:'面 / 粉',image:foodImage.spicy,hint:'酸香轻快，胃口马上回来',reason:'汤粉顺口又开胃，想吃点带劲但不厚重的就选它。',tags:['spicy','casual']},
  {id:'chicken-rice',name:'照烧鸡排饭',cuisine:'米饭套餐',image:foodImage.grill,hint:'一份套餐，解决今天的纠结',reason:'肉、饭和配菜组合完整，是稳妥又省心的一餐。',tags:['casual','tired']},
  {id:'claypot-rice',name:'腊味煲仔饭',cuisine:'米饭套餐',image:foodImage.grill,hint:'锅巴焦香，越吃越满足',reason:'米饭吸满腊味香气，适合今天想吃得扎实一点。',tags:['casual','premium']},
  {id:'big-plate-chicken',name:'新疆大盘鸡',cuisine:'西北菜',image:foodImage.spicy,hint:'大口吃肉，热烈又满足',reason:'鸡肉、土豆和宽面一锅齐全，很适合多人分享。',tags:['spicy','friends']},
  {id:'roujiamo',name:'肉夹馍配凉皮',cuisine:'西北菜',image:foodImage.grill,hint:'碳水与肉香的快乐组合',reason:'方便、实在又有层次，想随便吃点时很合拍。',tags:['casual']},
  {id:'thai-curry',name:'泰式咖喱饭',cuisine:'东南亚菜',image:foodImage.warm,hint:'香料温暖，换一种好心情',reason:'椰香咖喱浓郁柔和，适合想换换口味的今天。',tags:['premium','casual']},
  {id:'pho',name:'越南牛肉河粉',cuisine:'东南亚菜',image:foodImage.warm,hint:'清亮鲜香，吃完很轻松',reason:'香草与清汤让味道很舒展，适合清淡一点。',tags:['light','tired']},
  {id:'dumplings',name:'鲜肉锅贴',cuisine:'小吃',image:foodImage.grill,hint:'脆底多汁，小份也有满足感',reason:'想快速解决一餐，又不想太随便时就选它。',tags:['casual']},
  {id:'jianbing',name:'煎饼果子',cuisine:'小吃',image:foodImage.grill,hint:'熟悉的街头香气，简单可靠',reason:'出餐快、价格友好，适合不想走远的忙碌时刻。',tags:['casual']},
  {id:'beef-burger',name:'厚切牛肉汉堡',cuisine:'汉堡快餐',image:foodImage.grill,hint:'直接一点，大口获得快乐',reason:'肉香、芝士和面包的组合，累的时候尤其有满足感。',tags:['casual','tired']},
  {id:'fried-chicken',name:'脆皮炸鸡',cuisine:'汉堡快餐',image:foodImage.grill,hint:'今天就允许自己放纵一下',reason:'酥脆外皮很解压，适合想轻松吃顿快乐餐。',tags:['friends','tired']},
  {id:'chicken-salad',name:'香草鸡肉沙拉',cuisine:'轻食',image:foodImage.fresh,hint:'清爽有蛋白，下午也轻盈',reason:'蔬菜和鸡肉搭配均衡，适合想吃清淡一点。',tags:['light','premium']},
  {id:'poke-bowl',name:'三文鱼波奇饭',cuisine:'轻食',image:foodImage.fresh,hint:'颜色明亮，口感也很轻快',reason:'谷物、蔬菜与鱼肉组合丰富，清爽但不会吃不饱。',tags:['light','premium']},
  {id:'tomato-eggs',name:'番茄炒蛋套餐',cuisine:'家常菜',image:foodImage.warm,hint:'熟悉的味道最能安慰人',reason:'酸甜家常、配饭舒服，今天不想冒险就吃它。',tags:['casual','tired','light']},
  {id:'braised-pork',name:'红烧肉套餐',cuisine:'家常菜',image:foodImage.warm,hint:'软糯浓香，认真吃顿饭',reason:'酱香和米饭很搭，适合想获得扎实满足感的今天。',tags:['casual','tired']},
  {id:'eggs-benedict',name:'班尼迪克蛋',cuisine:'Brunch',image:foodImage.fresh,hint:'把普通一天过得松弛一点',reason:'流心蛋与面包很有周末气氛，适合今天想吃好一点。',tags:['premium','light']},
  {id:'avocado-toast',name:'牛油果吐司',cuisine:'Brunch',image:foodImage.fresh,hint:'轻盈、漂亮，也很舒服',reason:'清新的口感很适合慢下来享受一顿早午餐。',tags:['light','premium']},
  {id:'pancake',name:'舒芙蕾松饼',cuisine:'甜品 / 饮品',image:foodImage.fresh,hint:'今天需要一点软绵绵的甜',reason:'轻盈松软的甜味，很适合给心情充个电。',tags:['premium','friends']},
  {id:'milk-tea',name:'奶茶配小蛋糕',cuisine:'甜品 / 饮品',image:foodImage.fresh,hint:'先来一点甜，再继续出发',reason:'想短暂休息一下时，一份小甜点就很刚好。',tags:['casual','friends']}
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let characterIndex = Math.max(0, characters.findIndex(item => item.id === localStorage.getItem('fandazi-character')));
let foodIndex = 0;
let rollCount = Number(localStorage.getItem('fandazi-roll-count') || 0);
let recentFoodIds = JSON.parse(localStorage.getItem('fandazi-recent-foods') || '[]');
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
  const available = foods.map((food,index) => ({food,index})).filter(({food}) => !recentFoodIds.includes(food.id));
  const pool = available.length ? available : foods.map((food,index) => ({food,index}));
  const weighted = pool.flatMap(({food,index}) => Array(selected.some(mood => food.tags.includes(mood)) ? 3 : 1).fill(index));
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
    recentFoodIds = [food.id,...recentFoodIds.filter(id => id !== food.id)].slice(0,6);
    localStorage.setItem('fandazi-recent-foods',JSON.stringify(recentFoodIds));
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

