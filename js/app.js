function showGraph() {
  var selectedFigure = document.getElementById("figure").value;
  var graphContainer = document.getElementById("graph-container");
  var graph = document.getElementById("graph");
  var figureTitle = document.getElementById("figure-title");
  var description = document.getElementById("description");
  var input2Container = document.getElementById("input2-container");
  var input3Container = document.getElementById("input3-container");

  switch (selectedFigure) {
    case "square":
      graph.innerHTML = '<img src="/img/1.square.png">';
      figureTitle.innerHTML = "Square";
      description.innerHTML = "Area = s^2<br>Perimeter = 4s";
      input2Container.style.display = "none";
      input3Container.style.display = "none";
      break;
    case "rectangle":
      graph.innerHTML = '<img src="/img/2.rectangle.png">';
      figureTitle.innerHTML = "Rectangle";
      description.innerHTML = "Area = lw<br>Perimeter = 2(l+w)";
      input2Container.style.display = "block";
      input3Container.style.display = "none";
      break;
    case "triangle":
      graph.innerHTML = '<img src="/img/3.triangle.jpg">';
      figureTitle.innerHTML = "Triangle";
      description.innerHTML = "Area = (bh)/2<br>Perimeter = a+b+c";
      input2Container.style.display = "block";
      input3Container.style.display = "none";
      break;
    case "rhombus":
      graph.innerHTML = '<img src="/img/4.rhombus.png">';
      figureTitle.innerHTML = "Rhombus";
      description.innerHTML = "Area = (d1d2)/2<br>Perimeter = 4s";
      input2Container.style.display = "block";
      input3Container.style.display = "none";
      break;
    case "trapezium":
      graph.innerHTML = '<img src="/img/5.trapezium.png">';
      figureTitle.innerHTML = "Trapezium";
      description.innerHTML = "Area = ((a+b)h)/2<br>Perimeter = a+b+c+d";
      input2Container.style.display = "block";
      input3Container.style.display = "block";
      break;
    case "circle":
      graph.innerHTML = '<img src="/img/6.circle.jpg">';
      figureTitle.innerHTML = "Circle";
      description.innerHTML = "Area = πr^2<br>Circumference = 2πr";
      input2Container.style.display = "none";
      input3Container.style.display = "none";
      break;
    case "sphere":
      graph.innerHTML = '<img src="/img/7.sphere.png">';
      figureTitle.innerHTML = "Sphere";
      description.innerHTML = "Surface Area = 4πr^2<br>Volume = (4/3)πr^3";
      input2Container.style.display = "none";
      input3Container.style.display = "none";
      break;
    case "cube":
      graph.innerHTML = '<img src="/img/8.cube.png">';
      figureTitle.innerHTML = "Cube";
      description.innerHTML = "Surface Area = 6s^2<br>Volume = s^3";
      input2Container.style.display = "none";
      input3Container.style.display = "none";
      break;
    case "parallelepiped":
      graph.innerHTML = '<img src="/img/9.parallelepiped.png">';
      figureTitle.innerHTML = "Parallelepiped";
      description.innerHTML = "Surface Area = 2lw + 2lh + 2wh<br>Volume = lwh";
      input2Container.style.display = "block";
      input3Container.style.display = "block";
      break;
    case "cylinder":
      graph.innerHTML = '<img src="/img/10.cylinder.png">';
      figureTitle.innerHTML = "Cylinder";
      description.innerHTML = "Surface Area = 2πrh + 2πr^2<br>Volume = πr^2h";
      input2Container.style.display = "block";
      input3Container.style.display = "none";
      break;
    case "cone":
      graph.innerHTML = '<img src="/img/11.cone.png">';
      figureTitle.innerHTML = "Cone";
      description.innerHTML =
        "Surface Area = πr^2 + πrs<br>Volume = (1/3)πr^2h";
      input2Container.style.display = "block";
      input3Container.style.display = "none";
      break;
  }

  graphContainer.style.display = "block";
}

function calculate() {
  var selectedFigure = document.getElementById("figure").value;
  var input1 = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);
  var input3 = parseFloat(document.getElementById("input3").value);
  var result = document.getElementById("result");


  switch (selectedFigure) {
    case "square":
      var area = input1 * input1;
      var perimeter = 4 * input1;
      result.innerHTML = "Area: " + area + "<br>Perimeter: " + perimeter;
      break;
    case "rectangle":
      var area = input1 * input2;
      var perimeter = 2 * (input1 + input2);
      result.innerHTML = "Area: " + area + "<br>Perimeter: " + perimeter;
      break;
    case "triangle":
      var area = (input1 * input2) / 2;
      var perimeter = input1 + input2 + input3;
      result.innerHTML = "Area: " + area + "<br>Perimeter: " + perimeter;
      break;
    case "rhombus":
      var area = (input1 * input2) / 2;
      var perimeter = 4 * input1;
      result.innerHTML = "Area: " + area + "<br>Perimeter: " + perimeter;
      break;
    case "trapezium":
      var area = ((input1 + input2) * input3) / 2;
      var perimeter = input1 + input2 + input3 + input3;
      result.innerHTML = "Area: " + area + "<br>Perimeter: " + perimeter;
      break;
    case "circle":
      var area = Math.PI * input1 * input1;
      var circumference = 2 * Math.PI * input1;
      result.innerHTML =
        "Area: " + area + "<br>Circumference: " + circumference;
      break;
    case "sphere":
      var surfaceArea = 4 * Math.PI * input1 * input1;
      var volume = (4 / 3) * Math.PI * input1 * input1 * input1;
      result.innerHTML =
        "Surface Area: " + surfaceArea + "<br>Volume: " + volume;
      break;
    case "cube":
      var surfaceArea = 6 * input1 * input1;
      var volume = input1 * input1 * input1;
      result.innerHTML =
        "Surface Area: " + surfaceArea + "<br>Volume: " + volume;
      break;
    case "parallelepiped":
      var surfaceArea =
        2 * input1 * input2 + 2 * input1 * input3 + 2 * input2 * input3;
      var volume = input1 * input2 * input3;
      result.innerHTML =
        "Surface Area: " + surfaceArea + "<br>Volume: " + volume;
      break;
    case "cylinder":
      var surfaceArea =
        2 * Math.PI * input1 * input2 + 2 * Math.PI * input1 * input1;
      var volume = Math.PI * input1 * input1 * input2;
      result.innerHTML =
        "Surface Area: " + surfaceArea + "<br>Volume: " + volume;
      break;
    case "cone":
      var surfaceArea = Math.PI * input1 * input1 + Math.PI * input1 * input2;
      var volume = (1 / 3) * Math.PI * input1 * input1 * input2;
      result.innerHTML =
        "Surface Area: " + surfaceArea + "<br>Volume: " + volume;
      break;
  }
}
