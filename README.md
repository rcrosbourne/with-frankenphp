### How to use this template

1. Create a new repository using this template
2. Clone the repository to your local machine
3. Edit `.ddev/config.yaml` to change the project name. Replace `laravel-starter-template` with your project name
4. Edit `vite.config.js` to change the project name under sever block. Replace `laravel-starter-template` with your project name
5. Run `ddev start` to start the development server
6. Run `ddev composer install` to install dependencies
7. Run `ddev npm install` to install dependencies
8. Run `ddev npm run build` to build the project assets
9. Run `ddev artisan key:generate` to generate the application key
10. Uncomment the line in  `.ddev/web-build/Dockerfile.octane`
11. Run `ddev restart` to restart the development server
12. Run `ddev artisan migrate` to run the database migrations
13. Run `ddev status` to check the status of the development server
14. Click on the link under the project name to view the site
