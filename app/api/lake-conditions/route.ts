import { NextResponse } from "next/server";

export async function GET() {
  const latitude = 36.64;
  const longitude = -93.34;

  let weather = "Unavailable";
  let airTemp: number | null = null;
  let wind = "Unavailable";
  let waterTemp: number | null = null;
  let lakeLevel: number | null = null;

  // LIVE WEATHER + WIND
  try {
    const pointsResponse = await fetch(
      `https://api.weather.gov/points/${latitude},${longitude}`,
      {
        headers: {
          "User-Agent": "LakeDayz (https://lakedayz.org)",
          Accept: "application/geo+json",
        },
        next: { revalidate: 900 },
      }
    );

    if (!pointsResponse.ok) {
      throw new Error(`NWS points failed: ${pointsResponse.status}`);
    }

    const pointsData = await pointsResponse.json();
    const forecastUrl = pointsData.properties?.forecastHourly;

    if (!forecastUrl) {
      throw new Error("NWS hourly forecast URL not found");
    }

    const forecastResponse = await fetch(forecastUrl, {
      headers: {
        "User-Agent": "LakeDayz (https://lakedayz.org)",
        Accept: "application/geo+json",
      },
      next: { revalidate: 900 },
    });

    if (!forecastResponse.ok) {
      throw new Error(`NWS forecast failed: ${forecastResponse.status}`);
    }

    const forecastData = await forecastResponse.json();
    const current = forecastData.properties?.periods?.[0];

    if (current) {
      weather = current.shortForecast ?? weather;

      if (typeof current.temperature === "number") {
        airTemp = current.temperature;
      }

      if (current.windDirection && current.windSpeed) {
        wind = `${current.windDirection} ${current.windSpeed}`;
      }
    }
  } catch (error) {
    console.error("Weather fetch failed:", error);
  }

  // LIVE TABLE ROCK LAKE WATER TEMP
  try {
    const waterResponse = await fetch(
      "https://seatemperature.net/lakes/water-temp-in-table-rock-lake",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; LakeDayz/1.0; +https://lakedayz.org)",
          Accept: "text/html",
        },
        next: { revalidate: 900 },
      }
    );

    if (!waterResponse.ok) {
      throw new Error(
        `Water temperature request failed: ${waterResponse.status}`
      );
    }

    const waterHtml = await waterResponse.text();

    const normalizedWaterText = waterHtml
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/gi, " ")
      .replace(/&deg;/gi, "°")
      .replace(/&#176;/gi, "°")
      .replace(/\s+/g, " ")
      .trim();

    const celsiusMatch = normalizedWaterText.match(
      /Water Temperature in Table Rock Lake today is\s*([0-9]+(?:\.[0-9]+)?)\s*°?C/i
    );

    if (celsiusMatch) {
      const celsius = Number(celsiusMatch[1]);
      waterTemp = Math.round((celsius * 9 / 5 + 32) * 10) / 10;
    }
  } catch (error) {
    console.error("Water temperature fetch failed:", error);
  }

  // LIVE LAKE LEVEL
  try {
    const lakeResponse = await fetch(
      "https://tablerockfishingintel.com/",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; LakeDayz/1.0; +https://lakedayz.org)",
          Accept: "text/html",
        },
        next: { revalidate: 900 },
      }
    );

    if (!lakeResponse.ok) {
      throw new Error(
        `Fishing Intel request failed: ${lakeResponse.status}`
      );
    }

    const lakeHtml = await lakeResponse.text();

    const normalizedLakeText = lakeHtml
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/gi, " ")
      .replace(/\s+/g, " ")
      .trim();

    const lakeLevelMatch = normalizedLakeText.match(
      /Lake\s*Level[\s\S]{0,150}?([0-9]{3}(?:\.[0-9]+)?)\s*(?:ft|feet|')/i
    );

    if (lakeLevelMatch) {
      lakeLevel = Number(lakeLevelMatch[1]);
    }
  } catch (error) {
    console.error("Lake level fetch failed:", error);
  }

  return NextResponse.json({
    weather,
    airTemp,
    waterTemp,
    lakeLevel,
    wind,
    waterTempLocation: "Table Rock Lake",
    updatedAt: new Date().toISOString(),
  });
}