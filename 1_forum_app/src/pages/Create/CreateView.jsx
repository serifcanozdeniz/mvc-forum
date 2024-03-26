const CreateView = ({ handleSubmit }) => {
  return (
    <div className="h-[90vh] grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 w-3/4 max-w-[700px]  bg-gray-700 p-10 md:p-20 rounded-lg"
      >
        <h1 className="text-center text-xl text-yellow-500">
          Yeni Gönderi Oluştur
        </h1>

        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium">Kullanıcı Adı</label>
          <input
            name="user"
            type="text"
            required
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium">Başlık</label>
          <input
            name="title"
            type="text"
            required
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium">Konu</label>
          <textarea
            name="text"
            type="text"
            required
            className="max-h[300px] min-[150px] bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full"
          />
        </div>
        <button
          className="bg-yellow-500 p-2 rounded-lg transition hover:bg-yellow-600"
          type="submit"
        >
          Oluştur
        </button>
      </form>
    </div>
  );
};

export default CreateView;
