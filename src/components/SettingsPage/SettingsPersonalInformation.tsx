import { Input } from '@/components/Inputs/Input';

export const SettingsPersonalInformation = () => {
  return (
    <div className="grid grid-cols-1 gap-y-6 pt-8 sm:grid-cols-6 sm:gap-x-6">
      <div className="sm:col-span-6">
        <h2 className="text-xl font-medium text-slate-900">Контактні дані</h2>
      </div>

      <Input
        wrapperClassName="sm:col-span-3"
        name="email"
        label="Електронна пошта"
        type="email"
        autoComplete="email"
      />

      <Input
        wrapperClassName="sm:col-span-3"
        name="phone"
        label="Номер телефону"
        type="text"
        autoComplete="phone"
      />
    </div>
  );
};
