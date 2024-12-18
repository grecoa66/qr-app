import { createClient } from "pexels";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { Image } from "../components/Image";

const searchPhrases = [
  "dog",
  "cat",
  "mountains",
  "sushi",
  "sunset",
  "beach",
  "forest",
  "city skyline",
  "nature",
  "waterfall",
  "flowers",
  "ocean",
  "trees",
  "snow",
  "clouds",
  "rainbow",
  "birds",
  "butterflies",
  "wildlife",
  "horses",
  "coffee",
  "food",
  "pizza",
  "cakes",
  "landscape",
  "desert",
  "river",
  "lighthouse",
  "autumn",
  "winter",
  "spring",
  "summer",
  "vacation",
  "travel",
  "architecture",
  "historic buildings",
  "interior design",
  "minimalist",
  "abstract art",
  "portrait",
  "family",
  "couple",
  "friends",
  "kids",
  "love",
  "wedding",
  "fashion",
  "makeup",
  "fitness",
  "yoga",
  "gym",
  "running",
  "cycling",
  "sports",
  "basketball",
  "soccer",
  "tennis",
  "golf",
  "boxing",
  "music",
  "guitar",
  "piano",
  "band",
  "concert",
  "dancing",
  "party",
  "nightlife",
  "technology",
  "computers",
  "smartphones",
  "robots",
  "artificial intelligence",
  "space",
  "planets",
  "stars",
  "moon",
  "galaxy",
  "sky",
  "cars",
  "motorcycles",
  "bicycles",
  "trucks",
  "airplanes",
  "boats",
  "trains",
  "electric vehicles",
  "luxury cars",
  "vintage cars",
  "street food",
  "restaurant",
  "fruit",
  "vegetables",
  "desserts",
  "ice cream",
  "chocolate",
  "coffee shop",
  "bakery",
  "farm",
  "animals",
  "zoo",
  "puppies",
  "kittens",
  "fish",
  "birds of prey",
  "exotic animals",
  "monkeys",
  "elephants",
  "lions",
  "tigers",
  "whales",
  "dolphins",
  "sharks",
  "wildflowers",
  "lakes",
  "mountain biking",
  "surfing",
  "skiing",
  "snowboarding",
  "paragliding",
  "hiking",
  "camping",
  "backpacking",
  "luggage",
  "airports",
];

function getRandomSearchTerm() {
  const randomIndex = Math.floor(Math.random() * searchPhrases.length);
  return searchPhrases[randomIndex];
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  if (!id) {
    return { status: 404 };
  }

  const pexel_key = process.env.PEXEL_API_KEY;
  if (!pexel_key) {
    throw new Error("PEXEL_API_KEY is required");
  }

  // Make a request for a random image from pexels

  const client = createClient(pexel_key);
  const query = getRandomSearchTerm();

  const photo = await client.photos
    .search({ query, per_page: 1 })
    .then((photos) => photos)
    .catch((error) => {
      throw new Error(error);
    });

  if ("error" in photo) {
    throw new Error(photo.error);
  }

  return { id, photo };
};

export default function ItemPage() {
  const { id, photo } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Item {id}</h1>
      {photo ? <Image src={photo.photos[0].src.medium} /> : null}
    </div>
  );
}
