export const SettingsDescription = () => {
  return (
    <div className="sm:col-span-6">
      <label htmlFor="description" className="block text-sm font-medium leading-6 text-slate-900">
        Опис
      </label>
      <div className="mt-2">
        <textarea
          id="description"
          name="description"
          rows={4}
          className="block resize-none w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 !outline-none sm:text-sm sm:leading-6 pl-3"
          defaultValue={''}
        />
      </div>
    </div>
  );
};
