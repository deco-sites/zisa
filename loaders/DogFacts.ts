export type DogFacts = string[];

export interface Props {
  numberOfFacts?: number;
}

async function loader(
  { numberOfFacts = 3 }: Props,
  _req: Request,
): Promise<DogFacts> {
  const { facts } = await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json());
  return facts;
}

export default loader;
export const cache = "stale-while-revalidate";
export const cacheKey = (_: Props) => "dog-facts";
