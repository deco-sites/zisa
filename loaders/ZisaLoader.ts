export type ZisaLoader = string[];

export interface Props {
  numberOfFacts?: number;
}

async function loader(
  { numberOfFacts = 1 }: Props,
  _req: Request,
): Promise<ZisaLoader> {
  const { facts } = await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json());

  console.log(facts);

  return facts;
}

export default loader;
