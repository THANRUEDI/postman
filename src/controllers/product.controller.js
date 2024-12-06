<<<<<<< HEAD
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.get = async (req, res) => {
  const products = await prisma.product.findMany({
    include: {
        Category:true,
    },
  });
  res.json(products);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.json(product);
};

exports.create = async (req, res) => {
  const { category_id, name, price, description, unit_in_stock } = req.body;
  const product = await prisma.product.create({
    data: {
      category_id,
      name,
      price,
      description,
      unit_in_stock,
    },
  });
  res.json(product);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { category_id, name, price, description, unit_in_stock } = req.body;
  const product = await prisma.product.update({
    where: {
      id: parseInt(id),
    },
    data: {
      category_id,
      name,
      price,
      description,
      unit_in_stock,
    },
  });
  res.json(product);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.json(product);
};
=======
// functions ที่ทำงานตาม route
exports.get = (req,res)=>{
    res.send("Get products here");
}
exports.getById =(req, res)=>{
    res.send("Get products " + req.params.id);
}
exports.create = (req, res)=>{
    res.send("Create a product");
  }
>>>>>>> 836f30295fe975a581403a057ba0aa47e145755e
