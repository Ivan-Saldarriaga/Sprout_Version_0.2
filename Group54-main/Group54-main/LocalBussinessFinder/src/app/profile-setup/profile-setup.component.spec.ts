import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileSetupComponent } from './profile-setup.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
describe('ProfileSetupComponent', () => {
  let component: ProfileSetupComponent;
  let fixture: ComponentFixture<ProfileSetupComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule ({
      imports: [
        MatGridListModule,
        RouterTestingModule,
        HttpClientTestingModule,
        NgMultiSelectDropDownModule
      ],
      declarations: [
        ProfileSetupComponent
      ]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSetupComponent);
    component = fixture.componentInstance;
  });
  // it('should display current buisness name', () => {
  //   //
  // })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
