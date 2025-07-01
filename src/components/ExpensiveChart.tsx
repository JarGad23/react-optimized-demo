export const ExpensiveChart = () => {
  const start = performance.now();
  while (performance.now() - start < 300) {
    // Symulacja ciężkiego komponentu
  }

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h3 className="font-bold">Wykres (ciężki komponent)</h3>
      <p>Dane załadowane</p>
    </div>
  );
};
