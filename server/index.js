const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 4002;

const products = {
  author: {
    name: 'Mariana',
    lastname: 'Bálsamo'
  },
  categories: ['uno', 'dos', 'tres'],
  items: []
};

let item = {};

app.get('/search/:query', (req, res) => {
  const searchProduct = req.params.query;

  request(
    `https://api.mercadolibre.com/sites/MLA/search?q=${searchProduct}`,
    (err, response, body) => {
      if (!err) {
        const result = JSON.parse(body);

        products.items = [];

        for (let i = 0; i <= 3; i++) {
          item = {
            id: result.results[i].id,
            title: result.results[i].title,
            price: {
              currency: result.results[i].currency_id,
              amount: result.results[i].price,
              decimals: 'Number'
            },
            picture: result.results[i].thumbnail,
            condition: result.results[i].condition,
            free_shipping: result.results[i].shipping.free_shipping,
            address: {
              state_name: result.results[i].address.state_name
            }
          };
          products.items.push(item);
        }

        res.json(products);
      }
    }
  );
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});
