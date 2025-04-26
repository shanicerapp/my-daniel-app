export type Shoe = {
  id: number;
  name: string;
  price: number;
};

interface ShoeListProps {
  shoes: Shoe[];
}

export const initialShoes: Shoe[] = [
  { id: 1, name: "Adidas Samba", price: 120.49 },
  { id: 2, name: "Nike Air Force", price: 119.99 },
  { id: 3, name: "New Balance 550", price: 89.9999 },
  { id: 4, name: "PumaPalermo", price: 110 },
];

export default function ShoeList(props: ShoeListProps) {
  return (
    <div>
      <ol>
        {props.shoes.map((shoe) => (
          <li key={shoe.id}>
            {shoe.name} - {Math.trunc(shoe.price * 100) / 100}
            {"€"}
          </li>
        ))}
      </ol>
    </div>
  );
}
