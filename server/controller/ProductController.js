const Product = require('../model/Product');

const productController = {
    // add 
    add: async function (req, res, next) {
        try {
            const productData = req.body;
            const product = await Product.create(productData);
            res.status(200).json(product);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }
    },
}

module.exports = productController;