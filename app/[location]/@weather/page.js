import NoLocationInfo from "@/app/components/NoLocationInfo";
import WeatherComponent from "@/app/components/WeatherComponent";
import { getResolvedLatLong } from "@/app/lib/location-info";

export default async function WeatherPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <WeatherComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo />;
  }
}
