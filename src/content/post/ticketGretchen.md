---
title: Ticket Gretchen
image: ~/assets/images/project/cloud/Mobile-Ticketing.jpg
category: mobile
tags:
  - JavaEE6
  - AWS
  - DynamoDB
  - JPA
  - EJB3
  - Cordova
---

*Technologies:* JavaEE6 based and uses cloud technologies (AWS, EC2, DynamoDB, S3, CloudFront) for scalability and fault tolerance, as well of set of modern JavaEE APIs - JPA for persistence, EJB3 for business logic, CDI for dependency injection, JAX-RS for RESTful API, JCA connectors to integrate with 3rd party ticketing systems. 
It uses Jboss AS 6 Appserver and MySQL database for persistent storage.

The purpose of Ticket Gretchen application is to enable european customers to buy tickets for arbitrary events, museums, etc. through one consistent mobile user interface. Ticket Gretchen is now available "here":http://ticketgretchen.com/.

The app has three main functional requirements:

* Comprehensive information about the cultural offerings in a city
* Consistent and simple ticket shop, regardless where the ticket comes from 
* Administration of bought tickets, reservations (upcoming and past)

Server side application is JavaEE6 based and uses cloud technologies (AWS, EC2, DynamoDB, S3, CloudFront) for scalability and fault tolerance, as well of set of modern JavaEE APIs - JPA for persistence, EJB3 for business logic, CDI for dependency injection, JAX-RS for RESTful API, JCA connectors to integrate with 3rd party ticketing systems. 
It uses Jboss AS 6 Appserver and MySQL database for persistent storage.

Client side is implemented as Apache Cordova/Phonegap Android and iOS clients, using jQuery Mobile and Backbone.js as UI and MVC frameworks. Special care was taken for multilingual support and security. Oauth2 was used to simplify user's authentication.

![Ticket Gretchen](~/assets/images/project/cloud/mtp-1.jpg)
![Ticket Gretchen](~/assets/images/project/cloud/mtp-2.jpg)
![Ticket Gretchen](~/assets/images/project/cloud/mtp-3.jpg)
![Ticket Gretchen](~/assets/images/project/cloud/mtp-4.jpg)
![Ticket Gretchen](~/assets/images/project/cloud/mtp-5.jpg)
