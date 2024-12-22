"use client";
import React, { useState, useEffect } from "react";
const API = "https://jsonplaceholder.typicode.com/photos";
export default function Homepage() {
  const [form, setForm] = useState<
    { id: number; title: string; url: string; albumId: string }[]
  >([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: "Sample Todo", completed: false }),
        });
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error(` Https error in ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setForm(data);
        setLoading(false);
      } catch (error) {
        console.error(error, "Error fetching");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > form.length) {
          clearInterval(interval); 
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 7888);
    return () => clearInterval(interval);  
  }, [form.length]);

  return (
    <section>
      <h1>Todos</h1>
      {loading ? (
        <p> Loading ...</p>
      ) : form.length > 0 ? (
        form.slice(0, count).map((item) => (
          <div key={item.id}>
            <strong>{item.id}:</strong> {item.title}
            <img
              src={item.url}
              alt={item.albumId}
              style={{ width: "200px ", height: "200px" }}
            />
          </div>
        ))
      ) : (
        <p>No data found.</p>
      )}
    </section>
  );
}
