import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

// O atributo 'energy' e o método 'special()' são opcionais..
export default interface Fighter extends SimpleFighter { 
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: Energy,
  special?(enemy: Fighter): void,
  levelUp(): void,
} 