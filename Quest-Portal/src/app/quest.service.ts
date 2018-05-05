import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Quest } from './quest';
import { QUESTS } from './mock-quests';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class QuestService {

  constructor(private messageService: MessageService) { }

  getQuests(): Observable<Quest[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('QuestService: fetched quests');
    return of(QUESTS);
  }

  getQuest(id: number): Observable<Quest> {
    this.messageService.add(`QuestService: fetched quest id=${id}`);
    return of(QUESTS.find(quest => quest.id === id));
  }
}
