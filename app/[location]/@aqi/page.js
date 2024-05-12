import AQIComponent from "@/app/components/AQIComponent";
import NoLocationInfo from "@/app/components/NoLocationInfo";
import { getResolvedLatLong } from "@/app/lib/location-info";

export default async function AqiPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <AQIComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo />;
  }
}
