<?php
	session_start();
	function is_ajax() {
		return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
	}
	//echo $_SESSION["oi"];
	if (is_ajax())
		$_SESSION["oi"] = "oi";
	else
		session_unset(); 
?>