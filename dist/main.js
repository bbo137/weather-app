(()=>{"use strict";function e(e){for(;e.firstChild;)e.removeChild(e.firstChild)}console.log("hi");!function(){const t=document.getElementById("myForm"),n=document.getElementById("content");t.addEventListener("submit",(t=>{e(n);const i=document.querySelector(".location").value,c=document.createElement("img");c.src="../resources/my-loader.svg",c.classList.add("loading"),n.appendChild(c);const d=async function(t){try{const e=await fetch(`https://api.weatherapi.com/v1/current.json?key=a06bf523144a4ec7b8970917232305&q=${t}`,{mode:"cors"});return function(e){const t=e.current.condition.text,n=e.current.feelslike_c,{humidity:i}=e.current,c=e.current.precip_mm,d=e.current.pressure_mb,r=e.current.temp_c,o=e.current.uv,s=e.current.vis_km,a=e.current.wind_degree,m=e.current.wind_dir,u=e.current.wind_kph,l=e.current.is_day,{country:p}=e.location,{name:h}=e.location;return{condition:t,feelTemp:n,humidity:i,precip:c,pressure:d,temp:r,uvIndex:o,visibility:s,windDegree:a,windDir:m,windVel:u,day:l,country:p,name:h}}(await e.json())}catch(t){console.log(t),e(document.getElementById("content"))}return null}(i);d.then((t=>{t&&function(t){const n=document.getElementById("content");e(n);const i=document.createElement("div");i.classList.add("main-info");const c=document.createElement("div"),d=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div");d.textContent=t.name,r.textContent=t.condition,o.textContent=t.temp,o.textContent+="º",i.append(c,d,r,o);const s=document.createElement("div");s.classList.add("secondary-info"),c.classList.add("img"),t.condition.toLowerCase().split(" ").forEach((e=>{c.classList.add(e)}));const a=t.day?"day":"night";c.classList.add(a);const m=`${t.humidity} %`,u=`${t.feelTemp} ºC`,l=`${t.precip} %`,p=`${t.visibility} km`,h=`${t.pressure} hPa`,{uvIndex:y}=t,v=`${t.windVel} km/h ${t.windDegree}º ${t.windDir}`,f=["Humidity","Percieved temperature","Chance of precipitation","Visibility","Pressure","UV index","Wind"];[m,u,l,p,h,y,v].forEach(((e,t)=>{const n=document.createElement("div"),i=document.createElement("span"),c=document.createElement("span");i.classList.add("title"),c.classList.add("value");const d=document.createElement("hr");d.classList.add("rounded"),n.classList.add("info"),i.textContent=f[t],c.textContent=e,n.append(i,c),s.appendChild(d),s.appendChild(n)})),n.appendChild(i),n.appendChild(s)}(t)})),t.preventDefault()}))}()})();