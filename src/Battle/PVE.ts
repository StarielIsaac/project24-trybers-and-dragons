import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _enemy: SimpleFighter[] | Monster[];
  constructor(
    player: Fighter,
    monsters: SimpleFighter[] | Monster[],
  ) {
    super(player);
    this._player = player;
    this._enemy = monsters;
  }

  attackCharacter(monster: SimpleFighter): void {
    this._player.attack(monster);
  }
  
  attackMonster(monster: SimpleFighter): void {
    monster.attack(this._player);
  }

  // verifica se pelo menos um dos lutador/personagem/monstro ainda está vivo.
  areFightersAlive(): boolean {
    return this._player.lifePoints > 0 && this._enemy
      .some((monster) => monster.lifePoints > 0);
  }
   
  fight(): number {
    while (this.areFightersAlive()) {
      this._enemy.forEach((monster) => {
        this.attackCharacter(monster);
        this.attackMonster(monster);
      });
    }
    return super.fight();
  }
}