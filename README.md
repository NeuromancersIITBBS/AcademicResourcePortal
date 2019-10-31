## AcademicResourcePortal

<p align="center">
  <img width="250" height="200" src="/public/images/arpCommunity.jpeg">
</p>

- A portal which would host academic resources exclusively for the students of IIT Bhubaneswar.

- This repository consists of the codes for frontend of Academic Resource Portal.

## Table of Contents

- [Basic Application of the project](#basic-application-of-the-project)

- [Features](#features)

- [Description of MVC model implementation](#description-of-mvc-model-implementation)

- [Home Page](#home-page)

- [Upload Page](#upload-page)

- [Admin Page](#admin-page)

- [Built With](#built-with)

- [Contributing and Deploying in loacal machine](#contributing-and-deploying-in-loacal-machine)

- [Link to Backend Git Repository](#link-to-backend-git-repository)

- [Contributors](#contributors)

- [Contact Us](#contact-us)



## Basic Application of the Project

One can upload and download resources, which are useful for Academic purposes, like Question papers, Tutorials, Quizzes, Materials,etc wih the help of this portal. The resources would be examined by the Admins before being uploaded, to ensure that users are provided the correct content.



## Features

- Google Sign-in enabled

- Authentication employed to allow only IIT Bhubaneswar community to upload resources.

- Resources can be flagged by users if found to be inappropriate along with specifying the reason for flagging it.

- Compatible with all kinds of devices (with the help of BootStrap).

- Option to upload multipe resources at the same time.

- Implementation of MVC Model in the front-end, making the code more organized and easy to undertand.

- Execution of Admin page consisting of various functions to ease the work of Admins monitoring the resources and providing the right information to the Users.



## Description of MVC model implementation

The frontend was implemented using the MVC model which consists of three parts namely Model, View and Controller, apart from the interface.The users directly interact with the interface which calls View to perform specific functions and view further communicates with controller and passes the request to Controller and viceversa, Controller is the only point of contact between view and model. While model passes the requests from contoller to backend and returns the response if any from Backend to the Controller, controller returns the response to view, which finally displays the output to the user.



## Home Page

- The top most bar has the links to Home Page, Upload page and Contact Us page, which would remain thoughout all pages in the portal. Also the logo of IIT BBS placed at the top left corner too has emedded link to Home Page.

- Next it consists of Search Bar, which operates by Search by Subject method as follows :

    (i) The search routine gets a list of all subjects (irrespective of branh) as soon as the home page loads.(The functions for these operations are present in searchBar.js file.

    (ii) Search is done by simple substring checking.

    (iii) The file searchModel.js which contains functions to fetch data from Backend and return to searchController.js which further sorts the result and sends to searchBar.js in view.


- All branches are hardcoded on HomePage into respective school cards/boxes.

- Clicking on specific branches opens up its own page consisting of list of all subjects, selecting a subject would load its own subjectTemlate.html page.

- The subjectTemplate.html page displays all the resources of the particular subject in different cards based on their type.

- Sorting into cards is implemented in controller. Model function from modelUtils.js helps in fetching the data from server.

- Clicking on resource would trigger the downloadResource function from subjectTemplate.js file in View, which will request the file to be downloaded through the similar MVC cycle.
- There are also options to flag a resource and to delete a resource which which are also implemented using functions from subjectTemplate.js file in view and using the MVC path.



## Upload Page

- The upload form consists of a form container consisting of various details of the resource to be filled by the user.

- It alo consists of options to upload more resources and remove a form which user might not want to uplaod.  

- Uploading a file would require Google Sign-in, which would be triggered on clicking the Submit button, only iitbbs.ac.in domained e-mails would be allowed. The view functions for upload page are written in uploadTemplate.js file in View.

- This email-id will be appened to FormData object, which also consists of the information about the resource being uploaded along with the uploaded PDF of the resource.

- The PDF will be uploaded in the firebase database and the downloadable link will be appeneded to the formdata which will be sent to the server. The controller functions in uploadController.js file calls the uploadModel.js, which contains the functions to do the above operations.

- The uploaded files will be marked directly as unreviewed and would be sent to the admin page for reviewing.



## Admin Page

- The page can be only accessed by Admins of the project.

- Admins moniter the uploaded resorces, which are either unreviewed or flagged by users.

- The page has options to delete a file, unflag a file, mark a file as reviewed and change the information in a form data.

- The reviewed files approved by the admins would be uploaded to the main page.


## Built With

* [Firebase](https://firebase.google.com/) - Database, Storage.
* [Github Pages](https://pages.github.com/)  Hosting the portal.


## Contributing and Deploying on loacal machine

- Fork the repository https://github.com/NeuromancersIITBBS/AcademicResourcePortal.git and download the code to your local system using 'git clone' command.

- A new method can be suggested to implement the functions in model/uploadModel.js to upload the files in firebase storage and also to extract the downloadable link and the storage loaction of the resource.

- Do verify by testing on loacl machine, any changes you would like to contribute to our codes.

- Create a pull request explaining the details of the changes made.


## Link to Backend Git Repository

https://github.com/NeuromancersIITBBS/ARP_Backend.git


## Contributors

- Rishabh Gupta (Project Lead)
- Aashay Palliwar
- Anuj Gupta
- Raj Shah
- T.V.S.S.Sripad
- Pradyuman Agrawal
- Jayakar Reddy
- Sreekanth Vadigi
- Erva Nitish Kumar


## Contact us

   You can put your queries to us at **secyprogsoc.sg@iitbbs.ac.in**
