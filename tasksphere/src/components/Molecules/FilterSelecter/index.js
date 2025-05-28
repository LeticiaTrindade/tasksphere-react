import * as Atoms from '../../Atoms';
function FilterSelect({ filter, setFilter }) {
  return (
    <Atoms.Box>
      <label>Filtrar por: </label>
      <Atoms.Select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="">Todas</option>
        <option value="todo">A Fazer</option>
        <option value="in_progress">Em Progresso</option>
        <option value="done">Concluída</option>
      </Atoms.Select>
    </Atoms.Box>
  );
}

export default FilterSelect;