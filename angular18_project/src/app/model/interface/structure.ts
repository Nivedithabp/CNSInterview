export enum BM_TYPE {
    G = 'gene',
    P = 'protein'
  }
  
  export interface Structure {
    name?: string;
    id?: string;
    rdfs_label?: string;
    b_type?: BM_TYPE;
  }
  
  export interface Row {
    anatomical_structures: Array<Structure>;
    cell_types: Array<Structure>;
    biomarkers: Array<Structure>;
  }

  export interface StructureDetail {
    name: string; 
    description: string; 
    ontologyLink: string; 
    iri: string; 
  }
  
  