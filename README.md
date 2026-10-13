# Lab 18 — Signal, Safety Number y WireGuard

Sesión 21.

## Título y objetivo

Explicar verificación de identidad, E2EE y un túnel IP entre peers autorizados, junto con sus límites de privacidad.

## Instrucciones

En este laboratorio trabajamos en Visual Studio Code para desarrollar un informe sobre verificación de identidad en Signal y transporte seguro entre dos dispositivos autorizados mediante WireGuard. Describimos la comparación del Safety Number por un canal confiable, explicando que su coincidencia autentica la relación de claves dentro de ese proceso y no demuestra por sí sola que un dispositivo esté libre de compromiso. Separamos el contenido protegido por cifrado de extremo a extremo de información observable por el servicio, la red y los endpoints, y construimos una tabla de metadatos con alcances explícitos. Analizamos la arquitectura del túnel, el intercambio de claves públicas, el handshake, el transporte UDP y la función de AllowedIPs en selección de rutas y validación de orígenes. Presentamos configuraciones y salidas ilustrativas de wg show y conectividad, sin incluir claves privadas, teléfonos reales ni credenciales. Implementamos una conversación educativa, un comparador de números ficticios y una visualización por etapas del handshake, diferenciando modelos locales de verificaciones externas. Elaboramos E2EE.md sobre forward secrecy, post-compromise security, recuperación tras compromiso y acceso excepcional, incluyendo la discusión Keys Under Doormats. Comparamos Signal, Tor y WireGuard por objetivos y actores, y entregamos HTML, CSS, JavaScript y README con resultados interpretados, límites operativos y conclusiones sobre identidad, contenido y metadatos.

## Descripción del trabajo

El comparador usa números ficticios y muestra cambios. La conversación distingue receptor y transporte. El handshake avanza por etapas educativas. E2EE.md analiza seguridad histórica, recuperación y acceso excepcional.

## Tecnologías

Signal, Safety Numbers, ratchets, WireGuard, Noise, UDP, AllowedIPs, wg show y comparación con Tor. HTML5, CSS3 y JavaScript sin cuentas ni credenciales.

## Resultados

La coincidencia y discrepancia son ejemplos, no verificaciones de Signal. wg show es salida ilustrativa; no se operó un túnel en este entorno. La tabla distingue contenido, metadatos y actores, y explica condiciones de recuperación.

## Aprendizaje

Aprendimos a distinguir identidad verificada, contenido cifrado y transporte seguro, y a interpretar metadatos desde posiciones concretas. Comprendimos que la evolución de claves tiene condiciones de seguridad y que recuperar un dispositivo comprometido requiere medidas operativas además de propiedades criptográficas.

## Visualización

Abrimos la carpeta WEB3-LABS en Visual Studio Code. Con la extensión Live Server instalada, hacemos clic derecho en este index.html y elegimos **Open with Live Server**. La navegación principal está en ../index.html. Usamos localhost para Web Crypto; no se necesitan cuentas ni credenciales. Los controles se operan con Tab, Enter y Espacio.

## Rúbrica original

- Safety Number verificado y documentado: 20%.
- Tabla de información que Signal puede observar y contenido que no puede leer: 20%.
- Túnel WireGuard operativo o bloqueo documentado: 25%.
- E2EE.md sobre forward secrecy, post-compromise security y acceso excepcional: 25%.
- Comentarios de aprendizaje: 10%.

Total: 100%. Los alcances y límites se describen en la tabla HTML; no se asignan calificaciones por ejecuciones no realizadas.

## Alcance académico

Las simulaciones se identifican en pantalla; no representan conexiones, publicaciones ni transacciones externas. No se proporcionaron penalizaciones adicionales y no se inventan deducciones. solo dispositivos autorizados, números ficticios, ausencia de claves privadas, teléfonos reales y credenciales.

## Fuentes primarias

- [Signal · Safety Numbers](https://support.signal.org/hc/en-us/articles/360007060632-What-is-a-safety-number)
- [Signal · Double Ratchet](https://signal.org/docs/specifications/doubleratchet/)
- [Signal · sealed sender](https://signal.org/blog/sealed-sender/)
- [WireGuard · configuración y verificación](https://www.wireguard.com/quickstart/)
- [WireGuard · protocolo](https://www.wireguard.com/protocol/)
- [MIT · Keys Under Doormats](https://dspace.mit.edu/handle/1721.1/97690)
