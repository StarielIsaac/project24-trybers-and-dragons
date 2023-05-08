import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _instanceCountMage = 0;
  private _energyType : EnergyType;

  constructor(name: string) { 
    super(name);
    Warrior._instanceCountMage += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances() : number {
    return Warrior._instanceCountMage;
  }
  
  get energyType() : EnergyType {
    return this._energyType;
  }
}