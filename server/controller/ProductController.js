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

    // find (get one)  
    find: async function (req, res, next) {
        try {
            const id = req.params.id;
            const product = await Product.find({ id: id });
            res.status(200).json(product);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }
    },

    // get all  
    getAll: async function (req, res, next) {
        try {
            const findAll = await Product.find();
            res.status(200).json(findAll);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }
    },

    // update
    update: async function (req, res, next) {
        try {
            const id = req.params.id;
            const productData = req.body;

            const updatedProduct = await Product.findOneAndUpdate({ id: id }, productData, { new: true }); // updated product return true 
            if (!updatedProduct) {
                return res.status(404).json({ error: 'not found' });
            }
            res.status(200).json(updatedProduct);

        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }
    },

    // delete
    delete: async function (req, res, next) {
        try {
            const id = req.params.id;
            const result = await Product.deleteOne({ id: id });

            if (result.deletedCount == 0) {
                return res.status(404).json({ error: 'not found' });
            }
            res.status(200).json({ message: 'deleted success' });

        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({ error: "Something went wrong" });
        }
    }
}

module.exports = productController;