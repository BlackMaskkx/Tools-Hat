// Sample JSON data for tools
const toolsData = [
    {
        id: 1,
        title: "File Explorer",
        creator: "Microsoft",
        image: "https://win98icons.alexmeub.com/icons/png/explorer-4.png",
        description: "Browse and manage your files and folders with this classic Windows XP file explorer.",
        downloadUrl: "https://example.com/download/1"
    },
    {
        id: 2,
        title: "Notepad",
        creator: "Microsoft",
        image: "https://win98icons.alexmeub.com/icons/png/notepad-4.png",
        description: "Simple text editor for creating and editing plain text files. Supports basic formatting.",
        downloadUrl: "https://example.com/download/2"
    },
    {
        id: 3,
        title: "Calculator",
        creator: "Microsoft",
        image: "https://win98icons.alexmeub.com/icons/png/calculator-1.png",
        description: "Standard calculator for basic arithmetic operations. Includes scientific mode.",
        downloadUrl: "https://example.com/download/3"
    },
    {
        id: 4,
        title: "Paint",
        creator: "Microsoft",
        image: "https://win98icons.alexmeub.com/icons/png/paint-4.png",
        description: "Create and edit bitmap images with various drawing tools and colors.",
        downloadUrl: "https://example.com/download/4"
    },
    {
        id: 5,
        title: "Media Player",
        creator: "Microsoft",
        image: "https://win98icons.alexmeub.com/icons/png/media_player-4.png",
        description: "Play audio and video files with this classic media player. Supports multiple formats.",
        downloadUrl: "https://example.com/download/5"
    },
    {
        id: 6,
        title: "Internet Explorer",
        creator: "Microsoft",
        image: "https://win98icons.alexmeub.com/icons/png/explorer_web-4.png",
        description: "Browse the internet with this classic web browser from the XP era.",
        downloadUrl: "https://example.com/download/6"
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
