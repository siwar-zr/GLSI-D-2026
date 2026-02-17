import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlfStatementComponent } from './controlf-statement.component';

describe('ControlfStatementComponent', () => {
  let component: ControlfStatementComponent;
  let fixture: ComponentFixture<ControlfStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlfStatementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlfStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
