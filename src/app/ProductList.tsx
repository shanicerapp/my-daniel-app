export type Product = {
  id: number;
  name: string;
  price: number;
};
interface ProductListProps {
  products: Product[];
}
export default function ProductList(props: ProductListProps) {
  return (
    <div>
      <ol>
        {props.products.map((product) => (
          <li key={product.id}>
            {product.name} {product.price.toFixed(2)}
          </li>
        ))}
      </ol>
    </div>
  );
}
