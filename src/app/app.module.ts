import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { VgCore } from "videogular2/core";
import { VgControlsModule } from "videogular2/controls";
import { VgOverlayPlayModule } from "videogular2/overlay-play";
import { VgBufferingModule } from "videogular2/buffering";
import { VgImaAdsModule } from "videogular2/ima-ads";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        VgCore,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        VgImaAdsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
