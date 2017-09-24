import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ThumbComponent } from './components/thumb/thumb.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { HeaderComponent } from './components/header/header.component';

import { PrezliQueryService } from './services/prezi-query.service';
import { HttpModule } from '@angular/http';
import { SearchBoxComponent } from './components/search-box/search-box.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    ThumbComponent,
    ListViewComponent,
    HeaderComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [PrezliQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
