parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ei9K":[function(require,module,exports) {
"use strict";function a(a,r){return e(a)||i(a,r)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(a,n){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var i=[],e=!0,r=!1,o=void 0;try{for(var t,l=a[Symbol.iterator]();!(e=(t=l.next()).done)&&(i.push(t.value),!n||i.length!==n);e=!0);}catch(s){r=!0,o=s}finally{try{e||null==l.return||l.return()}finally{if(r)throw o}}return i}}function e(a){if(Array.isArray(a))return a}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]],o=r.map(function(n){var i=a(n,3),e=i[0],r=i[1],o=i[2];return{name:e,iso2:r.toUpperCase(),dialCode:o}});exports.default=o;
},{}],"pBGv":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"UeLT":[function(require,module,exports) {
var process = require("process");
var e=require("process");module.exports=!(void 0===e||!e.versions||!e.versions.node);
},{"process":"pBGv"}],"IAgR":[function(require,module,exports) {
var s=1e3,e=60*s,r=60*e,a=24*r,n=365.25*a;function c(c){if(!((c=String(c)).length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(c);if(t){var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*n;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*r;case"minutes":case"minute":case"mins":case"min":case"m":return i*e;case"seconds":case"second":case"secs":case"sec":case"s":return i*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}}}function t(n){return n>=a?Math.round(n/a)+"d":n>=r?Math.round(n/r)+"h":n>=e?Math.round(n/e)+"m":n>=s?Math.round(n/s)+"s":n+"ms"}function i(n){return o(n,a,"day")||o(n,r,"hour")||o(n,e,"minute")||o(n,s,"second")||n+" ms"}function o(s,e,r){if(!(s<e))return s<1.5*e?Math.floor(s/e)+" "+r:Math.ceil(s/e)+" "+r+"s"}module.exports=function(s,e){e=e||{};var r=typeof s;if("string"===r&&s.length>0)return c(s);if("number"===r&&!1===isNaN(s))return e.long?i(s):t(s);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(s))};
},{}],"YJv3":[function(require,module,exports) {
function e(e){var r,s=0;for(r in e)s=(s<<5)-s+e.charCodeAt(r),s|=0;return exports.colors[Math.abs(s)%exports.colors.length]}function r(r){var t;function o(){if(o.enabled){var e=o,r=+new Date,s=r-(t||r);e.diff=s,e.prev=t,e.curr=r,t=r;for(var n=new Array(arguments.length),p=0;p<n.length;p++)n[p]=arguments[p];n[0]=exports.coerce(n[0]),"string"!=typeof n[0]&&n.unshift("%O");var a=0;n[0]=n[0].replace(/%([a-zA-Z%])/g,function(r,s){if("%%"===r)return r;a++;var t=exports.formatters[s];if("function"==typeof t){var o=n[a];r=t.call(e,o),n.splice(a,1),a--}return r}),exports.formatArgs.call(e,n),(o.log||exports.log||console.log.bind(console)).apply(e,n)}}return o.namespace=r,o.enabled=exports.enabled(r),o.useColors=exports.useColors(),o.color=e(r),o.destroy=s,"function"==typeof exports.init&&exports.init(o),exports.instances.push(o),o}function s(){var e=exports.instances.indexOf(this);return-1!==e&&(exports.instances.splice(e,1),!0)}function t(e){var r;exports.save(e),exports.names=[],exports.skips=[];var s=("string"==typeof e?e:"").split(/[\s,]+/),t=s.length;for(r=0;r<t;r++)s[r]&&("-"===(e=s[r].replace(/\*/g,".*?"))[0]?exports.skips.push(new RegExp("^"+e.substr(1)+"$")):exports.names.push(new RegExp("^"+e+"$")));for(r=0;r<exports.instances.length;r++){var o=exports.instances[r];o.enabled=exports.enabled(o.namespace)}}function o(){exports.enable("")}function n(e){if("*"===e[e.length-1])return!0;var r,s;for(r=0,s=exports.skips.length;r<s;r++)if(exports.skips[r].test(e))return!1;for(r=0,s=exports.names.length;r<s;r++)if(exports.names[r].test(e))return!0;return!1}function p(e){return e instanceof Error?e.stack||e.message:e}exports=module.exports=r.debug=r.default=r,exports.coerce=p,exports.disable=o,exports.enable=t,exports.enabled=n,exports.humanize=require("ms"),exports.instances=[],exports.names=[],exports.skips=[],exports.formatters={};
},{"ms":"IAgR"}],"AKCq":[function(require,module,exports) {
var process = require("process");
var e=require("process");function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function C(e){var o=this.useColors;if(e[0]=(o?"%c":"")+this.namespace+(o?" %c":" ")+e[0]+(o?"%c ":" ")+"+"+exports.humanize(this.diff),o){var C="color: "+this.color;e.splice(1,0,C,"color: inherit");var t=0,r=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(t++,"%c"===e&&(r=t))}),e.splice(r,0,C)}}function t(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function r(e){try{null==e?exports.storage.removeItem("debug"):exports.storage.debug=e}catch(o){}}function n(){var o;try{o=exports.storage.debug}catch(C){}return!o&&void 0!==e&&"env"in e&&(o=void 0),o}function F(){try{return window.localStorage}catch(e){}}exports=module.exports=require("./debug"),exports.log=t,exports.formatArgs=C,exports.save=r,exports.load=n,exports.useColors=o,exports.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:F(),exports.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(o){return"[UnexpectedJSONParseError]: "+o.message}},exports.enable(n());
},{"./debug":"YJv3","process":"pBGv"}],"vfhs":[function(require,module,exports) {
var e=require("debug")("jsonp");module.exports=t;var n=0;function o(){}function t(t,r,i){"function"==typeof r&&(i=r,r={}),r||(r={});var u,c,a=r.prefix||"__jp",m=r.param||"callback",p=null!=r.timeout?r.timeout:6e4,d=encodeURIComponent,l=document.getElementsByTagName("script")[0]||document.head,s=a+n++;function f(){u.parentNode.removeChild(u),window[s]=o}p&&(c=setTimeout(function(){f(),i&&i(new Error("Timeout"))},p)),window[s]=function(n){e("jsonp got",n),c&&clearTimeout(c),f(),i&&i(null,n)},t=(t+=(~t.indexOf("?")?"&":"?")+m+"="+d(s)).replace("?&","?"),e('jsonp req "%s"',t),(u=document.createElement("script")).src=t,l.parentNode.insertBefore(u,l)}
},{"debug":"AKCq"}],"y5KW":[function(require,module,exports) {
module.exports=require("jsonp");
},{"jsonp":"vfhs"}],"u7Pv":[function(require,module,exports) {
var e=require("is-node"),r=require;module.exports=e?r("./lib/node"):require("./lib/browser");
},{"is-node":"UeLT","./lib/browser":"y5KW"}],"ZynX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("get-json"));function t(e){return e&&e.__esModule?e:{default:e}}var o=function(){return new Promise(function(t,o){(0,e.default)("https://ipinfo.io/json",function(e,n){e&&o(e),t(n&&n.country)})})},n=o;exports.default=n;
},{"get-json":"u7Pv"}],"Tknj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./allCountries")),t=n(require("./defaultCountry"));function n(e){return e&&e.__esModule?e:{default:e}}function i(e){return s(e)||o(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function s(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={name:"vue-country-code",props:{disabledFetchingCountry:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledFormatting:{type:Boolean,default:!1},defaultCountry:{type:String,default:""},enabledCountryCode:{type:Boolean,default:!1},enabledFlags:{type:Boolean,default:!0},preferredCountries:{type:Array,default:function(){return[]}},onlyCountries:{type:Array,default:function(){return[]}},ignoredCountries:{type:Array,default:function(){return[]}},dropdownOptions:{type:Object,default:function(){return{}}},selectedCountryCode:{type:Boolean,default:!1}},mounted:function(){this.initializeCountry(),this.$emit("onSelect",this.activeCountry)},data:function(){return{activeCountry:{iso2:""},open:!1,selectedIndex:null,typeToFindInput:"",typeToFindTimer:null}},computed:{filteredCountries:function(){var t=this;return this.onlyCountries.length?this.getCountries(this.onlyCountries):this.ignoredCountries.length?e.default.filter(function(e){var n=e.iso2;return!t.ignoredCountries.includes(n.toUpperCase())&&!t.ignoredCountries.includes(n.toLowerCase())}):e.default},sortedCountries:function(){var e=this.getCountries(this.preferredCountries).map(function(e){return l({},e,{preferred:!0})});return[].concat(i(e),i(this.filteredCountries))}},methods:{initializeCountry:function(){var e=this;if(this.defaultCountry){var n=this.findCountry(this.defaultCountry);if(n)return void(this.activeCountry=n)}this.activeCountry=this.findCountry(this.preferredCountries[0])||this.filteredCountries[0],this.disabledFetchingCountry||(0,t.default)().then(function(t){e.activeCountry=e.findCountry(t)||e.activeCountry})},getCountries:function(){var e=this;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(t){return e.findCountry(t)}).filter(Boolean)},findCountry:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.default.find(function(e){return e.iso2===t.toUpperCase()})},getItemClass:function(e,t){return{highlighted:this.selectedIndex===e,"last-preferred":e===this.preferredCountries.length-1,preferred:!!~this.preferredCountries.map(function(e){return e.toUpperCase()}).indexOf(t)}},choose:function(e){this.activeCountry=e,this.$emit("onSelect",this.activeCountry)},toggleDropdown:function(){this.disabled||(this.open=!this.open)},clickedOutside:function(){this.open=!1},keyboardNav:function(e){var t=this;if(40===e.keyCode){this.open=!0,null===this.selectedIndex?this.selectedIndex=0:this.selectedIndex=Math.min(this.sortedCountries.length-1,this.selectedIndex+1);var n=this.$refs.list.children[this.selectedIndex];n.offsetTop+n.clientHeight>this.$refs.list.scrollTop+this.$refs.list.clientHeight&&(this.$refs.list.scrollTop=n.offsetTop-this.$refs.list.clientHeight+n.clientHeight)}else if(38===e.keyCode){this.open=!0,null===this.selectedIndex?this.selectedIndex=this.sortedCountries.length-1:this.selectedIndex=Math.max(0,this.selectedIndex-1);var i=this.$refs.list.children[this.selectedIndex];i.offsetTop<this.$refs.list.scrollTop&&(this.$refs.list.scrollTop=i.offsetTop)}else if(13===e.keyCode)null!==this.selectedIndex&&this.choose(this.sortedCountries[this.selectedIndex]),this.open=!this.open;else{this.typeToFindInput+=e.key,clearTimeout(this.typeToFindTimer),this.typeToFindTimer=setTimeout(function(){t.typeToFindInput=""},700);var r=this.sortedCountries.slice(this.preferredCountries.length).findIndex(function(e){return e.name.toLowerCase().startsWith(t.typeToFindInput)});if(~r){this.selectedIndex=this.preferredCountries.length+r;var o=this.$refs.list.children[this.selectedIndex];(o.offsetTop<this.$refs.list.scrollTop||o.offsetTop+o.clientHeight>this.$refs.list.scrollTop+this.$refs.list.clientHeight)&&(this.$refs.list.scrollTop=o.offsetTop-this.$refs.list.clientHeight/2)}}},reset:function(){this.selectedIndex=this.sortedCountries.map(function(e){return e.iso2}).indexOf(this.activeCountry.iso2),this.open=!1}},directives:{"click-outside":{bind:function(e,t,n){if("function"!=typeof t.value){var i=n.context.name,r="[Vue-click-outside:] provided expression "+t.expression+" is not a function, but has to be";i&&(r+="Found in component "+i),console.warn(r)}var o=t.modifiers.bubble,s=function(n){(o||!e.contains(n.target)&&e!==n.target)&&t.value(n)};e.__vueClickOutside__=s,document.addEventListener("click",s)},unbind:function(e,t){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}}};exports.default=c;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"vue-country-select",class:{disabled:e.disabled}},[t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickedOutside,expression:"clickedOutside"}],staticClass:"dropdown",class:{open:e.open},attrs:{tabindex:"0"},on:{click:e.toggleDropdown,keydown:[e.keyboardNav,function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"esc",27,s.key,["Esc","Escape"])?null:e.reset(s)}]}},[t("span",{staticClass:"current"},[e.enabledFlags?t("div",{staticClass:"iti-flag",class:e.activeCountry.iso2.toLowerCase()}):e._e(),e._v(" "),e.enabledCountryCode?t("span",{staticClass:"country-code"},[e._v("+"+e._s(e.activeCountry.dialCode))]):e._e(),e._v(" "),t("span",{staticClass:"dropdown-arrow"},[e._v(e._s(e.open?"▲":"▼"))])]),e._v(" "),t("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],ref:"list",staticClass:"dropdown-list"},e._l(e.sortedCountries,function(s,o){return t("li",{key:s.iso2+(s.preferred?"-preferred":""),staticClass:"dropdown-item",class:e.getItemClass(o,s.iso2),on:{click:function(t){return e.choose(s)},mousemove:function(s){e.selectedIndex=o}}},[e.enabledFlags?t("div",{staticClass:"iti-flag",class:s.iso2.toLowerCase()}):e._e(),e._v(" "),t("strong",[e._v(e._s(s.name))]),e._v(" "),e.dropdownOptions&&!e.dropdownOptions.disabledDialCode?t("span",[e._v("+"+e._s(s.dialCode))]):e._e()])}),0)])])},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"./allCountries":"Ei9K","./defaultCountry":"ZynX"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./VueCountryCode.vue"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=n({},e.default,{install:function(t){return t.component(e.default.name,e.default),t}});exports.default=u;
},{"./VueCountryCode.vue":"Tknj"}]},{},["Focm"], null)