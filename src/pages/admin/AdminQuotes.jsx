import React, { useState, useEffect } from 'react';

const AdminQuotes = ({ token }) => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch('http://localhost:5000/api/quotes', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (response.ok) {
          const data = await response.json();
          setQuotes(data);
        } else {
          setError('Unauthorized or server error');
        }
      } catch (err) {
        setError('Server error');
      } finally {
        setLoading(false);
      }
    };
    if (token) fetchQuotes();
  }, [token]);

  if (!token) return <div className="text-center mt-24">Please login as admin.</div>;
  if (loading) return <div className="text-center mt-24">Loading quotes...</div>;
  if (error) return <div className="text-center mt-24 text-destructive">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-card rounded-lg shadow-lg">
      <h2 className="text-2xl font-heading font-bold mb-6 text-center">Submitted Quotes</h2>
      {quotes.length === 0 ? (
        <div className="text-center text-muted-foreground">No quotes found.</div>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">Service</th>
              <th className="p-2 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map(q => (
              <tr key={q.id} className="border-b">
                <td className="p-2">{q.name}</td>
                <td className="p-2">{q.email}</td>
                <td className="p-2">{q.phone}</td>
                <td className="p-2">{q.service}</td>
                <td className="p-2">{q.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminQuotes;
