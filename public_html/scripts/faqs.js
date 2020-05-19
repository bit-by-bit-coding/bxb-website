$(".accordian").click((e) => {
    $(e.target).toggleClass("active");
});

//////Circuits
class Dots {
    constructor(width, height, spacing) {
        this.spacing = spacing;
        //this.dots = [];
        //this.alphaStep = 1 / 10;
        this.cols = Math.floor(width / spacing);
        this.rows = Math.floor(height / spacing);

        const canvas = document.createElement("canvas"),
            ctx = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;
        this.canvas = canvas;
        this.ctx = ctx;

        //this.draw();
    }

    /*draw() {
        //const ctx = this.ctx,
            //spacing = this.spacing;

        /* ctx.fillStyle = "rgba(24, 129, 141, .1)";
         this.dots = Array.apply(null, Array(this.cols)).map((n, x) => {
           return Array.apply(null, Array(this.rows)).map((p, y) => {
             let dot = {
               opacity: 0.1,
               x: x * spacing,
               y: y * spacing,
             };

             ctx.fillRect(dot.x, dot.y, 1, 1);
             return dot;
           });
         });
    }*/

    /*ghost() {
      const ghostDots = document.createElement("canvas");
      ghostDots.width = this.canvas.width;
      ghostDots.height = this.canvas.height;

      const dotsCtx = ghostDots.getContext("2d");
      /*dotsCtx.fillStyle = "rgb(24, 129, 141)";
      this.dots.forEach((col) => {
        col.forEach((dot) => {
          dotsCtx.fillRect(dot.x, dot.y, 1, 1);
        });
      });

      return ghostDots;
    }*/
}

class Circuits {
    constructor(width, height, size, minLength, maxLength, context) {
        this.ctx = context;
        this.size = size;
        this.width = width;
        this.height = height;
        this.cols = ~~(width / size);
        this.rows = ~~(height / size);
        this.time = 0;
        this.drawWholeBackground = false;

        this.scene = Array.apply(null, Array(this.cols)).map(
            () => new Col(this.rows)
        );

        this.collection = [];
        this.minLength = minLength;
        this.maxLength = maxLength;

        this.populate();
    }

    draw() {
        const canvas = document.createElement("canvas"),
            ctx = canvas.getContext("2d"),
            size = this.size,
            time = this.time;

        canvas.width = this.width;
        canvas.height = this.height;

        ctx.strokeStyle = "#2d97b7";
        ctx.lineWidth = Math.round(size / 10);

        this.collection.forEach((circuit) => {
            const inProgress = circuit.inProgress && !this.drawWholeBackground;

            const timeLeft = time - circuit.delay;
            if (inProgress && timeLeft < 0) {
                return;
            }
            let point = [...circuit.start],
                path = circuit.path;

            ctx.beginPath();
            ctx.moveTo(
                point[0] * size + size / 2 + (path[0][0] * size) / 4,
                point[1] * size + size / 2 + (path[0][1] * size) / 4
            );
            const drawSpeed = 1;
            const segmentsToDraw = (timeLeft * drawSpeed) / size;
            const wholeSegmentsToDraw = ~~segmentsToDraw;
            const fracToDraw = segmentsToDraw - wholeSegmentsToDraw;

            if (wholeSegmentsToDraw >= path.length) {
                circuit.inProgress = false;
            }

            //for each section of the circuit...
            for (const [index, dirs] of Object.entries(path)) {
                if (inProgress && index > wholeSegmentsToDraw) {
                    //console.log('run');

                    break;
                }
                //create both x and y coords for next point to draw line to
                let coords = dirs.map((dir, i) => {

                    let delta = dir * size; //the change in current corrodiantes

                    if (index == path.length - 1) {
                        delta -= (dir * size) / 4;
                    }
                    //console.log(index+" "+wholeSegmentsToDraw);
                    //console.log(index == wholeSegmentsToDraw);
                    if (inProgress && index == wholeSegmentsToDraw) {
                        delta *= fracToDraw;
                        //console.log("delta:" + delta);
                    }

                    let coord = point[i] * size + delta + size / 2; //the absolute coordiante
                    point[i] += dir;
                    return coord;
                });

                ctx.lineTo(...coords);


                /*//////////////////////
                //by how much do we cut the segment's length
                const subtractionLen = inProgress && diff > 0 ? diff : 0;
                const [dX, dY] = dir.map(n => n * subtractionLen);

                //update current position
                point[0] += dir[0];
                point[1] += dir[1];
                if (index === path.length - 1) {
                  ctx.lineTo(
                    point[0] * size + size / 2 - (dir[0] * size) / 4 - dX,
                    point[1] * size + size / 2 - (dir[1] * size) / 4 - dY
                  );
                  if(diff <= 0) {
                    if(circuit.inProgress == true) console.log(circuit);

                    circuit.inProgress = false;
                  }
                } else {
                  ctx.lineTo(
                    point[0] * size + size / 2 - dX,
                    point[1] * size + size / 2 - dY
                  );
                }
                if (inProgress) {
                  if (timeLeft < 0) {
                    break;
                  }
                  timeLeft -= size;

                }*/

            }

            ctx.stroke();
        });

        ctx.lineWidth = ~~(this.size / 5);
        ctx.strokeStyle = "#2d97b7";

        this.collection.forEach((circuit) => {
            ctx.beginPath();
            ctx.arc(
                circuit.start[0] * size + size / 2,
                circuit.start[1] * size + size / 2,
                size / 4,
                0,
                2 * Math.PI,
                false
            );
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(
                circuit.end[0] * size + size / 2,
                circuit.end[1] * size + size / 2,
                size / 4,
                0,
                2 * Math.PI,
                false
            );
            ctx.stroke();
        });

        this.canvas = canvas;
        this.time++;

        const allCircuitsDrawn = this.collection.every(
            (circuit) => !circuit.inProgress
        );
        if (!this.drawWholeBackground && allCircuitsDrawn) {
            this.ctx.redrawBackground = true;
            this.drawWholeBackground = true;
        }


        return canvas;
    }

    populate() {
        const size = this.size;

        //cut out logo shape
        const $logo = $('#bigLogo'),
            $canv = $('#canvas');
        const x1 = Math.floor($logo.offset().left / size),
            x2 = Math.ceil(x1 + $logo.outerWidth() / size),
            y1 = Math.floor(($logo.offset().top - $canv.offset().top) / size),
            y2 = Math.ceil(y1 + $logo.height() / size);

        for (let x = x1; x <= x2; x++) {
            for (let y = y1; y <= y2; y++) {
                //console.log(x, y);
                this.setUsed(x, y);
            }
        }

        let start = null,
            n = 1000,
            maxLength = this.maxLength,
            minLength = this.minLength,
            length = 0,
            dir = null;

        while ((start = this.getStart()) && n--) {
            length = minLength + ~~(Math.random() * (maxLength - minLength));
            dir = this.getDir(start);

            this.setUsed(start[0], start[1]);
            // if we can move from this point
            if (dir[0] !== 0 || dir[1] !== 0) {
                let circuit = new Circuit(start, size),
                    moving = true,
                    path = [start[0], start[1]];
                length--;

                while (moving && length) {
                    circuit.path.push(dir);
                    circuit.coords.push([path[0], path[1]]);

                    path[0] += dir[0];
                    path[1] += dir[1];

                    // set used
                    this.setUsed(path[0], path[1]);
                    // get new dir
                    dir = this.getDir(path, dir);
                    if (dir[0] === 0 && dir[1] === 0) {
                        moving = false;
                    }
                    length--;
                }

                if (circuit.path.length >= minLength) {
                    circuit.end = path;
                    circuit.coords.push([path[0], path[1]]);

                    let speed = Math.random() * 0.5 + 0.5;
                    const things = this.ctx.things;
                    circuit.things.push(things.create(circuit, speed * 1));

                    if (circuit.path.length > maxLength / 3) {
                        speed = Math.random() * 0.5 + 0.5;
                        circuit.things.push(
                            things.create(circuit, -speed, circuit.path.length * size)
                        );
                    }

                    if (circuit.path.length > maxLength / 1.5) {
                        speed = Math.random() * 0.5 + 0.5 * (Math.random() >= 0.5 ? -1 : 1);
                        circuit.things.push(
                            things.create(
                                circuit,
                                speed,
                                Math.random() * circuit.path.length * size
                            )
                        );
                    }

                    circuit.length = circuit.path.length * size;
                    this.collection.push(circuit);
                }
            }
        }
    }

    getStart() {
        let col = null,
            row = null,
            free = [],
            result = false;

        const scene = this.scene;

        // select cols with free cell
        scene.forEach((col, index) => {
            if (col.free) {
                free.push(index);
            }
        });

        if (free.length) {
            // pick one of the col
            col = this.pickOne(free);

            // select the free cells in the col
            free.length = 0;
            scene[col].rows.forEach((row, index) => {
                if (row === 0) {
                    free.push(index);
                }
            });

            // pick one of the cell
            row = this.pickOne(free);

            result = [col, row];
        }
        return result;
    }

    pickOne(array) {
        return array[~~(Math.random() * array.length)];
    }

    setUsed(x, y) {
        this.scene[x].rows[y] = 1;
        this.scene[x].free--;
    }

    isAvailable(x, y) {
        const scene = this.scene;
        const result =
            typeof scene[x] !== "undefined" &&
            typeof scene[x].rows[y] !== "undefined" &&
            scene[x].rows[y] === 0;

        return result;
    }

    // get direction
    // if a current direction is given, there is 50% chances to go in the same
    getDir(fromPoint, oldDir = null) {
        const possibleX = [],
            possibleY = [],
            result = [0, 0];

        if (oldDir && Math.random() <= 0.5) {
            if (
                this.isAvailable(fromPoint[0] + oldDir[0], fromPoint[1] + oldDir[1])
            ) {
                return oldDir;
            }
        }

        // Xs
        if (this.isAvailable(fromPoint[0] - 1, fromPoint[1])) {
            possibleX.push(-1);
        }
        if (this.isAvailable(fromPoint[0] + 1, fromPoint[1])) {
            possibleX.push(1);
        }

        // Ys
        if (this.isAvailable(fromPoint[0], fromPoint[1] - 1)) {
            possibleY.push(-1);
        }
        if (this.isAvailable(fromPoint[0], fromPoint[1] + 1)) {
            possibleY.push(1);
        }

        if (possibleX.length && Math.random() < 0.5) {
            result[0] = this.pickOne(possibleX);
        } else if (possibleY.length) {
            result[1] = this.pickOne(possibleY);
        }

        return result;
    }
}

class Col {
    constructor(rows) {
        this.rows = Array.apply(null, Array(rows)).map(() => 0);
        this.free = rows;
    }
}

class Circuit {
    constructor(start, size) {
        this.start = start;
        this.cellSize = size;
        this.path = [];
        this.end = null;
        this.things = [];
        this.length = 0;
        this.coords = [];
        this.inProgress = true;
        const delayMultiplier = 60;
        this.delay = ~~(Math.random() * delayMultiplier);
    }
}

class Things {
    constructor(width, height, context) {
        this.context = context;
        this.width = context.width;
        this.height = context.height;

        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext("2d");

        this.collection = [];
    }

    create(circuit, velocity, done = 0) {
        const thing = new Thing(circuit, velocity, done);
        this.collection.push(thing);
        return thing;
    }

    update() {
        this.collection.forEach((thing) => {
            thing.update();
        });
    }

    draw() {
        const ctx = this.ctx,
            radius = this.lightRadius;
        //space = radius / 3;

        ctx.clearRect(0, 0, this.width, this.height);

        if (!this.context.circuits.drawWholeBackground) {
            const circuitsLayer = this.context.circuits.draw();
            ctx.drawImage(circuitsLayer, 0, 0);
        } else {
            let radial = null,
                diffX = null,
                diffY = null;

            this.collection.forEach((thing) => {
                thing.update();
                radial = this.ghostRadial;
                diffX = diffY = radius;
                /*if (thing.distFromSister() <= space) {
                  radial = this.ghostSuperRadial;
                  diffX = radial.width / 2;
                  diffY = radial.height / 2;
                }*/
                ctx.drawImage(
                    radial,
                    thing.x - diffX,
                    thing.y - diffY,
                    radial.width,
                    radial.height
                );
            });

            ctx.save();
            //ctx.globalCompositeOperation = "destination-in";
            //ctx.drawImage(this.dotsGhost, 0, 0);
            ctx.restore();

            ctx.save();
            //ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "#2d97b7";
            this.collection.forEach((thing) => {
                ctx.beginPath();
                ctx.arc(thing.x, thing.y, radius / 6, 0, 2 * Math.PI, false);
                ctx.fill();
            });

            ctx.restore();
        }
    }

    /*setDotsGhost(canvas) {
        this.dotsGhost = canvas;
    }*/

    setLight(lightRadius) {
        this.lightRadius = lightRadius;

        this.ghostRadial = document.createElement("canvas");
        this.ghostRadial.width = this.ghostRadial.height = lightRadius * 2;

        /*const radialCtx = this.ghostRadial.getContext("2d");
        let gradient = radialCtx.createRadialGradient(
          lightRadius,
          lightRadius,
          lightRadius,
          lightRadius,
          lightRadius,
          0
        );
        gradient.addColorStop(0, "rgba(0, 129, 0, 0)");
        gradient.addColorStop(1, "rgba(24, 129, 141, .6)");

        radialCtx.fillStyle = gradient;
        radialCtx.fillRect(0, 0, lightRadius * 2, lightRadius * 2);

        // star
        /*this.ghostSuperRadial = document.createElement("canvas");
        const radWidth = (this.ghostSuperRadial.width = lightRadius * 15);
        const radHeight = (this.ghostSuperRadial.height = lightRadius * 20);

        const superRadialCtx = this.ghostSuperRadial.getContext("2d");

        //gradient = superRadialCtx.createRadialGradient(lightRadius * 1.5, lightRadius * 1.5, lightRadius * 1.5, lightRadius * 1.5, lightRadius * 1.5, 0);
        gradient = superRadialCtx.createRadialGradient(
          radWidth / 2,
          radHeight / 2,
          radWidth / 2,
          radWidth / 2,
          radHeight / 2,
          0
        );
        gradient.addColorStop(0, "rgba(37, 203, 223, 0)");
        gradient.addColorStop(1, "rgba(37, 203, 223,  .4)");

        superRadialCtx.fillStyle = gradient;
        //superRadialCtx.fillRect(0, 0, lightRadius * 3, lightRadius * 3);

        superRadialCtx.beginPath();
        superRadialCtx.moveTo(
          radWidth / 2 + lightRadius / 6,
          radHeight / 2 - lightRadius / 3
        );
        superRadialCtx.lineTo(radWidth, 0);
        superRadialCtx.lineTo(
          radWidth / 2 + lightRadius / 3,
          radHeight / 2 - lightRadius / 6
        );
        superRadialCtx.lineTo((3 * radWidth) / 4, radHeight / 2);
        superRadialCtx.lineTo(
          radWidth / 2 + lightRadius / 3,
          radHeight / 2 + lightRadius / 6
        );
        superRadialCtx.lineTo(radWidth, radHeight);
        superRadialCtx.lineTo(
          radWidth / 2 + lightRadius / 6,
          radHeight / 2 + lightRadius / 3
        );
        superRadialCtx.lineTo(radWidth / 2, (3 * radHeight) / 4);
        superRadialCtx.lineTo(
          radWidth / 2 - lightRadius / 6,
          radHeight / 2 + lightRadius / 3
        );
        superRadialCtx.lineTo(0, radHeight);
        superRadialCtx.lineTo(
          radWidth / 2 - lightRadius / 3,
          radHeight / 2 + lightRadius / 6
        );
        superRadialCtx.lineTo(radWidth / 4, radHeight / 2);
        superRadialCtx.lineTo(
          radWidth / 2 - lightRadius / 3,
          radHeight / 2 - lightRadius / 6
        );
        superRadialCtx.lineTo(0, 0);
        superRadialCtx.lineTo(
          radWidth / 2 - lightRadius / 6,
          radHeight / 2 - lightRadius / 3
        );
        superRadialCtx.lineTo(radWidth / 2, radHeight / 4);
        superRadialCtx.lineTo(
          radWidth / 2 + lightRadius / 6,
          radHeight / 2 - lightRadius / 3
        );
        superRadialCtx.fill();
        */
    }
}

class Thing {
    constructor(circuit, velocity, done = 0) {
        this.circuit = circuit;
        this.velocity = velocity;
        this.done = done;
        this.x = 0;
        this.y = 0;
        this.dots = [];
        this.delay = Math.random * 200;
    }

    update() {
        const circuit = this.circuit,
            size = circuit.cellSize;

        let x = 0,
            y = 0;
        // update this
        const length = circuit.length,
            start = circuit.start,
            end = circuit.end,
            path = circuit.path;
        this.done += this.velocity;
        if (this.done <= 0) {
            this.done = 0;
            this.velocity = -this.velocity;
        } else if (this.done >= length) {
            this.done = length;
            this.velocity = -this.velocity;
        }

        if (this.done <= size / 2) {
            x = start[0] * size + size / 2 + this.done * path[0][0];
            y = start[1] * size + size / 2 + this.done * path[0][1];
        } else if (this.done > length - size / 2) {
            x =
                end[0] * size +
                size / 2 -
                (length - this.done) * path[path.length - 1][0];
            y =
                end[1] * size +
                size / 2 -
                (length - this.done) * path[path.length - 1][1];
        } else {
            const index = ~~(this.done / size),
                done = this.done - index * size,
                dir = [path[index][0], path[index][1]],
                point = circuit.coords[index];

            x = point[0] * size + size / 2 + done * dir[0];
            y = point[1] * size + size / 2 + done * dir[1];
        }
        x = ~~x;
        y = ~~y;
        this.x = x;
        this.y = y;
    }

    /*distFromSister() {
      const circuit = this.circuit;
      let dist = Infinity,
        tmp = null;
      circuit.things.forEach((thing) => {
        if (thing !== this) {
          tmp = Math.abs(thing.done - this.done);
          if (tmp < dist) {
            dist = tmp;
          }
        }
      });

      return dist;
    }*/
}

class Background {
    constructor(width, height, context) {
        this.context = context;
        this.width = width;
        this.height = height;
    }

    getBackground(showCircuits) {
        const canvas = document.createElement("canvas"),
            ctx = canvas.getContext("2d");

        canvas.width = this.width;
        canvas.height = this.height;

        ctx.fillStyle = "#FFF";
        ctx.fillRect(0, 0, this.width, this.height);
        //ctx.drawImage(dots.canvas, 0, 0);
        if (showCircuits && this.context.circuits.canvas) {
            ctx.drawImage(this.context.circuits.canvas, 0, 0);
        }

        return canvas;
    }
}


class Banner {
    constructor() {
        this.initialized = false;
        // background init
        this.bgCanvas = document.getElementById("canvas");
        this.bgCtx = this.bgCanvas.getContext("2d");

        this.redrawBackground = true;

        // size the canvas
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");


// draw bg (dots + circuit) on the main canvas
        $(window).resize(()=>{
            this.init();
        });
    }

    init() {
        this.resize();

        // dots
        const dots = new Dots(this.width, this.height, 2);

        // things
        this.things = new Things(this.width, this.height, this);
        // get dot ghost
        // it will serve as a clip canvas for the gradients to only show where there is originally dots in the background
        //things.setDotsGhost(dots.ghost());
        this.things.setLight(dots.spacing * 4);

        // circuits
        const maxLength = 16,
            minLength = 3,
            cellSize = 10;
        this.circuits = new Circuits(this.width, this.height, cellSize, minLength, maxLength, this);

        this.drawBackground(false);


        $('.banner').append(this.canvas);
        if (!this.initialized) {
            this.initialized = true;
            this.loop();
        }

    }

    loop() {
        // update things

        this.ctx.clearRect(0, 0, this.width, this.height);

        if (this.redrawBackground) {
            this.drawBackground(this.circuits.drawWholeBackground);
        }

        // draw things
        this.things.draw();

        this.ctx.drawImage(this.things.canvas, 0, 0);

        requestAnimationFrame(this.loop.bind(this));
    }

    resize() {
        this.width = this.bgCanvas.width = this.canvas.width = $(this.bgCanvas).innerWidth();
        this.height = this.bgCanvas.height = this.canvas.height = $(this.bgCanvas).height();
        this.redrawBackground = true;
    }

    // background draw
    drawBackground(includeCircuits) {
        const background = new Background(this.width, this.height, this),
            staticBG = background.getBackground(includeCircuits);
        this.bgCtx.drawImage(staticBG, 0, 0);
    }

}

const banner = new Banner();

$('#bigLogo').on('load', banner.init.bind(banner));

if (document.getElementById("bigLogo").complete) {
    banner.init();
}