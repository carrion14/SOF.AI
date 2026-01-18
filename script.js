/**
 * Arquitecto de Software Senior
 * Módulo: Lógica de Negocio y Renderizado
 * Patrón: Module Pattern (Simulado)
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Base de Datos Normalizada
    // Actualizada con el dataset completo solicitado
    const dbTools = [
        {
            id: 1,
            name: "ChatGPT",
            category: "generacion de texto",
            desc: "Asistente de IA versátil (OpenAI) para redacción de documentos técnicos, análisis de datos y creación de contenido multimodal. Incluye modelos de razonamiento avanzado (o1, o3, GPT-5) y capacidades de búsqueda web.",
            link: "https://chatgpt.com/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 2,
            name: "Claude",
            category: "generacion de texto",
            desc: "Asistente de Anthropic enfocado en seguridad y razonamiento avanzado. Posee una ventana de contexto de 200,000 tokens, ideal para analizar documentos extensos, planificación arquitectónica y escritura de código limpio.",
            link: "https://claude.ai/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 3,
            name: "Midjourney",
            category: "generacion de imagen",
            desc: "Plataforma líder en generación de imágenes con estética artística, pictórica y fotorrealismo de alta calidad. Utilizada profesionalmente para arte conceptual, marketing y visuales creativos.",
            link: "https://www.midjourney.com/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 4,
            name: "DALL-E",
            category: "generacion de imagen",
            desc: "Herramienta de OpenAI para generar imágenes creativas a partir de texto de forma rápida. Es un estándar para equipos de publicidad y marketing que requieren integración con el ecosistema de ChatGPT.",
            link: "https://openai.com/dall-e",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 5,
            name: "Nano Banana",
            category: "generacion de imagen",
            desc: "Modelo nativo de Google (Gemini 2.5 Flash Image) para edición precisa. Permite cambiar fondos, añadir ropa, realizar transformaciones completas de escenas y crear figuras 3D desde fotos.",
            link: "https://aistudio.google.com/",
            price: "Gratis",
            priceClass: "free"
        },
        {
            id: 6,
            name: "Synthesia",
            category: "generacion de video",
            desc: "Plataforma de creación de video con avatares de IA realistas. Permite convertir texto en video con locución en más de 140 idiomas, ideal para capacitación, demos y comunicaciones corporativas.",
            link: "https://www.synthesia.io/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 7,
            name: "HeyGen",
            category: "generacion de video",
            desc: "Generación de video con avatares y gemelos digitales en resolución 4K. Ofrece clonación de voz y sincronización de labios en 175 idiomas para contenido de marketing escalable.",
            link: "https://www.heygen.com/",
            price: "Freemium / Pago",
            priceClass: "freemium"
        },
        {
            id: 8,
            name: "Sora",
            category: "generacion de video",
            desc: "Modelo de OpenAI que crea videos cinematográficos de hasta 60 segundos con alta fidelidad visual y realismo físico a partir de instrucciones de texto.",
            link: "https://openai.com/sora",
            price: "No especificado",
            priceClass: "paid"
        },
        {
            id: 9,
            name: "Google Veo",
            category: "generacion de video",
            desc: "Modelo avanzado de Google para visuales cinematográficos realistas. Incluye generación de audio sincronizado, extensión de clips existentes y uso de imágenes de referencia.",
            link: "https://cloud.google.com/vertex-ai",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 10,
            name: "Runway Gen-4 Turbo",
            category: "generacion de video",
            desc: "Herramienta de generación de video que produce clips cinematográficos optimizados, solucionando problemas previos de distorsión facial y mejorando el realismo del movimiento.",
            link: "https://runwayml.com/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 11,
            name: "Cursor",
            category: "programacion",
            desc: "IDE basado en VS Code que utiliza IA para predecir cambios, traducir lenguaje natural a código y realizar revisiones automáticas navegando por grandes estructuras de archivos.",
            link: "https://www.cursor.com/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 12,
            name: "Devin AI",
            category: "programacion",
            desc: "Ingeniero de software autónomo capaz de planificar y ejecutar proyectos completos, corregir errores, realizar migraciones de código legado y ajustar modelos de IA sin supervisión.",
            link: "https://www.cognition.ai/devin",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 13,
            name: "GitHub Copilot",
            category: "programacion",
            desc: "Asistente que sugiere completado de código, crea funciones y detecta errores en tiempo real integrándose en los editores de código más populares.",
            link: "https://github.com/features/copilot",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 14,
            name: "Claude Code",
            category: "programacion",
            desc: "Agente tipo CLI que comprende proyectos completos de código para orquestar cambios en múltiples archivos y gestionar flujos desde la detección hasta el Pull Request.",
            link: "https://anthropic.com/claude-code",
            price: "Pago (Tokens)",
            priceClass: "paid"
        },
        {
            id: 15,
            name: "Abacus AI Desktop",
            category: "programacion",
            desc: "Agente de alto rendimiento para construir aplicaciones complejas, gestionar bases de datos e integrar sistemas de pago mediante instrucciones en lenguaje natural.",
            link: "https://abacus.ai/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 16,
            name: "Suno",
            category: "generacion de musica",
            desc: "Generador de canciones completas (voces, letras e instrumentos) a partir de texto. Incluye herramientas para exportar stems, MIDI y ajuste de BPM/tono.",
            link: "https://suno.com/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 17,
            name: "Udio",
            category: "generacion de musica",
            desc: "Generador de música de alta fidelidad con enfoque en calidad vocal nítida. Permite remezclar, extender secciones y pegar letras propias para un control profundo de la pista.",
            link: "https://www.udio.com/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 18,
            name: "ElevenLabs",
            category: "generacion de musica",
            desc: "Plataforma de generación de voz, efectos de sonido y música. Permite clonación de voz, doblaje multilingüe y narraciones con control emocional (susurros, sarcasmo).",
            link: "https://elevenlabs.io/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 19,
            name: "AlphaSense",
            category: "finanzas",
            desc: "Inteligencia financiera que utiliza búsqueda semántica en transcripciones de ganancias e informes para reducir el tiempo de investigación de mercado.",
            link: "https://www.alpha-sense.com/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 20,
            name: "Upstart",
            category: "finanzas",
            desc: "IA para decisiones de crédito que analiza más de 1,000 variables para evaluar riesgos y automatizar el origen de préstamos y suscripciones.",
            link: "https://www.upstart.com",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 21,
            name: "make.com",
            category: "automatizacion",
            desc: "Plataforma de automatización de flujos de trabajo (workflow automation) visual.",
            link: "https://www.make.com/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 22,
            name: "Jasper",
            category: "marketing",
            desc: "Generador de contenido para blogs, anuncios y redes sociales. Incluye entrenamiento de voz de marca y optimización de contenido a escala.",
            link: "https://www.jasper.ai",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 23,
            name: "Surfer SEO",
            category: "marketing",
            desc: "Optimización de contenido basada en el análisis de la competencia para ofrecer recomendaciones de palabras clave y mejorar la visibilidad orgánica.",
            link: "https://surferseo.com/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 24,
            name: "Zapier AI Agents",
            category: "automatizacion",
            desc: "Agentes que automatizan tareas en más de 8,000 apps. Aprenden de flujos históricos para conectar herramientas de forma autónoma mediante lenguaje natural.",
            link: "https://zapier.com/ai",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 25,
            name: "n8n",
            category: "automatizacion",
            desc: "Editor visual de nodos para conectar apps y servicios, permitiendo crear procesos complejos como respaldos de datos y sincronización de información.",
            link: "https://n8n.io/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 26,
            name: "Tableau AI",
            category: "datos y analisis",
            desc: "Plataforma que convierte datos crudos en insights accionables, permitiendo consultas en lenguaje natural y pronósticos automáticos.",
            link: "https://www.tableau.com/products/ai",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 27,
            name: "SQLAI.ai",
            category: "datos y analisis",
            desc: "Transforma indicaciones en lenguaje natural en sentencias SQL precisas y optimiza consultas lentas sugiriendo índices para bases de datos.",
            link: "https://www.sqlai.ai/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 28,
            name: "Adobe Firefly",
            category: "creatividad",
            desc: "Suite integrada en Photoshop e Illustrator para generación de imágenes, expansión generativa y eliminación/relleno de objetos.",
            link: "https://www.adobe.com/firefly",
            price: "Pago (Creative Cloud)",
            priceClass: "paid"
        },
        {
            id: 29,
            name: "Rayon Design",
            category: "creatividad",
            desc: "Herramienta para arquitectos y diseñadores que genera moodboards, estudios de materiales y vistas 3D a partir de planos 2D.",
            link: "https://www.rayon.design/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 30,
            name: "Sudowrite",
            category: "creatividad",
            desc: "Asistente de escritura creativa para ficción que ayuda a generar tramas, expandir esquemas y mejorar el desarrollo de personajes.",
            link: "https://www.sudowrite.com/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 31,
            name: "VEED.IO",
            category: "generacion de video",
            desc: "Editor de video en línea con IA que simplifica la creación de contenido para redes sociales y el crecimiento de audiencia.",
            link: "https://www.veed.io/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 32,
            name: "IQuest Coder",
            category: "programacion",
            desc: "Modelo de código abierto con soporte de contexto de 128K para generar y refinar código en múltiples archivos.",
            link: "https://github.com/iquest-coder",
            price: "Gratis",
            priceClass: "free"
        },
        {
            id: 33,
            name: "InvoiceAgent.ai",
            category: "finanzas",
            desc: "Automatización de la extracción de datos de facturas para su gestión y análisis financiero integral.",
            link: "https://invoiceagent.ai/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 34,
            name: "Sardine",
            category: "finanzas",
            desc: "Gestión de riesgos para detectar y prevenir fraudes financieros en tiempo real analizando el comportamiento del dispositivo.",
            link: "https://www.sardine.ai/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 35,
            name: "CRM Creatio",
            category: "marketing",
            desc: "Plataforma de automatización de marketing para diseñar y optimizar campañas multicanal con segmentación impulsada por IA.",
            link: "https://www.creatio.com/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 36,
            name: "GMC Guard",
            category: "marketing",
            desc: "Herramienta técnica que audita y corrige problemas de representación errónea en Google Merchant Center.",
            link: "https://gmcguard.com/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 37,
            name: "Adverity",
            category: "datos y analisis",
            desc: "Unifica datos de marketing de diversas fuentes para extraer insights y automatizar la limpieza de información.",
            link: "https://www.adverity.com/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 38,
            name: "Arka",
            category: "datos y analisis",
            desc: "Realiza consultas analíticas a diversas fuentes de datos utilizando procesamiento de lenguaje natural.",
            link: "https://arka.ai/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 39,
            name: "Logic Sheet",
            category: "automatizacion",
            desc: "Automatización de flujos de trabajo en Google Sheets mediante agentes de IA que ejecutan tareas de varios pasos.",
            link: "https://logicsheet.co/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 40,
            name: "Arahi AI",
            category: "automatizacion",
            desc: "Plataforma para ejecutar flujos autónomos en más de 2,800 aplicaciones utilizando agentes inteligentes.",
            link: "https://arahi.ai/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 41,
            name: "Spell",
            category: "creatividad",
            desc: "Generación de mundos 3D editables a partir de texto o imágenes para diseño en entornos virtuales.",
            link: "https://spell.com/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 42,
            name: "Patternaly",
            category: "creatividad",
            desc: "Generador de patrones repetitivos sin costuras para diseño gráfico y textil a partir de indicaciones de texto.",
            link: "https://patternaly.com/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 43,
            name: "Punchd",
            category: "generacion de texto",
            desc: "Herramienta de copywriting diseñada para generar y calificar la efectividad de titulares de marketing.",
            link: "https://punchd.ai/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 44,
            name: "MusicHero.ai",
            category: "generacion de musica",
            desc: "Combina generación musical con eliminación de voz, creación de letras y videos musicales para redes sociales.",
            link: "https://musichero.ai/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 45,
            name: "SOUNDRAW",
            category: "generacion de musica",
            desc: "Generador de música instrumental que permite ajustes compás por compás de duración, intensidad e instrumentos.",
            link: "https://soundraw.io/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 46,
            name: "Beatoven.ai",
            category: "generacion de musica",
            desc: "Creación de pistas de fondo basadas en estados de ánimo para videos y podcasts con licencias integradas.",
            link: "https://www.beatoven.ai/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 47,
            name: "Loudly",
            category: "generacion de musica",
            desc: "Creación de pistas libres de regalías con controles de estilo y aislamiento de stems (voces y batería).",
            link: "https://www.loudly.com/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 48,
            name: "Mureka",
            category: "generacion de musica",
            desc: "Plataforma musical que destaca por su estructura de canción (estrofa-coro) y calidad de audio sin distorsiones.",
            link: "https://www.mureka.ai/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 49,
            name: "Sequenzy",
            category: "marketing",
            desc: "Generación y despliegue de secuencias de correo electrónico adaptadas automáticamente a la identidad de marca.",
            link: "https://sequenzy.ai/",
            price: "Pago",
            priceClass: "paid"
        },
        {
            id: 50,
            name: "Google AI Studio",
            category: "desarrollo",
            desc: "Espacio de experimentación para probar modelos Gemini.",
            link: "https://aistudio.google.com/",
            price: "Gratis",
            priceClass: "free"
        },
        {
            id: 51,
            name: "Gemini",
            category: "generacion de texto",
            desc: "Chat conversacional de Google con modelos avanzados.",
            link: "https://gemini.google.com/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 52,
            name: "Vertex AI",
            category: "desarrollo",
            desc: "Plataforma unificada para crear y desplegar modelos de IA generativa.",
            link: "https://cloud.google.com/vertex-ai",
            price: "Pago (Uso)",
            priceClass: "paid"
        },
        {
            id: 53,
            name: "NotebookLM",
            category: "analisis",
            desc: "Asistente de IA que genera información y resúmenes a partir de tus documentos y fuentes.",
            link: "https://notebooklm.google.com/",
            price: "Gratis",
            priceClass: "free"
        },
        {
            id: 54,
            name: "Copy.ai",
            category: "generacion de texto",
            desc: "Genera textos persuasivos para marketing y ventas.",
            link: "https://www.copy.ai/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 55,
            name: "Writesonic",
            category: "generacion de texto",
            desc: "Herramienta para generación de contenido textual de forma rápida y optimizada para SEO.",
            link: "https://writesonic.com/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 56,
            name: "Pika",
            category: "generacion de video",
            desc: "Herramienta para la creación de clips de video cortos y animaciones a partir de texto o imágenes.",
            link: "https://pika.art/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 57,
            name: "CapCut AI",
            category: "generacion de video",
            desc: "Editor de video integrado con TikTok. Utiliza IA para transformar videos largos en clips cortos virales.",
            link: "https://www.capcut.com/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 58,
            name: "Opus Clip",
            category: "generacion de video",
            desc: "Herramienta de recorte de IA que transforma videos largos en clips cortos y listos para viralizarse.",
            link: "https://www.opus.pro/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 59,
            name: "Tabnine",
            category: "programacion",
            desc: "Herramienta de completado de código impulsada por IA que se adapta a hábitos de codificación. Funciona offline/online.",
            link: "https://www.tabnine.com/",
            price: "Freemium",
            priceClass: "freemium"
        },
        {
            id: 60,
            name: "Replit Ghostwriter",
            category: "programacion",
            desc: "Asistente de codificación basado en IA en el IDE en la nube Replit. Proporciona completaciones y depuración.",
            link: "https://replit.com/",
            price: "Freemium",
            priceClass: "freemium"
        }
    ];

    // 2. Referencias DOM
    const grid = document.getElementById('toolsGrid');
    const categoryContainer = document.getElementById('categoryContainer');
    const searchInput = document.getElementById('globalSearch');
    const chatToggle = document.getElementById('chatToggle');
    const closeChat = document.getElementById('closeChat');
    const chatInterface = document.getElementById('chatInterface');
    const chatForm = document.getElementById('chatForm');
    const chatMessages = document.getElementById('chatMessages');
    const userQueryInput = document.getElementById('userQuery');

    // 3. Renderizado de Contenido
    function init() {
        renderCategories();
        renderTools(dbTools); // Carga inicial completa
    }

    function renderCategories() {
        // Extraer categorías únicas
        const categories = ['all', ...new Set(dbTools.map(item => item.category))];

        // Limpiar contenedor
        categoryContainer.innerHTML = '';

        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = cat === 'all' ? 'chip active' : 'chip';
            // Formatear nombre de categoría (capitalización)
            btn.textContent = cat === 'all' ? 'Todo' : cat.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            btn.dataset.category = cat;

            btn.addEventListener('click', (e) => {
                // Actualizar estado visual
                document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
                e.target.classList.add('active');

                // Filtrar datos
                const selectedCat = e.target.dataset.category;
                const filtered = selectedCat === 'all'
                    ? dbTools
                    : dbTools.filter(item => item.category === selectedCat);
                renderTools(filtered);
            });

            categoryContainer.appendChild(btn);
        });
    }

    function renderTools(data) {
        grid.innerHTML = '';

        if (data.length === 0) {
            grid.innerHTML = '<div class="no-results">No se encontraron herramientas.</div>';
            return;
        }

        data.forEach(tool => {
            const card = document.createElement('article');
            card.className = 'tool-card';
            card.innerHTML = `
                <div>
                    <span class="tool-category">${tool.category}</span>
                    <div class="card-header">
                        <h2 class="tool-title">${tool.name}</h2>
                        <span class="badge ${tool.priceClass}">${tool.price}</span>
                    </div>
                    <p class="tool-desc">${tool.desc}</p>
                </div>
                <div class="card-footer">
                    <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="visit-btn">
                        Visitar herramienta ↗
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // 4. Lógica de Búsqueda (Search)
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = dbTools.filter(tool =>
            tool.name.toLowerCase().includes(term) ||
            tool.desc.toLowerCase().includes(term) ||
            tool.category.toLowerCase().includes(term)
        );
        renderTools(filtered);
    });

    // 5. Lógica del Chatbot (Heurística Simple)
    function toggleChat() {
        chatInterface.classList.toggle('hidden');
        if (!chatInterface.classList.contains('hidden')) {
            userQueryInput.focus();
        }
    }

    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `message ${sender}`;
        div.innerHTML = `<p>${text}</p>`;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function processAIQuery(query) {
        const q = query.toLowerCase();
        let matches = [];
        let response = "";

        // Análisis de intención simple extendido
        if (q.includes("video") || q.includes("youtube") || q.includes("tiktok") || q.includes("cine")) {
            matches = dbTools.filter(t => t.category.includes("video"));
            response = "Para producción de video, avatares y clips virales, te sugiero: ";
        } else if (q.includes("texto") || q.includes("escribir") || q.includes("redactar") || q.includes("copy")) {
            matches = dbTools.filter(t => t.category.includes("texto") || t.category.includes("marketing"));
            response = "Para redacción, copywriting y generación de texto: ";
        } else if (q.includes("imagen") || q.includes("foto") || q.includes("dibujar") || q.includes("diseño")) {
            matches = dbTools.filter(t => t.category.includes("imagen") || t.category.includes("creatividad"));
            response = "Para arte visual, diseño y generación de imágenes: ";
        } else if (q.includes("codigo") || q.includes("programar") || q.includes("code") || q.includes("dev")) {
            matches = dbTools.filter(t => t.category.includes("programacion") || t.category.includes("desarrollo"));
            response = "Para acelerar tu desarrollo de software: ";
        } else if (q.includes("musica") || q.includes("cancion") || q.includes("audio") || q.includes("voz")) {
            matches = dbTools.filter(t => t.category.includes("musica"));
            response = "Para generación de música y voz: ";
        } else if (q.includes("datos") || q.includes("analisis") || q.includes("sql") || q.includes("excel")) {
            matches = dbTools.filter(t => t.category.includes("datos") || t.category.includes("finanzas"));
            response = "Para análisis de datos y finanzas: ";
        } else {
            response = "No estoy seguro. Prueba con 'video', 'texto', 'imágenes', 'código', 'música' o 'datos'.";
        }

        if (matches.length > 0) {
            // Mostrar solo los primeros 5 para no saturar el chat
            const topMatches = matches.slice(0, 5);
            const toolNames = topMatches.map(m => `<b>${m.name}</b>`).join(", ");
            response += toolNames + (matches.length > 5 ? " y más..." : ".");
        }

        // Simular latencia de "pensamiento"
        setTimeout(() => {
            addMessage(response, 'bot');
        }, 600);
    }

    chatToggle.addEventListener('click', toggleChat);
    closeChat.addEventListener('click', toggleChat);

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = userQueryInput.value.trim();
        if (!query) return;

        addMessage(query, 'user');
        userQueryInput.value = '';
        processAIQuery(query);
    });

    // Iniciar aplicación
    init();
});