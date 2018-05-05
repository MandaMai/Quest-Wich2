import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestsComponent } from './quests/quests.component';
import { QuestDetailComponent } from './quest-detail/quest-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
  , {path: 'dashboard', component: DashboardComponent}
  , {path: 'detail/:id', component: QuestDetailComponent}
  , {path: 'quests', component: QuestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
  , exports: [ RouterModule ]
})
export class AppRoutingModule { }
