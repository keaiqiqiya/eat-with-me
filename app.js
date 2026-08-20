const characters = [
  {id:'xiao-an',name:'小安',role:'温柔咖啡厅服务员',image:'assets/characters/xiao-an.webp',alt:'暖色日系咖啡厅服务员小安',speech:'今天想吃点什么？选个心情，我来帮你摇～',accent:'#2fa05a',soft:'#eaf3e8'},
  {id:'lin',name:'凛',role:'清冷甜品侍者',image:'assets/characters/lin.webp',alt:'清冷蓝调甜品服务员凛',speech:'选择很难？把杂音留给夜色，把答案交给我。',accent:'#5277b7',soft:'#dfe8f6'},
  {id:'tuan-tuan',name:'团团',role:'Q 萌甜点助手',image:'assets/characters/tuan-tuan.webp',alt:'Q萌甜点助手团团',speech:'今天也要吃一顿让心情变软的饭呀！',accent:'#e99a72',soft:'#f7eadc',position:'72% center'},
  {id:'a-yao',name:'阿曜',role:'元气运动系饭搭子',image:'assets/characters/a-yao.webp',alt:'阳光运动系饭搭子阿曜',speech:'刚好有风，刚好饿了——接住今天的答案！',accent:'#65a965',soft:'#eef4df'},
  {id:'mu-chuan',name:'暮川',role:'周末居家料理担当',image:'assets/characters/mu-chuan.webp',alt:'清晨居家料理担当暮川',speech:'早餐还是正餐？先笑一下，答案马上出锅。',accent:'#9b82b7',soft:'#f1eaf5'},
  {id:'xia-ye',name:'夏野',role:'泳池边的夏日服务生',image:'assets/characters/xia-ye.webp',alt:'泳池阳光男大夏野',speech:'天气这么好，今天的选择也要清爽一点。',accent:'#3a9fc5',soft:'#def2f4'}
];

const foodImage = {
  warm:'assets/food/sukiyaki.webp',
  fresh:'assets/food/sushi.webp',
  spicy:'assets/food/sichuan-fish.webp',
  korean:'assets/food/korean-bbq.webp',
  hotpot:'assets/food/hotpot.webp',
  barbecue:'assets/food/barbecue.webp',
  western:'assets/food/western.webp',
  noodles:'assets/food/noodles.webp',
  southeastAsian:'assets/food/southeast-asian.webp',
  burger:'assets/food/burger.webp',
  light:'assets/food/light-food.webp',
  dessert:'assets/food/dessert.webp',
  riceSet:'assets/food/rice-set-v2.webp',
  northwest:'assets/food/northwest-v2.webp',
  snacks:'assets/food/snacks-v2.webp',
  homeStyle:'assets/food/home-style-v2.webp',
  brunch:'assets/food/brunch-v2.webp'
};

const foods = [
  {id:'sichuan-fish',name:'酸菜鱼',cuisine:'川湘菜',image:foodImage.spicy,hint:'酸辣开胃，今天就痛快一点',reason:'热气和酸香很提神，适合想认真吃顿饭的今天。',tags:['spicy','friends','tired']},
  {id:'jiangxi-stirfry',name:'江西小炒',cuisine:'川湘菜',image:foodImage.spicy,hint:'锅气十足，下饭刚刚好',reason:'鲜辣小炒很有烟火气，配一碗米饭就很满足。',tags:['spicy','casual']},
  {id:'beijing-hotpot',name:'北京铜锅涮肉',cuisine:'火锅',image:foodImage.hotpot,hint:'热气腾腾，适合慢慢涮',reason:'清汤、麻酱和羊肉简单直接，很适合一起分享。',tags:['friends','premium','tired']},
  {id:'clear-hotpot',name:'清汤羊肉丸子锅',cuisine:'火锅',image:foodImage.hotpot,hint:'清鲜暖胃，不想吃辣也合适',reason:'清汤温和又暖胃，累的时候吃起来没有负担。',tags:['light','friends','tired']},
  {id:'lamb-skewers',name:'炭烤羊肉串',cuisine:'烧烤',image:foodImage.barbecue,hint:'焦香上线，今晚放松一点',reason:'炭火香气足够治愈，适合和朋友边吃边聊。',tags:['friends','casual','tired']},
  {id:'grilled-fish',name:'香辣烤鱼',cuisine:'烧烤',image:foodImage.spicy,hint:'外焦里嫩，香辣很过瘾',reason:'一锅有鱼也有配菜，想吃辣时它很难出错。',tags:['spicy','friends']},
  {id:'sukiyaki',name:'寿喜烧',cuisine:'日料',image:foodImage.warm,hint:'暖乎乎的，今天正合适',reason:'甜咸汤汁裹着嫩牛肉，给今天一点刚刚好的满足感。',tags:['casual','tired','premium','light']},
  {id:'sushi',name:'精致寿司',cuisine:'日料',image:foodImage.fresh,hint:'清爽新鲜，吃完没有负担',reason:'一口一个的小幸福，很适合想把今天过得精致一点。',tags:['light','premium','casual']},
  {id:'korean-bbq',name:'韩式烤肉',cuisine:'韩餐',image:foodImage.korean,hint:'滋滋作响，快乐一起上桌',reason:'肉香和丰富小菜很有满足感，和朋友分享尤其合适。',tags:['friends','tired','casual']},
  {id:'pork-korean-bbq',name:'韩式五花肉烤肉',cuisine:'韩餐',image:foodImage.korean,hint:'焦香肉片配小菜，快乐很具体',reason:'烤肉与丰富小菜都在画面里，和朋友分享尤其合适。',tags:['casual','tired','friends']},
  {id:'pasta',name:'番茄肉酱意面',cuisine:'西餐',image:foodImage.western,hint:'浓郁但不冒险的安心选择',reason:'酸甜番茄与肉香很经典，适合想吃好一点的今天。',tags:['premium','casual']},
  {id:'steak',name:'香煎牛排',cuisine:'西餐',image:foodImage.western,hint:'今天值得一顿有仪式感的',reason:'焦香外壳和丰盈肉汁，给普通一天加一点庆祝感。',tags:['premium','friends']},
  {id:'beef-noodles',name:'兰州牛肉面',cuisine:'面 / 粉',image:foodImage.noodles,hint:'热汤落胃，踏实又舒服',reason:'一碗热汤面出餐快、满足感足，忙碌时尤其可靠。',tags:['casual','tired']},
  {id:'wide-beef-noodles',name:'红烧牛肉宽面',cuisine:'面 / 粉',image:foodImage.noodles,hint:'热汤宽面，胃口马上回来',reason:'画面里的宽面与牛肉扎实暖胃，忙碌时很可靠。',tags:['casual','tired']},
  {id:'chicken-rice',name:'照烧鸡排饭',cuisine:'米饭套餐',image:foodImage.riceSet,hint:'一份套餐，解决今天的纠结',reason:'鸡排、米饭和蔬菜组合完整，是稳妥又省心的一餐。',tags:['casual','tired']},
  {id:'egg-chicken-rice',name:'温泉蛋鸡排饭',cuisine:'米饭套餐',image:foodImage.riceSet,hint:'流心蛋配鸡排，扎实又满足',reason:'图片里的鸡排与软蛋很有满足感，适合认真吃一顿。',tags:['casual','premium']},
  {id:'big-plate-chicken',name:'新疆大盘鸡',cuisine:'西北菜',image:foodImage.northwest,hint:'大口吃肉，热烈又满足',reason:'鸡肉、土豆和宽面一锅齐全，很适合多人分享。',tags:['spicy','friends']},
  {id:'chicken-wide-noodles',name:'大盘鸡拌宽面',cuisine:'西北菜',image:foodImage.northwest,hint:'浓香汤汁裹满宽面',reason:'图里的宽带面吸满大盘鸡汤汁，碳水快乐很直接。',tags:['spicy','casual']},
  {id:'thai-curry',name:'泰式咖喱饭',cuisine:'东南亚菜',image:foodImage.southeastAsian,hint:'香料温暖，换一种好心情',reason:'椰香咖喱浓郁柔和，适合想换换口味的今天。',tags:['premium','casual']},
  {id:'green-curry',name:'泰式绿咖喱鸡',cuisine:'东南亚菜',image:foodImage.southeastAsian,hint:'椰香柔和，换一种好心情',reason:'图片里的咖喱与鸡肉香气舒展，想换口味就选它。',tags:['light','tired']},
  {id:'dumplings',name:'鲜肉锅贴',cuisine:'小吃',image:foodImage.snacks,hint:'脆底多汁，小份也有满足感',reason:'金黄锅贴与酥脆冰花都看得见，快速一餐也不随便。',tags:['casual']},
  {id:'lace-dumplings',name:'冰花煎饺',cuisine:'小吃',image:foodImage.snacks,hint:'咔嚓脆底，趁热最好吃',reason:'图片正是带冰花脆底的煎饺，适合想吃点香脆的今天。',tags:['casual','tired']},
  {id:'beef-burger',name:'厚切牛肉汉堡',cuisine:'汉堡快餐',image:foodImage.burger,hint:'直接一点，大口获得快乐',reason:'肉香、芝士和面包的组合，累的时候尤其有满足感。',tags:['casual','tired']},
  {id:'cheese-burger',name:'双层芝士牛肉堡',cuisine:'汉堡快餐',image:foodImage.burger,hint:'今天就允许自己放纵一下',reason:'图片里的双层肉饼和芝士很解压，适合一顿快乐餐。',tags:['friends','tired']},
  {id:'salmon-salad',name:'牛油果三文鱼沙拉',cuisine:'轻食',image:foodImage.light,hint:'清爽有蛋白，下午也轻盈',reason:'图片里的三文鱼、牛油果和蔬菜清爽均衡。',tags:['light','premium']},
  {id:'poke-bowl',name:'三文鱼波奇饭',cuisine:'轻食',image:foodImage.light,hint:'颜色明亮，口感也很轻快',reason:'谷物、蔬菜与鱼肉组合丰富，清爽但不会吃不饱。',tags:['light','premium']},
  {id:'tomato-eggs',name:'番茄炒蛋套餐',cuisine:'家常菜',image:foodImage.homeStyle,hint:'熟悉的味道最能安慰人',reason:'图片里的番茄炒蛋配米饭，酸甜家常又舒服。',tags:['casual','tired','light']},
  {id:'braised-pork',name:'红烧肉套餐',cuisine:'家常菜',image:foodImage.homeStyle,hint:'软糯浓香，认真吃顿饭',reason:'图中红烧肉与米饭很搭，适合想获得扎实满足感的今天。',tags:['casual','tired']},
  {id:'eggs-benedict',name:'班尼迪克蛋',cuisine:'Brunch',image:foodImage.brunch,hint:'把普通一天过得松弛一点',reason:'图片里的流心蛋与面包很有周末气氛。',tags:['premium','light']},
  {id:'avocado-toast',name:'牛油果吐司',cuisine:'Brunch',image:foodImage.brunch,hint:'轻盈、漂亮，也很舒服',reason:'图片里的牛油果与小番茄清新明亮，适合慢慢享用。',tags:['light','premium']},
  {id:'pancake',name:'舒芙蕾松饼',cuisine:'甜品 / 饮品',image:foodImage.dessert,hint:'今天需要一点软绵绵的甜',reason:'轻盈松软的甜味，很适合给心情充个电。',tags:['premium','friends']},
  {id:'milk-tea',name:'奶茶配小蛋糕',cuisine:'甜品 / 饮品',image:foodImage.dessert,hint:'先来一点甜，再继续出发',reason:'想短暂休息一下时，一份小甜点就很刚好。',tags:['casual','friends']}
];

const cuisineMeta = [
  ['川湘菜','SICHUAN',foodImage.spicy,'酸辣 · 小炒 · 烤鱼'],
  ['火锅','HOT POT',foodImage.hotpot,'铜锅 · 椰子鸡 · 牛肉锅'],
  ['烧烤','BARBECUE',foodImage.barbecue,'羊肉串 · 烤鱼 · 炭火香'],
  ['日料','JAPANESE',foodImage.fresh,'寿司 · 拉面 · 寿喜烧'],
  ['韩餐','KOREAN',foodImage.korean,'烤肉 · 拌饭 · 部队锅'],
  ['西餐','WESTERN',foodImage.western,'意面 · 牛排 · 奶油香'],
  ['面 / 粉','NOODLES',foodImage.noodles,'牛肉面 · 米线 · 热汤'],
  ['米饭套餐','RICE SET',foodImage.riceSet,'鸡排饭 · 温泉蛋 · 配菜'],
  ['西北菜','NORTHWEST',foodImage.northwest,'大盘鸡 · 宽带面 · 土豆'],
  ['东南亚菜','SOUTHEAST ASIA',foodImage.southeastAsian,'咖喱 · 河粉 · 香草'],
  ['小吃','SNACKS',foodImage.snacks,'锅贴 · 冰花煎饺 · 脆底'],
  ['汉堡快餐','BURGERS',foodImage.burger,'汉堡 · 炸鸡 · 快乐碳水'],
  ['轻食','LIGHT FOOD',foodImage.light,'沙拉 · 波奇饭 · 清爽'],
  ['家常菜','HOME STYLE',foodImage.homeStyle,'番茄炒蛋 · 红烧肉'],
  ['Brunch','BRUNCH',foodImage.brunch,'吐司 · 班尼迪克蛋'],
  ['甜品 / 饮品','DESSERT',foodImage.dessert,'松饼 · 蛋糕 · 奶茶']
];

const cafeterias = ['学一食堂','家园食堂一楼','家园食堂二楼','家园食堂三楼','艺园食堂','佟园食堂','勺园食堂一楼','勺园食堂二楼','畅春园食堂','农园食堂一楼','农园食堂二楼','燕南食堂','学五食堂'];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let characterIndex = Math.max(0, characters.findIndex(item => item.id === localStorage.getItem('fandazi-character')));
let foodIndex = 0;
let rollCount = Number(localStorage.getItem('fandazi-roll-count') || 0);
let recentFoodIds = JSON.parse(localStorage.getItem('fandazi-recent-foods') || '[]');
let selectedCuisine = '';
let recommendationPhase = 'cuisine';
let cuisineWasManual = false;
let excludedCafeterias = JSON.parse(localStorage.getItem('fandazi-excluded-cafeterias') || '[]');
let lastCafeteria = localStorage.getItem('fandazi-last-cafeteria') || '';
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
    image.style.objectPosition = character.position || 'center';
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
function meaningfulMoods(){return selectedMoods().filter(mood => mood !== 'casual')}
function moodLabels(){
  const labels = {casual:'随便吃点',spicy:'想吃辣',light:'清淡一点',tired:'今天好累'};
  return selectedMoods().map(mood => labels[mood]);
}
function moodEligibleFoods(){
  const moods = meaningfulMoods();
  return moods.length ? foods.filter(food => moods.some(mood => food.tags.includes(mood))) : foods;
}
function chooseCuisine(){
  const candidates = [...new Set(moodEligibleFoods().map(food => food.cuisine))];
  const pool = candidates.length > 1 ? candidates.filter(name => name !== selectedCuisine) : candidates;
  return pool[Math.floor(Math.random() * pool.length)];
}
function chooseFood(cuisine = selectedCuisine){
  const moods = meaningfulMoods();
  const inCuisine = foods.map((food,index) => ({food,index})).filter(({food}) => food.cuisine === cuisine);
  const moodMatches = moods.length ? inCuisine.filter(({food}) => moods.some(mood => food.tags.includes(mood))) : inCuisine;
  const matching = moodMatches.length ? moodMatches : inCuisine;
  const available = matching.filter(({food}) => !recentFoodIds.includes(food.id));
  const pool = available.length ? available : matching;
  let next = pool[Math.floor(Math.random() * pool.length)]?.index ?? inCuisine[0].index;
  if(pool.length > 1 && next === foodIndex) next = pool.find(({index}) => index !== foodIndex)?.index ?? next;
  return next;
}

function moodReason(){
  const moods = meaningfulMoods();
  if(!moods.length) return '你选择了「随便吃点」，所有菜系都有机会被摇中。';
  return `因为你选择了「${moodLabels().join('、')}」，这次只从符合状态的菜系和菜品中挑选。`;
}

function recommendationReason(){
  if(cuisineWasManual) return `你手动选择了「${selectedCuisine}」，今日状态会继续影响这个菜系里的具体推荐。`;
  return moodReason();
}

function showCuisine(name, manual = false){
  selectedCuisine = name;
  cuisineWasManual = manual;
  recommendationPhase = 'specific';
  const meta = cuisineMeta.find(([cuisine]) => cuisine === name);
  $('#fortuneImage').src = meta[2];
  $('#fortuneImage').alt = `${name}代表美食`;
  $('#cuisineTag').textContent = '第一步 · 菜系';
  $('#foodName').textContent = name;
  $('#fortuneHint').textContent = '菜系已决定，再摇一次看看具体吃什么';
  $('#fortuneReason').textContent = recommendationReason();
  $('#fortuneCount').textContent = `LUCKY ${String(rollCount).padStart(2,'0')}`;
  $('#fortuneStep').textContent = 'STEP 1 / 2';
  $('#acceptFood').innerHTML = '摇具体吃什么 <svg><use href="#i-arrow"/></svg>';
  $('#rerollFood').setAttribute('aria-label','换一个菜系');
  $('#selectedCuisine').textContent = name;
  $('#categoryState').hidden = false;
  $$('.food-card').forEach(card => card.classList.toggle('selected',card.dataset.cuisine === name));
  $('#speechBubble').textContent = `第一步是${name}，再让我挑一道具体的！`;
}

function showFood(index){
  recommendationPhase = 'done';
  foodIndex = index;
  const food = foods[foodIndex];
  const character = characters[characterIndex];
  recentFoodIds = [food.id,...recentFoodIds.filter(id => id !== food.id)].slice(0,6);
  localStorage.setItem('fandazi-recent-foods',JSON.stringify(recentFoodIds));
  $('#fortuneImage').src = food.image;
  $('#fortuneImage').alt = food.name;
  $('#cuisineTag').textContent = food.cuisine;
  $('#foodName').textContent = food.name;
  $('#fortuneHint').textContent = food.hint;
  $('#fortuneReason').textContent = `${recommendationReason()} ${food.reason}`;
  $('#fortuneStep').textContent = 'STEP 2 / 2';
  $('#acceptFood').innerHTML = '就吃这个 <svg><use href="#i-arrow"/></svg>';
  $('#rerollFood').setAttribute('aria-label','在当前菜系再换一道');
  $('#fortuneCount').textContent = `LUCKY ${String(rollCount).padStart(2,'0')}`;
  $('#speechBubble').textContent = rollCount >= 4 ? '已经摇了好几次……你是不是其实心里有答案了？' : `今天吃${food.name}怎么样？`;
  $('.fortune-reason span').textContent = `${character.name}说`;
}

function animateResult(callback){
  const cta = $('#rollCta');
  const photo = $('.fortune-photo');
  cta.classList.remove('rolling');
  void cta.offsetWidth;
  cta.classList.add('rolling');
  photo.classList.add('changing');
  rollCount += 1;
  localStorage.setItem('fandazi-roll-count',String(rollCount));
  setTimeout(() => {
    callback();
    photo.classList.remove('changing');
    if(innerWidth < 900) $('#fortune').scrollIntoView({behavior:'smooth',block:'center'});
  },520);
}

function startCuisineRoll(){
  recommendationPhase = 'cuisine';
  animateResult(() => showCuisine(chooseCuisine(),false));
}

function rollSpecificFood(){
  if(!selectedCuisine){startCuisineRoll();return}
  animateResult(() => showFood(chooseFood(selectedCuisine)));
}

function primaryAction(){
  if(recommendationPhase === 'specific') rollSpecificFood();
  else if(recommendationPhase === 'done') showToast(`好，今天就吃${foods[foodIndex].name}！`);
  else startCuisineRoll();
}

function secondaryAction(){
  if(recommendationPhase === 'done') rollSpecificFood();
  else startCuisineRoll();
}

function renderCuisineGrid(){
  $('#foodGrid').innerHTML = cuisineMeta.map(([name,english,image,description],index) => `
    <button class="food-card${index === 0 ? ' large' : ''}" type="button" data-cuisine="${name}" aria-label="从${name}中随机推荐">
      <img src="${image}" alt="${name}代表美食" loading="lazy">
      <span class="food-card-arrow">↗</span>
      <div><span>${String(index + 1).padStart(2,'0')} / ${english}</span><h3>${name}</h3><p>${description}</p></div>
    </button>`).join('');
  $$('.food-card').forEach(card => card.addEventListener('click',() => {
    selectedCuisine = card.dataset.cuisine;
    $$('.food-card').forEach(item => item.classList.toggle('selected',item === card));
    $('#selectedCuisine').textContent = selectedCuisine;
    $('#categoryState').hidden = false;
    showCuisine(selectedCuisine,true);
    $('#fortune').scrollIntoView({behavior:'smooth',block:'center'});
  }));
}

function renderCafeterias(){
  $('#cafeteriaOptions').innerHTML = cafeterias.map((name,index) => `
    <label class="cafeteria-option">
      <input type="checkbox" value="${name}" ${excludedCafeterias.includes(name) ? 'checked' : ''}>
      <span><b>${String(index + 1).padStart(2,'0')}</b>${name}<i>排除</i></span>
    </label>`).join('');
  $$('#cafeteriaOptions input').forEach(input => input.addEventListener('change',() => {
    excludedCafeterias = $$('#cafeteriaOptions input:checked').map(item => item.value);
    localStorage.setItem('fandazi-excluded-cafeterias',JSON.stringify(excludedCafeterias));
    updateCafeteriaTip();
  }));
  updateCafeteriaTip();
}

function updateCafeteriaTip(){
  const available = cafeterias.length - excludedCafeterias.length;
  $('#cafeteriaTip').textContent = excludedCafeterias.length ? `已排除 ${excludedCafeterias.length} 个，还有 ${available} 个选择` : '没有排除任何食堂';
}

function rollCafeteria(){
  const available = cafeterias.filter(name => !excludedCafeterias.includes(name));
  if(!available.length){showToast('至少保留一个食堂才能随机哦');return}
  const pool = available.length > 1 ? available.filter(name => name !== lastCafeteria) : available;
  lastCafeteria = pool[Math.floor(Math.random() * pool.length)];
  localStorage.setItem('fandazi-last-cafeteria',lastCafeteria);
  $('#cafeteriaResult').textContent = lastCafeteria;
  $('#cafeteriaResult').classList.remove('pop');
  void $('#cafeteriaResult').offsetWidth;
  $('#cafeteriaResult').classList.add('pop');
  $('#speechBubble').textContent = `今天去${lastCafeteria}，说不定会遇到惊喜。`;
}

function showToast(message){
  const toast = $('#toast');
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'),2200);
}

$$('.mood').forEach(button => button.addEventListener('click',() => {
  const isCasual = button.dataset.mood === 'casual';
  if(isCasual){
    $$('.mood').forEach(item => item.classList.toggle('active',item === button));
  }else{
    $('.mood[data-mood="casual"]').classList.remove('active');
    button.classList.toggle('active');
    if(!$$('.mood.active').length) $('.mood[data-mood="casual"]').classList.add('active');
  }
  $$('.mood').forEach(item => item.setAttribute('aria-pressed',String(item.classList.contains('active'))));
  recommendationPhase = 'cuisine';
  selectedCuisine = '';
  cuisineWasManual = false;
  $('#categoryState').hidden = true;
  $$('.food-card').forEach(card => card.classList.remove('selected'));
  $('#speechBubble').textContent = `${moodLabels().join('、')}，收到！第一步先决定菜系。`;
}));
$('#prevCharacter').addEventListener('click',() => switchCharacter(characterIndex - 1));
$('#nextCharacter').addEventListener('click',() => switchCharacter(characterIndex + 1));
$('#rollCta').addEventListener('click',startCuisineRoll);
$('#rerollFood').addEventListener('click',secondaryAction);
$('#acceptFood').addEventListener('click',primaryAction);
$('#clearCuisine').addEventListener('click',() => {
  selectedCuisine = '';
  recommendationPhase = 'cuisine';
  cuisineWasManual = false;
  $('#categoryState').hidden = true;
  $$('.food-card').forEach(card => card.classList.remove('selected'));
});
$('#cafeteriaRoll').addEventListener('click',rollCafeteria);
$('#resetCafeterias').addEventListener('click',() => {
  excludedCafeterias = [];
  localStorage.setItem('fandazi-excluded-cafeterias','[]');
  renderCafeterias();
});

renderCuisineGrid();
renderCafeterias();
switchCharacter(characterIndex);