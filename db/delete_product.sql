DELETE FROM product
WHERE product_id = 2
RETURNING *;