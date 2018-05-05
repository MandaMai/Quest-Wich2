import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { QuestsComponent } from './quests/quests.component';
import { QuestDetailComponent } from './quest-detail/quest-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestsComponent,
    QuestDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
