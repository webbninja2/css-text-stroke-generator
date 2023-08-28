document.addEventListener('DOMContentLoaded', function () 
{
    // GLOBAL 
    const classname          = document.querySelector(".classname");
    const dummyTextInput     = document.getElementById('dummyText');
    const sampleText         = document.getElementById('sampleText');
    const boxLayout          = document.querySelector('.boxLaoyut');
    const imageBackground    = document.getElementById('imageBackground');
    const boldOption         = document.getElementById('boldOption');
    const italicOption       = document.getElementById('italicOption');
    const sampleTextStyle    = sampleText.style;
    const fontFamilySelect   = document.getElementById('fontFamilySelect');
    const googleFontsIcon    = document.getElementById('googleFontsIcon');
    // TEXT STROKE 
    const textstrokeTab      = document.getElementById('textstrokeTab');
    const fontSizeInput      = document.getElementById('fontSize');
    const fontSizeValue      = document.getElementById('fontSizeValue');
    const letterSpacingInput = document.getElementById('letterSpacing');
    const letterSpacingValue = document.getElementById('letterSpacingValue');
    const sizeOptions        = document.querySelector('.size-options');
    const strokeWidthRange   = document.getElementById('strokeWidthRange');
    const strokeWidthInput   = document.getElementById('strokeWidthInput');
    const strokeColor        = document.getElementById('strokeColor');
    const strokeColorInput   = document.getElementById('strokeColorInput');
    const fillColorPicker    = document.getElementById('fillColor');
    const fillColorInput     = document.getElementById('fillColorInput');
    // BACKGROUND
    const backgroundTab      = document.getElementById('backgroundTab');
    const bgOptions          = document.getElementById('bgOptions'); 
    const imageOptions       = document.querySelectorAll('.image-option');
    const bgPositionXInput   = document.getElementById('bgPositionX');
    const bgPositionYInput   = document.getElementById('bgPositionY');
    const bgPositionXValue   = document.getElementById('bgPositionXValue');
    const bgPositionYValue   = document.getElementById('bgPositionYValue');
    // TEXTSHADOW
    const textShadowTab      = document.getElementById('textshadowTab');
    const textShadowOptions  = document.getElementById('txtshadowOptions');
    const horigentalrange    = document.getElementById('horigentalrange');
    const horigentalinput    = document.getElementById('horigentalinput');
    const veticalrange       = document.getElementById('veticalrange');
    const veticalinput       = document.getElementById('veticalinput');
    const blurrange          = document.getElementById('blurrange');
    const blurinput          = document.getElementById('blurinput');
    const opacityrange       = document.getElementById('opacityrange');
    const opacityinput       = document.getElementById('opacityinput');

    // GLOBAL ACTIVE TAB
    function activateTab(tabElement) {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        });
        tabElement.classList.add('active-tab');
    }

    // GLOBAL BOLD STYLE
    boldOption.addEventListener('click', () => {
        sampleTextStyle.fontWeight = sampleTextStyle.fontWeight === 'bold' ? 'normal' : 'bold';
        boldOption.classList.toggle('active');
    });
    // GLOBAL ITALIC STYLE
    italicOption.addEventListener('click', () => {
        sampleTextStyle.fontStyle = sampleTextStyle.fontStyle === 'italic' ? 'normal' : 'italic';
        italicOption.classList.toggle('active');
    });
    // GLOBAL FONT FAMILY
    fontFamilySelect.addEventListener('change', () => {
        const selectedFont = fontFamilySelect.value;
        sampleText.style.fontFamily = selectedFont;
    });
    // GLOBAL BACKGROUND COLOR
        imageBackground.addEventListener('click', () => {
        changeBackgroundColor('url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC1JREFUeNpiPHPmDAM2YGxsjFWciYFEMKqBGMD4//9/rBJnz54dDSX6aQAIMABCtQiAsDRF+wAAAABJRU5ErkJggg==")');
    });

    function changeBackgroundColor(color) {
        boxLayout.style.background = color;
    }
    whiteBox.addEventListener('click', () => {
        changeBackgroundColor('white');
    });

    blackBox.addEventListener('click', () => {
        changeBackgroundColor('black');
    });
    // GLOBAL REPLACE DUMMY CONTENT
    dummyTextInput.addEventListener('input', () => {
        if (dummyTextInput.value.trim() === '') {
            sampleText.textContent = "Sample Text";
        } else {
            sampleText.textContent = dummyTextInput.value;
        }
    });

    // TEXT STROKE

    const defaultStrokeWidth = 1.5; 
    const defaultStrokeColor = 'rgb(184, 0, 0)'; 
    sampleText.style.webkitTextStroke = `${defaultStrokeWidth}px ${defaultStrokeColor}`;
    // strokeWidthRange.value = defaultStrokeWidth;
    // strokeWidthInput.value = defaultStrokeWidth;
    // strokeColor.value = defaultStrokeColor;
    // strokeColorInput.value = defaultStrokeColor;

    textstrokeTab.addEventListener('click', () => {
        activateTab(textstrokeTab);
        sizeOptions.classList.remove('hidden');
        bgOptions.classList.add('hidden');
        textShadowOptions.classList.add('hidden');

    });
    fontSizeInput.addEventListener('input', () => {
        const newSize = fontSizeInput.value + 'px';
        sampleText.style.fontSize = newSize;
        fontSizeValue.value = newSize;
    });

    fontSizeValue.addEventListener('input', () => {
        const newSize = fontSizeValue.value;
        sampleText.style.fontSize = newSize;
        fontSizeInput.value = newSize.replace('px', '');
    });

    letterSpacingInput.addEventListener('input', () => {
        const newSpacing = letterSpacingInput.value + 'px';
        sampleText.style.letterSpacing = newSpacing;
        letterSpacingValue.value = newSpacing;
    });

    letterSpacingValue.addEventListener('input', () => {
        const newSpacing = letterSpacingValue.value;
        sampleText.style.letterSpacing = newSpacing;
        letterSpacingInput.value = newSpacing.replace('px', '');
    });

    strokeWidthRange.addEventListener('input', () => {
        const strokeWidthValue = strokeWidthRange.value;
        strokeWidthInput.value = strokeWidthValue;
        sampleText.style.webkitTextStrokeWidth = `${strokeWidthValue}px`;
    });

    strokeWidthInput.addEventListener('input', () => {
        const strokeWidthValue = strokeWidthInput.value;
        strokeWidthRange.value = strokeWidthValue;
        sampleText.style.webkitTextStrokeWidth = `${strokeWidthValue}px`;
    });

    strokeColor.addEventListener('input', () => {
        const strokeColorValue = strokeColor.value;
        sampleText.style.webkitTextStrokeColor = strokeColorValue;
    });

    strokeColorInput.addEventListener('input', () => {
        const strokeColor = strokeColorInput.value;
        sampleText.style.webkitTextStrokeColor = strokeColor;
    });

    fillColorPicker.addEventListener('input', () => {
        const fillColor = fillColorPicker.value;
        fillColorInput.value = fillColor;
        sampleText.style.color = fillColor;
    });

    fillColorInput.addEventListener('input', () => {
        const fillColor = fillColorInput.value;
        sampleText.style.color = fillColor;
    });
    

    // BACKGROUND TAB
    backgroundTab.addEventListener('click', () => {
        activateTab(backgroundTab);
        bgOptions.classList.remove('hidden');
        sizeOptions.classList.add('hidden');
        textShadowOptions.classList.add('hidden');
    });

    imageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const backgroundImage = option.style.backgroundImage;
            changeBackgroundImage(backgroundImage);
        });
    });

    function changeBackgroundImage(backgroundImage) {
        sampleText.style.backgroundImage = backgroundImage;
        sampleText.style.webkitBackgroundClip = 'text';
        sampleText.style.webkitTextFillColor = 'transparent';
    }

    bgPositionXInput.addEventListener('input', () => {
        const newXValue = bgPositionXInput.value + '%';
        bgPositionXValue.value = newXValue;
        updateBackgroundPosition();
    });

    bgPositionYInput.addEventListener('input', () => {
        const newYValue = bgPositionYInput.value + '%';
        bgPositionYValue.value = newYValue;
        updateBackgroundPosition();
    });

    bgPositionXValue.addEventListener('input', () => {
        const newXValue = bgPositionXValue.value;
        bgPositionXInput.value = parseInt(newXValue) || 0;
        updateBackgroundPosition();
    });

    bgPositionYValue.addEventListener('input', () => {
        const newYValue = bgPositionYValue.value;
        bgPositionYInput.value = parseInt(newYValue) || 0;
        updateBackgroundPosition();
    });

    function updateBackgroundPosition() {
        const xPos = bgPositionXInput.value + '%';
        const yPos = bgPositionYInput.value + '%';
        sampleText.style.backgroundPosition = `${xPos} ${yPos}`;
    }

    // TEXT SHADOW TAB
    textShadowTab.addEventListener('click', () => {
        activateTab(textShadowTab);
        textShadowOptions.classList.remove('hidden');
        bgOptions.classList.add('hidden');
        sizeOptions.classList.add('hidden');

        // Set default text shadow when the tab is clicked
        const defaultTextShadow = 'rgb(163, 163, 163) 4px 4px 0px';
        sampleText.style.textShadow = defaultTextShadow;

        // Set the initial values of input ranges and inputs
        horigentalrange.value = 4;
        horigentalinput.value = '4px';
        veticalrange.value = 4;
        veticalinput.value = '4px';
        blurrange.value = 0;
        blurinput.value = '0px';
        opacityrange.value = 100;
        opacityinput.value = 1;
    });

    horigentalrange.addEventListener('input', () => {
        const hOffset = horigentalrange.value + 'px';
        horigentalinput.value = parseInt(hOffset) || 0;
        updateTextShadow();
    });

    horigentalinput.addEventListener('input', () => {
        const hOffset = horigentalinput.value;
        horigentalrange.value = hOffset.replace('px', '');
        updateTextShadow();
    });

    veticalrange.addEventListener('input', () => {
        const vOffset = veticalrange.value + 'px';
        veticalinput.value = parseInt(vOffset) || 0;
        updateTextShadow();
    });

    veticalinput.addEventListener('input', () => {
        const vOffset = veticalinput.value;
        veticalrange.value = vOffset.replace('px', '');
        updateTextShadow();
    });

    blurrange.addEventListener('input', () => {
        const blurRadius = blurrange.value + 'px';
        blurinput.value = parseInt(blurRadius) || 0;
        updateTextShadow();
    });

    blurinput.addEventListener('input', () => {
        const blurRadius = blurinput.value;
        blurrange.value = blurRadius.replace('px', '');
        updateTextShadow();
    });

    opacityrange.addEventListener('input', () => {
        const opacityValue = opacityrange.value / 100;
        opacityinput.value = opacityValue;
        updateTextShadow();
    });

    opacityinput.addEventListener('input', () => {
        const opacityValue = opacityinput.value;
        opacityrange.value = opacityValue * 100;
        updateTextShadow();
    });

    const textShadowColor = document.getElementById('textShadowColor');
    const textShadowColorInput = document.getElementById('textShadowColorInput');

    textShadowColor.addEventListener('input', () => {
        const newColor = textShadowColor.value;
        textShadowColorInput.value = newColor;
        updateTextShadow(newColor);
    });

    textShadowColorInput.addEventListener('input', () => {
        const newColor = textShadowColorInput.value;
        textShadowColor.value = newColor;
        updateTextShadow(newColor);
    });

    function updateTextShadow() {
        const hOffset = horigentalrange.value + 'px';
        const vOffset = veticalrange.value + 'px';
        const blurRadius = blurrange.value + 'px';
        const opacityValue = opacityrange.value / 100;
        const colorValue = textShadowColor.value;
        const rgbColor = hexToRgb(colorValue);
        const textShadowValue = `${hOffset} ${vOffset} ${blurRadius} rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, ${opacityValue})`;
        sampleText.style.textShadow = textShadowValue;
    }
});   
    
// GENERATE HTML AND CSS
const classInput = document.getElementById('classname');
const generateCodeButton = document.getElementById('generateCodeButton');
const generatedHtmlContainer = document.createElement('div');
generatedHtmlContainer.classList.add('generated-code-container');

generateCodeButton.addEventListener('click', () => {
    clearGeneratedCode();
    const selectedTab = document.querySelector('.active-tab');
    const generatedHtml = generateHtml(selectedTab);
    const generatedCss = generateCss(selectedTab);
    const generatedCodeHtmlContainer = document.createElement('div');
    const generatedCodeHtmlHeading = document.createElement('h5');
    generatedCodeHtmlHeading.innerText = 'HTML';
    generatedCodeHtmlContainer.appendChild(generatedCodeHtmlHeading);
    const generatedCodeHtml = document.createElement('pre');
    generatedCodeHtml.innerText = generatedHtml;
    generatedCodeHtmlContainer.appendChild(generatedCodeHtml);
    generatedHtmlContainer.appendChild(generatedCodeHtmlContainer);
    const generatedCodeCssContainer = document.createElement('div');
    const generatedCodeCssHeading = document.createElement('h5');
    generatedCodeCssHeading.innerText = 'CSS';
    generatedCodeCssContainer.appendChild(generatedCodeCssHeading);
    const generatedCodeCss = document.createElement('pre');
    generatedCodeCss.innerText = generatedCss;
    generatedCodeCssContainer.appendChild(generatedCodeCss);
    generatedHtmlContainer.appendChild(generatedCodeCssContainer);
    const formGenerator = document.querySelector('.form-generator');
    formGenerator.appendChild(generatedHtmlContainer);
});

textstrokeTab.addEventListener('click', () => {
    clearGeneratedCode();
});

backgroundTab.addEventListener('click', () => {
    clearGeneratedCode();
});

textShadowTab.addEventListener('click', () => {
    clearGeneratedCode();
});

function clearGeneratedCode() {
    while (generatedHtmlContainer.firstChild) 
    {
        generatedHtmlContainer.removeChild(generatedHtmlContainer.firstChild);
    }
}

function generateHtml(selectedTab) 
{
    const className = classInput.value;
    
    if (selectedTab.id === 'textstrokeTab') {
        const textValue = dummyText.value || 'Sample Text';
        return `<div class="${className}">` +
            `${textValue}` +
            '</div>';

    } 
    else if (selectedTab.id === 'backgroundTab') {
        const textValue = dummyText.value || 'Sample Text';
        return `<div class="${className}">` +
            `${textValue}` +
            '</div>';

    } 
    else if (selectedTab.id === 'textshadowTab') {
        const textValue = dummyText.value || 'Sample Text';
        return `<div class="${className}">` +
            `${textValue}` +
            '</div>';
    }
}

function generateCss(selectedTab) {
    let css        = '';
    const className = classInput.value;
    const hexColor = strokeColor.value;
    const fillColor = fillColorInput.value;
    const rgbColor = hexTorgb(hexColor);
    if (selectedTab.id === 'textstrokeTab') {
        css += `.${className} {\n` +
            `    font-size: ${fontSize.value}px;\n` +
            `    letter-spacing: ${letterSpacing.value}px;\n`+
            `    color: ${fillColor};\n`+
            `    -webkit-text-stroke: ${strokeWidthInput.value}px ${rgbColor};\n`;

        if (sampleText.style.fontWeight !== '' && sampleText.style.fontWeight !== 'normal') {
            css += `    font-weight: ${sampleText.style.fontWeight};\n`;
        }

        if (sampleText.style.fontStyle === 'italic') {
            css += '    font-style: italic;\n';
        }

        if (sampleText.style.fontFamily) {
            css += `    font-family: ${sampleText.style.fontFamily}, sans-serif;\n`;
        }

        if (sampleText.style.backgroundImage && sampleText.style.backgroundImage !== 'none') {
            css += `    -webkit-background-clip: text;\n` +
                `    -webkit-text-fill-color: transparent;\n` +
                `    background-position: ${bgPositionXValue.value} ${bgPositionYValue.value};\n` +
                `    background-image: ${sampleText.style.backgroundImage};\n`;
        }

        css += '    /* Add other CSS properties here */\n' +
            '}\n';
    }

    else if (selectedTab.id === 'backgroundTab') {
        css += `.${className} {\n` +
            `    font-size: ${fontSize.value}px;\n` +
            `    letter-spacing: ${letterSpacing.value}px;\n`;

        if (sampleText.style.fontWeight !== '' && sampleText.style.fontWeight !== 'normal') {
            css += `    font-weight: ${sampleText.style.fontWeight};\n`;
        }

        if (sampleText.style.fontStyle === 'italic') {
            css += '    font-style: italic;\n';
        }

        if (sampleText.style.fontFamily) {
            css += `    font-family: ${sampleText.style.fontFamily}, sans-serif;\n`;
        }

        if (sampleText.style.backgroundImage && sampleText.style.backgroundImage !== 'none') {
            css += `    -webkit-background-clip: text;\n` +
                `    -webkit-text-fill-color: transparent;\n` +
                `    background-position: ${bgPositionXValue.value} ${bgPositionYValue.value};\n` +
                `    background-image: ${sampleText.style.backgroundImage};\n`;
        }

        css += '    /* Add other CSS properties here */\n' +
            '}\n';
    }

    else if (selectedTab.id === 'textshadowTab') {
        const hOffset = horigentalrange.value + 'px';
        const vOffset = veticalrange.value + 'px';
        const blurRadius = blurrange.value + 'px';
        const opacityValue = opacityrange.value / 100;
        css += `.${className} {\n` +
            // `    text-shadow: ${hOffset} ${vOffset} ${blurRadius} rgba(163, 163, 163, ${opacityValue});\n` +
            `    text-shadow: ${sampleText.style.textShadow};\n` +
            `    font-size: ${fontSize.value}px;\n` +
            `    color: ${fillColor};\n`+
            `    letter-spacing: ${letterSpacing.value}px;\n`;

        if (sampleText.style.fontWeight !== '' && sampleText.style.fontWeight !== 'normal') {
            css += `    font-weight: ${sampleText.style.fontWeight};\n`;
        }

        if (sampleText.style.fontStyle === 'italic') {
            css += '    font-style: italic;\n';
        }

        if (sampleText.style.fontFamily) {
            css += `    font-family: ${sampleText.style.fontFamily}, sans-serif;\n`;
        }

        css += '    /* Add other CSS properties here */\n' +
            '}\n';
    }
    return css;
}

// Function to convert hex color to RGB format
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
}

// Function to convert hex color to RGB format for TEXT STROKE
function hexTorgb(hex) {
    // Remove '#' if present
    hex = hex.replace('#', '');

    // Parse the hex value to integers
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Return the RGB format
    return `rgb(${r}, ${g}, ${b})`;
}