import { trigger, transition, style, query, animate, group } from '@angular/animations';

export const routeTransition = trigger('routeAnimations', [
  // Esta regla se activa al cambiar entre cualquier ruta
  transition('* <=> *', [
    // 1. Ocultamos el componente que entra inicialmente y lo posicionamos
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(15px)',
        position: 'absolute',
        width: '100%',
        left: 0
      })
    ], { optional: true }),

    // 2. Ejecutamos la animación de salida del componente viejo y entrada del nuevo en paralelo
    group([
      // Animación para el componente que sale (se desvanece suavemente)
      query(':leave', [
        animate('200ms ease-out', style({
          opacity: 0,
          position: 'absolute',
          width: '100%',
          left: 0
        }))
      ], { optional: true }),

      // Animación para el componente que entra (aparece y sube a su posición original)
      query(':enter', [
        animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ], { optional: true })
    ])
  ])
]);
