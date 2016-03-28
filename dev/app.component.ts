import {Component} from 'angular2/core';
import {PuzzleComponent} from './puzzle/puzzle.component'

@Component({
    selector: 'my-app',
    template: `
        <div class="container-fluid">
            <my-puzzle></my-puzzle>
        </div>
    `,
    directives: [
        PuzzleComponent,
    ],
})

export class AppComponent {

}
