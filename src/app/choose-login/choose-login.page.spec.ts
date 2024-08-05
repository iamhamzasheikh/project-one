import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChooseLoginPage } from './choose-login.page';

describe('ChooseLoginPage', () => {
  let component: ChooseLoginPage;
  let fixture: ComponentFixture<ChooseLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
