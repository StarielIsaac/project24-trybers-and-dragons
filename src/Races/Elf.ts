import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints : number;
  private static _instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instanceCount;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}