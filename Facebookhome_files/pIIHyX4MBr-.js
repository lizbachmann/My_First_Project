/*!CK:3915371526!*//*1440639389,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["V73Rx"]); }

__d("PrivacyConst",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BaseValue:{FRIEND_LIST:129,FRIENDS_PLUS_GAMER_FRIENDS:128,FRIENDS_MINUS_ACQUAINTANCES:127,FACEBOOK_EMPLOYEES:112,CUSTOM:111,EVERYONE:80,NETWORKS_FRIENDS_OF_FRIENDS:60,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SELF:10,NOBODY:0},CustomPrivacyTokens:{FRIENDS:247124075410460,FRIENDS_OF_FRIENDS:498125493540100},FriendsValue:{EVERYONE:80,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SOME_FRIENDS:30,SELF:10,NO_FRIENDS:0},PostParam:{EVERYONE:300645083384735,NETWORKS_FRIENDS:123780391104836,FRIENDS_OF_FRIENDS:275425949243301,FRIENDS:291667064279714,FRIENDS_MINUS_ACQUAINTANCES:284920934947802,ONLY_ME:286958161406148,FB_ONLY:411331705596297,EVENT_PUBLIC:1493271774218406,EVENT_OPEN_INVITE:854618297899786,EVENT_GUESTS_AND_FRIENDS:1439959856260766,EVENT_INVITE_ONLY:599950423437029},PrivacyField:{CURRENT_COMPOSER:8787670733,DEFAULT_COMPOSER:875106179167765,TIMELINE_TAGGED_CONTENT_VISIBILITY:8787530733,WALL_POSTS:8787370733,TAG_EXPANDED_CONTENT:8787795733,SEARCH_BY_PHONE:8787815733,SEARCH_BY_EMAIL:8787820733,CAN_FRIEND:8787540733,DEPRECATED_APP_DEFAULT:8787700733,SEARCH_BY_NAME:8787755733,SEARCH_BY_CONTACT_INFO:8787760733,SCREENNAME:8787335733,CURRENT_ADDRESS:8787355733,FRIENDS:8787365733,WEBSITE:8787375733,STATUS_UPDATES:8787395733,BIRTHDAY:8787510733,BIRTHYEAR:8787805733,CAN_COMMENT:8787535733,CAN_MESSAGE:8787545733,RELATIONSHIPS:8787550733,PROFILE_PICTURE_ALBUM:8787565733,DASHBOARD_ACTIVITY:8787575733,FAMILY:8787585733,INTERESTED_IN_LOOKING_FOR:8787590733,PLACES:8787620733,NAME_DAY:8787810733,LANGUAGES:8787625733,QUOTATIONS:8787630733,ABOUT_ME:8787635733,POLITICAL:8787640733,RELIGIOUS:8787645733,CURRENT_CITY:8787650733,HOMETOWN:8787655733,PROFILE_LIKES_AND_INTERESTS:8787660733,BLURB:8787665733,OTHER_LIKES_AND_INTERESTS:8787680733,SUBSCRIBERS:8787690733,SUBSCRIBED_TO:8787695733,PERSONAL_CONTACT_DEFAULT:8787765733,PAGE_CONTACT_DEFAULT:8787770733,AUTO_GENERATED_FB_EMAIL:8787775733,SKILLS:8787780733,CUSTOM_GENDERS:237760973066217,LOCATION_DO_NOT_WRITE_DIRECTLY:8787785733,SOCIAL_ADS:7719929599,PLATFORM_ADS:126540474531,BASS_ADS:183468681673909,ACTIVITIES:144331422306930,INTERESTS:113693108715766,MUSIC:172372399483077,BOOKS:100725463352700,GAMES:199298603444535,MOVIES:201146206594049,TV_SHOWS:129665560441221,SPORTS_PLAYED:129991670408857,FAVORITE_TEAMS:225288534151802,FAVORITE_ATHLETES:203380763033334,PEOPLE_I_ADMIRE:210380795648667,FAVORITE_FOODS:585935528106425,FAVORITE_RESTAURANTS:172588449584647,FAVORITE_WEBSITES:180412195459106,CLOTHING_BRANDS:397391233714082,LAST_POST_PRIVACY:314763985364212,SECOND_TO_LAST_POST_PRIVACY:321179124722698,PREVIOUS_SECONDARY_COMPOSER:864562253561430,RECENT_COMPOSER:358304524327898,NOW_COMPOSER:421290164697736,BACKSTAGE_PRIVACY:809506612451171},TagExpansion:{NONE:0,TAGGEES:1,FRIENDS_OF_TAGGEES:2},EventExpansion:{NONE:0,EVENT_INVITEES:1,EVENT_GROUP:2},ExpansionType:{NONE:0,TAGS_ONLY:1,EVENT_INVITEES_ONLY:2,EVENT_GROUP_ONLY:3,TAGS_AND_EVENT_INVITEES:4,TAGS_AND_EVENT_GROUP:5}};},null,{});
__d('BanzaiNectar',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k){return {log:function(l,m,n){var o={e:m,a:n};h.post('nectar:'+l,o,k);}};}var j=i();j.create=i;f.exports=j;},null);
__d('getScrollPosition',['getDocumentScrollElement','getUnboundedScrollPosition'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();'use strict';function j(k){var l=h();if(k===window)k=l;var m=i(k),n=k===l?document.documentElement:k,o=k.scrollWidth-n.clientWidth,p=k.scrollHeight-n.clientHeight;m.x=Math.max(0,Math.min(m.x,o));m.y=Math.max(0,Math.min(m.y,p));return m;}f.exports=j;},null);
__d('LitestandStream',['Arbiter','DOMQuery','LitestandMessages','LitestandStoryInsertionStatus','ViewportBounds','csx','ge','getElementPosition','getOrCreateDOMID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q,r,s,t={init:function(u,v,w){q=v;r=w;s=u;h.subscribe(j.STORIES_INSERTED,function(x,y){if(!y||!y.substream_id||!q)return;var z=i.scry(n(y.substream_id),t.getStoriesSelector());z.forEach(function(aa){var ba=i.scry(aa,"._5pbw"),ca=i.scry(aa,"._5pcp")[0],da=i.scry(aa,"._5pbx")[0];if(ba[0]&&ca&&da){var ea='';for(var fa=0;fa<ba.length;fa++)ea+=p(ba[fa])+' ';ea.trim();aa.setAttribute('aria-labelledby',ea+' '+p(ca)+' '+p(da));}});});},getStoriesSelector:function(){return "._5jmm";},getStreamRoot:function(){return s;},getSectionID:function(){return r;},canInsertNewerStories:function(){if(l.getTop()>o(t.getStreamRoot()).y)return false;return k.canInsert();},getFeedStreamID:function(){return parseInt(s.id.split('feed_stream_')[1],16)%1e+08;}};f.exports=t;},null);
__d('AccessibilityLogger',['AsyncSignal','Cookie'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={COOKIE:'a11y',DECAY_MS:6*60*60*1000,DEFAULT:{sr:0,'sr-ts':Date.now(),jk:0,'jk-ts':Date.now(),kb:0,'kb-ts':Date.now(),hcm:0,'hcm-ts':Date.now()},getCookie:function(){var k=j.DEFAULT,l=i.get(j.COOKIE);if(l){l=JSON.parse(l);for(var m in k)if(m in l)k[m]=l[m];}return k;},logKey:function(k,l){var m=j.getCookie();m[k]++;var n=Date.now();if(n-m[k+'-ts']>j.DECAY_MS){new h('/ajax/accessibilitylogging',{eventName:l,times_pressed:m[k]}).send();m[k+'-ts']=n;m[k]=0;}i.set(j.COOKIE,JSON.stringify(m));},logHCM:function(){j.logKey('hcm','hcm_users');},logSRKey:function(){j.logKey('sr','sr_users');},logJKKey:function(){j.logKey('jk','jk_users');},logFocusIn:function(){j.logKey('kb','kb_users');}};f.exports=j;},null);
__d("Ease",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={makePowerOut:function(i){var j=h.makePowerIn(i);return function(k){return 1-j(1-k);};},makePowerIn:function(i){return function(j){var k=Math.pow(j,i);return (k*10000|0)/10000;};},makePowerInOut:function(i){var j=h.makePowerIn(i),k=h.makePowerOut(i);return function(l){return l<.5?.5*j(l*2):.5*k(l*2-1)+.5;};},expoOut:function(i){return 1-Math.pow(2,-10*i);},expoIn:function(i){return 1-h.expoOut(1-i);},expoInOut:function(i){return i<.5?.5*h.expoIn(i*2):.5*h.expoOut(i*2-1)+.5;},sineOut:function(i){return Math.sin(i*Math.PI*.5);},sineIn:function(i){return 1-Math.cos(i*Math.PI*.5);},sineInOut:function(i){return -.5*(Math.cos(Math.PI*i)-1);},circOut:function(i){i--;return Math.sqrt(1-i*i);},circIn:function(i){return 1-h.circOut(1-i);},circInOut:function(i){return i<.5?.5*h.circIn(i*2):.5*h.circOut(i*2-1)+.5;},bounceOut:function(i){if(i<1/2.75){return 7.5625*i*i;}else if(i<2/2.75){return 7.5625*(i-=1.5/2.75)*i+.75;}else if(i<2.5/2.75){return 7.5625*(i-=2.25/2.75)*i+.9375;}else return 7.5625*(i-=2.625/2.75)*i+.984375;},bounceIn:function(i){return 1-h.bounceOut(1-i);},bounceInOut:function(i){return i<.5?.5*h.bounceIn(i*2):.5*h.bounceOut(i*2-1)+.5;},makeBounceOut:function(i){i=i||1;return function(j){j=(1-Math.cos(j*Math.PI*i))*(1-j)+j;return 1-Math.abs(1-j);};},makeBounceIn:function(i){var j=h.makeBounceOut(i);return function(k){return 1-j(1-k);};},makeElasticOut:function(i,j){i<1&&(i=1);var k=Math.PI*2;return function(l){if(l===0||l===1)return l;var m=j/k*Math.asin(1/i);return i*Math.pow(2,-10*l)*Math.sin((l-m)*k/j)+1;};},makeElasticIn:function(i,j){var k=h.makeElasticOut(i,j);return function(l){return 1-k(1-l);};},makeElasticInOut:function(i,j){j*=1.5;var k=h.makeElasticIn(i,j),l=h.makeElasticOut(i,j);return function(m){return m<.5?.5*k(m*2):.5*l(m*2-1)+.5;};},makeBackOut:function(i){var j=h.makeBackIn(i);return function(k){return 1-j(1-k);};},makeBackIn:function(i){return function(j){return j*j*((i+1)*j-i);};},makeBackInOut:function(i){i*=1.525;var j=h.makeBackIn(i),k=h.makeBackOut(i);return function(l){return l<.5?.5*j(l*2):.5*k(l*2-1)+.5;};}};h.elasticOut=h.makeElasticOut(1,.3);h.elasticIn=h.makeElasticIn(1,.3);h.elasticInOut=h.makeElasticInOut(1,.3);h.backOut=h.makeBackOut(1.7);h.backIn=h.makeBackIn(1.7);h.backInOut=h.makeBackInOut(1.7);f.exports=h;},null);
__d('SelectorDeprecated',['Event','Arbiter','Button','ContextualLayer','CSS','DataStore','DOM','Focus','HTML','Keys','MenuDeprecated','Parent','Style','Toggler','TooltipData','URI','Vector','arrayContains','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){if(c.__markCompiled)c.__markCompiled();var aa,ba,ca=[],da;function ea(pa){return s.byClass(pa,'uiSelector');}function fa(pa){return s.byClass(pa,'uiSelectorButton');}function ga(){if(!ba){ba=new k({position:'below'},n.create('div'));l.addClass(ba.getRoot(),'uiSelectorContextualLayer');}return ba;}function ha(pa){return n.scry(pa,'select')[0];}function ia(pa){return n.find(pa,'div.uiSelectorMenuWrapper');}function ja(){ja=z;r.subscribe('select',function(pa,qa){if(!aa||!qa||qa.menu!==oa.getSelectorMenu(aa))return;var ra=ka(aa),sa=la(qa.item);if(sa){var ta=aa,ua=oa.isOptionSelected(qa.item),va=oa.inform('select',{selector:ta,option:qa.item,clone:da});if(va===false)return;if(ra||!ua){oa.setSelected(ta,oa.getOptionValue(qa.item),!ua);oa.inform('toggle',{selector:ta,option:qa.item});oa.inform('change',{selector:ta});i.inform('Form/change',{node:ta});if(ma(ta))m.set(ta,'dirty',true);}}if(!ra||!sa)aa&&oa.toggle(aa);});}function ka(pa){return !!pa.getAttribute('data-multiple');}function la(pa){return l.hasClass(pa,'uiSelectorOption');}function ma(pa){return !!pa.getAttribute('data-autosubmit');}var na=function(){na=z;var pa={keydown:function(event){var qa=event.getTarget();if(n.isInputNode(qa))return;switch(h.getKeyCode(event)){case q.DOWN:case q.SPACE:case q.UP:if(fa(qa)){var ra=ea(qa);oa.toggle(ra);return false;}break;case q.ESC:if(aa){var sa=oa.getSelectorButton(aa);oa.toggle(aa);sa&&o.set(sa);return false;}break;}},mouseover:function(event){var qa=s.byAttribute(event.getTarget(),'ajaxify');if(qa&&l.hasClass(qa,'uiSelectorButton'))oa.loadMenu(ea(qa));}};h.listen(document.body,pa);};u.subscribe(['show','hide'],function(pa,qa){var ra=ea(qa.getActive());if(ra){na();ja();var sa=oa.getSelectorButton(ra),ta=oa.getSelectorMenu(ra),ua=pa==='show';sa.setAttribute('aria-expanded',ua?'true':'false');if(ua){aa=ra;if(l.hasClass(sa,'uiButtonDisabled')){oa.setEnabled(ra,false);return false;}ta=ta||oa.loadMenu(ra);var va=t.getScrollParent(ra),wa=va!==window&&va!==n.getDocumentScrollElement();if(wa||l.hasClass(ra,'uiSelectorUseLayer')){if(wa)ca.push(h.listen(va,'scroll',function(){qa.hide();}));da=n.create('div',{className:ra.className});l.addClass(da,'invisible_elem');x.getElementDimensions(ra).setElementDimensions(da);n.replace(ra,da);var xa=l.hasClass(ra,'uiSelectorRight'),ya=l.hasClass(ra,'uiSelectorBottomUp');ga().setContext(da).setContent(ra).setPosition(ya?'above':'below').setAlignment(xa?'right':'left').show();}r.register(ta);var za=r.getCheckedItems(ta);if(!za.length)za=r.getEnabledItems(ta);if(za.length)r.focusItem(za[0]);}else{aa=null;if(da){while(ca.length)ca.pop().remove();n.replace(da,ra);ga().hide();da=null;}ta&&r.unregister(ta);if(ma(ra)&&m.get(ra,'dirty')){var ab=n.scry(ra,'input.submitButton')[0];ab&&ab.click();m.remove(ra,'dirty');}}l.conditionClass(oa.getSelectorButton(ra),'selected',ua);oa.inform(ua?'open':'close',{selector:ra,clone:da});}});var oa=Object.assign(new i(),{attachMenu:function(pa,qa,ra){pa=ea(pa);if(pa){aa&&r.unregister(oa.getSelectorMenu(aa));n.setContent(ia(pa),qa);aa&&r.register(oa.getSelectorMenu(pa));da&&ga().updatePosition();if(ra){var sa=pa.getAttribute('data-name');sa&&ra.setAttribute('name',sa);if(!ka(pa))ra.setAttribute('multiple',false);var ta=ha(pa);if(ta){n.replace(ta,ra);}else n.insertAfter(pa.firstChild,ra);}return true;}},getOption:function(pa,qa){var ra=oa.getOptions(pa),sa=ra.length;while(sa--)if(qa===oa.getOptionValue(ra[sa]))return ra[sa];return null;},getOptions:function(pa){var qa=r.getItems(oa.getSelectorMenu(pa));return qa.filter(la);},getEnabledOptions:function(pa){var qa=r.getEnabledItems(oa.getSelectorMenu(pa));return qa.filter(la);},getSelectedOptions:function(pa){return r.getCheckedItems(oa.getSelectorMenu(pa));},getOptionText:function(pa){return r.getItemLabel(pa);},getOptionValue:function(pa){var qa=ea(pa),ra=ha(qa),sa=oa.getOptions(qa).indexOf(pa);return sa>=0?ra.options[sa+1].value:'';},getSelectorButton:function(pa){return n.find(pa,'a.uiSelectorButton');},getSelectorMenu:function(pa){return n.scry(pa,'div.uiSelectorMenu')[0];},getValue:function(pa){var qa=ha(pa);if(!qa)return null;if(!ka(pa))return qa.value;var ra=[],sa=qa.options;for(var ta=1,ua=sa.length;ta<ua;ta++)if(sa[ta].selected)ra.push(sa[ta].value);return ra;},isOptionSelected:function(pa){return r.isItemChecked(pa);},listen:function(pa,qa,ra){return this.subscribe(qa,function(sa,ta){if(ta.selector===pa)return ra(ta,sa);});},loadMenu:function(pa,qa){var ra=oa.getSelectorMenu(pa);if(!ra){var sa=oa.getSelectorButton(pa),ta=sa.getAttribute('ajaxify');if(ta){e(['AsyncRequest'],(function(va){var wa=new w(ta),xa=wa.getQueryData();wa.setQueryData({});var ya=new va(wa).setData(xa).setNectarModuleDataSafe(sa).setRelativeTo(sa);qa&&ya.setFinallyHandler(function(){setTimeout(qa,0);});ya.send();}).bind(this));var ua=p('<div class="uiSelectorMenuWrapper uiToggleFlyout">'+'<div class="uiMenu uiSelectorMenu loading">'+'<ul class="uiMenuInner">'+'<li><span></span></li>'+'</ul>'+'</div>'+'</div>');n.appendContent(sa.parentNode,ua);ra=oa.getSelectorMenu(pa);sa.removeAttribute('onmouseover');}}else qa&&qa();return ra;},setButtonLabel:function(pa,qa){var ra=oa.getSelectorButton(pa),sa=parseInt(ra.getAttribute('data-length'),10);qa=qa||ra.getAttribute('data-label')||'';j.setLabel(ra,qa);if(typeof qa==='string')if(sa&&qa.length>sa){ra.setAttribute('title',qa);}else ra.removeAttribute('title');},setButtonTooltip:function(pa,qa){var ra=oa.getSelectorButton(pa),sa=s.byTag(ra,'a');sa&&v.set(sa,qa||ra.getAttribute('data-tooltip')||'');},setEnabled:function(pa,qa){if(!qa&&aa&&ea(pa)===aa)oa.toggle(pa);j.setEnabled(oa.getSelectorButton(pa),qa);},setOptionEnabled:function(pa,qa){r.setItemEnabled(pa,qa);},setSelected:function(pa,qa,ra){ra=ra!==false;var sa=oa.getOption(pa,qa);if(!sa)return;var ta=oa.isOptionSelected(sa);if(ra!==ta){if(!ka(pa)&&!ta){var ua=oa.getSelectedOptions(pa)[0];ua&&r.toggleItem(ua);}r.toggleItem(sa);}oa.updateSelector(pa);},toggle:function(pa){u.toggle(n.scry(ea(pa),'div.wrap')[0]);},updateSelector:function(pa){var qa=oa.getOptions(pa),ra=oa.getSelectedOptions(pa),sa=ha(pa).options,ta=[],ua=[];for(var va=0,wa=qa.length;va<wa;va++){var xa=y(ra,qa[va]);sa[va+1].selected=xa;if(xa){var ya=oa.getOptionText(qa[va]);ta.push(ya);ua.push(qa[va].getAttribute('data-tooltip')||ya);}}sa[0].selected=!ra.length;var za=l.hasClass(pa,'uiSelectorDynamicLabel'),ab=l.hasClass(pa,'uiSelectorDynamicTooltip');if(za||ab){var bb='';if(ka(pa)){var cb=oa.getSelectorButton(pa);bb=cb.getAttribute('data-delimiter')||', ';}ta=ta.join(bb);ua=ua.join(bb);za&&oa.setButtonLabel(pa,ta);ab&&oa.setButtonTooltip(pa,ua);}}});f.exports=oa;},null);
__d('PrivacySelectorNewDispatcher',['Dispatcher'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='selector',j=Object.assign(new h(),{handleUpdateFromSelector:function(k){this.dispatch(babelHelpers._extends({payloadSource:i},k));}});f.exports=j;},null);
__d("XPrivacyCustomDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/custom_dialog\/",{id:{type:"String",required:true},option_id:{type:"String",required:true},autosave:{type:"Bool",defaultValue:false},explain_tags:{type:"Bool",defaultValue:false},limit_community:{type:"Bool",defaultValue:false},limit_facebook:{type:"Bool",defaultValue:false},limit_fof:{type:"Bool",defaultValue:false},limit_tagexpand:{type:"Bool",defaultValue:false},is_new_privacy_selector:{type:"Bool",defaultValue:false},render_location:{type:"Int"},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},tag_expansion_button:{type:"String"},__asyncDialog:{type:"Int"}});},null,{});
__d("XPrivacyRemindersDismissController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/reminders\/dismiss\/",{type:{type:"String",required:true},log_plite:{type:"Bool",defaultValue:false}});},null,{});