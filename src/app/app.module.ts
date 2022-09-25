import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/base/header/header.component';
import { FooterComponent } from './views/base/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchIconModule } from './shared/icons/search-icon/search-icon.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, SearchIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
