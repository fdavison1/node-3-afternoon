module.exports = {
    //create_products
    create(req, res) {
        console.log(req.body)
        const db = req.app.get('db')
        const { name, description, price, image_url } = req.body
        db.create_product({
            name: name,
            description: description,
            price: price,
            image_url: image_url
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
        db.read_product(req.params.id)
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
        db.update_product([req.query.desc, req.params.id])
            .then(result => {
                res.status(200).send(result)
            })
            .catch(err => {
                res.status(500).send('something went wrong')
            })
    },
    //delete_product
    delete(req, res) {
        // console.log(req.params)
        const db = req.app.get('db')
        db.delete_product(+req.params.id)
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            res.status(500).send('something went wrong', err)
        })
    }
}