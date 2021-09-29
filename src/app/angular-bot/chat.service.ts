import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Message {
  constructor(public author: any, public content: any) {}
}

@Injectable()
export class ChatService {
  constructor() {}
  
  conversation = new Subject<Message[]>();
  
  messageMap:any = [{  
    "hi": "Hello",
    "who are you": "My name is Agular Bot",
    "What is Angular": "Angular is the best framework ever",
    "default": "I can't understand. Can you please repeat"
  }]

  dala: any = 'default'

  getBotAnswer(msg: any) {
      console.log("coming in service",msg)
    const userMessage = new Message('user', msg);  
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: any){
      console.log("queston",question)
      console.log("queston",this.messageMap)
    let answer = this.messageMap[0][question];
    if (answer){
        return answer || this.messageMap[0][question];
    } else {
        return answer || this.messageMap[0][this.dala];
    }
  }
}