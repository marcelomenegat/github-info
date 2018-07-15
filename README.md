# Organization Info from Github
[![version][version-badge]][CHANGELOG] [![license][license-badge]][LICENSE]


The main project was boilerplated by ```create-react-app github-info ``` using Yarn.

Github Organization is a small project that provide the information about a given organization, listing the repositories and pinned ones.

The main objective with this small project is get a given organization, pass by URL and return the repositories and information about it from their Github page, using GraphQL query to do it. If you don`t pass any organization name in URL the query will assume a default organization predefined in code.

This page was built using React, GraphQL and the Github V4 api as technologies, using Axios as an HTTP-Client. To organize this project I following the single responsibility principle to divide the components into the file structure. 


You can find the Github Repo here.

## Links:

+ [Live Preview](https://angularlab-marcelomenegat.c9users.io/)


## Quick start

Quick start options:

- [Download from Github](https://github.com/marcelomenegat/github-info/archive/master.zip).
- Clone the repo: `git clone https://github.com/marcelomenegat/github-info.git`.

## Prerequisites and Usage

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Install Yarn from [Yarn Official Page](https://yarnpkg.com/en/docs/install)
3. Open Terminal
4. Go to your file project
5. Run in terminal: ```yarn install```
6. Then: ```yarn start```
7. Navigate to `http://localhost:3000/`


### File Structure

Within the download you'll find the following directories and files:

```
github-info
.
├── README.md
├── package.json
├── yarn.lock
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── css
    │   │   ├── headerCardStyle.css
    │   │   ├── listCardStyle.css
    │   │   ├── pinnedListStyle.css
    │   │   ├── repoCardStyle.css
    │   │   ├── tempListStyle.css
    │   │   └── sharedStyles.css
    │   ├── icons
    │   │   ├── git-branch
    │   │   ├── law
    │   │   ├── link
    │   │   ├── location
    │   │   └── star
    │   ├── misc
    │   │   ├── colours.json
    │   │   └── colours.js
    ├── components
    │   ├── Card
    │   │   ├── HeaderCard.jsx
    │   │   └── RepoCard.jsx
    │   ├── List
    │   │   └── PinnedList.jsx
    │   │   └── RepoList.jsx
    │   ├── Main
    │   │   └── Main.jsx
    │   └── index.js
    ├── mocks
    │   ├── repos.json
    │   └── query.gql
    ├── tamplate
    │   └── OrgGithubInfo.jsx
    ├── index.js
    ├── index.css
    ├── App.js
    ├── App.css
    ├── App.test.js
    ├── logo.svg
    └── registerServiceWorker.js
```

## Explaing the File Structure and Components

This file structure is simple and is based in separate the components, tamplates and the main core af the app. 

In the ```components``` directory contain five small stateless components that provide specifics renders to the application, like:

+ HeaderCard: Render the organization information as Name, URL link and location.
+ RepoCard: Render the repositories data and meta-data as Name, Description, Language, etc.
+ RepoList: Implements RepoCard, and list all repositories of the Organization.
+ PinnedList: Also implements RepoCard, and list the pinned repositories of the Organization.
+ Main: This component is not a Stateles component, but a Statefull component. Is here where the call to API is made, and process the response to render the Tamplate, explained below.

OrgGithubInfo also is a stateless component but is located in the ```template``` directory. This component joint the HeaderCard, RepoList and PinnedList to the final structure that will be showed.

The ```assets``` directory contains all css`s files and icons that was used in the application. There is also a ```misc``` directory that have a Json with the colours of the language showed in meta-data of each repository. 


[CHANGELOG]: ./CHANGELOG.md

[LICENSE]: ./LICENSE.md
[version-badge]: https://img.shields.io/badge/version-1.3.0-blue.svg
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
