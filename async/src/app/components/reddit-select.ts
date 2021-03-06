import {Component, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'reddit-select',
    template: `
    <div>
        <select #selectList (change)="redditSelect.emit(selectList.value)">
            <option *ngFor="#reddit of availableReddits">
                {{reddit}}
            </option>
        </select>
    </div>
    `
})
export class RedditSelect{
    @Output() redditSelect : EventEmitter<string> = new EventEmitter<string>();
    availableReddits : [string] = ["Angular 2", "ReactJS"];

    ngOnInit(){
        this.redditSelect.emit(this.availableReddits[0]);
    }
}