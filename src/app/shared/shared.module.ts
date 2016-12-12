import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { AsideComponent }  from './aside/aside.component';

@NgModule({
  imports:      [ CommonModule ],
  exports:      [ CommonModule, FormsModule,
                  HeaderComponent, AsideComponent ],
  declarations: [ HeaderComponent, AsideComponent ]
})
export class SharedModule { }


