import{a as L,S as v,i as c}from"./assets/vendor-DFCQGEf1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const b="50366269-4ee160a1f4b6fa516c5257acb",S="https://pixabay.com/api/",w=15;async function E(o,r=1){const i=new URLSearchParams({key:b,q:o,page:r,per_page:w,image_type:"photo",orientation:"horizontal",safesearch:!0});try{return(await L.get(`${S}?${i}`)).data}catch(s){throw console.error("Error fetching images:",s.message),s}}const f=document.querySelector(".gallery"),d=document.querySelector(".loader"),u=document.querySelector(".load-more-btn");let P=new v(".gallery a",{captionsData:"alt",captionDelay:250});function $(o,r){if(o.length===0){c.error({title:"",message:`Sorry, there are no images matching <br> your search query: "${r}". Please try again!`,position:"topRight",backgroundColor:"#f44336",messageColor:"#ffffff",iconColor:"#fff",close:!1,closeOnClick:!0,closeOnEscape:!0,timeout:8e3,progressBarColor:"#ffffff",layout:2});return}const i=o.map(({webformatURL:s,largeImageURL:e,tags:t,comments:n,downloads:p,likes:g,views:y})=>`<li class="gallery-link"><a class="gallery-item" href="${e}">
  <img class="gallery-image" src="${s}" alt="${t}"/></a>
  <div class="info">
        <div class="info-list">
          <h4 class="info-title">Likes</h4>
          <p class="info-text">${g}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Views</h4>
          <p class="info-text">${y}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Comments</h4>
          <p class="info-text">${n}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Downloads</h4>
          <p class="info-text">${p}</p>
        </div>
      </div></li> `).join("");f.insertAdjacentHTML("beforeend",i),P.refresh()}function q(){f.innerHTML=""}function R(){d.classList.remove("hidden")}function x(){d.classList.add("hidden")}function B(){u.classList.remove("hidden")}function h(){u.classList.add("hidden")}const A=document.querySelector(".form"),C=document.querySelector('input[name="search-text"]'),O=document.querySelector(".load-more-btn");let l="",a=1;const M=15;A.addEventListener("submit",o=>{o.preventDefault(),l=C.value.trim(),a=1,q(),h(),m()});O.addEventListener("click",()=>{a+=1,m(!0)});async function m(o=!1){R();try{const{hits:r,totalHits:i}=await E(l,a);$(r,l),a*M<i?B():(h(),a>1&&c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),o&&_()}catch(r){c.error({title:"Error",message:`Something went wrong: ${r.message}`,position:"topRight"})}finally{x()}}function _(){const{height:o}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
