# Setup file template to upload data to MongoDB Atlas
mongoimport --uri "mongodb+srv://shivamsingh:shivam123@qkart-node.wc9iqsd.mongodb.net/?retryWrites=true&w=majority" --drop --collection users --file data/export_qkart_users.json
mongoimport --uri "mongodb+srv://shivamsingh:shivam123@qkart-node.wc9iqsd.mongodb.net/?retryWrites=true&w=majority" --drop --collection products --file data/export_qkart_products.json



