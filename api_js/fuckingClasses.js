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
	this.skinAberta = null;
	this.skinFechada = null;
	this.skinAtual = null;
	this.angulo = 0;
	this.qual = 0;

	this.alterarAct = function(novoAct)
	{
		this.atualAct = novoAct;
		this.proxAct = -1;
	}

	/* margem de erro de 20% */
	this.colidiuCom = function(monstro, tamanho)
	{
		var tamanhozinho = tamanho * 80 / 100;
		return ((monstro.xis <= this.xis+tamanhozinho && monstro.xis+tamanhozinho >= this.xis) && (monstro.ipi <= this.ipi + tamanhozinho && monstro.ipi + tamanhozinho >= this.ipi));
	}

	/* sem margem de erro */
	this.colidiuComMoeda = function(monstro, tamanho)
	{
		return ((monstro.xis <= this.xis+tamanho && monstro.xis+tamanho >= this.xis) && (monstro.ipi <= this.ipi + tamanho && monstro.ipi + tamanho >= this.ipi));
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
		if (this.qual % 10 == 0)
		{
			if (this.skinAtual == this.skinAberta)
				this.skinAtual = this.skinFechada;
			else
				this.skinAtual = this.skinAberta;
		}
		this.qual++;
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

function TPersonagemAgr(x2, y2, novaSkin)
{ 
	this.skin = novaSkin;
	this.skin2 = novaSkin;
	this.xis = x2;
	this.ipi = y2;
	this.proxAct = 0; 
	this.desativar = false;
	this.hell = false;

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

	this.hellAlizar = function()
	{
		this.skin = document.getElementById("dem");
		this.hell = true;
	}

	this.desHellAlizar = function()
	{
		this.skin = this.skin2;
		this.hell = false;
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

	this.desenhar = function(context)
	{
		context.drawImage(this.skin, this.xis, this.ipi);
	}
}

function TBotao(x2, y2, selecao, novaSkin, modoMonstros, modoVidas)
{
	this.xis = x2;
	this.ipi = y2;
	this.largura = 130;
	this.altura = 84;
	this.estaSelecionado = selecao;
	this.skin = novaSkin;
	this.vidas = modoVidas;
	this.monstros = modoMonstros;
	this.vidasSkin = document.getElementById("coracao");
	this.monstrosSkin = document.getElementById("monstros");

	this.clicouNoBotao = function(x, y)
	{
		return ((x <= this.xis+this.largura && x+this.largura >= this.xis) && (y <= this.ipi + this.altura && y + this.altura >= this.ipi));
	}
	if (this.vidas > 0)
	this.desenhar = function(context)
	{
		context.drawImage(this.skin, this.xis, this.ipi);

		context.drawImage(this.vidasSkin, this.xis + this.skin.width/2 - this.vidasSkin.width, this.ipi+this.skin.height+10);
		context.fillText(this.vidas, this.xis + this.skin.width - 3*this.vidasSkin.width/2, this.ipi+this.skin.height+40, 30);

		context.fillText(this.monstros, this.xis + this.skin.width - 3*this.monstrosSkin.width/2, this.ipi+this.skin.height+80, 30);
		context.drawImage(this.monstrosSkin, this.xis + this.skin.width/2 - this.monstrosSkin.width, this.ipi+this.skin.height+50);
	}
	else
		this.desenhar = function(context)
	{
		context.drawImage(this.skin, this.xis, this.ipi);
	}
}

function telaInicial()
{
	canvas = null;
	context = null;
	imgPreta = null;
	imgBranca = null;
	monstros = new Array(new TPersonagemAgr(-300, 200),new TPersonagemAgr(-250, 200),new TPersonagemAgr(-200, 200),
		                 new TPersonagemAgr(-150, 200),new TPersonagemAgr(-100, 200),new TPersonagemAgr(-50, 200));

	imgMon1 = null;
	imgMon2 = null;
	imgMon3 = null;
	imgMon4 = null;
	imgMon5 = null;
	imgMon6 = null;
	limgMon1 = null;
	limgMon2 = null;
	limgMon3 = null;
	limgMon4 = null;
	limgMon5 = null;
	limgMon6 = null;
	txtJogar = null;
	parou = false;
	cont = 0;
	cont2 = 3000;
	

	function constructor()
	{
		this.personagem = new TPersonagemPri(-350, 200);
		this.canvas = document.getElementById("meuCanvas");
		this.context = this.canvas.getContext("2d");
		this.imgPreta = document.getElementById("imgPreta");
		this.imgBranca = document.getElementById("imgBranca");
		this.personagem.skinAberta = document.getElementById("play"); 
		this.personagem.skinFechada = document.getElementById("play2"); 
		this.imgMon1 = document.getElementById("mon1");
		this.imgMon2 = document.getElementById("mon2");
		this.imgMon3 = document.getElementById("mon3");
		this.imgMon4 = document.getElementById("mon4");
		this.imgMon5 = document.getElementById("mon5");
		this.imgMon6 = document.getElementById("mon6");
		this.limgMon1 = document.getElementById("lmon1");
		this.limgMon2 = document.getElementById("lmon2");
		this.limgMon3 = document.getElementById("lmon3");
		this.limgMon4 = document.getElementById("lmon4");
		this.limgMon5 = document.getElementById("lmon5");
		this.limgMon6 = document.getElementById("lmon6");
		this.txtJogar = document.getElementById("txtJogar");
		this.monstros = new Array(new TPersonagemAgr(-300, 200),new TPersonagemAgr(-250, 200),new TPersonagemAgr(-200, 200),
		                 new TPersonagemAgr(-150, 200),new TPersonagemAgr(-100, 200),new TPersonagemAgr(-50, 200));
		this.cont = 0;
		this.cont2 = 3000;
	}

	this.constructorReserva = function()
	{
		this.personagem = new TPersonagemPri(-350, 200);
		this.canvas = document.getElementById("meuCanvas");
		this.context = this.canvas.getContext("2d");
		this.imgPreta = document.getElementById("imgPreta");
		this.imgBranca = document.getElementById("imgBranca");
		this.personagem.skinAberta = document.getElementById("play"); 
		this.personagem.skinFechada = document.getElementById("play2"); 
		this.imgMon1 = document.getElementById("mon1");
		this.imgMon2 = document.getElementById("mon2");
		this.imgMon3 = document.getElementById("mon3");
		this.imgMon4 = document.getElementById("mon4");
		this.imgMon5 = document.getElementById("mon5");
		this.imgMon6 = document.getElementById("mon6");
		this.limgMon1 = document.getElementById("lmon1");
		this.limgMon2 = document.getElementById("lmon2");
		this.limgMon3 = document.getElementById("lmon3");
		this.limgMon4 = document.getElementById("lmon4");
		this.limgMon5 = document.getElementById("lmon5");
		this.limgMon6 = document.getElementById("lmon6");
		this.txtJogar = document.getElementById("txtJogar");
		this.monstros = new Array(new TPersonagemAgr(-300, 200),new TPersonagemAgr(-250, 200),new TPersonagemAgr(-200, 200),
		                 new TPersonagemAgr(-150, 200),new TPersonagemAgr(-100, 200),new TPersonagemAgr(-50, 200));
		this.cont = 0;
		this.cont2 = 3000;
	}

	this.run = function()
	{
		this.personagem.trocarSkin();

		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.beginPath();

		this.context.drawImage(this.imgPreta, 0, 0);
		
		if (!this.parou)
		{
			this.context.drawImage(this.personagem.skinAtual, this.personagem.xis, this.personagem.ipi);
		
			this.context.drawImage(this.imgMon1, this.monstros[0].xis, this.monstros[0].ipi);
			this.context.drawImage(this.imgMon2, this.monstros[1].xis, this.monstros[1].ipi);
			this.context.drawImage(this.imgMon3, this.monstros[2].xis, this.monstros[2].ipi);
			this.context.drawImage(this.imgMon4, this.monstros[3].xis, this.monstros[3].ipi);
			this.context.drawImage(this.imgMon5, this.monstros[4].xis, this.monstros[4].ipi);
			this.context.drawImage(this.imgMon6, this.monstros[5].xis, this.monstros[5].ipi);

			/* Aumentando o eixo X */
			this.personagem.xis++;
			for (var i = 0; i <= this.monstros.length - 1; i++) 
			{
				this.monstros[i].xis++;
			}
			if (this.monstros[2].xis == 575)	
				this.parou = true;
		}
		else
		{
			if (this.monstros[2].xis < 575)
			{
				this.monstros = new Array(new TPersonagemAgr(475, 200),new TPersonagemAgr(525, 200),new TPersonagemAgr(575, 200),
		                 new TPersonagemAgr(625, 200),new TPersonagemAgr(675, 200),new TPersonagemAgr(725, 200));
				this.personagem.xis = 425;
			}
			this.cont++;
			if (this.cont < 10)
				this.context.drawImage(this.imgBranca, 0, 0); /* Aquela piscada */
			else
			{
				this.context.font = "50px Consolas"; 
				this.context.fillStyle = "rgb(63, 139, 204)";
				this.context.drawImage(this.personagem.skinAtual, this.personagem.xis, this.personagem.ipi);
				this.context.drawImage(this.limgMon1, this.monstros[0].xis, this.monstros[0].ipi);
				this.context.drawImage(this.limgMon2, this.monstros[1].xis, this.monstros[1].ipi);
				this.context.drawImage(this.limgMon3, this.monstros[2].xis, this.monstros[2].ipi);
				this.context.drawImage(this.limgMon4, this.monstros[3].xis, this.monstros[3].ipi);
				this.context.drawImage(this.limgMon5, this.monstros[4].xis, this.monstros[4].ipi);
				this.context.drawImage(this.limgMon6, this.monstros[5].xis, this.monstros[5].ipi);

				TCoisas.desenharBotoes();
				this.context.fillText("Feito por: Daniel Campioni", 245, 600); /* Metade = 13, ocupa 25*13 no eixo X */
			}
		}
	}
}

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

function TCodigo(intDC)
{
	this.codigoMontado = "";
	this.indiceAtual = -1;
	this.intDoCodigo = intDC;

	this.colocar = function(caracter)
	{
		this.codigoMontado = this.codigoMontado + caracter;
		this.indiceAtual++;
	}

	this.limpar = function()
	{
		this.codigoMontado = "";
		this.indiceAtual = 0;
	}

	this.letraNoIndice = function(caracter, intDC)
	{
		$.ajax({
			url: "api/darwin.php",
			data: {
				"caracCodigo" : caracter,
				"indice" : this.indiceAtual,
				"intDC" : this.intDoCodigo
			},
			type: "POST",
			success: function(trenzaum, burro, trem){
				if (trenzaum.length > 1)
				{
					tudo = trenzaum.split("-");
					if (tudo[1].indexOf(".") === -1) // se não tem ponto
						TCoisas[tudo[1]] = tudo[0].substring(1);
					else
					{
						tudo2 = tudo[1].split(".");
						TCoisas[tudo2[0]][tudo2[1]] = tudo[0].substring(1);
					}
				}
				else
				{
					if (trenzaum == "s")
					{
						TCoisas.codigos[intDC].colocar(caracter);
					}
					else
            			TCoisas.codigos[intDC].limpar();
				}
            },
            error: function(XMLHttpRequest, textStatus, errorThrown)
            {
            	TCoisas.codigos[intDC].limpar();
            	console.log("versão original em http://www2/u15163/CampMan/");
            }
		});
	}
}

function TDoce(novoX, novoY, novaSkin, tipo)
{
	this.xis = novoX;
	this.ipi = novoY;
	this.skin = novaSkin;
	this.ativo = false;

	this.margemErro = 0.000001;

	this.ativarEfeito = function()
	{
		// ???
		this.ativo = true;
	}

	this.desenhar = function(g)
	{
		if (this.ativo)
			g.drawImage(this.skin, this.xis, this.ipi);
	}

	this.podeSpawnar = function()
	{
		if (!this.ativo)
		{
			rand = Math.random();
			chance = 0.00001;
			if (chance + this.margemErro >= rand && rand >= chance)
			{
				this.ativo = true;
			}
			else
			{
				this.margemErro += 0.0000001;
			}
		}
	}


	if (tipo.toUpperCase() == "DOCE")
	{
		this.darPontos = function() 
		{
	    	var qtosPontos = Math.floor(Math.random() * 5)*10 + 10; /* max=50 e min=10 */
	    	for (var auxas = 0; auxas < qtosPontos; auxas++)
				TCoisas.pontos.SetPontos(auxas);
		}

		this.reiniciar = function()
		{
			TCoisas.doces.margemErro = 0.000001;
		}

		this.verificar = function()
		{}
	}
	else
	{
		this.darPontos = function() 
		{
	    	for (var i = 0; i < TCoisas.monstros.length; i++) 
	    	{
	    		TCoisas.monstros[i].hellAlizar();
	    	}
	    	TCoisas.canvas.style.backgroundImage = "url('imgs/backgroundRed.png')";
		}

		this.reiniciar = function()
		{
			TCoisas.doces.margemErro = 0.000001;
		}

		this.verificar = function()
		{

		}
	}
}

function TQuadradoBordado(x, y, l, a)
{
	this.xis = x;
	this.ipi = y;
	this.largura = l;
	this.altura = a;
	this.botao = document.getElementById("txtReini");

	this.desenhar1 = function(g)
	{
		g.fillRect(this.xis, this.ipi, this.largura, this.altura);
		g.lineWidth = "10";
		g.strokeStyle = "rgb(0, 219, 0)";
		g.rect(this.xis, this.ipi, this.largura, this.altura);
		g.stroke();
	}

	this.desenhar = function(g, pontos, nome)
	{
		this.desenhar1(g);
		g.fillStyle = "rgb(0, 219, 0)";
		g.font="50px Consolas";
		g.fillText(nome+"", this.xis + this.largura/2 - 10 - 25*(nome.length/2), this.ipi + this.altura/2 -50, this.largura-10);
		g.font="20px Consolas";
		g.fillText(pontos, this.xis + this.largura/2 - 10, this.ipi + this.altura/2 - 10 + 10);
		g.drawImage(this.botao, this.xis - this.botao.width/2 + this.largura/2, this.ipi + 40 + this.altura/2);
		g.fillStyle = "rgb(0, 0, 0)";
	}
}