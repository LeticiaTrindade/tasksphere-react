function FilterSelect({ filter, setFilter }) {
  return (
    <div>
      <label>Filtrar por: </label>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="">Todas</option>
        <option value="todo">A Fazer</option>
        <option value="in_progress">Em Progresso</option>
        <option value="done">Concluída</option>
      </select>
    </div>
  );
}

export default FilterSelect;