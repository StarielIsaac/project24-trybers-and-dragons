import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints : number;
  private static _instanceCount = 0;

  constructor(name: string, dexterity: number, maxLifePoints : number) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Orc._instanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Orc._instanceCount;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}
