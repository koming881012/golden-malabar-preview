(()=>{const B="/golden-malabar-preview";
window.GM_PATH=()=>{const p=location.pathname;return (B&&p.startsWith(B)?p.slice(B.length):p)||'/';};
window.GM_URL=u=>typeof u==='string'&&u.startsWith('/')&&!(B&&u.startsWith(B+'/'))?B+u:u;
window.GM_API=u=>{const p=u.split('?')[0];return ['/api/bootstrap','/api/payment-options'].includes(p)?B+p+'.json':B+u;};
window.GM_REBASE=h=>!B?h:String(h).replace(/\b(href|src|poster|action)="\/(?!\/)/g,'$1="'+B+'/').replace(/\bsrcset="([^"]*)"/g,(m,v)=>'srcset="'+v.replace(/(^|,\s*)\/(?!\/)/g,'$1'+B+'/')+'"').replace(/url\((['"]?)\/(?!\/)/g,'url($1'+B+'/');
})();
