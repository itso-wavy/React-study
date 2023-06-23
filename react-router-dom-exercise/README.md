# react-router-dom-exercise

- HTML을 에뮬레이트 하는 클라이언트 측 라우팅 기술
- URL Params(= 동적 세그먼트)
- Form의 loader: `GET`, action: `POST`
  - redirect(url), useNavigate
- NavLink: isActive, isPending
- fetcher.Form

```js
<NavLink
  to={`contacts/${contact.id}`}
  className={({ isActive, isPending }) =>
    isActive ? 'active' : isPending ? 'pending' : ''
  }
>
  <Link to={`/contacts/${contact.id}`}>
    {contact.first || contact.last ? (
      <>
        {contact.first} {contact.last}
      </>
    ) : (
      <i>No Name</i>
    )}
    {contact.favorite && <span>★</span>}
  </Link>
</NavLink>
```

- useNavigation: 현재 탐색 상태 "idle"/"submitting"/"loading"

---

This package is based on [Create React App](https://github.com/facebook/create-react-app).

## Install

> - `npx create-react-app {project-name} --template mini`

## Differences from Create React App

- Additional files have been removed, and only minimal files left in this project.

````

📁
│ gitignore
│ README.md
│
├─public
│ index.html
└─src
App.jsx
index.js

```

- Removed annotations and use concise code. Check out the internal files!

## Available Scripts

- `npm start`
- `npm test`
- `npm run build`
- `npm run eject`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
```
````
