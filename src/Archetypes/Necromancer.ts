import { EnergyType } from '../Energy';
import Archetype from './Archetype';

// classe Necromancer é uma extensão da classe abstrata Archetype
export default class Necromancer extends Archetype {
  private static _instanceCountMage = 0;
  private _energyType : EnergyType;

  // Possui o atributo _energyType definido como 'mana'
  constructor(name: string) { 
    super(name);
    Necromancer._instanceCountMage += 1;
    this._energyType = 'mana';
  }
  
  // Retorna o número de instâncias criadas a partir da classe Necromancer
  static createdArchetypeInstances() : number {
    return Necromancer._instanceCountMage;
  }

  // Retorna o tipo de energia associado à classe Necromancer
  get energyType() : EnergyType {
    return this._energyType;
  }
}