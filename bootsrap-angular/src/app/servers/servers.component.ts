import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]', //selector je zdej attribute
  templateUrl: './servers.component.html',
  /*template: `
  <app-server></app-server>
  <app-servers></app-servers>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreation = "No server was created!";
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000); //arrow function
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreation = 'Server was created! Name is ' + this.serverName + '.';
  }

  onUpdateServerName(event: any) {
    //console.log(event);
    this.serverName =(<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }
 
}
