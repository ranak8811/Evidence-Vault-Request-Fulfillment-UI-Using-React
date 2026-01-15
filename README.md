# Compliance Dashboard UI

This project is a small React application built with React, demonstrating a user interface for a Compliance Dashboard. It simulates the user experience for a factory user managing evidence and fulfilling buyer requests, inspired by SentryLink Comply Phase A.

## Features

- **Evidence Vault (List Screen)**:
  - Displays a table of compliance documents with columns: Doc Name, Doc Type, Status, Expiry, Versions, Last Updated, and Actions.
  - **Filtering**: Documents can be filtered by Doc Type, Status, Expiry (All, Expired, Expiring Soon), and a search input for document names.
  - **URL Persistence**: Filters automatically persist in the URL query string.
  - **Bulk Select**: Allows selection of multiple rows with an "Add to Pack" button showing the selected count.
- **Evidence Detail + Versions Screen**:
  - Shows detailed metadata for a selected evidence item, including Name, Type, Status (using a `StatusChip`), and Expiry date.
  - **Version History**: Displays a table of all versions for the evidence, including Version number, Date, Uploader, Notes, and File Size.
  - **Upload New Version**: A button opens a modal to "upload" a new version. The modal includes fields for notes (required), an optional expiry date, and a fake file input. Submitting updates the local evidence state.
- **Buyer Request To-Do Screen**:
  - Lists buyer requests in a table with columns: Document Name, Doc Type, Due Date, Status (using a `StatusChip`), and an Action button.
  - **Fulfill Request**: Clicking "Fulfill" opens a modal, allowing the user to either select an existing evidence document from the vault (filtered by document type) or "create" a new mock evidence document (name input only). Submitting marks the request as "Fulfilled" in the local state.
- **Reusable UI Components**: Includes generic `DataTable`, `Modal`, and `StatusChip` components built using DaisyUI.
- **Navigation**: A fixed top navigation bar with links to "Evidence Vault" and "Buyer Requests".
- **Home Page**: A welcome page with a background image, clear calls to action, and links to the main sections of the dashboard.
- **Styling**: Utilizes Tailwind CSS and DaisyUI for a clean, responsive, and modern look.
- **Local State Management**: All data and state changes are managed locally using React's `useState` and `useEffect` hooks, relying on mocked JSON data (no backend required).

## Technologies Used

- **Vite**: Fast development build tool.
- **React**: JavaScript library for building user interfaces.
- **DaisyUI**: Tailwind CSS component library.
- **Tailwind CSS**: A utility-first CSS framework.
- **React Router DOM**: For declarative routing in React applications.

## How to Run the Project Locally

To get this project up and running on your local machine, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/ranak8811/Evidence-Vault-Request-Fulfillment-UI-Using-React.git
cd Evidence-Vault-Request-Fulfillment-UI-Using-React
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using Yarn:

```bash
yarn install
```

### 3. Start the Development Server

Using npm:

```bash
npm run dev
```

Or using Yarn:

```bash
yarn dev
```

The application will typically be available at `http://localhost:5173/` or `http://localhost:5174/` if the default port is in use.

## Main Routes

- `/` - Home Page
- `/vault` - Evidence Vault (List)
- `/vault/:id` - Evidence Detail
- `/requests` - Buyer Requests

## Mock Data

The application uses mock data defined in `src/data/mockData.js` to simulate evidence items and buyer requests. This data can be modified to test different scenarios.
