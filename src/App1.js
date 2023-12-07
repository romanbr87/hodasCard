import React, { useEffect, useState } from 'react';
import data from "./menu.json";

export default function App() {
  const [keys, setKeys] = useState();

  useEffect(() => {
    console.clear();
    try {
      if (data && Array.isArray(data.menu)) {
        console.log(data);
        setKeys(data.menu.map (e => Object.keys(e)));
      } else {
        throw new Error('Invalid menu data format');
      }
    } catch (error) {
      console.error('Error loading menu data:', error);
      setKeys([]);
    }
  }, [data]);

  return (
    <>
        {keys?.map((menuItem, i) => (
          <div key={`menuItems${i}`} className="col-lg-6 col-md-6">
            <div className="jumbotron">
              <div className="text-center" style={{ paddingBottom: "2%" }}>
                <h3 style={{ fontWeight: "bold" }}>{`${menuItem[i]}`}</h3>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
