import { useRef } from 'react';

export const AddAuthor = ({ onAdd }) => {
  const nameRef = useRef(null);
  const surnameRef = useRef(null);

  const handleSubmit = event => {
    onAdd(event);
    nameRef.current.value = '';
    surnameRef.current.value = '';
  };

  return (
    <div className="mb-8">
      <fieldset>
        <form
          className="flex flex-col gap-4 justify-start"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap">
            <label
              className="block mb-1 text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              ref={nameRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col gap">
            <label
              className="block mb-1 text-sm font-medium text-gray-700"
              htmlFor="surname"
            >
              Surname
            </label>
            <input
              ref={surnameRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              id="surname"
              name="surname"
              placeholder="Surname"
            />
          </div>

          <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 border-2 border-sky-400/50 hover:border-sky-500/50 rounded-md shadow">
            Add
          </button>
        </form>
      </fieldset>
    </div>
  );
};
