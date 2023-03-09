import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-chain-servers',
  templateUrl: './chain-servers.component.html',
  styleUrls: ['./chain-servers.component.scss']
})
export class ChainServersComponent implements OnInit {
  servers = [{type: 'polygon', name: 'polygon Name', content: 'Just a Polygon test!'}];
 
  constructor() { }

  ngOnInit(): void {
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.servers.push({
      type: 'polygon',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.servers.push({
      type: 'blueprint Polygon',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.servers[0].name = ' Polygon Changed!';
  }

  onDestroyFirst() {
    this.servers.splice(0, 1);
  }
  }
        
