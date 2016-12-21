var chance = Math.floor((Math.random() * 14) + 1);
if(chance === 1){
  new Audio(chrome.extension.getURL('telolet.m4a')).play();
  var div = document.createElement("div");
  div.className = "centered js-fade fade-in is-paused";
  div.innerHTML = "<img src='" + chrome.extension.getURL('telolet.png') + "' />";
  document.body.appendChild(div);
  var el = document.querySelector('.js-fade');
  if (el.classList.contains('is-paused')){
    el.classList.remove('is-paused');
  }
  setTimeout(function(){
      el.classList.add('fade-out');
  }, 3500);
}
