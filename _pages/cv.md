---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

A PDF of my CV (last updated January 2024) can be downloaded [here](/assets/pdfs/alex-meredith-cv.pdf).

Education
======
* Ph.D. in Aerospace Engineering, Massachusetts Institute of Technology, 2026 (expected)
* S.M. in Aerospace Engineering, Massachusetts Institute of Technology, 2023
* B.S. in Computer Science and Engineering, Massachusetts Institute of Technology, 2021

Research Interests
======
* Robust control of nonlinear systems
* Adaptive control
* Safe control and safe learning

Fellowships & Awards
======
* NSF Graduate Research Fellowship (GRFP)
* Draper Fellowship
* Best Presentation Award, Remote Sensing Data Management Technologies in GeoScience Workshop (2022)

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>

Work Experience
======
* **E-Space** (June–August 2021)
  * Attitude Control Lead (intern at stealth-stage startup)
  * Developed physics-based attitude control and orbital dynamics simulation; novel sun/Earth horizon detection algorithm from IR camera

* **Analytical Graphics, Inc. (AGI)** (June–August 2020)
  * Modeled CubeSat communications constellation for disaster response in STK
  * Earned STK Level 1/2/3, ODTK Level 1, and STK-Python Integration certifications

* **Microsoft** (Summer 2019, 2018, 2017)
  * 2019: Software Engineering Intern, Digital Security and Risk Engineering Red Team — Twitter NLP/CNN pipeline for cybersecurity threat intelligence
  * 2018: Data Management Intern (Microsoft Explore) — Azure monitoring dashboard
  * 2017: High School Intern, data cleaning and processing

Skills
======
* Python, C++, MATLAB
* Machine learning (PyTorch, deep learning, equivariant networks)
* Controls (nonlinear control, adaptive control, convex optimization)
* Satellite systems (ADCS, orbital mechanics, STK)
