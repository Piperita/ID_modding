//functionality hide-button
function clickHideButton(instance) {
 instance.nextSibling.style.display = 'none'
}

//functionality show-button
function clickShowButton(instance) {
  //Youtube
  if (/.*[Yy]outube.*/.test(instance.previousSibling.href) == true && /.*m\.[Yy]outube.*/.test(instance.previousSibling.href) == false) {
    ausl    = instance.previousSibling.href.replace("watch?v=", "embed/");
    instance.nextSibling.nextSibling.src = ausl;
    instance.nextSibling.nextSibling.style.display = 'block'
  //youtu.be
  } else if (/.*[Yy]outu.be.*/.test(instance.previousSibling.href) == true){
      ausl    = instance.previousSibling.href.replace("youtu.be", "www.youtube.com/embed/");
      instance.nextSibling.nextSibling.src = ausl;
      instance.nextSibling.nextSibling.style.display = 'block'   
  //m.youtube
  } else if (/.*m\.[Yy]outube.*/.test(instance.previousSibling.href) == true){
      ausl    = instance.previousSibling.href.replace("watch?v=", "embed/").replace("m.you","www.you");
      instance.nextSibling.nextSibling.src = ausl;
      instance.nextSibling.nextSibling.style.display = 'block'    
  //vine
  } else if (/.*vine\.co.*/.test(instance.previousSibling.href) == true){
      instance.nextSibling.nextSibling.src = instance.previousSibling.href+'/embed/simple';
      instance.nextSibling.nextSibling.style.display = 'block'
  //twitter
  } else if (/https?\:\/\/t\.co.*/.test(instance.previousSibling.href) == true || /.*twitter\.com*/.test(instance.previousSibling.href) == true){
      ausl     = instance.previousSibling.href.replace(":", "%3A").replace("/","%2F");
      instance.nextSibling.nextSibling.src = "http://twitframe.com/show?url="+ausl
      instance.nextSibling.nextSibling.style.display = 'block'
  //ToggleEQD mobile
  } else if (/.*equestriadaily\.com.*/.test(instance.previousSibling.href) == true){
      //If mobile return mobile
      if (/.*\?m=1.*/.test(instance.previousSibling.href) == true){ 
        instance.nextSibling.nextSibling.src = instance.previousSibling.href
        instance.nextSibling.nextSibling.style.display = 'block'
      //If explicit dektop turn mobile
      } else if (/.*\?m=0.*/.test(instance.previousSibling.href) == true){ 
        ausl     = instance.previousSibling.href.replace("?m=0", "?m=1");
        instance.nextSibling.nextSibling.src = ausl  
        instance.nextSibling.nextSibling.style.display = 'block'
      //If main site return mobile
      } else if (/.*equestriadaily\.com\/?$/.test(instance.previousSibling.href) == true) { 
        ausl     = instance.previousSibling.href.replace(".com/", ".com").replace(".com", ".com?m=1");
        instance.nextSibling.nextSibling.src = ausl
        instance.nextSibling.nextSibling.style.display = 'block'
      //If post turn mobile
      } else { 
        ausl     = instance.previousSibling.href.replace(".html", ".html?m=1");
        instance.nextSibling.nextSibling.src = ausl
        instance.nextSibling.nextSibling.style.display = 'block'
      }
  // Return null when livestream.com (redirect) or twitch.tv (system for embed unclear)
  } else if (/.*livestream\.com.*/.test(instance.previousSibling.href) == true || /.*twitch\.tv*/.test(instance.previousSibling.href) == true){
    //add notice later
  //everything else
  } else {
      instance.nextSibling.nextSibling.src = instance.previousSibling.href
      instance.nextSibling.nextSibling.style.display = 'block'  
  }
}

//Adds elements
function popupLinks() {
  $('.idc-c-t-inner').find('a').after("<iframe id='frameBoard' class='popClass' src='about:blank'></iframe>");
  frameWidth =$('.popClass'); frameClass=frameWidth;
  frameWidth =frameWidth[0].parentElement.clientWidth;
  frameHeight=parseInt(frameWidth*0.5625)+'px';
  frameWidth =parseInt(frameWidth)+'px';
  frameClass.css('width', frameWidth).css('height', frameHeight);
  $('.idc-c-t-inner').find('a').after("<button type='button' onclick='clickHideButton(this)' class='popBut'>-</button>")
  $('.idc-c-t-inner').find('a').after("<button type='button' onclick='clickShowButton(this)' class='popBut'>+</button>")
  $('.popClass').css({display: 'none'})
  $('.popBut').css('color','#154A7F').css('backgroundColor','#eeeeee').css('font-weight','700').css('fontSize','9px')
};

popupLinks();
