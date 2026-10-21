/* Editorial content assembled from the estate's supplied archive and its historic websites. */
window.BrandContent = (() => {
  const A = '/assets/';
  // Dimensions reserve space; responsive derivatives keep the original photography intact.
  const dimensions={"1_0.webp":[1454,1550],"2_0.webp":[1360,1550],"852131_0.webp":[1080,892],"852469_0.webp":[919,1550],"852474_0.webp":[848,1550],"852475_0.webp":[1079,1359],"852476_0.webp":[880,1500],"852477_0.webp":[924,1550],"852478_0.webp":[890,1550],"852479_0.webp":[886,1550],"852480_0.webp":[605,1120],"852481.webp":[1079,1015],"852484_0.webp":[1280,834],"852485_0.webp":[1080,897],"852486_0.webp":[1280,720],"852487_0.webp":[1080,883],"852489_0.webp":[1080,883],"852490_0.webp":[1108,1477],"852491_0.webp":[1108,1477],"852492_0.webp":[1108,1477],"852516_0.webp":[1108,1477],"852517_0.webp":[1108,1477],"852518_0.webp":[1108,1477],"852519_0.webp":[1108,1477],"852520_0.webp":[1108,1477],"852521_0.webp":[1108,1477],"852522_0.webp":[1108,1477],"852523_0.webp":[1108,1477],"852524_0.webp":[1108,1477],"certificate-bpom-1.webp":[1654,2339],"certificate-bpom-2.webp":[1654,2339],"certificate-halal-1.webp":[1653,2339],"certificate-halal-2.webp":[1653,2339],"certificate-halal-3.webp":[1653,2339],"certificate-perhutani-1.webp":[2337,1653],"certificate-sppirt-1.webp":[1654,2339],"certificate-sppirt-2.webp":[1654,2339],"coffee-cherries-480.webp":[480,285],"coffee-cherries-706.webp":[706,419],"coffee-drying-480.webp":[480,640],"coffee-drying-800.webp":[800,1066],"coffee-process-480.webp":[480,640],"coffee-process-800.webp":[800,1066],"estate-care-480.webp":[480,640],"estate-care-800.webp":[800,1066],"estate-hero.webp":[1672,941],"estate-path-1552.webp":[1552,1245],"estate-path-640.webp":[640,513],"estate-path-960.webp":[960,770],"estate-real-hero.webp":[1580,1304],"KAA-SAVOY-HOMAN_0.webp":[898,1280],"KAA_0.webp":[812,572],"kerjasama-komunitas-luwak_0-upright.webp":[1550,1092],"kerjasama-komunitas-luwak_0.webp":[1092,1550],"pelatihan-halal_0-upright.webp":[1550,1096],"pelatihan-halal_0.webp":[1096,1550],"PLAKAT-PERHUTANI_0.webp":[1162,1550],"PLAKAT-SCAI_0.webp":[1162,1550],"product-beans-single-480.webp":[480,480],"product-beans-single-800.webp":[800,800],"product-beans-single.webp":[1254,1254],"product-drip-gift-20-480.webp":[480,480],"product-drip-gift-20-800.webp":[800,800],"product-drip-gift-20.webp":[1254,1254],"product-luwak-gift-480.webp":[480,399],"product-luwak-gift-800.webp":[800,665],"product-luwak-gift.webp":[1376,1143],"product-peaberry-gift.webp":[1387,1134],"product-sachets-480.webp":[480,360],"product-sachets-800.webp":[800,600],"product-sachets.webp":[1448,1086],"SCBFWM_0.webp":[1144,1550],"sertifikat-member-SCAI_0.webp":[1067,1535],"sucofindo-1_0.webp":[1076,1521],"sucofindo-2_0.webp":[1076,1521],"SURAT-KAA_0.webp":[1112,1550],"UNPAD_0.webp":[1162,1550],"852131_0-preview-480.webp":[480,396],"852131_0-preview-800.webp":[800,661],"852469_0-preview-480.webp":[480,810],"852469_0-preview-800.webp":[800,1349],"852474_0-preview-480.webp":[480,877],"852474_0-preview-800.webp":[800,1462],"852475_0-preview-480.webp":[480,605],"852475_0-preview-800.webp":[800,1008],"852476_0-preview-480.webp":[480,818],"852476_0-preview-800.webp":[800,1364],"852477_0-preview-480.webp":[480,805],"852477_0-preview-800.webp":[800,1342],"852478_0-preview-480.webp":[480,836],"852478_0-preview-800.webp":[800,1393],"852479_0-preview-480.webp":[480,840],"852479_0-preview-800.webp":[800,1400],"852480_0-preview-480.webp":[480,889],"852480_0-preview-605.webp":[605,1120],"852481-preview-480.webp":[480,452],"852481-preview-800.webp":[800,753],"852484_0-preview-480.webp":[480,313],"852484_0-preview-800.webp":[800,521],"852485_0-preview-480.webp":[480,399],"852485_0-preview-800.webp":[800,664],"852486_0-preview-480.webp":[480,270],"852486_0-preview-800.webp":[800,450],"852487_0-preview-480.webp":[480,392],"852487_0-preview-800.webp":[800,654],"852489_0-preview-480.webp":[480,392],"852489_0-preview-800.webp":[800,654],"852490_0-preview-480.webp":[480,640],"852490_0-preview-800.webp":[800,1066],"852491_0-preview-480.webp":[480,640],"852491_0-preview-800.webp":[800,1066],"852492_0-preview-480.webp":[480,640],"852492_0-preview-800.webp":[800,1066],"852516_0-preview-480.webp":[480,640],"852516_0-preview-800.webp":[800,1066],"852519_0-preview-480.webp":[480,640],"852519_0-preview-800.webp":[800,1066],"852520_0-preview-480.webp":[480,640],"852520_0-preview-800.webp":[800,1066],"852521_0-preview-480.webp":[480,640],"852521_0-preview-800.webp":[800,1066],"852522_0-preview-480.webp":[480,640],"852522_0-preview-800.webp":[800,1066],"852524_0-preview-480.webp":[480,640],"852524_0-preview-800.webp":[800,1066],"certificate-bpom-1-preview-480.webp":[480,679],"certificate-bpom-1-preview-800.webp":[800,1131],"certificate-bpom-2-preview-480.webp":[480,679],"certificate-bpom-2-preview-800.webp":[800,1131],"certificate-halal-1-preview-480.webp":[480,679],"certificate-halal-1-preview-800.webp":[800,1132],"certificate-halal-2-preview-480.webp":[480,679],"certificate-halal-2-preview-800.webp":[800,1132],"certificate-halal-3-preview-480.webp":[480,679],"certificate-halal-3-preview-800.webp":[800,1132],"certificate-perhutani-1-preview-480.webp":[480,340],"certificate-perhutani-1-preview-800.webp":[800,566],"certificate-sppirt-1-preview-480.webp":[480,679],"certificate-sppirt-1-preview-800.webp":[800,1131],"certificate-sppirt-2-preview-480.webp":[480,679],"certificate-sppirt-2-preview-800.webp":[800,1131],"KAA-SAVOY-HOMAN_0-preview-480.webp":[480,684],"KAA-SAVOY-HOMAN_0-preview-800.webp":[800,1140],"KAA_0-preview-480.webp":[480,338],"KAA_0-preview-800.webp":[800,564],"kerjasama-komunitas-luwak_0-upright-preview-480.webp":[480,338],"kerjasama-komunitas-luwak_0-upright-preview-800.webp":[800,564],"kerjasama-komunitas-luwak_0-preview-480.webp":[480,681],"kerjasama-komunitas-luwak_0-preview-800.webp":[800,1136],"pelatihan-halal_0-upright-preview-480.webp":[480,339],"pelatihan-halal_0-upright-preview-800.webp":[800,566],"pelatihan-halal_0-preview-480.webp":[480,679],"pelatihan-halal_0-preview-800.webp":[800,1131],"PLAKAT-PERHUTANI_0-preview-480.webp":[480,640],"PLAKAT-PERHUTANI_0-preview-800.webp":[800,1067],"PLAKAT-SCAI_0-preview-480.webp":[480,640],"PLAKAT-SCAI_0-preview-800.webp":[800,1067],"SCBFWM_0-preview-480.webp":[480,650],"SCBFWM_0-preview-800.webp":[800,1084],"sertifikat-member-SCAI_0-preview-480.webp":[480,691],"sertifikat-member-SCAI_0-preview-800.webp":[800,1151],"sucofindo-1_0-preview-480.webp":[480,679],"sucofindo-1_0-preview-800.webp":[800,1131],"sucofindo-2_0-preview-480.webp":[480,679],"sucofindo-2_0-preview-800.webp":[800,1131],"SURAT-KAA_0-preview-480.webp":[480,669],"SURAT-KAA_0-preview-800.webp":[800,1115],"UNPAD_0-preview-480.webp":[480,640],"UNPAD_0-preview-800.webp":[800,1067]};
  const responsive={"estate-real-hero.webp":["estate-path",[640,960,1552]],"coffee-cherries.webp":["coffee-cherries",[480,706]],"852518_0.webp":["coffee-drying",[480,800]],"852517_0.webp":["coffee-process",[480,800]],"852523_0.webp":["estate-care",[480,800]],"product-sachets.webp":["product-sachets",[480,800]],"product-drip-gift-20.webp":["product-drip-gift-20",[480,800]],"product-beans-single.webp":["product-beans-single",[480,800]],"product-luwak-gift.webp":["product-luwak-gift",[480,800]],"852131_0.webp":["852131_0-preview",[480,800]],"852469_0.webp":["852469_0-preview",[480,800]],"852474_0.webp":["852474_0-preview",[480,800]],"852475_0.webp":["852475_0-preview",[480,800]],"852476_0.webp":["852476_0-preview",[480,800]],"852477_0.webp":["852477_0-preview",[480,800]],"852478_0.webp":["852478_0-preview",[480,800]],"852479_0.webp":["852479_0-preview",[480,800]],"852480_0.webp":["852480_0-preview",[480,605]],"852481.webp":["852481-preview",[480,800]],"852484_0.webp":["852484_0-preview",[480,800]],"852485_0.webp":["852485_0-preview",[480,800]],"852486_0.webp":["852486_0-preview",[480,800]],"852487_0.webp":["852487_0-preview",[480,800]],"852489_0.webp":["852489_0-preview",[480,800]],"852490_0.webp":["852490_0-preview",[480,800]],"852491_0.webp":["852491_0-preview",[480,800]],"852492_0.webp":["852492_0-preview",[480,800]],"852516_0.webp":["852516_0-preview",[480,800]],"852519_0.webp":["852519_0-preview",[480,800]],"852520_0.webp":["852520_0-preview",[480,800]],"852521_0.webp":["852521_0-preview",[480,800]],"852522_0.webp":["852522_0-preview",[480,800]],"852524_0.webp":["852524_0-preview",[480,800]],"certificate-bpom-1.webp":["certificate-bpom-1-preview",[480,800]],"certificate-bpom-2.webp":["certificate-bpom-2-preview",[480,800]],"certificate-halal-1.webp":["certificate-halal-1-preview",[480,800]],"certificate-halal-2.webp":["certificate-halal-2-preview",[480,800]],"certificate-halal-3.webp":["certificate-halal-3-preview",[480,800]],"certificate-perhutani-1.webp":["certificate-perhutani-1-preview",[480,800]],"certificate-sppirt-1.webp":["certificate-sppirt-1-preview",[480,800]],"certificate-sppirt-2.webp":["certificate-sppirt-2-preview",[480,800]],"KAA-SAVOY-HOMAN_0.webp":["KAA-SAVOY-HOMAN_0-preview",[480,800]],"KAA_0.webp":["KAA_0-preview",[480,800]],"kerjasama-komunitas-luwak_0-upright.webp":["kerjasama-komunitas-luwak_0-upright-preview",[480,800]],"kerjasama-komunitas-luwak_0.webp":["kerjasama-komunitas-luwak_0-preview",[480,800]],"pelatihan-halal_0-upright.webp":["pelatihan-halal_0-upright-preview",[480,800]],"pelatihan-halal_0.webp":["pelatihan-halal_0-preview",[480,800]],"PLAKAT-PERHUTANI_0.webp":["PLAKAT-PERHUTANI_0-preview",[480,800]],"PLAKAT-SCAI_0.webp":["PLAKAT-SCAI_0-preview",[480,800]],"SCBFWM_0.webp":["SCBFWM_0-preview",[480,800]],"sertifikat-member-SCAI_0.webp":["sertifikat-member-SCAI_0-preview",[480,800]],"sucofindo-1_0.webp":["sucofindo-1_0-preview",[480,800]],"sucofindo-2_0.webp":["sucofindo-2_0-preview",[480,800]],"SURAT-KAA_0.webp":["SURAT-KAA_0-preview",[480,800]],"UNPAD_0.webp":["UNPAD_0-preview",[480,800]]};
  const escapeAttr=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function picture(src,alt,{priority=false,id='',className='',sizes='(max-width: 700px) calc(100vw - 40px), 50vw'}={}) {
    const name=src.split('/').pop(); const variant=src.startsWith(A)?responsive[name]:null;
    const selected=variant?variant[0]+'-'+variant[1].at(-1)+'.webp':name;
    const dims=dimensions[selected];
    return `<img ${id?`id="${escapeAttr(id)}"`:''} ${className?`class="${escapeAttr(className)}"`:''} src="${escapeAttr(variant?A+selected:src)}" ${variant?`srcset="${variant[1].map(w=>A+variant[0]+'-'+w+'.webp '+w+'w').join(', ')}" sizes="${escapeAttr(sizes)}"`:''} ${dims?`width="${dims[0]}" height="${dims[1]}"`:''} alt="${escapeAttr(alt)}" loading="${priority?'eager':'lazy'}" decoding="async" ${priority?'fetchpriority="high"':''}>`;
  }

  // Real photography supplied via goldenmalabarid.com (gm-*) and atmospheric AI imagery (ai-*), each with a fixed width ladder.
  const ladder={'gm-forest-fields':[[1800,1201],[1200,801],[800,534]],'gm-estate-shade':[[1800,1201],[1200,801],[800,534]],'gm-harvest-red':[[960,1200],[640,800]],'gm-cherries-branch':[[900,1350],[600,900]],'gm-harvest-hands':[[1200,801],[800,534]],'gm-drying-house':[[900,1200],[600,800]],'gm-cherry-sack':[[960,1200],[640,800]],'gm-forest-road':[[960,1200],[640,800]],'gm-farmers':[[1200,802],[800,534]],'gm-luwak-arm':[[706,871]],'gm-luwak-feeding':[[1200,900],[800,600]],'gm-luwak-cherries':[[900,1350],[600,900]],'gm-farmer-luwak':[[892,720]],'gm-luwak-drying':[[1800,1201],[1200,801],[800,534]],'gm-care-fruit':[[1200,675],[800,450]],'gm-community':[[1200,801],[800,534]],'gm-cupping':[[1200,900],[800,600]],'gm-pour-bar':[[960,1200],[640,800]],'gm-bali-store':[[1200,960],[800,640]],'ai-pour':[[1536,1920],[960,1200]],'ai-canopy':[[1536,1920],[960,1200]],'ai-hero-mist':[[1920,1080],[1280,720],[800,450]],'ai-roasted':[[1920,1080],[960,540]],'estate-path':[[1552,1245],[960,770],[640,513]],'ai-estate-panorama':[[2048,1152],[1440,810],[960,540]],'home-estate':[[1094,1367],[720,900]],'home-people-a':[[1800,1200],[1200,800],[800,533]],'home-people-b':[[1094,1367],[720,900]],'home-people-c':[[1200,1600],[800,1067]],'home-cherries':[[1280,1920],[860,1290]]};
  function shot(name,alt,sizes='50vw',attrs='',eager=false) {
    const set=ladder[name];const [w,h]=set[0];
    return `<img src="${A}${name}-${w}.webp" srcset="${set.map(([sw])=>`${A}${name}-${sw}.webp ${sw}w`).join(', ')}" sizes="${escapeAttr(sizes)}" width="${w}" height="${h}" alt="${escapeAttr(alt)}" loading="${eager?'eager':'lazy'}" decoding="async" ${eager?'fetchpriority="high"':''} ${attrs}>`;
  }
  const estateFacts=[['兩座莊園','Ciwidey ・ Pangalengan',''],['莊園面積','320 萬','平方公尺以上'],['海拔','1,511 – 2,313','公尺'],['高地氣候','8°C – 28°C','約略氣溫']];
  function home(products,store={}) { return `
    <section class="hh-hero maison-video-hero" id="brand-film" aria-labelledby="hero-title">
      <div class="hero-film-stage"><div class="home-film-frame hero-film-frame"><img class="hero-film-cover" src="/assets/home-cover-1280.webp" srcset="/assets/home-cover-800.webp 800w, /assets/home-cover-1280.webp 1280w, /assets/home-cover-1920.webp 1920w" sizes="100vw" width="1920" height="1080" alt="金色百林莊園遮蔭林下成片的咖啡樹" fetchpriority="high" decoding="async"><video id="home-brand-film" width="1920" height="1080" muted loop playsinline disablepictureinpicture disableremoteplayback controlslist="nodownload nofullscreen noremoteplayback noplaybackrate" tabindex="-1" preload="none" poster="/assets/home-cover-1280.webp" aria-label="金色百林莊園品牌介紹：一杯的旅程，60 秒"><source src="/media/brand-journey-v1.mp4" type="video/mp4">您的瀏覽器不支援影片播放，請<a href="/media/brand-journey-v1.mp4">開啟品牌介紹影片</a>。</video></div></div>
      <div class="h-wrap hh-hero-caption"><div class="hh-hero-title"><span class="h-kicker">Mount Malabar · West Java · Since 2012</span><h1 id="hero-title"><span class="h-en">Golden Malabar</span></h1><span class="h-zh">珍惜一片山林，才有這一杯的來處。</span></div><div class="hh-hero-actions"><button class="home-film-sound" type="button" data-film-sound aria-controls="home-brand-film" aria-pressed="false">開啟聲音</button><a href="#chapter-origin" class="h-link on-dark">從 2012 年說起</a></div></div>
    </section>
    <section class="house-chapter hh-statement h-light" id="chapter-origin" aria-labelledby="origin-title">
      <div class="h-wrap hh-statement-grid">
        <p class="h-index" data-reveal>I<span>2012 · 起點</span></p>
        <div>
          <h2 id="origin-title" class="h-display" data-reveal>先照顧土地，<br>再談一杯好咖啡。</h2>
          <div class="hh-columns" data-reveal><p>2012 年，家族走進印尼西爪哇的馬拉巴山，發現了這片適合咖啡生長的土地。柯百庠與林嘉琪從這裡開始，親手經營一座咖啡莊園。</p><p>金色百林的咖啡，從自家莊園的種植開始：照顧土地、陪著果實成熟，再一道道完成採集與處理——而不是從產區買進生豆，烘焙後便上架販售。</p></div>
          <a class="h-link" href="/story" data-link data-reveal>閱讀品牌故事</a>
        </div>
      </div>
    </section>
    <section class="hh-origin" aria-labelledby="land-title">
      <figure class="hh-origin-media">${shot('ai-estate-panorama','晨光中的爪哇高地咖啡園與遠方火山','100vw','data-parallax')}</figure>
      <div class="h-wrap hh-origin-copy"><p class="h-index" data-reveal>II<span>土地</span></p><h2 id="land-title" class="h-display" data-reveal><span class="h-en">Mount Malabar, West Java</span>山林的節奏，<br>就是莊園的節奏。</h2><p data-reveal>林蔭、霧氣與高地的日夜溫差，讓咖啡果實慢慢成熟。保護這片山林，是我們經營莊園的第一件事。</p></div>
      <span class="hh-origin-note">意境影像 · 爪哇高地咖啡園</span>
    </section>
    <section class="hh-estate h-light" aria-label="莊園環境">
      <div class="h-wrap hh-estate-grid">
        <figure class="h-figure hh-estate-photo" data-reveal="fade">${shot('home-estate','莊園林間小徑，兩旁為高大林木與咖啡植栽','(max-width: 760px) 100vw, 42vw')}</figure>
        <div class="hh-estate-body">
          <h3 class="h-display" data-reveal>兩座莊園，<br>一片被好好守護的高地。</h3>
          <dl class="hh-facts" data-reveal>${estateFacts.map(([k,v,u])=>`<div><dt>${k}</dt><dd>${v}${u?`<small>${u}</small>`:''}</dd></div>`).join('')}</dl>
          <p data-reveal>我們把保護環境、愛護地球放進莊園的日常：留住森林棲地、照顧與咖啡共處的動物，與在地夥伴一起，讓土地能長久地生長下去。</p>
          <a class="h-link" href="/sustainability" data-link data-reveal>永續理念</a>
        </div>
      </div>
    </section>
    <section class="hh-people h-paper" aria-labelledby="people-title">
      <div class="h-wrap">
        <div class="hh-people-head"><p class="h-index" data-reveal>III<span>人</span></p><h2 id="people-title" class="h-display" data-reveal>守著土地的人，<br>把每一道日常做好。</h2><p data-reveal>種植者等待果實轉紅，採收者一顆顆摘下成熟的果實，處理人員接手清洗、日曬與挑選。莊園的每一季，都由在地夥伴的雙手接續完成。</p></div>
        <div class="hh-people-gallery">
          <figure class="h-figure hh-people-a" data-reveal="fade">${shot('home-people-a','戴斗笠的採收者在咖啡樹叢間工作','(max-width: 760px) 100vw, 56vw')}<figcaption class="h-caption">咖啡樹叢間的採收 · 莊園實拍</figcaption></figure>
          <figure class="h-figure hh-people-b" data-reveal="fade" style="--delay:.15s">${shot('home-people-b','採收者在枝頭間摘取成熟的咖啡果實','(max-width: 760px) 100vw, 28vw')}<figcaption class="h-caption">手摘成熟果實 · 莊園實拍</figcaption></figure>
          <figure class="h-figure hh-people-c" data-reveal="fade" style="--delay:.3s">${shot('home-people-c','日曬棚內攤放的咖啡原料與工作人員','(max-width: 760px) 100vw, 24vw')}<figcaption class="h-caption">日曬棚 · 莊園實拍</figcaption></figure>
        </div>
      </div>
    </section>
    <section class="hh-craft h-dark" aria-labelledby="craft-title">
      <div class="h-wrap hh-craft-grid">
        <div class="hh-craft-media"><figure class="h-figure" data-reveal="fade">${shot('home-cherries','枝頭上轉紅成熟的咖啡果實','(max-width: 760px) 100vw, 40vw')}</figure><p class="h-caption">咖啡果實 · 莊園實拍</p></div>
        <div class="hh-craft-body">
          <p class="h-index" data-reveal>IV<span>咖啡</span></p>
          <h2 id="craft-title" class="h-display" data-reveal>每一顆咖啡，<br>都來之不易。</h2>
          <p data-reveal>金色百林堅持 100% 純麝香貓咖啡，不摻混一般咖啡豆。從枝頭果實到杯中風味，每一道工序都在莊園裡由人接手照看。</p>
          <ol class="hh-steps">${process.map(([n,t,d],i)=>`<li data-reveal style="--delay:${i*0.06}s"><span class="n">${n}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
          <a class="h-link on-dark" href="/luwak" data-link>認識麝香貓咖啡</a>
        </div>
      </div>
    </section>
    <section class="hh-pledge h-light" aria-labelledby="pledge-title"><div class="h-wrap">
      <header class="hh-pledge-head"><span class="h-kicker" data-reveal>Our Promise</span><h2 id="pledge-title" class="h-display" data-reveal>喝一杯金色百林，<br>也是一起守護這片山林。</h2></header>
      <ol class="hh-pledge-list">${[
        ['保護環境','保留遮蔭林木與森林棲地，讓咖啡與山林一起生長。'],
        ['照顧農民','與在地農民契作有機種植，讓種植的價值回到土地與人。'],
        ['愛護地球','照護麝香貓並野放回山林，守護馬拉巴山的生態。']
      ].map(([t,d],i)=>`<li data-reveal style="--delay:${i*0.08}s"><span class="n">${numerals[i]}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
      <p class="hh-pledge-close" data-reveal>這是一杯從自家莊園種起的咖啡，而不是從產區買進生豆、烘焙後就上架的商品。<br>你選擇的，是一種對待土地的方式。</p>
    </div></section>
    <section class="hh-collection h-light" aria-labelledby="collection-title"><div class="h-wrap"><header class="h-head"><p class="h-index" data-reveal>V<span>典藏選品</span></p><h2 id="collection-title" class="h-display" data-reveal>將莊園，帶進日常。</h2><a href="/shop" class="h-link" data-link>瀏覽全部選品</a></header><div class="hh-pieces" id="home-products">${products}</div><aside class="hh-collection-proof" aria-label="購買前查看純度與產品文件"><span>100% 純麝香貓咖啡 · 不摻混一般咖啡豆</span><nav><a href="/credentials#laboratory" data-link>實驗室檢驗</a><a href="/credentials#halal" data-link>清真認證</a><a href="/credentials#bpom" data-link>BPOM 文件</a><a href="/credentials#purity" data-link>DNA／純度資料</a></nav></aside></div></section>
    <section class="hh-proof h-paper" aria-labelledby="proof-title"><div class="h-wrap hh-proof-grid"><div class="hh-proof-intro"><p class="h-index" data-reveal>VI<span>文件</span></p><h2 id="proof-title" class="h-display" data-reveal>每一份純粹，<br>都值得細讀。</h2><p data-reveal>選購之前，先把原料與文件看清楚。每份原件依其用途閱讀，不以單一文件代替其他證明。</p><a class="h-link" href="/credentials" data-link>閱讀全部文件</a></div><ol class="hh-proof-list">${[
      ['laboratory','實驗室檢驗','Sucofindo 原始報告，公開成分與營養檢驗項目；非 DNA 純度鑑定。','原件可閱'],
      ['halal','清真認證','證書與產品名單，依原件日期與品項閱讀。','原件可閱'],
      ['bpom','印尼 BPOM 文件','食品相關登記原頁，依登記內容與範圍閱讀。','原件可閱'],
      ['purity','DNA／純度專項資料','專項檢驗報告與對應產品資料，待莊園提供後公開。','待補充']
    ].map(([id,t,d,s],i)=>`<li data-reveal style="--delay:${i*0.06}s"><a href="/credentials#${id}" data-link><span class="n">${String(i+1).padStart(2,'0')}</span><span class="t">${t}</span><span class="s${s==='待補充'?' pending':''}">${s}</span><span class="d">${d}</span></a></li>`).join('')}</ol></div></section>
    <section class="hh-visit h-dark" aria-labelledby="visit-title">
      <div class="hh-visit-media">${shot('ai-pour','手沖咖啡注水的靜物意境','(max-width: 760px) 100vw, 50vw','data-parallax')}</div>
      <div class="hh-visit-copy"><p class="h-index" data-reveal>VII<span>品飲體驗</span></p><h2 id="visit-title" class="h-display" data-reveal>預約一場品飲，<br>讓莊園在杯中展開。</h2><p data-reveal>在台灣的體驗店，細品來自馬拉巴山的莊園風味。採預約制，我們會為你保留一段安靜的時光。</p>
        <dl data-reveal><div><dt>地址</dt><dd>${store.address||''}<br>${store.landmark||''}</dd></div><div><dt>時間</dt><dd>${store.hours||''}・${store.closed||''}</dd></div><div><dt>預約</dt><dd><a href="${store.tel||'#'}">${store.phone||''}</a></dd></div></dl>
        <div class="hh-visit-actions" data-reveal><a class="h-button" href="${store.tel||'#'}">來電預約</a><a class="h-link on-dark" href="/contact" data-link>交通與體驗店資訊</a></div></div>
    </section>`; }
  const photo = (name, alt, caption = '') => `<figure class="h-figure archive-photo">${picture(A+name+'.webp',alt)}${caption ? `<figcaption class="h-caption">${caption}</figcaption>` : ''}</figure>`;
  const fullPhoto = (name, alt, caption = '') => {
    const dims = dimensions[name+'.webp'];
    return photo(name,alt,caption).replace('<img ',`<img ${dims?`style="aspect-ratio:auto ${dims[0]}/${dims[1]}"`:''} `);
  };
  const ytPoster = id => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const video = (id, title, note, poster, featured=false) => `<article class="film${featured?' is-featured':''}" data-reveal><div class="film-frame"><button class="film-poster" type="button" data-video="${id}" aria-label="在頁面播放：${title}">${poster?shot(poster,'',featured?'(max-width: 760px) 100vw, 64vw':'(max-width: 760px) 100vw, 46vw'):`<img src="${ytPoster(id)}" alt="" loading="lazy" decoding="async">`}<span class="film-play" aria-hidden="true"></span></button></div><div class="film-text"><h3>${title}</h3><p>${note}</p><a class="h-link" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer">於 YouTube 觀看</a></div></article>`;
  const process = [
    ['01', '成熟果實', '莊園咖啡樹結出紅熟果實。果實成熟度，是後續處理的起點。'],
    ['02', '麝香貓取食', '麝香貓選食咖啡果實；果肉經自然消化，豆粒隨後排出。取食後的豆粒，成為後續採集與加工的原料。'],
    ['03', '採集與清洗', '工作人員採集原料，經分選、清洗，去除附著物。每批原料的清潔與來源紀錄都很重要。'],
    ['04', '日曬與脫殼', '將處理後的咖啡豆乾燥，再去除外殼。日曬場的實景呈現了莊園對製程細節的重視。'],
    ['05', '烘焙與品飲', '依產品形式完成烘焙、研磨或包裝。杯中表現仍會隨批次、焙度與沖煮方式而不同。']
  ];
  const docs = [
    ['SURAT-KAA_0', '2015 亞非會議相關函件', '品牌參與亞非會議的活動紀錄。'],
    ['KAA_0', '亞非會議紀念／表揚', '亞非會議相關證書。'],
    ['PLAKAT-PERHUTANI_0', 'Perhutani 合作紀錄', '與印尼林業相關單位的合作紀錄。'],
    ['certificate-perhutani-1', 'Perhutani 合作文件', '品牌與印尼林業相關單位的合作文件原頁。'],
    ['sertifikat-member-SCAI_0', 'SCAI 會員證書', '印尼精品咖啡協會會員證書。'],
    ['sucofindo-1_0', 'Sucofindo 檢驗資料 I', '產品檢驗報告。'],
    ['sucofindo-2_0', 'Sucofindo 檢驗資料 II', '產品檢驗報告。'],
    ['pelatihan-halal_0-upright', '清真制度訓練證書', '清真相關訓練紀錄。'],
    ['kerjasama-komunitas-luwak_0-upright', '麝香貓社群合作文件', '與在地社群的合作紀錄。'],
    ['SCBFWM_0', '咖啡產業活動紀錄', '咖啡產業參與紀錄。'],
    ['PLAKAT-SCAI_0', 'SCAI 活動獎牌', '咖啡產業交流紀錄。'],
    ['UNPAD_0', '大學交流紀錄', '大學交流紀錄。'],
    ['KAA-SAVOY-HOMAN_0', '歷史接待函件', '2015 年亞非會議接待相關紀錄。']
  ];
  const proofItems=[
    ['laboratory','實驗室檢驗','Sucofindo 原始報告，公開成分與營養檢驗項目；非 DNA 純度鑑定。','原件可閱'],
    ['halal','清真認證','證書與產品名單，依原件日期與品項閱讀。','原件可閱'],
    ['bpom','印尼 BPOM 文件','食品相關登記原頁，依登記內容與範圍閱讀。','原件可閱'],
    ['purity','DNA／純度專項資料','專項檢驗報告與對應產品資料，待莊園提供後公開。','待補充']
  ];
  const proofList=()=>`<ol class="hh-proof-list">${proofItems.map(([id,t,d,s],i)=>`<li data-reveal style="--delay:${i*0.06}s"><a href="/credentials#${id}" data-link><span class="n">${String(i+1).padStart(2,'0')}</span><span class="t">${t}</span><span class="s${s==='待補充'?' pending':''}">${s}</span><span class="d">${d}</span></a></li>`).join('')}</ol>`;
  // Purchase-side proof: kept beside every product and on the collection so buyers see it before adding to the bag.
  function evidence({compact=false}={}) {
    if(compact) return `<aside class="purchase-proof" aria-label="購買前查看原料與文件"><p class="purchase-proof-title">100% 純麝香貓咖啡 · 不摻混一般咖啡豆</p><ul>${proofItems.map(([id,t,,s])=>`<li><a href="/credentials#${id}" data-link><span>${t}</span><small class="${s==='待補充'?'pending':''}">${s}</small></a></li>`).join('')}</ul><p class="purchase-proof-note">DNA／純度專項報告待補；現有檢驗與登記文件各依原件範圍閱讀。</p></aside>`;
    return `<section class="hh-proof h-paper" aria-labelledby="evidence-title"><div class="h-wrap hh-proof-grid"><div class="hh-proof-intro"><p class="h-index" data-reveal>III<span>購買之前</span></p><h2 id="evidence-title" class="h-display" data-reveal>100% 純麝香貓咖啡，<br>先把文件看清楚。</h2><p data-reveal>金色百林堅持不摻混一般咖啡豆。清真認證、食品登記與成分檢驗各有用途；純度專項證明將另列原件與適用產品。</p><a class="h-link" href="/credentials" data-link>閱讀全部文件</a></div>${proofList()}</div></section>`;
  }
  const groups={story:[['/story','品牌故事'],['/estate','馬拉巴山莊園'],['/sustainability','永續理念']],luwak:[['/luwak','麝香貓咖啡'],['/credentials','純度與文件']]};
  const numerals=['I','II','III','IV','V','VI','VII'];
  const chapterNav=(group,current)=>`<nav class="chapter-nav" aria-label="本章節"><div class="h-wrap">${groups[group].map(([url,label],i)=>`<a href="${url}" data-link ${url===current?'aria-current="page"':''}><span>${numerals[i]}</span>${label}</a>`).join('')}</div></nav>`;
  const hero=({kicker,title,lead='',image,alt,note=''})=>`<header class="ph ph-image"><figure class="ph-media">${shot(image,alt,'100vw','data-parallax',true)}</figure><div class="h-wrap ph-copy"><span class="h-kicker">${kicker}</span><h1 class="ph-title">${title}</h1>${lead?`<p class="ph-lead">${lead}</p>`:''}</div>${note?`<span class="ph-note">${note}</span>`:''}</header>`;
  const intro=({kicker,title,lead='',tone='light'})=>`<header class="ph ph-text h-${tone}"><div class="h-wrap"><span class="h-kicker">${kicker}</span><h1 class="ph-title">${title}</h1>${lead?`<p class="ph-lead">${lead}</p>`:''}</div></header>`;
  const fig=(name,alt,caption='',{sizes='(max-width: 760px) 100vw, 46vw',cls='',delay=0}={})=>`<figure class="h-figure ${cls}" data-reveal="fade" ${delay?`style="--delay:${delay}s"`:''}>${shot(name,alt,sizes)}${caption?`<figcaption class="h-caption">${caption}</figcaption>`:''}</figure>`;
  const chapter=({index,label,kicker='',title,body,media='',tone='light',reverse=false,id='',extra=''})=>`<section class="ch h-${tone}${reverse?' is-reverse':''}" ${id?`id="${id}"`:''}><div class="h-wrap ch-grid${media?'':' is-text'}"><div class="ch-body"><p class="h-index" data-reveal>${index}<span>${label}</span></p>${kicker?`<span class="h-kicker ch-kicker" data-reveal>${kicker}</span>`:''}<h2 class="h-display" data-reveal>${title}</h2><div class="ch-text" data-reveal>${body}</div></div>${media?`<div class="ch-media">${media}</div>`:''}</div>${extra}</section>`;
  const next=(href,label,title)=>`<a class="next-chapter" href="${href}" data-link><span class="h-wrap"><span class="h-kicker">下一章 · ${label}</span><span class="next-title">${title}</span><span class="next-arrow" aria-hidden="true"></span></span></a>`;
  function story() { return `<main class="house page-story brand-story-page">
    ${hero({kicker:'The Golden Malabar Story · Since 2012',title:'品牌故事',lead:'兩個人的名字，一座莊園的起點。',image:'gm-estate-shade',alt:'馬拉巴山莊園林蔭下的咖啡植栽',note:'莊園實拍 · 林蔭下的咖啡樹'})}
    ${chapterNav('story','/story')}
    ${chapter({index:'I',label:'創辦人',kicker:'The Founders',title:'因為一片土地，<br>開始了一家人的咖啡故事。',body:`<p>2012 年，家族走進印尼西爪哇萬隆南部的馬拉巴山，發現這片適合咖啡生長的土地。柯百庠與林嘉琪在這裡投入莊園經營，從咖啡樹開始學起，也與在地種植者、照護人員一起工作。</p><p>從土地、動物到處理工序，每一件日常的小事，都與最後那一杯咖啡有關。保護環境、愛護地球，是這份事業想長久走下去的方向；照顧好咖啡生長的地方，才有值得分享的風味。</p>`,media:`<figure class="h-figure ch-portrait" data-reveal="fade"><img src="${A}founders-1079.webp" width="1079" height="808" alt="柯百庠（右）、林嘉琪（左）與貿協董事長黃志芳（中）於莊園吧台合影" loading="lazy" decoding="async"><figcaption class="h-caption">柯百庠（右）、林嘉琪（左）與貿協董事長黃志芳（中）· 照片：黃淑惠攝</figcaption></figure>`})}
    <section class="quote-band h-dark"><div class="h-wrap"><span class="h-kicker" data-reveal>百林 · The Name</span><blockquote class="quote" data-reveal>「百林」取自柯百庠與林嘉琪姓名中的「百」與「林」，<br>記下兩人共同走進山林的起點。</blockquote></div></section>
    <section class="ch h-paper" aria-labelledby="milestones-title"><div class="h-wrap">
      <header class="ch-head"><p class="h-index" data-reveal>II<span>品牌歷程</span></p><h2 id="milestones-title" class="h-display" data-reveal>從一座莊園，<br>走向更廣闊的交流。</h2></header>
      <ol class="timeline">${[
        ['2012','走進馬拉巴山','家族在西爪哇萬隆南部的馬拉巴山找到適合咖啡生長的土地，開始經營金色百林莊園。'],
        ['2013 – 2014','最佳咖啡種植園','據印尼總部資料，金色百林連續兩年獲印尼總統頒發「最佳咖啡種植園」榮譽。'],
        ['2014','麝香貓回到山林','至 2014 年 10 月，莊園復育中心已將 51 隻麝香貓野放回山林。'],
        ['2015','亞非會議指定咖啡','第 60 屆亞非會議於印尼舉行期間，金色百林獲政府指定，為與會元首及貴賓提供麝香貓咖啡與阿拉比卡咖啡。'],
        ['今日','持續累積的足跡','品牌在峇里島庫塔設有 Golden Malabar Bali 旗艦店；據印尼總部資料，至今已獲超過 30 項國內外獎項與榮譽，包含聯合國開發計畫署（UNDP）的環境保護表揚。']
      ].map(([y,t,d],i)=>`<li data-reveal style="--delay:${i*0.05}s"><span class="timeline-year">${y}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ol>
      <p class="h-note" data-reveal>歷程與獎項依金色百林印尼總部公開資料整理；部分原始文件可於「純度與文件」頁查閱。</p>
    </div></section>
    <section class="ch h-light" id="press-archive" aria-labelledby="press-title"><div class="h-wrap">
      <header class="ch-head"><p class="h-index" data-reveal>III<span>媒體紀錄</span></p><h2 id="press-title" class="h-display" data-reveal>媒體記錄中的金色百林</h2><p data-reveal>歷年報導原頁，點選即可放大閱讀。</p></header>
      <div class="press-row press-archive">${[
        ['852474_0','印尼星洲日報｜咖啡品質與創辦人專訪'],['852475_0','中國時報｜麝香貓咖啡多了友善味'],['852478_0','印尼星洲日報｜麝香貓照護報導'],['852479_0','印尼星洲日報｜莊園經營報導'],['852480_0','印尼星洲日報｜產地與品牌專題']
      ].map(([name,title],i)=>`<a href="${A}${name}.webp" target="_blank" rel="noopener noreferrer" aria-label="${title}，放大閱讀" data-reveal="fade" style="--delay:${i*0.06}s">${fullPhoto(name,title,title)}</a>`).join('')}</div>
    </div></section>
    ${next('/estate','馬拉巴山莊園','土地的條件，是一杯咖啡最初的底蘊。')}
  </main>`; }
  function estate() { return `<main class="house page-estate estate-page">
    ${hero({kicker:'The Estate · Since 2012',title:'一片土地，<br>一家人的咖啡起點。',lead:'從馬拉巴山的相遇，到每一顆來之不易的咖啡。',image:'ai-hero-mist',alt:'晨霧中的西爪哇高地與咖啡植栽',note:'意境影像 · 西爪哇高地晨霧'})}
    ${chapterNav('story','/estate')}
    ${chapter({index:'I',label:'起點',kicker:'01 · The Beginning',title:'2012 年，<br>我們在山裡找到了一個開始。',body:`<p>家族初次走進馬拉巴山時，發現這片高地有著適合咖啡生長的環境。山間的氣候、林蔭與土地，讓一個想法逐漸成形：從這裡開始，親手經營一座咖啡莊園。</p><p>於是，柯百庠與林嘉琪投入金色百林的經營。咖啡的故事從種植端展開，也從此與這片山林、生活在這裡的人和動物連在一起。</p>`,media:fig('gm-forest-road','莊園林間的泥土小徑與兩旁的咖啡植栽','莊園實拍 · 林間小徑',{cls:'ch-portrait'})})}
    <section class="estate-facts h-dark" aria-label="莊園環境資料"><div class="h-wrap"><dl class="facts-grid">${[
      ['兩座莊園','Ciwidey','Pangalengan'],['莊園總面積','320 萬','平方公尺以上'],['高地海拔','1,511–2,313','公尺，平均約 1,800 公尺'],
      ['高地氣候','8°C – 28°C','全年約略氣溫範圍'],['周邊茶園','7,000','公頃以上，一望無際'],['栽培方式','遮蔭栽培','白楊木與肉桂樹為天然遮蔽林']
    ].map(([k,v,u],i)=>`<div data-reveal style="--delay:${i*0.05}s"><dt>${k}</dt><dd>${v}<span>${u}</span></dd></div>`).join('')}</dl></div></section>
    ${chapter({index:'II',label:'土地',kicker:'02 · The Land',title:'土地的條件，<br>是一杯咖啡最初的底蘊。',body:`<p>金色百林的 Ciwidey 與 Pangalengan 兩座莊園，總面積超過 320 萬平方公尺，海拔約 1,511 至 2,313 公尺，氣溫約落在 8°C 至 28°C。</p><dl class="land-notes"><div><dt>火山土壤</dt><dd>莊園鄰近地熱資源豐富的年輕火山群，土壤天然富含礦物質、重金屬含量較低。</dd></div><div><dt>高海拔與晝夜溫差</dt><dd>明顯的日夜溫差讓果實熟得慢，風味物質有更長的時間累積。</dd></div><div><dt>傳統遮蔭栽培</dt><dd>以白楊木與肉桂樹為遮蔽林，給咖啡樹適度的陽光，也守住生物多樣性與水土。</dd></div></dl>`,media:fig('gm-estate-shade','林蔭下成排的咖啡樹','莊園實拍 · 遮蔭栽培',{cls:'ch-landscape'}),reverse:true})}
    ${chapter({index:'III',label:'人',kicker:'03 · The People',title:'守著土地的人，<br>把每一道日常做好。',tone:'paper',body:`<p>種植者等待果實成熟，照護人員準備麝香貓的日常飲食，處理人員接手採集、清洗與乾燥。不同的工作，在同一片土地上接續。</p><p>從園區開發、咖啡苗培育到日常管理，莊園與在地農民以契作方式推動有機種植，讓咖啡的發展同時回饋土地、農民與社區。</p>`,media:`<div class="duo">${fig('gm-farmers','莊園工作夥伴在咖啡園中合影','莊園實拍 · 在地夥伴',{sizes:'(max-width: 760px) 100vw, 30vw'})}${fig('gm-harvest-hands','採收者在咖啡樹間摘取成熟果實','莊園實拍 · 採收',{sizes:'(max-width: 760px) 100vw, 30vw',delay:.12})}</div>`})}
    ${chapter({index:'IV',label:'咖啡',kicker:'04 · The Coffee',title:'從生長的地方開始，<br>珍惜每一顆咖啡。',body:`<p>金色百林的投入，始於咖啡樹與莊園日常，延續到麝香貓照護、原料採集、清洗、乾燥與烘焙。這條從土地展開的路，構成我們所說的莊園咖啡——而不是從產區買進生豆，烘焙後便上架販售。</p><p>一杯咖啡的價值，也在它抵達杯中之前的漫長過程。以 100% 純麝香貓咖啡為堅持，讓原料、處理與土地的故事，一起被認識。</p><a href="/luwak" class="h-link" data-link>認識咖啡製程與產品文件</a>`,media:fig('gm-cherry-sack','剛採收、裝在麻袋中的紅熟咖啡果實','莊園實拍 · 採收後的果實',{cls:'ch-portrait'}),reverse:true})}
    ${next('/sustainability','永續理念','珍惜山林，也珍惜與牠們共處的土地。')}
  </main>`; }
  function sustainability() { return `<main class="house page-sustainability sustainability-page">
    ${hero({kicker:'Care for the Earth',title:'珍惜山林，<br>也珍惜與牠們共處的土地。',lead:'保護環境、愛護地球，是莊園想長久走下去的方向。',image:'gm-forest-fields',alt:'高大林木與山谷間的田野',note:'莊園實拍 · 林木與山谷'})}
    ${chapterNav('story','/sustainability')}
    ${chapter({index:'I',label:'土地優先',kicker:'The Land Comes First',title:'好好照顧環境，<br>才有咖啡的下一季。',body:`<p>咖啡生長在土地上，動物生活在棲地裡，莊園的每一天都與環境相連。對金色百林而言，一杯咖啡的故事，要連同它生長的山林一起被理解。</p><p>傳統遮蔭栽培留住了林木，也留住生物多樣性與水土。我們以棲地保護、動物照護及在地合作為長期方向，珍惜土地，也珍惜每一顆得來不易的咖啡。</p><p>所以喝一杯金色百林，也是一起保護環境、照顧農民、愛護地球。</p>`,media:fig('ai-canopy','晨霧中的高大林木','意境影像 · 山林',{cls:'ch-portrait'})})}
    ${chapter({index:'II',label:'社區',kicker:'Working with the Community',title:'與在地夥伴，<br>共同延續土地的價值。',tone:'paper',body:`<p>從咖啡苗培育到日常管理，莊園與在地農民以契作方式推動有機種植，將種植與處理經驗連結到在地工作。這份長期投入，曾獲聯合國開發計畫署（UNDP）環境保護與永續發展的表揚。</p><p>品牌保存的 Perhutani 與麝香貓社群合作文件，也記錄了不同夥伴之間的往來。</p><a href="/credentials" class="h-link" data-link>查看合作文件</a>`,media:fig('gm-community','莊園周邊社區的孩子們在校舍前合影','品牌提供影像 · 莊園周邊社區',{cls:'ch-landscape'}),reverse:true})}
    <section class="ch h-dark care-stats" aria-labelledby="care-title"><div class="h-wrap ch-grid">
      <div class="ch-body"><p class="h-index" data-reveal>III<span>復育照護</span></p><span class="h-kicker ch-kicker" data-reveal>Habitat & Rehabilitation</span><h2 id="care-title" class="h-display" data-reveal>從復育照護，<br>把目光放回森林。</h2><div class="ch-text" data-reveal><p>在印尼政府的支持下，莊園設立麝香貓復育中心。照護用的香蕉、木瓜、蘋果等水果皆經檢驗，並定期健康檢查、補充維生素 C 與蜂蜜。照護區承接動物的日常需要，森林則讓我們持續思考棲地與復育的長遠關係。</p><a class="h-link on-dark" href="/films" data-link>觀看復育與野放紀錄</a></div></div>
      <dl class="stats" data-reveal><div><dt>照護中的麝香貓</dt><dd>87</dd></div><div><dt>周邊山林的野生麝香貓</dt><dd>100<small>+</small></dd></div><div><dt>至 2014 年 10 月野放</dt><dd>51</dd></div></dl>
    </div><div class="h-wrap"><p class="h-note on-dark">數字依金色百林印尼總部公開資料。</p></div></section>
    <section class="ch h-light" id="care-records" aria-labelledby="records-title"><div class="h-wrap">
      <header class="ch-head"><p class="h-index" data-reveal>IV<span>照護紀錄</span></p><span class="h-kicker ch-kicker" data-reveal>Daily Care Records</span><h2 id="records-title" class="h-display" data-reveal>照護的細節，<br>留在每天的工作裡。</h2><p data-reveal>木瓜、香蕉等多樣飲食、棲架與遮蔭空間，都是復育中心日常照料的一部分。下列照片拍攝於照護區，呈現設施與日常；野放活動另見影像紀錄。</p></header>
      <div class="care-gallery">${fig('gm-care-fruit','復育中心備食區的木瓜、香蕉與水果','復育中心日常備食 · 莊園實拍',{sizes:'(max-width: 760px) 100vw, 50vw'})}${fig('gm-luwak-arm','麝香貓在照護人員手臂上，背景為咖啡樹','照護人員與麝香貓 · 莊園實拍',{sizes:'(max-width: 760px) 100vw, 24vw',delay:.1})}<div data-reveal="fade" style="--delay:.2s">${fullPhoto('852523_0','復育中心照護區的麝香貓、棲架與網舍設施','復育中心照護區紀錄 · 非野外棲地照片')}</div></div>
    </div></section>
    ${next('/luwak','麝香貓咖啡','從果實、原料到工序，理解 Kopi Luwak。')}
  </main>`; }
  function luwak() { return `<main class="house page-luwak luwak-page">
    ${hero({kicker:'Kopi Luwak · From Fruit to Cup',title:'麝香貓咖啡',lead:'從果實、原料到處理工序，理解 Kopi Luwak 的特別之處。',image:'gm-luwak-drying',alt:'麝香貓走在咖啡日曬網床上，背景為山間田野',note:'莊園實拍 · 日曬床上的麝香貓'})}
    ${chapterNav('luwak','/luwak')}
    ${chapter({index:'I',label:'認識',kicker:'What Is Kopi Luwak?',title:'一種來自印尼的<br>特殊咖啡處理歷程。',body:`<p>Kopi Luwak 指麝香貓取食咖啡果實後，咖啡豆通過消化道，再經採集與加工的咖啡。並非所有麝香貓都能產出麝香貓咖啡；傳統上最具代表性的是帶有香蘭葉般氣息的香蘭麝香貓（Pandan Civet），也就是俗稱的 Luwak。</p><p>果肉經自然消化後，留下的豆粒仍需經過後續處理，才能成為可沖煮的咖啡。理解這段歷程，也能理解原料來源與每道工序的重要。</p><a href="/sustainability" class="h-link" data-link>了解麝香貓照護</a>`,media:fig('gm-luwak-cherries','麝香貓在一盤紅熟咖啡果實上','莊園實拍 · 麝香貓與咖啡果實',{cls:'ch-portrait'})})}
    <section class="ch h-dark" aria-labelledby="origins-title"><div class="h-wrap">
      <header class="ch-head"><p class="h-index" data-reveal>II<span>兩種原料</span></p><h2 id="origins-title" class="h-display" data-reveal>山林裡的野生豆，<br>照護區裡的飼養豆。</h2></header>
      <div class="compare">
        <article data-reveal><span class="h-kicker">Wild Civet Coffee</span><h3>野生豆</h3><p>莊園周邊山林棲息著上百隻野生麝香貓。牠們在夜裡穿過園區，挑選最甜熟的咖啡果實當點心，之後在園區棲息；清晨上工的農民，再把自然留下的咖啡豆撿回精製。</p></article>
        <article data-reveal style="--delay:.12s"><span class="h-kicker">Farm-raised Civet Coffee</span><h3>飼養豆</h3><p>莊園在印尼申請了麝香貓繁育相關專利。麝香貓生活在 5 × 4 公尺、種有咖啡樹的寬敞空間；傍晚起身後先吃經檢驗的香蕉、木瓜與蘋果，再挑選飽滿的咖啡果實當點心。</p></article>
      </div>
      <p class="h-note on-dark" data-reveal>以上說明依金色百林印尼總部公開資料整理。</p>
    </div></section>
    ${evidence()}
    <section class="ch h-light" id="process" aria-labelledby="process-title"><div class="h-wrap ch-grid">
      <div class="ch-media steps-media">${fig('gm-cupping','杯測人員逐杯品評咖啡','品牌提供影像 · 杯測',{cls:'ch-landscape'})}</div>
      <div class="ch-body"><p class="h-index" data-reveal>IV<span>五道工序</span></p><span class="h-kicker ch-kicker" data-reveal>The Process</span><h2 id="process-title" class="h-display" data-reveal>從咖啡果實<br>到杯中風味</h2>
        <ol class="hh-steps steps-light">${process.map(([n,t,d],i)=>`<li data-reveal style="--delay:${i*0.05}s"><span class="n">${n}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
        <a href="/shop" class="h-link" data-link>前往典藏選品</a></div>
    </div></section>
    <section class="ch h-paper" aria-labelledby="drying-title"><div class="h-wrap">
      <header class="ch-head"><p class="h-index" data-reveal>V<span>現場</span></p><span class="h-kicker ch-kicker" data-reveal>Processing Archive</span><h2 id="drying-title" class="h-display" data-reveal>乾燥工序的現場</h2><p data-reveal>棚內網床、原料攤放與乾燥空間，透過不同角度的實拍影像呈現。</p></header>
      <div class="drying-row processing-archive">${['852516_0','852518_0','852521_0','852519_0'].map((n,i)=>`<div data-reveal="fade" style="--delay:${i*0.08}s">${fullPhoto(n,`莊園咖啡乾燥區實拍，視角 ${i+1}`,`乾燥區實拍 ${String(i+1).padStart(2,'0')}`)}</div>`).join('')}</div>
    </div></section>
    ${next('/credentials','純度與文件','每一份純粹，都值得細讀。')}
  </main>`; }
  function credentials() {
    const primaryDocs = [
      ['laboratory', 'Sucofindo 實驗室檢驗', '原件記載成分與營養檢驗項目；此文件非 DNA 或麝香貓咖啡純度鑑定。檢驗結果依原件樣品與日期閱讀。', ['sucofindo-2_0', 'sucofindo-1_0']],
      ['halal', '清真認證與產品名單', '證書與產品名單依原件日期、品項及適用範圍閱讀，非咖啡純度證明。', ['certificate-halal-1', 'certificate-halal-2', 'certificate-halal-3']],
      ['bpom', '印尼 BPOM 相關文件', '食品相關登記文件，依原件所載產品與登記內容閱讀，非 DNA 檢驗報告。', ['certificate-bpom-1', 'certificate-bpom-2']],
      ['sppirt', '印尼 SPP-IRT 文件', '食品生產相關文件，與其他認證及檢驗各有適用範圍。', ['certificate-sppirt-1', 'certificate-sppirt-2']]
    ];
    return `<main class="house page-credentials credentials-page">
    ${intro({kicker:'Purity, Documents & Origin',title:'純度與產品文件',lead:'把原料堅持與文件攤開來看，理解每一份資料的內容。'})}
    ${chapterNav('luwak','/credentials')}
    <section class="ch h-light purity-record" id="purity" aria-labelledby="purity-title"><div class="h-wrap ch-grid is-text">
      <div class="ch-body"><p class="h-index" data-reveal>I<span>原則</span></p><span class="h-kicker ch-kicker" data-reveal>The 100% Principle</span><h2 id="purity-title" class="h-display" data-reveal>100% 純麝香貓咖啡的堅持</h2><div class="ch-text" data-reveal><p>金色百林主張不摻混一般咖啡豆。此處公開既有檢驗與登記原件，讓選購前的資訊更清楚。</p></div></div>
      <div class="pending-document" data-reveal><span class="h-kicker">Pending</span><strong>DNA／純度專項報告 · 待補充</strong><p>待莊園提供報告原件、檢驗機構、日期及對應產品／批次後公開。目前的清真、BPOM 與成分檢驗文件各依原有用途閱讀。</p><nav class="doc-index" aria-label="文件分類">${primaryDocs.map(([id,title],i)=>`<a href="#${id}"><span>${String(i+1).padStart(2,'0')}</span>${title}</a>`).join('')}</nav></div>
    </div></section>
    ${primaryDocs.map(([id,title,note,pages],i) => `<section class="doc-section ${i%2?'h-paper':'h-light'} credential-group" id="${id}" aria-labelledby="${id}-title"><div class="h-wrap doc-grid"><div class="doc-text"><span class="doc-n" data-reveal>${String(i+1).padStart(2,'0')}</span><h2 id="${id}-title" data-reveal>${title}</h2><p class="credential-scope" data-reveal>${note}</p><span class="h-caption">點選文件可放大閱讀原件</span></div><div class="doc-plates credential-pages">${pages.map((name, index) => `<a class="plate" href="${A}${name}.webp" target="_blank" rel="noopener noreferrer" aria-label="${title}原件 ${index + 1}，放大閱讀" data-reveal="fade" style="--delay:${index*0.08}s">${picture(A+name+'.webp',title+'原件 '+(index+1),{sizes:'(max-width: 760px) 44vw, 22vw'})}</a>`).join('')}</div></div></section>`).join('')}
    <section class="ch h-dark" aria-labelledby="archive-title"><div class="h-wrap">
      <header class="ch-head"><p class="h-index" data-reveal>II<span>合作與歷史</span></p><h2 id="archive-title" class="h-display" data-reveal>合作與歷史紀錄</h2><p data-reveal>品牌保存的合作文件、交流紀錄與獎牌原件。</p></header>
      <div class="archive-plates">${docs.filter(([name])=>!name.startsWith('sucofindo')).map(([name, title],i) => `<a class="plate" href="${A}${name}.webp" target="_blank" rel="noopener noreferrer" aria-label="${title}，放大閱讀" data-reveal="fade" style="--delay:${(i%4)*0.06}s">${picture(A+name+'.webp',title,{sizes:'(max-width: 760px) 44vw, 22vw'})}<span class="h-caption">${title}</span></a>`).join('')}</div>
    </div></section>
  </main>`;
  }
  function films() {
    const youtube = [
      ['tG4YL9RXfOA','金色百林莊園介紹｜公視宏觀頻道專訪','透過專訪認識品牌、創辦人的經營理念與莊園故事。','gm-estate-shade'],
      ['QQDhlm8duvA','麝香貓復育中心｜公視宏觀頻道深度專訪','走進復育中心，了解莊園對麝香貓照護的規劃。','gm-luwak-feeding'],
      ['eNW7V0iJr6o','印尼金色百林莊園｜莊園簡介','從景觀與設施認識馬拉巴山的莊園環境。','gm-forest-fields'],
      ['0ZipH-UF7oQ','印尼金色百林莊園｜未來展望','分享品牌對莊園經營與後續發展的想法。','gm-farmers'],
      ['eOcOfwVjPF4','印尼金色百林莊園｜麝香貓復育中心','呈現復育中心及麝香貓的生活空間。','gm-luwak-arm'],
      ['vY4OjQR6EzQ','印尼金色百林莊園｜麝香貓咖啡','介紹麝香貓咖啡與莊園的咖啡故事。','gm-cherries-branch'],
      ['Sd-PmSV1Fw0','金色百林莊園照片介紹','以照片帶領觀眾瀏覽莊園景觀與品牌影像。','gm-harvest-red'],
      ['A9gU9O3Ixqo','野放麝香貓紀錄','記錄品牌麝香貓野放活動的影像。','gm-luwak-drying'],
      ['7y_Sz7-wMgY','金色百林莊園｜Golden Malabar','以品牌形象影像呈現莊園與咖啡。','gm-drying-house']
    ];
    const estate = [
      ['44a2c14e-5db7-4163-97c7-f4717aca1f7c','麝香貓日常｜活動觀察','記錄麝香貓在照護空間內行走、探索的畫面。'],
      ['90e9c9f4-9aa2-45ac-abce-17017b9de05f','麝香貓日常｜近距離影像','近距離觀察麝香貓的外形與活動姿態。'],
      ['a9480290-0e4e-49fd-8049-a045ac44d4b0','麝香貓日常｜棲架活動','記錄麝香貓在設有棲架的空間內移動。'],
      ['add81709-882e-40f7-9bc6-ab3a1d02ca06','麝香貓日常｜地面探索','呈現麝香貓在植被旁活動的片段。']
    ];
    const localVideo = ([file, title, note], index) => `<article class="film" data-reveal><div class="film-frame"><video controls preload="none" playsinline poster="/assets/film-estate-${index+1}.jpg" src="/media/${file}.mp4" aria-label="${title}"></video></div><div class="film-text"><h3>${title}</h3><p>${note}</p></div></article>`;
    return `<main class="house page-films">
    ${intro({kicker:'Golden Malabar Films',title:'莊園影像',lead:'從訪談、莊園景觀到麝香貓的影像紀錄，走近金色百林的故事。'})}
    <section class="films-feature h-light"><div class="h-wrap">${video(...youtube[0],true)}</div></section>
    <section class="ch h-light" aria-labelledby="interviews-title"><div class="h-wrap"><header class="ch-head"><p class="h-index" data-reveal>I<span>專訪與紀錄</span></p><h2 id="interviews-title" class="h-display" data-reveal>專訪與莊園紀錄</h2></header><div class="film-grid">${youtube.slice(1).map(v=>video(...v)).join('')}</div></div></section>
    <section class="ch h-paper" aria-labelledby="daily-title"><div class="h-wrap"><header class="ch-head"><p class="h-index" data-reveal>II<span>日常影像</span></p><h2 id="daily-title" class="h-display" data-reveal>麝香貓的日常</h2><p data-reveal>於照護空間拍攝的原始影像。</p></header><div class="film-grid">${estate.map(localVideo).join('')}</div></div></section>
  </main>`;
  }
  const productNarratives = {
  "麝香貓咖啡濾掛包普通盒裝": {
    "image": "product-sachets.webp",
    "original": "852487_0.webp",
    "lines": [
      "黑金盒裝搭配十包獨立包裝濾掛咖啡，適合日常品飲與分享。打開單包、將掛耳固定於杯緣，即可依喜好分次注入熱水。",
      "採用 100% 麝香貓咖啡，不摻混一般咖啡豆，呈現印尼西爪哇馬拉巴山莊園的風味。"
    ],
    "specs": [
      [
        "系列",
        "Kopi Luwak 麝香貓咖啡"
      ],
      [
        "包裝",
        "普通盒裝"
      ],
      [
        "內容",
        "10 g × 10 包"
      ],
      [
        "總淨重",
        "100 g"
      ],
      [
        "形式",
        "獨立濾掛包"
      ],
      [
        "產地",
        "印尼西爪哇馬拉巴山"
      ]
    ]
  },
  "麝香貓咖啡濾掛包禮盒裝": {
    "image": "product-drip-gift-20.webp",
    "original": "852131_0.webp",
    "lines": [
      "奶油色莊園圖紋禮盒搭配提袋，盒內為四小盒黑金包裝；每小盒五包，共二十包濾掛咖啡。從包裝到品飲，讓一份莊園風土成為值得分享的禮物。",
      "採用 100% 麝香貓咖啡，不摻混一般咖啡豆，呈現印尼西爪哇馬拉巴山莊園的風味。"
    ],
    "specs": [
      [
        "系列",
        "Kopi Luwak 麝香貓咖啡"
      ],
      [
        "包裝",
        "禮盒裝，附同系列提袋"
      ],
      [
        "內容",
        "10 g × 20 包"
      ],
      [
        "組合",
        "4 小盒 × 每盒 5 包"
      ],
      [
        "總淨重",
        "200 g"
      ],
      [
        "形式",
        "獨立濾掛包"
      ],
      [
        "產地",
        "印尼西爪哇馬拉巴山"
      ]
    ]
  },
  "麝香貓咖啡豆普通盒裝": {
    "image": "product-beans-single.webp",
    "original": "852490_0.webp",
    "lines": [
      "單盒 100 g 的咖啡豆，以奶油色與深色側邊的長形圖紋盒裝呈現。適合想細細認識麝香貓咖啡的日常品飲者，也方便依個人節奏沖煮。",
      "採用 100% 麝香貓咖啡，不摻混一般咖啡豆，呈現印尼西爪哇馬拉巴山莊園的風味。"
    ],
    "specs": [
      [
        "系列",
        "Kopi Luwak 麝香貓咖啡"
      ],
      [
        "包裝",
        "普通盒裝"
      ],
      [
        "內容",
        "100 g × 1 盒"
      ],
      [
        "總淨重",
        "100 g"
      ],
      [
        "形式",
        "咖啡豆"
      ],
      [
        "產地",
        "印尼西爪哇馬拉巴山"
      ]
    ]
  },
  "麝香貓咖啡豆禮盒包裝": {
    "image": "product-luwak-gift.webp",
    "original": "852485_0.webp",
    "lines": [
      "四盒 100 g 咖啡豆整齊收納於莊園圖紋禮盒，搭配同系列提袋。可依沖煮器具與喜好研磨，在不同時刻分享一份來自馬拉巴山的風味。",
      "採用 100% 麝香貓咖啡，不摻混一般咖啡豆，呈現印尼西爪哇馬拉巴山莊園的風味。"
    ],
    "specs": [
      [
        "系列",
        "Kopi Luwak 麝香貓咖啡"
      ],
      [
        "包裝",
        "禮盒包裝，附同系列提袋"
      ],
      [
        "內容",
        "100 g × 4 盒"
      ],
      [
        "總淨重",
        "400 g"
      ],
      [
        "形式",
        "咖啡豆"
      ],
      [
        "產地",
        "印尼西爪哇馬拉巴山"
      ]
    ]
  }
};
  function product(p, esc) { const n=productNarratives[p.name];if(!n)return '';return `<section class="ch h-dark product-source"><div class="h-wrap ch-grid"><div class="ch-media">${fig('gm-cherries-branch','枝頭上轉紅成熟的咖啡果實','莊園實拍 · 咖啡果實',{cls:'ch-portrait'})}</div><div class="ch-body"><p class="h-index" data-reveal>I<span>來處</span></p><span class="h-kicker ch-kicker" data-reveal>100% Kopi Luwak · From Malabar</span><h2 class="h-display" data-reveal>每一份原料，<br>都有值得認識的來處。</h2><div class="ch-text" data-reveal>${n.lines.map(t=>`<p>${esc(t)}</p>`).join('')}<p>每一份選購，都在支持一座保護森林、與在地農民契作、照護麝香貓的莊園。</p><div class="link-row"><a class="h-link on-dark" href="/luwak" data-link>麝香貓咖啡製程</a><a class="h-link on-dark" href="/estate" data-link>馬拉巴山莊園</a></div></div></div></div></section>`; }
  document.addEventListener('click', event => { const button = event.target.closest('[data-video]'); if (!button) return; const id = button.dataset.video; const iframe = document.createElement('iframe'); iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`; iframe.title = button.getAttribute('aria-label'); iframe.allow = 'autoplay; encrypted-media; picture-in-picture; web-share'; iframe.allowFullscreen = true; button.replaceWith(iframe); });
  return { home, story, estate, sustainability, luwak, credentials, films, product, productNarratives, picture, evidence, intro, shot, fig };
})();
