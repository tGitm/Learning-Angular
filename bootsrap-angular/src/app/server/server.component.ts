import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: #fff; 
    }`
  ]
})
export class ServerComponent {
    serverId = 10;
    serverStatus: string = 'offline';

    constructor() {
      if (Math.random() > 0.5) {
          this.serverStatus = 'online';
      }
      else {
        this.serverStatus = 'offline';
      }
    }

    getColor() {
      if (this.serverStatus === 'online') {
        return 'green';
      }
      else {
        return 'red';
      }
    }

    getServerStatus() {
      return this.serverStatus;
    }
}
