https://marcscob.github.io/simonGame/

explicação do código linha a linha

linha 1: declara a variável buttonColours, um Array contendo as 4 cores correspondentes aos id dos 4 botões do jogo.
linha 2: contém a var gamePattern, cujo valor é o array que recebe randomChosenColour proveniente da função nextSequence, que entre outras ações, realiza o sorteio entre as cores disponíveis no array buttonColours e realiza um push no array gamePattern.
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
linha 56: exibe a função nextSequence possibilitando o início de uma rodada do jogo, cujas ações são as seguintes:
    *reseta ou zera o array userClickedPattern.
    *incrementa o nível somando 1 à variável level.
    *seleciona o h1 de id level-title, modificando seu texto atravéz da propriedade innerHTML para que apresente a string concatenada Level seguida da variável level, que por sua vez tem como valor o resultado do incremento citado acima.
    *cria a variável randomNumber, atribuindo-lhe o resultado randômico do método Math.random, cuja função é sortear um número de 0 a 3, usado para selecionar uma cor do array buttonColours.
    *cria a variável randomChosenColour, cujo valor é o array buttonColours, que neste momento já possui o valor proveniente de randomNumber derivado do sorteio realizado pelo método Math.random.
    *adiciona ao array gamePattern via método push o valor de randomChosenColour.
    *a seguir processa uma animação em cada botão cuja cor sorteada corresponde a um respectivo id de botão.
    *reproduz um som atravéz chamando a função playSound, passando como argumento randomChosenColour, cuja cor corresponde ao respectivo arquivo de áudio.
<<<<<<< HEAD
linha 71: exibe a função animatePress cujo parâmetro é currentColour. É realizada a concatenação do símbolo do id com currentColour, que por sua vez recebe o valor usado como argumento nos lugares onde a função animatePress é chamada. A função animatePress executa as seguintes ações:
    *adiciona a classe css 'pressed' ao id da cor trazida por currentColour a fim de alterar a aparência do botão clicado.
    *executa um método setTimeout retirando a aplicação da classe 'pressed' via método removeClass em 100 milisegundos.
    

=======
    
>>>>>>> 488a1286243d9926982e39d30bded0d7686dd77d
