export function hex2rgbaConvert(hex,opacity){
 hex = hex.replace('#','');
 var r = parseInt(hex.substring(0, hex.length/3), 16);
 var g = parseInt(hex.substring(hex.length/3, 2*hex.length/3), 16);
 var b = parseInt(hex.substring(2*hex.length/3, 3*hex.length/3), 16);

 var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
 return result;
}