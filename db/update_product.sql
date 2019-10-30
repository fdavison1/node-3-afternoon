UPDATE product
SET description = $1
WHERE product_id = $2;

SELECT * FROM product
ORDER BY product_id;