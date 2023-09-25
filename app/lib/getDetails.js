export async function getDetails(ipAddress) {
  if (ipAddress === undefined) {
    const url =
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_ONXJMHRP9IQvBP3mof3NW5Y6XPWFx";
    let data = await fetch(url);
    let response = await data.json();
    return response;
  } else {
    url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_ONXJMHRP9IQvBP3mof3NW5Y6XPWFx&ipAddress=${ipAddress}`;
    let data = await fetch(url);
    let response = await data.json();
    return response;
  }
}
