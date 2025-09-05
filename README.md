# Vizal Personal Portfolio

## Project Overview

This is a personal portfolio website built with React, TypeScript, and Tailwind CSS. It showcases professional experience, projects, and provides a contact form for potential opportunities.

## How to run this project locally

**Local Development Setup**

To run this project on your local machine, follow these steps:

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

This project can be deployed to any static hosting service such as:

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the build folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Firebase Hosting**: Deploy using Firebase CLI

To build the project for production:

```sh
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## Adding Your Resume

To add your actual resume PDF:

1. **Replace the placeholder PDF**:
   - Remove the existing `public/resume.pdf` (which is just a placeholder)
   - Add your actual resume PDF file as `public/resume.pdf`

2. **Resume file requirements**:
   - File must be named exactly `resume.pdf`
   - Place it in the `public/` directory
   - Recommended size: Under 5MB for better loading performance

3. **If no resume file is provided**:
   - The download buttons will show an alert message
   - Users will be prompted to contact you directly
   - This prevents broken download links
   - Downloads will be saved as `Vizal_S_L_Resume.pdf`
