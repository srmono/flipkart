
### Basic Selectors
- **Universal Selector (`*`)**
  - Selects all elements.
  - Example:
    ```css
    * {
      margin: 0;
      padding: 0;
    }
    ```

- **Type Selector (Element Selector)**
  - Selects all elements of a given type.
  - Example:
    ```css
    p {
      font-size: 16px;
      color: blue;
    }
    ```

- **Class Selector**
  - Selects all elements with a given class.
  - Example:
    ```css
    .example {
      background-color: yellow;
      padding: 10px;
    }
    ```

- **ID Selector**
  - Selects an element with a specific ID. Note: IDs should be unique within a document.
  - Example:
    ```css
    #example-id {
      border: 1px solid black;
      padding: 20px;
    }
    ```

### Attribute Selectors
- **Exact Attribute Selector**
  - Selects elements with a specific attribute value.
  - Example:
    ```css
    input[type="text"] {
      border: 2px solid green;
    }
    ```

- **Contains Attribute Selector**
  - Selects elements with an attribute value containing a specified substring.
  - Example:
    ```css
    a[href*="example"] {
      color: red;
    }
    ```

- **Starts with Attribute Selector**
  - Selects elements with an attribute value starting with a specified substring.
  - Example:
    ```css
    img[src^="https"] {
      border: 2px solid blue;
    }
    ```

- **Ends with Attribute Selector**
  - Selects elements with an attribute value ending with a specified substring.
  - Example:
    ```css
    a[href$=".pdf"] {
      color: orange;
    }
    ```

### Pseudo-Classes
- **Hover Pseudo-Class**
  - Applies styles when the user hovers over an element.
  - Example:
    ```css
    a:hover {
      text-decoration: underline;
      color: green;
    }
    ```

- **First Child Pseudo-Class**
  - Selects the first child element of its parent.
  - Example:
    ```css
    p:first-child {
      font-weight: bold;
    }
    ```

- **Nth Child Pseudo-Class**
  - Selects elements based on their position in a group of siblings.
  - Example:
    ```css
    p:nth-child(2n) {
      background-color: lightgrey;
    }
    ```

- **Not Pseudo-Class**
  - Selects elements that do not match a given selector.
  - Example:
    ```css
    p:not(.example) {
      color: grey;
    }
    ```

### Pseudo-Elements
- **Before Pseudo-Element**
  - Inserts content before an element's actual content.
  - Example:
    ```css
    p::before {
      content: "Note: ";
      font-weight: bold;
      color: red;
    }
    ```

- **After Pseudo-Element**
  - Inserts content after an element's actual content.
  - Example:
    ```css
    p::after {
      content: " [end]";
      font-weight: bold;
      color: green;
    }
    ```

- **First Letter Pseudo-Element**
  - Applies styles to the first letter of an element.
  - Example:
    ```css
    p::first-letter {
      font-size: 2em;
      color: blue;
    }
    ```

- **First Line Pseudo-Element**
  - Applies styles to the first line of an element.
  - Example:
    ```css
    p::first-line {
      text-transform: uppercase;
    }
    ```

### Combinators
- **Descendant Combinator (Space)**
  - Selects all elements that are descendants of a specified element.
  - Example:
    ```css
    div p {
      color: purple;
    }
    ```

- **Child Combinator (`>`)**
  - Selects all elements that are direct children of a specified element.
  - Example:
    ```css
    div > p {
      color: darkblue;
    }
    ```

- **Adjacent Sibling Combinator (`+`)**
  - Selects an element that is immediately preceded by a specified element.
  - Example:
    ```css
    h1 + p {
      margin-top: 0;
    }
    ```

- **General Sibling Combinator (`~`)**
  - Selects all elements that are siblings of a specified element.
  - Example:
    ```css
    h1 ~ p {
      color: brown;
    }
    ```

These examples cover various CSS selectors and how to use them effectively in your stylesheets.