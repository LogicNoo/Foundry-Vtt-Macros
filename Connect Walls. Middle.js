console.log(canvas.walls.controlled)
let wall_a  = canvas.walls.controlled[0];
let wall_b  = canvas.walls.controlled[1];

let  wall_a_xy1 = [wall_a.data.c[0], wall_a.data.c[1]]
let  wall_a_xy2 = [wall_a.data.c[2], wall_a.data.c[3]]

let  wall_b_xy1 = [wall_b.data.c[0], wall_b.data.c[1]]
let  wall_b_xy2 = [wall_b.data.c[2], wall_b.data.c[3]]

console.log( wall_a_xy1)
console.log( wall_a_xy2)

console.log( wall_b_xy1)
console.log( wall_b_xy2)

let distances = [];
console.log("wall_a_xy1, wall_b_xy1: " + distance (wall_a_xy1, wall_b_xy1))
console.log("wall_a_xy1, wall_b_xy2: " + distance (wall_a_xy1, wall_b_xy2))

console.log("wall_a_xy2, wall_b_xy1:" + distance (wall_a_xy2, wall_b_xy1))
console.log("wall_a_xy2, wall_b_xy2:" + distance (wall_a_xy2, wall_b_xy2))

distances.push(distance (wall_a_xy1, wall_b_xy1))
distances.push(distance (wall_a_xy1, wall_b_xy2))

distances.push(distance (wall_a_xy2, wall_b_xy1))
distances.push(distance (wall_a_xy2, wall_b_xy2))


console.log(Math.min.apply(null,distances))
let min = Math.min.apply(null,distances)
console.log(distances.indexOf(min))
let index = distances.indexOf(min)

let x =""   //mid point
let w =""   // to be cords of 1st wall
let w2 =""  // to be cords of 2nd wall

switch(index) {
    case 0:
        x = midpoint(wall_a_xy1, wall_b_xy1)
    
        w = x.concat(wall_a_xy2)
        canvas.walls.controlled[0].document.update({  c:  w })

       
        w2 = wall_b_xy2.concat(x)
        canvas.walls.controlled[1].document.update({  c:  w2 })
        
        
        //canvas.walls.controlled[1].datadocument.update({  c:  w })
        break;
    case 1:
         x = midpoint(wall_a_xy1, wall_b_xy2)

        w = x.concat(wall_a_xy2)
        canvas.walls.controlled[0].document.update({  c:  w })

       
        w2 = wall_b_xy1.concat(x)
        canvas.walls.controlled[1].document.update({  c:  w2 })
        break;
    case 2:
        x = midpoint(wall_a_xy2, wall_b_xy1)

        w = wall_a_xy1.concat(x)
        canvas.walls.controlled[0].document.update({  c:  w })

   
        w2 = x.concat(wall_b_xy2)
        canvas.walls.controlled[1].document.update({  c:  w2 })

        break;
    case 3:
        x = midpoint(wall_a_xy2, wall_b_xy2)

        w = wall_a_xy1.concat(x)
        canvas.walls.controlled[0].document.update({  c:  w })
        
  
        w2 = x.concat(wall_b_xy1)
        canvas.walls.controlled[1].document.update({  c:  w2 })

      break;
    default:
  } 

function distance (p1,p2){

var a = p1[0] - p2[0];
var b = p1[1] - p2[1];

return Math.sqrt( a*a + b*b ); 

}

function midpoint (a,b){
let c =[(a[0] + b[0])/2,(a[1] + b[1])/2]
    return c

}
