import { EnergyType } from '../Energy';

// Declaração da classe abstrata Archetype
export default abstract class Archetype {
  // Declaração dos atributos privados _name, _special, _cost e estático _instanceCount
  private _name : string;
  private _special : number;
  private _cost : number;
  private static _instanceCount = 0;

  // Construtor da classe, recebe um nome e inicializa os atributos _name, _special e _cost
  constructor(name : string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
    Archetype._instanceCount += 1;
  }

  // Método público que retorna o nome do arquétipo
  public name() : string {
    return this._name;
  }

  // Método público que retorna o valor do atributo _special
  public special() : number {
    return this._special;
  }

  // Método público que retorna o valor do atributo _cost
  public cost() : number {
    return this._cost;
  }

  // Método estático que retorna a quantidade de instâncias criadas da classe Archetype
  static createdArchetypeInstances() : number {
    throw new Error('Not implemented');
  }

  // Método abstrato que retorna o tipo de energia que o arquétipo deve ter (mana ou stamina)
  abstract get energyType() : EnergyType;
}