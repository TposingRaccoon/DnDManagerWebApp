import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { Observable, race } from 'rxjs';
import { login } from '../../shared/models/login.model';
import { levelUp } from '../../shared/models/levelUp.model';
import { Feature, level } from '../../shared/models/level.model';
import { character } from '../../shared/models/character.model';
import { Feat } from '../../shared/models/feat.model';
import { Race } from '../../shared/models/race.model';
import { Subrace } from '../../shared/models/subrace.model';
import { Skill } from '../../shared/models/skill.model';
import { Spell } from '../../shared/models/spell.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private apiRrl = "";

  
  getCharacter()  {
    return this.http.get<character[]>(`${this.apiRrl}/character`)
  }

  postCharacterLevel(levelUp : levelUp) {
    return this.http.put<levelUp>(`${this.apiRrl}/character`, levelUp)
  }

  DeleteCharacter(id : number)  {
    return this.http.delete<number>(`${this.apiRrl}/character?id=${id}`)
  }

  CreateCharacter(c : character)  {
    return this.http.post(`${this.apiRrl}/character`, c )
  }

  getCharacterLevelInit() {
    return this.http.get<level[]>(`${this.apiRrl}/character/init`)
  }

  getCharacterLevel(id : number) {
    return this.http.get<level>(`${this.apiRrl}/character/${id}`)
  }

  getFeat() {
    return this.http.get<Feat[]>(`${this.apiRrl}/feat`)
  }

  getFeatById(id : string){
    return this.http.get<Feat>(`${this.apiRrl}/feat/${id}`)
  }

  getFeature() {
    return this.http.get<Feature[]>(`${this.apiRrl}/feature`)
  }

  getFeatureByLvl(Lvl : string) {
    return this.http.get<Feature>(`${this.apiRrl}/feature/${Lvl}`)
  }

  getRace() {
    return this.http.get<Race[]>(`${this.apiRrl}/race`)
  }

  getSubrace(race : string) {
    return this.http.get<Subrace[]>(`${this.apiRrl}/race/${race}`)
  }

  getSkill() {
    return this.http.get<Skill[]>(`${this.apiRrl}/skill`)
  }

  getSkillById(id : string) {
    return this.http.get<Skill>(`${this.apiRrl}/skill/${id}`)
  }
  getSpell(){
    return this.http.get<Spell[]>(`${this.apiRrl}/spell`)
  }

  getSpellById(id : string){
    return this.http.get<Spell>(`${this.apiRrl}/spell/${id}`)
  }
  getSpellByIndex(index : string){
    return this.http.get<Spell[]>(`${this.apiRrl}/spell/${index}`)
  }





  
  
}
