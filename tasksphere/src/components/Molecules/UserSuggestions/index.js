import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Atoms from '../../Atoms';

function UserSuggestions({ onAdd }) {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSuggestions = async () => {
        setLoading(true);
        try {
            const res = await axios.get('https://randomuser.me/api/?results=5');
            const users = res.data.results.map(user => ({
                id: user.login.uuid,
                name: `${user.name.first} ${user.name.last}`,
                email: user.email,
                picture: user.picture.thumbnail
            }));
            setSuggestions(users);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSuggestions();
    }, []);

    return (
        <Atoms.Box className="p-4 border rounded">
            <h3 className="font-bold mb-2">Sugestões de colaboradores</h3>
            {loading ?< Atoms.SkeletonLoader /> : (
                <ul style={{ decoration: 'none', padding: '0', listStyleType: 'none' }}>
                    {suggestions.map(user => (
                        <Atoms.Box style={{ marginBottom: '10px', width: '100%' }} key={user.id}>
                            <Atoms.Flex style={{ justifyContent: 'space-between', alignItems: 'center', }}>
                                <Atoms.Box >
                                    <img style={{ borderRadius: '20px' }} src={user.picture} alt={user.name} className="rounded-full w-8 h-8" />
                                    <span>{user.name}</span>
                                </Atoms.Box>
                                <Atoms.Box style={{ width: '60px', height: '40px', overflow: 'hidden' }}>
                                    <Atoms.Button onClick={() => onAdd(user)} aria-label="Adicionar colaborador">Adicionar</Atoms.Button>
                                </Atoms.Box>
                            </Atoms.Flex>

                        </Atoms.Box>

                    ))}
                </ul>
            )
            }
            <Atoms.Button onClick={fetchSuggestions} className="mt-4" aria-label="Buscar por mais colaboradores">Buscar Novos</Atoms.Button>
        </Atoms.Box>
    );
}

export default UserSuggestions;