import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgSlidesModule } from 'videogular2/slides';
import { VgStreamingModule } from 'videogular2/streaming';
import { VgImaAdsModule } from 'videogular2/ima-ads';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        VgCoreModule,
        VgControlsModule,
        VgBufferingModule,
        VgOverlayPlayModule,
        VgSlidesModule,
        VgStreamingModule,
        VgImaAdsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
