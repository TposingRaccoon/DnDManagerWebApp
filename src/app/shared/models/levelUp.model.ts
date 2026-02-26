import { Feat, Feature, Spell } from "./character.model";

export interface levelUp{
    characterID? : number,
    levelIndex? : string;
    spells? : Spell[],
    features? : Feature[]
    feat? : Feat
    removedspell? : Spell
}