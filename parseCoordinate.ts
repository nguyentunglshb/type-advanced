interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinate(str: string): Coordinate;
function parseCoordinate(object: Coordinate): Coordinate;
function parseCoordinate(arg1: number, arg2?: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value);
    });
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

parseCoordinate(10, 20);
parseCoordinate({
  x: 5,
  y: 10,
});
parseCoordinate("x:15,y:20");
