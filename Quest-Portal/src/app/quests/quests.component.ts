import { Component, OnInit } from '@angular/core';

import { Quest } from '../quest';
import { QUESTS } from '../mock-quests';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss']
})
export class QuestsComponent implements OnInit {
  quests = QUESTS;
  selectedQuest: Quest;

  constructor() { }

  ngOnInit() {
  }

  onSelect(quest: Quest): void {
    this.selectedQuest = quest;
  }



}
