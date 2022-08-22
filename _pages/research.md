---
permalink: /research/
title: ""
---
<h3> Machine Learning </h3>
My master's thesis project applies rotation-equivariant convolutional neural networks (CNNs) to detecting clouds in satellite imagery. I expect to submit my thesis and receive my master's degree in January 2023. I plan to open-source all of my thesis code when the project is complete -- currently, I've open-sourced my <a href="https://github.com/alexmeredith8299/focal_loss_pytorch">implementation of focal loss for PyTorch</a>.
<br/><br/>

In 2021, I worked on developing cloud-detection algorithms for BeaverCube-2, a 3U CubeSat scheduled for launch in 2023 and designed and built by <a href="https://starlab.mit.edu/">MIT Space, Telecommunications, Astronomy, and Radiation Lab</a> (also known as STAR Lab). I contributed to a <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2022-0646">conference paper</a> comparing the performance of rule-based methods (luminosity thresholding and random forest detection) to deep learning (specifically, a U-Net) for detecting clouds in visible-spectrum and long-wave infrared satellite imagery. 
<br/><br/>

In 2022, I joined a collaboration that tested algorithms designed for BeaverCube-2 onboard OPS-SAT, a 3U CubeSat operated by the European Space Agency (ESA), and ultimately tested my code on-orbit and on the OPS-SAT engineering model, and contributed to a <a href="https://digitalcommons.usu.edu/cgi/viewcontent.cgi?article=5224&context=smallsat">conference paper</a>. During this project, I forked the popular <a href="https://github.com/imbs-hl/ranger">ranger</a> library for random forests and extended it to work for object detection in images. I open-sourced my <a href="https:/github.com/alexmeredith8299/ranger"> implementation</a>.

<h3> Controls </h3>
Since June 2020, I have been working on the attitude determination and control system for BeaverCube, an underactuated (magnetorquer-only) 3U CubeSat with onbord propulsion designed and built by MIT STARLab. Along with one other student, I wrote all of BeaverCube's attitude determination and control flight software, including an Estimated Kalman Filter (EKF) in Python for attitude determination, a nonlinear optimization program to plan underactuated slews in C++, and a state machine in Python that calculates specific pointing goals for BeaverCube in different pointing modes. BeaverCube is the first satellite to use nonlinear optimization for magnetorquer-only control, and BeaverCube has more onboard autonomy than most other CubeSats. BeaverCube launched in July 2022 to ISS orbit.
<br/><br/>

In 2020, I contributed to a <a href="https://digitalcommons.usu.edu/smallsat/2020/all2020/126/">conference paper</a> on BeaverCube's overall design and engineering approach.
<br/><br/>

In 2022, I began working on BeaverCube-2's attitude control system, which inherits most components and software from BeaverCube, but adds a single reaction wheel to improve attitude control. I contributed to a conference paper (manuscript not yet available online) comparing attitude control systems with three magnetorquers and one reaction wheel to magnetorquer-only systems.
<br/><br/>

Also in 2022, I did an unpublished class project on using sums-of-squares optimization to prove stability of planned slews for magnetorquer-only, magnetorquer + one reaction wheel, and fully actuated satellites. My <a href="https://www.youtube.com/watch?v=MXKcT3EPk8o">final presentation</a> and <a href="https://drive.google.com/file/d/1YeOmZ5XNibK3WcQyAu_E0nvgf0hC-HNi/view">final paper</a> are publically available.

<h3> Collocating Satellite Data</h3>
In 2021, I began working on a project that leverages satellite orbital dynamics to efficiently collocate data from nadir-scanning satellites (such as satellites with nadir-sounding microwave radiometers) with data from other satellites. In 2022, I presented on my work at the <a href="https://www.grss-ieee.org/events/remote-sensing-data-management-technologies-in-geoscience-2022-rsdm-geosci-2022/">Remote Sensing Data Management Technologies in GeoScience Workshop</a>, where I won the Best Presentation award. I'm currently preparing a first-author paper on this project.

