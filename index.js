import{a as p,S as y,i as c}from"./assets/vendor-CaRFiM55.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="51899291-b5c1abfe1ffa4d2b93e5576f4",g="https://pixabay.com/api/";function L(s){const r={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(g,{params:r}).then(o=>o.data)}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),b=new y(".gallery a",{captionsData:"alt",captionDelay:250});function S(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:d,downloads:m})=>`
      <li>
        <a href="${i}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p>Likes: ${t}</p>
          <p>Views: ${n}</p>
          <p>Comments: ${d}</p>
          <p>Downloads: ${m}</p>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",r),b.refresh()}function q(){u.innerHTML=""}function v(){f.classList.remove("hidden")}function l(){f.classList.add("hidden")}const a=document.querySelector(".form"),E=a.querySelector('input[name="search-text"]');a.addEventListener("submit",s=>{s.preventDefault();const r=E.value.trim();if(!r){c.error({title:"Error",message:"Please enter a search query!"});return}q(),v(),L(r).then(o=>{if(!o.hits.length){c.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}),a.reset();return}S(o.hits),setTimeout(l,100),a.reset()}).catch(o=>{c.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(o),l()})});
//# sourceMappingURL=index.js.map
