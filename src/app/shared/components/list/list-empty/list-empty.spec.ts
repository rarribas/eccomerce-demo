import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpty } from './list-empty';

describe('ListEmpty', () => {
  let component: ListEmpty;
  let fixture: ComponentFixture<ListEmpty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEmpty],
    }).compileComponents();

    fixture = TestBed.createComponent(ListEmpty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
