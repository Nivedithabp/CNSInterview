import { Component, OnInit } from '@angular/core';
import { Structure, StructureDetail } from '../../model/interface/structure';
import { AnatomicalStructuresService } from '../../services/anatomical-structures.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anatomical-structures',
  imports: [CommonModule ],
  templateUrl: './anatomical-structures.component.html',
  styleUrl: './anatomical-structures.component.css'
})
export class AnatomicalStructuresComponent implements OnInit {
  
  anatomicalStructures: Structure[] = [];
  filteredStructures: Structure[] = [];
  searchQuery: string = '';

  selectedStructureDetails: StructureDetail | null = null;
  errorMessage: string = '';

  // PHASE I  
  constructor(private anatomicalService: AnatomicalStructuresService) {}

  ngOnInit(): void {
    this.anatomicalService.fetchAnatomicalStructures().subscribe(data => {
      this.anatomicalStructures = data;
      this.filteredStructures = data; // Initialize filtered structures
    });
  }

  onSearch(): void {
    this.filteredStructures = this.anatomicalStructures.filter(structure =>
      structure.name?.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // PHASE II
  showDetails(id: string): void {
    if (!id) {
      this.errorMessage = 'Invalid structure ID';
      return;
    }

    this.anatomicalService.getStructureDetails(id).subscribe(
      (details) => {
        this.selectedStructureDetails = details;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Failed to fetch structure details';
        this.selectedStructureDetails = null;
      }
    );
  }

  closeModal(): void {
    this.selectedStructureDetails = null;
    this.errorMessage = '';
  }

}
