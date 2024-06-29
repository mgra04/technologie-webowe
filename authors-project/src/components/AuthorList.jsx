import { useRef } from 'react';

export const AuthorList = ({
  authors = [],
  onDelete,
  onEdit,
  showInputs,
  onEditSubmit,
}) => {
  const nameRef = useRef(null);
  const surnameRef = useRef(null);

  const handleSaveClick = (event, authorId) => {
    event.preventDefault();
    onEditSubmit({
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      id: authorId,
    });
  };

  return (
    <div className="overflow-auto rounded-lg shadow-lg shadow-slate-200 max-w-5xl">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-bold tracking-wide text-left text-gray-800">
              Name
            </th>
            <th className="p-3 text-sm font-bold tracking-wide text-left text-gray-800">
              Surame
            </th>
            <th className="p-3 text-sm font-bold tracking-wide text-left text-gray-800">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author => (
            <tr className="bg-white" key={author.id}>
              <td className="p-3 text-sm text-gray-700 border-b border-gray-200">
                {showInputs?.id === author.id ? (
                  <input
                    defaultValue={author.name}
                    name="name"
                    ref={nameRef}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                ) : (
                  author.name
                )}
              </td>
              <td className="p-3 text-sm text-gray-700 border-b border-gray-200">
                {showInputs?.id === author.id ? (
                  <input
                    defaultValue={author.surname}
                    name="surname"
                    ref={surnameRef}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                ) : (
                  author.surname
                )}
              </td>
              <td className="p-3 text-sm border-b border-gray-200">
                <div className="flex gap-2">
                  {showInputs?.id === author.id ? (
                    <>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 border-2 border-green-400/50 rounded-md shadow"
                        onClick={event => handleSaveClick(event, author.id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 border-2 border-red-400/50 rounded-md shadow"
                        onClick={() => onEdit(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 border-2 border-orange-400/50 rounded-md shadow"
                        onClick={() => onEdit(author)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 border-2 border-red-400/50 rounded-md shadow"
                        onClick={() => onDelete(author.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
