https://marcscob.github.io/simonGame/

explicação do código linha a linha

linha 1: declara a variável buttonColours que contém o Array contendo as 4 cores correspondentes aos id dos 4 botões do jogo
linha 2: contém a var gamePattern culo valor é o array que recebe randomChosenColour proveniente da função nextSequence, que entre outras ações, realiza o sorteio entre as cores disponíveis no array buttonColours e realiza um push no array gamePattern
linha 3: contém a var userClickedPattern, cujo valor é userChosenColour proveniente da função anônima do listener dos botões, que entre outras ações realiza um push do atributo id do button clicado pelo usuário (userChosenColour).
linha 4: declara a variável started, cujo valor se inicia como false. O valor de started será true quando o jogo é iniciado, seja via keypress ou clique no h2 de id start.
linha 5: declara a var level, iniciado com valor 0. O level do jogador é incrementado a partit da função nextSequence a cada vez que uma fase é concluída com sucesso.
linha 7: traz uma função anônima no evento keypress do teclado, que realiza as seguintes ações:
    *verifica se a variável started não se encontra como true, ou seja, se não há jogo em curso.
    *não havendo jogo em curso o h1 é selecionado e seu texto passa para o valor da variável level escrita na tela após a palavra fixa Level.
    *a função nextSequence é chamada para que uma nova rodada do jogo seja ativada.
    *passa o valor da variável started para true.
linha 15: tem a mesma tarefa da função anterior, porém as ações provém do evento click do elemento h2.
linha 24: possui uma função anônima no evento click dos botões cuja classe é .btn, realizando as seguintes ações:
    *declara a variável userChosenColour a qual é atribuído o id do botão clicado pelo usuário.
    *insere no array userClickedPattern o valor armazenado em userChosenColour via método push.
    *reproduz um som, chamando a função playSound passando como argumento userChosenColour.
    *reproduz uma animação, chamando a função animatePress passando como argumento o mesmo userChosenColour.
    *chama a função checkAnswer passando como argumento os elementos do array userClickedPattern diminuídos de 1 para que retorne um valor coerente com o seu index.
linha 34: exibe a função checkAnswer, cujo argumento é currentLevel e realiza as seguintes ações:
    *verifica se o array gamePattern que traz em si a sequência de cores sorteada randomicamente na função nextSequence é exatamente igual ao array userClickedPattern, usando como parâmetro de compatação o valor assumido por currentLevel em determinado momento.
    *verifica ainda se o array userClickedPattern possui o mesmo tamanho do array gamePattern.
    *estando ambas condições satisfeitas, executa o método setTimeout, cuja função anônima chama a função nextSequence em 1 segundo, reiniciando assim uma nova rodada do jogo.
    *caso uma das condições não seja true, o else é executado,realizando as desencadeando as seguintes ações:
        *reproduz um som, chamando a função playSound, passando como argumento a string 'wrong'.
        *adiciona a classe 'game-over' ao elemento body passando como argumento a string 'game-over', mudando a cor do fundo para vermelho.
        *modifica o texto do h1 atravéz da sua propriedade text.
        *aciona o método toggle do h2, fazendo com que seja exibido.
        *aciona o método setTimeout, removendo a classe 'game-over' do body em 200 milisegundos.
        *chama a função startOver, cuja ação consiste em resetar (zerar) a variável level, o array gamePattern e retornar a variável started para false.
