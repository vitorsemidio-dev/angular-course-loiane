import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberPersonagemCriadoComponent } from './receber-personagem-criado.component';

describe('ReceberPersonagemCriadoComponent', () => {
  let component: ReceberPersonagemCriadoComponent;
  let fixture: ComponentFixture<ReceberPersonagemCriadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceberPersonagemCriadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceberPersonagemCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
