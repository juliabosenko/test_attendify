'use strict';

AttendifyEventWall.startWall();

document.addEventListener('click',function(e){
	if(e.target && e.target.classList.contains("text"))
	{
		var parent = e.target.parentNode;
		var id  = parent.getAttribute('data-id');
		AttendifyEventWall.toggleBanMessage(id);
	}
});

