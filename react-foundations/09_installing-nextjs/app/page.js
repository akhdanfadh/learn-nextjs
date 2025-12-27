// nextjs uses file-system routing
// this means that instead of defining routes in a separate file,
// we create files and folders inside the "app" directory

import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

// help nextjs distinguish which component to render as the main component of the page
export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
