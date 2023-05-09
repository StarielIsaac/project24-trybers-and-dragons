import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private _player: Fighter;
  private _enemy: Fighter;
  constructor(player1: Fighter, enemy: Fighter) {
    super(player1);
    this._player = player1;
    this._enemy = enemy;
  }

  private playersAreAlive(): boolean {
    return this._player.lifePoints > 0 && this._enemy.lifePoints > 0;
  }
  
  fight(): number {
    while (this.playersAreAlive()) {
      this._player.attack(this._enemy);
      this._enemy.attack(this._player);
    }
    return super.fight();
  }
}