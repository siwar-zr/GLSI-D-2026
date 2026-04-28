import { NgStyle } from '@angular/common';
import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [NgStyle],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {

  //@input : permet de passer des données du parent vers l'enfant
  //@Output : permet de communiquer de l'enfant vers le parent (l'enfant envoie un event et le parent ecoute)
  //Composant réutilisable = un composant que tu peux utiliser plusieurs fois dans ton application sans le récréer
  //EventEmitter : classe en Angular qui permet à un composant enfant d'envoyer un event (avec ou sans données) vers son parent (c'est un outil d'envoyer un message)

  @Input() progressValue: number = 0;

}
