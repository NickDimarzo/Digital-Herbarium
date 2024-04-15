"use client";

import { useState, useEffect } from 'react';
import { fetchUserPlants } from '../_services/DbServices';
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [plants, setPlants] = useState([]);
  const [filter, setFilter] = useState('');
  const { user, createUser, emailSignIn } = useUserAuth();

  useEffect(() => {
    if (user) {
      const unsubscribe = fetchUserPlants(user.uid, setPlants);
  
      // Clean up subscription on unmount
      return () => unsubscribe();
    }
  }, [user]); // Add user as a dependency

  return (
    <div className='text-white'>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter plants..."
      />

      {plants.filter(plant => !filter || plant.GCOMNAME.includes(filter)).map(plant => (
        <div key={plant.id}>
          <h2>{plant.GCOMNAME}</h2>
          {/* Add more plant details here */}
        </div>
      ))}
    </div>
  );
}