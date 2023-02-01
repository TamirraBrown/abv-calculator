function calculateABV() {
    // Get OG and FG values from input fields
    var og = document.getElementById("og").value;
    var fg = document.getElementById("fg").value;

    // Calculate ABV using the following formula:
    // (OG - FG) * 131.25
    var abv = (og - fg) * 131.25;

    // Display the result
    document.getElementById("abv").innerHTML = abv;
  }