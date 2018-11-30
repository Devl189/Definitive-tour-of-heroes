import {MessageService} from '../../services/message.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent {

  public messages: string[] = [];
  constructor(public messageService: MessageService) {
    this.messages = this.messageService.messages;
  }

  public clearMessage() {
    this.messageService.clear();
    this.messages = this.messageService.messages;
  }
}
