// Created by iWeb 3.0.4 local-build-20170317

function createMediaStream_id2()
{return IWCreatePhotocast("http://EURS/%F0%9F%93%BB_EU_Rap_Show___Playlist___EURapShow_files/rss.xml",false);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://EURS',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://EURS',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(5,new IWSize(128,128),new IWSize(128,48),new IWSize(134,191),27,27,0,new IWSize(2,2)),new IWEmptyStroke(),imageStream,range,null,null,1.000000,null,'Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke(),stroke_1:new IWStrokeParts([{rect:new IWRect(-1,1,2,54),url:'%F0%9F%93%BB_EU_Rap_Show___Playlist___EURapShow_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'%F0%9F%93%BB_EU_Rap_Show___Playlist___EURapShow_files/stroke_1.png'},{rect:new IWRect(1,-1,657,2),url:'%F0%9F%93%BB_EU_Rap_Show___Playlist___EURapShow_files/stroke_2.png'},{rect:new IWRect(658,-1,2,2),url:'%F0%9F%93%BB_EU_Rap_Show___Playlist___EURapShow_files/stroke_3.png'},{rect:new IWRect(658,1,2,54),url:'%F0%9F%93%BB_EU_Rap_Show___Playlist___EURapShow_files/stroke_4.png'},{rect:new IWRect(658,55,2,2),url:'%F0%9F%93%BB_EU_Rap_Show___Playlist___EURapShow_files/stroke_5.png'},{rect:new IWRect(1,55,657,2),url:'%F0%9F%93%BB_EU_Rap_Show___Playlist___EURapShow_files/stroke_6.png'},{rect:new IWRect(-1,55,2,2),url:'%F0%9F%93%BB_EU_Rap_Show___Playlist___EURapShow_files/stroke_7.png'}],new IWSize(659,56))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('📻_EU_Rap_Show___Playlist___EURapShow_files/📻_EU_Rap_Show___Playlist___EURapShowMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');detectBrowser();adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');adjustLineHeightIfTooBig('id10');adjustFontSizeIfTooBig('id10');adjustLineHeightIfTooBig('id11');adjustFontSizeIfTooBig('id11');adjustLineHeightIfTooBig('id12');adjustFontSizeIfTooBig('id12');adjustLineHeightIfTooBig('id13');adjustFontSizeIfTooBig('id13');adjustLineHeightIfTooBig('id14');adjustFontSizeIfTooBig('id14');fixAllIEPNGs('Media/transparent.gif');Widget.onload();IMpreload('📻_EU_Rap_Show___Playlist___EURapShow_files','shapeimage_4','0');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
