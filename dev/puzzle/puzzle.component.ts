import {Component} from 'angular2/core';

@Component({
    selector: 'my-puzzle',
    template: `
        <section class="col-xs-12 col-sm-12 col-md-12 col-lg-12 setup">
            <h2>Game setup</h2>
            <div class="form-group">
                <label>Enter your name please:</label>
                <input type="text" class="form-control ">
            </div>
        </section>
         <section class="col-xs-12 col-sm-12 col-md-12 col-lg-12 puzzle">
            <h2>The puzzle</h2>
            <p>Ok, welcome <span class="name">{{name}}</span></p>
            <br>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
                <label class="col-xs-12 col-sm-12 col-md-4 col-lg-4">Switch 1:</label>
                <input type="text" class="col-xs-12 col-sm-12 col-md-7 col-lg-7 form-control">
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
                <label class="col-xs-12 col-sm-12 col-md-4 col-lg-4">Switch 2:</label>
                <input type="text" class="col-xs-12 col-sm-12 col-md-7 col-lg-7 form-control">
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
                <label class="col-xs-12 col-sm-12 col-md-4 col-lg-4">Switch 3:</label>
                <input type="text" class="col-xs-12 col-sm-12 col-md-7 col-lg-7 form-control">
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
                <label class="col-xs-12 col-sm-12 col-md-4 col-lg-4">Switch 4:</label>
                <input type="text" class="col-xs-12 col-sm-12 col-md-7 col-lg-7 form-control">
            </div>
        </section>
        <h2>Congratulations <span class="name">{{name}}</span>, you did it!</h2>
    `,
})

export class PuzzleComponent {

}
