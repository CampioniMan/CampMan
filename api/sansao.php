<?php
	if (isset($_GET["tipo"]) && $_GET["tipo"] != "")
	{
		$file = fopen("records.txt", "r");
		$qtosDados = 0;
		$meuVetor = array();
		while (!feof($file)) 
		{
			$meuVetor["modo"][$qtosDados] = trim(fgets($file));
			$meuVetor["pontos"][$qtosDados] = floatval(fgets($file));
			$meuVetor["nome"][$qtosDados] = fgets($file);
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
			$aux3 = $meuVetor["modo"][$indUm];

			$meuVetor["nome"][$indUm] = $meuVetor["nome"][$atual];
			$meuVetor["pontos"][$indUm] = $meuVetor["pontos"][$atual];
			$meuVetor["modo"][$indUm] = $meuVetor["modo"][$atual];

			$meuVetor["nome"][$atual] = $aux1;
			$meuVetor["pontos"][$atual] = $aux2;
			$meuVetor["modo"][$atual] = $aux3;
		}
		$ohyeah = $qtosDados-1;
		$pos = 1;
		while ($ohyeah >= 0) {
			if ($meuVetor["modo"][$ohyeah] == $_GET["tipo"])
			{
				echo "<b><p style='color:red; font-family:consolas; font-size: 20px;'>";
				echo $pos;
				echo "º - <font style='color:blue;'>";
				echo $meuVetor["nome"][$ohyeah];
				echo "</font> <font style='color:green; float:right;'>";
				echo $meuVetor["pontos"][$ohyeah];
				echo "</font></p></b>";
				$pos++;
			}
			
			$ohyeah--;
		}
	}
?>