import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoIndex } from './corpo-index';

describe('MeuSegundoComponent', () => {
  let component: CorpoIndex;
  let fixture: ComponentFixture<CorpoIndex>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpoIndex ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoIndex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
