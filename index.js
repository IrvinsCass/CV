!function(e){var n={};function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(i,s,function(n){return e[n]}.bind(null,s));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist",t(t.s=1)}([function(e,n,t){"use strict";var i=Object.prototype.hasOwnProperty;function s(e,n){return Array.isArray(e)?function(e,n){for(var t,i="",l="",a=Array.isArray(n),c=0;c<e.length;c++)(t=s(e[c]))&&(a&&n[c]&&(t=r(t)),i=i+l+t,l=" ");return i}(e,n):e&&"object"==typeof e?function(e){var n="",t="";for(var s in e)s&&e[s]&&i.call(e,s)&&(n=n+t+s,t=" ");return n}(e):e||""}function l(e){if(!e)return"";if("object"==typeof e){var n="";for(var t in e)i.call(e,t)&&(n=n+t+":"+e[t]+";");return n}return e+""}function a(e,n,t,i){return!1!==n&&null!=n&&(n||"class"!==e&&"style"!==e)?!0===n?" "+(i?e:e+'="'+e+'"'):("function"==typeof n.toJSON&&(n=n.toJSON()),"string"==typeof n||(n=JSON.stringify(n),t||-1===n.indexOf('"'))?(t&&(n=r(n))," "+e+'="'+n+'"'):" "+e+"='"+n.replace(/'/g,"&#39;")+"'"):""}n.merge=function e(n,t){if(1===arguments.length){for(var i=n[0],s=1;s<n.length;s++)i=e(i,n[s]);return i}for(var a in t)if("class"===a){var c=n[a]||[];n[a]=(Array.isArray(c)?c:[c]).concat(t[a]||[])}else if("style"===a){var c=l(n[a]);c=c&&";"!==c[c.length-1]?c+";":c;var r=l(t[a]);r=r&&";"!==r[r.length-1]?r+";":r,n[a]=c+r}else n[a]=t[a];return n},n.classes=s,n.style=l,n.attr=a,n.attrs=function(e,n){var t="";for(var c in e)if(i.call(e,c)){var r=e[c];if("class"===c){r=s(r),t=a(c,r,!1,n)+t;continue}"style"===c&&(r=l(r)),t+=a(c,r,!1,n)}return t};var c=/["&<>]/;function r(e){var n=""+e,t=c.exec(n);if(!t)return e;var i,s,l,a="";for(i=t.index,s=0;i<n.length;i++){switch(n.charCodeAt(i)){case 34:l="&quot;";break;case 38:l="&amp;";break;case 60:l="&lt;";break;case 62:l="&gt;";break;default:continue}s!==i&&(a+=n.substring(s,i)),s=i+1,a+=l}return s!==i?a+n.substring(s,i):a}n.escape=r,n.rethrow=function e(n,i,s,l){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&i||l))throw n.message+=" on line "+s,n;try{l=l||t(7).readFileSync(i,"utf8")}catch(t){e(n,null,s)}var a=3,c=l.split("\n"),r=Math.max(s-a,0),o=Math.min(c.length,s+a);var a=c.slice(r,o).map(function(e,n){var t=n+r+1;return(t==s?"  > ":"    ")+t+"| "+e}).join("\n");n.path=i;n.message=(i||"Pug")+":"+s+"\n"+a+"\n\n"+n.message;throw n}},function(e,n,t){"use strict";t.r(n);t(2),t(6)},function(e,n,t){var i=t(3);"string"==typeof i&&(i=[[e.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(4)(i,s);i.locals&&(e.exports=i.locals)},function(e,n,t){},function(e,n,t){var i,s,l={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===s&&(s=i.apply(this,arguments)),s}),c=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var i=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}n[e]=i}return n[e]}}(),r=null,o=0,d=[],v=t(5);function u(e,n){for(var t=0;t<e.length;t++){var i=e[t],s=l[i.id];if(s){s.refs++;for(var a=0;a<s.parts.length;a++)s.parts[a](i.parts[a]);for(;a<i.parts.length;a++)s.parts.push(g(i.parts[a],n))}else{var c=[];for(a=0;a<i.parts.length;a++)c.push(g(i.parts[a],n));l[i.id]={id:i.id,refs:1,parts:c}}}}function _(e,n){for(var t=[],i={},s=0;s<e.length;s++){var l=e[s],a=n.base?l[0]+n.base:l[0],c={css:l[1],media:l[2],sourceMap:l[3]};i[a]?i[a].parts.push(c):t.push(i[a]={id:a,parts:[c]})}return t}function p(e,n){var t=c(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===e.insertAt)i?i.nextSibling?t.insertBefore(n,i.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),d.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var s=c(e.insertAt.before,t);t.insertBefore(n,s)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=d.indexOf(e);n>=0&&d.splice(n,1)}function f(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return t.nc}();i&&(e.attrs.nonce=i)}return h(n,e.attrs),p(e,n),n}function h(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function g(e,n){var t,i,s,l;if(n.transform&&e.css){if(!(l="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=l}if(n.singleton){var a=o++;t=r||(r=f(n)),i=x.bind(null,t,a,!1),s=x.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(n,e.attrs),p(e,n),n}(n),i=function(e,n,t){var i=t.css,s=t.sourceMap,l=void 0===n.convertToAbsoluteUrls&&s;(n.convertToAbsoluteUrls||l)&&(i=v(i));s&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var a=new Blob([i],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,t,n),s=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=f(n),i=function(e,n){var t=n.css,i=n.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),s=function(){m(t)});return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else s()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=_(e,n);return u(t,n),function(e){for(var i=[],s=0;s<t.length;s++){var a=t[s];(c=l[a.id]).refs--,i.push(c)}e&&u(_(e,n),n);for(s=0;s<i.length;s++){var c;if(0===(c=i[s]).refs){for(var r=0;r<c.parts.length;r++)c.parts[r]();delete l[c.id]}}}};var k,b=(k=[],function(e,n){return k[e]=n,k.filter(Boolean).join("\n")});function x(e,n,t,i){var s=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(n,s);else{var l=document.createTextNode(s),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(l,a[n]):e.appendChild(l)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,i=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var s,l=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(l)?e:(s=0===l.indexOf("//")?l:0===l.indexOf("/")?t+l:i+l.replace(/^\.\//,""),"url("+JSON.stringify(s)+")")})}},function(e,n,t){t(0);e.exports=function(e){var n,i="";return i=i+'<!DOCTYPE html><!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>CV</title>\n  </head>\n  <body>\n    <div class="content-wrapper">\n      <section class="left-column">'+(null==(n=t(8).call(this,e))?"":n)+(null==(n=t(9).call(this,e))?"":n)+(null==(n=t(10).call(this,e))?"":n)+(null==(n=t(11).call(this,e))?"":n)+'\n      </section>\n      <section class="right-column">'+(null==(n=t(12).call(this,e))?"":n)+(null==(n=t(13).call(this,e))?"":n)+(null==(n=t(14).call(this,e))?"":n)+"\n      </section>\n    </div>\n  </body>\n</html>"}},function(e,n){},function(e,n,t){t(0);e.exports=function(e){var n="";return n+='\n<article class="surname">\n  <div class="surname__svg-elements">\n    <svg width="240px" height="240px">\n      <circle r="119" cx="119.5" cy="119.5" fill="white" stroke="#0270ba" stroke-width="1"></circle>\n      <circle r="104.5" cx="119.5" cy="119.5" fill="#0270ba" stroke="#0270ba"></circle>\n    </svg>\n  </div>\n  <div class="surname__name-elements">\n    <h2 class="surname__text-thin">name here</h2>\n    <h1 class="surname__text-surname">surname</h1>\n    <h2 class="surname__text-bold">graphic designer</h2>\n  </div>\n</article>'}},function(e,n,t){t(0);e.exports=function(e){var n="";return n+='\n<article class="profile">\n  <div class="profile-header">\n    <div class="profile-header__svg-elements"><img src="/src/img/profile_icon.png" alt="Profile" height="76px"></div>\n    <div class="profile-header__text">profile</div>\n    <div class="profile-header__line"></div>\n  </div>\n  <div class="profile-content">\n    <p class="profile-content__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu <span class="profile-content__text_bold"> pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</span></p>\n  </div>\n</article>'}},function(e,n,t){t(0);e.exports=function(e){var n="";return n+='\n<article class="contacts">\n  <div class="contacts-header">\n    <div class="contacts-header__svg-elements"><img src="/src/img/contact_icon.png" alt="Profile" height="76px"></div>\n    <h3 class="contacts-header__text">contact</h3>\n    <div class="contacts-header__line"></div>\n  </div>\n  <div class="contacts-content">\n    <div class="contacts-content__text-block">\n      <div class="contacts-content__left-text">address</div>\n      <div class="contacts-content__right-text">Main Street, City.</div>\n    </div>\n    <div class="contacts-content__text-block">\n      <div class="contacts-content__left-text">e-mail</div>\n      <div class="contacts-content__right-text">contact@domain.com</div>\n    </div>\n    <div class="contacts-content__text-block">\n      <div class="contacts-content__left-text">phone</div>\n      <div class="contacts-content__right-text">555-555-555</div>\n    </div>\n    <div class="contacts-content__text-block">\n      <div class="contacts-content__left-text">website</div>\n      <div class="contacts-content__right-text">www.yourweb.com</div>\n    </div>\n  </div>\n</article>'}},function(e,n,t){t(0);e.exports=function(e){var n="";return n+='\n<article class="skills">\n  <div class="skills-header">\n    <div class="skills-header__svg-elements"><img src="/src/img/skills_icon.png" alt="Profile" height="76px"></div>\n    <div class="skills-header__text">skills</div>\n    <div class="skills-header__line"></div>\n  </div>\n  <div class="skills-content">\n    <div class="skills-content__skill-block">\n      <div class="skills-content__skill-name">creative</div>\n      <div class="skills-content__skill-level">\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_gray"></div>\n        <div class="skills-content__skill-level_gray"></div>\n        <div class="skills-content__skill-level_gray"></div>\n      </div>\n    </div>\n    <div class="skills-content__skill-block">\n      <div class="skills-content__skill-name">teamwork</div>\n      <div class="skills-content__skill-level">\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_gray"></div>\n      </div>\n    </div>\n    <div class="skills-content__skill-block">\n      <div class="skills-content__skill-name">innovate</div>\n      <div class="skills-content__skill-level">\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_gray"></div>\n        <div class="skills-content__skill-level_gray"></div>\n        <div class="skills-content__skill-level_gray"></div>\n        <div class="skills-content__skill-level_gray"></div>\n        <div class="skills-content__skill-level_gray"></div>\n        <div class="skills-content__skill-level_gray"></div>\n      </div>\n    </div>\n    <div class="skills-content__skill-block">\n      <div class="skills-content__skill-name">communication</div>\n      <div class="skills-content__skill-level">\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_blue"></div>\n        <div class="skills-content__skill-level_gray"></div>\n      </div>\n    </div>\n  </div>\n</article>'}},function(e,n,t){t(0);e.exports=function(e){var n="";return n+='\n<article class="education">\n  <div class="education-header">\n    <div class="education-header__svg-elements"><img src="/src/img/education_icon.png" alt="Profile" height="76px"></div>\n    <h2 class="education-header__text">education</h2>\n    <div class="education-header__line"></div>\n  </div>\n  <div class="education-content">\n    <div class="education-content__black-dot-wrapper">\n      <div class="black-dot"></div>\n    </div>\n    <div class="education-content__text-elements">\n      <div class="text-header">\n        <div class="text-header_degree">master degree</div>\n        <div class="text-header_date">// Feb 2011 - Jun 2014</div>\n      </div>\n      <div class="university">university name</div>\n      <p class="text-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque.</p>\n    </div>\n  </div>\n  <div class="education-content">\n    <div class="education-content__black-dot-wrapper">\n      <div class="black-dot"></div>\n    </div>\n    <div class="education-content__text-elements">\n      <div class="text-header">\n        <div class="text-header_degree">master degree</div>\n        <div class="text-header_date">// Feb 2011 - Jun 2014</div>\n      </div>\n      <div class="university">university name</div>\n      <p class="text-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque.</p>\n    </div>\n  </div>\n  <div class="education-content">\n    <div class="education-content__black-dot-wrapper">\n      <div class="black-dot"></div>\n    </div>\n    <div class="education-content__text-elements">\n      <div class="text-header">\n        <div class="text-header_degree">master degree</div>\n        <div class="text-header_date">// Feb 2011 - Jun 2014</div>\n      </div>\n      <div class="university">university name</div>\n      <p class="text-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque.</p>\n    </div>\n  </div>\n  <div class="education-content">\n    <div class="education-content__black-dot-wrapper">\n      <div class="black-dot"></div>\n    </div>\n    <div class="education-content__text-elements">\n      <div class="text-header">\n        <div class="text-header_degree">master degree</div>\n        <div class="text-header_date">// Feb 2011 - Jun 2014</div>\n      </div>\n      <div class="university">university name</div>\n      <p class="text-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque.</p>\n    </div>\n  </div>\n</article>'}},function(e,n,t){t(0);e.exports=function(e){var n="";return n+='\n<article class="experience">\n  <div class="experience-header">\n    <div class="experience-header__svg-elements"><img src="/src/img/experience_icon.png" alt="Profile" height="76px"></div>\n    <h2 class="experience-header__text">experience</h2>\n    <div class="experience-header__line"></div>\n  </div>\n  <div class="experience-content">\n    <div class="experience-content__black-dot-wrapper">\n      <div class="black-dot"></div>\n    </div>\n    <div class="experience-content__text-elements">\n      <div class="text-header">\n        <div class="text-header_company">company name</div>\n        <div class="text-header_date">// Feb 2011 - Jun 2014</div>\n      </div>\n      <div class="vacation">your job here</div>\n      <p class="text-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque.</p>\n    </div>\n  </div>\n  <div class="experience-content">\n    <div class="experience-content__black-dot-wrapper">\n      <div class="black-dot"></div>\n    </div>\n    <div class="experience-content__text-elements">\n      <div class="text-header">\n        <div class="text-header_company">company name</div>\n        <div class="text-header_date">// Feb 2011 - Jun 2014</div>\n      </div>\n      <div class="vacation">your job here</div>\n      <p class="text-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque.</p>\n    </div>\n  </div>\n  <div class="experience-content">\n    <div class="experience-content__black-dot-wrapper">\n      <div class="black-dot"></div>\n    </div>\n    <div class="experience-content__text-elements">\n      <div class="text-header">\n        <div class="text-header_company">company name</div>\n        <div class="text-header_date">// Feb 2011 - Jun 2014</div>\n      </div>\n      <div class="vacation">your job here</div>\n      <p class="text-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque.</p>\n    </div>\n  </div>\n</article>'}},function(e,n,t){t(0);e.exports=function(e){var n="";return n+='\n<article class="software">\n  <div class="software-header">\n    <div class="software-header__svg-elements"><img src="/src/img/software_icon.png" alt="Profile" height="76px"></div>\n    <div class="software-header__text">software</div>\n    <div class="software-header__line"></div>\n  </div>\n  <div class="software-content">\n    <div class="programm">\n      <div class="programm__name">photoshop</div>\n      <div class="programm__skill-level">\n        <svg width="100%" height="23px">\n          <rect cx="0" cy="0" width="100%" fill="#e6e6e6"></rect>\n          <rect cx="0" cy="0" width="91%" fill="#0270ba"></rect>\n        </svg>\n      </div>\n    </div>\n    <div class="programm">\n      <div class="programm__name">dreamweaver</div>\n      <div class="programm__skill-level">\n        <svg width="100%" height="23px">\n          <rect cx="0" cy="0" width="100%" fill="#e6e6e6"></rect>\n          <rect cx="0" cy="0" width="83%" fill="#0270ba"></rect>\n        </svg>\n      </div>\n    </div>\n    <div class="programm">\n      <div class="programm__name">illustrator</div>\n      <div class="programm__skill-level">\n        <svg width="100%" height="23px">\n          <rect cx="0" cy="0" width="100%" fill="#e6e6e6"></rect>\n          <rect cx="0" cy="0" width="70.5%" fill="#0270ba"></rect>\n        </svg>\n      </div>\n    </div>\n    <div class="programm">\n      <div class="programm__name">after effects</div>\n      <div class="programm__skill-level">\n        <svg width="100%" height="23px">\n          <rect cx="0" cy="0" width="100%" fill="#e6e6e6"></rect>\n          <rect cx="0" cy="0" width="61.4%" fill="#0270ba"></rect>\n        </svg>\n      </div>\n    </div>\n    <div class="programm">\n      <div class="programm__name">indesign</div>\n      <div class="programm__skill-level">\n        <svg width="100%" height="23px">\n          <rect cx="0" cy="0" width="100%" fill="#e6e6e6"></rect>\n          <rect cx="0" cy="0" width="56.1%" fill="#0270ba"></rect>\n        </svg>\n      </div>\n    </div>\n    <div class="programm">\n      <div class="programm__name">html&css3</div>\n      <div class="programm__skill-level">\n        <svg width="100%" height="23px">\n          <rect cx="0" cy="0" width="100%" fill="#e6e6e6"></rect>\n          <rect cx="0" cy="0" width="91%" fill="#0270ba"></rect>\n        </svg>\n      </div>\n    </div>\n  </div>\n</article>'}}]);