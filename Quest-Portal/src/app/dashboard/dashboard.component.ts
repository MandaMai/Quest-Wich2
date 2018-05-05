import { Component, OnInit } from '@angular/core';
import { Quest } from '../quest';
import { QuestService } from '../quest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  quests: Quest[] = [];

  constructor(private questService: QuestService) { }

  ngOnInit() {
    this.getQuests();
  }

  getQuests(): void {
    this.questService.getQuests()
      .subscribe(quests => this.quests = quests.slice(0)); // may need to change this (5) to return all info
  }

}
