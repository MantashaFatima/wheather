import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data=>setData(data))

  })

 
  return (
    <div>
      <h1>API Data:</h1>
      <ul>
        {data.map((item) => (
          <li>{item.id}{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
