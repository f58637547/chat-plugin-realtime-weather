import { WeatherParams } from '../../type';
import fetchWeather from './_utils';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

  const args = (await req.json()) as WeatherParams;

  const result = await fetchWeather(args);

  return new Response(JSON.stringify(result));
};
