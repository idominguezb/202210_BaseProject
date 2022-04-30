/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { VehicleListComponent } from './vehicle-list.component';
import { Vehicle } from '../vehicle';
import { faker } from '@faker-js/faker';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehicleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;

    const vehicles = [];

    for (let i = 0; i < 3; i++) {
      vehicles.push(
        new Vehicle(
          faker.datatype.number(),
          faker.random.word(),
          faker.random.word(),
          faker.random.word(),
          faker.vehicle.model(),
          faker.random.word(),
          faker.vehicle.color(),
          faker.image.avatar()
        )
      )
    }
    component.vehicles = vehicles;
    fixture.detectChanges();
  });

  it('should render head', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('table thead').length).toEqual(1);
  });

  it('should have 3 elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('table tbody tr').length).toEqual(3);
  });
});
