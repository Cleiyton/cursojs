import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScursoComponent } from './scurso.component';

describe('ScursoComponent', () => {
  let component: ScursoComponent;
  let fixture: ComponentFixture<ScursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
