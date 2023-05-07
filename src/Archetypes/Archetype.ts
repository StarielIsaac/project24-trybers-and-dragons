import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name : string;
  private _special : number;
  private _cost : number;
  private static _instanceCount = 0;

  constructor(name : string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
    Archetype._instanceCount += 1;
  }

  public name() : string {
    return this._name;
  }

  public special() : number {
    return this._special;
  }

  public cost() : number {
    return this._cost;
  }

  static createdArchetypeInstances() : number {
    throw new Error('Not implemented');
  }

  // corresponde ao tipo de energia que este arquétipo deve ter (mana ou stamina)
  abstract get energyType() : EnergyType;
}