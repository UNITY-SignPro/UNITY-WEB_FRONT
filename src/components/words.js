import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function Words(string) {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            setError(null);
            setUsers(null);
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
    
      useEffect(() => {
        fetchUsers();
      }, []);
    
      if (loading) return null; 
      if (error) return null;
      if (!users) return null;
      return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                    {user.username} ({user.name})
                    </li>
                ))}
            </ul>
        </>
    );

}
