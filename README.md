# Trybers and Dragons

Este é um projeto de backend para um jogo de interpretação de papéis (RPG) chamado Trybers and Dragons. O objetivo é aplicar os princípios da arquitetura SOLID e os princípios de Programação Orientada a Objetos (POO) em uma estrutura de jogo.

## Princípios e Estrutura do Projeto

O projeto Trybers and Dragons segue os seguintes princípios e estrutura:

- Aplica os princípios da arquitetura SOLID;
- Utiliza conceitos de POO para modelar as entidades e suas interações;
- É executado em um ambiente Dockerizado com o uso do Docker Compose;
- Utiliza o ESLint para análise estática do código.

## Raças e Características

No universo de Trybers and Dragons (T&D), as personagens são divididas em diferentes raças, como Élfica, Orc ou Anã. Cada raça possui características específicas que definem as habilidades e atributos das personagens, como pontos de vida e destreza.

## Arquétipos e Vocação

Além das raças, as personagens também possuem um arquétipo que define sua vocação, habilidades e visão de mundo. Alguns exemplos de arquétipos presentes em T&D são guerreiro, mago e necromante.

## Lutas e Combates

No jogo, há a possibilidade de ocorrerem lutas entre personagens, bem como entre personagens e monstros. Os personagens que possuem atributos específicos podem ser considerados lutadores.

## Requisitos

O projeto atende aos seguintes requisitos:

1. Criação da classe Race;
2. Criação de classes que herdam de Race;
3. Criação da interface Energy;
4. Criação da classe Archetype;
5. Criação de classes que herdam de Archetype;
6. Criação da interface Fighter;
7. Criação da classe Character;
8. Criação da interface SimpleFighter;
9. Criação da classe Monster;
10. Criação da classe PVP;
11. Criação da classe PVE;
12. Criação da classe Dragon;
13. Criação de objetos no arquivo index.

## Executando o Projeto

Para executar o projeto Trybers and Dragons, siga as instruções abaixo:

1. Rode o serviço node com o comando `docker-compose up -d`;
2. Acesse o terminal interativo do container criado pelo compose utilizando o comando `docker exec -it trybers_and_dragons bash`.

## Considerações Finais

Este projeto oferece a estrutura básica para a implementação do jogo Trybers and Dragons, seguindo os princípios de SOLID e POO. A partir dessa estrutura, é possível dar vida às personagens, criar instâncias das classes e desenvolver as funcionalidades específicas do jogo.

Divirta-se explorando o mundo de Trybers and Dragons e criando suas próprias aventuras neste universo de fantasia!
