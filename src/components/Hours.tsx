import { business } from '@/data/business';
export function Hours() {
  return (
    <dl className="hours">
      {business.hours.map((row) => (
        <div key={row.label}>
          <dt>{row.label}</dt>
          <dd>
            {row.morning}
            <br />
            16:30–20:00
          </dd>
        </div>
      ))}
      <div>
        <dt>Sábado y domingo</dt>
        <dd>Cerrado</dd>
      </div>
    </dl>
  );
}
