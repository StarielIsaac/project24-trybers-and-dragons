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
}