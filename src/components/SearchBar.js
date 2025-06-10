export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search products......"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className="w-full p-2 border rounded"
    />
  );
}
