import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DécouvrirComponent } from './Découvrir.component';

describe('DécouvrirComponent', () => {
  let component: DécouvrirComponent;
  let fixture: ComponentFixture<DécouvrirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
