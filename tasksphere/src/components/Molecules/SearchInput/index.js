import * as Atoms from '../../Atoms';
function SearchInput({ search, setSearch }) {
  return (
    <Atoms.Box>
      <label>Pesquisar por nome: </label>
      <Atoms.Input 
        type="text" 
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Digite o nome da tarefa"
      />
    </Atoms.Box>
  );
}

export default SearchInput;
