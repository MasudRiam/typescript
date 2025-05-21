function printAll(strs: string | string[] | null) {
  if (Array.isArray (strs)) {
    strs.forEach(str => console.log(str));
  } else {
    // do nothing
    console.log (strs)
  }
}

//instansof narrowing
type Eyes = { see: () => void }    //type declaration
type Hand = { move: () => void }   //type declaration

function isEyes (organ: Eyes | Hand): organ is Eyes {
  return (organ as Eyes).see !== undefined
}

function human (organ: Eyes | Hand) {
  if (isEyes(organ)) {
    organ
    return "Eyes can see everything"
  } else {
    return "We can Hand move whenever we want"
  }
}


const eyes: Eyes = { see: () => console.log ("See") }
const hand: Hand = { move: () => console.log ("Moving") }

console.log (human(eyes))
console.log (human(hand))


// exhaustive case 
interface Square {
  kind: "square"
}
interface Circle {
  kind: "circle"
}

type Shape = Square | Circle

function getShape (shape: Shape) {
  switch (shape.kind) {
    case "square":
      return 4

      case "circle":
      return 2.14

    default:
      const _lastGetShape: never =shape
      return _lastGetShape;
  }
}




export {}