import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './layout/shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import {MatIconRegistry} from '@angular/material';
import {loadSvgResource} from './utils/svg.utils';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './layout/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {CKEditorModule} from 'ng2-ckeditor';
import {StorageServiceModule} from 'angular-webstorage-service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    StorageServiceModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    loadSvgResource(iconRegistry, sanitizer)
  }
}
