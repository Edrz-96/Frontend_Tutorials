const rgb = [203];
rgb[0] = 200;
const [red = 255, green, blue = 255] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`);
//output:  R: 200, G: undefined, B: 255