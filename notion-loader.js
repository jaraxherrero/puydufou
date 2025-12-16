// Script para manejar el iframe de Notion dinámicamente
document.addEventListener('DOMContentLoaded', function() {
    const docLinks = document.querySelectorAll('.doc-menu-link');
    const notionFrame = document.getElementById('notion-iframe');
    
    // URLs de Notion para cada sección (necesitarás los enlaces específicos de cada página)
    const notionUrls = {
        'objetivos': 'https://marshy-aardvark-2d2.notion.site/Documentaci-n-T-cnica-Puy-dou-Fou-29b912398ae08115a160c9b7af2ea932',
        'modelo': 'https://marshy-aardvark-2d2.notion.site/Documentaci-n-T-cnica-Puy-dou-Fou-29b912398ae08115a160c9b7af2ea932',
        'arquitectura': 'https://marshy-aardvark-2d2.notion.site/Documentaci-n-T-cnica-Puy-dou-Fou-29b912398ae08115a160c9b7af2ea932',
        'persona': 'https://marshy-aardvark-2d2.notion.site/Documentaci-n-T-cnica-Puy-dou-Fou-29b912398ae08115a160c9b7af2ea932',
        'competidores': 'https://marshy-aardvark-2d2.notion.site/Documentaci-n-T-cnica-Puy-dou-Fou-29b912398ae08115a160c9b7af2ea932',
        'analisis': 'https://marshy-aardvark-2d2.notion.site/Documentaci-n-T-cnica-Puy-dou-Fou-29b912398ae08115a160c9b7af2ea932',
        'roadmap': 'https://marshy-aardvark-2d2.notion.site/Documentaci-n-T-cnica-Puy-dou-Fou-29b912398ae08115a160c9b7af2ea932',
        'journeys': 'https://marshy-aardvark-2d2.notion.site/Documentaci-n-T-cnica-Puy-dou-Fou-29b912398ae08115a160c9b7af2ea932',
        'journey-carrito': 'https://marshy-aardvark-2d2.notion.site/Documentaci-n-T-cnica-Puy-dou-Fou-29b912398ae08115a160c9b7af2ea932',
        'journey-previsita': 'https://marshy-aardvark-2d2.notion.site/Documentaci-n-T-cnica-Puy-dou-Fou-29b912398ae08115a160c9b7af2ea932',
        'journey-visita': 'https://marshy-aardvark-2d2.notion.site/Documentaci-n-T-cnica-Puy-dou-Fou-29b912398ae08115a160c9b7af2ea932',
        'journey-postvisita': 'https://marshy-aardvark-2d2.notion.site/Documentaci-n-T-cnica-Puy-dou-Fou-29b912398ae08115a160c9b7af2ea932',
        'loyalty': 'https://marshy-aardvark-2d2.notion.site/Documentaci-n-T-cnica-Puy-dou-Fou-29b912398ae08115a160c9b7af2ea932',
        'data360': 'https://marshy-aardvark-2d2.notion.site/Documentaci-n-T-cnica-Puy-dou-Fou-29b912398ae08115a160c9b7af2ea932'
    };
    
    docLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            docLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the section ID
            const section = this.dataset.section;
            
            // Load corresponding Notion page in iframe
            if (notionUrls[section]) {
                notionFrame.src = notionUrls[section];
            }
        });
    });
    
    // Submenu toggle functionality
    document.querySelectorAll('.has-submenu > .doc-menu-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const parentLi = this.parentElement;
            parentLi.classList.toggle('open');
        });
    });
});
