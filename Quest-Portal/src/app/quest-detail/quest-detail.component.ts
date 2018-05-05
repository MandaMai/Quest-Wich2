import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Quest } from '../quest';
import { QuestService } from '../quest.service';

@Component({
  selector: 'app-quest-detail',
  templateUrl: './quest-detail.component.html',
  styleUrls: ['./quest-detail.component.scss']
})
export class QuestDetailComponent implements OnInit {
  @Input() quest: Quest;

  constructor(
    private route: ActivatedRoute
    , private questService: QuestService
    , private location: Location
  ) { }

  ngOnInit(): void {
    this.getQuest();
  }

  getQuest(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questService.getQuest(id)
      .subscribe(quest => this.quest = quest);
  }

  goBack(): void {
    this.location.back();
  }
}
