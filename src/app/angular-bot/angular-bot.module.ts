import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
// import { ChatService } from './chat.service';



@NgModule({
  declarations: [
    ChatComponent,
    MainComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ChatService] //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
})          
export class AngularBotModule { }
