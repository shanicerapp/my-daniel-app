// onSearchChange must be a function that takes a string and returns void (nothing)

interface ProductFilterProps {
  productSearchTerm: string;
  onProductSearchChange: (value: string) => void;
}
// the ProductFilter function takes in an object called props, and its structure should match the ProductFilterProps interface just defined
export default function ProductFilter(props: ProductFilterProps) {
  return (
    <div>
      <label htmlFor="product-search">Filter products:</label>
      <input
        type="text"
        value={props.productSearchTerm}
        onChange={(e) => props.onProductSearchChange(e.target.value)}
        className="border ml-1 p-1 rounded"
        placeholder="Search by product name"
      ></input>
    </div>
  );
}
