---
permalink: /defense2/
title: "PhD Thesis Defense"
---

<style>
  /* Decorative trajectory animation, sitting behind the mission-brief
     table -- purely visual, no custom fonts */
  .defense-hero{
    position:relative;
    margin:1.5em 0;
    min-height:340px;
    display:flex;
    align-items:center;
  }
  @media(max-width:560px){
    .defense-hero{ min-height:260px; }
  }
  .defense-traj{
    position:absolute;
    inset:0;
    z-index:0;
    width:100%;
    height:100%;
    pointer-events:none;
  }
  .defense-traj .traj-ellipse{
    fill:var(--global-base-color);
    fill-opacity:.18;
    stroke:var(--global-base-color);
    stroke-opacity:.55;
    stroke-width:1.5;
    animation:defense-ellipse-appear .3s ease-out both;
  }
  @keyframes defense-ellipse-appear{from{opacity:0;}to{opacity:1;}}
  @media(prefers-reduced-motion:reduce){
    .defense-traj *{animation:none!important;}
  }

  /* The theme's default figcaption style uses a serif "caption" font,
     which doesn't match the sans-serif body font used everywhere else
     on the site -- override it here so the walking instructions read
     the same as the rest of the page. */
  .defense-walk figcaption{
    font-family:inherit;
  }

  /* "Mission brief" info grid -- same layout idea as the original /defense
     page, but colors come from the site's theme variables and text uses
     the site's own font stacks (no Space Grotesk / IBM Plex here). */
  .defense-brief{
    position:relative;
    z-index:1;
    width:100%;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    border:1px solid var(--global-border-color);
    border-radius:6px;
    overflow:hidden;
    background:var(--global-bg-color);
    margin:0;
  }
  .defense-brief > div{
    padding:1em 1.1em;
    border-right:1px solid var(--global-border-color);
  }
  .defense-brief > div:last-child{ border-right:none; }
  .defense-brief .k{
    font-family:Monaco, Consolas, "Lucida Console", monospace;
    font-size:0.7em;
    letter-spacing:.08em;
    text-transform:uppercase;
    color:var(--global-text-color-light);
    margin-bottom:0.4em;
    font-weight:600;
  }
  .defense-brief .v{
    font-weight:700;
    font-size:1.1em;
    line-height:1.2;
    color:var(--global-text-color);
    text-decoration:none;
    display:block;
  }
  .defense-brief a.v{ color:var(--global-link-color); }
  .defense-brief a.v:hover{ text-decoration:underline; }
  .defense-brief .v span{
    display:block;
    font-weight:400;
    font-size:0.7em;
    font-family:Monaco, Consolas, "Lucida Console", monospace;
    color:var(--global-text-color-light);
    margin-top:0.3em;
  }
  @media(max-width:560px){
    .defense-brief{ grid-template-columns:1fr 1fr; }
    .defense-brief > div{ border-bottom:1px solid var(--global-border-color); }
    .defense-brief > div:nth-child(2n){ border-right:none; }
    .defense-brief > div:nth-last-child(-n+2){ border-bottom:none; }
  }
</style>


## Robust Probabilistic Path Planning in Uncertain Environments

<div class="defense-hero">
  <svg class="defense-traj" viewBox="0 0 760 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <g class="traj-group" transform="translate(40,0)">
      <ellipse class="traj-ellipse" transform="translate(10,327)"  rx="26" ry="19" style="animation-delay:.00s"/>
      <ellipse class="traj-ellipse" transform="translate(45,319)"  rx="26" ry="19" style="animation-delay:.08s"/>
      <ellipse class="traj-ellipse" transform="translate(80,308)"  rx="26" ry="19" style="animation-delay:.16s"/>
      <ellipse class="traj-ellipse" transform="translate(115,291)" rx="26" ry="19" style="animation-delay:.24s"/>
      <ellipse class="traj-ellipse" transform="translate(150,271)" rx="26" ry="19" style="animation-delay:.32s"/>
      <ellipse class="traj-ellipse" transform="translate(185,249)" rx="26" ry="19" style="animation-delay:.40s"/>
      <ellipse class="traj-ellipse" transform="translate(220,228)" rx="26" ry="19" style="animation-delay:.48s"/>
      <ellipse class="traj-ellipse" transform="translate(255,211)" rx="26" ry="19" style="animation-delay:.56s"/>
      <ellipse class="traj-ellipse" transform="translate(290,202)" rx="26" ry="19" style="animation-delay:.64s"/>
      <ellipse class="traj-ellipse" transform="translate(325,199)" rx="26" ry="19" style="animation-delay:.72s"/>
      <ellipse class="traj-ellipse" transform="translate(360,200)" rx="26" ry="19" style="animation-delay:.80s"/>
      <ellipse class="traj-ellipse" transform="translate(395,202)" rx="26" ry="19" style="animation-delay:.88s"/>
      <ellipse class="traj-ellipse" transform="translate(430,200)" rx="26" ry="19" style="animation-delay:.96s"/>
      <ellipse class="traj-ellipse" transform="translate(465,194)" rx="26" ry="19" style="animation-delay:1.04s"/>
      <ellipse class="traj-ellipse" transform="translate(500,181)" rx="26" ry="19" style="animation-delay:1.12s"/>
      <ellipse class="traj-ellipse" transform="translate(535,163)" rx="26" ry="19" style="animation-delay:1.20s"/>
      <ellipse class="traj-ellipse" transform="translate(570,140)" rx="26" ry="19" style="animation-delay:1.28s"/>
      <ellipse class="traj-ellipse" transform="translate(605,117)" rx="26" ry="19" style="animation-delay:1.36s"/>
      <ellipse class="traj-ellipse" transform="translate(640,97)"  rx="26" ry="19" style="animation-delay:1.44s"/>
      <ellipse class="traj-ellipse" transform="translate(675,80)"  rx="26" ry="19" style="animation-delay:1.52s"/>
    </g>
  </svg>

  <div class="defense-brief">
    <div>
      <div class="k">Date</div>
      <div class="v">Thursday, July 23<span>2026</span></div>
    </div>
    <div>
      <div class="k">Time</div>
      <div class="v">12:00 PM<span>–2:00 PM ET</span></div>
    </div>
    <div>
      <div class="k">Room</div>
      <div class="v">33-218<span>Building 33 · AeroAstro</span></div>
    </div>
    <div>
      <div class="k">Remote</div>
      <a class="v" href="#" target="_blank" rel="noopener">Join on Zoom<span>ID 962 4931 4934</span></a>
    </div>
  </div>
</div>

---

## On the map
Pinned just outside Building 33 (AeroAstro) — the exact spot where the photo route below begins.

<iframe
  src="https://maps.google.com/maps?q=42.360056,-71.094444&z=17&output=embed"
  title="Map: starting point outside MIT Building 33"
  width="100%" height="360" style="border:0; border-radius: 4px; margin-bottom: 1em;"
  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<a class="btn" href="https://www.google.com/maps/search/?api=1&query=42.360056,-71.094444" target="_blank" rel="noopener">Open in Google Maps →</a>
<a class="btn btn--inverse" href="https://maps.apple.com/?ll=42.360056,-71.094444&q=AeroAstro%20(Building%2033)" target="_blank" rel="noopener">Open in Apple Maps</a>

---

## Door to door, in photos
From the pin above to the conference room, step by step. The last frame is the door — Room 33-218.

<ol class="defense-walk">
<li><figure>
  <img src="/defense/photos/01.jpg" alt="Lawn and walkway in front of MIT Building 33" width="1440" height="1080">
  <figcaption><strong>Start outside Building 33.</strong> You're at the pin, on the lawn in front of the AeroAstro building. Head toward the stone facade.</figcaption>
</figure></li>
<li><figure>
  <img src="/defense/photos/02.jpg" alt="Approaching the main entrance of Building 33" width="1440" height="1080">
  <figcaption><strong>Walk up to the main entrance.</strong> Make for the central doors at the top of the steps.</figcaption>
</figure></li>
<li><figure>
  <img src="/defense/photos/03.jpg" alt="Ornate central entrance doors at the top of the steps" width="1440" height="1080">
  <figcaption><strong>Go in through the front doors.</strong> Through the tall ornate doors and into the lobby.</figcaption>
</figure></li>
<li><figure>
  <img src="/defense/photos/04.jpg" alt="Interior lobby with a sky-and-clouds mural beside a staircase" width="1440" height="1080">
  <figcaption><strong>Cross the lobby.</strong> Pass the sky mural and head for the stairwell.</figcaption>
</figure></li>
<li><figure>
  <img src="/defense/photos/05.jpg" alt="Base of the stairwell, stairs leading up" width="1440" height="1080">
  <figcaption><strong>Start up the stairs.</strong> Take the stairwell up toward the right level.</figcaption>
</figure></li>
<li><figure>
  <img src="/defense/photos/06.jpg" alt="Continuing up the stairwell" width="1440" height="1080">
  <figcaption><strong>Keep climbing.</strong> Up the next flight.</figcaption>
</figure></li>
<li><figure>
  <img src="/defense/photos/07.jpg" alt="Upper flight of the stairwell" width="1440" height="1080">
  <figcaption><strong>One more flight.</strong> Almost at the top.</figcaption>
</figure></li>
<li><figure>
  <img src="/defense/photos/08.jpg" alt="Landing at the top of the stairs" width="1440" height="1080">
  <figcaption><strong>Step out at the landing.</strong> Leave the stairwell at the top.</figcaption>
</figure></li>
<li><figure>
  <img src="/defense/photos/09.jpg" alt="Hallway with windows along one side" width="1440" height="1080">
  <figcaption><strong>Follow the hallway.</strong> Past the windows, straight ahead.</figcaption>
</figure></li>
<li><figure>
  <img src="/defense/photos/10.jpg" alt="Level 2 stairwell marker for Building 33" width="1440" height="1080">
  <figcaption><strong>Check the level marker.</strong> Confirm you're on the right floor. Keep going.</figcaption>
</figure></li>
<li><figure>
  <img src="/defense/photos/11.jpg" alt="Corridor with a large astrophotograph on the wall" width="1440" height="1080">
  <figcaption><strong>Into the corridor.</strong> Continue along the hallway.</figcaption>
</figure></li>
<li><figure>
  <img src="/defense/photos/12.jpg" alt="Long hallway with a blue stripe along the wall" width="1440" height="1080">
  <figcaption><strong>Down the long hallway.</strong> Keep following it.</figcaption>
</figure></li>
<li><figure>
  <img src="/defense/photos/13.jpg" alt="Near the end of the hallway, doors ahead" width="1440" height="1080">
  <figcaption><strong>Almost there.</strong> The door is just ahead.</figcaption>
</figure></li>
<li><figure>
  <img src="/defense/photos/14.jpg" alt="Door of the conference room" width="1440" height="1080">
  <figcaption><strong>Room 33-218 — you made it!</strong> This is the conference room. See you inside.</figcaption>
</figure></li>
</ol>

---

See you there. Thanks for coming.

Questions? [alexm0802@gmail.com](mailto:alexm0802@gmail.com)
