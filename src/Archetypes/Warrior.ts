import { EnergyType } from '../Energy';
import Archetype from './Archetype';

// classe Warrior é uma extensão da classe abstrata Archetype
export default class Warrior extends Archetype {
  private static _instanceCountMage = 0;
  private _energyType : EnergyType;

  // Possui o atributo _energyType definido como 'stamina'
  constructor(name: string) { 
    super(name);
    Warrior._instanceCountMage += 1;
    this._energyType = 'stamina';
  }
  
  // Retorna o número de instâncias criadas a partir da classe Warrior
  static createdArchetypeInstances() : number {
    return Warrior._instanceCountMage;
  }
  
  // Retorna o tipo de energia associado à classe Warrior
  get energyType() : EnergyType {
    return this._energyType;
  }
}