import { NextResponse } from "next/server";
import { getLocationByName } from "../location-util";

export async function GET(req, { params: { name } }) {
  const locationData = getLocationByName(name);
  return NextResponse.json(locationData);
}
