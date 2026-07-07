# alexmeredith8299.github.io

Personal academic website built with the [Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll template, hosted on GitHub Pages at [alexmeredith8299.github.io](https://alexmeredith8299.github.io).

## Building locally

### Prerequisites

- Ruby (tested with 3.1.x)
- Bundler

### First-time setup

`eventmachine`, a transitive Jekyll dependency, fails to compile against OpenSSL 3.x on macOS. Work around it by pointing the build at Homebrew's OpenSSL 1.1:

```bash
brew install openssl@1.1   # if not already installed
bundle config build.eventmachine "--with-openssl-dir=$(brew --prefix openssl@1.1)"
bundle install
```

### Serve locally

```bash
bundle exec jekyll serve --port 4001
```

The site will be available at `http://localhost:4000`.

## Site structure

| Path | Purpose |
|------|---------|
| `_config.yml` | Site-wide settings (name, bio, social links) |
| `_pages/about.md` | Homepage |
| `_pages/cv.md` | CV page (auto-populates publications and talks from collections) |
| `_publications/` | One `.md` file per publication |
| `_talks/` | One `.md` file per talk or presentation |
| `_posts/` | Blog posts |
| `_data/navigation.yml` | Top navigation bar links |
| `images/profile.png` | Sidebar profile photo |
| `assets/pdfs/` | CV and paper PDFs |

## Adding content

**New publication** — create a file in `_publications/` following this frontmatter:

```yaml
---
title: "Paper title"
collection: publications
category: manuscripts   # or: conferences, books
permalink: /publication/YYYY-MM-DD-short-slug
date: YYYY-MM-DD
venue: "Journal or conference name"
paperurl: '/assets/pdfs/papers/filename.pdf'
citation: 'Author et al. (YYYY). "Title." <i>Venue</i>.'
---
```

**New talk** — create a file in `_talks/` following this frontmatter:

```yaml
---
title: "Talk title"
collection: talks
type: "Talk"
permalink: /talks/YYYY-MM-DD-short-slug
venue: "Conference or institution"
date: YYYY-MM-DD
location: "City, Country"
---
```
