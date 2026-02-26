import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../../../core/Character/character.service';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Race } from '../../../shared/models/race.model';
import { Subrace } from '../../../shared/models/subrace.model';
import { level } from '../../../shared/models/level.model';
import { Spell } from '../../../shared/models/spell.model';
import { character } from '../../../shared/models/character.model';
import { CommonModule } from '@angular/common';
import { race } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-creation',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './creation.html',
  styleUrl: './creation.scss',
})
export class Creation {
   nav = inject(Router)
   characterService=inject(CharacterService)
    races = signal(this.characterService.races)
    levelClasses = signal(this.characterService.startinglevels.pipe( map(data => [...new Set(data.map(l => l.class.name))])));
    subClasses: level[] = []
    subRaces: Subrace[] = []   
    cantrip: Spell[] = []
    spell:Spell[] = []   
   
private fb = inject(FormBuilder);

fg = this.fb.group({
  name: ['', [Validators.required]],
  race: [''],
  subRace: [''],
  str: [10],
  dex: [10],
  con: [10],
  int: [10],
  wis: [10],
  cha: [10],
  class: [''],
  subclass: [''],
  cantrips: this.fb.array([]),
  spells: this.fb.array([]),
});
get cantrips(): FormArray {
  return this.fg.get('cantrips') as FormArray;
}
get spells(): FormArray {
  return this.fg.get('spells') as FormArray;
}
onCantripChange(event: Event) {
  const checkbox = event.target as HTMLInputElement;

  if (checkbox.checked) {
    if (this.cantrips.length >= 2) {
      checkbox.checked = false;
      return;
    }
    this.cantrips.push(this.fb.control(checkbox.value));
  } else {
    const index = this.cantrips.controls.findIndex(
      control => control.value === checkbox.value
    );
    this.cantrips.removeAt(index);
  }
}
onSpellChange(event: Event) {
  const checkbox = event.target as HTMLInputElement;
  if (checkbox.checked) {
    if (this.spells.length >= 1) {
      checkbox.checked = false;
      return;
    }
    this.spells.push(this.fb.control(checkbox.value));
  } else {
    const index = this.spells.controls.findIndex(
      control => control.value === checkbox.value
    );
    this.spells.removeAt(index);
  }
}

   constructor() {
    this.fg.valueChanges.subscribe((v: any) => {
      if(v.race) {
        this.characterService.getSubraces(v.race).subscribe(data => this.subRaces = data)              
      }
      if(v.class) {
        this.characterService.startinglevels.subscribe(data => {
        this.subClasses = data.filter(l => l.class.name === v.class && l.subclass) ?? [];});
        this.characterService.getSpells(v.class).subscribe(data => {
        this.cantrip = data.filter(s => s.level === 0) ?? [];
        this.spell = data.filter(s => s.level === 1) ?? [];
        });
        v.cantrip =        
        console.log(v.class,this.cantrip);                
      }      
    })
    }
    onSubmit() {
      if (this.fg.invalid) {return;
      }
        this.characterService.CreateCharacter(this.fg.value)
        this.nav.navigate(["/list"])
   }

}
