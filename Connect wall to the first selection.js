console.log(canvas.walls.controlled)
let wall_a  = canvas.walls.controlled[0];
let wall_b  = canvas.walls.controlled[1];

let  wall_a_xy1 = [wall_a.data.c[0], wall_a.data.c[1]]
let  wall_a_xy2 = [wall_a.data.c[2], wall_a.data.c[3]]

let  wall_b_xy1 = [wall_b.data.c[0], wall_b.data.c[1]]
let  wall_b_xy2 = [wall_b.data.c[2], wall_b.data.c[3]]

let distances = [];


distances.push(distance (wall_a_xy1, wall_b_xy1))
distances.push(distance (wall_a_xy1, wall_b_xy2))

distances.push(distance (wall_a_xy2, wall_b_xy1))
distances.push(distance (wall_a_xy2, wall_b_xy2))


let min = Math.min.apply(null,distances)

let index = distances.indexOf(min)


let w2 =""   // to be cords of 1st wall


switch(index) {
    case 0:
       
        w2 = wall_b_xy2.concat(wall_a_xy1)
        canvas.walls.controlled[1].document.update({  c:  w2 })
        

        break;
    case 1:
     
        w2 = wall_b_xy1.concat(wall_a_xy1)
        canvas.walls.controlled[1].document.update({  c:  w2 })
        break;
    case 2:
       
        w2 = wall_a_xy2.concat(wall_b_xy2)
        canvas.walls.controlled[1].document.update({  c:  w2 })

        break;
    case 3:
        
        w2 = wall_a_xy2.concat(wall_b_xy1)
        canvas.walls.controlled[1].document.update({  c:  w2 })

      break;
    default:
  } 

function distance (p1,p2){

var a = p1[0] - p2[0];
var b = p1[1] - p2[1];

return Math.sqrt( a*a + b*b ); 

}
