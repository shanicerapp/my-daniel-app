interface UserFilterProps {
  userSearchTerm: string;
  onUserSearchChange: (value: string) => void;
}
// the UserFilter function takes in an object called props, and its structure should match the UserFilterProps interface just defined
export default function UserFilter(props: UserFilterProps) {
  return (
    <div>
      <label htmlFor="user-search">Filter Users:</label>
      <input
        type="text"
        value={props.userSearchTerm}
        onChange={(e) => props.onUserSearchChange(e.target.value)}
        className="border ml-1 p-1 rounded"
        placeholder="Search by user name"
      ></input>
    </div>
  );
}
