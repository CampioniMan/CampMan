<?php
	$codigo = "IDQEDL";
	if (isset($_POST["caracCodigo"]) && trim($_POST["caracCodigo"]) != "" && isset($_POST["indice"]) && trim($_POST["indice"]) != "")
	{
		if ($_POST["caracCodigo"] == substr($codigo, intval($_POST["indice"]), 1))
			echo "s";
		else
			echo "n";
		if (strlen($codigo) == intval($_POST["indice"])+1)
			echo "1000";
	}

?>