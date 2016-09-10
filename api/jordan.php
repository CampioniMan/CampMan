<?php

session_start();

function is_ajax() {
        return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
    }

if (isset($_POST['trem']) && is_ajax())
{
	if ($_SESSION['pt'] == $_POST['trem'] || $_SESSION['pt'] == $_POST['trem']+10)
	{
		$_SESSION['pt'] = $_POST['trem'];
		echo json_encode($_SESSION['oi']);
	}
	else
	{
		echo json_encode(array("não..."));
	}

}
else
{
	echo "Achou que ia ser tão fácil assim?";
}

?>