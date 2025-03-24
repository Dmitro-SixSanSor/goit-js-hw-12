import{a as x,S as u,i as c}from"./assets/vendor-Db2TdIkw.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();async function m(t,a,l){const i="https://pixabay.com/api/",e={key:"49423998-53f799fc922e58b577969e777",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:l};return(await x.get(i,{params:e})).data}document.querySelector(".gallery");new u(".gallery a",{captionsData:"alt",captionDelay:250});function L(t){const{webformatURL:a,largeImageURL:l,tags:i,likes:e,views:s,comments:n,downloads:b}=t;return`<li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img
              class="gallery-image"
              src="${a}"
              alt="${i}"
            />
          </a>
          <div class="gallery-wrapper">
            <ul class="gallery-group">
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Likes</h2>
                <p class="gallery-txt">${e}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Views</h2>
                <p class="gallery-txt">${s}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Comments</h2>
                <p class="gallery-txt">${n}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Downloads</h2>
                <p class="gallery-txt">${b}</p>
              </li>
            </ul>
          </div>
        </li>`}function p(t){return t.map(L).join("")}const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),btnNext:document.querySelector(".gallery-btn"),loader:document.querySelector(".loader")};let y;const r={message:"",page:null,total:1,perPage:15};g();o.form.addEventListener("submit",w);o.btnNext.addEventListener("click",F);async function w(t){t.preventDefault(),o.gallery.innerHTML="";const a=t.target.elements.search.value.trim();if(!a){c.warning({message:"Please enter a search term!",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#FFA500",messageSize:"16px",maxWidth:"432px"});return}r.message=a,r.page=1,d();try{const l=await m(r.message,r.page,r.perPage);if(l.hits.length===0)g(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"});else{const i=p(l.hits);o.gallery.innerHTML=i,r.total=l.totalHits,f(),y=new u(".gallery a")}}catch(l){o.gallery.innerHTML="",c.error({message:"Sorry, something went wrong. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),console.log(l)}finally{h()}t.target.reset()}async function F(){g(),d(),r.page+=1;try{const t=await m(r.message,r.page,r.perPage),a=p(t.hits);o.gallery.insertAdjacentHTML("beforeend",a),y.refresh(),f(),S()}catch{c.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"})}finally{h()}}function d(){o.loader.classList.remove("hidden")}function h(){o.loader.classList.add("hidden")}function P(){o.btnNext.style.display=""}function g(){o.btnNext.style.display="none"}function f(){const t=Math.ceil(r.total/r.perPage);r.page>=t||r.total<r.perPage?(g(),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):P()}function S(){const a=o.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({behavior:"smooth",top:a*2})}
//# sourceMappingURL=index.js.map
