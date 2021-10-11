import { Component, OnInit } from '@angular/core';
import { Message, ChatService } from '../chat.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  messages: Message[] = [];
  value: any;
  toggleChat = false;
  constructor(public chatService: ChatService) { }
  
  ngOnInit(): void {
    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }

  sendMessage() {
    if (this.value) {
      this.chatService.getBotAnswer(this.value);
      this.value = '';
    }  
  }

  toggleChatBtn () {
    this.toggleChat = !this.toggleChat;
  }
}
