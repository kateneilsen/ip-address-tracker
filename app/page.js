"use client";
import Details from "./components/Details";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import axios from "axios";

const MyMap = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

export default function Home() {
  const [ipInfo, setIpInfo] = useState({});
  const [error, setError] = useState(null);

  const apiKey = "da125f6470624dbbb8456f149765f748";

  useEffect(() => {
    const getUserLocationFromAPI = async () => {
      try {
        const response = await axios.get(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`
        );
        setIpInfo(response.data);
      } catch (error) {
        setError("Something went wrong getting Geolocation from API!");
      }
    };
    getUserLocationFromAPI();
  }, []);

  return (
    <main>
      <Search getSearchResults={(results) => setIpInfo(results)} />
      <Details ipInfo={ipInfo} />
      {/* <MyMap ipInfo={ipInfo} /> */}
    </main>
  );
}
