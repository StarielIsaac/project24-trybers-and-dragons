/* eslint-disable max-lines-per-function */
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
// import getRandomInt from './utils';

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

  constructor(name: string) {
    this._name = name; 
    this._dexterity = Character.randomNumber();
    this._race = new Elf(this._name, this._dexterity); 
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Character.randomNumber();
    this._defense = Character.randomNumber();
    this._energy = {
      type_: this._archetype.energyType,
      amount: Character.randomNumber(),
    };
  }

  get race() : Race {
    return this._race;
  }

  get archetype() : Archetype {
    return this._archetype;
  }

  get lifePoints() : number {
    return this._lifePoints;
  }

  get strength() : number {
    return this._strength;
  }

  get defense() : number {
    return this._defense;
  }

  get dexterity() : number {
    return this._dexterity;
  }

  get energy() : Energy {
    return { ...this._energy };
  }

  // metodos gerais
  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: Fighter): void {
    enemy.receiveDamage(this._strength * 3);
  }

  levelUp(): void {
    this._maxLifePoints += Character.randomNumber();
    this._strength += Character.randomNumber();
    this._dexterity += Character.randomNumber();
    this._defense += Character.randomNumber();
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }
  
  receiveDamage(attackPoints: number): number {
    const damage = Character.damagePoints(attackPoints, this._defense);
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  static randomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

  static damagePoints(attackPoints : number, defense: number) : number {
    return Math.max(0, attackPoints - defense);
  }
}