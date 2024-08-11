import { useEffect, useState } from 'react'

const App = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/categories`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [apiUrl])

  return (
    <div>
      <h1>Hello, Bro!</h1>
      <ul>
        {data.map((category, index) => (
          <li key={index}>{category.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App