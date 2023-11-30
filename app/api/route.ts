import { randomThreeFromArray } from "@/lib/helpers";
import axios from "axios";

export async function POST(req: Request) {
  const body = await req.json();

  const { query } = body;

  const { data } = await axios(
    ` https://maps.googleapis.com/maps/api/place/textsearch/json?query=points+of+interest+in+${query}&key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const randomData = randomThreeFromArray(data.results);
  return Response.json(randomData);
}
