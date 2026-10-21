/* Shared by the browser, local server and cloud Worker. */
const GMSiteMetadata = (() => {
  const brand='金色百林莊園';
  const routes={
    '/':['珍惜山林，品味咖啡的來處','從印尼西爪哇馬拉巴山出發，認識金色百林的莊園故事、環境保護與動物照護，以及 100% 純麝香貓咖啡。'],
    '/estate':['馬拉巴山莊園','從 2012 年家族與土地的相遇，認識 Ciwidey 與 Pangalengan 兩座莊園：超過 320 萬平方公尺，海拔約 1,511 至 2,313 公尺。'],
    '/story':['品牌故事','柯百庠與林嘉琪從台灣走進印尼馬拉巴山，以土地、在地夥伴與動物照護，延續一家人的莊園咖啡故事。'],
    '/sustainability':['永續理念','珍惜山林，也珍惜與動物共處的土地。從森林棲地、麝香貓復育照護到在地合作，認識金色百林保護環境的方向。'],
    '/luwak':['100% 純麝香貓咖啡','每一顆咖啡來之不易。認識金色百林從果實、採集、清洗、乾燥到烘焙的工序，並在選購前查看產品檢驗與登記文件。'],
    '/credentials':['純度與產品文件','公開 Sucofindo 檢驗、清真認證與印尼 BPOM 相關原件，依文件用途與產品範圍閱讀；DNA／純度專項報告待補。'],
    '/shop':['典藏選品','選購金色百林 100% 純麝香貓咖啡濾掛與咖啡豆禮盒。了解原料、莊園製程與產品文件，珍惜每一顆咖啡的來處。'],
    '/films':['莊園影像','觀看金色百林品牌專訪、馬拉巴山莊園及麝香貓復育與野放紀錄。'],
    '/contact':['預約品飲體驗','預約金色百林實體體驗店，認識印尼莊園咖啡。地址：桃園市桃園區莊敬路一段 300 號，預約電話 03-317-6029。'],
    '/journal':['莊園記事','金色百林莊園最新消息、品牌動態與咖啡故事。'],
    '/events':['最新活動','探索金色百林莊園品飲體驗與品牌活動。']
  };
  function get(path,product,article) {
    const clean=path.replace(/\/$/,'')||'/';
    const pair=routes[clean];
    if(product)return {title:product.name+'｜'+brand,description:String(product.description||product.subtitle||routes['/shop'][1]).replace(/\s+/g,' ').slice(0,180),image:product.image||'/assets/og-estate.jpg',type:'product',noindex:false,path:clean};
    if(article)return {title:article.title+'｜'+brand,description:String(article.excerpt||'').slice(0,180),image:article.image||'/assets/og-estate.jpg',type:'article',noindex:false,path:clean};
    return {title:(pair?pair[0]:clean.startsWith('/product/')?'商品資訊':'服務頁面')+'｜'+brand,description:pair?.[1]||'金色百林莊園台灣服務與訂購資訊。',image:'/assets/og-estate.jpg',type:'website',noindex:!pair,path:clean};
  }
  return {get,routes};
})();
if(typeof module!=='undefined'&&module.exports)module.exports=GMSiteMetadata;
else window.GMSiteMetadata=GMSiteMetadata;
