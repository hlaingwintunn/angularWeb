import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { MainpageComponent } from './mainpage.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ MainpageComponent ],
    exports: [ MainpageComponent ]
})

export class MainPageModule { }