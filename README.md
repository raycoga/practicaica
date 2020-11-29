Este proyecto fue construido meramente para investigar ciertas funcionalidades de react y tambien para averiguar como funcionan diversas librerias que en ella se hallan instalado...

1) La primera prueba que se hizo fue enviar propiedades copiadas de un componente padre y recibirlas en el hijo de la siguiente forma: 
`const propsDelPadre = { var: '...' }`
`<componenteHijo {...propsDelPadre}>`