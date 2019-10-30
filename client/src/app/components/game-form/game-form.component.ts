import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { Route, Router } from '@angular/router';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  }

  constructor(private gamesService: GamesService, private router: Router) { }

  ngOnInit() {
  }

  saveNewGame(){
    delete this.game.created_at;
    delete this.game.id;

    this.gamesService.saveGame(this.game)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['games']);
      },
      err => console.error(err)
    )
  }

}
