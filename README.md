# PIG GAME :pig:
---------
### Introdução
Olá, esse projeto é um jogo chamado piggame.
Inicialmente ele foi feito em html, css e javascript;
Para fins de aprendizado ele vai ser realizado utilizando a biblioteca React com Redux;

---------

### Sobre o Projeto

Esse jogo consiste em um jogo para jogar em dupla, um contra o outro.
O objetivo do jogo é alcançar um determinado número de pontos ao rolar os dados. 

#### Rolar dos dados

Ao rolar dos dados você pode realizar duas ações:
  1. Guardar o número e somar ele aos pontos da rodada para posteriormente somar à pontuação total;
  2. Passar os dados e somar os pontos da rodada à sua pontuação total;

Mas você deve-se perguntar, por quais motivos eu escolheria passar em vez de somar mais pontos para guardar depois?
O motivo seria que ao rolar o dado e o número dado for o número 1, você perde seus pontos da rodada e a vez, passando a vez
o próximo jogador;

### Testes necessários

Basicamente o programa vai ter apenas uma tela, onde essa tela já é a tela de jogo

##### Itens da tela Inicial


### Bibliotecas utilizadas
  1. React
  2. Redux
  3. Redux-thunk
  4. Redux-devtools-extension
  5. MaterialUi
  6. Eslint 
  7. Jest

### Aprendizados

  1. Recordar a utilização do redux-thunk
  2. Melhorar o aprendizado em relação à classes
  3. Tentar criar o projeto se baseando no TDD
  4. Melhorar a lógica de programação
  5. Fazer commits padronizados 

### Histórico

  #### 30/03/2022
  1. O projeto foi iniciado
  2. Criação do package.json
  3.


### Problemas e Soluções encontradas durante o processo


### COMMITS

  1. "C0 DOCS :books: - Add Readme.md for project" -m 
 
    Foi Adicionado os objetivos e aprendizados do projeto
 "


### TESTES
#### construção
  1.  Verifica se tem os itens certos na tela
    1.1 Tem que ter a pontuação Atual dos dois players
    1.2 Tem que ter a pontuação total dos dois players
    1.3 Botão de new game, roll dice e hold.

#### Funcionalidades
  2. Verifica o funcionamento do app
    2.1 Ao clicar no new game o dado aparece
    2.2 Ao clicar no roll dice o dado é rolado e a pontuação é somada a pontuação atual
    2.3 Ao rolar o dado e o resultado do dado for 1, o turno muda de jogador
    2.4 Ao clicar no botao hold, a pontuacao atual é somada a pontuação total e o turno muda para o outro jogador
    2.5 Ao atingir 50 pontos o jogo acaba e mostra o vencedor
    



### LOGS
  1. Inicialmente foi feito o estudo sobre como a aplicação vai funcionar
  2. Quais itens devem ter na tela, componentes 
  3. Funcionamento