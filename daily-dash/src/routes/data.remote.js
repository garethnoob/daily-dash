import { query } from '$app/server';

export const getData = query(async () => {
  const response = await fetch('https://stoic.tekloon.net/stoic-quote');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
});