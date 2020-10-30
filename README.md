# LL
![lint status](https://github.com/rishiosaur/ll/workflows/lint/badge.svg)
![format status](https://github.com/rishiosaur/ll/workflows/format/badge.svg)
![GitHub](https://img.shields.io/github/license/rishiosaur/ll)
![GitHub issues](https://img.shields.io/github/issues/rishiosaur/ll)
![GitHub contributors](https://img.shields.io/github/contributors/rishiosaur/ll)
![GitHub last commit](https://img.shields.io/github/last-commit/rishiosaur/ll)


A minimal link shortener powered by Vercel's serverless functions and Firebase Cloud Firestore.


Your env parameters should come from the Firebase dashboard; they're the default for any new Firebase project.

Make sure to have a Cloud Firestore collection named `routes` at the top-level.

## Structure of a route:

```
{
  url: string
  public: boolean
  title?: string
  description?: string
}
```

## Setup

First, create a [Firebase](firebase.google.com/) project and initialize Cloud Firestore with Test rules (you can use Production rules, but you need to keep your read privileges open; `ll` functions off of the public-facing Firestore ReST API so that we can keep build times speedy). Keep track of the config object that you are given.

In the Firestore console, create a `routes` collection at the top-level, then create one document with a random name (these document names are your routes). Fill in this information using the route structure given above.

Your Cloud Firestore DB should look something like:


Now that you've configured your database, you can finally deploy to Vercel! Just fill in the `projectId` environment variable with the same one that was given in your Firebase setup flow. If you run into any issues, feel free to open a new one.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Frishiosaur%2Fll&env=projectId&project-name=link-shortener&repo-name=link-shortener)
