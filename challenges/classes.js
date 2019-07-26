// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass {
  constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const newCuboid = new CuboidMakerClass({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMakerClass {
  constructor(cubeAttrs) {
    super(cubeAttrs);
    this.length = cubeAttrs.side;
    this.width = cubeAttrs.side;
    this.height = cubeAttrs.side;
    this.side = cubeAttrs.side; // If inherited attributes and methods from CuboidMakerClass are used for volume and surface area calculations, this attribute assignment isn't necessary
  }
  cubeVolume() {
    return this.side * this.side * this.side; // could also use the following code, although it may be slower: return Math.pow(this.side, 3);
  }
  cubeSA() {
    return 6 * this.side * this.side; // could also use the following code, although it may be slower: return 6 * Math.power(this.side, 2);
  }
}

const cube = new CubeMaker({
  side: 4
});

// The following calculations use inherited methods from CuboidMakerClass, indicating that methods specific to CubeMaker aren't necessary
console.log(cube.volume());
console.log(cube.surfaceArea());

// The following calculations uses methods specific to CubeMaker
console.log(cube.cubeVolume());
console.log(cube.cubeSA());
