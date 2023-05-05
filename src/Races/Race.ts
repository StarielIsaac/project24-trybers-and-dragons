// Este é um modelo abstrato de classe de Raça
// que pode ser estendido para criar diferentes tipos de raças com suas próprias propriedades e métodos.
export default abstract class Race {
  // duas propriedades privadas: _name representa o nome da raça, e _dexterity que representa a destreza da raça.
  private _name: string;
  private _dexterity: number;

  // O construtor recebe dois parâmetros: name e dexterity
  constructor(name: string, dexterity: number) { 
    this._name = name;
    this._dexterity = dexterity;
  }

  // método público que retorna o nome da raça
  public name(): string {
    return this._name;
  }

  // método público que retorna a destreza da raça
  public dexterity(): number {
    return this._dexterity;
  }

  // deve ser implementado nas subclasses para retornar o número de instâncias de raças criadas.
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  // deve ser implementada nas subclasses e (retornar o número máximo de pontos de vida de cada raça)
  abstract get maxLifePoints(): number; 
}
