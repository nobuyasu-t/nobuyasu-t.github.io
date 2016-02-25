function EX_preloadImages() {
	EX_preloadImages1();
	EX_preloadImages1b();
	EX_preloadImages2();
	EX_preloadImages3();
}
//adsence
function EX_preloadImages1() {
/*
	var elements = document.getElementsByTagName('h4');
	var targetH4 = elements[5];
	var targetP = targetH4.nextSibling;
	targetP = targetP.nextSibling;
//	targetP.lastElementChild.outerHTML = targetP.lastElementChild.outerHTML + '
	var targetLastA = targetP.lastChild;
*/

	var newNode1 = document.createElement('p');
	newNode1.style = 'max-width:100%; height: auto;';
	newNode1.style.maxWidth = '100%';
	newNode1.style.height = 'auto';

	var newNode1_1 = document.createElement('script');
	newNode1_1.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

	var newNode1_2 = document.createElement('ins');
	newNode1_2.className='adsbygoogle';
	newNode1_2.style.display = 'inline-block';
	newNode1_2.style.width = '300px';
	newNode1_2.style.height = '250px';
	newNode1_2.setAttribute('data-ad-client', 'ca-pub-6640465892020911');
	newNode1_2.setAttribute('data-ad-slot', '6673529312');

	var newNode1_3 = document.createElement('script');
	newNode1_3.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";

	newNode1.appendChild(newNode1_1);
	newNode1.appendChild(newNode1_2);
	newNode1.appendChild(newNode1_3);

//	targetLastA.parentNode.replaceChild(newNode1, targetLastA);

	var element = document.getElementById('space2');
	var target = element.getElementsByTagName('center');
	target = target[1];
	target.appendChild(newNode1_1);
	target.appendChild(newNode1_2);
	target.appendChild(newNode1_3);

}
function EX_preloadImages1b() {
	var newNode1_1 = document.createElement('script');
	newNode1_1.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

	var newNode1_2 = document.createElement('ins');
	newNode1_2.className='adsbygoogle';
	newNode1_2.style.display = 'inline-block';
	newNode1_2.style.width = '300px';
	newNode1_2.style.height = '250px';
	newNode1_2.setAttribute('data-ad-client', 'ca-pub-6640465892020911');
	newNode1_2.setAttribute('data-ad-slot', '6710082510');

	var newNode1_3 = document.createElement('script');
	newNode1_3.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";

	var element = document.getElementById('space2');
	var target = element.getElementsByTagName('center');
	target = target[0];
	target.appendChild(newNode1_1);
	target.appendChild(newNode1_2);
	target.appendChild(newNode1_3);

}

//タイトル広告
function EX_preloadImages2() {
	var element = document.getElementById('text1');
	var target  = element.firstChild.nextSibling;
	target.innerHTML = target.innerHTML + '<br/><br/><a href="http://goo.gl/loSAOl">給料が上がらないことをクソ上司にブチ切れた結果ｗｗｗ→とんでもない結末に…[PR]</a>';
	target.innerHTML = target.innerHTML + '<br/><a href="http://goo.gl/0DWycU">２９歳、月収２３万の負け組リーマンが即５万円稼げた秘密を暴露した結果ｗｗｗｗ[PR]</a>';
}

//	target.innerHTML = target.innerHTML + '<a href="http://tankiokanekasegu.seesaa.net/">短期間でお金を稼ぐ情報集</a>';

//外部リンク
function EX_preloadImages3() {
	var element = document.getElementById('space2');
	var target = element.getElementsByTagName('span');
	target = target[5];
	target = target.getElementsByTagName('p');
	target = target[0];
	target = target.getElementsByTagName('a');
	target = target[0];
	target.href = 'http://tankiokanekasegu.seesaa.net/';
}
window.onload=EX_preloadImages
