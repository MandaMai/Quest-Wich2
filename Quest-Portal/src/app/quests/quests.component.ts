import { Component, OnInit } from '@angular/core';

import { Quest } from '../quest';
import { QuestService } from '../quest.service';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss']
})
export class QuestsComponent implements OnInit {

  selectedQuest: Quest;
  quests: Quest[];

  constructor(private questService: QuestService) { }

  ngOnInit() {
    this.getQuests();
  }

  onSelect(quest: Quest): void {
    this.selectedQuest = quest;
  }

  getQuests(): void {
    this.questService.getQuests()
      .subscribe(quests => this.quests = quests);
  }


}
