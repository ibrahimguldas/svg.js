SVG.G = SVG.invent({
  // Initialize node
  create: 'g'

  // Inherit from
, inherit: SVG.Container
  
  // Add class methods
, extend: {
    // Move over x-axis
    x: function(x) {
      return x == null ? this.transform('x') : this.transform({ x: -this.x() + x }, true)
    }
    // Move over y-axis
  , y: function(y) {
      return y == null ? this.transform('y') : this.transform({ y: -this.y() + y }, true)
    }
    // Move by center over x-axis
  , cx: function(x) {
      return x == null ? this.tbox().cx : this.x(x - this.tbox().width / 2)
    }
    // Move by center over y-axis
  , cy: function(y) {
      return y == null ? this.tbox().cy : this.y(y - this.tbox().height / 2)
    }
  }
  
  // Add parent method
, construct: {
    // Create a group element
    group: function() {
      return this.put(new SVG.G)
    }
  }
})