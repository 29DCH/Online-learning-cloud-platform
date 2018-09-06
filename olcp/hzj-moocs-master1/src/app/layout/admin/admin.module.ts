import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {SharedModule} from '../shared/shared.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [AdminHomeComponent, AdminHeaderComponent, AdminFooterComponent, AdminSidebarComponent]
})
export class AdminModule { }
