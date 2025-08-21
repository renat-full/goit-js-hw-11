import{a as m,S as p,i as c}from"./assets/vendor-CaRFiM55.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="51899291-b5c1abfe1ffa4d2b93e5576f4",h="https://pixabay.com/api/";function g(n){const r={key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(h,{params:r}).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){const r=n.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:s,comments:f,downloads:d})=>`
      <li>
        <a href="${i}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p>Likes: ${t}</p>
          <p>Views: ${s}</p>
          <p>Comments: ${f}</p>
          <p>Downloads: ${d}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){l.innerHTML=""}function q(){u.classList.remove("hidden")}function v(){u.classList.add("hidden")}const a=document.querySelector(".form"),E=a.querySelector('input[name="search-text"]');a.addEventListener("submit",n=>{n.preventDefault();const r=E.value.trim();if(!r){c.error({title:"Error",message:"Please enter a search query!"});return}S(),q(),g(r).then(o=>{if(!o.hits.length){c.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}),a.reset();return}b(o.hits),a.reset()}).catch(o=>{c.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(o)}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
