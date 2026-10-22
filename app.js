const app = document.getElementById('app');
const state = { products: [], news: [], events: [], settings: {}, filter: '全部', coupon: '', quote: null, loading: false, dataReady: false, dataError: false };
const tastingStore = { name: '金色百林實體體驗店', address: '桃園市桃園區莊敬路一段 300 號', landmark: '尊爵大飯店側面合庫ATM旁的精品店', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Venus%20Chen%20%E7%8F%A0%E5%AF%B6%20%E6%A1%83%E5%9C%92%E5%B8%82%E6%A1%83%E5%9C%92%E5%8D%80%E8%8E%8A%E6%95%AC%E8%B7%AF%E4%B8%80%E6%AE%B5300%E8%99%9F', phone: '03-317-6029', tel: 'tel:+88633176029', hours: '週二至週日 13:00–18:00', closed: '每週一公休', reservation: '請先來電預約' };
const money = n => 'NT$ ' + Number(n || 0).toLocaleString('zh-TW');
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const prose = v => esc(v).replace(/\n/g, '<br>');
const date = v => v ? new Date(v).toLocaleDateString('zh-TW', {year:'numeric',month:'long',day:'numeric'}) : '';
function notify(message) { const el = document.getElementById('toast'); el.textContent = message; el.classList.add('show'); clearTimeout(notify.timer); notify.timer = setTimeout(() => el.classList.remove('show'), 3300); }
async function request(url, options = {}) { const response = await fetch(GM_API(url), { headers: { 'Content-Type': 'application/json', ...options.headers }, credentials: 'same-origin', signal:AbortSignal.timeout(15000), ...options }); const data = await response.json(); if (!response.ok) throw new Error(data.error || '操作失敗'); return data; }
function cart() { try { return JSON.parse(localStorage.getItem('gm-cart') || '[]'); } catch { return []; } }
function saveCart(items) { localStorage.setItem('gm-cart', JSON.stringify(items)); render(); }
function cartCount() { return cartItems().reduce((n, i) => n + i.quantity, 0); }
function cartItems() { return cart().map(i => ({ ...i, product: state.products.find(p => p.id === i.productId) })).filter(i => i.product); }
function addToCart(productId, quantity = 1) { const product = state.products.find(p => p.id === productId); if (!product || product.stock < 1) return notify('目前無法加入此商品'); const items = cart(); const existing = items.find(i => i.productId === productId); const current = existing?.quantity || 0; if (current + quantity > product.stock) return notify('已達可購買庫存數量'); if (existing) existing.quantity += quantity; else items.push({ productId, quantity }); saveCart(items); notify('已加入購物車'); }
function scrollToRoute() {
  const target=location.hash?document.getElementById(decodeURIComponent(location.hash.slice(1))):null;
  if(target) target.scrollIntoView({behavior:'instant',block:'start'}); else window.scrollTo({top:0,behavior:'instant'});
}
function nav(url) { history.pushState({},'',GM_URL(url)); state.quote = null; render(); scrollToRoute(); if (url === '/checkout') refreshQuote(); }
function logo() { return '<a class="brand" href="/" data-link aria-label="金色百林莊園首頁"><span class="brand-wordmark">GOLDEN MALABAR</span><span class="brand-local">金色百林莊園</span></a>'; }
const primaryLinks=[['/story','品牌故事','Story'],['/luwak','麝香貓咖啡','Kopi Luwak'],['/shop','典藏選品','Collection'],['/films','莊園影像','Films'],['/contact','預約體驗','Visit']];
function bagLink() { return `<a class="masthead-bag" href="/cart" data-link aria-label="購物袋，${cartCount()} 件商品"><svg viewBox="0 0 15 18" fill="none" aria-hidden="true"><path d="M1.5 5.5h12l.9 12H.6l.9-12Z" stroke="currentColor" stroke-width=".9"/><path d="M4.6 6V4a2.9 2.9 0 0 1 5.8 0v2" stroke="currentColor" stroke-width=".9"/></svg><span class="bag-count">${cartCount()}</span></a>`; }
function header() {
  const sections={'/story':['/story','/estate','/sustainability'],'/luwak':['/luwak','/credentials'],'/shop':['/shop','/product/'],'/contact':['/contact']};
  const active=url=>(sections[url]||[url]).some(p=>p.endsWith('/')?GM_PATH().startsWith(p):GM_PATH()===p);
  const link=([url,label])=>`<a href="${url}" data-link ${active(url)?'aria-current="page"':''}>${label}</a>`;
  return `<a class="skip-link" href="#main-content">跳至主要內容</a><header class="masthead ${window.scrollY>20?'is-scrolled':''}"><div class="masthead-inner"><button class="masthead-toggle" id="menu-toggle" aria-label="開啟選單" aria-controls="main-nav" aria-expanded="false"><i aria-hidden="true"></i><span>選單</span></button><nav class="masthead-nav" aria-label="主要導覽">${primaryLinks.slice(0,3).map(link).join('')}</nav><a class="masthead-brand" href="/" data-link aria-label="金色百林莊園首頁"><span class="h-emblem" aria-hidden="true"></span><span class="masthead-word">GOLDEN MALABAR</span><span class="masthead-local">金色百林莊園</span></a><nav class="masthead-nav is-end" aria-label="體驗與購物袋">${primaryLinks.slice(3).map(link).join('')}${bagLink()}</nav><div class="masthead-end">${bagLink()}</div></div></header><nav class="drawer" id="main-nav" aria-label="網站選單"><button class="drawer-close" type="button" data-menu-close>關閉</button>${primaryLinks.map(([url,label,en])=>`<a href="${url}" data-link>${label}<small>${en}</small></a>`).join('')}<div class="drawer-minor"><a href="/estate" data-link>莊園</a><a href="/sustainability" data-link>永續理念</a><a href="/credentials" data-link>純度與文件</a><a href="/journal" data-link>莊園記事</a><a href="/order-lookup" data-link>訂單查詢</a></div></nav>`;
}
function footer() {
  const email=state.settings.brand_email;
  return `<footer class="colophon"><div class="h-wrap"><div class="colophon-top"><a class="colophon-brand" href="/" data-link aria-label="金色百林莊園首頁"><span class="h-emblem" aria-hidden="true"></span><span><b>GOLDEN MALABAR</b><small>金色百林莊園</small></span></a><p class="colophon-motto">珍惜山林、照顧土地，<br>讓每一顆咖啡的來處被看見。</p></div><div class="colophon-cols"><div><h4>莊園</h4><a href="/story" data-link>品牌故事</a><a href="/estate" data-link>馬拉巴山莊園</a><a href="/sustainability" data-link>永續理念</a><a href="/luwak" data-link>麝香貓咖啡</a><a href="/credentials" data-link>純度與產品文件</a><a href="/films" data-link>莊園影像</a></div><div><h4>選購與服務</h4><a href="/shop" data-link>典藏選品</a><a href="/cart" data-link>購物袋</a><a href="/order-lookup" data-link>訂單查詢與匯款回報</a><a href="/journal" data-link>莊園記事</a><a href="/events" data-link>最新活動</a></div><div><h4>${tastingStore.name}</h4><address>${tastingStore.address}<br>${tastingStore.landmark}</address><p>${tastingStore.hours}<br>${tastingStore.closed} · ${tastingStore.reservation}</p><a href="${tastingStore.tel}">${tastingStore.phone}</a>${email?`<a class="contact-email" href="mailto:${esc(email)}">${esc(email)}</a>`:''}</div></div><div class="colophon-base"><span>© 2026 Golden Malabar Taiwan</span><span class="h-en">Mount Malabar · West Java</span></div></div></footer>`;
}
function shell(content) {
  app.dataset.page = GM_PATH().split('/')[1] || 'home';
  app.innerHTML = GM_REBASE(header() + content + footer());
  const main=app.querySelector('main'); if(main){main.id='main-content';main.tabIndex=-1;main.classList.add('house');}
  updatePageMetadata();
  setupHomeFilm();
  setupMotion();
}
function setupMotion() {
  setupMotion.controller?.abort();
  if(window.__GM_PRERENDER__||typeof IntersectionObserver==='undefined')return;
  const controller=new AbortController();setupMotion.controller=controller;
  let observed=false;
  const observer=new IntersectionObserver(entries=>{observed=true;for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('is-in');observer.unobserve(entry.target);}},{rootMargin:'0px 0px -8% 0px'});
  // Some in-app browsers never deliver intersection callbacks; content must not stay hidden.
  const failsafe=setTimeout(()=>{if(!observed)document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('is-in'));},2000);
  controller.signal.addEventListener('abort',()=>clearTimeout(failsafe),{once:true});
  document.querySelectorAll('[data-reveal]:not(.is-in)').forEach(el=>observer.observe(el));
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clips=new IntersectionObserver(entries=>{for(const entry of entries){const v=entry.target;if(entry.isIntersecting&&!reduced)v.play().catch(()=>{});else v.pause();}},{threshold:.25});
  document.querySelectorAll('video[data-clip]').forEach(v=>clips.observe(v));
  controller.signal.addEventListener('abort',()=>clips.disconnect(),{once:true});
  controller.signal.addEventListener('abort',()=>observer.disconnect(),{once:true});
  const layers=[...document.querySelectorAll('[data-parallax]')];
  if(!layers.length||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  let frame=0;
  // Drift images gently against the scroll; offsets stay small so crops never expose edges.
  const drift=()=>{frame=0;const vh=innerHeight;for(const layer of layers){const box=layer.parentElement.getBoundingClientRect();if(box.bottom<0||box.top>vh)continue;const progress=(box.top+box.height/2-vh/2)/vh;layer.style.transform=`translate3d(0,${(progress*-5).toFixed(2)}%,0)`;}};
  addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(drift);},{passive:true,signal:controller.signal});
  drift();
}
function updatePageMetadata() {
  if(window.__GM_PRERENDER__)return;
  const path=GM_PATH();
  const product=path.startsWith('/product/')?state.products.find(p=>p.id===path.split('/')[2]):null;
  const article=path.startsWith('/journal/')?state.news.find(p=>p.id===path.split('/')[2]):null;
  const info=window.GMSiteMetadata.get(path,product,article);
  const canonical=document.querySelector('link[rel="canonical"]');
  const origin=canonical?new URL(canonical.href).origin:location.origin;
  const url=origin+info.path;
  const image=new URL(info.image,origin).href;
  document.title=info.title;
  const values={'name:description':info.description,'name:robots':info.noindex?'noindex, nofollow':'index, follow','property:og:title':info.title,'property:og:description':info.description,'property:og:url':url,'property:og:image':image,'property:og:image:alt':product?.name||'金色百林莊園林景','property:og:type':info.type==='article'?'article':'website','name:twitter:title':info.title,'name:twitter:description':info.description,'name:twitter:image':image};
  for(const [key,value] of Object.entries(values)){const [attr,name]=key.split(':');let tag=document.querySelector(`meta[${attr}="${name}"]`);if(!tag){tag=document.createElement('meta');tag.setAttribute(attr,name);document.head.append(tag);}tag.content=value;}
  if(canonical)canonical.href=url;
  for(const dimension of ['width','height']){const tag=document.querySelector(`meta[property="og:image:${dimension}"]`);if(tag&&(product||article))tag.remove();}
  // Replace the previous route's structured data with current product information.
  const schema=document.getElementById('site-schema');
  if(schema)schema.textContent=JSON.stringify(product?{'@context':'https://schema.org','@type':'Product',name:product.name,description:product.description,image,brand:{'@type':'Brand',name:'Golden Malabar'},offers:{'@type':'Offer',url,price:product.price,priceCurrency:'TWD',availability:'https://schema.org/'+(product.stock>0?'InStock':'OutOfStock')}}:{'@context':'https://schema.org','@type':path==='/'?'WebSite':'WebPage',name:info.title,description:info.description,url,inLanguage:'zh-Hant'});
}
function setupHomeFilm() {
  setupHomeFilm.controller?.abort();
  const video=document.getElementById('home-brand-film');
  const sound=document.querySelector('[data-film-sound]');
  if(!video||!sound)return;
  const controller=new AbortController();setupHomeFilm.controller=controller;
  const cover=video.parentElement.querySelector('.hero-film-cover');
  const {signal}=controller;
  const stage=video.parentElement,endCard=stage.querySelector('.hero-film-end');
  let timer,frame,coverReady=false,introFinished=false,finished=false,offscreen=false;
  const showCover=()=>{if(cover){cover.classList.remove('is-revealed');cover.removeAttribute('aria-hidden');}};
  // The film plays once; it never restarts on its own after ending or while scrolled out of view.
  const resume=()=>{if(introFinished&&!finished&&!offscreen&&!video.ended&&video.isConnected&&!document.hidden&&!signal.aborted)video.play().catch(showCover);};
  const reveal=()=>{if(introFinished&&video.readyState>=2&&!video.paused&&!document.hidden&&!signal.aborted&&cover){cover.classList.add('is-revealed');cover.setAttribute('aria-hidden','true');}};
  const firstFrame=()=>{if(video.requestVideoFrameCallback)frame=video.requestVideoFrameCallback(reveal);else reveal();};
  const startWhenVisible=()=>{
    clearTimeout(timer);
    if(document.hidden||signal.aborted||!coverReady)return;
    if(introFinished){resume();return;}
    // Count only time the decoded cover is actually visible to the visitor.
    timer=setTimeout(()=>{introFinished=true;resume();},1200);
  };
  signal.addEventListener('abort',()=>{clearTimeout(timer);if(frame!==undefined&&video.cancelVideoFrameCallback)video.cancelVideoFrameCallback(frame);},{once:true});
  showCover();
  video.addEventListener('playing',firstFrame,{signal});
  video.addEventListener('error',showCover,{signal});
  video.addEventListener('waiting',()=>{if(video.readyState<2)showCover();},{signal});
  video.addEventListener('pause',resume,{signal:controller.signal});
  video.addEventListener('ended',()=>{finished=true;stage.classList.add('is-ended');endCard?.removeAttribute('aria-hidden');},{signal});
  stage.querySelector('[data-film-replay]')?.addEventListener('click',()=>{finished=false;stage.classList.remove('is-ended');endCard?.setAttribute('aria-hidden','true');video.currentTime=0;resume();},{signal});
  if(typeof IntersectionObserver!=='undefined'){
    const view=new IntersectionObserver(([entry])=>{offscreen=!entry.isIntersecting;if(offscreen){if(!video.paused)video.pause();}else resume();},{threshold:.2});
    view.observe(stage);
    signal.addEventListener('abort',()=>view.disconnect(),{once:true});
  }
  document.addEventListener('visibilitychange',startWhenVisible,{signal});
  const syncSound=()=>{const audible=!video.muted&&video.volume>0;sound.setAttribute('aria-pressed',String(audible));sound.textContent=audible?'關閉聲音':'開啟聲音';};
  video.addEventListener('volumechange',syncSound,{signal});
  sound.addEventListener('click',()=>{video.muted=!(video.muted||video.volume===0);if(!video.muted&&video.volume===0)video.volume=1;syncSound();if(video.paused)resume();},{signal});
  syncSound();
  const ready=()=>{if(signal.aborted||coverReady)return;coverReady=true;startWhenVisible();};
  if(cover?.decode)cover.decode().then(ready,ready);
  else if(!cover||cover.complete)ready();
  else {cover.addEventListener('load',ready,{once:true,signal});cover.addEventListener('error',ready,{once:true,signal});}
}
function banner(en, title, description='') { return `<header class="ph ph-text h-light"><div class="h-wrap"><span class="h-kicker">${esc(en)}</span><h1 class="ph-title">${esc(title)}</h1>${description ? `<p class="ph-lead">${esc(description)}</p>` : ''}</div></header>`; }
function breadcrumb(label) { return `<nav class="h-wrap crumbs" aria-label="頁面路徑"><a href="/" data-link>首頁</a><span aria-hidden="true">/</span><span>${esc(label)}</span></nav>`; }
function productCard(p) { return homePiece(p); }
function catalogStatus() { return `<div class="catalog-status" role="status"><p>${state.dataError?'商品資料暫時無法載入，請稍後重試。':'正在載入商品資料…'}</p>${state.dataError?'<button class="h-button" type="button" data-retry-catalog>重新載入</button>':''}</div>`; }
function homePiece(p) { return `<article class="piece" data-reveal><a class="piece-stage" href="/product/${p.id}" data-link tabindex="-1" aria-hidden="true">${BrandContent.picture(p.image||'/assets/product-luwak-gift.webp',p.name,{sizes:'(max-width: 760px) 100vw, (max-width: 1100px) 46vw, 24vw'})}</a><div class="piece-meta"><p class="piece-kind">KOPI LUWAK · ${esc(p.category)}</p><h3><a href="/product/${p.id}" data-link>${esc(p.name)}</a></h3><p class="piece-spec">${esc(p.subtitle)}</p></div><div class="piece-foot"><span class="piece-price">${money(p.price)}</span><button class="piece-add" data-add="${p.id}" ${p.stock<1?'disabled':''}>${p.stock<1?'暫無庫存':'加入購物袋'}</button></div></article>`; }
function homeProducts() { return state.dataReady?state.products.filter(p=>p.featured).slice(0,4).map(homePiece).join(''):catalogStatus(); }
function home() { return `<main class="house house-home">${BrandContent.home(homeProducts(),tastingStore)}</main>`; }
function shop() { const categories=['全部',...new Set(state.products.map(p=>p.category))]; const shown=state.filter==='全部'?state.products:state.products.filter(p=>p.category===state.filter); return `<main class="house page-shop collection-page">${BrandContent.intro({kicker:'The Estate Collection',title:'典藏選品',lead:'100% 純麝香貓咖啡，濾掛與咖啡豆兩種形式。每一顆咖啡，都從自家莊園的土地開始。'})}<section class="shop-body h-light"><div class="h-wrap"><div class="shop-toolbar"><div class="filters" aria-label="商品類別">${categories.map(c=>`<button class="filter ${c===state.filter?'active':''}" data-filter="${esc(c)}" aria-pressed="${c===state.filter}">${esc(c)}</button>`).join('')}</div><span class="count">${state.dataReady?shown.length+' 款選品':''}</span></div><div class="hh-pieces collection-grid">${state.dataReady?shown.map(productCard).join(''):catalogStatus()}</div>${BrandContent.evidence({compact:true})}</div></section><section class="ch h-light shop-gift" aria-labelledby="gift-title"><div class="h-wrap ch-grid"><div class="ch-body"><p class="h-index" data-reveal>II<span>送禮</span></p><span class="h-kicker ch-kicker" data-reveal>The Gifting Experience</span><h2 id="gift-title" class="h-display" data-reveal>一份禮，<br>從挑選開始細緻。</h2><div class="ch-text" data-reveal><p>挑選豆款、聽一段風味介紹，再細心包裝、放進同系列提袋——讓一份來自馬拉巴山的心意，被完整收好。</p></div></div><div class="ch-media">${BrandContent.clip('mobile-hero-boutique-vertical-304x540','mobile-hero-boutique-vertical-poster-304x540.webp','顧客在品牌門市挑選咖啡與禮盒','品牌提供影像 · 印尼門市選購',{cls:'is-portrait',w:304,h:540})}</div></div></section><section class="shop-note h-dark"><div class="h-wrap"><span class="h-kicker">From the Estate</span><p class="shop-note-text">每一份選購，都在支持一座保護森林、<br>與在地農民契作、照護麝香貓的莊園。</p><a href="/luwak" class="h-link on-dark" data-link>認識咖啡製程</a></div></section></main>`; }
function detail(p) { if(!state.dataReady)return `<main class="house">${banner('The Estate Collection','典藏選品')}<section class="h-wrap shop-body">${catalogStatus()}</section></main>`;if(!p)return notFound();const n=BrandContent.productNarratives[p.name]; const prefix=p.name.startsWith('麝香貓咖啡豆')?'麝香貓咖啡豆':'麝香貓咖啡';const title=p.name.startsWith(prefix)?`${prefix}<br><span>${esc(p.name.slice(prefix.length))}</span>`:esc(p.name);const images=[{src:p.image||'/assets/product-luwak-gift.webp',label:'商品形象' },...(n?.original?[{src:'/assets/'+n.original,label:'包裝實拍'}]:[])];const others=state.products.filter(other=>other.id!==p.id);return `<main class="house product-page"><nav class="h-wrap crumbs" aria-label="頁面路徑"><a href="/shop" data-link>典藏選品</a><span aria-hidden="true">/</span><span>${esc(p.name)}</span></nav><section class="h-wrap product-layout"><div class="product-gallery"><div class="product-stage">${BrandContent.picture(images[0].src,p.name+'商品形象',{priority:true,id:'product-main-image',sizes:'(max-width: 760px) 100vw, 52vw'})}</div><div class="gallery-thumbnails" aria-label="商品照片">${images.map((image,i)=>`<button class="gallery-thumbnail ${i===0?'is-current':''}" data-gallery="${esc(image.src)}" data-gallery-label="${esc(image.label)}" aria-pressed="${i===0}" aria-label="查看${esc(image.label)}"><img src="${esc(image.src)}" alt=""><span>${esc(image.label)}</span></button>`).join('')}</div></div><div class="product-purchase"><span class="h-kicker">Golden Malabar · Kopi Luwak</span><h1>${title}</h1><p class="product-format">${esc(p.subtitle)}</p><p class="product-price">${money(p.price)}</p><p class="purchase-description">${esc(p.description)}</p>${BrandContent.evidence({compact:true})}<div class="product-availability"><span class="availability-dot ${p.stock<1?'unavailable':''}" aria-hidden="true"></span>${p.stock>0?'可訂購':'暫無庫存'}<span>${esc(p.category)}</span></div><div class="quantity-row"><div class="qty"><button data-qty="minus" aria-label="減少數量" ${p.stock<1?'disabled':''}>−</button><input id="detail-qty" type="number" min="1" max="${Math.max(1,p.stock)}" value="1" aria-label="購買數量" ${p.stock<1?'disabled':''}><button data-qty="plus" aria-label="增加數量" ${p.stock<1?'disabled':''}>+</button></div><button class="h-button is-solid" data-add="${p.id}" data-detail-add ${p.stock<1?'disabled':''}>${p.stock<1?'暫無庫存':'加入購物袋'}</button></div><p class="purchase-shipping">訂單滿 ${money(state.settings.free_shipping_threshold)} 免運</p><div class="product-accordions"><details open><summary>商品資訊<span aria-hidden="true"></span></summary><dl>${(n?.specs||[['系列',p.category],['規格',p.subtitle]]).map(([key,value])=>`<div><dt>${esc(key)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl></details><details><summary>品飲與保存<span aria-hidden="true"></span></summary><p>${p.category.includes('濾掛')?'打開濾掛包，將掛耳固定於杯緣；先以少量熱水潤濕咖啡粉，再分次注水。可依個人喜好調整杯量。':'建議於沖煮前研磨，並依手沖、法式濾壓或其他器具選擇合適粗細，體會不同沖煮方式的風味表現。'}</p><p>置於陰涼乾燥處，避免陽光直射；開封後請妥善密封。保存期限請依商品包裝標示。</p></details><details><summary>配送與商品諮詢<span aria-hidden="true"></span></summary><p>固定運費 ${money(state.settings.shipping_fee)}，訂單滿 ${money(state.settings.free_shipping_threshold)} 免運。關於商品或配送安排，歡迎與台灣服務窗口聯繫。</p><a href="mailto:${esc(state.settings.brand_email)}">${esc(state.settings.brand_email)}</a></details></div></div></section>${BrandContent.product(p,esc)}${others.length?`<section class="related-collection h-light"><div class="h-wrap"><header class="h-head"><p class="h-index">II<span>同系列</span></p><h2 class="h-display">探索更多莊園咖啡</h2><a href="/shop" data-link class="h-link">瀏覽全部選品</a></header><div class="hh-pieces related-products">${others.map(homePiece).join('')}</div></div></section>`:''}</main>`; }
function story() { return BrandContent.story(); }
function journal() { return `<main class="house page-journal">${banner('Journal','莊園記事','最新消息、品牌動態與咖啡故事。')}<section class="list-section h-light"><div class="h-wrap">${state.news.length ? `<ol class="entry-list">${state.news.map(n => `<li data-reveal><a class="entry" href="/journal/${n.id}" data-link><time>${date(n.created_at)}</time><div><h2>${esc(n.title)}</h2><p>${esc(n.excerpt)}</p><span class="h-link">閱讀全文</span></div><span class="entry-image">${BrandContent.picture(n.image || '/assets/852518_0.webp',n.title,{sizes:'(max-width: 760px) 100vw, 30vw'})}</span></a></li>`).join('')}</ol>` : '<p class="empty-state">目前尚無最新消息。</p>'}</div></section></main>`; }
function newsDetail(n) { if (!n) return notFound(); return `<main class="house page-article">${banner('Journal · '+date(n.created_at),n.title,n.excerpt)}<article class="h-wrap article-body">${n.image ? `<figure class="h-figure article-figure"><img src="${esc(n.image)}" alt="${esc(n.title)}"></figure>` : ''}<div class="article-text"><p>${prose(n.body)}</p><a class="h-link" href="/journal" data-link>返回莊園記事</a></div></article></main>`; }
function events() { return `<main class="house page-events">${banner('Events & Offers','最新活動','探索莊園企劃與體驗優惠。')}<section class="list-section h-light"><div class="h-wrap">${state.events.length ? `<ol class="entry-list">${state.events.map((e,i) => `<li class="entry event-entry" data-reveal><span class="entry-n">${String(i+1).padStart(2,'0')}</span><div><h2>${esc(e.title)}</h2><p>${esc(e.description)}</p>${e.starts_at || e.ends_at ? `<p class="entry-meta">活動期間：${esc(e.starts_at ? date(e.starts_at) : '即日起')} — ${esc(e.ends_at ? date(e.ends_at) : '另行公告')}</p>` : ''}</div>${e.code ? `<span class="event-code">${esc(e.code)} · ${e.discount}% OFF</span>` : ''}</li>`).join('')}</ol>` : '<p class="empty-state">目前尚無活動。</p>'}</div></section></main>`; }
function contact() { return `<main class="house page-contact">${BrandContent.intro({kicker:'Visit & Contact',title:'預約品飲體驗',lead:'預約一場品飲，讓莊園的故事在杯中展開。'})}<section class="visit-detail h-light" id="tasting-store"><div class="h-wrap ch-grid"><div class="ch-body"><p class="h-index" data-reveal>I<span>台灣體驗店</span></p><h2 class="h-display" data-reveal>從莊園到杯中，<br>與你相遇。</h2><div class="ch-text" data-reveal><p>歡迎來到${tastingStore.name}，認識麝香貓咖啡，細品來自印尼西爪哇的莊園風味。商品諮詢、品飲體驗與品牌合作，皆歡迎與我們聯繫。</p></div><dl class="visit-list" data-reveal><div><dt>地址</dt><dd><address>${tastingStore.address}</address><span>${tastingStore.landmark}</span><a class="h-link" href="${esc(tastingStore.mapUrl)}" target="_blank" rel="noopener noreferrer">開啟地圖</a></dd></div><div><dt>預約電話</dt><dd><a class="visit-phone" href="${tastingStore.tel}">${tastingStore.phone}</a></dd></div><div><dt>營業時間</dt><dd>${tastingStore.hours}<br>${tastingStore.closed} · ${tastingStore.reservation}</dd></div>${state.settings.brand_email?`<div><dt>電子郵件</dt><dd><a href="mailto:${esc(state.settings.brand_email)}">${esc(state.settings.brand_email)}</a></dd></div>`:''}</dl><a class="h-button is-solid" href="${tastingStore.tel}" aria-label="來電預約 ${tastingStore.phone}">來電預約</a></div><div class="ch-media">${BrandContent.fig('gm-pourover','咖啡師以細口壺注水，濾杯架在玻璃下壺上手沖咖啡','品牌提供影像 · 峇里島旗艦店手沖',{cls:'ch-portrait'})}</div></div></section><section class="ch h-paper" aria-labelledby="bali-title"><div class="h-wrap ch-grid is-reverse"><div class="ch-body"><p class="h-index" data-reveal>II<span>印尼旗艦店</span></p><h2 id="bali-title" class="h-display" data-reveal>Golden Malabar Bali</h2><div class="ch-text" data-reveal><p>金色百林在印尼峇里島庫塔的 Discovery Shopping Mall 設有品牌旗艦店，提供阿拉比卡與麝香貓咖啡的品飲與選購。</p><p class="entry-meta">Discovery Shopping Mall Kuta, Jl. Kartika Plaza, Kuta, Bali · 每日 10:00–22:00</p></div></div><div class="ch-media">${BrandContent.clip('bali-flagship-vertical-304x540','bali-flagship-vertical-poster-304x540.webp','Golden Malabar Bali 旗艦店門口、吧台與陳列','品牌提供影像 · 峇里島旗艦店',{cls:'is-portrait',w:304,h:540})}</div></div></section></main>`; }
function cartPage() { const items = cartItems(); if (!items.length) return `<main class="house page-cart">${banner('Shopping Bag','購物袋')}<section class="h-wrap empty-state"><p>購物袋還是空的。挑選喜歡的咖啡，加入購物袋。</p><a href="/shop" data-link class="h-button">探索典藏選品</a></section></main>`; const subtotal = items.reduce((n,i) => n+i.product.price*i.quantity,0); const shipping = subtotal >= state.settings.free_shipping_threshold ? 0 : state.settings.shipping_fee; return `<main class="house page-cart">${banner('Shopping Bag','購物袋')}<section class="h-wrap cart-layout"><div class="cart-items">${items.map(i => `<div class="cart-item"><a class="cart-thumb" href="/product/${i.productId}" data-link><img src="${esc(i.product.image)}" alt="${esc(i.product.name)}"></a><div><h3>${esc(i.product.name)}</h3><small>${esc(i.product.subtitle)}</small><div class="cart-actions"><select data-cart-qty="${i.productId}" aria-label="${esc(i.product.name)}數量">${Array.from({length:Math.min(i.product.stock,20)},(_,n)=>`<option value="${n+1}" ${i.quantity===n+1?'selected':''}>${n+1}</option>`).join('')}</select><button class="plain-btn" data-remove="${i.productId}">移除</button></div></div><strong>${money(i.product.price*i.quantity)}</strong></div>`).join('')}<a class="h-link" href="/shop" data-link>繼續選購</a></div><aside class="summary"><h3>訂單摘要</h3><div class="summary-line"><span>商品小計</span><span>${money(subtotal)}</span></div><div class="summary-line"><span>預估運費</span><span>${shipping ? money(shipping) : '免運費'}</span></div><div class="summary-total"><span>預估總計</span><span>${money(subtotal+shipping)}</span></div><a href="/checkout" data-link class="h-button is-solid">前往結帳</a><p class="small-note">結帳時將重新確認商品數量與金額。</p></aside></section></main>`; }
function renderCheckoutQuote(){if(GM_PATH()!=='/checkout')return;const form=document.getElementById('checkout-form');const values=form?Object.fromEntries(new FormData(form)):null;render();if(values){const restored=document.getElementById('checkout-form');for(const [key,value] of Object.entries(values)){if(restored?.elements[key])restored.elements[key].value=value;}}}
async function refreshQuote() { const items = cart().map(({productId,quantity}) => ({productId,quantity})); if (!items.length) return; try { state.quote = await request('/api/quote', { method:'POST', body:JSON.stringify({items,coupon:state.coupon}) });renderCheckoutQuote(); } catch(e) { state.quote = null;renderCheckoutQuote();notify(e.message); } }
function checkout(){return OrderUI.checkout({state,esc,money,request,shell,banner,breadcrumb,cartItems,notify,nav});}
async function orderPage(id){return OrderUI.order({state,esc,money,request,shell,banner,breadcrumb,cartItems,notify,nav},id);}
function notFound() { return `<main class="house page-404">${banner('404','找不到此頁面','頁面可能已移動，請從首頁重新探索。')}<section class="h-wrap empty-state"><a class="h-button" href="/" data-link>返回首頁</a></section></main>`; }
function render() { const legacyRoutes = {'#origin':'/estate','#sustainability':'/sustainability'}; if(GM_PATH()==='/story' && legacyRoutes[location.hash]) history.replaceState({},'',GM_URL(legacyRoutes[location.hash])); const path = GM_PATH(); if (path.startsWith('/admin')) { import('/admin.js').then(m => m.mountAdmin({app,request,esc,money,notify,logo,nav})); return; } if (path.startsWith('/order/')) return orderPage(path.split('/')[2]); let html; if (path === '/') html = home(); else if (path === '/shop') html = shop(); else if (path.startsWith('/product/')) html = detail(state.products.find(p=>p.id===path.split('/')[2])); else if (path === '/story') html = BrandContent.story(); else if (path === '/estate') html = BrandContent.estate(); else if (path === '/sustainability') html = BrandContent.sustainability(); else if (path === '/luwak') html = BrandContent.luwak(); else if (path === '/credentials') html = BrandContent.credentials(); else if (path === '/films') html = BrandContent.films(); else if (path === '/journal') html = journal(); else if (path.startsWith('/journal/')) html = newsDetail(state.news.find(n=>n.id===path.split('/')[2])); else if (path === '/events') html = events(); else if (path === '/contact') html = contact(); else if (path === '/cart') html = cartPage(); else if (path === '/checkout') html = checkout(); else if(path==='/order-lookup')html=OrderUI.lookup({state,esc,money,request,shell,banner,breadcrumb,cartItems,notify,nav}); else html = notFound(); shell(html); }

document.addEventListener('click', async e => { const link = e.target.closest('a[data-link]'); if (link && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && e.button===0) { e.preventDefault(); nav(link.getAttribute('href')); return; } if (e.target.closest('[data-menu-close]')) { document.getElementById('main-nav')?.classList.remove('open'); document.getElementById('menu-toggle')?.setAttribute('aria-expanded','false'); return; } if (e.target.closest('#menu-toggle')) { const menu = document.getElementById('main-nav'); menu.classList.toggle('open'); const toggle=document.getElementById('menu-toggle');toggle.setAttribute('aria-expanded',menu.classList.contains('open'));toggle.setAttribute('aria-label',menu.classList.contains('open')?'關閉選單':'開啟選單'); return; } const add = e.target.closest('[data-add]'); if (add) { const quantity = add.hasAttribute('data-detail-add') ? Number(document.getElementById('detail-qty')?.value || 1) : 1; addToCart(add.dataset.add, Number.isInteger(quantity) && quantity > 0 ? quantity : 1); return; } const gallery=e.target.closest('[data-gallery]');if(gallery){const image=document.getElementById('product-main-image');image.removeAttribute('srcset');image.src=gallery.dataset.gallery;image.alt=gallery.dataset.galleryLabel;image.classList.toggle('is-reference',gallery.dataset.galleryLabel==='包裝實拍');document.querySelectorAll('[data-gallery]').forEach(button=>{button.classList.toggle('is-current',button===gallery);button.setAttribute('aria-pressed',String(button===gallery));});return;} const filter = e.target.closest('[data-filter]'); if (filter) { state.filter = filter.dataset.filter; render(); return; } const remove = e.target.closest('[data-remove]'); if (remove) { saveCart(cart().filter(i=>i.productId!==remove.dataset.remove)); return; } const qty = e.target.closest('[data-qty]'); if (qty) { const input = document.getElementById('detail-qty'); input.value = Math.max(1, Math.min(Number(input.max), Number(input.value) + (qty.dataset.qty==='plus'?1:-1))); return; } const news = e.target.closest('[data-news]'); if (news) { nav('/journal/' + news.dataset.news); return; } if (e.target.closest('#apply-coupon')) { e.preventDefault(); state.coupon = document.getElementById('coupon').value.trim(); await refreshQuote(); return; } });
document.addEventListener('change', e => { const select = e.target.closest('[data-cart-qty]'); if (select) { const items = cart(); const i = items.find(x=>x.productId===select.dataset.cartQty); if (i) { i.quantity = Number(select.value); saveCart(items); } } });
document.addEventListener('submit', async e => { if (e.target.id !== 'checkout-form') return; e.preventDefault(); if (state.loading) return; state.loading = true; const form = e.target; const b = Object.fromEntries(new FormData(form)); b.items = cart().map(({productId,quantity})=>({productId,quantity})); b.coupon = state.coupon; b.idempotency_key=sessionStorage.getItem('gm-checkout-key')||crypto.randomUUID();sessionStorage.setItem('gm-checkout-key',b.idempotency_key); const button = form.querySelector('[type=submit]'); button.disabled = true; button.textContent = '處理中…'; try { const order = await request('/api/orders', {method:'POST',body:JSON.stringify(b)}); localStorage.setItem('gm-order-'+order.id, order.accessToken);sessionStorage.removeItem('gm-checkout-key'); localStorage.removeItem('gm-cart'); state.coupon = ''; await loadData(); nav('/order/'+order.id); } catch(err) { notify(err.message); button.disabled = false; button.textContent = '確認訂購'; } finally { state.loading = false; } });
document.addEventListener('keydown',event=>{if(event.key==='Escape'){const menu=document.getElementById('main-nav');const toggle=document.getElementById('menu-toggle');if(menu?.classList.contains('open')){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','開啟選單');toggle.focus();}}});
window.addEventListener('popstate', ()=>{render();scrollToRoute();if(GM_PATH()==='/checkout')refreshQuote();});
window.addEventListener('scroll',()=>document.querySelector('.masthead')?.classList.toggle('is-scrolled',window.scrollY>20),{passive:true});
async function loadData() {
  state.dataError=false;
  try { Object.assign(state,await request('/api/bootstrap'));state.dataReady=true; }
  catch(e) { state.dataError=true; }
}
function refreshCatalogView() {
  if(GM_PATH()==='/') { const region=document.getElementById('home-products');if(region){region.innerHTML=GM_REBASE(homeProducts());setupMotion();} }
  else if(['/shop','/cart','/checkout','/journal','/events'].includes(GM_PATH())||GM_PATH().startsWith('/product/')||GM_PATH().startsWith('/journal/'))render();
  document.querySelectorAll?.('.masthead-bag').forEach(bag=>{bag.querySelector('.bag-count').textContent=cartCount();bag.setAttribute('aria-label',`購物袋，${cartCount()} 件商品`);});
  const currentFooter=document.querySelector('.colophon');if(currentFooter&&state.dataReady)currentFooter.outerHTML=GM_REBASE(footer());
}
async function startCatalog() {
  await loadData();refreshCatalogView();
  if(GM_PATH()==='/checkout'&&state.dataReady)refreshQuote();
  if(location.hash)scrollToRoute();
}
document.addEventListener('click',e=>{if(e.target.closest('[data-retry-catalog]'))startCatalog();});
if(window.__GM_PRERENDER__) {
  window.__GM_RENDER__={header,footer,home,shop,contact,story,notFound,render,setupHomeFilm};
} else {
  app.dataset.page=GM_PATH().split('/')[1]||'home';
  if(typeof matchMedia!=='undefined'&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion');
  if(app.querySelector('main')&&!/^\/(admin|cart|checkout|order|order-lookup)(\/|$)/.test(GM_PATH())){setupHomeFilm();setupMotion();}else render();
  startCatalog();
  request('/api/payment-options').then(payment=>{state.payment=payment;if(GM_PATH()==='/checkout')renderCheckoutQuote();}).catch(()=>{});
}



