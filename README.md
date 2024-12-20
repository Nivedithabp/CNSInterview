# CNSInterview

# Anatomical Structures Data Display

This project retrieves and displays data related to anatomical structures using APIs, implemented in two phases. The goal is to fetch data, display a list of unique anatomical structures, and provide additional details on user interaction.

## Phase I: Fetch and Display Data

### API Endpoint:
```
https://apps.humanatlas.io/asctb-api/v2/1SqNmcPDB8PrZF1BhzgdKBxkfLcCR8VYMAkSIbnK_AXA/949267305
```

### Objective:
- Fetch data containing `anatomical_structures`, `cell_types`, and `biomarkers`.
- Extract unique anatomical structures (unique by name).
- Display these structures in a visually appealing card-based UI.

### Output
<img width="1371" alt="Screenshot 2024-12-20 at 9 04 31 PM" src="https://github.com/user-attachments/assets/88a79c09-d6c3-4975-8e31-632eabee7901" />
 

## Phase II: Display Detailed Information

### API Endpoint:
```
https://www.ebi.ac.uk/ols/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/UBERON_0002302
```

### Objective:
- Fetch and display the following details for a structure in a modal:
  - **Name** (label)
  - **Description** (description or annotation.definition)
  - **Ontology Link** (obo_id)
  - **IRI** (iri)
- For invalid or missing IDs, show appropriate error messages.

### UI Features:
- Clicking a structure name opens a modal with details fetched from the API.
- Modal includes a close button to hide details.

### Output
<img width="1378" alt="Screenshot 2024-12-20 at 9 04 51 PM" src="https://github.com/user-attachments/assets/5db9a56d-2258-49f8-a3ad-26bd66fd809a" />

## Technologies Used
- **Frontend**: Angular 18
- **Styling**: Bootstrap
- **APIs**:
  - Human Atlas API
  - EBI Ontologies API

## Key Implementation Details

### Proxy Configuration:
A proxy file was used to handle CORS issues while accessing APIs.

#### `proxy.conf.json`:
```json
{
  "/ols": {
    "target": "https://www.ebi.ac.uk",
    "secure": true,
    "changeOrigin": true
  }
}
```

The `angular.json` file was updated to use the proxy during development. However, note that **GitHub Pages does not support proxy configurations**, so API calls will not work on the deployed version.

### Modal Implementation:
- Used Bootstrap modals for a user-friendly display.
- Error handling ensures smooth feedback for missing or invalid data.

## Deployment
- Built and hosted on **GitHub Pages**.
- Configured `.nojekyll` to bypass Jekyll processing.
- Added `404.html` for proper Angular routing.

### Deployment Link
[Visit the hosted project](https://nivedithabp.github.io/CNSInterview/).
Issue of using proxy is details links are not working in github pages 

### Note:
Due to limitations with proxy setups on GitHub Pages, direct API calls will not work on the deployed version. Please run the project locally for full functionality.

## How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nivedithabp/CNSInterview.git
   cd CNSInterview/angular18_project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   ng serve
   ```

4. **Build the project for production:**
   ```bash
   ng build --configuration production
   ```

---

This project showcases API integration, UI design, and Angular best practices.

