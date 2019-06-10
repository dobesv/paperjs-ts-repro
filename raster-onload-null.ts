import * as paper from 'paper';

const r: paper.Raster = new paper.Raster();

r.onLoad = function() {
  console.log('loaded');
  r.onLoad = null;
};
