import { Card } from "./Card";

export const CARDS: Card[] = [
  {
    id: 1,
    title: 'Weather Forecast API',
    text: "Component example fetching weather forecast data from the dotnet core server instance.",
    path: '/forecasts',
  },
  {
    id: 2,
    title: 'Customers API CRUD',
    text: "Component example performing CRUD operations with customer information data.",
    path: '/customer',
  },
  {
    id: 3,
    title: 'Counter Local',
    text: "Component example with local state with a counter to add and reset.",
    path: '/counter',
  },
];
