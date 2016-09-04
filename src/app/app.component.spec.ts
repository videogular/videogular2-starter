import {
    async,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { MyPlayerComponent } from './app.component';

import { VgCore } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgSlidesModule } from 'videogular2/slides';

describe('MyPlayerComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ VgCore, VgControlsModule, VgOverlayPlayModule, VgSlidesModule ],
            declarations: [
                MyPlayerComponent
            ]
        });
    });

    it('should have title Hello world', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<MyPlayerComponent>;
            fixture = TestBed.createComponent(MyPlayerComponent);
            fixture.detectChanges();

            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
        });
    }));
});
