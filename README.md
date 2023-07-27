# Bank Transactions Web App

This repository contains a simple web application for managing bank transactions. The application is built using React and allows users to add, search, and delete transactions.

## Table of Contents

- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)

## Getting Started

To get started with this project, follow the instructions below to set up the development environment and run the application locally.

## Dependencies

The application relies on the following dependencies:

- React
- useState Hook
- useEffect Hook

## Usage

The application will be accessible at `http://localhost:3000` in your web browser.

## Components

The application is divided into several components, each serving a specific purpose. Here's a brief overview of each component:

1. `AddNewTransaction`: This component allows users to add a new transaction. It includes a form with inputs for date, description, category, and amount. Users can submit the form to add a new transaction.

2. `App`: The main application component that acts as a container for other components. It manages the state for the accountData, fetches data from a server on component mount, and provides functions to handle form submission, search, and transaction deletion.

3. `SearchBar`: This component provides a search input field to filter transactions based on a search term. It communicates with the App component to trigger the search functionality.

4. `TransactionList`: This component displays a table of transactions. It receives the data from the App component and renders individual transactions using the `Transaction` component. It also provides a function to delete transactions.

5. `Transaction`: This component represents an individual transaction row in the table. It displays the transaction's date, description, category, and amount. It also includes a delete button that triggers the delete functionality.

Please note that this application does not include backend functionality to persist data. Transactions are stored in the application's state during the session and will be lost upon refreshing the page.

Feel free to explore the code and modify it according to your requirements. Happy coding!