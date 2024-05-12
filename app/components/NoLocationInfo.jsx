import Link from "next/link";
import Card from "./Card";

export default function NoLocationInfo({ location }) {
  console.log(location);

  return (
    <Card>
      <h2>
        No Location found for{" "}
        <span className="text-2xl underline">{location}</span>
      </h2>
      <span className="text-xl">
        <Link href={"/"}>Go to your current location</Link>
      </span>
    </Card>
  );
}
