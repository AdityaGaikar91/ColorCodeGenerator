// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano', // or 'monolith', or 'nano'
    position: 'top-end',
    showAlways: true,

    swatches: [
        
    ],

    components: {

        // Main components
        // preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
           
        }
    }
});

pickr.on('change', (color) => {
    let hexColor = color.toHEXA().toString();
    let elements = ['colorText', 'backGround', 'hexa', 'rgba', 'hsla', 'hsva', 'cmyk'];
    
    
    
    elements.forEach((element) => {
        let el = document.getElementById(element);
        switch (element) {
            case 'backGround':
                el.style.backgroundColor = hexColor;
                break;
            case 'colorText':
            case 'hexa':
                el.value = hexColor;
                break;
            default:
                el.value = color['to' + element.toUpperCase()]().toString(1);
                break;
        }
    });
});

function copyToClipboard(inputId, buttonId) {
    let inputText = document.getElementById(inputId).value;
    navigator.clipboard.writeText(inputText);
    document.getElementById(buttonId).innerText = "Copied";
    setTimeout(function() {
      document.getElementById(buttonId).innerText = "Copy";
    }, 500);
  }
  
  document.getElementById("hexaCodeBtn").addEventListener("click", function() {
    copyToClipboard("hexa", "hexaCodeBtn");
  });
  
  document.getElementById("rgbaCodeBtn").addEventListener("click", function() {
    copyToClipboard("rgba", "rgbaCodeBtn");
  });
  
  document.getElementById("hslaCodeBtn").addEventListener("click", function() {
    copyToClipboard("hsla", "hslaCodeBtn");
  });
  
  document.getElementById("hsvaCodeBtn").addEventListener("click", function() {
    copyToClipboard("hsva", "hsvaCodeBtn");
  });
  
  document.getElementById("cmykCodeBtn").addEventListener("click", function() {
    copyToClipboard("cmyk", "cmykCodeBtn");
  });
  



  $(document).ready(function() {
    var colors = [];
  
    $('#add-color').click(function() {
      var color = $('#color').val();
      if (color) {
        colors.push(color);
        $('#color-palette').empty();
        for (var i = 0; i < colors.length; i++) {
          var colorBox = $('<div>').addClass('color-box').css('background-color', colors[i]);
          $('#color-palette').append(colorBox);
        }
      }
    });
  });
  
