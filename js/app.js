function active(){select.forEach(e=>e.classList.remove("active")),this.classList.add("active")}function openForm(){document.getElementById("Newchat").style.display="block",document.getElementById("leftSid").style.display="none"}function closeForm(){document.getElementById("leftSid").style.display="block",document.getElementById("Newchat").style.display="none"}function openRightSide(){document.getElementById("rightSide").style.display="flex",document.getElementById("Intro-Left").style.display="none"}function closeRightSide(){document.getElementById("Intro-Left").style.display="block",document.getElementById("rightSide").style.display="none",document.getElementById("ChatAbout").style.display="none",document.getElementById("search-message").style.display="none"}function openChatAbout(){document.getElementById("ChatAbout").style.display="block"}function closeChatAbout(){document.getElementById("ChatAbout").style.display="none"}function openSearch(){document.getElementById("search-message").style.display="block"}function closeSearch(){document.getElementById("search-message").style.display="none"}function openGroup(){document.getElementById("group").style.display="block",document.getElementById("Newchat").style.display="none"}function closeGroup(){document.getElementById("Newchat").style.display="block",document.getElementById("group").style.display="none"}function openGrp(){document.getElementById("group").style.display="block",document.getElementById("leftSid").style.display="none"}function closeGroup(){document.getElementById("leftSid").style.display="block",document.getElementById("group").style.display="none"}function openStarred(){document.getElementById("starred").style.display="block",document.getElementById("leftSid").style.display="none"}function closeStarred(){document.getElementById("leftSid").style.display="block",document.getElementById("starred").style.display="none"}function openSettings(){document.getElementById("settings").style.display="block",document.getElementById("leftSid").style.display="none"}function closeSettings(){document.getElementById("leftSid").style.display="block",document.getElementById("settings").style.display="none"}function openProfile(){document.getElementById("profile").style.display="block",document.getElementById("settings").style.display="none"}function closeProfile(){document.getElementById("settings").style.display="block",document.getElementById("profile").style.display="none"}function openNotifications(){document.getElementById("notifications").style.display="block",document.getElementById("settings").style.display="none"}function closeNotifications(){document.getElementById("settings").style.display="block",document.getElementById("notifications").style.display="none"}function openPrivacy(){document.getElementById("privacy").style.display="block",document.getElementById("settings").style.display="none"}function closePrivacy(){document.getElementById("settings").style.display="block",document.getElementById("privacy").style.display="none"}function openLast(){document.getElementById("last-seen").style.display="block",document.getElementById("privacy").style.display="none"}function closeLast(){document.getElementById("privacy").style.display="block",document.getElementById("last-seen").style.display="none"}function openPhoto(){document.getElementById("p-photo").style.display="block",document.getElementById("privacy").style.display="none"}function closePhoto(){document.getElementById("privacy").style.display="block",document.getElementById("p-photo").style.display="none"}function openAbout(){document.getElementById("about").style.display="block",document.getElementById("privacy").style.display="none"}function closeAbout(){document.getElementById("privacy").style.display="block",document.getElementById("about").style.display="none"}function openDmessage(){document.getElementById("D-message").style.display="block",document.getElementById("privacy").style.display="none"}function closeDmessage(){document.getElementById("privacy").style.display="block",document.getElementById("D-message").style.display="none"}function openGroups(){document.getElementById("groups").style.display="block",document.getElementById("privacy").style.display="none"}function closeGroups(){document.getElementById("privacy").style.display="block",document.getElementById("groups").style.display="none"}function openBlock(){document.getElementById("blocks").style.display="block",document.getElementById("privacy").style.display="none"}function closeBlock(){document.getElementById("privacy").style.display="block",document.getElementById("blocks").style.display="none"}function openSecurity(){document.getElementById("security").style.display="block",document.getElementById("settings").style.display="none"}function closeSecurity(){document.getElementById("settings").style.display="block",document.getElementById("security").style.display="none"}function openWallpaper(){document.getElementById("wallpaper").style.display="block",document.getElementById("settings").style.display="none"}function closeWallpaper(){document.getElementById("settings").style.display="block",document.getElementById("wallpaper").style.display="none"}function openRequest(){document.getElementById("request").style.display="block",document.getElementById("settings").style.display="none"}function closeRequest(){document.getElementById("settings").style.display="block",document.getElementById("request").style.display="none"}function openHelp(){document.getElementById("help").style.display="block",document.getElementById("settings").style.display="none"}function closeHelp(){document.getElementById("settings").style.display="block",document.getElementById("help").style.display="none"}function openStatus(){document.getElementById("status").style.display="block",document.getElementById("rightStatus").style.display="block",document.getElementById("Intro-Left").style.display="none",document.getElementById("right").style.display="none",document.getElementById("leftSid").style.display="none",document.getElementById("rightSide").style.display="none"}function closeStatus(){document.getElementById("leftSid").style.display="block",document.getElementById("Intro-Left").style.display="block",document.getElementById("right").style.display="flex",document.getElementById("rightSide").style.display="none",document.getElementById("status").style.display="none",document.getElementById("rightStatus").style.display="none"}$(document).ready(function(){$("#dropDown").click(function(e){$(".drop").toggle(400),e.stopPropagation()})}),$(".drop").click(function(e){e.stopPropagation()}),$(document).click(function(){$(".drop").fadeOut()}),$(document).ready(function(){$("#chat-popup").click(function(e){$(".popup").toggle(700),e.stopPropagation()})}),$(".popup").click(function(e){e.stopPropagation()}),$(document).click(function(){$(".popup").fadeOut()}),$(document).ready(function(){$("#dropDown2").click(function(e){$(".dropLeft").toggle(400),e.stopPropagation()})}),$(".dropLeft").click(function(e){e.stopPropagation()}),$(document).click(function(){$(".dropLeft").fadeOut()}),$(document).ready(function(){$("#emoji-icon").click(function(){$("#emoji-wrap").addClass("emojis__wrapper--active"),$(".hidden").show()}),$("#emoji-remove-icon").click(function(){$("#emoji-wrap").removeClass("emojis__wrapper--active"),$(".hidden").hide()})}),$(document).ready(function(){$("#closeChat").click(function(){$(".chat-list").removeClass("active")})});const moon=document.getElementById("moon");moon.onclick=function(){document.body.classList.toggle("light-theme"),document.body.classList.contains("light-theme")?moon.src="images/Moon-1.png":moon.src="images/Sun-1.png"};const select=document.querySelectorAll(".chat-list");select.forEach(e=>e.addEventListener("click",active));
/*----------------------------------------
Ahoy, fellow coder! ^_^
No sneaky shortcuts allowed! ಠ‿↼
Craft your own digital masterpiece! (ò_ó)ᕤ

For coding capers and design dreams,
Your web wizard is here to assist.
Contact: hammadattiq08@gmail.com

Connect with me on LinkedIn:
https://www.linkedin.com/in/devbysani/

INSTAGRAM:
https://www.instagram.com/devbysani/

Now, go code like a boss! (•_•)⌐■-■
----------------------------------------*/