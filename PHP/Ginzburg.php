<?php
	$file = fopen("records.txt", "r");
	$qtosDados = 0;
	$meuVetor = array();
	while (!feof($file)) 
	{
		$meuVetor["nome"][$qtosDados] = fgets($file);
		$meuVetor["pontos"][$qtosDados] = floatval(fgets($file));
		$qtosDados++;
	}

	fclose($file);
		
	for ($indUm = 0; $indUm <= $qtosDados-1; $indUm++)
	{
		$menorP = 9007199254740992;
		for ($indDois = $indUm; $indDois <= $qtosDados-1; $indDois++) 
		{ 
			if ($meuVetor["pontos"][$indDois] <= $menorP) 
			{
				$menorP = $meuVetor["pontos"][$indDois];
				$atual = $indDois;
			}

		}

		$aux1 = $meuVetor["nome"][$indUm];
		$aux2 = $meuVetor["pontos"][$indUm];

		$meuVetor["nome"][$indUm] = $meuVetor["nome"][$atual];
		$meuVetor["pontos"][$indUm] = $meuVetor["pontos"][$atual];

		$meuVetor["nome"][$atual] = $aux1;
		$meuVetor["pontos"][$atual] = $aux2;
	}
	$ohyeah = $qtosDados-1;
	$pos = 1;
	$resp = "";
	$resp = "<b><p style='color:red; font-family:consolas; font-size: 20px;'>";
	$resp += $pos;
	$resp += "º - <font style='color:blue;'><u>";
	$resp += $meuVetor["nome"][$ohyeah];
	$resp += "</u></font> <font style='color:green; float:right;'>";
	$resp += $meuVetor["pontos"][$ohyeah];
	$resp += "</font></p></b>";
	$pos++;
	$ohyeah--;
	while ($ohyeah >= 0) 
	{
		$resp += "<b><p style='color:red; font-family:consolas; font-size: 20px;'>";
		$resp += $pos;
		$resp += "º - <font style='color:blue;'>";
		$resp += $meuVetor["nome"][$ohyeah];
		$resp += "</font> <font style='color:green; float:right;'>";
		$resp += $meuVetor["pontos"][$ohyeah];
		$resp += "</font></p></b>";
		$pos++;
		$ohyeah--;
	}

	echo $resp;
?>