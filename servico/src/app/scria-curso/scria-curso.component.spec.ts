import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriaCursoComponent } from './scria-curso.component';

describe('ScriaCursoComponent', () => {
  let component: ScriaCursoComponent;
  let fixture: ComponentFixture<ScriaCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriaCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
