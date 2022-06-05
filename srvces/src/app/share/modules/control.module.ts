import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from 'src/app/items/items.component';
import { GuideComponent } from 'src/app/guide/guide.component';
import { GuideService } from '../guide.service';



@NgModule({
  declarations: [
    ItemsComponent,
    GuideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ItemsComponent,
            GuideComponent],
  providers: [GuideService]
})
export class ControlModule { }
