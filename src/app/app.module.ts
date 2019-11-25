import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UeberUnsComponent } from './Components/ueber-uns/ueber-uns.component';
import { MemberComponent } from './Components/ÜberUns/member/member.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UeberUnsComponent, MemberComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
