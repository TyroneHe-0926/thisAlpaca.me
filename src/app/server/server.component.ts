import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    //or we can do by 1. attribute [app-server] or 2. by class .app-server
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    name = "";
}
