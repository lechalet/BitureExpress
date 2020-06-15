import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { GameComponent } from '../game/game.component';

const routes: Routes = [
  {path: '', component: HomePage,},
  {path: 'game', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
