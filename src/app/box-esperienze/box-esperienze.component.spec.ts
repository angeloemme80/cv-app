import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxEsperienzeComponent } from './box-esperienze.component';

describe('BoxEsperienzeComponent', () => {
  let component: BoxEsperienzeComponent;
  let fixture: ComponentFixture<BoxEsperienzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxEsperienzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxEsperienzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
