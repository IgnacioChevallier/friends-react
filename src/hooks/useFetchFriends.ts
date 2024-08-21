import { useState, useEffect } from 'react';
import {Friend} from "../types/types.ts";

export const useFetchFriends = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/friends/');
        if (!response.ok) {
          console.error('Network response was not ok');
        }
        const data: Friend[] = await response.json();
        setFriends(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends().then();
  }, []);

  return { friends, loading, error };
};