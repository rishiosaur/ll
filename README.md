# LL

![lint status](https://github.com/rishiosaur/ll/workflows/lint/badge.svg)
![format status](https://github.com/rishiosaur/ll/workflows/format/badge.svg)
![GitHub](https://img.shields.io/github/license/rishiosaur/ll)
![GitHub issues](https://img.shields.io/github/issues/rishiosaur/ll)
![GitHub contributors](https://img.shields.io/github/contributors/rishiosaur/ll)
![GitHub last commit](https://img.shields.io/github/last-commit/rishiosaur/ll)

A minimal link shortener powered by Next.js and Vercel.

## Structure of a route:

```
{
  url: string
  name: string
  public: boolean
  title?: string
  description?: string
}
```

`url` is the end URL that you'd like to redirect to.
`name` is the name of the route that redirects to `url`.
`public` is a boolean that determines whether or not this redirect shows up in the public directory.

## Basic Setup

`LL` was created to be completely open; it works with any data source that returns an array of objects that conform to the above protocol.

For the most basic setup, you can generate a basic data source by using the [ll-basic](https://github.com/rishiosaur/ll-basic) template. Hit the `routes.json` file and click "Raw" (the returned JSON implements the above protocol; try parsing it yourself!)

The returned URL will be your API url. Just click the button below, and fill in the appropriate fields.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Frishiosaur%2Fll&env=apiURL&project-name=link-shortener&repo-name=link-shortener)
