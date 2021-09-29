import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './angular-bot/chat/chat.component';
import { MainComponent } from './angular-bot/main/main.component';

const routes: Routes = [ {path:'', pathMatch:'full', redirectTo:'main'},
{path:'main', component: MainComponent},
{path:'chat', component: ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
