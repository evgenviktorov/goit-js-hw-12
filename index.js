import{a as h,S as p,i as a}from"./assets/vendor-DFCQGEf1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="50366269-4ee160a1f4b6fa516c5257acb",y="https://pixabay.com/api/";function v(s){const o=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return h.get(`${y}?${o}`).then(r=>r.data.hits).catch(r=>{throw console.error("Error fetching images:",r.message),r})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let L=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s,o){if(f(),s.length===0){a.error({title:"",message:`Sorry, there are no images matching <br> your search query: "${o}". Please try again!`,position:"topRight",backgroundColor:"#f44336",messageColor:"#ffffff",iconColor:"#fff",close:!1,closeOnClick:!0,closeOnEscape:!0,timeout:8e3,progressBarColor:"#ffffff",layout:2});return}const r=s.map(({webformatURL:n,largeImageURL:e,tags:t,comments:i,downloads:u,likes:d,views:m})=>`<li class="gallery-link"><a class="gallery-item" href="${e}">
  <img class="gallery-image" src="${n}" alt="${t}"/></a>
  <div class="info">
        <div class="info-list">
          <h4 class="info-title">Likes</h4>
          <p class="info-text">${d}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Views</h4>
          <p class="info-text">${m}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Comments</h4>
          <p class="info-text">${i}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Downloads</h4>
          <p class="info-text">${u}</p>
        </div>
      </div></li> `).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function f(){l.innerHTML=""}function S(){c.classList.remove("hidden")}function $(){c.classList.add("hidden")}const w=document.querySelector(".form"),q=document.querySelector('input[name="search-text"]');w.addEventListener("submit",s=>{s.preventDefault();const o=q.value.trim();if(o===""){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}f(),S(),v(o).then(r=>{b(r,o)}).catch(r=>{a.error({title:"Error",message:`Something went wrong: ${r.message}`,position:"topRight"})}).finally(()=>{$()})});
//# sourceMappingURL=index.js.map
