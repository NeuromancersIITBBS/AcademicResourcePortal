# AcademicResourcePortal
- A portal which would host academic resources exclusively for the students of IIT Bhubaneswar.
- This repository consists of the codes for frontend of Academic Resource Portal.

## Table of Contents

- [Basic Application of the project](#basic-application-of-the-project)

- [Features](#features)

- [Description of MVC model implementation](#description-of-mvc-model-implementation)

- [Home Page implementation](#home-page-implementation)

- [Upload Page implementation](#upload-page-implementation)

- [Admin Page implementation](#admin-page-implementation)

- [Contact Us](#contact-us) 


## Basic Application of the Project

One can upload and download resources, which are useful for Academic purposes, like Question papers, Tutorials, Quizzes, Materials,etc wih the help of this portal. The resources would be examined by the Admins before being uploaded, to ensure that users are provided the correct content.


## Features

- Google Sign-in enabled

- Authentication employed to allow only IIT Bhubaneswar community to upload resources. 

- Resources can be flagged by users if found to be inappropriate along with specifying the reason for flagging it.

- Compatible with all kinds of devices (with the help of BootStrap).

- Option to upload multipe resources at the same time.

- Implementation of MVC Model in the front-end, ensuring user-friendly experience.

- Execution of Admin page consisting of various functions to ease the work of Admins monitoring the resources and providing the right information to the Users.


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

- This page can be only accessed by Admins of the project.

- Admins moniter the uploaded resorces, which are either unreviewed or flagged by users.

- The page has options to delete a file, unflag a file, mark a file as unreviewed and change the information in a form data.

- The unreviewed files if approved by the admins would be uploaded to the main page.



## Contact us
 
   You can put your queries to us at **secyprogsoc.sg@iitbbs.ac.in**
