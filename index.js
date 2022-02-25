var cards = [
    { name: '1', url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRykrF9oZfo1NiPXHkdt1VOTxZbnjBfHh9Pw1AA8Ah-tz4EfJqcSA" },
    { name: '2', url: "img/yumewadoko.jpg" },
    { name: '3', url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXCVSZ8kqefQdih-7EJuRenh4VxBg3eAH6Z_mISF2BZgJ_bYW29A" },
    { name: '4', url: "img/som.jpg" },
    { name: '5', url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTeeLpXvjU0mQsoRsmC8ZT5PddwJ7QyvG2-E9Igel_fG_Gi8Cyg" },
    { name: '6', url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEJDUrrtrd6G0NumX-H84BbbrTNXu0k7DkYYnezJMSBf3EBL_nw" },
    { name: '7', url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQzsJhWM1AJJH_XMTMuTfUAVVDB20IjiqRmMgKXqtySw_OTK_0qew" },
    { name: '8', url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTe8ZrvwEiYua5OS6eM5H-TqUNKJiE3grTQg8flwoo4GU-k7fF0LQ" }
  ];
  var board = document.querySelector('.board');
  var selectedCard;
  var suspend = false;
  
  (function inbox() {
    
    var cards2 = shuffle(cards.concat(cards));
    
    cards2.forEach(function(card) {
      var div = document.createElement('div');
      div.className = 'card';
      div.cardName = card.name;
      var img = document.createElement('img');
      img.className = 'img';
      img.setAttribute('src', card.url);
      var cover = document.createElement('div');
      cover.className = 'cover'; 
      
      div.appendChild(img);
      div.appendChild(cover);
      board.appendChild(div);
      
      div.onclick = function() { 
        if (suspend) return;
        
        div.classList.add('show');
        
        if (!selectedCard) { 
          selectedCard = div;
        }
        else if(selectedCard.cardName === card.name) {
          delete selectedCard.onclick;
          delete div.onclick;
          selectedCard = null;
        }
        else {
          suspend = true;
          setTimeout(function() {
            selectedCard.classList.remove('show');
            div.classList.remove('show');
            selectedCard = null;
            suspend = false;
          }, 300);
        }
      }
    })
  }());
  
  
  function shuffle(array) {
    var currentI = array.length, etwas, randomI;
    
    while (0 !== currentI) {

      randomI = Math.floor(Math.random() * currentI);
      currentI -= 1;

      etwas = array[currentI];
      array[currentI] = array[randomI];
      array[randomI] = etwas;
    }
  
    return array;
  }