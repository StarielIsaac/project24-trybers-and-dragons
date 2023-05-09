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
}