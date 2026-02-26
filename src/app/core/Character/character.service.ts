import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from '../api/api.service';
import { level } from '../../shared/models/level.model';
import { character, Feat, Feature, Skill, Spell, Subrace } from '../../shared/models/character.model';
import { levelUp } from '../../shared/models/levelUp.model';
import { Race } from '../../shared/models/race.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private  api = inject(ApiService)

  characters = this.api.getCharacter();  
  selectedCharacter = null as character|null
  startinglevels = this.api.getCharacterLevelInit();
  levels = this.selectedCharacter?this.api.getCharacterLevel(this.selectedCharacter.id!):[];
  selectedLevel = null as level|null  
  getSpells (selectedLevel: string){
    return this.api.getSpellByIndex(selectedLevel);
  } 
  races = this.api.getRace();
  selectedRace = null as Race|null
  getSubraces(selectedRace: string) {
    return this.api.getSubrace(selectedRace);
  }
  selectedSubrace = null as Subrace|null
  spells = [] as Spell[]
  availableSkill = this.api.getSkill();
  skills = [] as Skill[]
  features = [] as Feature[]
  feat: Feat|undefined
  removedspell: Spell|undefined
  str = signal(10);
  dex = signal(10);
  con = signal(10);
  int = signal(10); 
  wis = signal(10);
  cha = signal(10);
  name = signal("")  

  SelectCharacter(c : character) : void{
    this.selectedCharacter = c
  }
  SelectLevel(l : level ) : void{
    this.selectedLevel = l
  }
  SelectRace(r : Race) : void{
    this.selectedRace = r
  }
  SelectSubrace (s : Subrace) : void {
    this.selectedSubrace = s
  }

  ResetOptions() : void{
    this.spells = [];
    this.features = [];
    this.skills = [];
    this.feat = undefined;
    this.removedspell = undefined;
    this.str.set(10);
    this.dex.set(10); 
    this.con.set(10); 
    this.int.set(10); 
    this.wis.set(10); 
    this.cha.set(10);
    this.name.set("") 
    
  }

  ValidateLevel() : void{
    var levelup:levelUp={
      characterID: this.selectedCharacter?.id,
      levelIndex: this.selectedLevel?.index,
      spells:  this.spells,
      features: this.features,
      feat: this.feat,
      removedspell: this.removedspell
      }
      this.api.postCharacterLevel(levelup)      
    }

    CreateCharacter(c: any) : void{
      var newCharacter:character={
        username : "",
        name : c.name(),
        race : {
          name:c.selectedRace?.name,
          index:c.selectedRace?.index},
        subrace : {
          name:c.selectedSubrace?.name,
          index:c.selectedSubrace?.index},
        str : c.str(),
        dex : c.dex(),
        con : c.con(),
        int : c.int(),
        wis : c.wis(),
        cha : c.cha(),
        background : undefined,
        proficiency : undefined,
        languages : c.selectedRace?.languages,
        class : {
          name:c.selectedLevel?.class.name,
          index:c.selectedLevel?.class.index},
        totalLevel : 1,
        proficiencyBonus : c.selectedLevel?.profBonus,
        classLevels :[{
          name:c.selectedLevel?.class.name,
          level : 1}],
        subclasses : [c.selectedLevel?.subclass?.name ?? ""],
        equipements : undefined,
        skills : c.skills,
        spells : c.spells,
        classSpecific : [
          {classIndex :c.selectedLevel?.class.index,
          ClassSpecific : c.selectedLevel?.classSpecific}
        ],
        spellcastings : [
          {classIndex :c.selectedLevel?.class.index,
          Spellcasting : c.selectedLevel?.spellcasting}
        ],
        features : c.features
      }
      c.api.CreateCharacter(newCharacter)
    }
    
  }
  


 
