import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BSComponentComponent } from './bsComponent.component';

@NgModule({
    imports: [FormsModule, RouterModule],
    declarations: [BSComponentComponent],
    exports: [BSComponentComponent]
})

export class BSComponentModule { }
