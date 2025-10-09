'use client';

import React, { useMemo, useState } from 'react';

// Página: /src/app/compliance-digital/cuestionario/page.tsx (v2 – 7 áreas)
// UI responsive, escala Likert 1–5, progreso, validación y POST a API.
// Cada área tiene 6 ítems. Se calcula la media por área y se mapea a 4 niveles (🔴🟠🟡🟢) con mensajes personalizados.

// ===== Tipado =====
interface AnswerMap { [key: string]: number }
interface Scores { total: number; byArea: Record<string, number>; avgByArea: Record<string, number>; overallAvg: number }

// ===== Catálogo de Áreas (7) + Ítems (6 cada una) =====
// Puedes ajustar los textos de los ítems si necesitas más fidelidad al Word original.
const AREAS: { key: string; title: string; goal?: string; items: string[] }[] = [
  {
    key: 'a1',
    title: 'Área 1. Modelo organizativo y estructura del departamento jurídico',
    goal: 'Evaluar si el departamento cuenta con una estructura clara, funcional y alineada con los objetivos del negocio. Identificar posibles ineficiencias o puntos ciegos en la organización interna.',
    items: [
      'En nuestro departamento jurídico están claramente definidas las funciones, responsabilidades y niveles de autoridad de cada miembro del equipo.',
      'Existe un procedimiento claro y conocido para tomar decisiones dentro del departamento (quién decide, cómo se escalan los temas, tiempos).',
      'La estructura del departamento se ajusta bien a las necesidades y ritmo de la empresa (organización por áreas, clientes internos, volumen de trabajo, etc.).',
      'Contamos con mecanismos efectivos para coordinarnos internamente: reuniones, distribución de tareas, seguimiento de asuntos, etc.',
      'Hemos revisado y actualizado nuestra estructura organizativa en los últimos 12 meses.',
      'Contamos con indicadores o métricas que nos permiten evaluar la carga de trabajo, eficiencia y desempeño organizativo del departamento.',
    ],
  },
  {
    key: 'a2',
    title: 'Área 2. Relación con la dirección general y el equipo directivo',
    goal: 'Medir el grado de conexión e influencia estratégica con la dirección.',
    items: [
      '¿El departamento jurídico participa en las decisiones estratégicas clave de la compañía?',
      '¿Las prioridades del departamento jurídico están alineadas con los objetivos del comité de dirección?',
      '¿La dirección general conoce y valora el trabajo del departamento jurídico más allá de lo meramente reactivo?',
      '¿Se comunica al más alto nivel la evolución de riesgos jurídicos relevantes?',
      '¿Se plantea el asesoramiento jurídico como una ventaja competitiva para la empresa?',
      '¿La dirección considera al departamento jurídico como socio estratégico o solo como centro de costes?',
    ],
  },
  {
    key: 'a3',
    title: 'Área 3. Relación con otras áreas de la empresa',
    goal: 'Valorar la integración y colaboración transversal del departamento jurídico.',
    items: [
      '¿El departamento jurídico está involucrado en el diseño de procesos críticos de otras áreas (ej. compras, recursos humanos, comercial…)?',
      '¿Existe una relación fluida y de confianza entre el equipo jurídico y otras áreas de la empresa?',
      '¿Se ofrece asesoramiento jurídico preventivo de forma proactiva y no solo ante incidencias?',
      '¿Las otras áreas perciben al departamento jurídico como un facilitador o como un obstáculo?',
      '¿El departamento jurídico conoce bien la operativa real de los procesos clave de la empresa?',
      '¿Se recogen y analizan las necesidades jurídicas de otras áreas de forma sistemática?',
    ],
  },
  {
    key: 'a4',
    title: 'Área 4. Visión, estrategia y medición del desempeño',
    goal: 'Evaluar si existe dirección estratégica, objetivos y KPIs.',
    items: [
      '¿El departamento jurídico tiene definidos objetivos propios, más allá de las tareas reactivas del día a día?',
      '¿Existe una estrategia a medio/largo plazo que oriente la evolución del departamento?',
      '¿Se han definido indicadores (KPI) para evaluar el desempeño del departamento jurídico?',
      '¿Se revisan periódicamente estos indicadores y se comunican a la dirección?',
      '¿El equipo jurídico conoce y comprende los objetivos estratégicos globales de la empresa?',
      '¿El departamento analiza y valora el retorno de sus acciones (ahorro de costes, prevención de riesgos, generación de confianza…)?',
    ],
  },
  {
    key: 'a5',
    title: 'Área 5. Uso de tecnología y digitalización jurídica',
    goal: 'Medir adopción tecnológica y automatización de procesos.',
    items: [
      '¿Utilizáis alguna herramienta digital específica para la gestión de tareas, expedientes o consultas jurídicas internas?',
      '¿Existen procesos jurídicos o administrativos que podrían automatizarse y aún se realizan de forma manual?',
      '¿El departamento participa en los planes de transformación digital de la empresa o es ajeno a ellos?',
      '¿Se ha explorado el uso de inteligencia artificial o herramientas avanzadas (ej. análisis documental, detección de riesgos, etc.)?',
      '¿Se dispone de indicadores para medir el impacto de la digitalización en el rendimiento del área jurídica?',
      '¿Existe una estrategia concreta para mejorar la eficiencia operativa del departamento mediante tecnología?',
    ],


  },
  {
    key: 'a6',
    title: 'Área 6. Gestión del conocimiento jurídico y mejora continua',
    goal: 'Valorar cómo se captura, comparte y mejora el conocimiento.',
    items: [
      '¿Existen estándares internos claros para la redacción, almacenamiento y acceso a documentos jurídicos?',
      '¿El conocimiento generado por el departamento (resoluciones, criterios internos, aprendizajes) se sistematiza y queda accesible?',
      '¿Se revisan y actualizan periódicamente los modelos de contratos, plantillas y protocolos jurídicos?',
      '¿El equipo recibe formación continua adaptada a las necesidades reales del negocio y a la evolución normativa?',
      '¿Existen espacios (formales o informales) para compartir experiencias, resolver dudas y aprender entre compañeros?',
      '¿Se realiza algún tipo de análisis o revisión tras conflictos, errores o situaciones jurídicas complejas?',
    ],
  },

  {
    key: 'a7',
    title: 'Área 7. Cultura de cumplimiento, ética e integridad',
    goal: 'Valorar el impulso real de la cultura de cumplimiento y la integridad.',
    items: [
      '¿El departamento jurídico participa activamente en la definición, difusión o revisión del código ético y las políticas corporativas de integridad?',
      '¿Existe una conexión real entre los principios éticos de la organización y las decisiones legales que se toman en el día a día?',
      '¿Se tiene visibilidad sobre situaciones de conflicto ético en la empresa, más allá de los canales formales?',
      '¿El área jurídica colabora con compliance, RRHH o dirección en la construcción de una cultura ética activa y compartida?',
      '¿Las personas del equipo jurídico son percibidas como referentes de integridad y transparencia dentro de la organización?',
      '¿Se evalúa periódicamente el impacto del departamento jurídico en la prevención de riesgos de corrupción, fraude o incumplimientos?',
    ],
  },
];


// ===== Mensajes por nivel (1.0–2.4 / 2.5–3.4 / 3.5–4.4 / 4.5–5.0) =====
// Se evalúan por MEDIA de cada área (6 preguntas).
const BAND_TEXT: Record<string, {
  red: { title: string; body: string; recs: string[], riesgos?: string[] , oportunidades?: string[] , fortalezas?: string[] };
  orange: { title: string; body: string; recs: string[], riesgos?: string[] , oportunidades?: string[] , fortalezas?: string[]  };
  yellow: { title: string; body: string; recs: string[], riesgos?: string[] , oportunidades?: string[] , fortalezas?: string[]  };
  green: { title: string; body: string; recs: string[], riesgos?: string[] , oportunidades?: string[] , fortalezas?: string[]  };
}> = {
  a1: {
    red: {
      title: 'Zona crítica (1,0 – 2,4)',
      body:
        'El modelo organizativo de tu departamento jurídico presenta signos claros de debilidad estructural. Falta claridad en funciones y responsabilidades, los procedimientos de coordinación son escasos o informales y el diseño del equipo no parece responder al ritmo ni a las necesidades reales de la empresa. Esta situación aumenta la probabilidad de errores, sobrecarga de trabajo y pérdida de eficiencia. Es prioritario revisar la estructura, los canales de toma de decisiones y los mecanismos de coordinación interna.',
      recs: [
        'Realizar un mapa actualizado de funciones y roles.',
        'Establecer un procedimiento básico de toma de decisiones.',
        'Introducir rutinas mínimas de coordinación (reuniones, checklist, trazabilidad de tareas).',
      ],
    },
    orange: {
      title: 'Zona con margen de mejora (2,5 – 3,4)',
      body:
        'Tu departamento cuenta con una base organizativa reconocible, pero aún presenta áreas que pueden mejorarse de forma significativa. Algunas funciones no están claramente definidas, el reparto de tareas podría optimizarse y los canales de toma de decisiones no siempre resultan ágiles o efectivos. Estás en una buena posición para evolucionar hacia un modelo más estructurado, con mayor previsibilidad y menos dependencia de urgencias.',
      recs: [
        'Revisar roles actuales y proponer ajustes organizativos.',
        'Formalizar canales de decisión y escalado de temas.',
        'Introducir herramientas básicas de seguimiento de tareas.',
      ],
    },
    yellow: {
      title: 'Zona en consolidación (3,5 – 4,4)',
      body:
        'El modelo organizativo de tu departamento muestra madurez y estructura. Las funciones están razonablemente claras, existe coordinación y los procedimientos de decisión funcionan con cierta fluidez. Hay margen para reforzar la trazabilidad, anticiparse mejor a los picos de trabajo y profesionalizar aún más los procesos internos.',
      recs: [
        'Consolidar herramientas de trazabilidad y seguimiento.',
        'Revisar periódicamente la estructura.',
        'Introducir dinámicas de mejora continua interna.',
      ],
    },
    green: {
      title: 'Zona excelente (4,5 – 5,0)',
      body:
        'Tu departamento jurídico cuenta con un modelo organizativo sólido, claro y adaptado al ritmo de la empresa. Se aprecia una distribución eficaz de funciones, un sistema fluido de toma de decisiones y una cultura de coordinación muy asentada. Este nivel de estructura no solo mejora la eficiencia interna, sino que también proyecta profesionalidad y confianza dentro de la organización. ',
      recs: [
        'Compartir el modelo como buena práctica.',
        'Establecer métricas de eficiencia organizativa (tiempos de respuesta, cumplimiento de plazos, carga por rol).',
        'Liderar dinámicas de mejora organizativa en el área legal.',
      ],
    },
  },
  a2: {
    red: {
      title: 'Zona crítica (1,0 – 2,4)',
      body:
        'Tu departamento jurídico presenta una conexión débil o muy limitada con la dirección general. Esto suele traducirse en una falta de visibilidad estratégica, una baja participación en decisiones clave y una escasa alineación con los objetivos de la empresa.',
      riesgos:[
        'Se percibe como un centro de coste o un ente reactivo.',
        'Falta de influencia en decisiones con riesgo legal.',
        'Pérdida de oportunidades de aportar valor desde el derecho preventivo.'
      ],
      recs: [
        'Es prioritario establecer espacios periódicos de interlocución directa con la dirección y definir objetivos comunes. Iniciar una estrategia de posicionamiento interno del departamento.',        
      ],
    },
    orange: {
      title: 'Margen de mejora (2,5 – 3,4)',
      body:
        'Existe una relación funcional con la dirección, pero no plenamente estratégica. La comunicación puede ser reactiva y la influencia del departamento depende más de las personas que de un sistema consolidado',
      recs: [
        'Diseña un plan de visibilidad interna que conecte tus contribuciones con los resultados de negocio. Si aún no estás en el Comité de Dirección, identifica cómo puedes aportar desde fuera para ganarte ese espacio.'
      ],
       oportunidades:[
        'Estructurar informes y reportes que hablen en clave de negocio.',
        'Participar antes de que los temas lleguen a fase crítica.',
        'Demostrar cómo el jurídico puede generar valor, no solo control.'
      ],
    },
    yellow: {
      title: 'Zona en consolidación (3,5 – 4,4)',
      body:
        'El departamento mantiene una relación sólida con la dirección general. Se reconocen sus aportes, y suele estar presente en decisiones relevantes. Sin embargo, todavía hay margen para evolucionar hacia una función verdaderamente estratégica e integrada.',
      recs: [
        'Empieza a medir tu impacto en decisiones clave, define KPIs de alineación estratégica y busca vincular tu actividad con la gestión del riesgo, la eficiencia y la reputación corporativa.',
      ],
    },
    green: {
      title: 'Zona excelente (4,5 – 5,0)',
      body:
        'Tu departamento jurídico está claramente posicionado como un aliado estratégico de la dirección. Tiene voz en decisiones clave, anticipa riesgos y propone soluciones alineadas con el negocio.',
      recs: [
        'Consolida esta posición desarrollando indicadores de valor jurídico, aportaciones cualitativas al plan estratégico y compartiendo aprendizajes con otros departamentos. Estás en una posición privilegiada para liderar el cambio jurídico interno.',
      ],
      fortalezas:[
        'Alta influencia estratégica.',
        'Capacidad de anticipación.',
        'Reconocimiento y confianza de la alta dirección.'
      ]
    },
  },
  a3: {
    red: {
      title: 'Zona crítica (1,0 – 2,4)',
      body:
        'Existe un aislamiento funcional del departamento jurídico respecto al resto de la organización. La colaboración es escasa, reactiva o incluso inexistente en algunos casos. Las demás áreas perciben al departamento como una barrera o como un ente ajeno a sus objetivos.',
      recs: [
        'Replantea la presencia del departamento en comités, reuniones y procesos clave. Identifica áreas prioritarias con las que construir una colaboración sistemática, y plantea sesiones para comprender mejor sus necesidades jurídicas.',
      ],
      riesgos:[
        'Se consulta tarde o directamente se evita.',
        'Falta de conexión entre riesgos jurídicos y decisiones operativas.',
        'Pérdida de reputación interna y de influencia.'
      ]
    },
    orange: {
      title: 'Margen de mejora (2,5 – 3,4)',
      body:
        'Hay cierta relación con otras áreas, pero limitada en profundidad o frecuencia. El departamento interviene puntualmente, generalmente cuando se requiere su validación o revisión, pero no forma parte del flujo habitual de trabajo de los equipos internos.',
      recs: [
        'Identifica a los stakeholders internos clave y construye con ellos relaciones de confianza. Define mecanismos estables (checklists, formularios, sesiones) que integren lo jurídico en su operativa habitual.',        
      ],
      oportunidades:[
        'Establecer modelos de colaboración proactiva (por ejemplo, jurídicos internos asignados a áreas).',
        'Crear canales de consulta preventiva y formación para otras áreas.',
        'Medir y comunicar el valor aportado.'
      ]
    },
    yellow: {
      title: 'Zona en consolidación (3,5 – 4,4)',
      body:
        'El departamento jurídico está razonablemente bien conectado con otras áreas. Su participación suele estar bien valorada, aunque todavía podría mejorar la anticipación y el nivel de integración en algunos procesos transversales o decisiones compartidas.',
      recs: [
        'Pasa de una relación "de servicio" a una "de socio". Formaliza reuniones regulares con áreas clave, revisa los flujos de trabajo conjuntos y sistematiza la intervención jurídica desde fases tempranas de los proyectos internos.',        
      ],
    },
    green: {
      title: 'Zona excelente (4,5 – 5,0)',
      body:
        'El departamento jurídico es un socio confiable e integrado en la operativa de otras áreas. Participa desde fases tempranas de los proyectos, ayuda a prevenir problemas y aporta soluciones alineadas con los objetivos de cada área.',
      recs: [
        'Comparte buenas prácticas con otros departamentos, promueve el derecho preventivo y posiciona a tu equipo como impulsor de soluciones innovadoras. Puedes estar en una excelente posición para liderar iniciativas de mejora transversal.',        
      ],
      fortalezas:[
        'Conocimiento profundo de la normativa y su aplicación práctica.',
        'Capacidad para anticipar riesgos y proponer soluciones efectivas.',
        'Relaciones de confianza con otros departamentos.',
        'Reconocimiento interno como área facilitadora.'
      ]
    },
  },
  a4: {
    red: {
      title: 'Zona crítica (1,0 – 2,4)',
      body:
        'El departamento carece de una visión estratégica formalizada. Las actividades se gestionan de forma reactiva y no se definen metas a medio o largo plazo. No se realiza un seguimiento del impacto jurídico ni se comunican resultados de forma estructurada.',
      recs: [
        'Inicia un proceso participativo para definir la visión del departamento, establecer objetivos anuales alineados con los de la compañía y marcar indicadores básicos de desempeño (por ejemplo, eficiencia, prevención, impacto económico evitado).',        
      ],
      riesgos:[
        'Dificultad para justificar recursos o personal.',
        'Percepción de área reactiva y sin foco.',
        'Desconexión con la estrategia global de la empresa'
      ]
    },
    orange: {
      title: 'Margen de mejora (2,5 – 3,4)',
      body:
        'Existe una intención estratégica, pero no se traduce de forma sistemática en objetivos, planificación o métricas. Se hacen esfuerzos por mejorar, pero con escasa continuidad o sin una hoja de ruta clara.',
      recs: [
        'Impulsa un plan de mejora progresivo con visión de largo plazo. Prioriza unos pocos objetivos clave medibles y visibles, que permitan demostrar el valor jurídico con evidencias concretas.',        
      ],
      oportunidades:[
        'Formalizar un plan operativo anual.',
        'Definir 3-5 indicadores clave de desempeño.',
        'Comunicar periódicamente resultados al comité de dirección.',
      ],
    },
    yellow: {
      title: 'Zona en consolidación (3,5 – 4,4)',
      body:
        'El departamento tiene objetivos definidos y algunos indicadores, aunque todavía puede mejorar en la claridad de la estrategia y la sistematización del seguimiento. Se nota una evolución desde un modelo más reactivo a uno con mayor enfoque.',
      recs: [
        'Refuerza la cultura de evaluación y comunicación de resultados. Alinea la visión del departamento con los retos futuros de la empresa y revisa los KPIs periódicamente con dirección. Implica al equipo en la mejora continua.',
      ],
    },
    green: {
      title: 'Zona excelente (4,5 – 5,0)',
      body:
        'El departamento cuenta con una visión clara, objetivos estratégicos alineados con la empresa, y mide de forma estructurada su desempeño. Utiliza estos datos para mejorar, anticiparse y ganar peso interno.',
      recs: [
        'Sigue consolidando esta visión como palanca de influencia. Comparte buenas prácticas con otros departamentos y contribuye al diseño estratégico de la compañía con una visión jurídica alineada con el crecimiento sostenible.',
      ],
    },
  },
  a5: {
    red: {
      title: 'Zona crítica (1,0 – 2,4)',
      body:
        'El departamento trabaja prácticamente sin apoyo tecnológico. Las tareas se gestionan manualmente, se usa correo electrónico para todo, y no hay herramientas específicas para procesos jurídicos, gestión documental o reporting.',
      recs: [
        'Iniciar un diagnóstico interno sobre los procesos que podrían digitalizarse de forma sencilla y con poco coste. Existen soluciones asequibles y fáciles de implementar para la gestión documental, control de tareas, generación de contratos o seguimiento de consultas.',
      ],
      riesgos:[
        'Alta dependencia de personas clave.',
        'Desorganización, duplicidades o pérdidas de información.',
        'Imposibilidad de escalar o responder al crecimiento.',
      ]
    },
    orange: {
      title: 'Margen de mejora (2,5 – 3,4)',
      body:
        'Se utilizan algunas herramientas básicas (ej. Excel, carpetas compartidas, buscadores de legislación), pero sin una estrategia definida de digitalización. No se ha sistematizado la gestión del conocimiento ni la automatización de procesos repetitivos.',
      recs: [
        'Elabora un pequeño plan de transformación digital del departamento, con objetivos realistas. Busca quick wins: automatizaciones sencillas que liberen tiempo. Evalúa soluciones tipo NormaPro u otras adaptadas a tu volumen y necesidades.',
      ],
      oportunidades:[
        'Implantar herramientas específicas para departamentos jurídicos.',
        'Automatizar tareas de bajo valor como recordatorios, reporting o generación documental.',
        'Establecer un repositorio inteligente de documentos y jurisprudencia.',
      ],
    },
    yellow: {
      title: 'Zona en consolidación (3,5 – 4,4)',
      body:
        'El departamento ya ha dado pasos significativos en digitalización. Usa herramientas colaborativas, tiene sistematizada parte de la gestión jurídica y ha reducido carga operativa manual. Sin embargo, aún hay margen de mejora en integración y uso estratégico de datos.',
      recs: [
        'Profundiza en la automatización de procesos clave (consultas, tickets, contratos, cumplimiento). Evalúa la integración con otras áreas (compras, RRHH, compliance). Explora el uso de inteligencia artificial o analítica para aportar valor predictivo.',
      ],
    },
    green: {
      title: 'Zona excelente (4,5 – 5,0)',
      body:
        'El departamento ha integrado con éxito la tecnología en sus operaciones diarias. Cuenta con herramientas específicas que le permiten escalar, automatizar, generar conocimiento y ser más estratégico. Se ha convertido en un referente interno de innovación.',
      recs: [
        'Comparte tu experiencia con otros departamentos como ejemplo de transformación. Revisa periódicamente el mapa tecnológico para evitar obsolescencias. Sigue explorando soluciones que permitan pasar del dato al conocimiento jurídico estratégico.',
      ],
      fortalezas:[
        'Flujo de trabajo digitalizado e integrado.',
        'Reducción significativa de tareas manuales.',
        'Mejora de la trazabilidad, el acceso a la información y la eficiencia.',
      ],
    },
  },
  a6: {
    red: {
      title: 'Zona crítica (1,0 – 2,4)',
      body:
        'El conocimiento jurídico se queda en las personas, no en los sistemas. No existe una metodología clara para documentar aprendizajes, sentencias relevantes, criterios internos o buenas prácticas. Cada nuevo asunto parte desde cero.',
      recs: [
        'Comienza por crear repositorios simples pero útiles: plantillas, criterios internos, respuestas a consultas frecuentes. Establece rutinas mínimas de revisión post-asunto. Una wiki jurídica interna, incluso en Word o Excel, es un buen primer paso.',
      ],
      riesgos:[
        'Pérdida de conocimiento clave al rotar personas.',
        'Retrabajo innecesario por falta de memoria histórica.',
        'Baja capacidad para evolucionar y mejorar decisiones.',
      ],
    },
    orange: {
      title: 'Margen de mejora (2,5 – 3,4)',
      body:
        'Se documentan ciertos contenidos (ej. contratos, informes), pero no hay una cultura de gestión del conocimiento consolidada. La mejora continua se hace más por intuición que por revisión sistemática de errores o aprendizajes.',
      recs: [
        'Define qué tipo de conocimiento merece sistematizarse y cómo hacerlo. Unifica formatos, estandariza nomenclaturas y promueve la documentación de los criterios jurídicos que guían al equipo. Esto generará coherencia, rapidez y calidad en la respuesta jurídica.',
      ],
      oportunidades:[
        'Formalizar rutinas de revisión y mejora (ej. tras conflictos, sanciones, auditorías).',
        'Crear una base de conocimiento accesible y ordenada.',
        'Establecer roles de referencia interna por materias (laboral, protección de datos, etc.).',
      ],

    },
    yellow: {
      title: 'Zona en consolidación (3,5 – 4,4)',
      body:
        'El departamento ha empezado a construir una cultura de mejora y aprendizaje. Se revisan errores, se actualizan criterios jurídicos y existe cierta sistematización de documentos clave. Aún hay margen para incorporar esta cultura en el día a día.',
      recs: [
        'Consolida estas prácticas mediante revisiones periódicas, informes de evolución y sesiones internas de aprendizaje. Considera vincular parte de los indicadores del departamento a la mejora continua (tiempos de respuesta, reducción de incidencias, etc.).',
      ],
    },
    green: {
      title: 'Zona excelente (4,5 – 5,0)',
      body:
        'La gestión del conocimiento es uno de los pilares del departamento. Existe una base documental viva, actualizada y compartida. Los procesos incluyen momentos de reflexión, retroalimentación y mejora. El equipo evoluciona de forma constante.',
      recs: [
        'Sigue alimentando y protegiendo este activo. Evalúa herramientas tecnológicas que te permitan transformar ese conocimiento en inteligencia organizacional. Considera compartir internamente estos avances para posicionar al departamento como modelo de excelencia.'
      ],
      fortalezas:[
        'Alta trazabilidad de criterios jurídicos.',
        'Cohesión en las respuestas y decisiones.',
        'Cultura interna de aprendizaje, formación y revisión.',
      ],
    },
  },
  a7: {
    red: {
      title: 'Zona crítica (1,0 – 2,4)',
      body:
        'La cultura de cumplimiento se percibe como una obligación formal más que como un verdadero motor de integridad. No hay un liderazgo jurídico visible en esta materia, ni mecanismos efectivos para promoverla o evaluarla.',
      recs: [
        'Es urgente reposicionar al departamento como referente de integridad. Identifica focos de riesgo ético o normativo, alinéate con RRHH o Compliance y comienza por iniciativas sencillas pero visibles: revisión de protocolos clave, formaciones internas, actualización del código ético, etc.',
      ],
      riesgos:[
        'Baja credibilidad del área jurídica ante el resto de la organización.',
        'Riesgo de sanciones, pérdida reputacional o conflictos éticos no gestionados.',
        'Cumplimiento “en papel” sin reflejo en la realidad operativa.',
      ],

    },
    orange: {
      title: 'Margen de mejora (2,5 – 3,4)',
      body:
        'El cumplimiento normativo está presente en los discursos y documentos, pero aún no impregna las decisiones del día a día. La ética se aborda como algo reactivo y limitado a ciertos departamentos.',
      recs: [
        'Posiciónate como agente de integridad, no solo de legalidad. Apoya la toma de decisiones éticas, visibiliza los valores del departamento y alinea tus actuaciones con los códigos internos. Cada asunto es una oportunidad de hacer pedagogía ética.',
      ],
      oportunidades:[
        'Incorporar la mirada jurídica en proyectos de formación, evaluación o diseño de políticas.',
        'Participar más activamente en los órganos de Compliance, si existen.',
        'Trabajar de forma transversal con otras áreas para integrar el cumplimiento desde el diseño de procesos.',
      ],
    },
    yellow: {
      title: 'Zona en consolidación (3,5 – 4,4)',
      body:
        'El departamento impulsa activamente la ética y el cumplimiento, y existe una interacción frecuente con los órganos responsables de estas materias. Sin embargo, aún falta transversalidad o impacto real en todos los niveles de la organización.',
      recs: [
        'Consolida tu rol como referente interno. Crea foros jurídicos para debatir dilemas reales, analiza riesgos éticos emergentes (IA, datos, diversidad, etc.) y participa en la definición de indicadores no financieros. Mide el impacto del área jurídica también desde la perspectiva ética.',
      ],
    },
    green: {
      title: 'Zona excelente (4,5 – 5,0)',
      body:
        'La cultura de cumplimiento forma parte del ADN del departamento jurídico. Se actúa con proactividad, liderazgo y transversalidad. Existe una conexión clara entre los valores de la compañía y las actuaciones del área jurídica.',
      recs: [
        'Comparte buenas prácticas, difunde logros y convierte al departamento en ejemplo interno de integridad. Explora tu papel como garante de sostenibilidad y responsabilidad social desde lo jurídico. Este posicionamiento puede ser diferencial para la compañía.',
      ],
      fortalezas:[
        'Liderazgo ético reconocido.',
        'Participación estratégica en el diseño de la gobernanza interna.',
        'Capacidad para anticipar riesgos éticos y actuar preventivamente',
      ],
    },
  },
};

// ===== Utilidades de puntuación =====
const getBandKey = (avg: number) => {
  if (avg >= 4.5) return 'green';
  if (avg >= 3.5) return 'yellow';
  if (avg >= 2.5) return 'orange';
  return 'red';
};

export default function CuestionarioComplianceDigitalV2() {
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<null | Scores>(null);

  const totalQuestions = useMemo(() => AREAS.reduce((acc, a) => acc + a.items.length, 0), []);
  const answeredCount = Object.keys(answers).length;
  const progressPct = Math.round((answeredCount / totalQuestions) * 100);

  const setAnswer = (key: string, value: number) => setAnswers((p) => ({ ...p, [key]: value }));

  const computeScores = (): Scores => {
    const byArea: Record<string, number> = {};
    const avgByArea: Record<string, number> = {};

    AREAS.forEach((a) => {
      const sum = a.items.reduce((acc, _q, i) => acc + (answers[`${a.key}.${i}`] || 0), 0);
      byArea[a.key] = sum;
      avgByArea[a.key] = parseFloat((sum / a.items.length).toFixed(2));
    });

    const total = Object.values(byArea).reduce((acc, n) => acc + n, 0);
    const overallAvg = parseFloat((total / totalQuestions).toFixed(2));
    return { total, byArea, avgByArea, overallAvg };
  };

  const onSubmit = async () => {
    if (answeredCount !== totalQuestions) {
      alert('Por favor, responde todas las preguntas antes de continuar.');
      return;
    }
    setSubmitting(true);
    const scores = computeScores();

    try {
      await fetch('https://api-campaigns.normapro.es/cuestionarios/juridico-v2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cuestionario: 'departamento_juridico_v2',
          respuestas: answers,
          resultados: scores,
        }),
      });
      setSubmitted(scores);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      console.error(e);
      alert('No se pudo enviar el cuestionario. Inténtalo de nuevo.');
    } finally {
      setSubmitting(false);
    }
  };

  // ===== Vista de resultados =====
  if (submitted) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="rounded-xl border border-gray-200 shadow-sm p-6 bg-white">
          <h1 className="text-2xl font-extrabold">Resultado del autodiagnóstico</h1>
          <p className="mt-2 text-gray-700">
            Media global: <b>{submitted.overallAvg}</b> / 5 · Preguntas respondidas: {totalQuestions}
          </p>

          <div className="mt-6 space-y-6">
            {AREAS.map((a) => {
              const avg = submitted.avgByArea[a.key];
              const band = getBandKey(avg) as keyof typeof BAND_TEXT['a1'];
              const texts = BAND_TEXT[a.key][band];

              return (
                <div key={a.key} className="rounded-lg border p-4 bg-white">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold">{a.title}</h2>
                      {a.goal && <p className="text-sm text-gray-600 mt-1">{a.goal}</p>}
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Media</p>
                      <p className="text-2xl font-extrabold">{avg}</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="font-semibold">{texts.title}</span>
                    <p className="mt-1 text-gray-700">{texts.body}</p>
                    {texts.recs?.length > 0 && (
                      <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                        {texts.recs.map((r, i) => <li key={i}>{r}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/compliance-digital" className="inline-flex items-center justify-center rounded-lg bg-[#010d3d] px-5 py-3 text-white font-semibold">
              Volver a la landing
            </a>
            <a href="https://normapro.es/contacto" className="inline-flex items-center justify-center rounded-lg border border-[#010d3d] px-5 py-3 text-[#010d3d] font-semibold">
              Solicitar reunión personalizada
            </a>
          </div>
        </div>
      </div>
    );
  }

  // ===== Vista del cuestionario =====
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Encabezado */}
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold">Test de Autodiagnóstico — Departamento Jurídico</h1>
        <p className="mt-2 text-gray-600">
          Puntúa del 1 al 5 cada afirmación (1 = Nada cierto · 5 = Totalmente cierto). Responde con sinceridad para obtener un resultado útil.
        </p>
      </header>

      {/* Progreso */}
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-1">
          <span>{answeredCount} / {totalQuestions} respondidas</span>
          <span>{progressPct}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#010d3d]" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      {/* Áreas */}
      <div className="space-y-10">
        {AREAS.map((area) => (
          <section key={area.key} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold">{area.title}</h2>
            {area.goal && <p className="text-gray-600">{area.goal}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {area.items.map((label, idx) => {
                const qKey = `${area.key}.${idx}`;
                const selected = answers[qKey] || 0;
                return (
                  <div key={qKey} className="rounded-lg border p-4 bg-white">
                    <p className="font-medium mb-3">{label}</p>
                    <div className="flex items-center justify-between gap-2">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <label key={n} className={`flex flex-col items-center text-sm cursor-pointer select-none ${selected === n ? 'font-bold' : ''}`}>
                          <input
                            type="radio"
                            name={qKey}
                            value={n}
                            checked={selected === n}
                            onChange={() => setAnswer(qKey, n)}
                            className="peer sr-only"
                          />
                          <span className={`w-9 h-9 flex items-center justify-center rounded-full border transition ${selected === n ? 'bg-[#010d3d] text-white border-[#010d3d]' : 'border-gray-300 text-gray-700 hover:border-[#010d3d]'}`}>{n}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Enviar */}
      <div className="sticky bottom-0 left-0 right-0 mt-10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-t">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-600">Revisa tus respuestas y envía para ver tu puntuación y diagnóstico por área.</p>
          <button
            onClick={onSubmit}
            disabled={submitting}
            className="inline-flex items-center justify-center rounded-lg bg-[#010d3d] px-6 py-3 text-white font-semibold disabled:opacity-60"
          >
            {submitting ? 'Enviando…' : 'Ver mi resultado'}
          </button>
        </div>
      </div>
    </div>
  );
}
