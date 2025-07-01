export function UserForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Dane zapisane!");
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
      <h3 className="font-bold mb-2">Nowy użytkownik</h3>
      <input className="block border p-2 w-full mb-2" placeholder="Imię" />
      <input className="block border p-2 w-full mb-2" placeholder="Email" />
      <input
        className="block border p-2 w-full mb-2"
        placeholder="Wiek"
        type="number"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Zapisz
      </button>
    </form>
  );
}
