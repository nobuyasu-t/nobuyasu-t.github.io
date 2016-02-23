function EX_preloadImages() {
	EX_preloadImages1();
	EX_preloadImages2();
	EX_preloadImages3();
}
//adsence
function EX_preloadImages1() {
	var elements = document.getElementsByTagName('h4');
	var targetH4 = elements[5];
	var targetP = targetH4.nextSibling;
	targetP = targetP.nextSibling;
	targetP.firstChild.innerHTML = targetP.firstChild.innerHTML + '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle"     style="display:inline-block;width:300px;height:250px"     data-ad-client="ca-pub-6640465892020911"     data-ad-slot="6673529312"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
}
//タイトル広告
function EX_preloadImages2() {
	var element = document.getElementById('text1');
	var target  = element.firstChild.nextSibling;
	target.innerHTML = target.innerHTML + '<a href="http://goo.gl/loSAOl">給料が上がらないことをクソ上司にブチ切れた結果ｗｗｗ→とんでもない結末に…[PR]</a>';
}

//	target.innerHTML = target.innerHTML + '<a href="http://goo.gl/0DWycU">２９歳、月収２３万の負け組リーマンが即５万円稼げた秘密を暴露した結果ｗｗｗｗ[PR]</a>';
//	target.innerHTML = target.innerHTML + '<a href="http://tankiokanekasegu.seesaa.net/">短期間でお金を稼ぐ情報集</a>';

//外部リンク
function EX_preloadImages3() {
	var element = document.getElementById('space2');
	var target = document.getElementsByTagNanme('p')[17];
	target = target.getElementsByTagNanme('a')[0];
	target.href = 'http://tankiokanekasegu.seesaa.net/';
}
window.onload=EX_preloadImages
