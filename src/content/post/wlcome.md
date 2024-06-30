---
title: Wlcome
image: ~/assets/images/project/mobile/wlcome.jpg
category: mobile
tags:
  - J2EE (EJB 3.0, JPA, JAX-RS)
  - Arquillian for testing
---

*Technologies:* J2EE (EJB 3.0, JPA, JAX-RS), Arquillian for testing.
*Application server:* JBoss AS 7
*Version control system:* GIT.
Hosted on Openshift (www.openshift.com)


Set of applications for implementation loyalty program using mobile devices.

Contains 3 parts:

* Customer application
* Shop application
* Server
              
*Customer application.*

Installed on customer's mobile device and serves for notification about client's proximity to the nearest shop.

Developed as Android application. Currently supports only API 17 and higher versions of Android.
Application features:

* signs in and get profile info from Facebook
* signs in and get profile info from Google+
* works with proximity alerts
* works with camera (take picture and barcode scaner) and gallery
* calls RESTfull services on remote server

Used third-party SKDs and libs: 

* Google Play services SDK
* Facebook SDK
* modified barcode image processing library (ZXing)
* modified crop image library


*Shop application.*

Installed on shop's mobile device and service for managing customers in loyalty program.

Developed as Android application. Currently supports only API 17 and higher versions of Android.

Application features:

* uses Google Cloud Messaging for Android
* calls RESTfull services on remote server
* works with camera (barcode scaner)

Used third-party SKDs and libs:

* Google Play services SDK
* modified barcode image processing library (ZXing)

*Server.*

Provides the communication between the client's and shop's applications 
Implemented as JavaEE REST application

Application features:

* provides set of REST resources for managing clients and shops requests
* sends data to a shop application via the chosen GCM connection server

![Wlcome](~/assets/images/project/mobile/wlcome-1.jpg)
![Wlcome](~/assets/images/project/mobile/wlcome-2.jpg)
![Wlcome](~/assets/images/project/mobile/wlcome-3.jpg)
![Wlcome](~/assets/images/project/mobile/wlcome-4.jpg)
