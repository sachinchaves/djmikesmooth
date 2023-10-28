

function sendMsg(msg) { 
	alert(msg);
}

$('.music .tableRowWrapper').hover(
	function(){ $(this).addClass('active') },
	function(){ $(this).removeClass('active') }
);



let close = document.getElementById("close");
let modal = document.getElementById("modalContainer");
if(close){
	close.addEventListener('click', function(){
	modal.style.display = "none";
});
}

if(modal){
	setTimeout(function(){ 
	modal.style.display = "block";
}, 20000);
}

