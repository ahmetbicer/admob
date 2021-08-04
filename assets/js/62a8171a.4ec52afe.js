"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(f,o(o({ref:e},s),{},{components:n})):a.createElement(f,o({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2050:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={id:"setRequestConfiguration",title:"setRequestConfiguration",sidebar_label:"setRequestConfiguration"},d=void 0,p={unversionedId:"api/setRequestConfiguration",id:"api/setRequestConfiguration",isDocsHomePage:!1,title:"setRequestConfiguration",description:"Use this function to configure Ad requests and initialize Mobile Ads SDK. You need to call this function before you load any Ads. Generally, you call this function when the root component of your app is mounted.",source:"@site/docs/api/setRequestConfiguration.md",sourceDirName:"api",slug:"/api/setRequestConfiguration",permalink:"/docs/api/setRequestConfiguration",editUrl:"https://github.com/react-native-admob/admob/edit/master/docs/docs/api/setRequestConfiguration.md",version:"current",frontMatter:{id:"setRequestConfiguration",title:"setRequestConfiguration",sidebar_label:"setRequestConfiguration"},sidebar:"sideBar",previous:{title:"RewardedAd",permalink:"/docs/api/RewardedAd"},next:{title:"isTestDevice",permalink:"/docs/api/isTestDevice"}},s=[{value:"Usage example",id:"usage-example",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>config</code>",id:"config",children:[]}]},{value:"Returns",id:"returns",children:[]},{value:"Type Definitions",id:"type-definitions",children:[{value:"MaxAdContentRating",id:"maxadcontentrating",children:[]}]}],u={toc:s};function c(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use this function to configure Ad requests and initialize Mobile Ads SDK. You need to call this function before you load any Ads. Generally, you call this function when the root component of your app is mounted."),(0,i.kt)("h2",{id:"usage-example"},"Usage example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { AdManager } from \'@react-native-admob/admob\';\n\nconst config = {\n  testDeviceIds: ["YOUR_TEST_DEVICE_ID"],\n  maxAdContetRating: "MA",\n  tagForChildDirectedTreatment: false,\n  tagForUnderAgeConsent: false,\n};\n\nexport default function App() {\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    const init = async () => {\n      await AdManager.setRequestConfiguration(config);\n\n      setLoading(false);\n    };\n\n    init();\n  }, []);\n\n  return (/* Your App code */)\n')),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("h3",{id:"config"},(0,i.kt)("inlineCode",{parentName:"h3"},"config")),(0,i.kt)("p",null,"Configuration object that collects targeting information to be applied globally."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"object")))),(0,i.kt)("p",null,"Properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Configurations"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Descrition"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"testDeviceIds"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string[]"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"maxAdContentRating"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#maxadcontentrating"},"MaxAdContentRating")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tagForChildDirectedTreatment"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tagForUnderAgeConsent"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("p",null,"The function returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<InitializationStatus[]>")," which is Promise of each mediation adapter's initialization status."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Promise<",(0,i.kt)("a",{parentName:"td",href:"#requestconfiguration"},"InitializationStatus"),"[]>")))),(0,i.kt)("p",null,"Properties of ",(0,i.kt)("inlineCode",{parentName:"p"},"InitializationStatus"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"name"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the adapter.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"description"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Description of the status.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"isReady"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether the adapter is ready.")))),(0,i.kt)("h2",{id:"type-definitions"},"Type Definitions"),(0,i.kt)("h3",{id:"maxadcontentrating"},"MaxAdContentRating"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"string")))),(0,i.kt)("p",null,"Avaliable values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"G"),(0,i.kt)("td",{parentName:"tr",align:null},'"General audiences." Content suitable for all audiences, including families and children.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MA"),(0,i.kt)("td",{parentName:"tr",align:null},'"Mature audiences." Content suitable only for mature audiences; includes topics such as alcohol, gambling, sexual content, and weapons.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PG"),(0,i.kt)("td",{parentName:"tr",align:null},'"Parental guidance." Content suitable for most audiences with parental guidance, including topics like non-realistic, cartoonish violence.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"T"),(0,i.kt)("td",{parentName:"tr",align:null},'"Teen." Content suitable for teen and older audiences, including topics such as general health, social networks, scary imagery, and fight sports.')))))}c.isMDXComponent=!0}}]);