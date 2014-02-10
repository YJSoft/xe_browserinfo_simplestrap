jQuery(function($){
	var agt = navigator.userAgent.toLowerCase();
	var output = $('div.browser_widget_wrap');
	//document.write(agt);
	
	
	if (agt.indexOf("safari") != -1 ){ //사파리
		$(output).html('<a title='+agt+'><img src="widgets/browserWidget/skins/default/img/safari.png" alt="safari" />'+browser_comment1+'사파리'+browser_comment2+'</a>');
	}
	if (agt.indexOf("firefox") != -1 ){ //파이어폭스
		$(output).html('<a title='+agt+'><img src="widgets/browserWidget/skins/default/img/firefox.png" alt="firefox" />'+browser_comment1+'파폭'+browser_comment2+'</a>');
	}
	if (agt.indexOf("msie") != -1 || agt.indexOf("trident") != -1){ //익스10이하 , 익스11
		$(output).html('<a title='+agt+'><img src="widgets/browserWidget/skins/default/img/ie.png" alt="ie" />'+browser_comment1+'익스'+browser_comment2+'</a>');
	}
	if (agt.indexOf("opera") != -1 ){ //오페라
		$(output).html('<a title='+agt+'><img src="widgets/browserWidget/skins/default/img/opera.png" alt="opera" />'+browser_comment1+'오페라'+browser_comment2+'</a>');
	}
	if (agt.indexOf("chrome") != -1 ){ //크롬
		$(output).html('<a title='+agt+'><img src="widgets/browserWidget/skins/default/img/chrome.png" alt="chrome" />'+browser_comment1+'크롬'+browser_comment2+'</a>');
	}
	if (agt.indexOf("boat") != -1 ){ //보트
		$(output).html('<a title='+agt+'><img src="widgets/browserWidget/skins/default/img/boat.png" alt="boat" />'+browser_comment1+'보트'+browser_comment2+'</a>');
	}
	if (agt.indexOf("dolphin") != -1 ){ //돌핀
		$(output).html('<a title='+agt+'><img src="widgets/browserWidget/skins/default/img/dolphin.png" alt="dolphin" />'+browser_comment1+'돌핀'+browser_comment2+'</a>');
	}
	if (agt.indexOf("puffin") != -1 ){ //퍼핀
		$(output).html('<a title='+agt+'><img src="widgets/browserWidget/skins/default/img/puffin.png" alt="puffin" />'+browser_comment1+'퍼핀'+browser_comment2+'</a>');
	}
	if (agt.indexOf("sleipnir") != -1 ){ //sleipnir
		$(output).html('<a title='+agt+'><img src="widgets/browserWidget/skins/default/img/sleipnir.png" alt="sleipnir" />'+browser_comment1+'sleipnir'+browser_comment2+'</a>');
	}
	
});