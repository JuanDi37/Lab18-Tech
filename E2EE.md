# E2EE — Identidad, evolución de claves y recuperación

## Escenario

Aurora es un venture ficticio con dos dispositivos autorizados. La presentación utiliza números y mensajes de prueba y no verifica una conversación real de Signal ni opera un túnel WireGuard.

## Identidad y contenido

La comparación del Safety Number por un canal confiable relaciona claves con un contacto conocido. Su coincidencia no certifica que el equipo esté libre de malware. El E2EE protege el payload entre dispositivos frente al servicio que lo transporta, bajo los supuestos del protocolo.

| Actor | Observación posible | Límite |
| --- | --- | --- |
| Servicio | Información operacional y conexiones, con medidas de minimización | No lee el contenido E2EE por transportarlo |
| Red | Endpoints, horarios y volumen | No lee el payload cifrado |
| Receptor | Mensaje recibido y contexto de conversación | Es un endpoint legítimo de lectura |
| Dispositivo comprometido | Pantalla, estado y mensajes según acceso | El cifrado de transporte no resuelve este acceso |

La capacidad de observar no equivale a retención permanente. Sealed sender reduce ciertas asociaciones visibles, pero no elimina todo dato de conexión.

## Forward secrecy

La exposición posterior de material de largo plazo no debería permitir recuperar mensajes anteriores cuando las claves necesarias ya fueron eliminadas y se cumplen los supuestos. Las copias de mensajes en dispositivos o respaldos requieren análisis aparte: una propiedad de claves no garantiza destrucción de contenido almacenado.

## Post-compromise security

La confidencialidad futura puede recuperarse si el atacante deja de acceder al estado y se incorpora material nuevo que no conoce. La evolución de claves de los ratchets participa en esa recuperación. Un adversario activo que controla el endpoint puede seguir leyendo mensajes antes o después del cifrado; no prometemos saneamiento automático.

## Respuesta ante compromiso

Primero aislamos el dispositivo y protegemos las cuentas asociadas. Saneamos o reemplazamos el entorno, revisamos sesiones y restablecemos material de identidad cuando corresponde. Reconﬁrmamos el contacto por un canal confiable y evaluamos qué contenido quedó expuesto. La recuperación operacional complementa las propiedades criptográficas.

## WireGuard

Los peers intercambian claves públicas, conservan privadas localmente y configuran rutas y endpoints autorizados. El handshake deriva claves de sesión; UDP lleva paquetes cifrados. AllowedIPs selecciona un peer para destinos y valida IP de origen en recepción. Un handshake reciente y contadores ayudan a interpretar actividad, pero conectividad también depende de rutas, firewall y aplicación. No atribuimos a WireGuard automáticamente el mismo modelo de recuperación que a Signal.

## Signal, Tor y WireGuard

Signal protege conversación. Tor con HTTPS distribuye visibilidad de ruta y cambia la exposición del origen al servidor. WireGuard protege paquetes entre peers configurados. Los tres conservan riesgos de endpoints y metadatos en posiciones diferentes.

## Acceso excepcional

El informe [Keys Under Doormats](https://dspace.mit.edu/handle/1721.1/97690) analiza cómo exigir vías adicionales de acceso puede aumentar complejidad y superficies de ataque. La finalidad de una investigación y el mecanismo criptográfico deben evaluarse por separado. Una capacidad privilegiada puede interesar tanto a operadores autorizados como a atacantes.

## Aprendizaje

Aprendimos que cifrar contenido, verificar identidad y recuperar un entorno son tareas complementarias. Las propiedades del protocolo deben interpretarse bajo condiciones explícitas y frente a actores concretos.
