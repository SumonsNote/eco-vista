import NoLocationInfo from "@/app/components/NoLocationInfo";
import TemperatureComponent from "@/app/components/TemperatureComponent";
import { getResolvedLatLong } from "@/app/lib/location-info";

export default async function TemperaturePage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <TemperatureComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo />;
  }
}
