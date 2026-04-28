import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit,
AfterContentChecked, OnDestroy{

  constructor(){
    console.log("Constructor")
    //Initialisations des données
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    //Api Calls, chargement de données, lancer une logique au démarrage
    //exécuté une seule fois après la création du composant et après l'initialisation des données
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
    //Après que le contenu externe (d'apres le fils ou le parent) envoyé au composant soit inséré
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
    //Détection de changement des données insérées
    //Après chaque vérification du contenu projeté (après la modification des données insérées de l'externe)
  }


  ngAfterViewInit(): void {
    console.log("ngAfterViewInit ",performance.now())
    //Après que la vue du composant et celle de ses composants enfants soient complètement créées dans le DOM
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
    //Après la vérification de la vue et du DOM
  }

  ngOnDestroy(): void {
    alert("You are leaving page")
    console.log("ngOnDestroy")
    //Arreter les inscriptions aux observales/ arreter des chronometres/ arreter des connexions
    //Juste avant la destruction du composant (quitter la page/ actualisation)
  }

}
