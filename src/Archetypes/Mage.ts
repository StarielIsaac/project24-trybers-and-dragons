import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _instanceCountMage = 0;
  private _energyType : EnergyType;

  constructor(name: string) { 
    super(name);
    Mage._instanceCountMage += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances() : number {
    return Mage._instanceCountMage;
  }
  
  get energyType() : EnergyType {
    return this._energyType;
  }
}