function EX_preloadImages() {
    return;
	var targetNode = document.getElementById('exlink');
	var newNode1 = document.createElement('div');
	newNode1.className = 'maincon  mgt10 textcenter';

	var newNode21 = document.createElement('p');
	newNode21.className = 'w96p mgl2p size18 bold borderbox';
	var newNode31 = document.createElement('a');
	newNode31.href = 'http://goo.gl/loSAOl'; //
	var textNode31 = document.createTextNode('�������オ��Ȃ����Ƃ��N�\��i�Ƀu�`�؂ꂽ���ʂ��������Ƃ�ł��Ȃ������Ɂc[PR]'); //
	newNode1.appendChild(newNode21);
	newNode21.appendChild(newNode31);
	newNode31.appendChild(textNode31);
	
	var newNode22 = document.createElement('p');
	newNode22.className = 'w96p mgl2p size18 bold borderbox';
	var newNode32 = document.createElement('a');
	newNode32.href = 'http://goo.gl/0DWycU'; //
	var textNode32 = document.createTextNode('�Q�X�΁A�����Q�R���̕����g���[�}�������T���~�҂����閧��\�I�������ʂ�������[PR]'); //
	newNode1.appendChild(newNode22);
	newNode22.appendChild(newNode32);
	newNode32.appendChild(textNode32);
	
	var newNode23 = document.createElement('p');
	newNode23.className = 'w96p mgl2p size18 bold borderbox';
	var newNode33 = document.createElement('a');
	newNode33.href = 'http://tankiokanekasegu.seesaa.net/'; //
	var textNode33 = document.createTextNode('�Z���Ԃł������҂����W'); //
	newNode1.appendChild(newNode23);
	newNode23.appendChild(newNode33);
	newNode33.appendChild(textNode33);
	
	targetNode.parentNode.replaceChild(newNode1, targetNode);
}
