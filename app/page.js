"use client";
import Details from "./components/Details";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import useSWR, { mutate } from "swr";

const getUrl = (query) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  if (query === undefined) {
    return `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;
  }
  if (query.includes("dns")) {
    console.log(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${query}`
    );
    return `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${query}`;
  } else {
    console.log(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${query}`
    );
    return `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${query}`;
  }
};

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const MyMap = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [query, setQuery] = useState();
  const { data, error } = useSWR(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`,
    fetcher
  );
  if (error) return "Error";
  if (!data) return "Loading...";
  console.log(data);
  return (
    <main>
      <Search query={query} setQuery={setQuery} />
      <Details ipInfo={data} />
      <MyMap lat={data.location.lat} long={data.location.lng} />
    </main>
  );
}
