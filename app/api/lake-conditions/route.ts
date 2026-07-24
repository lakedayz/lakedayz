import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const latitude = 36.64;
  const longitude = -93.34;

  let weather = "Unavailable";
  let airTemp: number | null = null;
  let wind = "Unavailable";
  let uvIndex: number | null = null;
  let waterTemp: number | null = null;

  const lakeLevel: number | null = null;

  // WEATHER, WIND, AND UV
  try {
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,uv_index&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FChicago`,
      {
        cache: "no-store",
      }
    );

    if (weatherResponse.ok) {
      const weatherData = await weatherResponse.json();
      const current = weatherData?.current;

      if (current?.temperature_2m !== undefined) {
        airTemp = Number(current.temperature_2m);
      }

      if (current?.uv_index !== undefined) {
        uvIndex = Number(current.uv_index);
      }

      if (
        current?.wind_speed_10m !== undefined &&
        current?.wind_direction_10m !== undefined
      ) {
        wind = `${getWindDirection(
          Number(current.wind_direction_10m)
        )} ${Math.round(Number(current.wind_speed_10m))} mph`;
      }

      weather = getWeatherDescription(current?.weather_code);
    }
  } catch (error) {
    console.error("Weather conditions request failed:", error);
  }

  // TABLE ROCK LAKE WATER TEMPERATURE
  try {
    const waterTempResponse = await fetch(
      "https://lakemonster.com/lake/MO/Table-Rock-Lake-water-temperature-34",
      {
        cache: "no-store",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        },
      }
    );

    if (waterTempResponse.ok) {
      const html = await waterTempResponse.text();

      const patterns = [
        /current[^<]{0,100}water temperature[^0-9]{0,30}([0-9]{2,3}(?:\.[0-9]+)?)\s*°?\s*F/i,
        /water temperature[^0-9]{0,50}([0-9]{2,3}(?:\.[0-9]+)?)\s*°?\s*F/i,
        /water[^0-9]{0,20}([0-9]{2,3}(?:\.[0-9]+)?)\s*°/i,
      ];

      for (const pattern of patterns) {
        const match = html.match(pattern);

        if (match?.[1]) {
          const parsedTemp = Number(match[1]);

          if (
            Number.isFinite(parsedTemp) &&
            parsedTemp >= 32 &&
            parsedTemp <= 100
          ) {
            waterTemp = parsedTemp;
            break;
          }
        }
      }
    } else {
      console.error(
        "Water temperature request failed:",
        waterTempResponse.status
      );
    }
  } catch (error) {
    console.error("Water temperature request failed:", error);
  }

  console.log("LakeDayz conditions:", {
    weather,
    airTemp,
    waterTemp,
    lakeLevel,
    wind,
    uvIndex,
  });

  return NextResponse.json({
    weather,
    airTemp,
    waterTemp,
    lakeLevel,
    wind,
    uvIndex,
    updatedAt: new Date().toISOString(),
  });
}

function getWeatherDescription(code?: number) {
  if (code === 0) return "Clear";
  if (code === 1) return "Mostly Clear";
  if (code === 2) return "Partly Cloudy";
  if (code === 3) return "Cloudy";
  if (code === 45 || code === 48) return "Foggy";
  if ([51, 53, 55, 56, 57].includes(code ?? -1)) return "Drizzle";
  if ([61, 63, 65, 66, 67].includes(code ?? -1)) return "Rain";
  if ([71, 73, 75, 77].includes(code ?? -1)) return "Snow";
  if ([80, 81, 82].includes(code ?? -1)) return "Showers";
  if ([85, 86].includes(code ?? -1)) return "Snow Showers";
  if ([95, 96, 99].includes(code ?? -1)) return "Thunderstorms";

  return "Conditions";
}

function getWindDirection(degrees: number) {
  const directions = [
    "N",
    "NE",
    "E",
    "SE",
    "S",
    "SW",
    "W",
    "NW",
  ];

  const index = Math.round(degrees / 45) % 8;

  return directions[index];
}