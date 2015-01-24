$(function(){
  
  
(function($) {
    
    //create an element and add it to the DOM
    $('<button></button>',{
      text: "click Me",
      class: "mybtn"
    })
      //.insertAfter('p:first');
      //.insertBefore('p:nth-last-child(1)');
      //.prependTo('p:nth-child(2)');
      //.appendTo('p:nth-child(2)');
      //.appendTo('article p:nth-child(n+2)');
        .appendTo('.dl-article');
    
})(jQuery);
//
    
(function($){
   // Extend the odject prototype 
   // $.fn.extend({
        
   // })
    var i = 0;
    var button = '<button></button>';
    
    $('.slider').hide()
    $('.slider').first().show();
   // add buttons
    $(button, {
        text: 'Prev',
        class: 'dl-prev'
    }).appendTo('ul');
    $(button, {
        text: 'Next',
        class: 'dl-nex'
    }).appendTo('ul');
    $(button, {
        text: 'Auto',
        class: 'dl-auto'
    }).appendTo('ul');
    
    //the action of clicking next button
    
    //auto
    setInterval(function(){ 
        
        $('.slider')
            .eq(i)
            .hide();
            i++;
       if (i>2) i = 0;
            $('.slider').eq(i).fadeIn(2000);
                   
    }, 4000);
    
    //next
    $('.dl-nex').on('click',function(){
        
        $('.slider').eq(i).hide();
        i++;
       if (i>2) i = 0; $('.slider').eq(i).fadeIn(2000);       
    });
    
    //prev
    $('.dl-prev').on('click', function(){
        $('.slider').eq(i).hide();
        i--;
        if (i<0) i = 2;
        $('.slider').eq(i).fadeIn(2000);
    });
    
})(jQuery);
    

    
    
})