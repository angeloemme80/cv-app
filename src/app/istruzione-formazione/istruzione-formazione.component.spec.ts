import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstruzioneFormazioneComponent } from './istruzione-formazione.component';

describe('IstruzioneFormazioneComponent', () => {
  let component: IstruzioneFormazioneComponent;
  let fixture: ComponentFixture<IstruzioneFormazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstruzioneFormazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstruzioneFormazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
