import * as Atoms from '../../Atoms';

function Pagination({ currentPage, totalPages, setCurrentPage }) {
    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };


    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Atoms.Button  onClick={handlePrevious} disabled={currentPage === 1}>
                Anterior
            </Atoms.Button >
            {[...Array(totalPages)].map((_, index) => (
                <Atoms.Button 
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    style={{
                        fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
                    }}
                >
                    {index + 1}
                </Atoms.Button >
            ))}
            <Atoms.Button onClick={handleNext} disabled={currentPage === totalPages}>
                Próximo
            </Atoms.Button>
        </div>
    );
}

export default Pagination;