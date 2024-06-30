---
title: Z. P. C.
image: ~/assets/images/project/java/zpc.png
category: java
tags:
  - Rubix
  - React JS
---

*Technologies:* Rubix, React JS.

The project is pure client side demo, based on rubix template, and using same build tools rubix has.

It needs to display two tabs or subpages, both containing zoomable partition charts and filters.

For features use "radial tree":http://bl.ocks.org/mbostock/4063550.

For test use "zoomable partition":http://mbostock.github.io/d3/talk/20111018/partition.html.

data should be static json, packaged with the app, long enough, about 500 records each.

Domain model has 2 hierarchical entities:

1) Requirement spec terms with features, subfeatures, etc.

2) Test siutes, containing nested test suites of arbitrary levels, containing test cases.

These are related to each other as many to many, ie one feature can be covered by many or none tests, and one test can cover many features.

Both pages should have freetext search field, entering text there will filter the tree to contain only items with such substrings and their children.

![Z. P. C.](~/assets/images/project/java/zpc1.png)
![Z. P. C.](~/assets/images/project/java/zpc2.png)
