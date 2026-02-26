import { Component, inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../../../core/Character/character.service';
import { ToEntriesPipe } from '../../../shared/to-entries-pipe';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [ToEntriesPipe],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  nav = inject(Router)
  private characterService=inject(CharacterService)

  character = this.characterService.selectedCharacter

  back(){
    this.nav.navigate(['/list']);

  }
  LevelUp(){
    
  }
}
