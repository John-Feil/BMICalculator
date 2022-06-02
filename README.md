Currently Deployed at: https://adultbmicalculator.web.app/

To deploy to firebase:

https://www.youtube.com/watch?v=pJfNHjDX98g&t=293s&ab_channel=Chaby%27sTech

https://www.positronx.io/deploy-angular-app-to-production-with-firebase-hosting/

I used these two resources to deploy my project, I recommend to follow the video first as its more up to date and easier to follow along with, however the article does go into more detail so I still recommend checking it out. I did encounter one part of the process that neither of the resources mention. After you use the command 'firebase init' it will eventually ask you if you want to make or use a new firebase project, if you followed the steps correctly you should've already made a new project on the firebase website. So you select 'Use a existing project' and then select the name you used.

My brief explantion of the steps:

Step 1: Visit https://console.firebase.google.com/u/0/
        Make a account and then 'create a project' Then set up the project's name and accept all of their terms. (If needed use default or the first option for any choices)
        
Step 2: Go to your command line and type: npm install -g firebase-tools 
        This should globally install of the tools you need to use firebase

Step 3: Go to the terminal and the directory of the project you wish to deploy, the type in firebase login
        It should bring up your browser for you to login/ or just confirm. accept and login
        
Step 4: type ng build in the same terminal/directory to build your app to a format for firebase

Step 5: type in firebase init which will start intializing the entire process

Step 6: firebase init questions:


  Question 1: Are you ready to proceed  ,  type Y
  
  Question 2: Which firebase features would you like?  , use the arrow keys to go to 'Hosting: config files for firebase hosting...', then press space and enter
  
  Question 3: let's associate this project directory with a Firebase project.....    , use arrow keys to go down to use an existing project, and select the project       name you made during step 1.
  
  Question 4: What do you want to use as your public directory?   , navigate to your package.json and make note of your app's name (should be one of the first lines)
  then type in dist/(whatever the name of your app is)  ex: if my name was bmi-calculator it would be dist/bmi-calculator
  
  Question 5: Config to a single page app?   , type y
  
  Question 6: Set-up auto-build and deploy with github?   , type N
  
  Question 7: File already exists, override it?   , type y
  
  
  
  Step 7: After you make any changes you wish to use, make sure to type ng build --aot

  Step 8: type in firebase deploy and it should deploy and provide a link for you to go and check out your page!









# BmiCalculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
