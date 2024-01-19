(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("map",
{ "compressionlevel":-1,
 "height":30,
 "infinite":false,
 "layers":[
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 183, 183, 183, 183, 183, 183, 183, 183, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 36, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 183, 183, 183, 183, 183, 183, 183, 183, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 61, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 127, 128, 129, 127, 128, 129, 130, 0, 0, 0, 0, 0, 0, 0, 183, 183, 183, 183, 183, 183, 183, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 86, 87, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151, 152, 153, 154, 152, 153, 154, 155, 0, 0, 0, 0, 0, 0, 0, 183, 183, 183, 183, 183, 183, 424, 425, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 127, 128, 129, 127, 128, 128, 129, 0, 589, 589, 589, 126, 127, 129, 128, 128, 129, 128, 128, 129, 127, 127, 128, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 127, 129, 128, 128, 129, 129, 128, 128, 129, 129, 129, 128, 128, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 111, 112, 113, 13, 63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 127, 254, 255, 256, 255, 256, 255, 256, 180, 0, 0, 0, 0, 0, 0, 0, 183, 183, 183, 183, 183, 183, 183, 450, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151, 152, 153, 154, 152, 153, 153, 154, 589, 589, 589, 589, 201, 177, 154, 153, 153, 154, 153, 153, 154, 152, 153, 279, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151, 152, 154, 153, 153, 154, 154, 153, 153, 154, 154, 154, 153, 153, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 137, 138, 38, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151, 152, 279, 280, 281, 255, 255, 255, 256, 205, 0, 0, 0, 0, 0, 0, 0, 183, 183, 183, 183, 183, 473, 183, 475, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 127, 254, 177, 178, 179, 177, 178, 178, 179, 589, 589, 589, 589, 176, 177, 179, 178, 178, 179, 178, 178, 179, 177, 178, 179, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 179, 179, 178, 179, 179, 179, 179, 178, 179, 179, 178, 179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 161, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 127, 254, 255, 256, 255, 256, 255, 280, 255, 256, 180, 0, 0, 0, 0, 0, 0, 0, 183, 183, 183, 183, 183, 183, 183, 183, 181, 182, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 184, 185, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151, 152, 279, 177, 178, 179, 177, 178, 179, 179, 589, 589, 589, 589, 201, 177, 179, 178, 179, 179, 178, 179, 179, 177, 178, 179, 205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 179, 179, 178, 179, 179, 179, 178, 179, 179, 179, 178, 179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 380, 381, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 151, 152, 279, 280, 281, 280, 281, 255, 280, 255, 256, 205, 126, 127, 128, 129, 127, 128, 129, 128, 129, 127, 128, 129, 127, 128, 129, 206, 207, 208, 208, 208, 208, 208, 208, 208, 208, 208, 183, 183, 183, 208, 208, 208, 208, 208, 208, 208, 208, 209, 210, 127, 128, 129, 127, 128, 129, 127, 128, 127, 128, 254, 177, 178, 179, 177, 177, 177, 178, 179, 179, 0, 0, 0, 0, 176, 179, 179, 178, 179, 179, 178, 179, 179, 177, 178, 179, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 178, 179, 177, 178, 179, 179, 178, 179, 178, 179, 177, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 457, 458, 459, 460, 4, 4, 4, 4, 405, 406, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 127, 128, 254, 255, 256, 255, 255, 256, 256, 255, 280, 255, 256, 180, 151, 152, 153, 154, 152, 153, 154, 153, 154, 152, 153, 154, 152, 153, 154, 231, 232, 233, 233, 233, 233, 233, 233, 233, 233, 233, 183, 183, 183, 233, 233, 233, 233, 233, 233, 233, 233, 234, 235, 152, 153, 154, 152, 153, 154, 152, 153, 152, 153, 279, 177, 178, 179, 177, 177, 177, 178, 179, 179, 0, 0, 0, 0, 176, 179, 179, 177, 178, 178, 179, 179, 177, 178, 179, 177, 205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 179, 179, 178, 178, 179, 179, 178, 179, 178, 179, 177, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 29, 482, 483, 484, 485, 29, 29, 29, 29, 236, 237, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 29, 152, 153, 279, 255, 255, 256, 255, 255, 256, 280, 280, 280, 281, 205, 201, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 177, 457, 458, 1707, 1708, 1707, 1708, 459, 460, 457, 458, 459, 460, 457, 458, 459, 460, 457, 458, 459, 457, 457, 458, 459, 460, 177, 178, 179, 177, 178, 179, 177, 178, 177, 178, 179, 177, 178, 178, 179, 177, 178, 177, 178, 179, 0, 0, 0, 0, 201, 178, 179, 177, 178, 177, 178, 179, 177, 178, 178, 179, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 179, 179, 178, 179, 179, 179, 178, 179, 179, 179, 178, 179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            52, 53, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 1679, 1679, 1680, 1681, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 255, 256, 256, 280, 255, 256, 280, 255, 256, 255, 256, 255, 256, 205, 176, 177, 177, 177, 177, 177, 178, 177, 177, 178, 179, 177, 178, 178, 179, 482, 483, 484, 485, 482, 483, 484, 485, 482, 483, 484, 485, 482, 483, 484, 485, 482, 483, 484, 482, 482, 483, 484, 485, 177, 178, 179, 177, 178, 178, 179, 179, 179, 179, 179, 179, 179, 179, 179, 179, 177, 178, 178, 179, 0, 0, 0, 0, 176, 177, 177, 177, 178, 177, 178, 179, 177, 178, 178, 179, 205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 179, 179, 178, 179, 179, 179, 178, 179, 179, 179, 178, 179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 1704, 1704, 1705, 1706, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 255, 255, 256, 255, 256, 281, 255, 256, 256, 255, 256, 255, 256, 180, 201, 177, 177, 177, 177, 177, 177, 177, 177, 178, 179, 177, 178, 179, 179, 476, 477, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 501, 501, 501, 476, 477, 478, 478, 478, 477, 478, 478, 177, 177, 177, 178, 179, 177, 178, 178, 179, 179, 179, 179, 179, 179, 179, 179, 177, 178, 179, 179, 0, 0, 0, 0, 201, 177, 177, 177, 178, 177, 178, 179, 177, 178, 178, 179, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 179, 179, 178, 179, 179, 179, 179, 178, 178, 179, 177, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 1729, 1729, 1730, 1731, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77, 78, 79, 78, 79, 77, 77, 77, 78, 79, 53, 54, 256, 256, 256, 256, 280, 255, 256, 281, 255, 256, 255, 256, 205, 176, 179, 179, 179, 179, 177, 177, 179, 179, 177, 177, 177, 178, 179, 179, 476, 476, 476, 476, 476, 476, 477, 478, 503, 503, 503, 503, 503, 478, 478, 478, 478, 478, 478, 503, 503, 478, 476, 477, 177, 177, 177, 177, 177, 178, 179, 177, 178, 178, 179, 179, 179, 179, 179, 177, 177, 178, 179, 179, 0, 0, 0, 0, 176, 179, 177, 178, 177, 177, 177, 178, 179, 177, 178, 178, 205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 179, 179, 178, 179, 179, 179, 179, 178, 178, 179, 177, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 78, 79, 79, 77, 77, 77, 77, 78, 79, 77, 78, 79, 77, 77, 1754, 1754, 1755, 1756, 77, 77, 77, 78, 77, 77, 77, 78, 77, 78, 77, 78, 79, 77, 78, 79, 79, 54, 54, 52, 53, 54, 256, 281, 281, 256, 255, 256, 281, 281, 256, 256, 255, 256, 180, 176, 179, 179, 179, 179, 179, 179, 179, 179, 177, 177, 177, 178, 179, 179, 476, 476, 476, 476, 476, 477, 478, 476, 476, 477, 478, 502, 503, 476, 476, 476, 476, 476, 476, 476, 476, 476, 501, 502, 179, 179, 177, 177, 177, 177, 178, 179, 177, 178, 178, 179, 179, 179, 179, 177, 177, 178, 179, 179, 0, 0, 0, 0, 201, 179, 179, 177, 178, 177, 177, 178, 179, 177, 178, 178, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 179, 179, 178, 179, 179, 179, 178, 179, 179, 179, 178, 179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 1679, 1679, 1680, 1681, 77, 78, 77, 77, 78, 79, 77, 77, 77, 78, 77, 78, 79, 77, 78, 79, 79, 79, 79, 77, 78, 79, 281, 280, 281, 256, 280, 281, 280, 281, 281, 281, 280, 281, 205, 201, 178, 177, 178, 179, 177, 178, 178, 179, 179, 177, 178, 177, 178, 179, 501, 501, 501, 501, 476, 476, 476, 501, 501, 476, 476, 476, 476, 501, 501, 501, 501, 501, 501, 501, 501, 501, 501, 502, 179, 179, 179, 179, 177, 177, 178, 179, 177, 178, 179, 177, 178, 178, 179, 177, 178, 177, 178, 179, 0, 0, 0, 0, 201, 177, 179, 177, 178, 179, 177, 177, 178, 179, 177, 178, 205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 179, 179, 178, 179, 179, 179, 178, 179, 179, 179, 178, 179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 1704, 1704, 1705, 1706, 78, 77, 77, 77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 77, 78, 77, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77, 78, 180, 176, 177, 177, 177, 177, 177, 177, 177, 177, 178, 179, 177, 178, 178, 179, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 477, 178, 178, 179, 179, 177, 178, 179, 177, 177, 178, 179, 177, 178, 178, 179, 179, 177, 178, 178, 179, 0, 0, 0, 0, 176, 177, 177, 177, 178, 179, 177, 177, 178, 179, 177, 178, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 178, 179, 177, 178, 179, 179, 178, 179, 178, 179, 177, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 78, 79, 79, 77, 77, 77, 77, 78, 79, 77, 78, 79, 77, 77, 1729, 1729, 1730, 1731, 77, 77, 77, 77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 77, 78, 77, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77, 78, 205, 201, 177, 177, 177, 177, 177, 177, 177, 177, 178, 179, 177, 178, 179, 179, 476, 477, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 501, 501, 501, 476, 477, 478, 478, 478, 477, 478, 478, 177, 177, 177, 177, 177, 177, 177, 177, 178, 179, 177, 178, 178, 179, 179, 179, 177, 178, 179, 179, 0, 0, 0, 0, 201, 177, 177, 177, 178, 178, 177, 177, 178, 179, 177, 178, 205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 179, 179, 178, 179, 178, 178, 178, 179, 178, 179, 177, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 1754, 1754, 1755, 1756, 77, 78, 77, 77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 77, 78, 77, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77, 78, 180, 176, 179, 179, 179, 179, 179, 179, 179, 179, 177, 177, 177, 178, 179, 179, 476, 476, 476, 476, 476, 476, 477, 478, 503, 503, 503, 503, 503, 478, 478, 478, 478, 478, 478, 503, 503, 478, 476, 477, 177, 177, 177, 177, 177, 177, 177, 177, 178, 179, 177, 178, 178, 179, 179, 177, 177, 178, 179, 179, 0, 0, 0, 0, 176, 177, 177, 178, 177, 178, 177, 177, 178, 179, 177, 178, 253, 457, 458, 459, 127, 128, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 179, 179, 179, 178, 178, 178, 179, 179, 179, 179, 178, 179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 1679, 1679, 1680, 1681, 78, 77, 77, 77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 77, 78, 77, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77, 78, 205, 201, 179, 179, 179, 179, 179, 179, 179, 179, 177, 177, 177, 178, 179, 179, 476, 476, 476, 476, 476, 477, 478, 476, 476, 477, 478, 502, 503, 476, 476, 476, 476, 476, 476, 476, 476, 476, 501, 502, 179, 179, 179, 179, 179, 179, 179, 177, 178, 179, 177, 178, 178, 179, 179, 177, 177, 178, 179, 179, 0, 0, 0, 0, 201, 177, 179, 177, 178, 178, 179, 177, 178, 179, 177, 178, 278, 482, 483, 484, 152, 279, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 179, 179, 179, 178, 178, 179, 179, 179, 179, 179, 178, 179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 1704, 1704, 1705, 1706, 77, 77, 78, 77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 77, 78, 77, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77, 78, 180, 176, 178, 178, 178, 178, 178, 177, 178, 179, 177, 178, 178, 179, 178, 179, 501, 501, 501, 501, 476, 476, 476, 501, 501, 476, 476, 476, 476, 501, 501, 501, 501, 501, 501, 501, 501, 501, 501, 502, 179, 179, 179, 179, 179, 179, 179, 177, 178, 179, 177, 178, 178, 179, 179, 177, 178, 177, 178, 179, 0, 0, 0, 0, 176, 179, 179, 177, 178, 179, 179, 177, 178, 179, 177, 178, 179, 476, 477, 478, 177, 179, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 178, 179, 179, 178, 179, 179, 179, 178, 178, 179, 177, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 1729, 1729, 1730, 1731, 77, 77, 78, 77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 77, 78, 77, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77, 78, 205, 201, 177, 178, 179, 177, 178, 178, 179, 177, 178, 179, 177, 178, 178, 179, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 477, 178, 178, 178, 178, 178, 178, 177, 178, 179, 177, 178, 178, 179, 179, 179, 179, 177, 178, 178, 179, 0, 0, 0, 0, 176, 179, 177, 177, 178, 179, 178, 177, 178, 179, 177, 178, 178, 178, 179, 178, 178, 179, 205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 178, 179, 179, 178, 179, 179, 179, 178, 178, 179, 177, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 1754, 1754, 1755, 1756, 77, 77, 78, 77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 77, 78, 77, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77, 78, 180, 176, 177, 177, 178, 179, 177, 178, 178, 177, 178, 179, 177, 178, 178, 179, 476, 477, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 501, 501, 501, 476, 477, 478, 478, 478, 477, 478, 478, 178, 179, 177, 178, 179, 177, 178, 178, 179, 179, 179, 178, 179, 179, 178, 179, 177, 178, 179, 179, 0, 0, 0, 0, 201, 178, 177, 177, 178, 179, 179, 177, 178, 179, 177, 178, 178, 178, 179, 178, 178, 179, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 179, 179, 178, 179, 179, 178, 179, 179, 179, 179, 178, 179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 1679, 1679, 1680, 1681, 78, 77, 77, 77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 77, 78, 77, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77, 78, 205, 201, 177, 177, 178, 179, 177, 178, 177, 178, 179, 177, 178, 178, 179, 179, 476, 476, 476, 476, 476, 476, 477, 478, 503, 503, 503, 503, 503, 478, 478, 478, 478, 478, 478, 503, 503, 478, 476, 477, 177, 178, 179, 177, 178, 178, 179, 179, 179, 179, 179, 179, 179, 179, 177, 177, 177, 178, 179, 179, 0, 0, 0, 0, 176, 177, 177, 178, 177, 178, 179, 177, 178, 179, 177, 178, 179, 177, 179, 177, 178, 179, 205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 179, 179, 178, 179, 178, 178, 179, 179, 179, 179, 178, 179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 1704, 1704, 1705, 1706, 78, 77, 77, 77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 77, 78, 77, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77, 78, 180, 176, 179, 177, 178, 179, 177, 178, 177, 178, 179, 177, 178, 178, 179, 179, 476, 476, 476, 476, 476, 477, 478, 476, 476, 477, 478, 502, 503, 476, 476, 476, 476, 476, 476, 476, 476, 476, 501, 502, 177, 178, 179, 177, 178, 179, 179, 179, 179, 179, 179, 179, 179, 179, 177, 177, 177, 178, 179, 179, 0, 0, 0, 0, 201, 177, 179, 177, 178, 178, 178, 179, 177, 177, 177, 178, 179, 177, 178, 179, 177, 178, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 178, 179, 177, 178, 178, 179, 178, 178, 178, 179, 177, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 1729, 1729, 1730, 1731, 78, 77, 77, 77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 77, 78, 77, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77, 78, 205, 201, 177, 178, 179, 177, 178, 178, 177, 177, 178, 179, 177, 178, 178, 179, 501, 501, 501, 501, 476, 476, 476, 501, 501, 476, 476, 476, 476, 501, 501, 501, 501, 501, 501, 501, 501, 501, 501, 502, 179, 177, 177, 177, 178, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 0, 0, 0, 0, 176, 179, 179, 177, 178, 179, 178, 179, 177, 177, 177, 178, 179, 177, 178, 179, 177, 178, 205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 178, 179, 177, 178, 178, 179, 177, 178, 178, 179, 177, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 1754, 1754, 1755, 1756, 78, 77, 77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 77, 78, 77, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77, 78, 78, 180, 176, 177, 177, 177, 177, 178, 177, 177, 177, 178, 179, 177, 178, 178, 179, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 476, 477, 179, 177, 177, 177, 178, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 0, 0, 0, 0, 201, 179, 179, 177, 178, 178, 179, 178, 179, 177, 178, 177, 202, 203, 204, 204, 203, 204, 205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 179, 179, 178, 179, 178, 178, 179, 178, 179, 177, 178, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 1679, 1679, 1680, 1681, 78, 77, 77, 77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 77, 78, 77, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77, 78, 205, 176, 177, 177, 177, 177, 177, 177, 179, 177, 178, 179, 177, 178, 179, 179, 476, 477, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 501, 501, 501, 476, 477, 478, 478, 478, 477, 478, 478, 178, 177, 178, 179, 177, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1426, 1430, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 179, 179, 179, 179, 179, 179, 178, 178, 179, 177, 178, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 1704, 1704, 1705, 1706, 77, 77, 77, 77, 77, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 77, 78, 77, 77, 78, 77, 78, 77, 77, 78, 79, 77, 77, 78, 77, 77, 77, 78, 205, 201, 179, 179, 179, 179, 177, 179, 179, 179, 177, 177, 177, 178, 179, 179, 476, 476, 476, 476, 476, 476, 477, 478, 503, 503, 503, 503, 503, 478, 478, 478, 478, 478, 478, 503, 503, 478, 476, 477, 177, 177, 177, 177, 177, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 589, 589, 589, 589, 0, 0, 0, 0, 0, 1426, 1430, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 392, 393, 392, 393, 392, 393, 0, 176, 179, 179, 179, 179, 179, 179, 178, 179, 178, 179, 177, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            78, 79, 79, 77, 77, 77, 77, 78, 79, 77, 78, 79, 77, 77, 77, 1729, 1729, 1730, 1731, 77, 77, 77, 77, 78, 79, 79, 77, 77, 77, 77, 78, 79, 77, 78, 79, 77, 77, 77, 77, 77, 78, 77, 77, 77, 78, 77, 77, 77, 78, 77, 78, 77, 78, 180, 176, 179, 179, 179, 179, 179, 179, 178, 179, 177, 177, 177, 178, 179, 179, 476, 476, 476, 476, 476, 477, 478, 476, 476, 477, 478, 502, 503, 476, 476, 476, 476, 476, 476, 476, 476, 476, 501, 502, 177, 177, 177, 177, 177, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 667, 363, 363, 363, 363, 363, 363, 363, 363, 363, 1451, 1455, 129, 128, 128, 129, 127, 129, 128, 128, 129, 128, 128, 129, 127, 128, 126, 417, 418, 417, 418, 417, 418, 128, 201, 178, 178, 179, 178, 178, 178, 178, 179, 177, 178, 178, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 78, 1754, 1754, 1755, 1756, 78, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 78, 77, 77, 77, 77, 78, 77, 77, 78, 79, 77, 77, 77, 78, 77, 78, 205, 201, 178, 178, 178, 178, 179, 178, 178, 178, 179, 177, 178, 177, 178, 179, 501, 501, 501, 501, 476, 476, 476, 501, 501, 476, 476, 476, 476, 501, 501, 501, 501, 501, 501, 501, 501, 501, 501, 502, 179, 179, 179, 179, 179, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 388, 389, 154, 153, 153, 154, 152, 154, 153, 153, 154, 153, 153, 154, 152, 153, 154, 152, 153, 154, 152, 154, 154, 152, 153, 178, 178, 179, 178, 178, 178, 178, 178, 178, 179, 177, 178, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":30,
         "id":1,
         "name":"Capa de patrones 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":300,
         "x":0,
         "y":0
        }],
 "nextlayerid":7,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"git",
 "tileheight":16,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/tiles.tsx"
        }, 
        {
         "firstgid":1251,
         "source":"..\/..\/..\/snap\/tiled\/4217\/tiles.tsx"
        }],
 "tilewidth":16,
 "type":"map",
 "version":"1.10",
 "width":300
});