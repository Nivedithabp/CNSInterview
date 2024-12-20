import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AnatomicalStructuresComponent } from './anatomical-structures.component';
import { AnatomicalStructuresService } from '../../services/anatomical-structures.service';

describe('AnatomicalStructuresComponent', () => {
  let component: AnatomicalStructuresComponent;
  let fixture: ComponentFixture<AnatomicalStructuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AnatomicalStructuresComponent], // Use imports for standalone component
      providers: [AnatomicalStructuresService], // Provide the required service
    }).compileComponents();

    fixture = TestBed.createComponent(AnatomicalStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
