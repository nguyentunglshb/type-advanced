const houses: House[] = [
  { name: "Atreides", planets: "Calladan" },
  { name: "Corrino", planets: ["Kaitan", "Salusa Secundus"] },
  { name: "Harkonnen", planets: ["Giedi Prime", "Arrakis"] },
];

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

function findHouses(houses: string): HouseWithID[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[];

function findHouses(
  houses: unknown,
  filter?: ({ name }: House) => boolean
): HouseWithID[] {
  if (typeof houses === "string") houses = JSON.parse(houses);

  let housesWithId: HouseWithID[] = (houses as House[]).map((house) => {
    return {
      ...house,
      id: Math.random(),
    };
  });

  if (filter) housesWithId = housesWithId.filter(filter);

  return housesWithId;
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
