/* eslint-disable max-lines-per-function */
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _race : Race;
  private _archetype : Archetype ;
  private _maxLifePoints: number;
  private _lifePoints: number ;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(
    race: Race,
    archetype: Archetype,
    maxLifePoints: number,
    lifePoints: number,
    strength: number,
    defense: number,
    dexterity: number,
    energy: Energy,
    name: string,
  ) {
    this._dexterity = Character.randomNumber();
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Character.randomNumber();
    this._defense = Character.randomNumber();
    this._energy = {
      type_: this._archetype.energyType,
      amount: Character.randomNumber(),
    };
    this._name = name; 
  }

  static randomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
}