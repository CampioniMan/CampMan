<?php
function is_ajax() {
		return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
	}
	if (is_ajax())
		echo "Esse hack falhou feio...";
	else
		echo "Por que se veio pra cá?";

?>