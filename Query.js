// 1. Create a cllection

db.createCollection("products");

//2. Removes a collection from the database.

db.products.drop();

//3. Inserts a single document into a collection.

db.products.insertOne({
  productName: "Refrigerator",
  price: 35000,
  brand: "Walton",
});

//4. Delete/remove a single document from the collection.

db.products.deleteOne({ brand: "Walton" });
