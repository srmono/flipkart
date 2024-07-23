### CSS Measurements

CSS provides various units of measurement to specify sizes, distances, and other properties. Here is an overview of different types of CSS measurements, along with examples for each.

#### Absolute Units
Absolute units are fixed and not relative to anything else. They are consistent across different devices and screen sizes.

- **Pixels (`px`)**
  - Fixed size units. Commonly used for precise measurements.
  - Example:
    ```css
    .box {
      width: 200px;
      height: 100px;
    }
    ```

- **Inches (`in`)**
  - 1 inch equals 96 pixels.
  - Example:
    ```css
    .box {
      width: 2in;
      height: 1in;
    }
    ```

- **Centimeters (`cm`)**
  - 1 centimeter equals 37.8 pixels.
  - Example:
    ```css
    .box {
      width: 5cm;
      height: 2.5cm;
    }
    ```

- **Millimeters (`mm`)**
  - 1 millimeter equals 3.78 pixels.
  - Example:
    ```css
    .box {
      width: 50mm;
      height: 25mm;
    }
    ```

- **Points (`pt`)**
  - 1 point equals 1/72 of an inch.
  - Example:
    ```css
    .text {
      font-size: 12pt;
    }
    ```

- **Picas (`pc`)**
  - 1 pica equals 12 points.
  - Example:
    ```css
    .box {
      width: 10pc;
      height: 5pc;
    }
    ```

#### Relative Units
Relative units are relative to other lengths, such as the size of the viewport or the font size of the parent element.

- **Percentage (`%`)**
  - Relative to the parent element's size.
  - Example:
    ```css
    .box {
      width: 50%;
      height: 50%;
    }
    ```

- **Em (`em`)**
  - Relative to the font size of the element. Commonly used for typography.
  - Example:
    ```css
    .text {
      font-size: 2em;
      line-height: 1.5em;
    }
    ```

- **Rem (`rem`)**
  - Relative to the font size of the root element (`html`).
  - Example:
    ```css
    :root {
      font-size: 16px;
    }
    .text {
      font-size: 1.5rem;
    }
    ```

- **Viewport Width (`vw`)**
  - 1vw is 1% of the viewport's width.
  - Example:
    ```css
    .box {
      width: 50vw;
      height: 50vw;
    }
    ```

- **Viewport Height (`vh`)**
  - 1vh is 1% of the viewport's height.
  - Example:
    ```css
    .box {
      width: 50vh;
      height: 50vh;
    }
    ```

- **Viewport Min (`vmin`)**
  - 1vmin is 1% of the viewport's smaller dimension (width or height).
  - Example:
    ```css
    .box {
      width: 50vmin;
      height: 50vmin;
    }
    ```

- **Viewport Max (`vmax`)**
  - 1vmax is 1% of the viewport's larger dimension (width or height).
  - Example:
    ```css
    .box {
      width: 50vmax;
      height: 50vmax;
    }
    ```

#### CSS Functions for Measurements
CSS functions allow for dynamic calculations and adjustments of measurements.

- **Calc Function (`calc()`)**
  - Perform calculations to determine CSS property values.
  - Example:
    ```css
    .box {
      width: calc(100% - 50px);
      height: calc(50vh + 20px);
    }
    ```

- **Min Function (`min()`)**
  - Takes the minimum of multiple values.
  - Example:
    ```css
    .box {
      width: min(50%, 400px);
    }
    ```

- **Max Function (`max()`)**
  - Takes the maximum of multiple values.
  - Example:
    ```css
    .box {
      width: max(50%, 200px);
    }
    ```

- **Clamp Function (`clamp()`)**
  - Clamps a value between a defined minimum and maximum.
  - Example:
    ```css
    .text {
      font-size: clamp(1rem, 2.5vw, 2rem);
    }
    ```

### Summary
Understanding these CSS units and functions helps create responsive, flexible, and precise designs. Each unit has its use case and choosing the right one depends on the context and design requirements.