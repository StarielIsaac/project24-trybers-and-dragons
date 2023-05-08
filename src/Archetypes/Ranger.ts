import { EnergyType } from '../Energy';
import Archetype from './Archetype';

// classe Ranger é uma extensão da classe abstrata Archetype
export default class Ranger extends Archetype {
  private static _instanceCountMage = 0;
  private _energyType : EnergyType;

  // Possui o atributo _energyType definido como 'stamina'
  constructor(name: string) { 
    super(name);
    Ranger._instanceCountMage += 1;
    this._energyType = 'stamina';
  }

  // Retorna o número de instâncias criadas a partir da classe Ranger
  static createdArchetypeInstances() : number {
    return Ranger._instanceCountMage;
  }

  // Retorna o tipo de energia associado à classe Ranger
  get energyType() : EnergyType {
    return this._energyType;
  }
}