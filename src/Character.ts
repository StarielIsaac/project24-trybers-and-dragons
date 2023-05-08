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

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: Fighter): void {
    enemy.receiveDamage(this._strength * 3);
  }

  levelUp(): void {
    const randomValue = Character.randomNumber();
    this._maxLifePoints += randomValue;
    this._strength += randomValue;
    this._dexterity += randomValue;
    this._defense += randomValue;
  }
  
  receiveDamage(attackPoints: number): number {
    const damage = this._defense - attackPoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints < 1) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  public race() : Race {
    return this._race;
  }

  public archetype() : Archetype {
    return this._archetype;
  }

  public get lifePoints() : number {
    return this._lifePoints;
  }

  public get strength() : number {
    return this._strength;
  }

  public get defense() : number {
    return this._defense;
  }

  public dexterity() : number {
    return this._dexterity;
  }

  public get energy() : Energy {
    return Object.freeze({ ...this._energy });
  }

  static randomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
}