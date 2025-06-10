import Link from 'next/link';

export default function ProductCard ({ product})
{
    return (
        <Link href={`/products/${product.id}`}>
            <div>
                <img src={product.thumbnail} alt={product.tittle}></img>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
            </div>
        </Link>
    );
}