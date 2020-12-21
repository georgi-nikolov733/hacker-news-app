# Hacker News App

App displaying [Hacker News](https://news.ycombinator.com) stories, built using [TypeScript](https://github.com/microsoft/TypeScript), [React](https://github.com/facebook/react) and [React Query](https://github.com/tannerlinsley/react-query). The app includes pages showing stories from the front page of Hacker News, new stories, and top stories. It also allows searching for stories, as well as viewing stories from a given website.

Hacker News data is retrieved via the [Algolia HN Search API](https://hn.algolia.com/api). The UI is implemented with [Material-UI](https://github.com/mui-org/material-ui) components.

## Local development

The app uses [Yarn](https://github.com/yarnpkg/berry) for package management. You can install it by running:

```fish
npm install -g yarn
```

### Install dependencies

```fish
yarn install
```

### Run the app in development mode

```fish
yarn start
```

### View components in isolation

```fish
yarn storybook
```

### Bundle the app in production mode

```fish
yarn build
```

### Run the app locally with Docker

```fish
docker build -t hacker-news-app:0.1.0 .
docker run -d -p 5000:5000 hacker-news-app:0.1.0
```

## Example

![Example](example.png)
