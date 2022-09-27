import { Component } from "@angular/core";

@Component ({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html',
    styleUrls: [
        '../assets/css/bootstrap.min.css'
    ]
})

export class GroceryComponent {
task: string | undefined;
    tasks: any[] = [];

onClick(){
        this.tasks.push({name: this.task});
    this.task = '';
}
}