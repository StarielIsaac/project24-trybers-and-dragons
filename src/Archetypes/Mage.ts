import { EnergyType } from '../Energy';
import Archetype from './Archetype';

// classe Mage é uma extensão da classe abstrata Archetype
export default class Mage extends Archetype {
  private static _instanceCountMage = 0;
  private _energyType : EnergyType;

  // Possui o atributo _energyType definido como 'mana'
  constructor(name: string) { 
    super(name);
    Mage._instanceCountMage += 1;
    this._energyType = 'mana';
  }

  // Retorna o número de instâncias criadas a partir da classe Mage
  static createdArchetypeInstances() : number {
    return Mage._instanceCountMage;
  }

  // Retorna o tipo de energia associado à classe Mage
  get energyType() : EnergyType {
    return this._energyType;
  }
}