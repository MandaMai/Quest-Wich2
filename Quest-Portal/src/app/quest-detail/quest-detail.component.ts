import { Component, OnInit, Input } from '@angular/core';
import { Quest } from '../quest';



@Component({
  selector: 'app-quest-detail',
  templateUrl: './quest-detail.component.html',
  styleUrls: ['./quest-detail.component.scss']
})
export class QuestDetailComponent implements OnInit {
  @Input() quest: Quest;

  constructor() { }

  ngOnInit() {
  }

}
