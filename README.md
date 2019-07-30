### Ecomerce App: Chez Hisham.
```
By Hicham Boualam, github userName: hishamovski
This is the front end of the ecormmerce application . It's designed to let users create products for sale. Users can see all products for sale and purchase any product.
```

### ERD and User Stories:

```
https://www.noelshack.com/2019-30-5-1564147923-67152310-2240607816249976-4109940465665572864-n.jpg
```

### Technologies Used:
```
    React
    JavaScript
    HTML/CSS
    Bootstrap
    MongoDB & Mongoose
    Node.js
    Express.js
    AWS/S3
    JSX
```

### The Process:

```
  The planning process involved wire framing for the front-end and drawing an ER Diagram on the back-end. The back end (Express.js) was set up and tested by curl scripts first. Then work began on the front-end: carving out React components and user flows.

  The development process start by developping the backEnd by creating product, cart, upload documents and updating user document. Then, I jumped to the front end and start by making the crud methods for products and cart components. The last day of the project I focused on styling using CSS and React Bootstrap.
```

### API Paths & Methods

###### Authentication:

| Method        | URL              |
| ------------- |:----------------:|
| POST          | `/sign-up`       |
| POST          | `/sign-in`       |
| PATCH         | `change-password`|
| DELETE	      | `sign-out`       |

###### Product:

| Method        | URL              |
| ------------- |:----------------:|
| POST          | `/products`      |
| Get           | `/products`      |
| PATCH         | `/products/:id`  |
| DELETE	      | `/products/:id`  |

###### Cart:

| Method        | URL              |
| ------------- |:----------------:|
| POST          | `/carts`         |
| Get           | `/carts`         |
| Get           | `/carts/:id`     |
| Delete        | `/carts/:id`     |
| DELETE	      | `/cart`          |

###### Upload:

| Method        | URL              |
| ------------- |:----------------:|
| POST          | `/uploads`       |

### Front and Back End deployed sites

###### Back end:
`https://quiet-brook-56568.herokuapp.com/`

###### Front end:
`https://hishamovski.github.io/ecommerce-project-client/`

###### Front End Repository:
 `https://github.com/hishamovski/ecommerce-project-client`

###### Back End Repository:
 `https://hishamovski.github.io/ecommerce-project-client/`

### Wireframe:

```
https://www.noelshack.com/2019-30-5-1564147930-67760609-751471961953782-3053221469665361920-n.jpg
```

### Set Up and Installation
```
npm install

```
### Screenshot of Application:

```
https://www.noelshack.com/2019-31-2-1564510343-screenshot-from-2019-07-30-13-57-43.png
```

### Unresolved Issues:

```
Because I had only four days making ecommerce project. the future iteration that I can add is: orders overview for the purchaser and sales overview for the seller. User can check a summary of all prodcuts purchase, Also the seller can check a summary of all sales he made and displaying a chart that represents total income each weeek.

```
