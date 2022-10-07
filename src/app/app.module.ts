import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { GifsModule } from './gifs/gifs.module';

@NgModule({
  imports: [BrowserModule, FormsModule, SharedModule,GifsModule],
  declarations: [AppComponent, HelloComponent,SidebarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
