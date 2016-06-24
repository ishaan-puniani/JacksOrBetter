<html>
    <head>
        <title>GOL | Jack Or Better</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="./css/reset.css" type="text/css">
        <link rel="stylesheet" href="./css/main.css" type="text/css">


        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,minimal-ui">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="msapplication-tap-highlight" content="no">
		<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '252841331749397',
      xfbml      : true,
      version    : 'v2.6'
    });
	console.log("FB",FB);
FB.getLoginStatus(function(response) {
  // Check login status on load, and if the user is
  // already logged in, go directly to the welcome message.
  console.log("FB response",response);
  if (response.status == 'connected') {
    onLogin(response);
  } else {
    // Otherwise, show Login dialog first.
    FB.login(function(response) {
      onLogin(response);
    }, {scope: 'user_friends, email'});
  }
});

	function echoSize() {
        $('#canvas').width(window.innerWidth).height(window.innerHeight);
        $('#canvas').css('cssText', 'height:'+window.innerHeight+'px !important;');
		$('#canvas').css('cssText', 'width:'+window.innerWidth+'px !important;');
      }
      echoSize();
      window.onresize = echoSize;
	 
	  
    // ADD ADDITIONAL FACEBOOK CODE HERE
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

        <script>
            var GAMEID = "JackOrBetter_Server";
        </script>

        <script type="text/javascript" src="./dist/production0.1.0.min.js"></script>
    </head>
    <body ondragstart="return false;" ondrop="return false;">
	   
        <canvas id="canvas" class="ani_hack" width="1920 " height="768"> </canvas>
        <div id="block_game" style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; display:none"></div>
<script>
// Place following code after FB.init call.

function onLogin(response) {
  if (response.status == 'connected') {
    FB.api('/me?fields=first_name', function(data) {
      init(data)
    });
  }
}

</script>
    </body>
</html>