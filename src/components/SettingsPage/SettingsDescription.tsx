export const SettingsDescription = () => {
  return (
    <div className="sm:col-span-6">
      <label htmlFor="description" className="block text-sm font-medium leading-6 text-slate-900">
        Description
      </label>
      <div className="mt-2">
        <textarea
          id="description"
          name="description"
          rows={4}
          className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
          defaultValue={''}
        />
      </div>
    </div>
  );
};
