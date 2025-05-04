const toolsData = [
    {
        "id": 1,
        "title": "Blender",
        "creator": "Blender Foundation",
        "image": "https://www.blender.org/wp-content/uploads/2022/12/blender_logo_no_socket.svg",
        "description": "Free and open-source 3D creation suite supporting modeling, rigging, animation, simulation, rendering, and more.",
        "downloadUrl": "https://www.blender.org/download/"
    },
    {
        "id": 2,
        "title": "Adobe Animate",
        "creator": "Adobe Inc.",
        "image": "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/max2020/mnemonics/animate.svg",
        "description": "Professional tool for creating vector animations, interactive content, and HTML5 canvas animations.",
        "downloadUrl": "https://www.adobe.com/products/animate.html"
    },
    {
        "id": 3,
        "title": "Autodesk Maya",
        "creator": "Autodesk",
        "image": "https://www.autodesk.com/content/dam/autodesk/www/products/maya/overview-page/maya-2024-logo-256x256.png",
        "description": "Industry-standard 3D animation, modeling, simulation, and rendering software for film and games.",
        "downloadUrl": "https://www.autodesk.com/products/maya/overview"
    },
    {
        "id": 4,
        "title": "Toon Boom Harmony",
        "creator": "Toon Boom Animation",
        "image": "https://www.toonboom.com/themes/custom/toonboom/favicon.ico",
        "description": "Professional 2D animation software used in TV shows and feature films.",
        "downloadUrl": "https://www.toonboom.com/products/harmony"
    },
    {
        "id": 5,
        "title": "Cinema 4D",
        "creator": "Maxon",
        "image": "https://www.maxon.net/favicon.ico",
        "description": "3D modeling, animation, and rendering software known for its ease of use and motion graphics tools.",
        "downloadUrl": "https://www.maxon.net/en/cinema-4d"
    },
    {
        "id": 6,
        "title": "Dragonframe",
        "creator": "DZED Systems",
        "image": "https://www.dragonframe.com/wp-content/uploads/2019/01/dragonframe-logo.png",
        "description": "Stop-motion animation software with advanced camera control and frame-by-frame editing.",
        "downloadUrl": "https://www.dragonframe.com/downloads/"
    },
    {
        "id": 7,
        "title": "Krita",
        "creator": "Krita Foundation",
        "image": "https://krita.org/wp-content/uploads/2021/03/krita-logo.png",
        "description": "Free digital painting and 2D animation tool with powerful brush engines and timeline features.",
        "downloadUrl": "https://krita.org/en/download/krita-desktop/"
    },
    {
        "id": 8,
        "title": "OpenToonz",
        "creator": "Digital Video S.p.A.",
        "image": "https://opentoonz.github.io/e/images/logo.png",
        "description": "Open-source 2D animation software used by Studio Ghibli, with vector and raster support.",
        "downloadUrl": "https://opentoonz.github.io/e/"
    },
    {
        "id": 9,
        "title": "Synfig Studio",
        "creator": "Synfig Team",
        "image": "https://www.synfig.org/wp-content/uploads/2020/06/synfig_icon.png",
        "description": "Free and open-source 2D vector-based animation software with bone rigging.",
        "downloadUrl": "https://www.synfig.org/download/"
    },
    {
        "id": 10,
        "title": "Pencil2D",
        "creator": "Pencil2D Team",
        "image": "https://www.pencil2d.org/images/logo.png",
        "description": "Simple, lightweight tool for traditional hand-drawn 2D animation.",
        "downloadUrl": "https://www.pencil2d.org/download/"
    },
    {
        "id": 11,
        "title": "Adobe After Effects",
        "creator": "Adobe Inc.",
        "image": "https://www.adobe.com/content/dam/cc/icons/after-effects.svg",
        "description": "Motion graphics and visual effects software for compositing and animation.",
        "downloadUrl": "https://www.adobe.com/products/aftereffects.html"
    },
    {
        "id": 12,
        "title": "Autodesk 3ds Max",
        "creator": "Autodesk",
        "image": "https://www.autodesk.com/content/dam/autodesk/www/products/3ds-max/overview-page/3ds-max-2024-logo-256x256.png",
        "description": "3D modeling, animation, and rendering software for games and architectural visualization.",
        "downloadUrl": "https://www.autodesk.com/products/3ds-max/overview"
    },
    {
        "id": 13,
        "title": "Houdini",
        "creator": "SideFX",
        "image": "https://www.sidefx.com/wp-content/uploads/2023/03/Houdini_Logo_Orange.png",
        "description": "Procedural 3D animation and VFX software used in film and TV.",
        "downloadUrl": "https://www.sidefx.com/download/"
    },
    {
        "id": 14,
        "title": "TVPaint Animation",
        "creator": "TVPaint Developpement",
        "image": "https://www.tvpaint.com/img/logo/tvpaint-logo.png",
        "description": "Professional 2D animation software with bitmap drawing tools.",
        "downloadUrl": "https://www.tvpaint.com/v2/content/article/download-tvpaint-animation.php"
    },
    {
        "id": 15,
        "title": "Moho (Anime Studio)",
        "creator": "Lost Marble",
        "image": "https://www.lostmarble.com/moho/images/moho-logo.png",
        "description": "2D animation software with bone rigging and vector-based tools.",
        "downloadUrl": "https://www.lostmarble.com/moho/"
    },
    {
        "id": 16,
        "title": "Spine",
        "creator": "Esoteric Software",
        "image": "https://esotericsoftware.com/img/spine-logo.png",
        "description": "2D skeletal animation tool for game developers.",
        "downloadUrl": "https://esotericsoftware.com/spine-download"
    },
    {
        "id": 17,
        "title": "CrazyTalk Animator",
        "creator": "Reallusion",
        "image": "https://www.reallusion.com/company/images/logo.png",
        "description": "2D character animation software with facial puppeteering.",
        "downloadUrl": "https://www.reallusion.com/crazytalk-animator/"
    },
    {
        "id": 18,
        "title": "Cascadeur",
        "creator": "Nekki",
        "image": "https://cascadeur.com/images/logo.png",
        "description": "Physics-based 3D animation tool for realistic character movements.",
        "downloadUrl": "https://cascadeur.com/download"
    },
    {
        "id": 19,
        "title": "Storyboard Pro",
        "creator": "Toon Boom Animation",
        "image": "https://www.toonboom.com/themes/custom/toonboom/favicon.ico",
        "description": "Professional storyboard and animatic creation software.",
        "downloadUrl": "https://www.toonboom.com/products/storyboard-pro"
    },
    {
        "id": 20,
        "title": "HitFilm Pro",
        "creator": "FXhome",
        "image": "https://fxhome.com/wp-content/themes/fxhome/assets/img/logo.svg",
        "description": "Video editing and VFX software with animation capabilities.",
        "downloadUrl": "https://fxhome.com/product/hitfilm"
    },
    {
        "id": 21,
        "title": "TupiTube",
        "creator": "MaeFloresta",
        "image": "https://www.maefloresta.com/tupi/img/logo.png",
        "description": "Free 2D animation tool for beginners and kids, with vector and raster support.",
        "downloadUrl": "https://www.maefloresta.com/tupi/download.html"
    },
    {
        "id": 22,
        "title": "Wick Editor",
        "creator": "Wicklet LLC",
        "image": "https://www.wickeditor.com/static/images/logo.png",
        "description": "Free web-based tool for creating animations and games with simple coding.",
        "downloadUrl": "https://www.wickeditor.com/#/download"
    },
    {
        "id": 23,
        "title": "DigiCel FlipBook",
        "creator": "DigiCel Inc.",
        "image": "https://www.digicelinc.com/images/flipbook-logo.png",
        "description": "Traditional animation software that simulates hand-drawn frame-by-frame techniques.",
        "downloadUrl": "https://www.digicelinc.com/flipbook.htm"
    },
    {
        "id": 24,
        "title": "Animaker",
        "creator": "Animaker Inc.",
        "image": "https://www.animaker.com/static/images/animaker-logo.svg",
        "description": "Online animation tool with pre-made templates for explainer videos and presentations.",
        "downloadUrl": "https://www.animaker.com/"
    },
    {
        "id": 25,
        "title": "Moovly",
        "creator": "Moovly",
        "image": "https://www.moovly.com/hubfs/Moovly_2020/img/logo.svg",
        "description": "Cloud-based platform for creating animated videos and whiteboard animations.",
        "downloadUrl": "https://www.moovly.com/products/moovly-video-editor"
    },
    {
        "id": 26,
        "title": "Stick Nodes",
        "creator": "StickNodes",
        "image": "https://www.sticknodes.com/wp-content/uploads/2020/05/sticknodes-logo.png",
        "description": "Stick-figure animation app for creating frame-by-frame animations easily.",
        "downloadUrl": "https://www.sticknodes.com/download/"
    },
    {
        "id": 27,
        "title": "Plask",
        "creator": "Plask Inc.",
        "image": "https://plask.ai/static/images/logo.png",
        "description": "AI-powered motion capture and animation tool for 3D characters.",
        "downloadUrl": "https://plask.ai/download"
    },
    {
        "id": 28,
        "title": "Cavalry",
        "creator": "Cavalry",
        "image": "https://cavalry.scenegroup.co/images/logo.png",
        "description": "2D animation tool designed for motion graphics artists.",
        "downloadUrl": "https://cavalry.scenegroup.co/download"
    },
    {
        "id": 29,
        "title": "Keyshape",
        "creator": "Keyshape",
        "image": "https://www.keyshapeapp.com/static/images/logo.svg",
        "description": "Vector animation software for creating interactive animations for the web.",
        "downloadUrl": "https://www.keyshapeapp.com/download/"
    },
    {
        "id": 30,
        "title": "Rive",
        "creator": "Rive",
        "image": "https://rive.app/static/images/logo.png",
        "description": "Real-time interactive animation tool for apps, games, and websites.",
        "downloadUrl": "https://rive.app/download/"
    },
    {
        "id": 31,
        "title": "Tahoma2D",
        "creator": "Tahoma2D Team",
        "image": "https://tahoma2d.org/images/logo.png",
        "description": "Fork of OpenToonz with additional features for 2D animation production.",
        "downloadUrl": "https://tahoma2d.org/download/"
    },
    {
        "id": 32,
        "title": "Stykz",
        "creator": "Stykz",
        "image": "https://www.stykz.net/static/images/logo.png",
        "description": "Simple stick-figure animation tool with onion skinning support.",
        "downloadUrl": "https://www.stykz.net/download"
    },
    {
        "id": 33,
        "title": "FlipaClip",
        "creator": "Visual Blasters LLC",
        "image": "https://flipaclip.com/static/images/logo.png",
        "description": "Mobile and desktop app for frame-by-frame animation with drawing tools.",
        "downloadUrl": "https://flipaclip.com/download"
    },
    {
        "id": 34,
        "title": "Aseprite",
        "creator": "David Capello",
        "image": "https://www.aseprite.org/assets/images/logo.png",
        "description": "Pixel art tool with animation features for sprites and game assets.",
        "downloadUrl": "https://www.aseprite.org/download/"
    },
    {
        "id": 35,
        "title": "Pivot Animator",
        "creator": "Peter Bone",
        "image": "https://pivotanimator.net/images/logo.png",
        "description": "Simple stick-figure animation software for beginners.",
        "downloadUrl": "https://pivotanimator.net/download"
    },
    {
        "id": 36,
        "title": "Stop Motion Studio",
        "creator": "Cateater",
        "image": "https://www.cateater.com/static/images/logo.png",
        "description": "Easy-to-use stop motion animation software for capturing frame-by-frame video.",
        "downloadUrl": "https://www.cateater.com/download"
    },
    {
        "id": 37,
        "title": "DragonBones",
        "creator": "DragonBones Team",
        "image": "https://dragonbones.github.io/images/logo.png",
        "description": "Free open-source 2D skeletal animation tool for game developers.",
        "downloadUrl": "https://dragonbones.github.io/download.html"
    },
    {
        "id": 38,
        "title": "Spriter Pro",
        "creator": "BrashMonkey",
        "image": "https://brashmonkey.com/wp-content/uploads/2018/05/spriter_logo.png",
        "description": "2D skeletal animation tool with real-time editing capabilities.",
        "downloadUrl": "https://brashmonkey.com/spriter-pro/"
    },
    {
        "id": 39,
        "title": "MotionBook",
        "creator": "MotionBook",
        "image": "https://motionbook.io/static/images/logo.png",
        "description": "Web-based animation tool with collaboration features for teams.",
        "downloadUrl": "https://motionbook.io/download"
    },
    {
        "id": 40,
        "title": "Anim8or",
        "creator": "Steven Glanville",
        "image": "https://www.anim8or.com/logo.png",
        "description": "Free 3D modeling and animation software for beginners.",
        "downloadUrl": "https://www.anim8or.com/download/"
    },
    {
        "id": 41,
        "title": "Unreal Engine",
        "creator": "Epic Games",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Unreal_Engine_Logo.svg/1200px-Unreal_Engine_Logo.svg.png",
        "description": "Powerful 3D creation tool with real-time animation capabilities for games and films.",
        "downloadUrl": "https://www.unrealengine.com/en-US/download"
    },
    {
        "id": 42,
        "title": "Unity",
        "creator": "Unity Technologies",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/1200px-Unity_Technologies_logo.svg.png",
        "description": "Game engine with robust animation tools and timeline for interactive content creation.",
        "downloadUrl": "https://unity.com/download"
    },
    {
        "id": 43,
        "title": "Daz 3D",
        "creator": "Daz Productions",
        "image": "https://www.daz3d.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/a/daz_logo_1.png",
        "description": "3D figure design and animation software with pre-rigged models for easy animation.",
        "downloadUrl": "https://www.daz3d.com/get_studio"
    },
    {
        "id": 44,
        "title": "Mixamo",
        "creator": "Adobe",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mixamo_logo.png/1200px-Mixamo_logo.png",
        "description": "Online auto-rigging and motion capture animation service for 3D characters.",
        "downloadUrl": "https://www.mixamo.com/"
    },
    {
        "id": 45,
        "title": "Duik Bassel",
        "creator": "Rainbox",
        "image": "https://rainboxprod.coop/wp-content/uploads/2020/06/duik-icon-256.png",
        "description": "After Effects plugin for advanced character rigging and animation.",
        "downloadUrl": "https://rainboxprod.coop/en/tools/duik/"
    },
    {
        "id": 46,
        "title": "Auto-Rig Pro",
        "creator": "Guillaume Laforge",
        "image": "https://www.autorigpro.com/wp-content/uploads/2018/03/arp_logo.png",
        "description": "Blender add-on for automatic character rigging with advanced controls.",
        "downloadUrl": "https://www.autorigpro.com/"
    },
    {
        "id": 47,
        "title": "Character Creator",
        "creator": "Reallusion",
        "image": "https://www.reallusion.com/character-creator/images/logo.png",
        "description": "3D character design and animation software with realistic morphing.",
        "downloadUrl": "https://www.reallusion.com/character-creator/"
    },
    {
        "id": 48,
        "title": "iClone",
        "creator": "Reallusion",
        "image": "https://www.reallusion.com/iclone/images/logo.png",
        "description": "Real-time 3D animation software with motion capture support.",
        "downloadUrl": "https://www.reallusion.com/iclone/"
    },
    {
        "id": 49,
        "title": "Marionette Studio",
        "creator": "Marionette",
        "image": "https://www.marionettestudio.com/wp-content/uploads/2021/03/logo.png",
        "description": "2D animation software with vector-based puppeteering tools.",
        "downloadUrl": "https://www.marionettestudio.com/download/"
    },
    {
        "id": 50,
        "title": "CACANi",
        "creator": "CACANi",
        "image": "https://www.cacani.sg/wp-content/uploads/2020/06/cacani_logo.png",
        "description": "2D animation software with automatic inbetweening technology.",
        "downloadUrl": "https://www.cacani.sg/download/"
    },
    {
        "id": 51,
        "title": "Esko Studio",
        "creator": "Esko",
        "image": "https://www.esko.com/en/Images/Esko_Logo_tcm87-18391.png",
        "description": "Packaging design software with 3D animation capabilities.",
        "downloadUrl": "https://www.esko.com/en/products/studio"
    },
    {
        "id": 52,
        "title": "Clara.io",
        "creator": "Exocortex",
        "image": "https://clara.io/static/img/logo.png",
        "description": "Online 3D modeling, animation and rendering tool.",
        "downloadUrl": "https://clara.io/"
    },
    {
        "id": 53,
        "title": "KeyShot",
        "creator": "Luxion",
        "image": "https://www.keyshot.com/wp-content/uploads/2020/02/keyshot-logo.png",
        "description": "3D rendering and animation software with real-time visualization.",
        "downloadUrl": "https://www.keyshot.com/download/"
    },
    {
        "id": 54,
        "title": "Terragen",
        "creator": "Planetside Software",
        "image": "https://planetside.co.uk/wp-content/uploads/2021/03/terragen4_logo.png",
        "description": "Landscape generation and animation software for realistic environments.",
        "downloadUrl": "https://planetside.co.uk/products/terragen"
    },
    {
        "id": 55,
        "title": "Flowscape",
        "creator": "Pixel Forest",
        "image": "https://flowscapegame.com/wp-content/uploads/2018/08/logo.png",
        "description": "3D landscape painting and animation tool for quick scene creation.",
        "downloadUrl": "https://flowscapegame.com/"
    },
    {
        "id": 56,
        "title": "Verge3D",
        "creator": "Soft8Soft",
        "image": "https://www.soft8soft.com/wp-content/uploads/2018/10/verge3d_logo.png",
        "description": "3D web animation toolkit for Blender, 3ds Max and Maya.",
        "downloadUrl": "https://www.soft8soft.com/get-verge3d/"
    },
    {
        "id": 57,
        "title": "Armory3D",
        "creator": "Armory",
        "image": "https://armory3d.org/static/img/logo.png",
        "description": "Open-source 3D game engine with animation tools for Blender.",
        "downloadUrl": "https://armory3d.org/download"
    },
    {
        "id": 58,
        "title": "Manim",
        "creator": "3Blue1Brown",
        "image": "https://www.manim.community/static/logo.png",
        "description": "Mathematical animation engine for creating explanatory math videos.",
        "downloadUrl": "https://www.manim.community/"
    },
    {
        "id": 59,
        "title": "Enve",
        "creator": "Maurycy Liebner",
        "image": "https://maurycyliebner.github.io/img/enve_logo.png",
        "description": "Open-source 2D animation software for vector-based motion graphics.",
        "downloadUrl": "https://maurycyliebner.github.io/"
    },
    {
        "id": 60,
        "title": "Grease Pencil (Blender)",
        "creator": "Blender Foundation",
        "image": "https://www.blender.org/wp-content/uploads/2022/12/blender_logo_no_socket.svg",
        "description": "2D animation toolset integrated into Blender for storyboarding and animation.",
        "downloadUrl": "https://www.blender.org/download/"
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const toolsGrid = document.getElementById('toolsGrid');
const toolModal = document.getElementById('toolModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalToolTitle = document.getElementById('modalToolTitle');
const modalToolCreator = document.getElementById('modalToolCreator');
const modalToolDescription = document.getElementById('modalToolDescription');
const modalDownloadBtn = document.getElementById('modalDownloadBtn');

// Current selected tool
let currentTool = null;

// Initialize the page with all tools
function initPage() {
    renderTools(toolsData);
}

// Render tools to the grid
function renderTools(tools) {
    toolsGrid.innerHTML = '';
    
    if (tools.length === 0) {
        const noResults = resultsContainer.querySelector('.no-results');
        if (noResults) {
            noResults.style.display = 'block';
        }
        return;
    }
    
    const noResults = resultsContainer.querySelector('.no-results');
    if (noResults) {
        noResults.style.display = 'none';
    }
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-header">
                <img src="${tool.image}" alt="${tool.title}">
                <div class="tool-title">${tool.title}</div>
            </div>
            <div class="tool-creator">By ${tool.creator}</div>
            <div class="tool-buttons">
                <button class="xp-button view-more" data-id="${tool.id}">View More</button>
                <button class="xp-button download" data-id="${tool.id}">Download</button>
            </div>
        `;
        toolsGrid.appendChild(toolCard);
    });
    
    // Add event listeners to buttons
    document.querySelectorAll('.view-more').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const toolId = parseInt(e.target.getAttribute('data-id'));
            showToolDetails(toolId);
        });
    });
    
    document.querySelectorAll('.download').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const toolId = parseInt(e.target.getAttribute('data-id'));
            downloadTool(toolId);
        });
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        renderTools(toolsData);
        return;
    }
    
    const filteredTools = toolsData.filter(tool => 
        tool.title.toLowerCase().includes(searchTerm) || 
        tool.creator.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm)
    );
    
    renderTools(filteredTools);
});

// Show tool details in modal
function showToolDetails(toolId) {
    currentTool = toolsData.find(tool => tool.id === toolId);
    
    if (!currentTool) return;
    
    modalTitle.textContent = currentTool.title;
    modalToolTitle.textContent = currentTool.title;
    modalToolCreator.textContent = `By ${currentTool.creator}`;
    modalToolDescription.textContent = currentTool.description;
    modalImage.src = currentTool.image;
    modalDownloadBtn.setAttribute('data-id', currentTool.id);
    
    toolModal.style.display = 'flex';
}

// Download tool
function downloadTool(toolId) {
    const tool = toolsData.find(tool => tool.id === toolId);
    if (tool) {
        window.open(tool.downloadUrl, '_blank');
    }
}

// Close modal
closeModal.addEventListener('click', () => {
    toolModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === toolModal) {
        toolModal.style.display = 'none';
    }
});

// Initialize the page
initPage();
