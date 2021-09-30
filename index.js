const input = process.argv[2];

//function to convert hex to rgb
const convertHexToRgb = (hex) =>{
const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

//function to convert rgd to hex
const rgbToHex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}



if (input[0] === '#'){
  console.log('Converting hex to rgb:');
  console.log(convertHexToRgb(input));  
} else if (input.slice(0, 3) === 'rgb'){
  console.log('Converting rgb to hex');
  console.log(rgbToHex(Number(input.slice(4,7)), Number(input.slice(8,11)), Number(input.slice(12,15))));
} else {
  console.log('Invalid input');
}

