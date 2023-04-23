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
                {label} <!--acess value from property label-->
            </label>
            <input placeholder={placeholder}/> <!--acess value from property placeholder-->
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
## __#3 Interacting with User__
## __#4 Assembling the teams__
## __#5 Bug hunting__



