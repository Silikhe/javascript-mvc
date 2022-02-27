# Angular Application With MVC Archtecture

An Angularapplication that perform CRUD operations. It is built with the clean architecture principles in mind while following the MVC repository pattern and powered by Architecture Components.

## Table of Contents
- [Architecture](#architecture)
- [Libraries](#libraries)
- [Demo](#demo)


## Architecture
For better abstration, we split the application into three layers spread across two distinct modules. This ensures robustness and makes our app extensible. The two modules are:

- :Model
- :View
- :Controller


The :app modules contains the UI layer while the :core module contains the domain and the data layer. This three layered architecture is inspired by the [Clean Architecture design pattern](https://angular.io/)

### :app module
The app module holds the `framework` and the `presentation` packages. The `framework` package holds non-core-ui implementations while the `presentation` layer is dedicated to core UI implementations.
#### presentation
The presentation layer use `ViewModel` to manage application state and `data-binding` to hook ViewModels to reactive views.

### :core module
The core module holds the domain and data layers.
#### Domain Layer
The `domain layer` defines data classes that are used to bridge the data needs of the data and presentation layer. It also defines the `UseCases` that the presentation layer reuses for various accessibility and manipulation of the data.
#### Data Layer
The `data layer` holds the the data entity that implements our core business needs. It uses distinct `datasources` abstracted away by a repository to ensures a single channel for accessing and manipulation of the data. 

## Demo
[Link to Demo App](https://silikhe.github.io/mvc-application/)
## TODO
- Implement Login and Signup
- Remove all bugs
