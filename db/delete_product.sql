DELETE FROM product
-- WHERE product_id = $1;
RETURNING *;

-- SELECT * FROM product;