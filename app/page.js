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
  const [ipInfo, setIpInfo] = useState({
    ip: "",
    region: "",
    timeZone: "",
    isp: "",
    latitude: "",
    longitude: "",
  });
  const [error, setError] = useState(null);

  const apiKey = "da125f6470624dbbb8456f149765f748";

  useEffect(() => {
    const getUserLocationFromAPI = async () => {
      try {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_IXjpvNyYLAGvB1C0zuX7RYaRvSaD5`
        );
        const data = response.data;
        console.log(data);
        setIpInfo({
          ip: data.ip,
          region: data.location.region,
          timeZone: data.location.timezone,
          isp: data.isp,
          latitude: data.location.lat,
          longitude: data.location.lng,
        });
      } catch (error) {
        setError("Something went wrong getting Geolocation from API!");
      }
    };
    getUserLocationFromAPI();
  }, []);

  return (
    <main>
      <Search
        getSearchResults={(result) =>
          setIpInfo({
            ip: result.ip,
            region: result.location.region,
            timezone: result.location.timezone,
            isp: result.isp,
            latitude: result.location.lat,
            longitude: result.location.lng,
          })
        }
      />
      <Details ipInfo={ipInfo} />
      <MyMap lat={ipInfo.latitude} long={ipInfo.longitude} />
    </main>
  );
}
