# Angular18Project

# Anatomical Structures Data Display

## Overview
This project demonstrates data retrieval, processing, and display of anatomical structures using APIs. It is built in Angular and focuses on modular development and best practices.

## Data Flow

### 1. **Fetching Data**
   - **API Endpoint**: 
     `https://apps.humanatlas.io/asctb-api/v2/1SqNmcPDB8PrZF1BhzgdKBxkfLcCR8VYMAkSIbnK_AXA/949267305`
   - **Purpose**: Fetch a list of anatomical structures, cell types, and biomarkers.
   - **Process**: Data is fetched and filtered to create a unique list of anatomical structures by their `name`.

   - **Implementation**:
     - `AnatomicalStructuresService` handles API calls using Angular's `HttpClient`.
     - Proxy configuration (`proxy.conf.json`) resolves CORS issues for the EBI Ontologies API.

### 2. **Displaying Data**
   - **UI**: Data is displayed in a responsive card-based layout using Bootstrap.
   - **Components**: 
     - `AnatomicalStructuresComponent` manages the display of the list.
     - Each card contains a structure name and ID, with clickable functionality to retrieve further details.

### 3. **Retrieving Detailed Information**
   - **API Endpoint**: 
     `https://www.ebi.ac.uk/ols/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/`
   - **Purpose**: Retrieve additional details like name, description, ontology link, and IRI.
   - **Process**:
     - When a user clicks on a structure, its ID is appended to the API URL.
     - Data is fetched and mapped to a modal-friendly format.

### 4. **Error Handling**
   - **Proxy Errors**: Proxy configuration resolves most issues.
   - **Invalid IDs**: Appropriate error messages are shown if an ID is invalid or unavailable.

### 5. **UI Interaction**
   - Modals display detailed information on structure click.
   - Close button to dismiss the modal and reset state.

## Project Structure
```
angular18_project/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── anatomical-structures/
│   │   │   │   ├── anatomical-structures.component.ts
│   │   │   │   ├── anatomical-structures.component.html
│   │   │   │   ├── anatomical-structures.component.css
│   │   ├── services/
│   │   │   ├── anatomical-structures.service.ts
│   │   ├── models/interface
│   │   │   ├── structure.ts
│   ├── environments/
│   │   ├── environment.ts
│   │   ├── environment.prod.ts
│   ├── styles.css
├── proxy.conf.json
├── angular.json
```

### Key Directories and Files
1. **Components**: Contains UI logic for displaying and interacting with data.
2. **Services**: Handles API integration and data transformation.
3. **Models**: Defines TypeScript interfaces for consistent data handling.
4. **Proxy Configuration**: Manages CORS issues during development.

## Deployment
The project is deployed using GitHub Pages. Due to restrictions with GitHub Pages, certain proxy configurations may not function as intended for API calls, especially with external CORS restrictions.


### Note on Deployment
- `.nojekyll` ensures Angular's routing works without interference from Jekyll.
- `404.html` handles Angular's routing on GitHub Pages.

## Running the Project Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Nivedithabp/CNSInterview.git
   cd CNSInterview/angular18_project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   ng serve
   ```
   
