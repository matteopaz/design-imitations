const svg = document.getElementById("start-animation");
const circles = [...svg.querySelectorAll("circle")].slice(0, 3).reverse(); // Small to large
const initialValues = (function() {
    let arr = Array(circles.length);
    circles.forEach((c, i) => {
        arr[i] = parseInt(c.getAttribute("r").replace("px", ""));
    });
    return arr;
})();

function animateCircles() {
    circles.forEach((circle, index) => {
        const r = parseFloat(circle.getAttribute("r").replace("px", ""));
        const opacity = parseFloat(circle.getAttribute("opacity"));
        if (r >= 10) {
            circle.setAttribute("r", r - 0.1);
        } else {
            circle.setAttribute("opacity", 0);
            circle.setAttribute("r", initialValues[initialValues.length - 1]);
            initialValues[index] = initialValues[initialValues.length - 1];
            return
        }
        circle.setAttribute("opacity", (initialValues[index] - r) / (initialValues[index] + 10));
    });
    requestAnimationFrame(animateCircles);
}

animateCircles();