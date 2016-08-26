

var TPontos = function()
{
    var pontos = 0;

    this.getPontos = function()
        {
            return pontos;
        };

    this.SetPontos = function(novoPonto)
        {
            pontos++;
        };

    this.SetPonto = function()
    {
        pontos = 0;
    };
};

var Derived = function()
{
};

Derived.prototype = new TPontos();

function TPontuacao(x2, y2)
{
	this.xis = x2;
	this.ipi = y2;
	this.vale = true;

	this.mudarVale = function(novoVale)
	{
		this.vale = novoVale;
	}
}

function TExtra(x2, y2)
{
	this.xis = x2;
	this.ipi = y2;
	this.vale = true;

	this.mudarVale = function(novoVale)
	{
		this.vale = novoVale;
	}
}

function TBuraco(x2, y2, qts, onde)
{
	this.xis = x2;
	this.ipi = y2;

	this.qtasSaidas = qts;
	this.quaisSaidas = new Array();
	this.quaisSaidas = onde;

	this.escolherSaidaRandomica = function(rand)
	{
		 return this.quaisSaidas[Math.floor(rand * this.qtasSaidas)];
	}

	this.temSaidaPara = function(saida)
	{
		for (var aux = 0; aux <= this.qtasSaidas-1; aux++)
		{
			if (this.quaisSaidas[aux] == saida)
			{
				return true;
			}
		}
		return false;
	}
}

function TPersonagemPri(x2, y2)
{ 

	this.xis = x2;
	this.ipi = y2;
	this.xisD = x2;
	this.ipiD = y2;
	this.vidas = 3;
	this.proxAct = -1; 
	this.atualAct = 3;
	skinAberta = null;
	skinFechada = null;
	this.skinAtual = null;
	this.angulo = 0;

	this.alterarAct = function(novoAct)
	{
		this.atualAct = novoAct;
		this.proxAct = -1;
	}

	this.colidiuCom = function(monstro)
	{
		if ((monstro.xis <= this.xis+50 && monstro.xis+50 >= this.xis) && (monstro.ipi <= this.ipi + 50 && monstro.ipi + 50 >= this.ipi))
			return true;
		return false;
	}

	this.renascer = function()
	{
		this.proxAct = -1;
		this.atualAct = 3;
		this.vidas--;
		this.xis = 570;
		this.ipi = 400;
		this.xisD = 570;
		this.ipiD = 400;
	}

	this.trocarSkin = function () 
	{
		if (this.skinAtual == this.skinAberta)
			this.skinAtual = this.skinFechada;
		else
			this.skinAtual = this.skinAberta;
	}

	this.morreu = function()
	{
		return this.vidas == 0;
	}

	this.andar = function()
	{
		if (this.atualAct == 1)
		{
			this.ipi++;
			this.ipiD++;
		}
		else
		{
			if (this.atualAct == 2)
			{
				this.xis--;
				this.xisD--;
			}
			else
			{
				if (this.atualAct  == 3)
				{
					this.xis++;
					this.xisD++;
				}
				else
				{
					if (this.atualAct > 3)
					{
						this.atualAct -= 4;
					}
					this.ipi--;
					this.ipiD--;
				}
			}
		}
	}

	this.estaEmCimaDe = function(passagem)
	{
		if ((this.xis == passagem.xis) &&
			(this.ipi == passagem.ipi))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

function TPersonagemAgr(x2, y2)
{ 

	this.xis = x2;
	this.ipi = y2;
	this.proxAct = 0; 
	this.desativar = false;

	this.andar = function()
	{
		if (this.desativar == false)
		{
			if (this.proxAct == 1)
				this.ipi++;
			else
			{
				if (this.proxAct == 2)
					this.xis--;
				else
				{
					if (this.proxAct  == 3)
						this.xis++;
					else
					{
						if (this.proxAct > 3)
							this.proxAct -= 4;
						this.ipi--;    
					}
				}
			}
		}
	}

	this.estaEmCimaDe = function(passagem)
	{
		if ((this.xis == passagem.xis) &&
			(this.ipi == passagem.ipi))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

const TTudo = function()
{

    var canvas   = document.getElementById("meuCanvas");
	var nome     = "Noob1";
	var tamanhoPersonagem = 50;
	var salvando = false;
	var sarvo    = 1;
	var qtasReiniciar=240;
	var coord    = new TPersonagemPri(570, 400);
	var pontosAntigos = 0;
	var pontos   = new Derived();

	var ondePontos = new Array(
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
				new TPontuacao(1088,   660));


	var monstros = new Array(new TPersonagemAgr(575, 270),new TPersonagemAgr(575, 270),new TPersonagemAgr(575, 270),
		                 new TPersonagemAgr(575, 270),new TPersonagemAgr(575, 270),new TPersonagemAgr(575, 270));
                                 
	var buracos  = new Array(new TBuraco(55,   38,  2, new Array(1, 3)),    
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
		                 );
    var imgMon1  = document.getElementById("mon1");
	var imgMon2  = document.getElementById("mon2");
	var imgMon3  = document.getElementById("mon3");
	var imgMon4  = document.getElementById("mon4");
	var imgMon5  = document.getElementById("mon5");
	var imgMon6  = document.getElementById("mon6");
	var imgPa0   = document.getElementById("pa0");
	var imgPa1   = document.getElementById("pa1");
	var imgPa2   = document.getElementById("pa2");
	var imgPa3   = document.getElementById("pa3");
	var imgPan1  = document.getElementById("pan1");
	var imgPt1   = document.getElementById("pt1");
	var js       = document.createElement("script");

	var context  = null;

	this.colidiuMonstro = function()
	{
		for (var cont1 = 0; cont1 < 6; cont1++) 
		{
			if (this.coord.colidiuCom(this.monstros[cont1]))
			{
				this.coord.renascer();
				return true;
			}
		}
		return false;
	};

	this.desenharMonstros = function()
	{
		this.context.drawImage(this.imgMon1, this.monstros[0].xis, this.monstros[0].ipi);
		this.context.drawImage(this.imgMon2, this.monstros[1].xis, this.monstros[1].ipi);
		this.context.drawImage(this.imgMon3, this.monstros[2].xis, this.monstros[2].ipi);
		this.context.drawImage(this.imgMon4, this.monstros[3].xis, this.monstros[3].ipi);
		this.context.drawImage(this.imgMon5, this.monstros[4].xis, this.monstros[4].ipi);
		this.context.drawImage(this.imgMon6, this.monstros[5].xis, this.monstros[5].ipi);
	};

	this.desenharPlayer = function()
	{
		this.context.translate(this.coord.xisD, this.coord.ipiD);
		this.context.rotate(this.coord.angulo);

		this.context.drawImage(this.coord.skinAtual, 0, 0);

		this.context.rotate(-this.coord.angulo);
		this.context.translate(-this.coord.xisD, -this.coord.ipiD);
	};

	this.calcularProximaPos = function()
	{	
		for (var indice = 0; indice <= this.buracos.length-1; indice++)
		{
			for (var cont1 = 0; cont1 < 6; cont1++)
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
		this.monstros[0].andar();
		this.monstros[1].andar();
		this.monstros[2].andar();
		this.monstros[3].andar();
		this.monstros[4].andar();
		this.monstros[5].andar();
		this.coord.andar();
	};

	this.ehInverso = function(i, i2)
	{
		if ((i < 2 && i2 < 2) || (i > 1 && i2 > 1))
			return true;
		return false;
	};

	this.desenharCabecalho = function()
	{
		this.context.font = "20px Georgia";
		this.context.fillText("Pontos= "+ this.pontos.getPontos() + "    Vidas= "+ this.coord.vidas, 15, 15);
		if (this.salvando)
			this.context.fillText("Enviando record", 490, 625);
	};

	this.limparTela = function()
	{
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.beginPath();
	};

	this.desenharPontos = function()
	{
		for (var indice = 0; indice <= this.ondePontos.length-1; indice++)
			if (this.ondePontos[indice].vale != false) 
				this.context.drawImage(this.imgPt1, this.ondePontos[indice].xis, this.ondePontos[indice].ipi);
	};

	this.salvarRecord = function()
	{
		if (this.sarvo == 2)
		{
			this.sarvo = 1;
			this.limparTela();
			this.salvando = true;
			this.sarvo++;
			$.ajax({
	            url: 'guliver.php',
	            type: 'POST',
	            data: {
	                "addItem": this.nome,
	                "addItem2": this.pontos.getPontos(),
	                "removeItem3": this.coord.vidas
	            },
	            success: function(trenzaum, burro, trem){
	            	fruits = [this.nome];
	            	if (trenzaum.toString().trim() != "[\""+fruits.toString()+"\"]") /* quero que caia no else */
	            	{
	            		document.location.href = "pa-1.png";
	            	}
	            	else
	            	{
	            		this.salvando = false;
	            		this.atualizarRecods();
	            	}
	            		
	            },
	            error: function(XMLHttpRequest, textStatus, errorThrown)
	            {
	            	
	            }
	        });
		}
	};

	this.atualizarRecods = function()
	{
		$.ajax({
	            url: 'sansao.php',
	            type: 'POST',
	            success: function(trenzaum, burro, trem){
	            	document.getElementById("FYD").innerHTML = trenzaum;
	            		
	            },
	            error: function(XMLHttpRequest, textStatus, errorThrown)
	            {
	            	document.getElementById("FYD").innerHTML = "Ocorreu um erro na obtenção de recods!";
	            }
	        });
		
	};

	this.verSePontuou = function()
	{
		for (var indice = 0; indice <= this.ondePontos.length-1; indice++)
			if (this.ondePontos[indice].vale != false) 
				if (this.coord.colidiuCom(this.ondePontos[indice]))
				{
					for (var auxas = 0; auxas < 10; auxas++)
						this.pontos.SetPontos(auxas);
					this.ondePontos[indice].mudarVale(false);
				}
	};

	this.ganhou = function()
	{
		return this.pontos.getPontos() == this.qtasReiniciar;
	};

	this.reiniciar = function()
	{
		for (var indice = 0; indice <= this.ondePontos.length-1; indice++)
			this.ondePontos[indice].mudarVale(true);
		for (var cont1 = 0; cont1 < 6; cont1++)
		{
			this.monstros[cont1].xis = 575;
			this.monstros[cont1].ipi = 270;
			this.monstros[cont1].proxAct = 0;
		}
		this.coord.atualAct = 3;
		this.coord.proxAct = -1;
		this.coord.xis = 570;
		this.coord.ipi = 400;
	};

	this.validarScore = function () 
	{
		if (!(this.pontosAntigos == this.pontos.getPontos() || this.pontosAntigos == this.pontos.getPontos()+10 || this.pontos.getPontos() % 240 == 0))
		{
			$.ajax({
		            url: 'hummels.php',
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
	};

	this.gameLoop = function()
	{
		TCoisas.limparTela();
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
			else
			{
				TCoisas.reiniciar();
				TCoisas.qtasReiniciar += 240;
			}
		}
		else
		{
			if (TCoisas.sarvo == 1)
			{
				TCoisas.sarvo++;
				$.ajax({
		            url: 'einstein.php',
		            success:function(trenzaum, burro, trem){
		            	
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
	};

	this.trocarSprites = function()
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
			this.coord.ipiD = this.coord.ipi + this.tamanhoPersonagem;
		}
		else
		{
			if (this.coord.atualAct  == 1)
			{
				this.coord.angulo = Math.PI/2;
				this.coord.xisD = this.coord.xis + this.tamanhoPersonagem;
				this.coord.ipiD = this.coord.ipi;
			}
			else
			{
				if (this.coord.atualAct == 2)
				{
					this.coord.angulo = Math.PI;
					this.coord.xisD = this.coord.xis + this.tamanhoPersonagem;
					this.coord.ipiD = this.coord.ipi + this.tamanhoPersonagem;
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
	TCoisas = new TTudo();
	TCoisas.canvas = document.getElementById("meuCanvas");
	TCoisas.context = TCoisas.canvas.getContext("2d");
	TCoisas.coord = new TPersonagemPri(570, 400);
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
	TCoisas.js = document.createElement("script");
	TCoisas.pontos = new Derived();
	TCoisas.tamanhoPersonagem = TCoisas.coord.skinAberta.width;
	TCoisas.qtasReiniciar = 240;

	TCoisas.monstros = new Array(new TPersonagemAgr(575, 270),new TPersonagemAgr(575, 270),new TPersonagemAgr(575, 270),
		                 new TPersonagemAgr(575, 270),new TPersonagemAgr(575, 270),new TPersonagemAgr(575, 270));
                                 
	TCoisas.buracos  = new Array(new TBuraco(55,   38,  2, new Array(1, 3)),    
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
		                 );

	TCoisas.ondePontos = new Array(
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
				new TPontuacao(1088,   660));





	TCoisas.js.type = "text/javascript";
	TCoisas.js.src = "jquery-1.12.2.min.js";

	document.body.appendChild(TCoisas.js);

    var person = prompt("Digite o seu nome=", "Noob1");

    if (person.indexOf('<') == -1 && person.indexOf('{') == -1  && person.indexOf('\'') == -1  && person.indexOf('"') == -1)
    	TCoisas.nome = person;

	setInterval(TCoisas.gameLoop, 10);
}

window.onkeydown = function(e)
{
	if (e.keyCode == 13)
	{
		if (TCoisas.monstros[0].desativar == false)
		for (var cont1 = 0; cont1 < 6; cont1++) 
			TCoisas.monstros[cont1].desativar = true;
		else
		for (var cont1 = 0; cont1 < 6; cont1++) 
			TCoisas.monstros[cont1].desativar = false;
	}
	if (e.keyCode == 65)
		TCoisas.coord.proxAct = 2; 
	if (e.keyCode == 87)
		TCoisas.coord.proxAct = 0; 
	if (e.keyCode == 68)
		TCoisas.coord.proxAct = 3;
	if (e.keyCode == 83)
		TCoisas.coord.proxAct = 1; 

	if (TCoisas.ehInverso(TCoisas.coord.proxAct, TCoisas.coord.atualAct))
	{
	    TCoisas.coord.atualAct = TCoisas.coord.proxAct;
	}
}