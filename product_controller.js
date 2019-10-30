module.exports = {
    //create_products
    create(req, res) {
        const db = req.app.get('db')
        const { name, desc, price, image } = req.body
        db.create_products({
            name: name,
            description: desc,
            price: price,
            image_url: image
        })
            .then(result => {
                res.status(200).send(result)
            })
            .catch(err => {
                res.status(500).send('something went wrong')
            })
    },
    //read_product
    getOne(req, res) {
        const db = req.app.get('db')
        db.read_product(req.params.product_id)
            .then(result => {
                res.status(200).send(result)
            })
            .catch(err => {
                res.status(500).send('something went wrong')
            })
    },
    //read_productS
    getAll(req, res) {
        const db = req.app.get('db')
        db.read_products()
            .then(result => {
                res.status(200).send(result)
            }).catch(err => {
                res.status(500).send('something went wrong')
            })
    },
    //update_product
    update(req, res) {
        const db = req.app.get('db')
        db.update_product([req.body.desc, req.params.product_id])
            .then(result => {
                res.status(200).send(result)
            })
            .catch(err => {
                res.status(500).send('something went wrong')
            })
    },
    //delete_product
    delete(req, res) {
        const db = req.app.get('db')
        db.delete_product(req.params.product_id)
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            res.status(500).send('something went wrong')
        })
    }
}