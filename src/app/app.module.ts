import{ NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyPlayerComponent }  from './app.component';

import { VgCore } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgSlidesModule } from 'videogular2/slides';

@NgModule({
    imports: [ BrowserModule, VgCore, VgControlsModule, VgOverlayPlayModule, VgSlidesModule ],
    declarations: [ MyPlayerComponent ],
    bootstrap: [ MyPlayerComponent ]
})
export class AppModule { }
