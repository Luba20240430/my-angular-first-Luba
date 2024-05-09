import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentLubaComponent } from './test-component-luba.component';

describe('TestComponentLubaComponent', () => {
  let component: TestComponentLubaComponent;
  let fixture: ComponentFixture<TestComponentLubaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponentLubaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestComponentLubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
