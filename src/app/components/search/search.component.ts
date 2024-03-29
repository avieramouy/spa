import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private _activatedRoute: ActivatedRoute, private _heroesServices: HeroesService, private _router: Router) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesServices.buscarHeroes(params['termino']);
    });
  }
}
