<?php
	$codigo   = ["ABCD1234",        "IDQEDL"];
	$resposta = ["97 Tarzans-nome", "1000-coord.vidas"];

	/**
	*   $_POST
	*	  $caracCodigo -> caracter a ser visto
	*     $indice      -> indice do caracCodigo
	*     $intDC       -> indice de qual codigo estamos lidando
	*/
	if (isset($_POST["caracCodigo"]) && trim($_POST["caracCodigo"]) != "" && isset($_POST["indice"]) && trim($_POST["indice"]) != "" && isset($_POST["intDC"]) && trim($_POST["intDC"]) != "")
	{
		$indice        = intval($_POST["indice"]);
		$codigoAtual   = $codigo[intval($_POST["intDC"])];
		$respostaAtual = $resposta[intval($_POST["intDC"])];

		if ($_POST["caracCodigo"] == substr($codigoAtual, $indice, 1))
			echo "s";
		else
			echo "n";
		if (strlen($codigoAtual) == $indice+1)
			echo $respostaAtual;
	}

?>