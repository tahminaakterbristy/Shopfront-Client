const handleAddToCart = async (product) => {
    const cartItem = {
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        userEmail: user.email 
    };

    const res = await fetch('https://shopfront-server.vercel.app/carts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartItem)
    });

    const data = await res.json();
    if (data.insertedId) {
        alert("✅ Product added to cart!");
    }
};
