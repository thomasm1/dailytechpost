import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ChainServersComponent } from './components/chain-servers/chain-servers.component';
import { ConsoleComponent } from './components/chain-servers/console/console.component';
import { ServerComponent } from './components/chain-servers/server/server.component';

@NgModule({
  declarations: [
    ChainServersComponent,
    ConsoleComponent,
    ServerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule  // Import your shared Material module
  ],
  exports: [ChainServersComponent]
})
export class ChainServersModule { }