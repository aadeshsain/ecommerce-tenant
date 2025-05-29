import configPromise from "@payload-config";
import { getPayload } from "payload";

export default async function Home() {
  const config = await configPromise;
  const payload = await getPayload({ config });

  const data = await payload.find({
    collection: "categories",
  });

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}

//pre