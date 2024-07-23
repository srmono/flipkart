Parent-to-child and child-to-parent communication in React using functional components.

### Parent to Child Communication

#### Explanation:
In functional components, the parent component passes props to the child component to communicate.

#### Example:

**Parent Component (ParentComponent.js):**
```jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [parentData, setParentData] = useState('Hello from Parent');

    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent data={parentData} />
        </div>
    );
}

export default ParentComponent;
```

**Child Component (ChildComponent.js):**
```jsx
import React from 'react';

const ChildComponent = ({ data }) => {
    return (
        <div>
            <h2>Child Component</h2>
            <p>{data}</p>
        </div>
    );
}

export default ChildComponent;
```

### Child to Parent Communication

#### Explanation:
The child component calls a callback function passed as a prop to communicate with the parent component.

#### Example:

**Parent Component (ParentComponent.js):**
```jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [childData, setChildData] = useState('');

    const handleChildData = (data) => {
        setChildData(data);
    }

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Data from Child: {childData}</p>
            <ChildComponent sendDataToParent={handleChildData} />
        </div>
    );
}

export default ParentComponent;
```

**Child Component (ChildComponent.js):**
```jsx
import React from 'react';

const ChildComponent = ({ sendDataToParent }) => {
    const childData = 'Hello from Child';

    const sendData = () => {
        sendDataToParent(childData);
    }

    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={sendData}>Send Data to Parent</button>
        </div>
    );
}

export default ChildComponent;
```

### Two-way Communication

#### Explanation:
Combining both methods, you can achieve two-way communication between parent and child components.

#### Example:

**Parent Component (ParentComponent.js):**
```jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [parentData, setParentData] = useState('Hello from Parent');
    const [childData, setChildData] = useState('');

    const handleChildData = (data) => {
        setChildData(data);
    }

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Data from Child: {childData}</p>
            <ChildComponent data={parentData} sendDataToParent={handleChildData} />
        </div>
    );
}

export default ParentComponent;
```

**Child Component (ChildComponent.js):**
```jsx
import React from 'react';

const ChildComponent = ({ data, sendDataToParent }) => {
    const childData = 'Hello from Child';

    const sendData = () => {
        sendDataToParent(childData);
    }

    return (
        <div>
            <h2>Child Component</h2>
            <p>{data}</p>
            <button onClick={sendData}>Send Data to Parent</button>
        </div>
    );
}

export default ChildComponent;
```

These examples illustrate how to handle parent-to-child and child-to-parent communication using functional components in React. By using props and callback functions, you can manage data flow effectively between components.