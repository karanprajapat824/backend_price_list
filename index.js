import Fastify from 'fastify';
import { Sequelize, DataTypes } from 'sequelize';
import cors from '@fastify/cors';
import dotenv from 'dotenv';



dotenv.config();

const app = Fastify({ logger: true });

await app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});



const Term = sequelize.define('term', {
  language: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

const Product = sequelize.define('product', {
  artical_no : DataTypes.STRING,
  in_price : DataTypes.FLOAT,
  price : DataTypes.FLOAT,
  unit : DataTypes.STRING,
  in_stock : DataTypes.INTEGER,
  description : DataTypes.STRING,
  product_service : DataTypes.STRING
});


app.get('/terms/:lang', async (req, reply) => {
  try {
    const term = await Term.findOne({ where: { language: req.params.lang } });
    if (term) reply.send(term);
    else reply.status(404).send({ error: 'Term not found' });
  } catch (err) {
    reply.status(500).send({ error: 'Server error' });
  }
});

app.get('/products', async (req,res) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (err) {
    res.status(500).send({ error: 'Server error' });
  }
});

app.put('/products/:id', async (req, res) => {
  try {
    const [updated] = await Product.update(req.body,{ where: { id: req.params.id } });
    if (updated) res.send({ success: true });
    else reply.status(404).send({ error: 'Product not found' });
  } catch (err) {
    res.status(500).send({ error: 'Server error' });
  }
});

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('DB connected');
    await app.listen({ port: 5000, host: '0.0.0.0' });
    console.log('Server running on port 5000');
  } catch (err) {
    console.error('Failed to start:', err);
    process.exit(1);
  }
};

start();
