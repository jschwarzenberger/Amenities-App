import {Component} from '@angular/core';

@Component({
    selector: 'home',
    template: `
        <a [routerLink]="['../location']">Wichita</a>
    `
})
export class HomeComponent {
}
