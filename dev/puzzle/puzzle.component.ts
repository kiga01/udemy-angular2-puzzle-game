import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-puzzle',
    template: `
        <section class="col-xs-12 col-sm-12 col-md-12 col-lg-12 setup">
            <h2>Game setup</h2>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
                <label class="col-xs-12 col-sm-12 col-md-4 col-lg-4 label-form">Enter your name please:</label>
                <input type="text" class="col-xs-12 col-sm-12 col-md-8 col-lg-8 form-control"
                #name (keyup)="0">
            </div>
        </section>
         <section class="col-xs-12 col-sm-12 col-md-12 col-lg-12 puzzle"
         [ngClass]="{
            puzzle: true,
            solved: switch1.value == switch1Number && switch2.value == switch2Number
            && switch3.value == switch3Number && switch4.value == switch4Number
         }"
         [ngStyle]="{
            display: name.value === '' ? 'none' : 'block'
         }">
            <h2>
                Puzzle |
                {{switch1.value == switch1Number && switch2.value == switch2Number
                && switch3.value == switch3Number && switch4.value == switch4Number ? 'Solved' : 'Not solved'}}
            </h2>
            <p>Ok, welcome <span class="name">{{name.value}}</span></p>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
                <label class="col-xs-12 col-sm-12 col-md-4 col-lg-4 label-form">Switch 1:</label>
                <input type="text" class="col-xs-12 col-sm-12 col-md-8 col-lg-8 form-control"
                #switch1 (keyup)="0">
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
                <label class="col-xs-12 col-sm-12 col-md-4 col-lg-4 label-form">Switch 2:</label>
                <input type="text" class="col-xs-12 col-sm-12 col-md-8 col-lg-8 form-control"
                #switch2 (keyup)="0">
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
                <label class="col-xs-12 col-sm-12 col-md-4 col-lg-4 label-form">Switch 3:</label>
                <input type="text" class="col-xs-12 col-sm-12 col-md-8 col-lg-8 form-control"
                #switch3 (keyup)="0">
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
                <label class="col-xs-12 col-sm-12 col-md-4 col-lg-4 label-form">Switch 4:</label>
                <input type="text" class="col-xs-12 col-sm-12 col-md-8 col-lg-8 form-control"
                #switch4 (keyup)="0">
            </div>
        </section>
        <h2 [hidden]="switch1.value != switch1Number || switch2.value != switch2Number
            || switch3.value != switch3Number || switch4.value != switch4Number">
            Congratulations <span class="name">{{name.value}}</span>, you did it!
        </h2>
    `,
})

export class PuzzleComponent implements OnInit {
    switch1Number: number;
    switch2Number: number;
    switch3Number: number;
    switch4Number: number;

    ngOnInit(){
        this.switch1Number = Math.round(Math.random());
        this.switch2Number = Math.round(Math.random());
        this.switch3Number = Math.round(Math.random());
        this.switch4Number = Math.round(Math.random());

        console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
    }
}
