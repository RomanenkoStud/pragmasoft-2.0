---
title: Resume
image: ~/assets/images/project/cloud/resume-io.jpg
category: cloud
tags:
  - Google Appengine (GAE)
  - JavaEE
  - JDO
  - CDI
  - iText
metadata: 
  keywords: Pragmasoft, cloud computing, RESUME
  description: RESUME – cloud based resumes management and hosting application. This is multitenant application for individuals and recruiting companies. Developed by Pragmasoft
---

*Technologies:* Google Appengine (GAE), JavaEE, JDO, CDI, iText, Freemarker, Memcached, JavaMail, Oauth, OpenID, SASS/Compass, JQuery, JQuery UI, HTML5, CSS3.

Resumes.io is cloud based resumes management and hosting application.

This is multitenant application for individuals and recruiting companies to edit, host and maintain CV records. Users can register and login using OpenID or Oauth2 authentication providers, like Google, Twitter, Facebook.  It is designed with scalability and fault tolerance in mind, architecture is based on cloud technologies. Backend is implemented using Google Appengine (GAE) PaaS with Java SDK. Google's NoSQL datastore is used to store CV records. Pre-rendered CV documents are served from blobstore. Secondary services, like Memcached, CDN (Cloudflare) are used to improve performance. Frontend side is implemented using SASS/Compass modern HTML5/CSS3 framework and extensive use of JQuery and JQuery UI components to provide fast and fresh looking UI.

![Resume](~/assets/images/project/cloud/resume-1.jpg)
![Resume](~/assets/images/project/cloud/resume-2.jpg)
