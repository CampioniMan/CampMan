<html>
	<head>
		<meta charset="utf-8">
		<title>CampMan - O Jogo</title>
		<script language="Javascript" type="text/javascript" src="api_js/jquery-1.12.2.min.js"></script>
		<script language="Javascript" type="text/javascript" src="api_js/fuckingClasses.js"></script>
		<script language="Javascript" type="text/javascript" src="api_js/fuckingFunctions.js"></script>
		<style type="text/css">
			fuckYouDallOca 
			{
				position: absolute;
				top: 800px;
				width: 500px;
				left: 50%; 
			    transform: translateX(-50%);
				border: 0px solid black;
				height: 170px;
			}
			#meuCanvas
			{
				position: absolute;
				left: 50%; 
			    transform: translateX(-50%);
			    border: 2px solid black;
			}
			img
			{
				visibility: hidden;
			}
			.player
			{
				width:  50px;
				height:  50px;
			}
			.monstro
			{
				width:  50px;
				height:  50px;
			}
			.atos
			{
				width:  50px;
				height:  50px;
			}
			.ponto
			{
				width:  50px;
				height:  50px;
			}
		</style>
	</head>
	<body>

		<canvas id="meuCanvas" class="myCanvas" width="1200" height="750" style="background: url(imgs/background.png);"></canvas>
		<fuckYouDallOca id = "FYD">
		</fuckYouDallOca>


		<!-- Suporte a mods!!! Você pode mudar essas imagens e colocar o comando da frente no Console (não use os comandos no onLoad)  -->
		<!-- Não retire o css das imagens, caso contrário o jogo bugará feio... -->
		
		<img src="imgs/playerGIF.gif"  id="play" class="player"  />   <!-- TCoisas.coord.skinAberta = document.getElementById("play");    -->
 		<img src="imgs/player2GIF.gif" id="play2" class="player"  />  <!-- TCoisas.coord.skinFechada = document.getElementById("play2");  -->
		<img src="imgs/monstro1.png" id="mon1" class="monstro"  />    <!-- TCoisas.imgMon1 = document.getElementById("mon1");             -->
		<img src="imgs/monstro2.png" id="mon2" class="monstro"  />    <!-- TCoisas.imgMon2 = document.getElementById("mon2");             -->
		<img src="imgs/monstro3.png" id="mon3" class="monstro"  />    <!-- TCoisas.imgMon3 = document.getElementById("mon3");             -->
		<img src="imgs/monstro4.png" id="mon4" class="monstro"  />    <!-- TCoisas.imgMon4 = document.getElementById("mon4");             -->
		<img src="imgs/monstro5.png" id="mon5" class="monstro"  />    <!-- TCoisas.imgMon5 = document.getElementById("mon5");             -->
		<img src="imgs/monstro6.png" id="mon6" class="monstro"  />    <!-- TCoisas.imgMon6 = document.getElementById("mon6");             -->
		<img src="imgs/demonic.png" id="dem" class="monstro"  />

		<img src="imgs/A.png" id="lmon1" class="monstro"  />    <!-- Não mude... -->
		<img src="imgs/M.png" id="lmon2" class="monstro"  />    <!-- Não mude... -->
		<img src="imgs/P.png" id="lmon3" class="monstro"  />    <!-- Não mude... -->
		<img src="imgs/M2.png" id="lmon4" class="monstro"  />   <!-- Não mude... -->
		<img src="imgs/A2.png" id="lmon5" class="monstro"  />   <!-- Não mude... -->
		<img src="imgs/N.png" id="lmon6" class="monstro"  />    <!-- Não mude... -->
		<img src="imgs/BackgroundRed.png" id="backRed" class="back"  />    <!-- Não mude... -->

		<img src="imgs/pa0.png"      id="pa0"  class="atos"  />       <!-- TCoisas.imgPa0  = document.getElementById("pa0");              -->
		<img src="imgs/pa1.png"      id="pa1"  class="atos"  />       <!-- TCoisas.imgPa1  = document.getElementById("pa1");              -->
		<img src="imgs/pa2.png"      id="pa2"  class="atos"  />       <!-- TCoisas.imgPa2  = document.getElementById("pa2");              -->
		<img src="imgs/pa3.png"      id="pa3"  class="atos"  />       <!-- TCoisas.imgPa3  = document.getElementById("pa3");              -->
		<img src="imgs/pa-1.png"     id="pan1" class="atos"  />       <!-- TCoisas.imgPan1 = document.getElementById("pan1");             -->
 		<img src="imgs/ponto1.png"   id="pt1"  class="ponto"  />      <!-- TCoisas.imgPt1  = document.getElementById("pt1");              -->
 		<img src="imgs/imgPreta.png" id="imgPreta"  />                <!-- Não mude... -->
 		<img src="imgs/imgBranca.png" id="imgBranca"  />              <!-- Não mude... -->
 		<img src="imgs/txtJogar.png" id="txtJogar"  />                <!-- Não mude... -->
 		<img src="imgs/txtReiniciar.png" id="txtReini"  />                <!-- Não mude... -->

 		<img src="imgs/btnNormal.png"   id="btnNormal"  />        <!-- Não mude... -->
 		<img src="imgs/btnHardcore.png" id="btnHardcore"  />      <!-- Não mude... -->
 		<img src="imgs/btnInsano.png"   id="btnInsano"  />        <!-- Não mude... -->
 		<img src="imgs/btnDesafios.png" id="btnDesafios"  />      <!-- Não mude... -->
 		<img src="imgs/seta.png" id="seta"  />                    <!-- Não mude... -->
 		<img src="imgs/coracao.png" id="coracao"  />              <!-- Não mude... -->
 		<img src="imgs/monstros.png" id="monstros"  />            <!-- Não mude... -->

 		<img src="imgs/doce_1.png" id="doce_1"  />            <!-- Não mude... -->

	</body>
</hmtl>