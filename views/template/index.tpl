{config_load "index.conf"}
<!DOCTYPE html>
<html>
	<head>
		<title>{#title#}</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="keywords" content="{#keywords#}" />
		<meta name="description" content="{#description#}" />
		<link rel="icon" type="image/png" href="favicon.png" />
		{foreach $disp.less as $less}
			<link rel="stylesheet/less" type="text/css" href="less/{$less}" />
		{/foreach}
		{foreach $disp.css as $css}
			<link rel="stylesheet" type="text/css" href="css/{$css}" />
		{/foreach}
		{foreach $disp.js as $js} {* JavaScript *}
			<script type="text/javascript" src="js/{$js}"></script>
		{/foreach}
	</head>
	<body>
		<div id="body">
			<noscript>{#no_script#}</noscript>
		</div>
	</body>
</html>
