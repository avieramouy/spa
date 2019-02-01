import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;
  constructor(private _activatedRoute: ActivatedRoute, private _heroesServices: HeroesService) {
    this._activatedRoute.params.subscribe(params => {
      this.heroe = _heroesServices.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

}
