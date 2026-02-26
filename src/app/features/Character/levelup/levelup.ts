import { Component, inject } from '@angular/core';
import { CharacterService } from '../../../core/Character/character.service';

@Component({
  selector: 'app-levelup',
  imports: [],
  templateUrl: './levelup.html',
  styleUrl: './levelup.scss',
})
export class Levelup {
  private characterService=inject(CharacterService)
  character = this.characterService.selectedCharacter
  levelOption = this.characterService.levels
  



}
