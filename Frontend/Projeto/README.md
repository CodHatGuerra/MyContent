![Alt text](./assets/master/imgs/logo_inlive_150.png?raw=true "Title")
#   This application has a Inlive Consultoria Rights - 2023
## this is a basic project for Delivery Gateway.
***
## Technologys
- ## `HTML 5`
- ## `CSS 3`
- ## `Javascript`
- ## `jQuery`
- ## `Ajax`
## Lib's
### All libs is introducted via CDN
- ## [`Bootstrap`](https://getbootstrap.com/)
- ## [`FontAwesome`](https://fontawesome.com/v4/)
- ## [`sweetallert 2`](https://sweetalert2.github.io/)
- ## [`Datatables`](https://datatables.net/manual/)
- ## [`MomentJS`](https://momentjs.com/)
***
### Global CSS
#### on the folder `assets/master` <-- contains a master example of project, and the master CSS archive, and this archive controll the all pages Heades style, the project is fully Bootstrap Html based with; `Containers, Cols`

#### For Create a New HTML page, use the Archive /assets/master/index.html to guide a new page, this is a basic template for a construction of new pages.

### Global Ajax URL and Headers
#### On the directory `assets/commons/common.js` has a archive with contains the static *ApiKey - Value* and Ajax Static URL for the projet, which you can switch between the QA enviroment, and DEV writing once line only, on this `common.js`, Example Below.
```js
"use strict"    

$.ajaxSetup({
    headers: {'KeyApi' : 'FCABC9A2-7FDF-463A-99EB-118313CFE3A2'}
  });

const URL = 'https://inlivedesenvolvimento.ddns.net'
```