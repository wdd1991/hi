	document.addEventListener('click',function(event){
		event.preventDefault();
	},false);
	//
	(function(){
	var good = document.getElementsByClassName('good')[0];
	var list = document.getElementsByClassName('list')[0];
	var liNodes = document.querySelectorAll('.list li');
	
	for(var i=0;i<liNodes.length;i++){
		liNodes[i].className='star';
	}
	})();