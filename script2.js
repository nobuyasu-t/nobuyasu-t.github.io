function EX_preloadImages() {
	var targetNode = document.getElementById('exlink');
	var newNode1 = document.createElement('div');
	newNode1.className = 'maincon  mgt10 textcenter';

	var newNode21 = document.createElement('p');
	newNode21.className = 'w96p mgl2p size18 bold borderbox';
	var newNode31 = document.createElement('a');
	newNode31.href = 'http://goo.gl/loSAOl'; //
	var textNode31 = document.createTextNode('給料が上がらないことをクソ上司にブチ切れた結果ｗｗｗ→とんでもない結末に…[PR]'); //
	newNode1.appendChild(newNode21);
	newNode21.appendChild(newNode31);
	newNode31.appendChild(textNode31);
	
	var newNode22 = document.createElement('p');
	newNode22.className = 'w96p mgl2p size18 bold borderbox';
	var newNode32 = document.createElement('a');
	newNode32.href = 'http://goo.gl/0DWycU'; //
	var textNode32 = document.createTextNode('２９歳、月収２３万の負け組リーマンが即５万円稼げた秘密を暴露した結果ｗｗｗｗ[PR]'); //
	newNode1.appendChild(newNode22);
	newNode22.appendChild(newNode32);
	newNode32.appendChild(textNode32);
	
	var newNode23 = document.createElement('p');
	newNode23.className = 'w96p mgl2p size18 bold borderbox';
	var newNode33 = document.createElement('a');
	newNode33.href = 'http://tankiokanekasegu.seesaa.net/'; //
	var textNode33 = document.createTextNode('短期間でお金を稼ぐ情報集'); //
	newNode1.appendChild(newNode23);
	newNode23.appendChild(newNode33);
	newNode33.appendChild(textNode33);
	
	targetNode.parentNode.replaceChild(newNode1, targetNode);
}
