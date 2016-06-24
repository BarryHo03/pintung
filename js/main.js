
function deselect(selectItem, popoutItem) {
  $(popoutItem).slideFadeToggle(function() {
    selectItem.removeClass('selected');
  });    
}

function popout(selectItem, popoutItem){
 	$(selectItem).on('click', function() {
     if($(this).hasClass('selected')) {
        deselect($(this),popoutItem);               
      } else {
        $(this).addClass('selected');
        $(popoutItem).slideFadeToggle();
      }
    return false;
  	});	
}

function close(selectItem,closeItem,popoutItem){
	$(closeItem).on('click', function() {
		deselect($(selectItem),popoutItem);
		return false;
	});
}



//#1 breakfast introduce
popout('#intro_link1','#f1');
close('#intro_link1','#c1', '#f1');




$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle'}, 'fast', easing, callback);
};
