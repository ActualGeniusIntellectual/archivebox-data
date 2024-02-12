(function(i,e){e.twtrScribe=e.twtrScribe||{};
function b(p,o,n,m){if(!p){p=""
}if(!o){o=""
}if(!n){n=""
}if(!m){m=""
}return{section:p,action:o,element:n,component:m}
}function a(){let html=document.querySelector("html");
if(html&&html.hasAttribute("lang")){return html.getAttribute("lang")
}else{console.warn("twtrScribe could not read lang attribute");
return"no-lang"
}}function g(n,m){if(String.prototype.endsWith){return n.endsWith(m)
}else{let position=n.length-=m.length;
let lastIndex=n.indexOf(m,position);
return lastIndex!==-1&&lastIndex===position
}}function h(m){let hostname=e.location.host;
let site="undefined";
let hostnameComponents=hostname.split(".");
if(hostnameComponents.length==3&&(g(hostname,".twitter.com")||g(hostname,".x.com"))){site=hostnameComponents[0]
}else{if(hostnameComponents.length==2&&(hostname=="twitter.com"||hostname=="x.com")){site="twitter"
}else{site=hostname.split(".").join("-")
}}return"aem-"+site+"-"+m
}function d(){let pageSlug=e.location.pathname.split("/").pop().split(".")[0];
if(pageSlug){return pageSlug
}else{return"/"
}}function f(){return e.location.href
}function c(n,m){while(n&&m&&!n.classList.contains(m)){n=n.parentElement
}return n
}function j(){let seed1=(new Date()).getTime()%1000000000;
let seed2=Math.round(Math.random()*1000000000);
let sessionId=(seed1+seed2).toString(36).toUpperCase();
return sessionId
}function l(){if(typeof localStorage==="undefined"||localStorage==null){return"error-no-localstorage"
}let twtrScribe;
if(localStorage.getItem("twtrScribe")){twtrScribe=JSON.parse(localStorage.getItem("twtrScribe"))
}let currentTime=(new Date()).getTime();
let timeForNewSession=1800000;
if(!twtrScribe||!twtrScribe.sessionId||!twtrScribe.lastInteraction||currentTime>twtrScribe.lastInteraction+timeForNewSession){twtrScribe={};
twtrScribe.sessionId=j()
}twtrScribe.lastInteraction=currentTime;
localStorage.setItem("twtrScribe",JSON.stringify(twtrScribe));
return twtrScribe.sessionId
}function k(m,r,s,p,o,q,n){let time=(new Date()).getTime().toString();
let parsedUrl=new URL(n);
let ref=parsedUrl.searchParams.get("ref")||parsedUrl.searchParams.get("REF");
let qParam=time.slice(-4);
let sessionId=l();
let logParam={context:sessionId,event_namespace:{client:m,page:r,section:s,element:p,action:q,component:o},event_details:{url:n,triggered_on:time},format_version:2,_category_:"client_event"};
if(ref!==null){logParam.event_details["event_info"]=ref
}let absoluteUri="https://twitter.com/i/jot?q="+qParam+"&log="+encodeURIComponent(JSON.stringify(logParam));
let img=new Image();
img.src=absoluteUri
}e.twtrScribe.log=function(q,p,o,n,m){let validatedInput=b(q,p,o,n);
q=validatedInput.section;
p=validatedInput.action;
o=validatedInput.element;
n=validatedInput.component;
let lang=a();
let pageSlug=d();
let url=f();
if(!m||m===undefined){m=h(lang)
}k(m,pageSlug,q,o,n,p,url)
};
e.twtrScribe.logTargetEl=function(o,n,m){let section;
let element;
let component;
o=c(o,n);
if(o){section=o.dataset.twtrScribeSection;
element=o.dataset.twtrScribeElement;
component=o.dataset.twtrScribeComponent
}e.twtrScribe.log(section,m,element,component)
}
})(TwitterAEM,window);