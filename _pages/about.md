---
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I'm currently a fifth-year PhD student in the [Aerospace Controls Laboratory](https://acl.mit.edu/) at MIT working with [Jonathan How](http://www.mit.edu/people/jhow/). I'm funded by the NSF GRFP and through the Draper Scholars program. I received my SM degree from MIT in 2023 (supervised by [Kerri Cahoy](https://aeroastro.mit.edu/people/kerri-cahoy/)) and an SB in Aerospace Engineering from MIT in 2021.

---
I will be defending my PhD on [July 23, 2026](/defense/). **I'm on the job market!** I'm looking for a research scientist position in the robotics or space industry. I'm especially interested in roles that focus on optimization, control, or motion planning. 

---
My research focuses on **safe motion planning under uncertainty** for robotics and space applications. Specifically, my recent work focuses on improving the **practical usability** of **belief roadmapping** by
improving roadmap accuracy, improving roadmap coverage, and by providing efficient methods to reduce the cost of belief-space trajectories. I develop new theoretical results on **reachability** in belief space,
and leverage these new theoretical ideas to develop new and improved algorithms for belief-space planning. The goal of my work is to develop autonomous systems that are capable of safe real-time exploration and trajectory 
planning via belief-space planning.

Before starting my PhD, I studied on-orbit machine learning and underactuated control in the [Space Telecommunications, Astronomy, and Radiation (STAR) Lab](https://starlab.mit.edu/) at MIT, supervised by [Kerri Cahoy](https://aeroastro.mit.edu/people/kerri-cahoy/).

<div class="featured-papers">
{% for permalink in site.data.featured_papers %}
  {% assign pub = site.publications | where: "permalink", permalink | first %}
  {% if pub %}
  <div class="featured-papers__item">
    <div class="featured-papers__thumb">
      <img src="/images/publications/{{ pub.image }}" alt="{{ pub.title }}">
    </div>
    <div class="featured-papers__title">{{ pub.title }}</div>
  </div>
  {% endif %}
{% endfor %}
</div>

<style>
.featured-papers{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
  gap:1.75em;
  margin:1.5em 0;
}
.featured-papers__item{
  display:flex;
  flex-direction:column;
}
.featured-papers__thumb{
  display:flex;
  align-items:center;
  justify-content:center;
  aspect-ratio:4/3;
  background:#fff;
  border:1px solid rgba(0,0,0,0.08);
  border-radius:4px;
  overflow:hidden;
}
.featured-papers__thumb img{
  max-width:100%;
  max-height:100%;
  object-fit:contain;
}
.featured-papers__title{
  margin-top:0.6em;
  font-size:0.9em;
  font-weight:600;
  text-align:center;
}
</style>

---

# Recent News
{% for item in site.data.news limit:4 %}
- {{ item }}
{% endfor %}

**[Archived News](/archived-news/)**
