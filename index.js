import{a as L,S as v,i as l}from"./assets/vendor-DFCQGEf1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const b="50366269-4ee160a1f4b6fa516c5257acb",w="https://pixabay.com/api/",S=15;async function E(r,t=1){const n=new URLSearchParams({key:b,q:r,page:t,per_page:S,image_type:"photo",orientation:"horizontal",safesearch:!0});try{return(await L.get(`${w}?${n}`)).data}catch(s){throw console.error("Error fetching images:",s.message),s}}const d=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=document.querySelector(".load-more-btn");let P=new v(".gallery a",{captionsData:"alt",captionDelay:250});function q(r,t){if(r.length===0){l.error({title:"",message:`Sorry, there are no images matching <br> your search query: "${t}". Please try again!`,position:"topRight",backgroundColor:"#f44336",messageColor:"#ffffff",iconColor:"#fff",close:!1,closeOnClick:!0,closeOnEscape:!0,timeout:8e3,progressBarColor:"#ffffff",layout:2});return}const n=r.map(({webformatURL:s,largeImageURL:e,tags:o,comments:i,downloads:g,likes:p,views:y})=>`<li class="gallery-link"><a class="gallery-item" href="${e}">
  <img class="gallery-image" src="${s}" alt="${o}"/></a>
  <div class="info">
        <div class="info-list">
          <h4 class="info-title">Likes</h4>
          <p class="info-text">${p}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Views</h4>
          <p class="info-text">${y}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Comments</h4>
          <p class="info-text">${i}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Downloads</h4>
          <p class="info-text">${g}</p>
        </div>
      </div></li> `).join("");d.insertAdjacentHTML("beforeend",n),P.refresh()}function R(){d.innerHTML=""}function $(){u.classList.remove("hidden")}function C(){u.classList.add("hidden")}function x(){h.classList.remove("hidden")}function c(){h.classList.add("hidden")}const B=document.querySelector(".form"),A=document.querySelector('input[name="search-text"]'),O=document.querySelector(".load-more-btn");let f="",a=1;const I=15;B.addEventListener("submit",r=>{if(r.preventDefault(),f=A.value.trim(),!f.trim()){l.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}a=1,R(),c(),m()});O.addEventListener("click",()=>{c(),a+=1,m(!0)});async function m(r=!1){$();try{const{hits:t,totalHits:n}=await E(f,a);if(!t.length){c();return}q(t,f),a*I<n?x():(c(),a>1&&l.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),r&&M()}catch(t){l.error({title:"Error",message:`Something went wrong: ${t.message}`,position:"topRight"})}finally{C()}}function M(){const r=document.querySelector(".gallery-item");if(!r)return;const{height:t}=r.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
