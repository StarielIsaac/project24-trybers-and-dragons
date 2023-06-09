import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints : number;
  private static _instanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._instanceCount;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}