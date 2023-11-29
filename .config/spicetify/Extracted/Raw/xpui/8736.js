"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[8736],{96422:(e,t,n)=>{n.d(t,{T:()=>u});var a=n(90784),i=n(72843),r=n(88354),l=n(12640),o=n(7018);const s="profile-editImage-imageContainer",c="profile-editImage-editImageButtonContainer";var d=n(4637);const u=function({onClick:e,name:t,images:n,canEdit:u,placeholderType:m,shape:h=o.Kc.SQUARE,dragUri:g=""}){const[p,C]=(0,i.R)(n),b=(0,r.VO)(p,C)===r.KO.loaded,k=(0,a.O)([g],t);return(0,d.jsxs)("div",{className:s,"data-testid":`${m}-image`,draggable:!!g,onDragStart:k,children:[(0,d.jsx)(o.Oe,{loading:"eager",name:t,images:n,placeholderType:m,shape:h}),u&&(0,d.jsx)("div",{className:c,children:(0,d.jsx)(l.F,{overlay:b,onClick:e,rounded:h===o.Kc.CIRCLE})})]})}},39815:(e,t,n)=>{n.d(t,{k:()=>c});var a=n(84875),i=n.n(a),r=n(9990),l=n(17237),o=n(47948),s=n(4637);const c=({children:e})=>{const t=(0,r.W6)(o.vyX,{loadingValue:!1});return(0,s.jsx)("div",{className:i()(l.Z.imageContainer,{[l.Z.imageContainerNew]:t}),children:e})}},54985:(e,t,n)=>{n.d(t,{g:()=>l});var a=n(51697),i=n(17237),r=n(4637);const l=({children:e})=>(0,r.jsx)(a.D,{variant:"mesto",className:i.Z.pretitle,children:e})},4845:(e,t,n)=>{n.d(t,{w:()=>k});var a=n(59496),i=n(84875),r=n.n(i),l=n(4417),o=n.n(l),s=n(51697),c=n(67759);const d=/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g;var u=n(67490);const m="playlist-playlist-heading",h="playlist-playlist-playlistDescription",g="playlist-playlist-list",p="playlist-playlist-listItem",C="playlist-playlist-paragraph";var b=n(4637);const k=a.memo((function({html:e,onTimeStampClick:t,enableTimestamps:n=!1,semanticColor:i="textSubdued",className:l}){const s=(0,a.useMemo)((()=>{const a=n?e.split(d).map((e=>e.match(d)?`(<time>${e.replace("(","").replace(")","")}</time>)`:e)).join(""):e;let r;try{r=o()(a,{transform:x(t,i),dangerouslySetChildren:[]})}catch{r=e}return r}),[n,e,t,i]);return(0,b.jsx)("div",{className:r()(h,l),children:s})}));function x(e,t){let n=0;return{p:e=>(0,b.jsx)(s.D,{as:"p",variant:"ballad",semanticColor:t,className:C,children:e.children}),a:t=>t.href?.startsWith("#t=")?(0,b.jsx)(c.E,{onClick:e,children:t.children}):t.href?(0,b.jsx)(u.Link,{to:t.href,children:t.children}):(0,b.jsx)(b.Fragment,{children:t.children}),ul:e=>(0,b.jsx)("ul",{className:g,children:e.children}),ol:e=>(0,b.jsx)("ol",{className:g,children:e.children}),li:e=>(0,b.jsx)(s.D,{as:"li",variant:"ballad",semanticColor:t,className:p,children:e.children}),br:()=>(0,b.jsx)("br",{}),h1:e=>(0,b.jsx)(s.D,{as:"h1",variant:"balladBold",semanticColor:t,className:m,children:e.children}),h2:e=>(0,b.jsx)(s.D,{as:"h2",variant:"balladBold",semanticColor:t,className:m,children:e.children}),h3:e=>(0,b.jsx)(s.D,{as:"h3",variant:"balladBold",semanticColor:t,className:m,children:e.children}),h4:e=>(0,b.jsx)(s.D,{as:"h4",variant:"balladBold",semanticColor:t,className:m,children:e.children}),h5:e=>(0,b.jsx)(s.D,{as:"h5",variant:"balladBold",semanticColor:t,className:m,children:e.children}),h6:e=>(0,b.jsx)(s.D,{as:"h6",variant:"balladBold",semanticColor:t,className:m,children:e.children}),time:t=>(0,b.jsx)(c.E,{onClick:e,children:t.children}),_:(e,t,i)=>{const r=void 0===t?e:i;return(0,b.jsx)(a.Fragment,{children:r},"fragment"+n++)}}}},44711:(e,t,n)=>{n.d(t,{l:()=>C});var a=n(59496),i=n(30099),r=n(43686),l=n(48989),o=n(87283);const s={"custom-order":l.HI,title:{column:o.Q.TITLE,order:o.k.ASC},artist:{column:o.Q.TITLE,order:o.k.SECONDARY_ASC},"added-by":{column:o.Q.ADDED_BY,order:o.k.ASC},"added-at":{column:o.Q.ADDED_AT,order:o.k.ASC},duration:{column:o.Q.DURATION,order:o.k.ASC},album:{column:o.Q.ALBUM,order:o.k.ASC},"album-or-podcast":{column:o.Q.ALBUM_OR_PODCAST,order:o.k.ASC},"album-or-show":{column:o.Q.ALBUM_OR_SHOW,order:o.k.ASC}},c={title:o.Q.TITLE,artist:o.Q.TITLE,"added-by":o.Q.ADDED_BY,"added-at":o.Q.ADDED_AT,duration:o.Q.DURATION,album:o.Q.ALBUM,"album-or-podcast":o.Q.ALBUM_OR_PODCAST,"album-or-show":o.Q.ALBUM_OR_SHOW},d={[o.k.NONE]:o.k.NONE,[o.k.ASC]:o.k.DESC,[o.k.DESC]:o.k.ASC,[o.k.SECONDARY_ASC]:o.k.SECONDARY_DESC,[o.k.SECONDARY_DESC]:o.k.SECONDARY_ASC},u={[o.Q.INDEX]:{key:"custom-order",get value(){return i.ag.get("sort.custom-order")}},[o.Q.TITLE]:{key:"title",get value(){return i.ag.get("sort.title")}},[o.Q.ARTIST]:{key:"artist",get value(){return i.ag.get("sort.artist")}},[o.Q.ADDED_BY]:{key:"added-by",get value(){return i.ag.get("sort.added-by")}},[o.Q.ADDED_AT]:{key:"added-at",get value(){return i.ag.get("sort.date-added")}},[o.Q.DURATION]:{key:"duration",get value(){return i.ag.get("sort.duration")}},[o.Q.EVENT_DATE]:null,[o.Q.EVENT_INFO]:null,[o.Q.ALBUM]:{key:"album",get value(){return i.ag.get("sort.album")}},[o.Q.ALBUM_OR_PODCAST]:{key:"album-or-podcast",get value(){return i.ag.get("sort.album-or-podcast")}},[o.Q.ALBUM_OR_SHOW]:{key:"album-or-show",get value(){return i.ag.get("sort.album-or-show")}},[o.Q.PLAYS]:null,[o.Q.RELEASE_DATE]:null,[o.Q.ADD]:null,[o.Q.ACTIONS]:null};var m=n(36342),h=n(88104),g=n(4637);function p(e){return!!e}const C=({columns:e,disabled:t,onSort:n,isBooklist:C=!1})=>{let b=[...e];C?b=l.i1:b.splice(2,0,m.QD.ARTIST);const{sortState:k,setSortState:x}=(0,a.useContext)(l.Gb),y=function(e){return null===e.column?u[m.QD.INDEX]:(0,h.cB)(e.column,e.order)?u[m.QD.ARTIST]:u[e.column]}(k),v=(0,a.useCallback)((e=>{n?.(),x(((e,t,n)=>e?t!==c[e]||"artist"===e&&[o.k.ASC,o.k.DESC].includes(n)||"title"===e&&[o.k.SECONDARY_ASC,o.k.SECONDARY_DESC].includes(n)?s[e]:{column:c[e],order:d[n]}:l.HI)(e,k.column,k.order))}),[n,x,k.column,k.order]),S=(0,a.useCallback)((()=>null!==k.column),[k.column]),D=b.map((e=>u[e])).filter(p);return(0,g.jsx)(r.A,{options:D,onSelect:v,selected:y,isSelectionChanged:S,sortOrder:k.order,heading:i.ag.get("drop_down.sort_by"),disabled:t})}},45980:(e,t,n)=>{n.d(t,{v:()=>b});var a=n(84875),i=n.n(a),r=n(74526),l=n(29919),o=n(1360),s=n(30099),c=n(54781),d=n(34046),u=n(76264),m=n(42365);const h="I3oc8sxg8Duq4kYUGnMo",g="LEZf9K5hG4hfCKfgr5Xo";var p=n(4637);const C=e=>(0,p.jsx)(r.e,{semanticColor:"textPositive",...e}),b=({uri:e,...t})=>{const{isEnhanced:n,toggleIsEnhanced:a}=(0,m.U)(e),{spec:r,logger:b}=(0,d.fU)(o.createDesktopEnhanceButtonEventFactory,{data:{uri:e}}),k=(0,p.jsx)(c.ws,{label:n?s.ag.get("web-player.enhance.button_aria_label_enhanced"):s.ag.get("web-player.enhance.button_aria_label_not_enhanced"),children:(0,p.jsx)(l.P,{buttonSize:"sm",className:i()(h,{[g]:n}),...t,iconLeading:n?C:void 0,onClick:()=>{b.logInteraction(n?r.hitUnenhanceContext({contextToBeUnenhanced:e}):r.hitEnhanceContext({contextToBeEnhanced:e})),a()},children:n?s.ag.get("web-player.enhance.button_text_enhanced"):s.ag.get("web-player.enhance.button_text_not_enhanced")})});return n?k:(0,p.jsx)(u.T,{id:"enhance-button",bodyText:s.ag.get("web-player.enhance.onboarding.enhance-playlist"),children:k})}},76264:(e,t,n)=>{n.d(t,{T:()=>g});var a=n(59496),i=n(87995),r=n(58745),l=n(51697),o=n(49261),s=n(98484),c=n(82760),d=n(50525);const u="iW5kFTiudWn9ItsTvZmz",m="OfNgl_iK7pi63fAi8USM";var h=n(4637);const g=function({id:e,title:t,bodyText:n,buttonText:g,shouldScrollIntoView:p,children:C}){const[b,k]=(0,d.z)(`onboarding-dismissed:${e}`,!1),x=(0,c.Mi)(),[y,v]=(0,a.useState)(null),[S,D]=(0,a.useState)(null),E=(0,a.useRef)(!1);(0,a.useEffect)((()=>{p&&S&&!E.current&&(E.current=!0,S.scrollIntoView({behavior:"smooth",block:"center"}))}),[p,S]);const w=(0,a.useCallback)((()=>k(!0)),[k]);(0,a.useEffect)((()=>{if(b)return()=>{};const e=e=>{"Escape"===e.key&&w()},t=e=>{e.target instanceof Node&&!S?.contains(e.target)&&w()};return window.addEventListener("keydown",e,!0),window.addEventListener("click",t,!0),()=>{window.removeEventListener("keydown",e,!0),window.removeEventListener("click",t,!0)}}),[b,w,S]);const T=x.current?.getBoundingClientRect(),A=y?.getBoundingClientRect();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{ref:v,children:C}),!b&&A&&(0,i.createPortal)((0,h.jsx)("div",{className:u,style:{top:(A?.top??0)-((T?.top??0)-(x.current?.scrollTop??0)),left:(A?.left??0)-((T?.left??0)-(x.current?.scrollLeft??0)),width:A?.width,height:A?.height},ref:D,children:(0,h.jsxs)(r.J,{popoverTitle:t,arrow:r.J.bottom,colorSet:"announcement",className:m,children:[(0,h.jsx)(l.D,{as:"p",paddingBottom:g&&o.g4,children:n}),g&&(0,h.jsx)(s.D,{buttonSize:"sm",colorSet:"invertedLight",onClick:w,children:g})]})}),x.current||document.body)]})}},34092:(e,t,n)=>{n.d(t,{v:()=>a.v});var a=n(45980)},4398:(e,t,n)=>{n.d(t,{v:()=>a.v});var a=n(83713)},5912:(e,t,n)=>{n.d(t,{s:()=>_});var a=n(59496),i=n(84875),r=n.n(i),l=n(51697),o=n(9990),s=n(30099),c=n(62168),d=n(96422),u=n(7018),m=n(20456),h=n(29915),g=n(54985),p=n(4845),C=n(68224),b=n(46915),k=n(7221),x=n(47948),y=n(70231),v=n(34046),S=n(42153);function D(e){return e.user||null}function E(e){return!!e}function w(e,t=!1){return{id:e.username,uri:e.uri,name:e.username,displayName:e.displayName||void 0,images:e.images,isMadeFor:t}}var T=n(39815),A=n(4637);const _=function({metadata:e,isPlaying:t,isPublished:n,togglePlay:i,backgroundColor:_,spec:f,specLikedSongs:j}){const{uri:N,name:O,description:I="",images:R,totalLength:L,totalLikes:B,duration:Q,owner:U,isOwnedBySelf:P=!1,isCollaborative:M=!1,formatListData:F,madeFor:X=null,collaborators:W,hasSpotifyTracks:Y,hasEpisodes:K,hasSpotifyAudiobooks:Z}=e,G=F?.attributes||{},V=G.header_image_url_desktop||G.image_url||null,z=null!==V?[{url:V,width:null,height:null}]:[],H=(0,o.W6)(x.bMb),J=(0,v.$P)(),q=(0,a.useMemo)((()=>function(e,t,n=[],a){return e?[w(e,!0)]:n.length>1&&a?n.map(D).filter(E).map((e=>w(e))):[w(t)]}(X,U,W?.items,H)),[X,U,W?.items,H]),$=(0,a.useContext)(k.zy),ee=(0,a.useContext)(S.S7),te=(0,a.useCallback)((()=>{if(f){const e=f.ownerFactory().hitUiReveal();J.logInteraction(e)}ee({type:"open",uri:N})}),[ee,N,f,J]),ne=(0,a.useCallback)((e=>{if(f){const e=f?.descriptionTextFactory().hitUiReveal();J.logInteraction(e)}$({type:"open",playlistDetails:{name:O,description:I,image:R[0],uri:N},focusedElement:e})}),[f,$,O,I,R,N,J]),ae=(0,a.useCallback)((()=>{if(f){const e=f.coverArtFactory().hitUiReveal();J.logInteraction(e)}$({type:"openWithImagePicker",playlistDetails:{name:O,description:I,image:R[0],uri:N}})}),[$,O,I,R,N,J,f]),ie=(0,a.useCallback)(((e,t)=>{if(f){const e=f.ownerFactory().hitUiNavigate({destination:t.creator.uri});J.logInteraction(e)}if(j){const e=j.ownerFactory().hitUiNavigate({destination:t.creator.uri});J.logInteraction(e)}}),[J,f,j]),re=H&&e.permissions?e.permissions?.isPrivate?s.ag.get("private_playlist"):s.ag.get("public_playlist"):M?s.ag.get("sidebar.collaborative_playlist"):s.ag.get("playlist"),le=(0,o.W6)(x.vyX,{loadingValue:!1});return(0,A.jsxs)(u.gF,{backgroundColor:_,backgroundImages:z,children:[(0,A.jsxs)(m.W,{children:[(0,A.jsx)(C.$,{size:"medium",onClick:i,isPlaying:t,uri:N}),(0,A.jsx)(h.i,{text:O,dragUri:N,dragLabel:O})]}),V?null:(0,A.jsx)(y._,{menu:(0,A.jsx)(c.X,{uri:N,isPublished:n}),children:(0,A.jsx)(T.k,{children:(0,A.jsx)(d.T,{canEdit:P,name:O,images:R,onClick:ae,placeholderType:"playlist",dragUri:N})})}),(0,A.jsxs)(u.sP,{children:[(0,A.jsx)(g.g,{children:re}),(0,A.jsx)(y._,{menu:(0,A.jsx)(c.X,{uri:N,isPublished:n}),children:(0,A.jsx)(u.xd,{canEdit:P,onClick:()=>{if(f){const e=f.titleFactory().hitUiReveal();J.logInteraction(e)}ne(k.w.TITLE)},dragUri:N,dragLabel:O,ariaLabel:s.ag.get("playlist.edit-details.button",O),scaleAtMinWidth:u.vz,children:O})}),I&&(0,A.jsx)(l.D,{variant:"mesto",className:b.Z.whiteOpacity,onClick:e=>{P&&(e=>{"href"in e.target||ne(k.w.DESCRIPTION)})(e)},children:(0,A.jsx)(p.w,{html:I,onTimeStampClick:()=>{},className:r()(b.Z.playlistDescription,{[b.Z.newEntityHeaders]:le})})}),(0,A.jsx)(u.QS,{creators:q,onPiledCreatorsClick:te,onCreatorClick:ie,totalItems:L,totalLikes:B??0,durationMilliseconds:Q?.milliseconds,isEstimatedDuration:Q?.isEstimate,newEntries:parseInt(G.new_entries_count||"0",10),hasTracks:Y??!1,hasEpisodes:K??!1,hasAudiobooks:Z??!1})]})]})}},46915:(e,t,n)=>{n.d(t,{Z:()=>a});const a={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",playlist:"playlist-playlist-playlist",searchBoxContainer:"playlist-playlist-searchBoxContainer",recommendedTrackList:"playlist-playlist-recommendedTrackList",playlistContent:"playlist-playlist-playlistContent",playlistDescription:"playlist-playlist-playlistDescription",newEntityHeaders:"iIupn8qGe4T3AvEAnRo0",top:"playlist-playlist-top",header:"playlist-playlist-header",subtitle:"playlist-playlist-subtitle",refreshButton:"plyalist-playlist-refreshButton",playlistImageContainer:"playlist-playlist-playlistImageContainer",playlistInlineCurationSection:"playlist-playlist-playlistInlineCurationSection",playlistInlineCurationTitle:"playlist-playlist-playlistInlineCurationTitle",playlistInlineCurationWrapper:"playlist-playlist-playlistInlineCurationWrapper",playlistInlineCurationCloseButton:"playlist-playlist-playlistInlineCurationCloseButton",playlistInlineCurationBackButton:"playlist-playlist-playlistInlineCurationBackButton",artistResultListTitle:"playlist-playlist-artistResultListTitle",seeMore:"playlist-playlist-seeMore",emptyStateContainer:"playlist-playlist-emptyStateContainer",searchResultListContainer:"playlist-playlist-searchResultListContainer",emptySearchTermContainer:"playlist-playlist-emptySearchTermContainer",whiteOpacity:"playlist-playlist-whiteOpacity",noBooklistSupportContainer:"playlist-playlist-noBooklistSupportContainer",icon:"playlist-playlist-icon"}}}]);
//# sourceMappingURL=8736.js.map