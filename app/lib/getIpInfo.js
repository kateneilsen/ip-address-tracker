import axios from "axios";
import { NextResponse } from "next/server";

export async function getIpInfo() {
  var api_key = "at_IXjpvNyYLAGvB1C0zuX7RYaRvSaD5";
  const response = await axios.get(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_IXjpvNyYLAGvB1C0zuX7RYaRvSaD5`
  );
  const data = await response.data;
  return data;
}

export async function GET(request) {
  const data = await getIpInfo();
  return NextResponse.json(data);
}
