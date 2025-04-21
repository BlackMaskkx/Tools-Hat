// Sample JSON data for tools
const toolsData = [
    {
        id: 1,
        title: "7-Zip",
        creator: "Igor Pavlov",
        image: "https://www.7-zip.org/7ziplogo.png",
        description: "A free, open-source file archiver with high compression ratio. Supports multiple formats like ZIP, RAR, TAR, and its own 7z.",
        downloadUrl: "https://7-zip.org/download.html"
    },
    {
        id: 2,
        title: "VLC Media Player",
        creator: "VideoLAN organization",
        image: "https://images.videolan.org/images/icons-VLC/vlc.mini.svg",
        description: "A versatile, open-source media player that supports almost all video and audio formats without additional codecs.",
        downloadUrl: "https://www.videolan.org/vlc/"
    },
    {
        id: 3,
        title: "Notepad++",
        creator: "Dan Ho",
        image: "https://notepad-plus-plus.org/images/logo.svg",
        description: "A powerful text and code editor with syntax highlighting, tabbed editing, and plugin support for programmers.",
        downloadUrl: "https://notepad-plus-plus.org/downloads/"
    },
    {
        id: 4,
        title: "OBS Studio",
        creator: "Not found",
        image: "https://obsproject.com/assets/images/new_icon_small.png",
        description: "Free, open-source software for video recording and live streaming, popular among gamers and content creators.",
        downloadUrl: "https://obsproject.com/"
    },
    {
        id: 5,
        title: "VLC Media Player",
        creator: "VideoLAN",
        image: "https://www.videolan.org/images/vlc-256.png",
        description: "A free and open-source multimedia player that plays most multimedia files and streaming protocols.",
        downloadUrl: "https://www.videolan.org/vlc/"
    },
    {
        id: 6,
        title: "VS Code",
        creator: "Microsoft",
        image: "https://code.visualstudio.com/assets/images/code-stable.png",
        description: "A lightweight but powerful source code editor with built-in Git support and extensions.",
        downloadUrl: "https://code.visualstudio.com/download"
    },
    {
        id: 7,
        title: "DaVinci Resolve",
        creator: "Blackmagic Design",
        image: "https://www.blackmagicdesign.com/products/davinciresolve/resources/img/logo.png",
        description: "Professional video editing and color correction software with a free version available.",
        downloadUrl: "https://www.blackmagicdesign.com/products/davinciresolve/"
    },
    {
        id: 8,
        title: "Krita",
        creator: "Krita Foundation",
        image: "https://media-hosting.imagekit.io/cf26f9bca69c4611/1000619514.jpg?Expires=1839808068&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RV-a~QyLWCFxxjyjplLMPPr-mLCihYcwqtmFlePi7ndV5WAZbGA5Ak7DBle01UTSX5PHdglHW5JtWwWkOaLEvkGWBumNCUY8R~TMVFxKIW97dBCL7O01jkrfYOOcLUJ55n3Bv4n6S-Wl5Sv293HCXPF0V7sRmc1no5yDUi3YLRnFZzZ8ltRaA532LqTKKp8OtG47sJ-j6eunqxx2gqP6M~Rxp2RnpVYdFMogLecL2CU9BqRxCSkRo0IyL~BSMOwZ9-V73AJD2~SeXla6eS8CipWm5QzO8GytJzsyowXsfRktxhiSSHfjt2bMXV6-l8C9niXLg70T-sfj1-5w~k-jyA__",
        description: "A free and open-source digital painting software for concept art and illustration.",
        downloadUrl: "https://krita.org/en/download/krita-desktop/"
    },
    {
        id: 9,
        title: "Notion",
        creator: "Notion Labs",
        image: "https://media-hosting.imagekit.io/fc81158bc66e42d7/1000619515.jpg?Expires=1839808192&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sB1yiPo6JxIgCmp8eeBN8yTrCSw6weicJOYTvjTyoxxPbcO9etNGYvlLsq3dibMg1pwUb8d6t5AOgDkHJJY9OX8gyOgK2JpBQDvQs~hFMIWTyWDDeaAax7~AkN555xT2nRmFWKyfJWVQNaBekIebL4SIEdRzmW3aMrDvMWWC9nA2CfpLBPLlPoBMpgsEQtKeMf8P9WINyFJG7DWMo8Al5LCHTWWL6R3FnqqkMWxCqyr-l-OWy3hZNGFV7hRzJtCdSPRHCaGsMnaek3pBIvHXDBA-5YtX64mASeWuSM1V3XBF8wdqJM6EPLpoHL5-7~BS0MQnu3GLzV~CIHli3tWEmg__",
        description: "An all-in-one workspace for notes, tasks, wikis, and databases.",
        downloadUrl: "https://www.notion.so/desktop"
    },
    {
        id: 10,
        title: "GIMP",
        creator: "The GIMP Development Team",
        image: "https://www.gimp.org/images/frontpage/wilber-logo.png",
        description: "A free and open-source raster graphics editor for image manipulation and retouching.",
        downloadUrl: "https://www.gimp.org/downloads/"
    },
    {
        id: 11,
        title: "Audacity",
        creator: "Audacity Team",
        image: "https://media-hosting.imagekit.io/8173b00ef8c549d6/1000619517.jpg?Expires=1839808302&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kate8q~JUcJSXvnVrcuQd51Ij3tBbg0ve~lUAobHubTDnyv~iMZ0ouWf~RVf4F1k5sm0GsnMQTCkS7~kQzz25lhX8nDVyLxZoh501cwgey8~JVp59J-lUFPFTQNgI47tGyjDZyuPMlaZdfhk4koFpd0iKcQl~qs6SB79O1lE6geqVt0gQXSNPa0kLIKYD~knph94ewgNlniLrSxk06QOLp6WvYLtNCwsdjA60NOsmVBpGkpUjy4ODms66H31XuQJ0u-SGnzOronHTQfwbtt6-Oa7~~6kNW2fs1hDZ1uG2BcsYz1oPstVsNKPc8IpQTPgQCskQEGnjaXTWr3YXlH4Iw__",
        description: "A free, open-source audio editor and recorder with multi-track support.",
        downloadUrl: "https://www.audacityteam.org/download/"
    },
    {
        id: 12,
        title: "Shotcut",
        creator: "Meltytech, LLC",
        image: "https://media-hosting.imagekit.io/07958372fc924a86/1000619516.jpg?Expires=1839808238&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0cv-FKR5x7LXvU~HBPXj9Dt8jZdJuBEyRrUAlN3o522hfDAy4MQMrsB0YjCOH96u8Mgo0mvajRq5hQVrz56M6k5hvSKtDahf-Oh5vQmmZ1hMldp0o1wXR~78wsqLVpbBhExOvKQzkDG3WDZZCMrKwN30qEBQCf4JGNyOXkrFlnwUfsLviWAVxecAL0ZFBmZWVEj~uJAUYo10qqL~91Fk5rV~xXuoADo1PzXH2edprkjhDuKbi6lYgv9vqUpYF8W2avtCOCg-ds-cbD9Psw~bbv2utq0R2xNZ7fgMp3YKMD7VJrsAlluAzWWiU3ln9M9~wwOwQlZ8wP6cwMTxIbaR4Q__",
        description: "A free, open-source, cross-platform video editor with a wide range of features.",
        downloadUrl: "https://shotcut.org/download/"
    },
    {
        id: 13,
        title: "Thunderbird",
        creator: "Mozilla Foundation",
        image: "https://www.thunderbird.net/media/img/thunderbird/thunderbird-256.png",
        description: "A free email client with advanced filtering, encryption, and customization options.",
        downloadUrl: "https://www.thunderbird.net/en-US/"
    },
    {
        id: 14,
        title: "Bitwarden",
        creator: "Bitwarden Inc.",
        image: "https://bitwarden.com/images/logo/icon.png",
        description: "A free and secure password manager for storing and managing credentials.",
        downloadUrl: "https://bitwarden.com/download/"
    },
    {
        id: 15,
        title: "LibreOffice",
        creator: "The Document Foundation",
        image: "https://es.libreoffice.org/themes/libreofficenew/img/logo.png",
        description: "A free, open-source office suite alternative to Microsoft Office, including Writer, Calc, Impress, and more.",
        downloadUrl: "https://www.libreoffice.org/download/"
    },
    {
        id: 16,
        title: "Blender",
        creator: "Blender Foundation",
        image: "https://sdmntprwestus2.oaiusercontent.com/files/00000000-cb9c-61f8-bfaf-580b2521b090/raw?se=2025-04-21T00%3A46%3A24Z&sp=r&sv=2024-08-04&sr=b&scid=97baeabc-ca6c-5dc5-92de-df466aaff899&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-20T17%3A27%3A03Z&ske=2025-04-21T17%3A27%3A03Z&sks=b&skv=2024-08-04&sig=d13xsQvaPfF16FH8zwEj8Vlf/aMBpg%2Bb3dV/dDRxAzc%3D",
        description: "A professional 3D modeling, animation, and rendering tool, free and open-source.",
        downloadUrl: "https://www.blender.org/download/"
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
        resultsContainer.querySelector('.no-results').style.display = 'block';
        return;
    }
    
    resultsContainer.querySelector('.no-results').style.display = 'none';
    
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
