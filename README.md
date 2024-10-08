# Footprints

A web application to calculate and display the user's carbon footprint based on their travel, transportation, tree planting, and meat consumption habits. The application supports multiple languages (English and Marathi) using i18next for localization.

### Table of Contents

- Features
- Technologies
- Project Setup
- Folder Structure
- Usage
- Localization
- License

### Features

- Simple form to input travel, transportation, tree planting, and meat consumption details.
- Modal displaying a carbon footprint score based on user input.
- Language support for English and Marathi using i18next.
- Dynamic language switching between English and Marathi without page reload.

Technologies

- HTML: Structure of the application.
- CSS: Styling for the application.
- TypeScript: Logic and form handling.
- i18next: Internationalization and localization for language support.
- Vite: Build tool for modern web development.

### Project Setup

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Avaneesh-Chopdekar/footprints.git
   cd footprints
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to http://localhost:5173 to view the app.

### Folder Structure

The project follows this folder structure:

```
footprints/
│
├── public/
│ └── locales/
│     |── en/
│     |    └── translation.json
│     └── mr/
│          └── translation.json
│
├── src/
│ └── main.ts
│ └── style.css
│ └── types.ts
│ └── util.ts
│ └── vite-env.d.ts
│
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
└── README.md
├── tsconfig.json
├── vite.config.ts
```

`public/locales/`: Contains translation files for English (`en`) and Marathi (`mr`).
`src/main.ts`: The main TypeScript file containing logic for handling form submission and localization.
`index.html`: The main HTML file for the project.
`styles.css`: Styles for the web page.

### Usage

#### Form Inputs

The form asks for the following inputs:

- How often do you travel? (Number input)
- Medium of transportation (Select input: car, bus, bike, walk)
- Kilometers traveled (Number input)
- Number of trees planted (Number input)
- Meat consumption frequency (Select input: never, rarely, often)

### Language Switching

You can switch between languages by clicking the buttons:

- English: `English`
- Marathi: `मराठी`

### Localization

The app uses i18next for internationalization and localization.

#### How Localization Works

- Translation files are stored in the public/locales/ directory.
- i18next dynamically updates the text on the page based on the selected language.
- Language detection can automatically switch between languages or be manually triggered by the user.

##### Add a New Language

To add a new language:

- Create a new folder in public/locales/ for the new language (e.g., fr for French).
- Add a translation.json file with the translated strings.
- Update the language switcher in the HTML file to include the new language.

Example folder structure for adding French:

```
public/
    locales/
        en/
            translation.json
        mr/
            translation.json
        fr/
            translation.json
```

License

This project is open-source and available under the MIT License.
