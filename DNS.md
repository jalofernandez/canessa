# Corrección de www en Squarespace

Comprobación: 19/11/2026. Google Domains se trasladó a Squarespace. El dominio
puede seguir registrado allí y la web seguir alojada en Firebase.

## Estado encontrado

- `peluqueriacanessa.com`: A a `199.36.158.100`; HTTPS correcto.
- `www`: CNAME a `ext-sq.squarespace.com`; el certificado no corresponde a www.
- Los nameservers conservan nombres `ns-cloud-e*.googledomains.com`.
- El correo tiene MX de Mailgun (`mxa.mailgun.org` y `mxb.mailgun.org`).
- Firebase solo tiene dado de alta el dominio principal.

## Cambio preparado, todavía sin aplicar

1. Entrar en el [panel de dominios de Squarespace](https://account.squarespace.com/)
   con la cuenta que gestionaba Google Domains. Seleccionar peluqueriacanessa.com
   y abrir la configuración DNS. Conservar una copia de los registros actuales.
2. En [Firebase Hosting](https://console.firebase.google.com/project/canessa-722eb/hosting),
   añadir `www.peluqueriacanessa.com` como dominio que redirige al principal.
   Anotar los registros exactos y cualquier verificación que solicite el asistente.
3. Sustituir únicamente el CNAME de `www` hacia Squarespace por el registro que
   indique Firebase. La documentación actual muestra **A · www · 199.36.158.100**
   para Squarespace. No mantener simultáneamente un CNAME y un A para www.
4. Conservar el A del dominio principal, los nameservers y los registros de correo
   y verificación. No copiar registros TXT de ejemplo: usar los valores de la consola.
5. Esperar propagación y emisión de certificado. El CNAME actual tiene TTL de
   cuatro horas; Firebase indica que el aprovisionamiento puede tardar hasta
   24 horas tras apuntar el DNS. Comprobar luego HTTPS y redirect desde www.

No se ha cambiado ningún registro, dominio ni certificado durante la migración.

Fuentes: [migración Google Domains](https://support.squarespace.com/hc/en-us/articles/17131164996365-About-the-Google-Domains-migration-to-Squarespace),
[gestión DNS de Squarespace](https://support.squarespace.com/hc/en-us/articles/360002101888-Edit-your-domain-s-DNS-records),
[conectar dominios a Firebase](https://firebase.google.com/docs/hosting/custom-domain?hl=es).
