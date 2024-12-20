import { Component, OnInit } from '@angular/core';
import { Structure } from '../../model/interface/structure';
import { AnatomicalStructuresService } from '../../services/anatomical-structures.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anatomical-structures',
  imports: [CommonModule],
  templateUrl: './anatomical-structures.component.html',
  styleUrl: './anatomical-structures.component.css'
})
export class AnatomicalStructuresComponent implements OnInit {
  
  anatomicalStructures: Structure[] = [];
  filteredStructures: Structure[] = [];
  searchQuery: string = '';

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

}
