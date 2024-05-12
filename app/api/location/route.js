import { NextResponse } from "next/server";
import { getLocations } from "./location-util";

export async function GET() {
  const locationData = getLocations();
  return NextResponse.json(locationData);
}
