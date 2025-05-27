function SearchInput({ search, setSearch }) {
  return (
    <div>
      <label>Pesquisar por nome: </label>
      <input 
        type="text" 
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Digite o nome da tarefa"
      />
    </div>
  );
}

export default SearchInput;
