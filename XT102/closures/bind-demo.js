this.x = 9;    // 'this' refers to global 'window' object here in a browser
const module = {
  x: 81,
  getX: function() { return this.x; }
};

//console.log(this);  //window object

console.log(module.getX());

extGetX=module.getX;

console.log(extGetX());

const extGetX2=extGetX.bind(module);

console.log(extGetX2());
