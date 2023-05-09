import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';

export default class PVE extends Battle {
  private _player: Fighter;
  private _enemy: Monster[] | Fighter | SimpleFighter;
  constructor(player1: Fighter, enemy: Monster[] | Fighter | SimpleFighter) {
    super(player1);
    this._player = player1;
    this._enemy = enemy;
  }
}