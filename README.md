# 🌊 Far Away - Packing List App

A simple and intuitive packing list app built with React. This app allows users to easily manage their packing list by adding, deleting, and toggling the "packed" status of items for an upcoming trip. It's the perfect tool to help you stay organized and ensure you don't forget any essentials!

![Packing List App]

## Features

- **Add Items:** Easily add items to your packing list with custom quantities.
- **Mark as Packed:** Toggle items between packed and unpacked states.
- **Delete Items:** Remove items you no longer need on your list.
- **Real-time Stats:** View statistics on the number of items packed and the percentage of completion.
- 
## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/) (optional but recommended for version control)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/packing-list-app.git
   cd packing-list-app
   ```
Install the dependencies:

```bash
npm install
```
Start the development server:

```bash
npm start
```
Open the app in your browser:

```bash
http://localhost:3000
```
Usage:
Add an Item: Enter an item description and quantity, then click the "Add" button to add it to your packing list.
Mark as Packed: Check the box next to an item to mark it as packed.
Delete an Item: Click the ❌ button next to an item to remove it from the list.
Monitor Progress: At the bottom of the page, you can view your packing progress and completion percentage.
📁 Project Structure
```bash
src/
├── components/
│   ├── App.js           # Main app component
│   ├── Logo.js          # Logo component
│   ├── Form.js          # Form to add new items
│   ├── PackList.js      # Component to display the list of items
│   ├── Item.js          # Individual item component
│   ├── Stats.js         # Statistics component to show progress
│── index.css              # Global styles for the app
├── index.js             # App entry point
└── ...
```
Technologies Used
React: A JavaScript library for building user interfaces.
CSS: For styling the components.
JavaScript (ES6): The logic and functionality behind the app.
