# Design Showcase Studio

Build a professional portfolio website for me as a UI/UX Designer, Graphic Designer, Visual Designer and Trainer.

I have 100+ visual designs created by me and I want to organize them by client/project rather than displaying everything on the homepage.

Portfolio Structure

Create these main sections:

Home

Work

About

Experience

Skills

Contact

Work Page

Create a project/gallery system with category filters:

All

UI/UX

Branding

Graphic Design

Social Media

Marketing

Posters

Each client/project should appear as a project card containing:

Hero image

Client/project name

Short description

Design category

Number of designs

View Project button

Client Project Pages

Each client should have a dedicated project page.

The project page should contain:

Client name

Project overview

My role

Services provided

Design categories

Project description

Large visual gallery

The gallery should support multiple images per client and automatically display all images assigned to that client.

Example project structure:

Beez

Hero image

Project description

My role

Branding

Product designs

Social media designs

Marketing campaigns

Gallery containing all Beez images

Happy Minds School

Hero image

Project description

My role

Admission campaigns

Educational posters

Social media designs

Gallery containing all Happy Minds images

AL Mubeen School

Hero image

Project description

My role

Admission campaigns

Festival campaigns

Social media designs

Gallery containing all AL Mubeen images

Best School

Hero image

Project description

My role

Admission campaigns

Marketing creatives

Gallery containing all Best School images

Important Image System

Do NOT hard-code individual image elements throughout the website.

Create a reusable project data structure where each project contains:

id

clientName

title

category

description

role

services

heroImage

galleryImages

featured

year

The galleryImages field should contain an array of image URLs.

Create a reusable ProjectGallery component that automatically renders all images belonging to a project.

Gallery UX

Create a premium editorial-style gallery.

Use:

Responsive masonry/grid layout

Large high-quality images

Consistent spacing

Image hover interaction

Full-screen image viewer/lightbox

Previous/next navigation

Keyboard navigation

Lazy loading

Responsive mobile layout

Do not crop the artwork unnecessarily. Preserve the original aspect ratio of each design.

Homepage

Do not display all 100+ designs on the homepage.

Show only 6–9 selected featured projects and provide a clear "View All Work" button.

The overall design should feel like a professional designer's portfolio, not a generic template.

Use strong typography, generous whitespace, subtle motion, clean navigation and a sophisticated visual hierarchy.

The website must be responsive for desktop, tablet and mobile.

Also make the architecture easy for me to add new clients and new images later without redesigning the website.

i also upload my image 


https://www.figma.com/design/00R6TZWrsYTvR2LRkStxpf/website?node-id=2137-1764&t=JmPVHss2e2Xd5stF-1
this is my ott platform project - OTT Streaming Platform (UI/UX) — Designed wireframes and high-fidelity prototypes for a video streaming application, focused on content discovery and navigation.

https://www.figma.com/design/00R6TZWrsYTvR2LRkStxpf/website?node-id=2082-2&t=JmPVHss2e2Xd5stF-1
this is my bakery app project - Bakery App (UI/UX) — Designed an end-to-end ordering app experience, from wireframes through high-fidelity prototype.

https://www.figma.com/design/APDIuatQIVCAaGPYEnv1qg/clg-final-yr-project?node-id=7613-723&t=x6XlsE63zjcLyG9g-1
this is my  ui ux learning platform - User Experience Awareness and Learning Platform (UI/UX) — Designed user flows and interface screens for a platform promoting UX literacy and design education

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bb779e8a-fc01-488c-8ca6-d045fbe36ec7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
