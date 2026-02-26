import { Component, inject, signal } from '@angular/core';
import { CharacterService } from '../../../core/Character/character.service';
import { character } from '../../../shared/models/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  nav = inject(Router)
  private characterService=inject(CharacterService)
  character = signal(this.characterService.characters)
  Select(character : character) : void {
    this.characterService.SelectCharacter(character)
    this.nav.navigate(["/details"])

  }
  create() : void {
    this.nav.navigate(["/creation"])
  }
}
