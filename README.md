# Organo 

To run:

`$ npm run start`

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```


__npm__ (short for Node Package Manager) is a package manager for Node.js packages. It is used to install, manage, and share packages, as well as manage project dependencies. With npm, you can download and install packages globally or locally, update packages, and uninstall packages.

On the other hand, __npx__ is a tool that comes with npm and was introduced in npm version 5.2.0. npx is used to execute packages without installing them globally. It allows you to run a command-line tool that is not installed on your machine, without having to install it first. When you run a command with npx, it checks if the package is installed, and if it isn't, it downloads the package, runs the command, and then deletes the package.

In summary, npm is used to install and manage packages, while npx is used to execute packages without installing them globally.

## __#1 A declarative library__

Create project:

`$ npx create-react-app project_name`


### JSX

JSX (JavaScript XML) is a syntax extension of JavaScript that allows you to write HTML-like code in your JavaScript files. It was introduced by Facebook and is commonly used in React, a popular JavaScript library for building user interfaces.

With JSX, you can write HTML-like code in your JavaScript files, which makes it easier to create and manipulate the UI elements of your application. For example, instead of creating elements using the createElement method, you can write JSX code like this:

`const element = <h1>Hello, world!</h1>;`

Overall, JSX is a powerful tool that allows you to write HTML-like code in your JavaScript files, which makes it easier to create and manipulate the UI elements of your application.


__Banner Component__

Create a folder in ./src called 'components'. In this folder, can be used to create
the components e edit itself;


```jsx
// ./src/components/Banner.js
import './Banner.css';

function Banner() {
  return (
    <header className>
      <img src="/images/Banner.png" alt="Page Banner" /> 
      <!-- Image available in ./public/images-->
    </header>
  )
}
```
To use the component in ./src/App.js

```jsx
// ./src/App.js
import './App.css';
import Banner from './components/Banner/Banner'

function App() {
  return (
    <div className="App">
      <Banner /> <!-- Banner component -->
    </div>
  );
}

export default App;

```

### Import with index.js in component 

![import-index-component](./readme-images/component-index.png)

![import-index-component](./readme-images/import-index.png)

This way, you need just to import the component folder, and not the file name


## Componet parameters (props)

> " destructuring assignment "

In JavaScript, const { label, placeholder } = props is a destructuring assignment that allows you to extract specific properties from an object and assign them to variables with the same name. This can be useful when you have an object with many properties, but you only need a few of them.

For example, if you have an object called props with the properties label, placeholder, and value, you can use destructuring assignment to extract only the label and placeholder properties like this:

`const { label, placeholder } = props;`

After this assignment, you can use the variables label and placeholder directly in your code, without having to use the props.label or props.placeholder syntax.

On the other hand, using props.label or props.placeholder directly accesses the properties of the props object without extracting them into separate variables. This is useful when you need to access many properties of an object, or when you want to pass the entire object to another function.

In summary, destructuring assignment with `const { label, placeholder } = props` allows you to extract specific properties from an object and assign them to variables with the same name, while using `props.label` or props.placeholder directly accesses the properties of the props object without extracting them.


### __Using props__

```jsx
// ./src/App.js
import Banner from './components/Banner/'
import Input from './components/Input/'

function App() {
  return (
    <div className="App">
      <Banner />
      <Input label="Nome" placeholder="Digite seu nome" /> 
      <Input label="Cargo" placeholder="Digite seu cargo" />
      <Input label="Image" placeholder="Informe o endereço da imagem" />
    </div>
  );
}

export default App;

```

```jsx
// ./src/components/Input/index.js
import './Input.css';

const Input = (props) => {
    const { label, placeholder } = props; //destructuring assignment
    return (
        <div className="input-field">
            <label>
                {label} <!--access value from property label-->
            </label>
            <input placeholder={placeholder}/> <!--access value from property placeholder-->
        </div>
    )

}

export default Input;

```

We can also use components inside another component, like this:

![components-form](./readme-images/componets.png)


#Summary:
- We created a new React project;
- We created functional components;
- We styled components with CSS;
- We analyzed the project dependencies;
- We analyzed the available commands in the package.json file.

## __#2 Working with props__



Problema que o react resolver

Criado pelo facebook
Reendirização e comunicação de components
No começo os componentes eram baseados em classe
Ele reage ao estados dos componentes do componentes, envolvendo o DOM 
Não se reendiraza a cada interação do usuário
Cada perdaço da página pode ir se alterando, separadamente 



## Teams List

The componente select must be contain a list of teams

### `map`

> Map always scrolls through the list e return and tranform in a diferente list

```tsx
// ./src/components/Select/index.js
import './Select.css';

const Select = (props) => {
    const { label } = props;
    return (
        <div>
            <label> 
                {label}
            </label>
            <select>
                {
                    props.item.map(item => {
                        return <option key={item}>{item}</option>
                    })
                    // props.item.map(item => <option>{item}</option>) short version
                }
            </select>
        </div>
    )
}

export default Select;
```

More about map: [forEach ou Map](https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map)

### __About key__

> "Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:"

```tsx
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

### __Data bind__

Events:

When a button, inside a form, is clicked,  its default event is submitted the form to page url. To preven the default event, we need to use `preventDefault()` method;

```jsx

// ...
const onSave = (event) => {
  event.preventDefault();
  console.log("Form submission");
}

return (
  <section className="form-section">
    <form onSubmit={onSave}>
      {/* ... */}
    </section>
)

```

> `event`: "The simplest way to create an event is to click somewhere on the page. When you click, a click event is triggered. This event is actually an object containing information about the action that just happened."

> `event.prveventDefaul()` The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
>
>For example, this can be useful when:
>- Clicking on a "Submit" button, prevent it from submitting a form
>- Clicking on a link, prevent the link from following the URL
>
>__Note__: Not all events are cancelable. Use the cancelable property to find out if an event is cancelable.
>
>__Note__: The preventDefault() method does not prevent further propagation of an event through the DOM. Use the stopPropagation() method to handle this.


#Summary:

1. How to pass props to a component;
2. How to render lists with `.map()`;
3. How to work with nested elements using the `children` prop;
4. How to listen for events triggered by the DOM, such as the `onSubmit` of our form.

The first thing we learned was how to pass props to a React component. Props are properties that we pass to a React component, allowing us to configure its behavior and content in a flexible way.

Next, we learned how to render lists with the `map()` method. `Map()` is a JavaScript array method that allows us to iterate over a list and generate a new array with the results of each iteration. With `map()`, we can dynamically render lists of elements based on data received via props or stored in the component's state.

Additionally, we learned how to work with nested elements using the `children` prop. The `children` prop is a special prop in React that allows us to pass nested JSX elements as props. This is especially useful when working with layout components and wanting to have the ability to add content inside them.

Finally, we learned how to listen for events triggered by the DOM, such as the `onSubmit` of our form. React allows us to add event listeners directly to our components, allowing us to have greater control over their behavior and interaction with the user.

## __#3 Interacting with User__

> If the component state changes, the component must bu rerender itself


### #__controlling states__


### useState()

> `useState` is a React Hook the allows us to add a state to a component. The state is a way to store data in a component and update it whenever necessary.



#Sumary

Yes, in the lesson you learned how to control inputs in a form using the `value` and `onChange` attributes, which allow you to control the input value and react to user changes, respectively.

You also learned how to manage the state of a component using the `useState` hook. `useState` allows you to create a state for your component and update it reactively, meaning that every time the state is updated, the component is re-rendered.

Additionally, you learned how to work with props that are functions, meaning props that pass functions as parameters to other components. This is useful when you need to pass a function from a parent component to a child component so that it can update the state of the parent component.


## __#4 Assembling the teams__
## __#5 Bug hunting__



