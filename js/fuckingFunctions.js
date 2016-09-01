var Derived = function()
{
};

Derived.prototype = new TPontos();

var TCoisas = {

    canvas   : document.getElementById("meuCanvas"),
	nome     : "Noob1",
	tamanhoPersonagem : 50,
	salvando : false,
	sarvo    : 1,
	timer    : 0,
	modo     : "Normal",
	qtasReiniciar : 240,
	coord    : new TPersonagemPri(570, 400),
	pontosAntigos : 0,
	pontos   : new Derived(),

	ondePontos : new Array(
		        new TPontuacao(55, 38), 
				new TPontuacao(320,  38),
				new TPontuacao(830, 38),
				new TPontuacao(1088, 38),
		        new TPontuacao(170,  140), 
				new TPontuacao(445,  140),
				new TPontuacao(715,  140),
				new TPontuacao(970,  140),
				new TPontuacao(55,   250),
				new TPontuacao(1088, 250),
				new TPontuacao(320,   344),
				new TPontuacao(830,   344),
				new TPontuacao(445,  400),
				new TPontuacao(715,  400),
				new TPontuacao(55,   450),
				new TPontuacao(1088,   450),
				new TPontuacao(170,   555),
				new TPontuacao(445,   555),
				new TPontuacao(715,   555),
				new TPontuacao(970,   555),
				new TPontuacao(55,   660),
				new TPontuacao(320,   660),
				new TPontuacao(830,   660),
				new TPontuacao(1088,   660)),


	monstros : new Array(new TPersonagemAgr(575, 270, document.getElementById("mon1")),new TPersonagemAgr(575, 270, document.getElementById("mon2")),new TPersonagemAgr(575, 270,document.getElementById("mon3")),
		                 new TPersonagemAgr(575, 270, document.getElementById("mon4")),new TPersonagemAgr(575, 270, document.getElementById("mon5")),new TPersonagemAgr(575, 270, document.getElementById("mon6"))), 
                                 
	buracos  : new Array(new TBuraco(55,   38,  2, new Array(1, 3)),    
						 new TBuraco(320,  38,  3, new Array(1, 2, 3)), 
						 new TBuraco(830,  38,  3, new Array(1, 2, 3)), 
						 new TBuraco(1088, 38,  2, new Array(1, 2)),   

		                 new TBuraco(55,   140, 2, new Array(0, 3)),   
		                 new TBuraco(170,  140, 3, new Array(1, 2, 3)),	
		                 new TBuraco(320,  140, 4, new Array(0, 1, 2, 3)), 
		                 new TBuraco(445,  140, 3, new Array(1, 2, 3)), 
		                 new TBuraco(575,  140, 2, new Array(2, 3)),   
		                 new TBuraco(715,  140, 3, new Array(1, 2, 3)), 
		                 new TBuraco(830,  140, 4, new Array(0, 1, 2, 3)), 
		                 new TBuraco(970,  140, 3, new Array(1, 2, 3)), 
		                 new TBuraco(1088, 140, 2, new Array(0, 2)),   

		                 new TBuraco(55,   250, 2, new Array(1, 3)),  
		                 new TBuraco(170,  250, 2, new Array(0, 2)),    
		                 new TBuraco(970,  250, 2, new Array(0, 3)),   
		                 new TBuraco(1088, 250, 2, new Array(1, 2)),   

		                 new TBuraco(55,   344, 3, new Array(0, 1, 3)),
		                 new TBuraco(320,  344, 3, new Array(0, 1, 2)),
		                 new TBuraco(830,  344, 3, new Array(0, 1, 3)),
		                 new TBuraco(1088, 344, 3, new Array(0, 1, 2)),

	 				     new TBuraco(445,  400, 3, new Array(0, 1, 3)),
		                 new TBuraco(715,  400, 3, new Array(0, 1, 2)), 

		                 new TBuraco(55,   450, 2, new Array(0, 3)),   
		                 new TBuraco(170,  450, 2, new Array(1, 2)),   
		                 new TBuraco(970,  450, 2, new Array(1, 3)),   
		                 new TBuraco(1088, 450, 2, new Array(0, 2)),  

		                 new TBuraco(55,   555, 2, new Array(1, 3)),    
		                 new TBuraco(170,  555, 3, new Array(0, 2, 3)), 
		                 new TBuraco(320,  555, 4, new Array(0, 1, 2, 3)), 
		                 new TBuraco(445,  555, 3, new Array(0, 2, 3)), 
		                 new TBuraco(715,  555, 3, new Array(0, 2, 3)),
		                 new TBuraco(830,  555, 4, new Array(0, 1, 2, 3)), 
		                 new TBuraco(970,  555, 3, new Array(0, 2, 3)), 
		                 new TBuraco(1088, 555, 2, new Array(1, 2)),    

		                 new TBuraco(55,   660, 2, new Array(0, 3)),   
		                 new TBuraco(320,  660, 3, new Array(0, 2, 3)), 
		                 new TBuraco(830,  660, 3, new Array(0, 2, 3)), 
		                 new TBuraco(1088, 660, 2, new Array(0, 2))    
		                 ),

	botoes : new Array(new TBotao(430, 385, false, document.getElementById("btnDesafios")),
		                new TBotao(630, 385, true, document.getElementById("btnNormal")),
		                new TBotao(830, 385, false, document.getElementById("btnInsano")),
		                new TBotao(1030, 385, false, document.getElementById("btnHardcore"))),

    imgMon1  : document.getElementById("mon1"),
	imgMon2  : document.getElementById("mon2"),
	imgMon3  : document.getElementById("mon3"),
	imgMon4  : document.getElementById("mon4"),
	imgMon5  : document.getElementById("mon5"),
	imgMon6  : document.getElementById("mon6"),
	imgPa0   : document.getElementById("pa0"),
	imgPa1   : document.getElementById("pa1"),
	imgPa2   : document.getElementById("pa2"),
	imgPa3   : document.getElementById("pa3"),
	imgPan1  : document.getElementById("pan1"),
	imgPt1   : document.getElementById("pt1"),
	js       : document.createElement("script"),
	seta     : document.getElementById("seta"),
	telaInicio : null,
	jaComecou  : false,
	context    : null,
	cont       : 150,

	colidiuMonstro : function()
	{
		for (var cont1 = 0; cont1 < this.monstros.length; cont1++) 
		{
			if (this.coord.colidiuCom(this.monstros[cont1], TCoisas.tamanhoPersonagem))
			{
				this.coord.renascer();
				return true;
			}
		}
		return false;
	},

	desenharBotoes : function() 
	{
		for (var i = 0; i <= this.botoes.length-1; i++)
		{
			if (this.botoes[i].estaSelecionado)
				this.context.drawImage(this.seta, this.botoes[i].xis, this.botoes[i].ipi- this.botoes[i].altura);
			this.botoes[i].desenhar(this.context);
		}
	},

	desenharMonstros : function()
	{
		for (var i = 0; i < TCoisas.monstros.length; i++)
			this.monstros[i].desenhar(this.context);
	},

	desenharPlayer : function()
	{
		this.context.translate(this.coord.xisD, this.coord.ipiD);
		this.context.rotate(this.coord.angulo);

		this.context.drawImage(this.coord.skinAtual, 0, 0);

		this.context.rotate(-this.coord.angulo);
		this.context.translate(-this.coord.xisD, -this.coord.ipiD);
	},

	inicioDoJogo : function()
	{
		this.cont--;
		this.context.font = "100px Consolas";
		this.context.fillStyle = "rgb(63, 139, 204)";
		if (this.cont > 100)
		{
			this.context.fillText("3", 575, 375);
			return false;
		}
		if (this.cont > 50)
		{
			this.context.fillText("2", 575, 375);
			return false;
		}
		if (this.cont > 0)
		{
			this.context.fillText("1", 575, 375);
			return false;
		}
		this.context.fillStyle = "rgb(0, 0, 0)";
		return true;
	},

	calcularProximaPos : function()
	{	
		for (var indice = 0; indice <= this.buracos.length-1; indice++)
		{
			for (var cont1 = 0; cont1 < this.monstros.length; cont1++)
			{
				if (this.monstros[cont1].estaEmCimaDe(this.buracos[indice]))
				{
					rand = Math.random();

					auxiliar = this.buracos[indice].escolherSaidaRandomica(rand);

					if (this.ehInverso(auxiliar, this.monstros[cont1].proxAct))
					{
						this.monstros[cont1].proxAct = this.buracos[indice].escolherSaidaRandomica(1-rand);
					}
					else
					{
						this.monstros[cont1].proxAct = auxiliar;
					}
				}
				
			}	
			
			if (this.coord.estaEmCimaDe(this.buracos[indice]) && indice != 8)
			{
				rand = Math.random();
				if (this.coord.proxAct != -1 && this.buracos[indice].temSaidaPara(this.coord.proxAct))
				{
					this.coord.atualAct = this.coord.proxAct;
					this.coord.proxAct = -1;			
				}
				else
				{
					if (!this.buracos[indice].temSaidaPara(this.coord.atualAct)) 
					{
						auxiliar = this.buracos[indice].escolherSaidaRandomica(rand);
					
						if (this.ehInverso(auxiliar, this.coord.atualAct))
							this.coord.alterarAct(this.buracos[indice].escolherSaidaRandomica(1-rand));
						else
						{
							this.coord.alterarAct(auxiliar);	
						}
					}
				}
			}
		}
		for (var i = 0; i < TCoisas.monstros.length; i++)
			this.monstros[i].andar();

		this.coord.andar();
	},

	ehInverso : function(i, i2)
	{
		if ((i < 2 && i2 < 2) || (i > 1 && i2 > 1))
			return true;
		return false;
	},

	desenharCabecalho : function()
	{
		this.context.font = "20px Georgia";
		this.context.fillText("Pontos: "+ this.pontos.getPontos() + "    Vidas: "+ this.coord.vidas, 15, 15);
		if (this.salvando)
			this.context.fillText("Enviando record", 490, 625);
	},

	limparTela : function()
	{
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.beginPath();
	},

	desenharPontos : function()
	{
		for (var indice = 0; indice <= this.ondePontos.length-1; indice++)
			if (this.ondePontos[indice].vale != false) 
				this.context.drawImage(this.imgPt1, this.ondePontos[indice].xis, this.ondePontos[indice].ipi);
	},

	salvarRecord : function()
	{
		if (this.sarvo == 2)
		{
			this.sarvo = 1;
			this.limparTela();
			this.salvando = true;
			this.sarvo++;
			$.ajax({
	            url: 'PHP/guliver.php',
	            type: 'POST',
	            data: {
	                "addItem": TCoisas.nome,
	                "addItem2": TCoisas.pontos.getPontos(),
	                "addItem3": TCoisas.modo,
	                "removeItem3": TCoisas.coord.vidas,
	            },
	            success: function(trenzaum, burro, trem){
	            	fruits = [TCoisas.nome];
	            	if (trenzaum.toString().trim() != "[\""+fruits.toString()+"\"]") /* quero que caia no else */
	            	{
	            		document.location.href = "pa-1.png";
	            	}
	            	else
	            	{
	            		TCoisas.salvando = false;
	            		TCoisas.atualizarRecods();
	            	}
	            		
	            },
	            error: function(XMLHttpRequest, textStatus, errorThrown)
	            {
	            	
	            }
	        });
		}
	},

	atualizarRecods : function()
	{
		$.ajax({
	            url: 'PHP/sansao.php',
	            type: 'POST',
	            data: {
	            	"getFuckingItem1": TCoisas.modo
	            },
	            success: function(trenzaum, burro, trem){
	            	document.getElementById("FYD").innerHTML = trenzaum;
	            		
	            },
	            error: function(XMLHttpRequest, textStatus, errorThrown) /* nunca vai cair aqui */
	            {
	            	document.getElementById("FYD").innerHTML = "Ocorreu um erro na obtenção de recods!";
	            }
	        });
		
	},

	verSePontuou : function()
	{
		for (var indice = 0; indice <= this.ondePontos.length-1; indice++)
			if (this.ondePontos[indice].vale != false) 
				if (this.coord.colidiuComMoeda(this.ondePontos[indice], TCoisas.tamanhoPersonagem))
				{
					for (var auxas = 0; auxas < 10; auxas++)
						this.pontos.SetPontos(auxas);
					this.ondePontos[indice].mudarVale(false);
				}
	},

	ganhou : function()
	{
		return this.pontos.getPontos() == this.qtasReiniciar;
	},

	reiniciar : function()
	{
		for (var indice = 0; indice <= this.ondePontos.length-1; indice++)
			this.ondePontos[indice].mudarVale(true);
		for (var cont1 = 0; cont1 < this.monstros.length; cont1++)
		{
			this.monstros[cont1].xis = 575;
			this.monstros[cont1].ipi = 270;
			this.monstros[cont1].proxAct = 0;
		}
		this.timer = 0;
		this.coord.atualAct = 3;
		this.coord.proxAct = -1;
		this.coord.xis = 570;
		this.coord.ipi = 400;
	},

	validarScore : function () 
	{
		if (!(this.pontosAntigos == this.pontos.getPontos() || this.pontosAntigos == this.pontos.getPontos()+10 || this.pontos.getPontos() % 240 == 0 || this.pontos.getPontos() == 0))
		{
			$.ajax({
		            url: 'PHP/hummels.php',
		            success: function(trenzaum, burro, trem){
		            	alert(trenzaum);
		            	document.location.href = "pa-1.png";

		            },
		            error: function(XMLHttpRequest, textStatus, errorThrown)
		            {
		            	document.location.href = "pa-1.png";
		            }
		        });
		}
		this.pontosAntigos = this.pontos.getPontos();
	},

	gameLoop : function()
	{
		if (TCoisas.jaComecou) /* Jogo iniciado */
		{
			if (TCoisas.modo == "Normal")
			{
				TCoisas.limparTela();
				if (TCoisas.timer > 1000)
					TCoisas.fechar();
				if (TCoisas.inicioDoJogo())
				{
					TCoisas.timer++;
					if (!TCoisas.coord.morreu())
					{
						if (!TCoisas.ganhou())
						{
							if (!TCoisas.colidiuMonstro()) 
							{
								TCoisas.calcularProximaPos();
								TCoisas.verSePontuou();
								TCoisas.desenharPontos();
								TCoisas.trocarSprites();
								TCoisas.desenharPlayer();
								TCoisas.desenharMonstros();
								TCoisas.desenharCabecalho();
							}
						}
						else /* Ganhou */
						{
							TCoisas.reiniciar();
							TCoisas.qtasReiniciar += 240;
						}
					}
					else /* perdeu */
					{
						if (TCoisas.sarvo == 1)
						{
							TCoisas.sarvo++;
							$.ajax({
					            url: 'PHP/einstein.php',
					            success: function(trenzaum, burro, trem){
					            	
					            },
					            error: function(XMLHttpRequest, textStatus, errorThrown)
					            {
					            	document.location.href = "pa-1.png";
					            }
					        });
						}
						TCoisas.salvarRecord();
						TCoisas.reiniciar();
						TCoisas.qtasReiniciar = 240;
						TCoisas.pontos.SetPonto();
						TCoisas.coord.vidas = 3;
					}
				}
			}
			else if (TCoisas.modo == "Insano")
			{
				/* Fazer o modo INSANO */
				TCoisas.limparTela();
				
			}
			else if (TCoisas.modo == "Hardcore")
			{
				/* Fazer o modo HARDCORE */
				TCoisas.limparTela();
				if (TCoisas.timer > 1000)
					TCoisas.fechar();
				if (TCoisas.inicioDoJogo())
				{
					TCoisas.timer++;
					if (!TCoisas.coord.morreu())
					{
						if (!TCoisas.ganhou())
						{
							if (!TCoisas.colidiuMonstro()) 
							{
								TCoisas.calcularProximaPos();
								TCoisas.verSePontuou();
								TCoisas.desenharPontos();
								TCoisas.trocarSprites();
								TCoisas.desenharPlayer();
								TCoisas.desenharMonstros();
								TCoisas.desenharCabecalho();
							}
						}
						else /* Ganhou */
						{
							TCoisas.reiniciar();
							TCoisas.qtasReiniciar += 240;
						}
					}
					else /* perdeu */
					{
						if (TCoisas.sarvo == 1)
						{
							TCoisas.sarvo++;
							$.ajax({
					            url: 'PHP/einstein.php',
					            success: function(trenzaum, burro, trem){
					            	
					            },
					            error: function(XMLHttpRequest, textStatus, errorThrown)
					            {
					            	document.location.href = "pa-1.png";
					            }
					        });
						}
						TCoisas.salvarRecord();
						TCoisas.reiniciar();
						TCoisas.qtasReiniciar = 240;
						TCoisas.pontos.SetPonto();
						TCoisas.coord.vidas = 3;
					}
				}
			}
			else
			{
				/* Fazer o modo DESAFIOS */
			}
		}
		else /* Menu Inicial */
		{
			TCoisas.telaInicio.run();
		}
	},

	fechar : function()
	{
		this.context.fillStyle = "rgb(11, 58, 221)";
		this.context.fillRect(557, 195, 111, 12);
		this.context.fillStyle = "#000000";
	},

	trocarSprites : function()
	{
		if (this.coord.proxAct == -1)
			this.context.drawImage(this.imgPan1, 583, 342);
		else
		{
			if (this.coord.proxAct == 0)
				this.context.drawImage(this.imgPa0, 583, 342);
			else
			{
				if (this.coord.proxAct  == 1)
					this.context.drawImage(this.imgPa1, 583, 342);
				else
				{
					if (this.coord.proxAct == 2)
						this.context.drawImage(this.imgPa2, 583, 342);
					else
					{
						this.context.drawImage(this.imgPa3, 583, 342);
					}
				}
			}
		}

		if (this.coord.atualAct == 0)
		{
			this.coord.angulo = 3*Math.PI/2;
			this.coord.xisD = this.coord.xis;
			this.coord.ipiD = this.coord.ipi + TCoisas.tamanhoPersonagem;
		}
		else
		{
			if (this.coord.atualAct  == 1)
			{
				this.coord.angulo = Math.PI/2;
				this.coord.xisD = this.coord.xis + TCoisas.tamanhoPersonagem;
				this.coord.ipiD = this.coord.ipi;
			}
			else
			{
				if (this.coord.atualAct == 2)
				{
					this.coord.angulo = Math.PI;
					this.coord.xisD = this.coord.xis + TCoisas.tamanhoPersonagem;
					this.coord.ipiD = this.coord.ipi + TCoisas.tamanhoPersonagem;
				}
				else
				{
					
					this.coord.angulo = 0;
					this.coord.ipiD = this.coord.ipi;
					this.coord.xisD = this.coord.xis;
				}
			}
		}
		this.coord.trocarSkin();
	}
};

window.onload = function()
{
	TCoisas.canvas = document.getElementById("meuCanvas");
	TCoisas.context = TCoisas.canvas.getContext("2d");
	TCoisas.coord.skinAberta = document.getElementById("play"); 
	TCoisas.coord.skinFechada = document.getElementById("play2"); 
	TCoisas.imgMon1 = document.getElementById("mon1");
	TCoisas.imgMon2 = document.getElementById("mon2");
	TCoisas.imgMon3 = document.getElementById("mon3");
	TCoisas.imgMon4 = document.getElementById("mon4");
	TCoisas.imgMon5 = document.getElementById("mon5");
	TCoisas.imgMon6 = document.getElementById("mon6");
	TCoisas.imgPa0  = document.getElementById("pa0");
	TCoisas.imgPa1  = document.getElementById("pa1");
	TCoisas.imgPa2  = document.getElementById("pa2");
	TCoisas.imgPa3  = document.getElementById("pa3");
	TCoisas.imgPan1 = document.getElementById("pan1");
	TCoisas.imgPt1  = document.getElementById("pt1");
	TCoisas.seta    = document.getElementById("seta");
	TCoisas.js      = document.createElement("script");

	TCoisas.botoes = new Array(new TBotao(240, 385, false, document.getElementById("btnDesafios"), 0, 0),
		                new TBotao(440, 385, true, document.getElementById("btnNormal"), 6, 3),
		                new TBotao(640, 385, false, document.getElementById("btnInsano"), 8, 3),
		                new TBotao(840, 385, false, document.getElementById("btnHardcore"), 10, 1));

	TCoisas.tamanhoPersonagem = TCoisas.coord.skinAberta.width;
	TCoisas.telaInicio = new telaInicial();
	TCoisas.telaInicio.constructorReserva();

	/* Adicionando o jQuery */
	TCoisas.js.type = "text/javascript";
	TCoisas.js.src = "js/jquery-1.12.2.min.js";
	document.body.appendChild(TCoisas.js);

	/* Requisitando o nome do usuário */
    var person = prompt("Digite o seu nome:", "Noob1");

    if (person != null)
    if (person.indexOf('<') == -1 && person.indexOf('{') == -1  && person.indexOf('\'') == -1  && person.indexOf('"') == -1)
    	TCoisas.nome = person;
    else
    	if (Math.random() >= 0.99)
    		TCoisas.nome = "Legendary: Tarzan";

	setInterval(TCoisas.gameLoop, 10);
}

window.onkeydown = function(e)
{
	if (TCoisas.jaComecou) /* Já saiu da introdução */
	{
		if (e.keyCode == 13)
		{
			if (TCoisas.monstros[0].desativar == false)
			for (var cont1 = 0; cont1 < this.monstros.length; cont1++) 
				TCoisas.monstros[cont1].desativar = true;
			else
			for (var cont1 = 0; cont1 < this.monstros.length; cont1++) 
				TCoisas.monstros[cont1].desativar = false;
		}
		var foi = false;
		if (e.keyCode == 65)
		{
			TCoisas.coord.proxAct = 2; 
			foi = true;
		}
		else if (e.keyCode == 87)
		{
			TCoisas.coord.proxAct = 0; 
			foi = true;
		}
		else if (e.keyCode == 68)
		{
			TCoisas.coord.proxAct = 3;
			foi = true;
		}
		else if (e.keyCode == 83)
		{
			TCoisas.coord.proxAct = 1; 
			foi = true;
		}

		if (TCoisas.ehInverso(TCoisas.coord.proxAct, TCoisas.coord.atualAct) && foi) /* Se é pra ir pra trás */
		{
		    TCoisas.coord.atualAct = TCoisas.coord.proxAct;
		}
	}
	else /* Não saiu da introdução */
	{
		if (e.keyCode == 13)
		{
			if (TCoisas.botoes[0].estaSelecionado) // MODO DESAFIOS = coisas variadas
				TCoisas.modo = "Desafios";
			else if (TCoisas.botoes[1].estaSelecionado) // MODO NORMAL = 6 monstros
			{
	            TCoisas.monstros = new Array(new TPersonagemAgr(575, 270, document.getElementById("mon1")),new TPersonagemAgr(575, 270, document.getElementById("mon2")),new TPersonagemAgr(575, 270,document.getElementById("mon3")),
		                 new TPersonagemAgr(575, 270, document.getElementById("mon4")),new TPersonagemAgr(575, 270, document.getElementById("mon5")),new TPersonagemAgr(575, 270, document.getElementById("mon6")));
				TCoisas.modo = "Normal";
			}
			else if (TCoisas.botoes[2].estaSelecionado) // MODO INSANO = 8 monstros
			{
				TCoisas.monstros = new Array(new TPersonagemAgr(575, 270, document.getElementById("mon1")),new TPersonagemAgr(575, 270, document.getElementById("mon2")),new TPersonagemAgr(575, 270,document.getElementById("mon3")),
		                 new TPersonagemAgr(575, 270, document.getElementById("mon4")),new TPersonagemAgr(575, 270, document.getElementById("mon5")),new TPersonagemAgr(575, 270, document.getElementById("mon6")),
		                 new TPersonagemAgr(575, 270, document.getElementById("mon1")), new TPersonagemAgr(575, 270, document.getElementById("mon2")));
				TCoisas.modo = "Insano";
			}
			else if (TCoisas.botoes[3].estaSelecionado) // MODO HARDCORE = 10 monstros
			{
				TCoisas.monstros = new Array(new TPersonagemAgr(575, 270, document.getElementById("mon1")),new TPersonagemAgr(575, 270, document.getElementById("mon2")),new TPersonagemAgr(575, 270,document.getElementById("mon3")),
		                 new TPersonagemAgr(575, 270, document.getElementById("mon4")),new TPersonagemAgr(575, 270, document.getElementById("mon5")),new TPersonagemAgr(575, 270, document.getElementById("mon6")),
		                 new TPersonagemAgr(575, 270, document.getElementById("mon1")), new TPersonagemAgr(575, 270, document.getElementById("mon2")), new TPersonagemAgr(575, 270, document.getElementById("mon2"))
		                 , new TPersonagemAgr(575, 270, document.getElementById("mon2")));
				TCoisas.coord.vidas = 1;
				TCoisas.modo = "Hardcore";
			}

			TCoisas.jaComecou = true;
		}

		if (e.keyCode == 65 || e.keyCode == 37) // <-- no menu
		{
			var index = 0;
			for (var i = 0; i <= TCoisas.botoes.length-1; i++)
			{
				if (TCoisas.botoes[i].estaSelecionado)
				{
					index = i;
				}
			}
			TCoisas.botoes[index].estaSelecionado = false;
			if (index > 0)
				TCoisas.botoes[index-1].estaSelecionado = true;
			else
				TCoisas.botoes[TCoisas.botoes.length-1].estaSelecionado = true;
				
		}
		else if (e.keyCode == 68 || e.keyCode == 39) // --> no menu
		{
			var index = 0;
			for (var i = 0; i <= TCoisas.botoes.length-1; i++)
			{
				if (TCoisas.botoes[i].estaSelecionado)
				{
					index = i;
				}
			}
			TCoisas.botoes[index].estaSelecionado = false;
			if (index < TCoisas.botoes.length-1)
				TCoisas.botoes[index+1].estaSelecionado = true;
			else
				TCoisas.botoes[0].estaSelecionado = true;
				
		}
	}
}