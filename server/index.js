const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 4002;

let item = {};

app.get('/search/:query', (req, res) => {
  const searchProduct = req.params.query;

  const products = {
    author: {
      name: 'Mariana',
      lastname: 'Bálsamo'
    },
    items: []
  };

  request(
    `https://api.mercadolibre.com/sites/MLA/search?q=${searchProduct}`,
    (err, response, body) => {
      if (!err) {
        const result = JSON.parse(body);

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
            },
            category_id: result.results[i].category_id
          };
          products.items.push(item);
        }

        res.json(products);
      }
      if (err) {
        console.log(err);
        res.status(400).send(err);
        return;
      }
    }
  );
});

app.get('/categories/:query', (req, res) => {
  const searchCategory = req.params.query;

  const categories = [];

  request(
    `https://api.mercadolibre.com/categories/${searchCategory}`,
    (err, response, body) => {
      if (!err) {
        const result = JSON.parse(body);

        result.path_from_root.map(element => categories.push(element));
        res.json(categories);
      }

      if (err) {
        console.log(err);
        res.status(400).send(err);
        return;
      }
    }
  );
});

app.get('/items/:query', (req, res) => {
  const itemId = req.params.query;

  const item = {
    author: {
      name: 'Mariana',
      lastname: 'Bálsamo'
    },
    item: {}
  };

  request(
    `https://api.mercadolibre.com/items/${itemId}`,
    (err, response, body) => {
      if (!err) {
        const result = JSON.parse(body);

        item.id = result.id;
        item.title = result.title;
        item.price = {
          currency: result.currency_id,
          amount: result.price
        };

        item.category_id = result.category_id;
        item.picture = result.pictures[0];
        item.condition = result.condition;
        item.sold_quantity = result.sold_quantity;
        item.sold_currency_id = result.currency_id;

        request(
          `https://api.mercadolibre.com/items/${itemId}/description`,
          (err, response, body) => {
            if (!err) {
              const result = JSON.parse(body);

              item.description = result.plain_text;

              res.json(item);
            }

            if (err) {
              console.log(err);
              res.status(400).send(err);
              return;
            }
          }
        );
      }

      if (err) {
        console.log(err);
        res.status(400).send(err);
        return;
      }
    }
  );
});

app.get('/items/:query/description', (req, res) => {
  const itemId = req.params.query;

  request(
    `https://api.mercadolibre.com/items/${itemId}/description`,
    (err, response, body) => {
      if (!err) {
        const result = JSON.parse(body);
        res.json(result);
      }

      if (err) {
        console.log(err);
        res.status(400).send(err);
        return;
      }
    }
  );
});
app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});
