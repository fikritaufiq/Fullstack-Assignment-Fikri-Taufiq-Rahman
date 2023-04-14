const { Product } = require("../models");

class Controller {
    static async allProducts(req, res, next) {
        try {
            const data = await Product.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            });

            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static async addNewProduct(req, res, next) {
        try {
            const { code, name, description, price, UOM } = req.body;
            const data = await Product.create({
                code,
                name,
                description,
                price,
                UOM,
                UserId: 1,
            });
            res.status(201).json({
                message: "Product has been added",
                data: data,
            });
        } catch (error) {
            next(error);
        }
    }

    static async updateProduct(req, res, next) {
        try {
            const { code, name, description, price, UOM } = req.body;
            const { id } = req.params;
            const newData = await Product.update(
                { code, name, description, price, UOM },
                {
                    where: { id },
                }
            );

            if (!newData) {
                throw {
                    name: "PRODUCT_NOT_FOUND",
                    message: "Product not found",
                };
            }

            res.status(200).json({ message: "Product has been updated" });
        } catch (error) {
            next(error);
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            const { id } = req.params;
            const data = await Product.destroy({
                where: { id },
            });
            
            if (!data) {
                throw {
                    name: "PRODUCT_NOT_FOUND",
                    message: "Product not found",
                };
            }

            res.status(200).json({ message: "Product has been deleted" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller;
