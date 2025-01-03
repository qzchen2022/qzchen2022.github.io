---
layout: post
title: "Colloid Assembly & Physical Properties"
author: "Qizan chen"
categories: simulation
tags: [coarse-grain MD]
image_cover: Colloid_overall.gif
image: Colloid_big.png
hide_post_date: false
hide_related_posts:  true
---

We are interested in the crystallization potential of colloids and study it using both forward and inverse design approaches. To bridge simulation parameters with experimental variables, we perform coarse-grained modeling of functionalized colloids to investigate the free energy. Additionally, we use the coarse-grained models to study the collodial physical properties.


## Nanoparticle

<figure>
  <img src="{{ site.github.url }}/assets/img/colloid/colloid_implicit.gif" loading="eager" style="max-width: 100%; height: auto;">
  <figcaption style="text-align: center; color: gray;">HOOMD-blue/Ovito: Assembly of nanoparticle</figcaption>
</figure>

## Functionalized colloid

<figure>
  <img src="{{ site.github.url }}/assets/img/colloid/colloid_explicit.gif" loading="eager" style="max-width: 100%; height: auto;">
  <figcaption style="text-align: center; color: gray;">HOOMD-blue/Ovito: 2D assembly of functionalized colloid</figcaption>
</figure>

## Non-equilibrium simulations

### Multi-particle collision dynamics

<figure>
  <img src="{{ site.github.url }}/assets/img/colloid/mpcd.gif" loading="eager" style="max-width: 100%; height: auto;">
  <figcaption style="text-align: center; color: gray;">HOOMD-blue/Ovito: Colloidal dynamics under MPCD stream</figcaption>
</figure>

### Shearing

<figure>
  <img src="{{ site.github.url }}/assets/img/colloid/shear.gif" loading="eager" style="max-width: 100%; height: auto;">
  <figcaption style="text-align: center; color: gray;">LAMMPS/Ovito: Self-assembly of functionalized colloids under shear deformation</figcaption>
</figure>

### Streching

<figure>
  <img src="{{ site.github.url }}/assets/img/colloid/streching.gif" loading="eager" style="max-width: 100%; height: auto;">
  <figcaption style="text-align: center; color: gray;">HOOMD-blue: Colloidal assembly under constant volume stretching</figcaption>
</figure>

## Replica Exchange Molecular Dynamics free energy sampling

<figure>
  <img src="{{ site.github.url }}/assets/img/colloid/remd.png" loading="eager" style="max-width: 100%; height: auto;">
  <figcaption style="text-align: center; color: gray;">LAMMPS/Ovito: Two-body free energy of functionalized colloids at different temperatures using REMD</figcaption>
</figure>


