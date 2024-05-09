import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentLuba1Component } from './test-component-luba1.component';

describe('TestComponentLuba1Component', () => {
  let component: TestComponentLuba1Component;
  let fixture: ComponentFixture<TestComponentLuba1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponentLuba1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestComponentLuba1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
