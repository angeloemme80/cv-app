import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitoloCvComponent } from './titolo-cv.component';

describe('TitoloCvComponent', () => {
  let component: TitoloCvComponent;
  let fixture: ComponentFixture<TitoloCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitoloCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitoloCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
