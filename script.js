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
    "id": 17,
    "title": "HandBrake",
    "creator": "HandBrake Team",
    "image": "https://handbrake.fr/img/logo.png",
    "description": "A free, open-source video transcoder for converting video files into various formats.",
    "downloadUrl": "https://handbrake.fr/downloads.php"
},
{
    "id": 18,
    "title": "qBittorrent",
    "creator": "The qBittorrent Project",
    "image": "https://www.qbittorrent.org/images/qbittorrent-logo.svg",
    "description": "A free, lightweight, and ad-free BitTorrent client with a built-in search engine.",
    "downloadUrl": "https://www.qbittorrent.org/download.php"
},
{
    "id": 19,
    "title": "Greenshot",
    "creator": "Greenshot",
    "image": "https://greenshot.org/wp-content/uploads/2017/03/Greenshot_Logo_248x248.png",
    "description": "A free screenshot tool with annotation features and quick sharing options.",
    "downloadUrl": "https://getgreenshot.org/downloads/"
},
{
    "id": 20,
    "title": "FileZilla",
    "creator": "Tim Kosse",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/FileZilla_logo.svg/1200px-FileZilla_logo.svg.png",
    "description": "A free, open-source FTP client for file transfers between local and remote servers.",
    "downloadUrl": "https://filezilla-project.org/download.php"
},
{
    "id": 21,
    "title": "WinRAR",
    "creator": "Eugene Roshal",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/WinRAR_logo_icon.svg/1200px-WinRAR_logo_icon.svg.png",
    "description": "A file archiver utility for Windows with support for RAR, ZIP, and other formats.",
    "downloadUrl": "https://www.win-rar.com/download.html"
},
{
    "id": 22,
    "title": "Paint.NET",
    "creator": "dotPDN LLC",
    "image": "https://www.getpaint.net/images/logo.png",
    "description": "A free image and photo editing software with layers, effects, and plugins.",
    "downloadUrl": "https://www.getpaint.net/download.html"
},
{
    "id": 23,
    "title": "foobar2000",
    "creator": "Peter Pawlowski",
    "image": "https://www.foobar2000.org/images/foobar2000-logo.png",
    "description": "A customizable audio player for Windows with support for multiple formats.",
    "downloadUrl": "https://www.foobar2000.org/download"
},
{
    "id": 24,
    "title": "Calibre",
    "creator": "Kovid Goyal",
    "image": "https://calibre-ebook.com/images/calibre-logo.svg",
    "description": "A free e-book management tool for organizing, converting, and syncing e-books.",
    "downloadUrl": "https://calibre-ebook.com/download"
},
{
    "id": 25,
    "title": "BalenaEtcher",
    "creator": "Balena",
    "image": "https://www.balena.io/etcher/assets/images/etcher.svg",
    "description": "A tool for flashing OS images to SD cards and USB drives safely.",
    "downloadUrl": "https://www.balena.io/etcher/"
},
{
    "id": 26,
    "title": "Rufus",
    "creator": "Pete Batard",
    "image": "https://rufus.ie/images/rufus-logo.png",
    "description": "A lightweight utility to create bootable USB drives from ISO images.",
    "downloadUrl": "https://rufus.ie/en/"
},
{
    "id": 27,
    "title": "Revo Uninstaller",
    "creator": "VS Revo Group",
    "image": "https://www.revouninstaller.com/images/logo.png",
    "description": "A powerful uninstaller tool to remove leftover files and registry entries.",
    "downloadUrl": "https://www.revouninstaller.com/download-professional-version/"
},
{
    "id": 28,
    "title": "XnView MP",
    "creator": "Pierre-Emmanuel Gougelet",
    "image": "https://www.xnview.com/img/app-xnviewmp.png",
    "description": "A versatile image viewer, converter, and organizer with batch processing.",
    "downloadUrl": "https://www.xnview.com/en/xnviewmp/"
},
{
    "id": 29,
    "title": "HWiNFO",
    "creator": "Martin Malik",
    "image": "https://www.hwinfo.com/wp-content/uploads/2020/03/hwinfo-logo.png",
    "description": "A system information and diagnostics tool for hardware monitoring.",
    "downloadUrl": "https://www.hwinfo.com/download/"
},
{
    "id": 30,
    "title": "ShareX",
    "creator": "ShareX Team",
    "image": "https://getsharex.com/img/ShareX_Logo.png",
    "description": "A free, open-source screen capture and file sharing tool with automation.",
    "downloadUrl": "https://getsharex.com/downloads/"
},
{
    "id": 31,
    "title": "Everything",
    "creator": "David Carpenter",
    "image": "https://www.voidtools.com/favicon.ico",
    "description": "A lightning-fast file search utility for Windows based on file names.",
    "downloadUrl": "https://www.voidtools.com/downloads/"
},
{
    "id": 32,
    "title": "MPC-HC",
    "creator": "MPC-HC Team",
    "image": "https://mpc-hc.org/images/mpc-hc_logo.png",
    "description": "A lightweight, open-source media player for Windows with minimal resource usage.",
    "downloadUrl": "https://mpc-hc.org/downloads/"
},
{
    "id": 33,
    "title": "PeaZip",
    "creator": "Giorgio Tani",
    "image": "https://peazip.github.io/images/peazip-logo.png",
    "description": "A free file archiver with strong encryption and support for 200+ formats.",
    "downloadUrl": "https://peazip.github.io/"
},
{
    "id": 34,
    "title": "KeePass",
    "creator": "Dominik Reichl",
    "image": "https://keepass.info/images/keepass_logo.png",
    "description": "A free, open-source password manager with secure encryption.",
    "downloadUrl": "https://keepass.info/download.html"
},
{
    "id": 35,
    "title": "Gephi",
    "creator": "The Gephi Consortium",
    "image": "https://gephi.org/images/gephi-logo.png",
    "description": "An open-source network analysis and visualization tool.",
    "downloadUrl": "https://gephi.org/users/download/"
},
{
    "id": 36,
    "title": "Inkscape",
    "creator": "Inkscape Team",
    "image": "https://inkscape.org/images/inkscape-logo.svg",
    "description": "A free vector graphics editor for creating and editing SVG files.",
    "downloadUrl": "https://inkscape.org/release/"
},
    {
    "id": 37,
    "title": "Joplin",
    "creator": "Laurent Cozic",
    "image": "https://joplinapp.org/images/logo-text-blue.svg",
    "description": "An open-source note-taking app with markdown support and end-to-end encryption.",
    "downloadUrl": "https://joplinapp.org/#download"
},
{
    "id": 38,
    "title": "FreeCAD",
    "creator": "FreeCAD Community",
    "image": "https://www.freecad.org/images/logo.png",
    "description": "A parametric 3D CAD modeler for designing real-life objects.",
    "downloadUrl": "https://www.freecad.org/downloads.php"
},
{
    "id": 39,
    "title": "Darktable",
    "creator": "darktable team",
    "image": "https://www.darktable.org/wp-content/uploads/2020/09/darktable-logo-black.png",
    "description": "An open-source photography workflow application for RAW image processing.",
    "downloadUrl": "https://www.darktable.org/install/"
},
{
    "id": 40,
    "title": "Signal",
    "creator": "Signal Foundation",
    "image": "https://signal.org/assets/header/logo-f7ef605fe417d5520d38d546b3b774b4261a06e572db69b9320d60dfef8d1781.png",
    "description": "A private messaging app with end-to-end encryption for calls and texts.",
    "downloadUrl": "https://signal.org/download/"
},
{
    "id": 41,
    "title": "TeraCopy",
    "creator": "Code Sector",
    "image": "https://www.codesector.com/images/teracopy-logo.png",
    "description": "A file transfer utility with pause/resume and error recovery features.",
    "downloadUrl": "https://www.codesector.com/teracopy"
},
{
    "id": 42,
    "title": "Process Hacker",
    "creator": "Wen Jia Liu",
    "image": "https://processhacker.sourceforge.io/images/process_hacker_logo.png",
    "description": "A powerful task manager and system monitor with advanced features.",
    "downloadUrl": "https://processhacker.sourceforge.io/downloads.php"
},
{
    "id": 43,
    "title": "Duplicati",
    "creator": "Duplicati Team",
    "image": "https://www.duplicati.com/resources/icon.png",
    "description": "A backup tool that stores encrypted backups on cloud services.",
    "downloadUrl": "https://www.duplicati.com/download"
},
{
    "id": 44,
    "title": "Zotero",
    "creator": "Corporation for Digital Scholarship",
    "image": "https://www.zotero.org/static/images/zotero-logo-512x512.png",
    "description": "A reference manager to collect, organize, and cite research sources.",
    "downloadUrl": "https://www.zotero.org/download/"
},
{
    "id": 45,
    "title": "Figma",
    "creator": "Figma, Inc.",
    "image": "https://static.figma.com/app/icon/1/favicon.png",
    "description": "A collaborative UI/UX design tool with cloud-based prototyping.",
    "downloadUrl": "https://www.figma.com/downloads/"
},
{
    "id": 46,
    "title": "Wireshark",
    "creator": "Wireshark Foundation",
    "image": "https://www.wireshark.org/assets/images/wslogo.png",
    "description": "A network protocol analyzer for troubleshooting and education.",
    "downloadUrl": "https://www.wireshark.org/download.html"
},
{
    "id": 47,
    "title": "AutoHotkey",
    "creator": "Chris Mallett",
    "image": "https://www.autohotkey.com/assets/ahk-logo-no-text.svg",
    "description": "A scripting language for automating Windows tasks and shortcuts.",
    "downloadUrl": "https://www.autohotkey.com/download/"
},
{
    "id": 48,
    "title": "Musescore",
    "creator": "Musescore LTD",
    "image": "https://musescore.org/sites/musescore.org/files/musescore-logo-colour.png",
    "description": "Free, open-source music notation software for composers.",
    "downloadUrl": "https://musescore.org/en/download"
},
{
    "id": 49,
    "title": "TuxGuitar",
    "creator": "Julian Casadesus",
    "image": "https://sourceforge.net/projects/tuxguitar/files/tuxguitar.png",
    "description": "A multitrack guitar tablature editor and player.",
    "downloadUrl": "https://sourceforge.net/projects/tuxguitar/"
},
{
    "id": 50,
    "title": "Ghidra",
    "creator": "National Security Agency (NSA)",
    "image": "https://ghidra-sre.org/GhidraCover.png",
    "description": "A software reverse engineering toolkit developed by the NSA.",
    "downloadUrl": "https://ghidra-sre.org/"
},
{
    "id": 51,
    "title": "Godot Engine",
    "creator": "Godot Community",
    "image": "https://godotengine.org/themes/godotengine/assets/press/logo_large_color_dark.png",
    "description": "A free, open-source game engine for 2D/3D game development.",
    "downloadUrl": "https://godotengine.org/download"
},
{
    "id": 52,
    "title": "LMMS",
    "creator": "LMMS Team",
    "image": "https://lmms.io/img/lmms-logo.png",
    "description": "A digital audio workstation for music production.",
    "downloadUrl": "https://lmms.io/download/"
},
{
    "id": 53,
    "title": "Stellarium",
    "creator": "Stellarium Team",
    "image": "https://stellarium.org/img/stellarium-logo.png",
    "description": "A free planetarium software for realistic sky simulation.",
    "downloadUrl": "https://stellarium.org/"
},
{
    "id": 54,
    "title": "KiCad",
    "creator": "KiCad Developers",
    "image": "https://www.kicad.org/img/kicad_logo_small.png",
    "description": "An open-source PCB design tool for electronics engineers.",
    "downloadUrl": "https://www.kicad.org/download/"
},
{
    "id": 55,
    "title": "VirtualBox",
    "creator": "Oracle",
    "image": "https://www.virtualbox.org/graphics/vbox_logo2_gradient.png",
    "description": "A free virtualization tool for running multiple OSes on a single machine.",
    "downloadUrl": "https://www.virtualbox.org/wiki/Downloads"
},
{
    "id": 56,
    "title": "FastStone Capture",
    "creator": "FastStone Soft",
    "image": "https://www.faststonesoft.net/images/fslogo.png",
    "description": "A screen capture tool with editing and annotation features.",
    "downloadUrl": "https://www.faststonesoft.net/download.htm"
},
{
    "id": 57,
    "title": "PDF-XChange Editor",
    "creator": "Tracker Software",
    "image": "https://www.pdf-xchange.com/images/logo.png",
    "description": "A feature-rich PDF editor with OCR and annotation tools.",
    "downloadUrl": "https://www.pdf-xchange.com/product/downloads"
},
{
    "id": 58,
    "title": "SumatraPDF",
    "creator": "Krzysztof Kowalczyk",
    "image": "https://www.sumatrapdfreader.org/img/sumatrapdf-logo.png",
    "description": "A lightweight PDF, EPUB, and MOBI reader for Windows.",
    "downloadUrl": "https://www.sumatrapdfreader.org/download-free-pdf-viewer.html"
},
{
    "id": 59,
    "title": "CrystalDiskInfo",
    "creator": "Noriyuki Miyazaki",
    "image": "https://crystalmark.info/images/logo-cdi.png",
    "description": "A disk health monitoring tool for HDDs and SSDs.",
    "downloadUrl": "https://crystalmark.info/en/software/crystaldiskinfo/"
},
{
    "id": 60,
    "title": "Evernote",
    "creator": "Bending Spoons",
    "image": "https://evernote.com/img/logo/evernote/primary.svg",
    "description": "A note-taking app with cloud sync and organization features.",
    "downloadUrl": "https://evernote.com/download"
},
{
    "id": 61,
    "title": "DuckDuckGo Privacy Browser",
    "creator": "DuckDuckGo",
    "image": "https://duckduckgo.com/assets/logo_social-media.png",
    "description": "A privacy-focused browser with tracker blocking.",
    "downloadUrl": "https://duckduckgo.com/app"
},
{
    "id": 62,
    "title": "Vivaldi",
    "creator": "Vivaldi Technologies",
    "image": "https://vivaldi.com/wp-content/themes/vivaldicom-theme/img/vivaldi-symbol.svg",
    "description": "A customizable browser with built-in productivity tools.",
    "downloadUrl": "https://vivaldi.com/download/"
},
{
    "id": 63,
    "title": "ProtonVPN",
    "creator": "Proton AG",
    "image": "https://protonvpn.com/img/protonvpn-logo.svg",
    "description": "A secure VPN service with strong encryption and no logs.",
    "downloadUrl": "https://protonvpn.com/download/"
},
{
    "id": 64,
    "title": "Standard Notes",
    "creator": "Standard Notes",
    "image": "https://standardnotes.com/images/logo.png",
    "description": "A private notes app with end-to-end encryption.",
    "downloadUrl": "https://standardnotes.com/download"
},
{
    "id": 65,
    "title": "Bulk Rename Utility",
    "creator": "TGRMN Software",
    "image": "https://www.bulkrenameutility.co.uk/favicon.ico",
    "description": "A tool for batch renaming files and folders with advanced options.",
    "downloadUrl": "https://www.bulkrenameutility.co.uk/Download.php"
},
{
    "id": 66,
    "title": "OpenShot",
    "creator": "Jonathan Thomas",
    "image": "https://www.openshot.org/static/img/logo.png",
    "description": "A free, open-source video editor for simple and advanced projects.",
    "downloadUrl": "https://www.openshot.org/download/"
},
{
    "id": 67,
    "title": "Kodi",
    "creator": "XBMC Foundation",
    "image": "https://kodi.tv/images/logo.png",
    "description": "A media center software for organizing and streaming content.",
    "downloadUrl": "https://kodi.tv/download"
},
{
    "id": 68,
    "title": "TightVNC",
    "creator": "GlavSoft LLC",
    "image": "https://www.tightvnc.com/images/tightvnc-logo.png",
    "description": "A remote desktop tool for controlling computers over a network.",
    "downloadUrl": "https://www.tightvnc.com/download.php"
},
{
    "id": 69,
    "title": "Brackets",
    "creator": "Adobe",
    "image": "https://brackets.io/img/brackets.svg",
    "description": "A lightweight code editor for web designers and developers.",
    "downloadUrl": "https://brackets.io/"
},
{
    "id": 70,
    "title": "Flameshot",
    "creator": "Flameshot Team",
    "image": "https://flameshot.org/images/logo.svg",
    "description": "A powerful screenshot tool with annotation features.",
    "downloadUrl": "https://flameshot.org/#download"
},
{
    "id": 71,
    "title": "ClamWin",
    "creator": "ClamWin Pty Ltd",
    "image": "https://www.clamwin.com/images/clamwin-logo.png",
    "description": "A free, open-source antivirus for Windows.",
    "downloadUrl": "https://www.clamwin.com/content/view/18/46/"
},
{
    "id": 72,
    "title": "Pencil2D",
    "creator": "Pencil2D Team",
    "image": "https://www.pencil2d.org/images/logo.png",
    "description": "A simple 2D animation software for hand-drawn cartoons.",
    "downloadUrl": "https://www.pencil2d.org/download/"
},
{
    "id": 73,
    "title": "Syncthing",
    "creator": "Syncthing Foundation",
    "image": "https://syncthing.net/images/logo-horizontal.svg",
    "description": "A continuous file synchronization tool for decentralized backups.",
    "downloadUrl": "https://syncthing.net/downloads/"
},
{
    "id": 74,
    "title": "Unreal Engine",
    "creator": "Epic Games",
    "image": "https://www.unrealengine.com/themes/ue5/images/ue-logo.svg",
    "description": "A professional game engine for AAA-quality 3D development.",
    "downloadUrl": "https://www.unrealengine.com/en-US/download"
},
{
    "id": 75,
    "title": "AIMP",
    "creator": "Artem Izmaylov",
    "image": "https://www.aimp.ru/wp-content/themes/aimp-ru/assets/images/logo.svg",
    "description": "A lightweight audio player with customizable skins and plugins.",
    "downloadUrl": "https://www.aimp.ru/?do=download"
},
{
    "id": 76,
    "title": "Tox",
    "creator": "Tox Foundation",
    "image": "https://tox.chat/imgs/logo.svg",
    "description": "A decentralized, encrypted messaging and VoIP platform.",
    "downloadUrl": "https://tox.chat/download.html"
},
{
    "id": 77,
    "title": "Gephi",
    "creator": "Gephi Consortium",
    "image": "https://gephi.org/images/gephi-logo.png",
    "description": "An open-source network analysis and visualization tool.",
    "downloadUrl": "https://gephi.org/users/download/"
},
{
    "id": 78,
    "title": "Nomacs",
    "creator": "Markus Diem",
    "image": "https://nomacs.org/wp-content/uploads/2016/07/nomacs-logo.png",
    "description": "A fast, lightweight image viewer with editing capabilities.",
    "downloadUrl": "https://nomacs.org/download/"
},
{
    "id": 79,
    "title": "Rocket.Chat",
    "creator": "Rocket.Chat Team",
    "image": "https://rocket.chat/images/logo/logo.svg",
    "description": "A self-hosted team communication platform alternative to Slack.",
    "downloadUrl": "https://rocket.chat/install"
},
{
    "id": 80,
    "title": "PepperFlash",
    "creator": "Adobe",
    "image": "https://www.adobe.com/content/dam/cc/icons/flash-player.svg",
    "description": "A legacy Flash Player plugin for browsers (archived).",
    "downloadUrl": "https://archive.org/details/flashplayerarchive"
},
{
    "id": 81,
    "title": "Dia",
    "creator": "GNOME",
    "image": "https://wiki.gnome.org/Projects/Dia?action=AttachFile&do=get&target=dia-logo.png",
    "description": "A diagramming tool similar to Microsoft Visio.",
    "downloadUrl": "http://dia-installer.de/download.html"
},
{
    "id": 82,
    "title": "LyX",
    "creator": "LyX Team",
    "image": "https://www.lyx.org/images/lyx-logo.png",
    "description": "A document processor based on LaTeX for academic writing.",
    "downloadUrl": "https://www.lyx.org/Download"
},
{
    "id": 83,
    "title": "Tiled",
    "creator": "Thorbjørn Lindeijer",
    "image": "https://www.mapeditor.org/img/tiled-logo.svg",
    "description": "A flexible level editor for 2D games and tile-based maps.",
    "downloadUrl": "https://www.mapeditor.org/"
},
{
    "id": 84,
    "title": "QGIS",
    "creator": "QGIS Development Team",
    "image": "https://qgis.org/en/_static/images/logo.png",
    "description": "A free, open-source geographic information system (GIS).",
    "downloadUrl": "https://qgis.org/en/site/forusers/download.html"
},
{
    "id": 85,
    "title": "Gramps",
    "creator": "Gramps Project",
    "image": "https://gramps-project.org/wp-content/uploads/2022/01/gramps-logo.svg",
    "description": "A genealogy software for tracking family history.",
    "downloadUrl": "https://gramps-project.org/blog/"
},
{
    "id": 86,
    "title": "Celestia",
    "creator": "Celestia Development Team",
    "image": "https://celestia.space/images/celestia-logo.png",
    "description": "A real-time 3D space simulation for exploring the universe.",
    "downloadUrl": "https://celestia.space/download.html"
        },
    {
    "id": 87,
    "title": "Arduino IDE",
    "creator": "Arduino",
    "image": "https://www.arduino.cc/en/uploads/Trademark/ArduinoCommunityLogo.png",
    "description": "Integrated development environment for Arduino hardware programming.",
    "downloadUrl": "https://www.arduino.cc/en/software"
},
{
    "id": 88,
    "title": "Raspberry Pi Imager",
    "creator": "Raspberry Pi Foundation",
    "image": "https://www.raspberrypi.com/app/uploads/2022/02/COLOUR-Raspberry-Pi-Symbol-Registered.png",
    "description": "Official tool to write OS images to SD cards for Raspberry Pi.",
    "downloadUrl": "https://www.raspberrypi.com/software/"
},
{
    "id": 89,
    "title": "Fritzing",
    "creator": "Fritzing Foundation",
    "image": "https://fritzing.org/media/fritzing-website/logo.png",
    "description": "Electronic design automation software for documenting circuits.",
    "downloadUrl": "https://fritzing.org/download/"
},
{
    "id": 90,
    "title": "WSL (Windows Subsystem for Linux)",
    "creator": "Microsoft",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Windows_terminal_logo.svg/1200px-Windows_terminal_logo.svg.png",
    "description": "Run Linux environments directly on Windows.",
    "downloadUrl": "https://docs.microsoft.com/en-us/windows/wsl/install"
},
{
    "id": 91,
    "title": "Postman",
    "creator": "Postman Inc.",
    "image": "https://www.postman.com/_ar-assets/images/favicon-1-48.png",
    "description": "API development and testing environment.",
    "downloadUrl": "https://www.postman.com/downloads/"
},
{
    "id": 92,
    "title": "Insomnia",
    "creator": "Kong Inc.",
    "image": "https://insomnia.rest/images/insomnia-logo.svg",
    "description": "API client for GraphQL, REST, and gRPC.",
    "downloadUrl": "https://insomnia.rest/download"
},
{
    "id": 93,
    "title": "Docker",
    "creator": "Docker Inc.",
    "image": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
    "description": "Platform to build, share, and run containerized applications.",
    "downloadUrl": "https://www.docker.com/products/docker-desktop/"
},
{
    "id": 94,
    "title": "PuTTY",
    "creator": "Simon Tatham",
    "image": "https://www.chiark.greenend.org.uk/~sgtatham/putty/latest/puttydoc.html/_static/putty.ico",
    "description": "SSH and telnet client for Windows.",
    "downloadUrl": "https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"
},
{
    "id": 95,
    "title": "WinSCP",
    "creator": "Martin Prikryl",
    "image": "https://winscp.net/eng/images/logo.png",
    "description": "SFTP, FTP, and SCP client for Windows.",
    "downloadUrl": "https://winscp.net/eng/download.php"
},
{
    "id": 96,
    "title": "MobaXterm",
    "creator": "Mobatek",
    "image": "https://mobaxterm.mobatek.net/img/MobaXterm.png",
    "description": "Enhanced terminal for Windows with X11 server and tabbed SSH.",
    "downloadUrl": "https://mobaxterm.mobatek.net/download.html"
},
{
    "id": 97,
    "title": "Cyberduck",
    "creator": "iterate GmbH",
    "image": "https://cdn.cyberduck.io/img/cyberduck-icon-256.png",
    "description": "FTP, SFTP, and cloud storage browser.",
    "downloadUrl": "https://cyberduck.io/download/"
},
{
    "id": 98,
    "title": "FileZilla Pro",
    "creator": "Tim Kosse",
    "image": "https://filezilla-project.org/images/logo.png",
    "description": "Professional version of FileZilla with cloud support.",
    "downloadUrl": "https://filezilla-project.org/pro.php"
},
{
    "id": 99,
    "title": "Beyond Compare",
    "creator": "Scooter Software",
    "image": "https://www.scootersoftware.com/images/BC4Logo256.png",
    "description": "File and folder comparison utility.",
    "downloadUrl": "https://www.scootersoftware.com/download.php"
},
{
    "id": 100,
    "title": "WinMerge",
    "creator": "WinMerge Team",
    "image": "https://winmerge.org/images/logo.png",
    "description": "Open-source differencing and merging tool.",
    "downloadUrl": "https://winmerge.org/downloads/"
},
{
    "id": 101,
    "title": "DiffMerge",
    "creator": "SourceGear",
    "image": "https://www.sourcegear.com/diffmerge/images/diffmerge-icon.png",
    "description": "Tool for comparing and merging files.",
    "downloadUrl": "https://www.sourcegear.com/diffmerge/downloads.php"
},
{
    "id": 102,
    "title": "Araxis Merge",
    "creator": "Araxis Ltd",
    "image": "https://www.araxis.com/images/merge-icon-256.png",
    "description": "Professional file comparison and merging tool.",
    "downloadUrl": "https://www.araxis.com/merge/download.en"
},
{
    "id": 103,
    "title": "KDiff3",
    "creator": "Joachim Eibl",
    "image": "https://kdiff3.sourceforge.net/kdiff3.png",
    "description": "Diff and merge program for 2 or 3 input files.",
    "downloadUrl": "https://kdiff3.sourceforge.net/"
},
{
    "id": 104,
    "title": "Meld",
    "creator": "GNOME",
    "image": "https://meldmerge.org/images/meld-icon.png",
    "description": "Visual diff and merge tool.",
    "downloadUrl": "https://meldmerge.org/"
},
{
    "id": 105,
    "title": "Perforce Helix Core",
    "creator": "Perforce",
    "image": "https://www.perforce.com/sites/default/files/image/2021-03/perforce-logo.svg",
    "description": "Version control system for enterprises.",
    "downloadUrl": "https://www.perforce.com/downloads/helix-core"
},
{
    "id": 106,
    "title": "Mercurial",
    "creator": "Matt Mackall",
    "image": "https://www.mercurial-scm.org/images/mercurial-logo.png",
    "description": "Lightweight distributed version control system.",
    "downloadUrl": "https://www.mercurial-scm.org/downloads"
},
{
    "id": 107,
    "title": "Fossil",
    "creator": "D. Richard Hipp",
    "image": "https://fossil-scm.org/home/logo/fossil-logo-200.png",
    "description": "Simple, high-reliability distributed version control.",
    "downloadUrl": "https://fossil-scm.org/home/uv/download.html"
},
{
    "id": 108,
    "title": "Plastic SCM",
    "creator": "Codice Software",
    "image": "https://www.plasticscm.com/images/logo.png",
    "description": "Enterprise-grade version control system.",
    "downloadUrl": "https://www.plasticscm.com/download"
},
{
    "id": 109,
    "title": "SVN (Subversion)",
    "creator": "Apache Software Foundation",
    "image": "https://subversion.apache.org/images/svn-logo.png",
    "description": "Centralized version control system.",
    "downloadUrl": "https://subversion.apache.org/packages.html"
},
{
    "id": 110,
    "title": "TortoiseSVN",
    "creator": "TortoiseSVN Team",
    "image": "https://tortoisesvn.net/assets/img/tortoisesvn-logo.png",
    "description": "Subversion client implemented as a Windows shell extension.",
    "downloadUrl": "https://tortoisesvn.net/downloads.html"
},
{
    "id": 111,
    "title": "SmartGit",
    "creator": "Syntevo",
    "image": "https://www.syntevo.com/doc/display/SG170/Home",
    "description": "Git client with SVN support and GitHub integration.",
    "downloadUrl": "https://www.syntevo.com/smartgit/download/"
},
{
    "id": 112,
    "title": "GitKraken",
    "creator": "Axosoft",
    "image": "https://www.gitkraken.com/img/GitKraken-logo.svg",
    "description": "Graphical Git client with powerful features.",
    "downloadUrl": "https://www.gitkraken.com/download"
},
{
    "id": 113,
    "title": "SourceTree",
    "creator": "Atlassian",
    "image": "https://www.sourcetreeapp.com/dam/jcr:2e40c7d5-00e0-4f61-8f0d-854e33a9a2e8/sourcetree-icon.svg",
    "description": "Free Git GUI client for Windows and Mac.",
    "downloadUrl": "https://www.sourcetreeapp.com/"
},
{
    "id": 114,
    "title": "Tower",
    "creator": "fournova",
    "image": "https://www.git-tower.com/img/pages/home/tower-logo.svg",
    "description": "Powerful Git client for Mac and Windows.",
    "downloadUrl": "https://www.git-tower.com/download"
},
{
    "id": 115,
    "title": "Fork",
    "creator": "Fork Dev",
    "image": "https://fork.dev/images/fork-logo.svg",
    "description": "Fast and friendly Git client for Mac and Windows.",
    "downloadUrl": "https://fork.dev/download"
},
{
    "id": 116,
    "title": "GitAhead",
    "creator": "GitAhead",
    "image": "https://gitahead.com/img/logo.png",
    "description": "Graphical Git client designed to help understand Git history.",
    "downloadUrl": "https://gitahead.com/"
},
{
    "id": 117,
    "title": "GitCola",
    "creator": "David Aguilar",
    "image": "https://git-cola.github.io/images/git-cola.svg",
    "description": "Sleek and powerful Git GUI.",
    "downloadUrl": "https://git-cola.github.io/downloads.html"
},
{
    "id": 118,
    "title": "Ungit",
    "creator": "Fredrik Norén",
    "image": "https://github.com/FredrikNoren/ungit/raw/master/source/ungit.svg",
    "description": "Git interface that makes understanding Git easy.",
    "downloadUrl": "https://github.com/FredrikNoren/ungit"
},
{
    "id": 119,
    "title": "GitUp",
    "creator": "GitUp",
    "image": "https://gitup.co/images/logo.png",
    "description": "Simple and powerful Git client for Mac.",
    "downloadUrl": "https://gitup.co/"
},
{
    "id": 120,
    "title": "GitExtensions",
    "creator": "GitExtensions Team",
    "image": "https://gitextensions.github.io/images/logo.png",
    "description": "Graphical user interface for Git.",
    "downloadUrl": "https://gitextensions.github.io/"
},
{
    "id": 121,
    "title": "GitForce",
    "creator": "GitForce",
    "image": "https://gitforce.sourceforge.io/img/gitforce.png",
    "description": "Graphical front-end for Git written in C#.",
    "downloadUrl": "https://gitforce.sourceforge.io/"
},
{
    "id": 122,
    "title": "RabbitVCS",
    "creator": "RabbitVCS Team",
    "image": "https://rabbitvcs.org/static/img/rabbitvcs.png",
    "description": "Graphical tools for working with version control systems.",
    "downloadUrl": "https://rabbitvcs.org/"
},
{
    "id": 123,
    "title": "QGit",
    "creator": "Marco Costalba",
    "image": "https://qgit.sourceforge.io/qgit-logo.png",
    "description": "Qt-based graphical interface for Git.",
    "downloadUrl": "https://qgit.sourceforge.io/"
},
{
    "id": 124,
    "title": "GitX",
    "creator": "Pieter de Bie",
    "image": "https://gitx.frim.nl/images/GitX.png",
    "description": "Git GUI for Mac OS X.",
    "downloadUrl": "https://gitx.frim.nl/"
},
{
    "id": 125,
    "title": "GitFiend",
    "creator": "GitFiend",
    "image": "https://gitfiend.com/resources/icon.png",
    "description": "Modern Git client for Windows, Mac and Linux.",
    "downloadUrl": "https://gitfiend.com/"
},
{
    "id": 126,
    "title": "Gittyup",
    "creator": "Gittyup",
    "image": "https://github.com/Murmele/Gittyup/raw/master/resources/icons/gittyup.png",
    "description": "Graphical Git client based on Qt.",
    "downloadUrl": "https://github.com/Murmele/Gittyup"
},
{
    "id": 127,
    "title": "GitUI",
    "creator": "Extrawurst",
    "image": "https://github.com/extrawurst/gitui/raw/master/assets/logo.png",
    "description": "Blazing fast terminal-ui for Git written in Rust.",
    "downloadUrl": "https://github.com/extrawurst/gitui"
},
{
    "id": 128,
    "title": "Lazygit",
    "creator": "Jesseduffield",
    "image": "https://github.com/jesseduffield/lazygit/raw/master/docs/static/lazygit_logo.png",
    "description": "Simple terminal UI for Git commands.",
    "downloadUrl": "https://github.com/jesseduffield/lazygit"
},
{
    "id": 129,
    "title": "Tig",
    "creator": "Jonas Fonseca",
    "image": "https://github.com/jonas/tig/raw/master/doc/tig-logo.png",
    "description": "Text-mode interface for Git.",
    "downloadUrl": "https://github.com/jonas/tig"
},
{
    "id": 130,
    "title": "Magit",
    "creator": "Magit Team",
    "image": "https://magit.vc/img/magit-logo.png",
    "description": "Interface to Git implemented as an Emacs package.",
    "downloadUrl": "https://magit.vc/"
},
{
    "id": 131,
    "title": "Gitg",
    "creator": "GNOME",
    "image": "https://wiki.gnome.org/Projects/Gitg?action=AttachFile&do=get&target=gitg-logo.png",
    "description": "GNOME GUI client to view Git repositories.",
    "downloadUrl": "https://wiki.gnome.org/Apps/Gitg"
},
{
    "id": 132,
    "title": "Giggle",
    "creator": "Giggle Team",
    "image": "https://wiki.gnome.org/Projects/giggle?action=AttachFile&do=get&target=giggle-logo.png",
    "description": "GTK+ frontend for the Git version control system.",
    "downloadUrl": "https://wiki.gnome.org/Apps/Giggle"
},
{
    "id": 133,
    "title": "QGit",
    "creator": "Marco Costalba",
    "image": "https://qgit.sourceforge.io/qgit-logo.png",
    "description": "Qt-based graphical interface for Git.",
    "downloadUrl": "https://qgit.sourceforge.io/"
},
{
    "id": 134,
    "title": "GitAhead",
    "creator": "GitAhead",
    "image": "https://gitahead.com/img/logo.png",
    "description": "Graphical Git client designed to help understand Git history.",
    "downloadUrl": "https://gitahead.com/"
},
{
    "id": 135,
    "title": "GitKraken",
    "creator": "Axosoft",
    "image": "https://www.gitkraken.com/img/GitKraken-logo.svg",
    "description": "Graphical Git client with powerful features.",
    "downloadUrl": "https://www.gitkraken.com/download"
},
{
    "id": 136,
    "title": "SmartGit",
    "creator": "Syntevo",
    "image": "https://www.syntevo.com/doc/display/SG170/Home",
    "description": "Git client with SVN support and GitHub integration.",
    "downloadUrl": "https://www.syntevo.com/smartgit/download/"
},
{
    "id": 137,
    "title": "TortoiseGit",
    "creator": "TortoiseGit Team",
    "image": "https://tortoisegit.org/docs/tortoisegit/images/TortoiseGit_logo_icon.svg",
    "description": "Windows Shell Interface to Git.",
    "downloadUrl": "https://tortoisegit.org/download/"
},
{
    "id": 138,
    "title": "GitHub Desktop",
    "creator": "GitHub",
    "image": "https://desktop.github.com/images/desktop-icon.svg",
    "description": "Simple Git client from GitHub.",
    "downloadUrl": "https://desktop.github.com/"
},
{
    "id": 139,
    "title": "GitLab",
    "creator": "GitLab Inc.",
    "image": "https://about.gitlab.com/images/press/logo/png/gitlab-logo-500.png",
    "description": "Web-based Git repository manager with wiki and issue tracking.",
    "downloadUrl": "https://about.gitlab.com/install/"
},
{
    "id": 140,
    "title": "Bitbucket",
    "creator": "Atlassian",
    "image": "https://wac-cdn.atlassian.com/dam/jcr:e2a6f06a-bde3-4a6a-8c3d-6736b1a7d7d3/Bitbucket-blue.svg",
    "description": "Git repository management solution for professional teams.",
    "downloadUrl": "https://bitbucket.org/product/"
},
{
    "id": 141,
    "title": "Gitea",
    "creator": "Gitea Team",
    "image": "https://gitea.io/images/gitea.png",
    "description": "Lightweight code hosting solution written in Go.",
    "downloadUrl": "https://gitea.io/en-us/"
},
{
    "id": 142,
    "title": "Gogs",
    "creator": "Gogs Team",
    "image": "https://gogs.io/img/favicon.png",
    "description": "Painless self-hosted Git service.",
    "downloadUrl": "https://gogs.io/docs/installation"
},
{
    "id": 143,
    "title": "GitBucket",
    "creator": "GitBucket Team",
    "image": "https://gitbucket.github.io/images/gitbucket-logo.png",
    "description": "Git platform powered by Scala with easy installation.",
    "downloadUrl": "https://gitbucket.github.io/"
},
{
    "id": 144,
    "title": "RhodeCode",
    "creator": "RhodeCode GmbH",
    "image": "https://rhodecode.com/static/img/rhodecode_logo.svg",
    "description": "Enterprise source code management platform.",
    "downloadUrl": "https://rhodecode.com/download"
},
{
    "id": 145,
    "title": "Phabricator",
    "creator": "Phacility",
    "image": "https://phacility.com/static/res/phabricator/images/logo/phantomas-white.png",
    "description": "Suite of web-based software development collaboration tools.",
    "downloadUrl": "https://www.phacility.com/phabricator/"
},
{
    "id": 146,
    "title": "Gerrit",
    "creator": "Google",
    "image": "https://www.gerritcodereview.com/images/gerrit_logo.png",
    "description": "Web-based team code collaboration tool.",
    "downloadUrl": "https://www.gerritcodereview.com/"
},
{
    "id": 147,
    "title": "Kallithea",
    "creator": "Kallithea Team",
    "image": "https://kallithea-scm.org/_static/kallithea-logo.png",
    "description": "Free software source code management system.",
    "downloadUrl": "https://kallithea-scm.org/repos/kallithea"
},
{
    "id": 148,
    "title": "GitPrep",
    "creator": "Yuki Kato",
    "image": "https://github.com/yuki-kimoto/gitprep/raw/master/public/img/gitprep.png",
    "description": "Portable GitHub clone.",
    "downloadUrl": "https://github.com/yuki-kimoto/gitprep"
},
{
    "id": 149,
    "title": "GitList",
    "creator": "GitList Team",
    "image": "https://gitlist.org/img/logo.png",
    "description": "Elegant and modern web interface for Git repositories.",
    "downloadUrl": "https://gitlist.org/"
},
{
    "id": 150,
    "title": "CGit",
    "creator": "CGit Team",
    "image": "https://git.zx2c4.com/cgit/plain/cgit.png",
    "description": "Fast web interface for Git repositories.",
    "downloadUrl": "https://git.zx2c4.com/cgit/about/"
},
{
    "id": 151,
    "title": "GitWeb",
    "creator": "Git Community",
    "image": "https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png",
    "description": "Simple web interface for Git repositories.",
    "downloadUrl": "https://git-scm.com/book/en/v2/Git-on-the-Server-GitWeb"
},
{
    "id": 152,
    "title": "GitLab CE",
    "creator": "GitLab Inc.",
    "image": "https://about.gitlab.com/images/press/logo/png/gitlab-logo-500.png",
    "description": "Community Edition of GitLab for self-hosting.",
    "downloadUrl": "https://about.gitlab.com/install/"
},
{
    "id": 153,
    "title": "GitLab EE",
    "creator": "GitLab Inc.",
    "image": "https://about.gitlab.com/images/press/logo/png/gitlab-logo-500.png",
    "description": "Enterprise Edition of GitLab with additional features.",
    "downloadUrl": "https://about.gitlab.com/install/"
},
{
    "id": 154,
    "title": "GitHub Enterprise",
    "creator": "GitHub",
    "image": "https://github.githubassets.com/images/modules/site/icons/footer/github-logo.svg",
    "description": "Self-hosted version of GitHub for enterprises.",
    "downloadUrl": "https://github.com/enterprise"
},
{
    "id": 155,
    "title": "Bitbucket Server",
    "creator": "Atlassian",
    "image": "https://wac-cdn.atlassian.com/dam/jcr:e2a6f06a-bde3-4a6a-8c3d-6736b1a7d7d3/Bitbucket-blue.svg",
    "description": "Self-hosted Git repository management for enterprises.",
    "downloadUrl": "https://www.atlassian.com/software/bitbucket/download"
},
{
    "id": 156,
    "title": "Azure DevOps Server",
    "creator": "Microsoft",
    "image": "https://azurecomcdn.azureedge.net/cvt-8632d9bb8d979834a99b4b413c6b5d3e63cd54c1a5c3eff2716a5d60a5294b0d/images/shared/services/devops.svg",
    "description": "On-premises version of Azure DevOps for Git repositories.",
    "downloadUrl": "https://azure.microsoft.com/en-us/services/devops/server/"
},
{
    "id": 157,
    "title": "Helix TeamHub",
    "creator": "Perforce",
    "image": "https://www.perforce.com/sites/default/files/image/2021-03/perforce-logo.svg",
    "description": "Git, Mercurial, and SVN hosting with CI/CD pipelines.",
    "downloadUrl": "https://www.perforce.com/products/helix-teamhub"
},
{
    "id": 158,
    "title": "AWS CodeCommit",
    "creator": "Amazon Web Services",
    "image": "https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png",
    "description": "Secure, highly scalable managed source control service.",
    "downloadUrl": "https://aws.amazon.com/codecommit/"
},
{
    "id": 159,
    "title": "Google Cloud Source Repositories",
    "creator": "Google",
    "image": "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png",
    "description": "Private Git repositories hosted on Google Cloud.",
    "downloadUrl": "https://cloud.google.com/source-repositories"
},
{
    "id": 160,
    "title": "IBM Rational Team Concert",
    "creator": "IBM",
    "image": "https://www.ibm.com/software/rational/images/logo.png",
    "description": "Team collaboration tool with Git repository support.",
    "downloadUrl": "https://www.ibm.com/software/products/en/rtc"
},
{
    "id": 161,
    "title": "Plastic SCM Cloud Edition",
    "creator": "Codice Software",
    "image": "https://www.plasticscm.com/images/logo.png",
    "description": "Cloud-hosted version of Plastic SCM.",
    "downloadUrl": "https://www.plasticscm.com/cloud-edition"
},
{
    "id": 162,
    "title": "RhodeCode Enterprise",
    "creator": "RhodeCode GmbH",
    "image": "https://rhodecode.com/static/img/rhodecode_logo.svg",
    "description": "Enterprise-grade source code management platform.",
    "downloadUrl": "https://rhodecode.com/enterprise"
},
{
    "id": 163,
    "title": "GitPrime",
    "creator": "Pluralsight",
    "image": "https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/gitprime/gitprime-logo.png",
    "description": "Engineering analytics platform for Git repositories.",
    "downloadUrl": "https://www.pluralsight.com/product/gitprime"
},
{
    "id": 164,
    "title": "GitClear",
    "creator": "GitClear",
    "image": "https://www.gitclear.com/static/images/gitclear-logo.png",
    "description": "Code review and analytics for Git repositories.",
    "downloadUrl": "https://www.gitclear.com/"
},
{
    "id": 165,
    "title": "GitPrime",
    "creator": "Pluralsight",
    "image": "https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/gitprime/gitprime-logo.png",
    "description": "Engineering analytics platform for Git repositories.",
    "downloadUrl": "https://www.pluralsight.com/product/gitprime"
},
{
    "id": 166,
    "title": "GitPrime",
    "creator": "Pluralsight",
    "image": "https://www.pluralsight.com/content/dam/pluralsight2/teach/author-tools/gitprime/gitprime-logo.png",
    "description": "Engineering analytics platform for Git repositories.",
    "downloadUrl": "https://www.pluralsight.com/product/gitprime"
},
    {
    "id": 167,
    "title": "Metasploit",
    "creator": "Rapid7",
    "image": "https://avatars.githubusercontent.com/u/3814896",
    "description": "Penetration testing framework",
    "downloadUrl": "pkg install metasploit"
},
{
    "id": 168,
    "title": "Nmap",
    "creator": "Gordon Lyon",
    "image": "https://nmap.org/images/sitelogo.png",
    "description": "Network scanning tool",
    "downloadUrl": "pkg install nmap"
},
{
    "id": 169,
    "title": "Hydra",
    "creator": "van Hauser",
    "image": "https://github.com/vanhauser-thc.png",
    "description": "Password cracking tool",
    "downloadUrl": "pkg install hydra"
},
{
    "id": 170,
    "title": "Sqlmap",
    "creator": "Bernardo Damele",
    "image": "https://sqlmap.org/images/sqlmap_logo.png",
    "description": "SQL injection tool",
    "downloadUrl": "pkg install sqlmap"
},
{
    "id": 171,
    "title": "Wget",
    "creator": "GNU Project",
    "image": "https://www.gnu.org/software/wget/wget.png",
    "description": "File downloading tool",
    "downloadUrl": "pkg install wget"
},
{
    "id": 172,
    "title": "Curl",
    "creator": "Daniel Stenberg",
    "image": "https://curl.se/logo/curl-logo.svg",
    "description": "Data transfer tool",
    "downloadUrl": "pkg install curl"
},
{
    "id": 173,
    "title": "FFmpeg",
    "creator": "FFmpeg Team",
    "image": "https://ffmpeg.org/ffmpeg-logo.png",
    "description": "Multimedia framework",
    "downloadUrl": "pkg install ffmpeg"
},
{
    "id": 174,
    "title": "Git",
    "creator": "Linus Torvalds",
    "image": "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    "description": "Version control system",
    "downloadUrl": "pkg install git"
},
{
    "id": 175,
    "title": "Python",
    "creator": "Python Software Foundation",
    "image": "https://www.python.org/static/community_logos/python-logo.png",
    "description": "Programming language",
    "downloadUrl": "pkg install python"
},
{
    "id": 176,
    "title": "Node.js",
    "creator": "OpenJS Foundation",
    "image": "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
    "description": "JavaScript runtime",
    "downloadUrl": "pkg install nodejs"
},
{
    "id": 177,
    "title": "Ruby",
    "creator": "Yukihiro Matsumoto",
    "image": "https://www.ruby-lang.org/images/header-ruby-logo.png",
    "description": "Programming language",
    "downloadUrl": "pkg install ruby"
},
{
    "id": 178,
    "title": "Perl",
    "creator": "Larry Wall",
    "image": "https://www.perl.org/images/perl_logo.png",
    "description": "Programming language",
    "downloadUrl": "pkg install perl"
},
{
    "id": 179,
    "title": "PHP",
    "creator": "The PHP Group",
    "image": "https://www.php.net/images/logos/new-php-logo.svg",
    "description": "Server-side scripting language",
    "downloadUrl": "pkg install php"
},
{
    "id": 180,
    "title": "Go",
    "creator": "Google",
    "image": "https://golang.org/lib/godoc/images/go-logo-blue.svg",
    "description": "Programming language",
    "downloadUrl": "pkg install golang"
},
{
    "id": 181,
    "title": "Rust",
    "creator": "Mozilla",
    "image": "https://www.rust-lang.org/static/images/rust-social-wide.jpg",
    "description": "Programming language",
    "downloadUrl": "pkg install rust"
},
{
    "id": 182,
    "title": "Clang",
    "creator": "LLVM Project",
    "image": "https://llvm.org/img/DragonSmall.png",
    "description": "C language frontend for LLVM",
    "downloadUrl": "pkg install clang"
},
{
    "id": 183,
    "title": "Make",
    "creator": "GNU Project",
    "image": "https://www.gnu.org/software/make/gnu-make-icon.png",
    "description": "Build automation tool",
    "downloadUrl": "pkg install make"
},
{
    "id": 184,
    "title": "CMake",
    "creator": "Kitware",
    "image": "https://cmake.org/wp-content/uploads/2018/11/cmake_logo_slider.png",
    "description": "Cross-platform build system",
    "downloadUrl": "pkg install cmake"
},
{
    "id": 185,
    "title": "Ninja",
    "creator": "Evan Martin",
    "image": "https://ninja-build.org/logo.png",
    "description": "Small build system",
    "downloadUrl": "pkg install ninja"
},
{
    "id": 186,
    "title": "OpenSSH",
    "creator": "OpenBSD Project",
    "image": "https://www.openssh.com/images/openssh.gif",
    "description": "SSH client and server",
    "downloadUrl": "pkg install openssh"
},
{
    "id": 187,
    "title": "Termux-API",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Access Android features from Termux",
    "downloadUrl": "pkg install termux-api"
},
{
    "id": 188,
    "title": "Termux-Styling",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Customize Termux appearance",
    "downloadUrl": "pkg install termux-styling"
},
{
    "id": 189,
    "title": "Termux-Widget",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Add Termux shortcuts to home screen",
    "downloadUrl": "pkg install termux-widget"
},
{
    "id": 190,
    "title": "Termux-Float",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Run Termux in floating window",
    "downloadUrl": "pkg install termux-float"
},
{
    "id": 191,
    "title": "Termux-Boot",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Run scripts on device boot",
    "downloadUrl": "pkg install termux-boot"
},
{
    "id": 192,
    "title": "Termux-Tasker",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Integrate with Tasker app",
    "downloadUrl": "pkg install termux-tasker"
},
{
    "id": 193,
    "title": "Termux-Keep",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Prevent Termux from being killed",
    "downloadUrl": "pkg install termux-keep"
},
{
    "id": 194,
    "title": "Termux-Sudo",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Sudo implementation for Termux",
    "downloadUrl": "pkg install termux-sudo"
},
{
    "id": 195,
    "title": "Termux-Tools",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Additional tools for Termux",
    "downloadUrl": "pkg install termux-tools"
},
{
    "id": 196,
    "title": "Termux-ELF-Cleaner",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Clean ELF binaries for Termux",
    "downloadUrl": "pkg install termux-elf-cleaner"
},
{
    "id": 197,
    "title": "Termux-Create-Package",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Create Termux packages",
    "downloadUrl": "pkg install termux-create-package"
},
{
    "id": 198,
    "title": "Termux-Arch",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Arch Linux in Termux",
    "downloadUrl": "pkg install termux-arch"
},
{
    "id": 199,
    "title": "Termux-Ubuntu",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Ubuntu in Termux",
    "downloadUrl": "pkg install termux-ubuntu"
},
{
    "id": 200,
    "title": "Termux-Debian",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Debian in Termux",
    "downloadUrl": "pkg install termux-debian"
},
{
    "id": 201,
    "title": "Termux-Fedora",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Fedora in Termux",
    "downloadUrl": "pkg install termux-fedora"
},
{
    "id": 202,
    "title": "Termux-CentOS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "CentOS in Termux",
    "downloadUrl": "pkg install termux-centos"
},
{
    "id": 203,
    "title": "Termux-Kali",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Kali Linux in Termux",
    "downloadUrl": "pkg install termux-kali"
},
{
    "id": 204,
    "title": "Termux-Parrot",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Parrot OS in Termux",
    "downloadUrl": "pkg install termux-parrot"
},
{
    "id": 205,
    "title": "Termux-BlackArch",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "BlackArch in Termux",
    "downloadUrl": "pkg install termux-blackarch"
},
{
    "id": 206,
    "title": "Termux-Alpine",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Alpine Linux in Termux",
    "downloadUrl": "pkg install termux-alpine"
},
{
    "id": 207,
    "title": "Termux-Gentoo",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Gentoo in Termux",
    "downloadUrl": "pkg install termux-gentoo"
},
{
    "id": 208,
    "title": "Termux-Slackware",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Slackware in Termux",
    "downloadUrl": "pkg install termux-slackware"
},
{
    "id": 209,
    "title": "Termux-Void",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Void Linux in Termux",
    "downloadUrl": "pkg install termux-void"
},
{
    "id": 210,
    "title": "Termux-OpenSUSE",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "OpenSUSE in Termux",
    "downloadUrl": "pkg install termux-opensuse"
},
{
    "id": 211,
    "title": "Termux-Manjaro",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Manjaro in Termux",
    "downloadUrl": "pkg install termux-manjaro"
},
{
    "id": 212,
    "title": "Termux-Artix",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Artix Linux in Termux",
    "downloadUrl": "pkg install termux-artix"
},
{
    "id": 213,
    "title": "Termux-NixOS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "NixOS in Termux",
    "downloadUrl": "pkg install termux-nixos"
},
{
    "id": 214,
    "title": "Termux-Guix",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Guix in Termux",
    "downloadUrl": "pkg install termux-guix"
},
{
    "id": 215,
    "title": "Termux-FreeBSD",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "FreeBSD in Termux",
    "downloadUrl": "pkg install termux-freebsd"
},
{
    "id": 216,
    "title": "Termux-OpenBSD",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "OpenBSD in Termux",
    "downloadUrl": "pkg install termux-openbsd"
},
{
    "id": 217,
    "title": "Termux-NetBSD",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "NetBSD in Termux",
    "downloadUrl": "pkg install termux-netbsd"
},
{
    "id": 218,
    "title": "Termux-DragonFlyBSD",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "DragonFlyBSD in Termux",
    "downloadUrl": "pkg install termux-dragonflybsd"
},
{
    "id": 219,
    "title": "Termux-Haiku",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Haiku in Termux",
    "downloadUrl": "pkg install termux-haiku"
},
{
    "id": 220,
    "title": "Termux-ReactOS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "ReactOS in Termux",
    "downloadUrl": "pkg install termux-reactos"
},
{
    "id": 221,
    "title": "Termux-Minix",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Minix in Termux",
    "downloadUrl": "pkg install termux-minix"
},
{
    "id": 222,
    "title": "Termux-Plan9",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Plan9 in Termux",
    "downloadUrl": "pkg install termux-plan9"
},
{
    "id": 223,
    "title": "Termux-Inferno",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Inferno in Termux",
    "downloadUrl": "pkg install termux-inferno"
},
{
    "id": 224,
    "title": "Termux-GNU",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "GNU Hurd in Termux",
    "downloadUrl": "pkg install termux-gnu"
},
{
    "id": 225,
    "title": "Termux-Solaris",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Solaris in Termux",
    "downloadUrl": "pkg install termux-solaris"
},
{
    "id": 226,
    "title": "Termux-OS2",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "OS/2 in Termux",
    "downloadUrl": "pkg install termux-os2"
},
{
    "id": 227,
    "title": "Termux-BeOS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "BeOS in Termux",
    "downloadUrl": "pkg install termux-beos"
},
{
    "id": 228,
    "title": "Termux-QNX",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "QNX in Termux",
    "downloadUrl": "pkg install termux-qnx"
},
{
    "id": 229,
    "title": "Termux-VMS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "OpenVMS in Termux",
    "downloadUrl": "pkg install termux-vms"
},
{
    "id": 230,
    "title": "Termux-RISCOS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "RISC OS in Termux",
    "downloadUrl": "pkg install termux-riscos"
},
{
    "id": 231,
    "title": "Termux-MorphOS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "MorphOS in Termux",
    "downloadUrl": "pkg install termux-morphos"
},
{
    "id": 232,
    "title": "Termux-AROS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "AROS in Termux",
    "downloadUrl": "pkg install termux-aros"
},
{
    "id": 233,
    "title": "Termux-MenuetOS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "MenuetOS in Termux",
    "downloadUrl": "pkg install termux-menuetos"
},
{
    "id": 234,
    "title": "Termux-KolibriOS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "KolibriOS in Termux",
    "downloadUrl": "pkg install termux-kolibrios"
},
{
    "id": 235,
    "title": "Termux-TempleOS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "TempleOS in Termux",
    "downloadUrl": "pkg install termux-templeos"
},
{
    "id": 236,
    "title": "Termux-SerenityOS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "SerenityOS in Termux",
    "downloadUrl": "pkg install termux-serenityos"
},
{
    "id": 237,
    "title": "Termux-Redox",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Redox in Termux",
    "downloadUrl": "pkg install termux-redox"
},
{
    "id": 238,
    "title": "Termux-Fuchsia",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Fuchsia in Termux",
    "downloadUrl": "pkg install termux-fuchsia"
},
{
    "id": 239,
    "title": "Termux-Zircon",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Zircon in Termux",
    "downloadUrl": "pkg install termux-zircon"
},
{
    "id": 240,
    "title": "Termux-SeL4",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "seL4 in Termux",
    "downloadUrl": "pkg install termux-sel4"
},
{
    "id": 241,
    "title": "Termux-GrapheneOS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "GrapheneOS in Termux",
    "downloadUrl": "pkg install termux-grapheneos"
},
{
    "id": 242,
    "title": "Termux-LineageOS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "LineageOS in Termux",
    "downloadUrl": "pkg install termux-lineageos"
},
{
    "id": 243,
    "title": "Termux-CyanogenMod",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "CyanogenMod in Termux",
    "downloadUrl": "pkg install termux-cyanogenmod"
},
{
    "id": 244,
    "title": "Termux-Replicant",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Replicant in Termux",
    "downloadUrl": "pkg install termux-replicant"
},
{
    "id": 245,
    "title": "Termux-PureOS",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "PureOS in Termux",
    "downloadUrl": "pkg install termux-pureos"
},
{
    "id": 246,
    "title": "Termux-Tails",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Tails in Termux",
    "downloadUrl": "pkg install termux-tails"
},
{
    "id": 247,
    "title": "Termux-Whonix",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Whonix in Termux",
    "downloadUrl": "pkg install termux-whonix"
},
{
    "id": 248,
    "title": "Termux-Qubes",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Qubes in Termux",
    "downloadUrl": "pkg install termux-qubes"
},
{
    "id": 249,
    "title": "Termux-Subgraph",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Subgraph in Termux",
    "downloadUrl": "pkg install termux-subgraph"
},
{
    "id": 250,
    "title": "Termux-I2P",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "I2P in Termux",
    "downloadUrl": "pkg install termux-i2p"
},
{
    "id": 251,
    "title": "Termux-Tor",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Tor in Termux",
    "downloadUrl": "pkg install termux-tor"
},
{
    "id": 252,
    "title": "Termux-Freenet",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Freenet in Termux",
    "downloadUrl": "pkg install termux-freenet"
},
{
    "id": 253,
    "title": "Termux-Zeronet",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Zeronet in Termux",
    "downloadUrl": "pkg install termux-zeronet"
},
{
    "id": 254,
    "title": "Termux-GNUnet",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "GNUnet in Termux",
    "downloadUrl": "pkg install termux-gnunet"
},
{
    "id": 255,
    "title": "Termux-RetroShare",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "RetroShare in Termux",
    "downloadUrl": "pkg install termux-retroshare"
},
{
    "id": 256,
    "title": "Termux-Syncthing",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Syncthing in Termux",
    "downloadUrl": "pkg install termux-syncthing"
},
{
    "id": 257,
    "title": "Termux-Resilio",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Resilio in Termux",
    "downloadUrl": "pkg install termux-resilio"
},
{
    "id": 258,
    "title": "Termux-BitTorrent",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "BitTorrent in Termux",
    "downloadUrl": "pkg install termux-bittorrent"
},
{
    "id": 259,
    "title": "Termux-Transmission",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Transmission in Termux",
    "downloadUrl": "pkg install termux-transmission"
},
    {
        "id": 260,
    "title": "Termux-qBittorrent",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "qBittorrent in Termux",
    "downloadUrl": "pkg install termux-qbittorrent"
},
{
    "id": 261,
    "title": "Termux-Deluge",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Deluge in Termux",
    "downloadUrl": "pkg install termux-deluge"
},
{
    "id": 262,
    "title": "Termux-Vuze",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "Vuze in Termux",
    "downloadUrl": "pkg install termux-vuze"
},
{
    "id": 263,
    "title": "Termux-μTorrent",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "μTorrent in Termux",
    "downloadUrl": "pkg install termux-utorrent"
},
{
    "id": 264,
    "title": "Termux-BitComet",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "BitComet in Termux",
    "downloadUrl": "pkg install termux-bitcomet"
},
{
    "id": 265,
    "title": "Termux-FrostWire",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "FrostWire in Termux",
    "downloadUrl": "pkg install termux-frostwire"
},
{
    "id": 266,
    "title": "Termux-LimeWire",
    "creator": "Termux",
    "image": "https://github.com/termux.png",
    "description": "LimeWire in Termux",
    "downloadUrl": "pkg install termux-limewire"
},
    {
    "id": 267,
    "title": "Aircrack-ng",
    "creator": "Thomas d'Otreppe",
    "image": "https://www.aircrack-ng.org/images/logo.png",
    "description": "Wireless network security suite",
    "downloadUrl": "apt install aircrack-ng"
},
{
    "id": 268,
    "title": "Burp Suite",
    "creator": "PortSwigger",
    "image": "https://portswigger.net/burp/favicon.ico",
    "description": "Web application security testing",
    "downloadUrl": "apt install burpsuite"
},
{
    "id": 269,
    "title": "Nmap",
    "creator": "Gordon Lyon",
    "image": "https://nmap.org/images/sitelogo.png",
    "description": "Network discovery and security auditing",
    "downloadUrl": "apt install nmap"
},
{
    "id": 270,
    "title": "Metasploit Framework",
    "creator": "Rapid7",
    "image": "https://avatars.githubusercontent.com/u/3814896",
    "description": "Penetration testing platform",
    "downloadUrl": "apt install metasploit-framework"
},
{
    "id": 271,
    "title": "Wireshark",
    "creator": "Gerald Combs",
    "image": "https://www.wireshark.org/assets/images/wsicon.svg",
    "description": "Network protocol analyzer",
    "downloadUrl": "apt install wireshark"
},
{
    "id": 272,
    "title": "John the Ripper",
    "creator": "Openwall",
    "image": "https://www.openwall.com/john/logo.png",
    "description": "Password cracking tool",
    "downloadUrl": "apt install john"
},
{
    "id": 273,
    "title": "Hydra",
    "creator": "van Hauser",
    "image": "https://github.com/vanhauser-thc.png",
    "description": "Network login cracker",
    "downloadUrl": "apt install hydra"
},
{
    "id": 274,
    "title": "SQLmap",
    "creator": "Bernardo Damele",
    "image": "https://sqlmap.org/images/sqlmap_logo.png",
    "description": "SQL injection tool",
    "downloadUrl": "apt install sqlmap"
},
{
    "id": 275,
    "title": "Maltego",
    "creator": "Paterva",
    "image": "https://www.maltego.com/img/favicon/apple-touch-icon.png",
    "description": "Open-source intelligence tool",
    "downloadUrl": "apt install maltego"
},
{
    "id": 276,
    "title": "OWASP ZAP",
    "creator": "OWASP",
    "image": "https://www.zaproxy.org/img/zap-logo.png",
    "description": "Web application scanner",
    "downloadUrl": "apt install zaproxy"
},
{
    "id": 277,
    "title": "Nikto",
    "creator": "Chris Sullo",
    "image": "https://cirt.net/images/nikto-logo.png",
    "description": "Web server scanner",
    "downloadUrl": "apt install nikto"
},
{
    "id": 278,
    "title": "Gobuster",
    "creator": "OJ Reeves",
    "image": "https://github.com/OJ/gobuster/raw/master/logo.png",
    "description": "Directory/file brute-forcing tool",
    "downloadUrl": "apt install gobuster"
},
{
    "id": 279,
    "title": "Hashcat",
    "creator": "Jens Steube",
    "image": "https://hashcat.net/hashcat/hashcat_logo.png",
    "description": "Advanced password recovery",
    "downloadUrl": "apt install hashcat"
},
{
    "id": 280,
    "title": "CrackMapExec",
    "creator": "byt3bl33d3r",
    "image": "https://github.com/byt3bl33d3r.png",
    "description": "Post-exploitation tool",
    "downloadUrl": "apt install crackmapexec"
},
{
    "id": 281,
    "title": "Responder",
    "creator": "Laurent Gaffié",
    "image": "https://github.com/lgandx.png",
    "description": "LLMNR/NBT-NS poisoner",
    "downloadUrl": "apt install responder"
},
{
    "id": 282,
    "title": "Impacket",
    "creator": "Core Security",
    "image": "https://github.com/SecureAuthCorp.png",
    "description": "Network protocol library",
    "downloadUrl": "apt install impacket-scripts"
},
{
    "id": 283,
    "title": "BloodHound",
    "creator": "SpecterOps",
    "image": "https://bloodhound.readthedocs.io/en/latest/_images/BloodHound-Logo.png",
    "description": "Active Directory analysis",
    "downloadUrl": "apt install bloodhound"
},
{
    "id": 284,
    "title": "Empire",
    "creator": "BC Security",
    "image": "https://github.com/BC-SECURITY.png",
    "description": "Post-exploitation framework",
    "downloadUrl": "apt install powershell-empire"
},
{
    "id": 285,
    "title": "Cobalt Strike",
    "creator": "Help Systems",
    "image": "https://www.cobaltstrike.com/images/cs-logo.svg",
    "description": "Commercial penetration testing tool",
    "downloadUrl": "Commercial license required"
},
{
    "id": 286,
    "title": "BeEF",
    "creator": "Wade Alcorn",
    "image": "https://beefproject.com/images/beef-logo.png",
    "description": "Browser exploitation framework",
    "downloadUrl": "apt install beef-xss"
},
{
    "id": 287,
    "title": "Social Engineering Toolkit",
    "creator": "TrustedSec",
    "image": "https://github.com/trustedsec.png",
    "description": "Social engineering attacks",
    "downloadUrl": "apt install set"
},
{
    "id": 288,
    "title": "WPScan",
    "creator": "WPScan Team",
    "image": "https://wpscan.com/assets/favicon-075eba76312e8421991a0c1f89a89ee81678bcde72319dd3e8047e2a47cd3a42.ico",
    "description": "WordPress vulnerability scanner",
    "downloadUrl": "apt install wpscan"
},
{
    "id": 289,
    "title": "Recon-ng",
    "creator": "Tim Tomes",
    "image": "https://github.com/lanmaster53.png",
    "description": "Web reconnaissance framework",
    "downloadUrl": "apt install recon-ng"
},
{
    "id": 290,
    "title": "TheHarvester",
    "creator": "Christian Martorella",
    "image": "https://github.com/laramies.png",
    "description": "Email/domain reconnaissance",
    "downloadUrl": "apt install theharvester"
},
{
    "id": 291,
    "title": "SpiderFoot",
    "creator": "Steve Micallef",
    "image": "https://www.spiderfoot.net/wp-content/uploads/2018/08/spiderfoot-logo.png",
    "description": "Open-source intelligence automation",
    "downloadUrl": "apt install spiderfoot"
},
{
    "id": 292,
    "title": "Sn1per",
    "creator": "1N3",
    "image": "https://github.com/1N3.png",
    "description": "Automated pentest framework",
    "downloadUrl": "apt install sniper"
},
{
    "id": 293,
    "title": "Faraday IDE",
    "creator": "FaradaySec",
    "image": "https://faradaysec.com/wp-content/uploads/2020/04/faraday_logo_white.png",
    "description": "Collaborative pentesting platform",
    "downloadUrl": "apt install faraday"
},
{
    "id": 294,
    "title": "Ettercap",
    "creator": "Ettercap Team",
    "image": "https://www.ettercap-project.org/wp-content/uploads/2013/01/ettercap_icon.png",
    "description": "Network interceptor",
    "downloadUrl": "apt install ettercap-graphical"
},
{
    "id": 295,
    "title": "Bettercap",
    "creator": "Simone Margaritelli",
    "image": "https://www.bettercap.org/img/logo.png",
    "description": "Network attack framework",
    "downloadUrl": "apt install bettercap"
},
{
    "id": 296,
    "title": "MITMf",
    "creator": "byt3bl33d3r",
    "image": "https://github.com/byt3bl33d3r.png",
    "description": "Man-in-the-middle framework",
    "downloadUrl": "git clone https://github.com/byt3bl33d3r/MITMf"
},
{
    "id": 297,
    "title": "Wifite",
    "creator": "Kimocoder",
    "image": "https://github.com/kimocoder.png",
    "description": "Wireless auditing tool",
    "downloadUrl": "apt install wifite"
},
{
    "id": 298,
    "title": "Kismet",
    "creator": "Mike Kershaw",
    "image": "https://www.kismetwireless.net/wp-content/uploads/2014/08/kismet-logo.png",
    "description": "Wireless network detector",
    "downloadUrl": "apt install kismet"
},
{
    "id": 299,
    "title": "Fern Wifi Cracker",
    "creator": "Savan Visalpara",
    "image": "https://github.com/savio-code.png",
    "description": "Wireless security tool",
    "downloadUrl": "apt install fern-wifi-cracker"
},
{
    "id": 300,
    "title": "Ghost-Phisher",
    "creator": "Savannah Code",
    "image": "https://github.com/savio-code.png",
    "description": "Network attack suite",
    "downloadUrl": "apt install ghost-phisher"
},
{
    "id": 301,
    "title": "Dsniff",
    "creator": "Dug Song",
    "image": "https://www.monkey.org/~dugsong/dsniff/dsniff-logo.png",
    "description": "Network audit and penetration tool",
    "downloadUrl": "apt install dsniff"
},
{
    "id": 302,
    "title": "Netcat",
    "creator": "Hobbit",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Netcat_Logo.svg/1200px-Netcat_Logo.svg.png",
    "description": "Network utility tool",
    "downloadUrl": "apt install netcat"
},
{
    "id": 303,
    "title": "Socat",
    "creator": "Gerhard Rieger",
    "image": "https://linux.die.net/man/1/socat",
    "description": "Multipurpose relay tool",
    "downloadUrl": "apt install socat"
},
{
    "id": 304,
    "title": "Tcpdump",
    "creator": "Van Jacobson",
    "image": "https://www.tcpdump.org/images/tcpdump.gif",
    "description": "Packet analyzer",
    "downloadUrl": "apt install tcpdump"
},
{
    "id": 305,
    "title": "Hping3",
    "creator": "Salvatore Sanfilippo",
    "image": "https://github.com/antirez.png",
    "description": "Network probing tool",
    "downloadUrl": "apt install hping3"
},
{
    "id": 306,
    "title": "Nessus",
    "creator": "Tenable",
    "image": "https://www.tenable.com/sites/all/themes/tenable/favicon.ico",
    "description": "Vulnerability scanner",
    "downloadUrl": "Commercial license required"
},
{
    "id": 307,
    "title": "OpenVAS",
    "creator": "Greenbone Networks",
    "image": "https://www.greenbone.net/wp-content/uploads/gb_logo_resize_1.png",
    "description": "Vulnerability management",
    "downloadUrl": "apt install openvas"
},
{
    "id": 308,
    "title": "Nexpose",
    "creator": "Rapid7",
    "image": "https://www.rapid7.com/favicon.ico",
    "description": "Vulnerability scanner",
    "downloadUrl": "Commercial license required"
},
{
    "id": 309,
    "title": "Lynis",
    "creator": "CISOfy",
    "image": "https://cisofy.com/wp-content/uploads/2018/06/lynis-logo.png",
    "description": "Security auditing tool",
    "downloadUrl": "apt install lynis"
},
{
    "id": 310,
    "title": "Chkrootkit",
    "creator": "Nelson Murilo",
    "image": "https://www.chkrootkit.org/favicon.ico",
    "description": "Rootkit detector",
    "downloadUrl": "apt install chkrootkit"
},
{
    "id": 311,
    "title": "Rkhunter",
    "creator": "Michael Boelen",
    "image": "https://rkhunter.sourceforge.net/favicon.ico",
    "description": "Rootkit scanner",
    "downloadUrl": "apt install rkhunter"
},
{
    "id": 312,
    "title": "Volatility",
    "creator": "Volatility Foundation",
    "image": "https://www.volatilityfoundation.org/wp-content/uploads/2019/01/volatility-logo-1.png",
    "description": "Memory forensics framework",
    "downloadUrl": "apt install volatility"
},
{
    "id": 313,
    "title": "Autopsy",
    "creator": "Basis Technology",
    "image": "https://www.autopsy.com/wp-content/uploads/2019/09/autopsy_logo.png",
    "description": "Digital forensics platform",
    "downloadUrl": "apt install autopsy"
},
{
    "id": 314,
    "title": "Binwalk",
    "creator": "Craig Heffner",
    "image": "https://github.com/ReFirmLabs.png",
    "description": "Firmware analysis tool",
    "downloadUrl": "apt install binwalk"
},
{
    "id": 315,
    "title": "Foremost",
    "creator": "US Air Force Office",
    "image": "https://github.com/korczis.png",
    "description": "File recovery tool",
    "downloadUrl": "apt install foremost"
},
{
    "id": 316,
    "title": "Scapy",
    "creator": "Philippe Biondi",
    "image": "https://scapy.net/_static/scapy_logo.png",
    "description": "Packet manipulation tool",
    "downloadUrl": "apt install scapy"
},
{
    "id": 317,
    "title": "Yersinia",
    "creator": "Alfredo Andrés Omella",
    "image": "https://github.com/tomac.png",
    "description": "Network layer attacks",
    "downloadUrl": "apt install yersinia"
},
{
    "id": 318,
    "title": "THC-IPV6",
    "creator": "The Hacker's Choice",
    "image": "https://github.com/vanhauser-thc.png",
    "description": "IPv6 attack toolkit",
    "downloadUrl": "apt install thc-ipv6"
},
{
    "id": 319,
    "title": "SipVicious",
    "creator": "Sandstorm Enterprises",
    "image": "https://github.com/EnableSecurity.png",
    "description": "SIP security testing",
    "downloadUrl": "apt install sipvicious"
},
{
    "id": 320,
    "title": "Sslstrip",
    "creator": "Moxie Marlinspike",
    "image": "https://github.com/moxie0.png",
    "description": "SSL stripping attacks",
    "downloadUrl": "apt install sslstrip"
},
{
    "id": 321,
    "title": "W3af",
    "creator": "Andres Riancho",
    "image": "https://w3af.org/theme/img/logo.png",
    "description": "Web application scanner",
    "downloadUrl": "apt install w3af"
},
{
    "id": 322,
    "title": "Skipfish",
    "creator": "Michal Zalewski",
    "image": "https://code.google.com/archive/p/skipfish/logo",
    "description": "Web application scanner",
    "downloadUrl": "apt install skipfish"
},
{
    "id": 323,
    "title": "Dirb",
    "creator": "The Dark Raver",
    "image": "https://github.com/v0re.png",
    "description": "Web content scanner",
    "downloadUrl": "apt install dirb"
},
{
    "id": 324,
    "title": "Wafw00f",
    "creator": "Sandro Gauci",
    "image": "https://github.com/sandrogauci.png",
    "description": "Web Application Firewall detector",
    "downloadUrl": "apt install wafw00f"
},
{
    "id": 325,
    "title": "Commix",
    "creator": "Anastasios Stasinopoulos",
    "image": "https://github.com/commixproject.png",
    "description": "Automated command injection",
    "downloadUrl": "apt install commix"
},
{
    "id": 326,
    "title": "XSStrike",
    "creator": "s0md3v",
    "image": "https://github.com/s0md3v.png",
    "description": "Advanced XSS detection",
    "downloadUrl": "git clone https://github.com/s0md3v/XSStrike"
},
{
    "id": 327,
    "title": "XSSer",
    "creator": "Gonzalo Alvarez",
    "image": "https://github.com/epsylon.png",
    "description": "XSS vulnerability scanner",
    "downloadUrl": "apt install xsser"
},
{
    "id": 328,
    "title": "BeEF",
    "creator": "Wade Alcorn",
    "image": "https://beefproject.com/images/beef-logo.png",
    "description": "Browser exploitation framework",
    "downloadUrl": "apt install beef-xss"
},
{
    "id": 329,
    "title": "Fimap",
    "creator": "Iman Karim",
    "image": "https://github.com/kurobeats.png",
    "description": "Local/remote file inclusion",
    "downloadUrl": "apt install fimap"
},
{
    "id": 330,
    "title": "Joomscan",
    "creator": "Aung Khant",
    "image": "https://github.com/rezasp.png",
    "description": "Joomla vulnerability scanner",
    "downloadUrl": "apt install joomscan"
},
{
    "id": 331,
    "title": "Droopescan",
    "creator": "Droope",
    "image": "https://github.com/droope.png",
    "description": "Drupal scanner",
    "downloadUrl": "apt install droopescan"
},
{
    "id": 332,
    "title": "CMSmap",
    "creator": "Dionach",
    "image": "https://github.com/Dionach.png",
    "description": "CMS vulnerability scanner",
    "downloadUrl": "apt install cmsmap"
},
{
    "id": 333,
    "title": "WhatWeb",
    "creator": "Andrew Horton",
    "image": "https://www.morningstarsecurity.com/research/whatweb",
    "description": "Web technology identifier",
    "downloadUrl": "apt install whatweb"
},
{
    "id": 334,
    "title": "EyeWitness",
    "creator": "Chris Truncer",
    "image": "https://github.com/ChrisTruncer.png",
    "description": "Website screenshot tool",
    "downloadUrl": "apt install eyewitness"
},
{
    "id": 335,
    "title": "Golismero",
    "creator": "Daniel Garcia",
    "image": "https://github.com/golismero.png",
    "description": "Web security framework",
    "downloadUrl": "apt install golismero"
},
{
    "id": 336,
    "title": "FuzzDB",
    "creator": "Adam Muntner",
    "image": "https://github.com/fuzzdb-project.png",
    "description": "Attack pattern database",
    "downloadUrl": "apt install fuzzdb"
},
{
    "id": 337,
    "title": "SecLists",
    "creator": "Daniel Miessler",
    "image": "https://github.com/danielmiessler.png",
    "description": "Security testing wordlists",
    "downloadUrl": "apt install seclists"
},
{
    "id": 338,
    "title": "CeWL",
    "creator": "Robin Wood",
    "image": "https://digi.ninja/images/cewl_logo.png",
    "description": "Custom wordlist generator",
    "downloadUrl": "apt install cewl"
},
{
    "id": 339,
    "title": "Crunch",
    "creator": "Mimayin",
    "image": "https://github.com/crunchsec.png",
    "description": "Wordlist generator",
    "downloadUrl": "apt install crunch"
},
{
    "id": 340,
    "title": "Hash-Identifier",
    "creator": "BlackPloit",
    "image": "https://github.com/blackploit.png",
    "description": "Hash type identifier",
    "downloadUrl": "apt install hash-identifier"
},
{
    "id": 341,
    "title": "PDFcrack",
    "creator": "Anders Nilsson",
    "image": "https://github.com/andersn.png",
    "description": "PDF password recovery",
    "downloadUrl": "apt install pdfcrack"
},
{
    "id": 342,
    "title": "Fcrackzip",
    "creator": "Marc Lehmann",
    "image": "https://github.com/psychon.png",
    "description": "Zip password cracker",
    "downloadUrl": "apt install fcrackzip"
},
{
    "id": 343,
    "title": "Johnny",
    "creator": "Shinnok",
    "image": "https://github.com/shinnok.png",
    "description": "GUI for John the Ripper",
    "downloadUrl": "apt install johnny"
},
{
    "id": 344,
    "title": "Ophcrack",
    "creator": "Objectif Securité",
    "image": "https://ophcrack.sourceforge.io/favicon.ico",
    "description": "Windows password cracker",
    "downloadUrl": "apt install ophcrack"
},
{
    "id": 345,
    "title": "Sucrack",
    "creator": "Andreas Bogk",
    "image": "https://github.com/andreasbogk.png",
    "description": "su brute force tool",
    "downloadUrl": "apt install sucrack"
},
{
    "id": 346,
    "title": "Patator",
    "creator": "Lanjelot",
    "image": "https://github.com/lanjelot.png",
    "description": "Multi-purpose brute-forcer",
    "downloadUrl": "apt install patator"
},
{
    "id": 347,
    "title": "THC-Hydra",
    "creator": "van Hauser",
    "image": "https://github.com/vanhauser-thc.png",
    "description": "Network login cracker",
    "downloadUrl": "apt install hydra"
},
{
    "id": 348,
    "title": "Crowbar",
    "creator": "galkan",
    "image": "https://github.com/galkan.png",
    "description": "Brute force tool",
    "downloadUrl": "apt install crowbar"
},
{
    "id": 349,
    "title": "Ncrack",
    "creator": "Nmap Project",
    "image": "https://nmap.org/images/sitelogo.png",
    "description": "Network authentication tool",
    "downloadUrl": "apt install ncrack"
},
{
    "id": 350,
    "title": "Medusa",
    "creator": "JoMo-Kun",
    "image": "https://github.com/jmk.png",
    "description": "Parallel login brute-forcer",
    "downloadUrl": "apt install medusa"
},
{
    "id": 351,
    "title": "Sqlninja",
    "creator": "Alessandro Tanasi",
    "image": "https://github.com/antanapi.png",
    "description": "SQL Server injection tool",
    "downloadUrl": "apt install sqlninja"
},
{
    "id": 352,
    "title": "HexorBase",
    "creator": "Kostas Milonas",
    "image": "https://github.com/0x4D31.png",
    "description": "Database exploitation tool",
    "downloadUrl": "apt install hexorbase"
},
{
    "id": 353,
    "title": "BBQSQL",
    "creator": "Ben Toews",
    "image": "https://github.com/mastahyeti.png",
    "description": "Blind SQL injection tool",
    "downloadUrl": "apt install bbqsql"
},
{
    "id": 354,
    "title": "JSql Injection",
    "creator": "Jean-François Maury",
    "image": "https://github.com/ron190.png",
    "description": "Java SQL injection tool",
    "downloadUrl": "apt install jsql-injection"
},
{
    "id": 355,
    "title": "Mimikatz",
    "creator": "Benjamin Delpy",
    "image": "https://github.com/gentilkiwi.png",
    "description": "Windows credential extraction",
    "downloadUrl": "apt install mimikatz"
},
{
    "id": 355,
    "title": "Mimikatz",
    "creator": "Benjamin Delpy",
    "image": "https://github.com/gentilkiwi.png",
    "description": "Windows credential extraction",
    "downloadUrl": "apt install mimikatz"
},
{
    "id": 356,
    "title": "PowerSploit",
    "creator": "Matt Graeber",
    "image": "https://github.com/PowerShellMafia.png",
    "description": "PowerShell post-exploitation",
    "downloadUrl": "apt install powersploit"
},
{
    "id": 357,
    "title": "Empire",
    "creator": "BC Security",
    "image": "https://github.com/BC-SECURITY.png",
    "description": "Post-exploitation framework",
    "downloadUrl": "apt install powershell-empire"
},
{
    "id": 358,
    "title": "DeathStar",
    "creator": "byt3bl33d3r",
    "image": "https://github.com/byt3bl33d3r.png",
    "description": "Automate getting Domain Admin",
    "downloadUrl": "git clone https://github.com/byt3bl33d3r/DeathStar"
},
{
    "id": 359,
    "title": "Impacket",
    "creator": "Core Security",
    "image": "https://github.com/SecureAuthCorp.png",
    "description": "Network protocol library",
    "downloadUrl": "apt install impacket-scripts"
},
{
    "id": 360,
    "title": "Responder",
    "creator": "Laurent Gaffié",
    "image": "https://github.com/lgandx.png",
    "description": "LLMNR/NBT-NS poisoner",
    "downloadUrl": "apt install responder"
},
{
    "id": 361,
    "title": "Mitm6",
    "creator": "Fox-IT",
    "image": "https://github.com/fox-it.png",
    "description": "IPv6 attack tool",
    "downloadUrl": "apt install mitm6"
},
{
    "id": 362,
    "title": "Kerberoast",
    "creator": "Tim Medin",
    "image": "https://github.com/TimMedin.png",
    "description": "Kerberos attack toolkit",
    "downloadUrl": "apt install kerberoast"
},
{
    "id": 363,
    "title": "Rubeus",
    "creator": "HarmJ0y",
    "image": "https://github.com/GhostPack.png",
    "description": "Kerberos exploitation tool",
    "downloadUrl": "apt install rubeus"
},
{
    "id": 364,
    "title": "CrackMapExec",
    "creator": "byt3bl33d3r",
    "image": "https://github.com/byt3bl33d3r.png",
    "description": "Post-exploitation tool",
    "downloadUrl": "apt install crackmapexec"
},
{
    "id": 365,
    "title": "BloodHound",
    "creator": "SpecterOps",
    "image": "https://bloodhound.readthedocs.io/en/latest/_images/BloodHound-Logo.png",
    "description": "Active Directory analysis",
    "downloadUrl": "apt install bloodhound"
},
{
    "id": 366,
    "title": "SniffAir",
    "creator": "Tylous",
    "image": "https://github.com/Tylous.png",
    "description": "Wireless security framework",
    "downloadUrl": "apt install sniffair"
},
    {
    "id": 367,
    "title": "Hollow Knight",
    "creator": "Team Cherry",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
    "description": "An epic action adventure through a vast ruined kingdom of insects and heroes",
    "downloadUrl": "https://store.steampowered.com/app/367520/Hollow_Knight/"
},
{
    "id": 368,
    "title": "Stardew Valley",
    "creator": "ConcernedApe",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
    "description": "A charming farming simulation game where you restore your grandfather's old farm",
    "downloadUrl": "https://store.steampowered.com/app/413150/Stardew_Valley/"
},
{
    "id": 369,
    "title": "Celeste",
    "creator": "Maddy Makes Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg",
    "description": "A platformer about climbing a mountain and overcoming personal struggles",
    "downloadUrl": "https://store.steampowered.com/app/504230/Celeste/"
},
{
    "id": 370,
    "title": "Terraria",
    "creator": "Re-Logic",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg",
    "description": "A 2D sandbox adventure with exploration, building, crafting and combat",
    "downloadUrl": "https://store.steampowered.com/app/105600/Terraria/"
},
{
    "id": 371,
    "title": "Undertale",
    "creator": "Toby Fox",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/391540/header.jpg",
    "description": "An RPG game where you don't have to destroy anyone",
    "downloadUrl": "https://store.steampowered.com/app/391540/Undertale/"
},
{
    "id": 372,
    "title": "The Binding of Isaac: Rebirth",
    "creator": "Nicalis, Inc.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/250900/header.jpg",
    "description": "A randomly generated action RPG shooter with heavy Rogue-like elements",
    "downloadUrl": "https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/"
},
{
    "id": 373,
    "title": "Dead Cells",
    "creator": "Motion Twin",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/588650/header.jpg",
    "description": "A roguevania action-platformer with permadeath and nonlinear progression",
    "downloadUrl": "https://store.steampowered.com/app/588650/Dead_Cells/"
},
{
    "id": 374,
    "title": "Cuphead",
    "creator": "Studio MDHR",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg",
    "description": "A classic run and gun action game heavily focused on boss battles",
    "downloadUrl": "https://store.steampowered.com/app/268910/Cuphead/"
},
{
    "id": 375,
    "title": "Hades",
    "creator": "Supergiant Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
    "description": "A rogue-like dungeon crawler where you defy the god of the dead",
    "downloadUrl": "https://store.steampowered.com/app/1145360/Hades/"
},
{
    "id": 376,
    "title": "Ori and the Blind Forest",
    "creator": "Moon Studios",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/261570/header.jpg",
    "description": "A beautifully crafted platform adventure with a touching story",
    "downloadUrl": "https://store.steampowered.com/app/261570/Ori_and_the_Blind_Forest/"
},
{
    "id": 377,
    "title": "Slay the Spire",
    "creator": "Mega Crit Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/646570/header.jpg",
    "description": "A roguelike deck-building game where you build a unique deck to climb the spire",
    "downloadUrl": "https://store.steampowered.com/app/646570/Slay_the_Spire/"
},
{
    "id": 378,
    "title": "Among Us",
    "creator": "InnerSloth",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg",
    "description": "A multiplayer game of teamwork and betrayal set in space",
    "downloadUrl": "https://store.steampowered.com/app/945360/Among_Us/"
},
{
    "id": 379,
    "title": "Risk of Rain 2",
    "creator": "Hopoo Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/632360/header.jpg",
    "description": "A 3D roguelike shooter with a focus on replayability and loot",
    "downloadUrl": "https://store.steampowered.com/app/632360/Risk_of_Rain_2/"
},
{
    "id": 380,
    "title": "Valheim",
    "creator": "Iron Gate AB",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/892970/header.jpg",
    "description": "A brutal exploration and survival game for 1-10 players in a procedurally-generated world",
    "downloadUrl": "https://store.steampowered.com/app/892970/Valheim/"
},
{
    "id": 381,
    "title": "Deep Rock Galactic",
    "creator": "Ghost Ship Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/548430/header.jpg",
    "description": "A 1-4 player co-op FPS featuring badass space Dwarves, destructible environments, and procedurally-generated caves",
    "downloadUrl": "https://store.steampowered.com/app/548430/Deep_Rock_Galactic/"
},
{
    "id": 382,
    "title": "Factorio",
    "creator": "Wube Software",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/427520/header.jpg",
    "description": "A game about building and creating automated factories to produce increasingly complex items",
    "downloadUrl": "https://store.steampowered.com/app/427520/Factorio/"
},
{
    "id": 383,
    "title": "RimWorld",
    "creator": "Ludeon Studios",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/294100/header.jpg",
    "description": "A sci-fi colony sim driven by an intelligent AI storyteller",
    "downloadUrl": "https://store.steampowered.com/app/294100/RimWorld/"
},
{
    "id": 384,
    "title": "Subnautica",
    "creator": "Unknown Worlds Entertainment",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/264710/header.jpg",
    "description": "An underwater adventure game set on an alien ocean planet",
    "downloadUrl": "https://store.steampowered.com/app/264710/Subnautica/"
},
{
    "id": 385,
    "title": "Outer Wilds",
    "creator": "Mobius Digital",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/753640/header.jpg",
    "description": "An open world mystery about a solar system trapped in an endless time loop",
    "downloadUrl": "https://store.steampowered.com/app/753640/Outer_Wilds/"
},
{
    "id": 386,
    "title": "Disco Elysium",
    "creator": "ZA/UM",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/632470/header.jpg",
    "description": "A groundbreaking role playing game where you play a detective with a unique skill system",
    "downloadUrl": "https://store.steampowered.com/app/632470/Disco_Elysium/"
},
{
    "id": 387,
    "title": "Return of the Obra Dinn",
    "creator": "Lucas Pope",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/653530/header.jpg",
    "description": "A first-person mystery adventure based on exploration and logical deduction",
    "downloadUrl": "https://store.steampowered.com/app/653530/Return_of_the_Obra_Dinn/"
},
{
    "id": 388,
    "title": "Into the Breach",
    "creator": "Subset Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/590380/header.jpg",
    "description": "A turn-based strategy game where you control powerful mechs to defend cities from giant monsters",
    "downloadUrl": "https://store.steampowered.com/app/590380/Into_the_Breach/"
},
{
    "id": 389,
    "title": "FTL: Faster Than Light",
    "creator": "Subset Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/212680/header.jpg",
    "description": "A spaceship simulation roguelike-like where you control the crew of a single spacecraft",
    "downloadUrl": "https://store.steampowered.com/app/212680/FTL_Faster_Than_Light/"
},
{
    "id": 390,
    "title": "Darkest Dungeon",
    "creator": "Red Hook Studios",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/262060/header.jpg",
    "description": "A challenging gothic roguelike turn-based RPG about the psychological stresses of adventuring",
    "downloadUrl": "https://store.steampowered.com/app/262060/Darkest_Dungeon/"
},
{
    "id": 391,
    "title": "Bastion",
    "creator": "Supergiant Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/107100/header.jpg",
    "description": "An action RPG with a reactive narrator, hand-painted artwork, and responsive gameplay",
    "downloadUrl": "https://store.steampowered.com/app/107100/Bastion/"
},
{
    "id": 392,
    "title": "Transistor",
    "creator": "Supergiant Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/237930/header.jpg",
    "description": "A sci-fi action RPG that combines responsive gameplay with a strong narrative",
    "downloadUrl": "https://store.steampowered.com/app/237930/Transistor/"
},
{
    "id": 393,
    "title": "Pyre",
    "creator": "Supergiant Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/462770/header.jpg",
    "description": "A party-based RPG in which you lead a band of exiles through a series of mystical competitions",
    "downloadUrl": "https://store.steampowered.com/app/462770/Pyre/"
},
{
    "id": 394,
    "title": "Mark of the Ninja",
    "creator": "Klei Entertainment",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/214560/header.jpg",
    "description": "A 2D stealth game where you must be silent, agile and clever to outwit your opponents",
    "downloadUrl": "https://store.steampowered.com/app/214560/Mark_of_the_Ninja/"
},
{
    "id": 395,
    "title": "Don't Starve",
    "creator": "Klei Entertainment",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg",
    "description": "An uncompromising wilderness survival game full of science and magic",
    "downloadUrl": "https://store.steampowered.com/app/219740/Dont_Starve/"
},
{
    "id": 396,
    "title": "Oxygen Not Included",
    "creator": "Klei Entertainment",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/457140/header.jpg",
    "description": "A space-colony simulation game where you manage your colonists and help them dig, build and maintain a subterranean asteroid base",
    "downloadUrl": "https://store.steampowered.com/app/457140/Oxygen_Not_Included/"
},
{
    "id": 397,
    "title": "Inscryption",
    "creator": "Daniel Mullins Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1092790/header.jpg",
    "description": "A dark narrative-driven card game with escape room elements and psychological horror",
    "downloadUrl": "https://store.steampowered.com/app/1092790/Inscryption/"
},
{
    "id": 398,
    "title": "The Witness",
    "creator": "Thekla, Inc.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/210970/header.jpg",
    "description": "A single-player puzzle game in an open world with dozens of locations to explore",
    "downloadUrl": "https://store.steampowered.com/app/210970/The_Witness/"
},
{
    "id": 399,
    "title": "Superhot",
    "creator": "SUPERHOT Team",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/322500/header.jpg",
    "description": "A first-person shooter where time moves only when you move",
    "downloadUrl": "https://store.steampowered.com/app/322500/SUPERHOT/"
},
{
    "id": 400,
    "title": "Hotline Miami",
    "creator": "Dennaton Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/219150/header.jpg",
    "description": "A high-octane action game overflowing with raw brutality, hard-boiled gunplay and skull crushing close combat",
    "downloadUrl": "https://store.steampowered.com/app/219150/Hotline_Miami/"
},
{
    "id": 401,
    "title": "Katana ZERO",
    "creator": "Askiisoft",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/460950/header.jpg",
    "description": "A stylish neo-noir action platformer featuring breakneck action and instant-death combat",
    "downloadUrl": "https://store.steampowered.com/app/460950/Katana_ZERO/"
},
{
    "id": 402,
    "title": "A Short Hike",
    "creator": "adamgryu",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1055540/header.jpg",
    "description": "A lovely little exploration game about climbing a mountain at your own pace",
    "downloadUrl": "https://store.steampowered.com/app/1055540/A_Short_Hike/"
},
{
    "id": 403,
    "title": "Papers, Please",
    "creator": "Lucas Pope",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/239030/header.jpg",
    "description": "A dystopian document thriller where you play as an immigration inspector",
    "downloadUrl": "https://store.steampowered.com/app/239030/Papers_Please/"
},
{
    "id": 404,
    "title": "The Stanley Parable",
    "creator": "Galactic Cafe",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/221910/header.jpg",
    "description": "A first person exploration game that plays with narrative, choice and consequence",
    "downloadUrl": "https://store.steampowered.com/app/221910/The_Stanley_Parable/"
},
{
    "id": 405,
    "title": "Firewatch",
    "creator": "Campo Santo",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/383870/header.jpg",
    "description": "A first-person mystery set in the Wyoming wilderness where your only emotional lifeline is the person on the other end of a handheld radio",
    "downloadUrl": "https://store.steampowered.com/app/383870/Firewatch/"
},
{
    "id": 406,
    "title": "What Remains of Edith Finch",
    "creator": "Giant Sparrow",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/501300/header.jpg",
    "description": "A collection of strange tales about a family in Washington state",
    "downloadUrl": "https://store.steampowered.com/app/501300/What_Remains_of_Edith_Finch/"
},
{
    "id": 407,
    "title": "Gris",
    "creator": "Nomada Studio",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/683320/header.jpg",
    "description": "A serene and evocative experience free of danger, frustration or death",
    "downloadUrl": "https://store.steampowered.com/app/683320/GRIS/"
},
{
    "id": 408,
    "title": "Journey",
    "creator": "thatgamecompany",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/638230/header.jpg",
    "description": "An exotic adventure with a more serious tone, presenting a unique vision of an online adventure experience",
    "downloadUrl": "https://store.steampowered.com/app/638230/Journey/"
},
{
    "id": 409,
    "title": "ABZÛ",
    "creator": "Giant Squid",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/384190/header.jpg",
    "description": "From the art director of Journey, a beautiful underwater adventure that evokes the dream of diving",
    "downloadUrl": "https://store.steampowered.com/app/384190/ABZ/"
},
{
    "id": 410,
    "title": "The Talos Principle",
    "creator": "Croteam",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/257510/header.jpg",
    "description": "A philosophical first-person puzzle game from the creators of Serious Sam",
    "downloadUrl": "https://store.steampowered.com/app/257510/The_Talos_Principle/"
},
{
    "id": 411,
    "title": "The Swapper",
    "creator": "Facepalm Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/231160/header.jpg",
    "description": "A thoughtful, atmospheric puzzle platformer set in the furthest reaches of space",
    "downloadUrl": "https://store.steampowered.com/app/231160/The_Swapper/"
},
{
    "id": 412,
    "title": "Braid",
    "creator": "Number None",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/26800/header.jpg",
    "description": "A puzzle-platformer where you manipulate the flow of time in strange and unusual ways",
    "downloadUrl": "https://store.steampowered.com/app/26800/Braid/"
},
{
    "id": 413,
    "title": "Limbo",
    "creator": "Playdead",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/48000/header.jpg",
    "description": "A black and white puzzle-platformer about a boy searching for his sister",
    "downloadUrl": "https://store.steampowered.com/app/48000/Limbo/"
},
{
    "id": 414,
    "title": "Inside",
    "creator": "Playdead",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/304430/header.jpg",
    "description": "A dark, narrative-driven platformer combining intense action with challenging puzzles",
    "downloadUrl": "https://store.steampowered.com/app/304430/INSIDE/"
},
{
    "id": 415,
    "title": "Little Nightmares",
    "creator": "Tarsier Studios",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/424840/header.jpg",
    "description": "A dark whimsical tale about Six, a little girl trapped in a mysterious world called The Maw",
    "downloadUrl": "https://store.steampowered.com/app/424840/Little_Nightmares/"
},
{
    "id": 416,
    "title": "SOMA",
    "creator": "Frictional Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/282140/header.jpg",
    "description": "A sci-fi horror game from the creators of Amnesia: The Dark Descent",
    "downloadUrl": "https://store.steampowered.com/app/282140/SOMA/"
},
{
    "id": 417,
    "title": "Amnesia: The Dark Descent",
    "creator": "Frictional Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/57300/header.jpg",
    "description": "A first person survival horror where you must escape the shadows hunting you",
    "downloadUrl": "https://store.steampowered.com/app/57300/Amnesia_The_Dark_Descent/"
},
{
    "id": 418,
    "title": "Outlast",
    "creator": "Red Barrels",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/238320/header.jpg",
    "description": "A first-person survival horror game where you investigate a remote psychiatric hospital",
    "downloadUrl": "https://store.steampowered.com/app/238320/Outlast/"
},
{
    "id": 419,
    "title": "Alien: Isolation",
    "creator": "Creative Assembly",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/214490/header.jpg",
    "description": "A survival horror game capturing the fear and tension evoked by Ridley Scott's 1979 classic film",
    "downloadUrl": "https://store.steampowered.com/app/214490/Alien_Isolation/"
},
{
    "id": 420,
    "title": "Resident Evil 2 Remake",
    "creator": "CAPCOM Co., Ltd.",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/883710/header.jpg",
    "description": "A complete remake of the classic survival horror game Resident Evil 2",
    "downloadUrl": "https://store.steampowered.com/app/883710/Resident_Evil_2/"
},
{
    "id": 421,
    "title": "Dead Space",
    "creator": "EA Redwood Shores",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/17470/header.jpg",
    "description": "A sci-fi survival horror game set aboard a stricken mining spacecraft",
    "downloadUrl": "https://store.steampowered.com/app/17470/Dead_Space/"
},
{
    "id": 422,
    "title": "Doki Doki Literature Club!",
    "creator": "Team Salvato",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/698780/header.jpg",
    "description": "A psychological horror story disguised as a cute dating sim",
    "downloadUrl": "https://store.steampowered.com/app/698780/Doki_Doki_Literature_Club/"
},
{
    "id": 423,
    "title": "Five Nights at Freddy's",
    "creator": "Scott Cawthon",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/319510/header.jpg",
    "description": "A point-and-click survival horror where you must survive against animatronic characters",
    "downloadUrl": "https://store.steampowered.com/app/319510/Five_Nights_at_Freddys/"
},
{
    "id": 424,
    "title": "Phasmophobia",
    "creator": "Kinetic Games",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/739630/header.jpg",
    "description": "A 4-player online co-op psychological horror where you investigate paranormal activity",
    "downloadUrl": "https://store.steampowered.com/app/739630/Phasmophobia/"
},
    {
        "id": 446,
        "title": "Bitdefender Antivirus Plus",
        "creator": "Bitdefender",
        "image": "https://www.bitdefender.com/content/dam/bitdefender-com/en/logos/product-logos/bitdefender-antivirus-plus-logo.png",
        "description": "Advanced antivirus protection with multi-layer ransomware defense",
        "downloadUrl": "https://www.bitdefender.com/downloads/"
    },
    {
        "id": 447,
        "title": "Norton AntiVirus Plus",
        "creator": "NortonLifeLock",
        "image": "https://www.nortonlifelock.com/content/dam/global/images/product/antivirus/nav-plus/nav-plus-3-device.png",
        "description": "Real-time threat protection against existing and emerging malware",
        "downloadUrl": "https://us.norton.com/downloads"
    },
    {
        "id": 448,
        "title": "Kaspersky Anti-Virus",
        "creator": "Kaspersky Lab",
        "image": "https://media.kasperskydaily.com/wp-content/uploads/sites/85/2021/03/01090141/antivirus-plus-2021-featured.jpg",
        "description": "Essential protection against viruses, ransomware & other threats",
        "downloadUrl": "https://www.kaspersky.com/downloads"
    },
    {
        "id": 449,
        "title": "McAfee Total Protection",
        "creator": "McAfee",
        "image": "https://www.mcafee.com/content/dam/global/images/product-images/total-protection/total-protection-hero.png",
        "description": "Comprehensive antivirus and internet security suite",
        "downloadUrl": "https://www.mcafee.com/downloads"
    },
    {
        "id": 450,
        "title": "Avast Free Antivirus",
        "creator": "Avast",
        "image": "https://www.avast.com/images/products/avast-free-antivirus.png",
        "description": "Free antivirus with basic protection against malware and viruses",
        "downloadUrl": "https://www.avast.com/download-thank-you.php"
    },
    {
        "id": 451,
        "title": "AVG AntiVirus Free",
        "creator": "AVG Technologies",
        "image": "https://www.avg.com/content/dam/avg/images/product-tiles/antivirus-free/antivirus-free-tile.png",
        "description": "Free essential protection against viruses, malware and more",
        "downloadUrl": "https://www.avg.com/download"
    },
    {
        "id": 452,
        "title": "ESET NOD32 Antivirus",
        "creator": "ESET",
        "image": "https://www.eset.com/fileadmin/images-www/products/nod32/nod32-box-shot.png",
        "description": "Lightweight antivirus with advanced detection capabilities",
        "downloadUrl": "https://www.eset.com/us/download/home/"
    },
    {
        "id": 453,
        "title": "Malwarebytes Premium",
        "creator": "Malwarebytes",
        "image": "https://www.malwarebytes.com/images/products/premium/hero.png",
        "description": "Advanced malware protection with anti-exploit technology",
        "downloadUrl": "https://www.malwarebytes.com/premium"
    },
    {
        "id": 454,
        "title": "Trend Micro Antivirus+ Security",
        "creator": "Trend Micro",
        "image": "https://www.trendmicro.com/content/dam/trendmicro/global/en/product/antivirus-plus/antivirus-plus-product-image.png",
        "description": "Protection against ransomware, online threats and fraud",
        "downloadUrl": "https://www.trendmicro.com/downloadme"
    },
    {
        "id": 455,
        "title": "Webroot SecureAnywhere AntiVirus",
        "creator": "Webroot",
        "image": "https://www.webroot.com/content/dam/webroot/shared/images/products/antivirus/antivirus-box-shot.png",
        "description": "Cloud-based lightweight antivirus with real-time protection",
        "downloadUrl": "https://www.webroot.com/us/en/home/products/antivirus"
    },
    {
        "id": 456,
        "title": "Sophos Home",
        "creator": "Sophos",
        "image": "https://www.sophos.com/content/dam/sophos/en-us/products/home/sophos-home-premium/product-shot.png",
        "description": "AI-powered antivirus with remote management capabilities",
        "downloadUrl": "https://www.sophos.com/products/free-tools/sophos-home"
    },
    {
        "id": 457,
        "title": "F-Secure Anti-Virus",
        "creator": "F-Secure",
        "image": "https://www.f-secure.com/content/dam/f-secure/en/products/antivirus/antivirus-product-shot.png",
        "description": "Powerful protection against viruses and online threats",
        "downloadUrl": "https://www.f-secure.com/downloads"
    },
    {
        "id": 458,
        "title": "Panda Dome Essential",
        "creator": "Panda Security",
        "image": "https://www.pandasecurity.com/content/dam/panda/images/products/dome/essential/dome-essential-product-shot.png",
        "description": "Cloud-based antivirus with USB protection",
        "downloadUrl": "https://www.pandasecurity.com/download/"
    },
    {
        "id": 459,
        "title": "Avira Antivirus Pro",
        "creator": "Avira",
        "image": "https://www.avira.com/content/dam/avira/images/products/antivirus-pro/antivirus-pro-product-shot.png",
        "description": "Fast scanning antivirus with VPN included",
        "downloadUrl": "https://www.avira.com/download"
    },
    {
        "id": 460,
        "title": "BullGuard Antivirus",
        "creator": "BullGuard",
        "image": "https://www.bullguard.com/content/dam/bullguard/products/antivirus/antivirus-product-shot.png",
        "description": "Multi-layer protection against all types of malware",
        "downloadUrl": "https://www.bullguard.com/downloads"
    },
    {
        "id": 461,
        "title": "Comodo Antivirus",
        "creator": "Comodo",
        "image": "https://www.comodo.com/images/products/antivirus/antivirus-product-shot.png",
        "description": "Default-deny protection with auto-sandboxing technology",
        "downloadUrl": "https://www.comodo.com/download-antivirus.php"
    },
    {
        "id": 462,
        "title": "VIPRE Advanced Security",
        "creator": "VIPRE",
        "image": "https://www.vipre.com/content/dam/vipre/products/advanced-security/advanced-security-product-shot.png",
        "description": "Antivirus with email protection and firewall",
        "downloadUrl": "https://www.vipre.com/downloads"
    },
    {
        "id": 463,
        "title": "ZoneAlarm AntiVirus",
        "creator": "ZoneAlarm",
        "image": "https://www.zonealarm.com/content/dam/zonealarm/products/antivirus/antivirus-product-shot.png",
        "description": "Antivirus with firewall and identity protection",
        "downloadUrl": "https://www.zonealarm.com/download"
    },
    {
        "id": 464,
        "title": "G Data Antivirus",
        "creator": "G Data",
        "image": "https://www.gdatasoftware.com/content/dam/gdata/images/products/antivirus/antivirus-product-shot.png",
        "description": "Double-protection with two scan engines",
        "downloadUrl": "https://www.gdatasoftware.com/downloads"
    },
    {
        "id": 465,
        "title": "Emsisoft Anti-Malware",
        "creator": "Emsisoft",
        "image": "https://www.emsisoft.com/images/products/anti-malware/anti-malware-product-shot.png",
        "description": "Lightweight malware protection with behavior blocker",
        "downloadUrl": "https://www.emsisoft.com/download/"
    },
    {
        "id": 466,
        "title": "Adaware Antivirus",
        "creator": "Adaware",
        "image": "https://www.adaware.com/content/dam/adaware/images/products/antivirus/antivirus-product-shot.png",
        "description": "Real-time protection against viruses and spyware",
        "downloadUrl": "https://www.adaware.com/download"
    },
    {
        "id": 467,
        "title": "TotalAV Antivirus",
        "creator": "TotalAV",
        "image": "https://www.totalav.com/content/dam/totalav/images/products/antivirus/antivirus-product-shot.png",
        "description": "Cloud-based antivirus with system optimization tools",
        "downloadUrl": "https://www.totalav.com/download"
    },
    {
        "id": 468,
        "title": "Avast Premium Security",
        "creator": "Avast",
        "image": "https://www.avast.com/images/products/premium-security/premium-security-product-shot.png",
        "description": "Premium protection with firewall and ransomware shield",
        "downloadUrl": "https://www.avast.com/premium-security"
    },
    {
        "id": 469,
        "title": "AVG Ultimate",
        "creator": "AVG Technologies",
        "image": "https://www.avg.com/content/dam/avg/images/product-tiles/ultimate/ultimate-tile.png",
        "description": "Complete security suite with VPN and tune-up tools",
        "downloadUrl": "https://www.avg.com/ultimate"
    },
    {
        "id": 470,
        "title": "K7 Total Security",
        "creator": "K7 Computing",
        "image": "https://www.k7computing.com/content/dam/k7/images/products/total-security/total-security-product-shot.png",
        "description": "Multi-device protection with privacy controls",
        "downloadUrl": "https://www.k7computing.com/download"
    },
    {
        "id": 471,
        "title": "Quick Heal Antivirus Pro",
        "creator": "Quick Heal",
        "image": "https://www.quickheal.com/content/dam/quickheal/images/products/antivirus-pro/antivirus-pro-product-shot.png",
        "description": "Protection against viruses, ransomware, and spyware",
        "downloadUrl": "https://www.quickheal.com/download"
    },
    {
        "id": 472,
        "title": "eScan Anti-Virus",
        "creator": "eScan",
        "image": "https://www.escanav.com/content/dam/escan/images/products/anti-virus/anti-virus-product-shot.png",
        "description": "Signature-based antivirus with cloud scanning",
        "downloadUrl": "https://www.escanav.com/download"
    },
    {
        "id": 473,
        "title": "FortiClient",
        "creator": "Fortinet",
        "image": "https://www.fortinet.com/content/dam/fortinet/images/products/forticlient/forticlient-product-shot.png",
        "description": "Endpoint protection with VPN and web filtering",
        "downloadUrl": "https://www.fortinet.com/downloads"
    },
    {
        "id": 474,
        "title": "Cybereason RansomFree",
        "creator": "Cybereason",
        "image": "https://www.cybereason.com/content/dam/cybereason/images/products/ransomfree/ransomfree-product-shot.png",
        "description": "Specialized ransomware protection",
        "downloadUrl": "https://www.cybereason.com/ransomfree"
    },
    {
        "id": 475,
        "title": "GridinSoft Anti-Malware",
        "creator": "GridinSoft",
        "image": "https://www.gridinsoft.com/content/dam/gridinsoft/images/products/anti-malware/anti-malware-product-shot.png",
        "description": "Specialized anti-malware with real-time protection",
        "downloadUrl": "https://www.gridinsoft.com/download"
    },
    {
        "id": 476,
        "title": "Zillya! Antivirus",
        "creator": "Zillya",
        "image": "https://www.zillya.com/content/dam/zillya/images/products/antivirus/antivirus-product-shot.png",
        "description": "Ukrainian antivirus with low system impact",
        "downloadUrl": "https://www.zillya.com/download"
    },
    {
        "id": 477,
        "title": "ClamWin Free Antivirus",
        "creator": "ClamWin",
        "image": "https://www.clamwin.com/content/dam/clamwin/images/clamwin-logo.png",
        "description": "Open-source antivirus for Windows",
        "downloadUrl": "https://www.clamwin.com/download"
    },
    {
        "id": 478,
        "title": "Immunet Antivirus",
        "creator": "Immunet",
        "image": "https://www.immunet.com/content/dam/immunet/images/immunet-logo.png",
        "description": "Cloud-based community-driven antivirus",
        "downloadUrl": "https://www.immunet.com/download"
    },
    {
        "id": 479,
        "title": "Rising Antivirus",
        "creator": "Rising",
        "image": "https://www.rising.com.cn/content/dam/rising/images/products/antivirus/antivirus-product-shot.png",
        "description": "Chinese antivirus with behavior analysis",
        "downloadUrl": "https://www.rising.com.cn/download"
    },
    {
        "id": 480,
        "title": "Qihoo 360 Total Security",
        "creator": "Qihoo 360",
        "image": "https://www.360totalsecurity.com/content/dam/360/images/products/total-security/total-security-product-shot.png",
        "description": "Free antivirus with multiple scan engines",
        "downloadUrl": "https://www.360totalsecurity.com/download"
    },
    {
        "id": 481,
        "title": "Tencent PC Manager",
        "creator": "Tencent",
        "image": "https://www.pcmanager.qq.com/content/dam/tencent/images/pc-manager-logo.png",
        "description": "Chinese antivirus with system optimization",
        "downloadUrl": "https://www.pcmanager.qq.com/download"
    },
    {
        "id": 482,
        "title": "Baidu Antivirus",
        "creator": "Baidu",
        "image": "https://www.antivirus.baidu.com/content/dam/baidu/images/antivirus-logo.png",
        "description": "Chinese free antivirus with cloud protection",
        "downloadUrl": "https://www.antivirus.baidu.com/download"
    },
    {
        "id": 483,
        "title": "Dr.Web Anti-virus",
        "creator": "Doctor Web",
        "image": "https://www.drweb.com/content/dam/drweb/images/products/anti-virus/anti-virus-product-shot.png",
        "description": "Russian antivirus with heuristic analysis",
        "downloadUrl": "https://www.drweb.com/download"
    },
    {
        "id": 484,
        "title": "VBA32 AntiVirus",
        "creator": "VBA32",
        "image": "https://www.vba32.com/content/dam/vba32/images/vba32-logo.png",
        "description": "Belarusian antivirus with deep scanning",
        "downloadUrl": "https://www.vba32.com/download"
    },
    {
        "id": 485,
        "title": "Panda Free Antivirus",
        "creator": "Panda Security",
        "image": "https://www.pandasecurity.com/content/dam/panda/images/products/free-antivirus/free-antivirus-product-shot.png",
        "description": "Cloud-based free antivirus",
        "downloadUrl": "https://www.pandasecurity.com/free-antivirus"
    },
    {
        "id": 486,
        "title": "Avast Business Antivirus",
        "creator": "Avast",
        "image": "https://www.avast.com/images/products/business-antivirus/business-antivirus-product-shot.png",
        "description": "Antivirus for small businesses",
        "downloadUrl": "https://www.avast.com/business-antivirus"
    },
    {
        "id": 487,
        "title": "AVG Internet Security",
        "creator": "AVG Technologies",
        "image": "https://www.avg.com/content/dam/avg/images/product-tiles/internet-security/internet-security-tile.png",
        "description": "Complete protection with firewall and anti-spam",
        "downloadUrl": "https://www.avg.com/internet-security"
    },
    {
        "id": 488,
        "title": "ESET Internet Security",
        "creator": "ESET",
        "image": "https://www.eset.com/fileadmin/images-www/products/internet-security/internet-security-box-shot.png",
        "description": "Security suite with banking protection",
        "downloadUrl": "https://www.eset.com/internet-security"
    },
    {
        "id": 489,
        "title": "Avira Prime",
        "creator": "Avira",
        "image": "https://www.avira.com/content/dam/avira/images/products/prime/prime-product-shot.png",
        "description": "All-in-one security with VPN and system optimization",
        "downloadUrl": "https://www.avira.com/prime"
    },
    {
        "id": 490,
        "title": "F-Secure SAFE",
        "creator": "F-Secure",
        "image": "https://www.f-secure.com/content/dam/f-secure/en/products/safe/safe-product-shot.png",
        "description": "Family protection across all devices",
        "downloadUrl": "https://www.f-secure.com/safe"
    },
    {
        "id": 491,
        "title": "Kaspersky Internet Security",
        "creator": "Kaspersky Lab",
        "image": "https://media.kasperskydaily.com/wp-content/uploads/sites/85/2021/03/01090141/internet-security-2021-featured.jpg",
        "description": "Complete protection for online activities",
        "downloadUrl": "https://www.kaspersky.com/internet-security"
    },
    {
        "id": 492,
        "title": "Norton 360 Deluxe",
        "creator": "NortonLifeLock",
        "image": "https://www.nortonlifelock.com/content/dam/global/images/product/360/deluxe/360-deluxe-5-device.png",
        "description": "Comprehensive protection with cloud backup",
        "downloadUrl": "https://us.norton.com/360-deluxe"
    },
    {
        "id": 493,
        "title": "Bitdefender Internet Security",
        "creator": "Bitdefender",
        "image": "https://www.bitdefender.com/content/dam/bitdefender-com/en/logos/product-logos/internet-security-logo.png",
        "description": "Multi-layer protection for online threats",
        "downloadUrl": "https://www.bitdefender.com/internet-security"
    },
    {
        "id": 494,
        "title": "McAfee Internet Security",
        "creator": "McAfee",
        "image": "https://www.mcafee.com/content/dam/global/images/product-images/internet-security/internet-security-hero.png",
        "description": "Protection against viruses and online threats",
        "downloadUrl": "https://www.mcafee.com/internet-security"
    },
    {
        "id": 495,
        "title": "Trend Micro Internet Security",
        "creator": "Trend Micro",
        "image": "https://www.trendmicro.com/content/dam/trendmicro/global/en/product/internet-security/internet-security-product-image.png",
        "description": "Protection for banking and shopping online",
        "downloadUrl": "https://www.trendmicro.com/internet-security"
    },
    {
        "id": 496,
        "title": "BullGuard Internet Security",
        "creator": "BullGuard",
        "image": "https://www.bullguard.com/content/dam/bullguard/products/internet-security/internet-security-product-shot.png",
        "description": "Gamer-friendly security suite",
        "downloadUrl": "https://www.bullguard.com/internet-security"
    },
    {
        "id": 497,
        "title": "Comodo Internet Security",
        "creator": "Comodo",
        "image": "https://www.comodo.com/images/products/internet-security/internet-security-product-shot.png",
        "description": "Free firewall and antivirus combo",
        "downloadUrl": "https://www.comodo.com/internet-security"
    },
    {
        "id": 498,
        "title": "ZoneAlarm Internet Security Suite",
        "creator": "ZoneAlarm",
        "image": "https://www.zonealarm.com/content/dam/zonealarm/products/internet-security-suite/internet-security-suite-product-shot.png",
        "description": "Firewall-focused internet security",
        "downloadUrl": "https://www.zonealarm.com/internet-security"
    },
    {
        "id": 499,
        "title": "G Data Internet Security",
        "creator": "G Data",
        "image": "https://www.gdatasoftware.com/content/dam/gdata/images/products/internet-security/internet-security-product-shot.png",
        "description": "Two-engine protection for online activities",
        "downloadUrl": "https://www.gdatasoftware.com/internet-security"
    },
    {
        "id": 500,
        "title": "K7 Ultimate Security",
        "creator": "K7 Computing",
        "image": "https://www.k7computing.com/content/dam/k7/images/products/ultimate-security/ultimate-security-product-shot.png",
        "description": "Complete protection with parental controls",
        "downloadUrl": "https://www.k7computing.com/ultimate-security"
    },
    {
    "id": 501,
    "title": "Prettier - Code formatter",
    "creator": "Prettier",
    "image": "https://prettier.io/icon.png",
    "description": "An opinionated code formatter that supports many languages and integrates with most editors.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
},
{
    "id": 502,
    "title": "ESLint",
    "creator": "Microsoft",
    "image": "https://eslint.org/assets/img/logo.svg",
    "description": "Integrates ESLint JavaScript into VS Code for identifying problematic patterns in code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
},
{
    "id": 503,
    "title": "Live Server",
    "creator": "Ritwick Dey",
    "image": "https://ritwickdey.github.io/vscode-live-server/images/vscode-live-server-logo.png",
    "description": "Launch a development local Server with live reload feature for static & dynamic pages.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
},
{
    "id": 504,
    "title": "Python",
    "creator": "Microsoft",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    "description": "Linting, debugging, IntelliSense, code navigation, code formatting, refactoring, unit tests, snippets, and more.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ms-python.python"
},
{
    "id": 505,
    "title": "GitLens",
    "creator": "Eric Amodio",
    "image": "https://cdn.gitlens.githistory.com/gitlens-icon.png",
    "description": "Supercharge Git within VS Code and unlock untapped knowledge within each repository.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
},
{
    "id": 506,
    "title": "Bracket Pair Colorizer",
    "creator": "CoenraadS",
    "image": "https://github.com/CoenraadS/BracketPair/raw/master/images/logo.png",
    "description": "This extension allows matching brackets to be identified with colors for better readability.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer"
},
{
    "id": 507,
    "title": "Path IntelliSense",
    "creator": "Christian Kohler",
    "image": "https://github.com/ChristianKohler/PathIntellisense/raw/master/images/logo.png",
    "description": "Visual Studio Code plugin that autocompletes filenames as you type.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense"
},
{
    "id": 508,
    "title": "Material Icon Theme",
    "creator": "Philipp Kief",
    "image": "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/images/logo.png",
    "description": "Material Design Icons for Visual Studio Code with lots of customization options.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"
},
{
    "id": 509,
    "title": "Auto Rename Tag",
    "creator": "Jun Han",
    "image": "https://github.com/formulahendry/vscode-auto-rename-tag/raw/master/images/logo.png",
    "description": "Automatically rename paired HTML/XML tags when editing.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
},
{
    "id": 510,
    "title": "Code Runner",
    "creator": "Jun Han",
    "image": "https://github.com/formulahendry/vscode-code-runner/raw/master/images/logo.png",
    "description": "Run code snippet or code file for multiple languages with a single click.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner"
},
{
    "id": 511,
    "title": "REST Client",
    "creator": "Huachao Mao",
    "image": "https://github.com/Huachao/vscode-restclient/raw/master/images/logo.png",
    "description": "Allows you to send HTTP request and view the response directly in Visual Studio Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=humao.rest-client"
},
{
    "id": 512,
    "title": "Markdown All in One",
    "creator": "Yu Zhang",
    "image": "https://github.com/yzhang-gh/vscode-markdown/raw/master/images/logo.png",
    "description": "All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more).",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one"
},
{
    "id": 513,
    "title": "Debugger for Chrome",
    "creator": "Microsoft",
    "image": "https://github.com/microsoft/vscode-chrome-debug/raw/main/images/logo.png",
    "description": "Debug your JavaScript code running in Google Chrome from VS Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome"
},
{
    "id": 514,
    "title": "Docker",
    "creator": "Microsoft",
    "image": "https://github.com/microsoft/vscode-docker/raw/main/images/logo.png",
    "description": "Makes it easy to create, manage, and debug containerized applications.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker"
},
{
    "id": 515,
    "title": "Vetur",
    "creator": "Pine Wu",
    "image": "https://github.com/vuejs/vetur/raw/master/docs/public/logo.png",
    "description": "Vue tooling for VS Code with syntax highlighting, snippets, IntelliSense and more.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=octref.vetur"
},
{
    "id": 516,
    "title": "Quokka.js",
    "creator": "Wallaby.js",
    "image": "https://quokkajs.com/assets/img/logo.svg",
    "description": "Rapid JavaScript/TypeScript prototyping playground with inline results and time-travel debugging.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode"
},
{
    "id": 517,
    "title": "Settings Sync",
    "creator": "Shan Khan",
    "image": "https://github.com/shanalikhan/code-settings-sync/raw/master/images/logo.png",
    "description": "Synchronize settings, snippets, themes, keybindings across multiple machines using GitHub Gist.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync"
},
{
    "id": 518,
    "title": "Bookmarks",
    "creator": "Alessandro Fragnani",
    "image": "https://github.com/alefragnani/vscode-bookmarks/raw/master/images/logo.png",
    "description": "Mark lines and jump to them easily to improve your navigation experience.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks"
},
{
    "id": 519,
    "title": "Todo Tree",
    "creator": "Gruntfuggly",
    "image": "https://github.com/Gruntfuggly/todo-tree/raw/master/resources/icon.png",
    "description": "Show all TODO/FIXME comments in a tree view and quickly navigate to them.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree"
},
{
    "id": 520,
    "title": "Polacode",
    "creator": "P-hao",
    "image": "https://github.com/octref/polacode/raw/master/resources/icon.png",
    "description": "Polaroid for your code - take a beautiful screenshot of your code snippets.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=pnp.polacode"
},
{
    "id": 521,
    "title": "Remote - SSH",
    "creator": "Microsoft",
    "image": "https://github.com/microsoft/vscode-remote-release/raw/main/resources/ssh.png",
    "description": "Open any folder on a remote machine using SSH and work with it as if it were local.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh"
},
{
    "id": 522,
    "title": "Remote - Containers",
    "creator": "Microsoft",
    "image": "https://github.com/microsoft/vscode-remote-release/raw/main/resources/containers.png",
    "description": "Work with a separate toolchain or container-based application inside VS Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"
},
{
    "id": 523,
    "title": "Remote - WSL",
    "creator": "Microsoft",
    "image": "https://github.com/microsoft/vscode-remote-release/raw/main/resources/wsl.png",
    "description": "Get a Linux-powered development experience from the comfort of Windows with WSL.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl"
},
{
    "id": 524,
    "title": "C/C++",
    "creator": "Microsoft",
    "image": "https://github.com/microsoft/vscode-cpptools/raw/main/images/logo.png",
    "description": "C/C++ IntelliSense, debugging, and code browsing for Visual Studio Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools"
},
{
    "id": 525,
    "title": "Java Extension Pack",
    "creator": "Microsoft",
    "image": "https://github.com/microsoft/vscode-java-pack/raw/main/resources/extension.png",
    "description": "Popular extensions for Java development that provide IntelliSense, debugging, testing, Maven/Gradle support and more.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack"
},
{
    "id": 526,
    "title": "Go",
    "creator": "Go Team at Google",
    "image": "https://github.com/golang/vscode-go/raw/master/docs/images/go-logo-blue.png",
    "description": "Rich Go language support with features like IntelliSense, code navigation, debugging, and more.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=golang.Go"
},
{
    "id": 527,
    "title": "Rust (rls)",
    "creator": "Rust Team",
    "image": "https://github.com/rust-lang/vscode-rust/raw/master/images/logo.png",
    "description": "Rust language support with RLS (Rust Language Server) providing features like autocompletion and goto definition.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=rust-lang.rust"
},
{
    "id": 528,
    "title": "PHP IntelliSense",
    "creator": "Felix Becker",
    "image": "https://github.com/felixfbecker/vscode-php-intellisense/raw/master/images/logo.png",
    "description": "Advanced PHP IntelliSense with code navigation, refactoring, and more.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense"
},
{
    "id": 529,
    "title": "DotENV",
    "creator": "mikestead",
    "image": "https://github.com/mikestead/vscode-dotenv/raw/master/images/logo.png",
    "description": "Support for .env file syntax highlighting and snippets.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv"
},
{
    "id": 530,
    "title": "XML Tools",
    "creator": "Josh Johnson",
    "image": "https://github.com/DotJoshJohnson/vscode-xml/raw/master/images/logo.png",
    "description": "XML formatting, XPath evaluation, and XQuery execution for Visual Studio Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml"
},
{
    "id": 531,
    "title": "YAML",
    "creator": "Red Hat",
    "image": "https://github.com/redhat-developer/vscode-yaml/raw/master/images/logo.png",
    "description": "YAML Language Support with validation, auto-completion, and formatting.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"
},
{
    "id": 532,
    "title": "SQL Server (mssql)",
    "creator": "Microsoft",
    "image": "https://github.com/microsoft/vscode-mssql/raw/main/images/logo.png",
    "description": "Develop Microsoft SQL Server, Azure SQL Database and SQL Data Warehouse everywhere with rich editor support.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ms-mssql.mssql"
},
{
    "id": 533,
    "title": "PostgreSQL",
    "creator": "Microsoft",
    "image": "https://github.com/microsoft/vscode-postgresql/raw/master/images/logo.png",
    "description": "PostgreSQL management with connection explorer, query runner, and schema visualizer.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ms-ossdata.vscode-postgresql"
},
{
    "id": 534,
    "title": "MongoDB for VS Code",
    "creator": "MongoDB",
    "image": "https://github.com/mongodb-js/vscode/raw/main/images/logo.png",
    "description": "Connect to MongoDB and Atlas, run queries, and work with your data directly from VS Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode"
},
{
    "id": 535,
    "title": "GraphQL",
    "creator": "GraphQL Foundation",
    "image": "https://github.com/graphql/vscode-graphql/raw/master/images/logo.png",
    "description": "GraphQL syntax highlighting, linting, auto-completion, and more for VS Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql"
},
{
    "id": 536,
    "title": "REST Client",
    "creator": "Huachao Mao",
    "image": "https://github.com/Huachao/vscode-restclient/raw/master/images/logo.png",
    "description": "Send HTTP request and view response in Visual Studio Code directly.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=humao.rest-client"
},
{
    "id": 537,
    "title": "Thunder Client",
    "creator": "Ranga Vadhineni",
    "image": "https://github.com/rangav/thunder-client-support/raw/master/images/logo.png",
    "description": "Lightweight REST API Client for VS Code with simple UI and collection management.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client"
},
{
    "id": 538,
    "title": "Jupyter",
    "creator": "Microsoft",
    "image": "https://github.com/microsoft/vscode-jupyter/raw/main/resources/logo.png",
    "description": "Jupyter notebook support with interactive programming and data science features.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter"
},
{
    "id": 539,
    "title": "Excel Viewer",
    "creator": "GrapeCity",
    "image": "https://github.com/GrapeCity/vscode-excelviewer/raw/master/images/logo.png",
    "description": "View Excel spreadsheets and CSV files directly in VS Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=GrapeCity.gc-excelviewer"
},
{
    "id": 540,
    "title": "SVG Viewer",
    "creator": "cssho",
    "image": "https://github.com/cssho/vscode-svgviewer/raw/master/images/logo.png",
    "description": "View SVG files and export them to PNG or other formats directly from VS Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=cssho.vscode-svgviewer"
},
{
    "id": 541,
    "title": "Draw.io Integration",
    "creator": "hediet",
    "image": "https://github.com/hediet/vscode-drawio/raw/master/icon.png",
    "description": "Edit and save diagrams as draw.io files directly in VS Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio"
},
{
    "id": 542,
    "title": "PlantUML",
    "creator": "jebbs",
    "image": "https://github.com/qjebbs/vscode-plantuml/raw/master/images/logo.png",
    "description": "Rich PlantUML support with preview, export and diagram generation.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml"
},
{
    "id": 543,
    "title": "Rainbow CSV",
    "creator": "mechatroner",
    "image": "https://github.com/mechatroner/vscode_rainbow_csv/raw/master/images/logo.png",
    "description": "Highlight CSV and TSV files in different colors and provide querying with SQL-like syntax.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv"
},
{
    "id": 544,
    "title": "Better Comments",
    "creator": "Aaron Bond",
    "image": "https://github.com/aaron-bond/better-comments/raw/master/images/logo.png",
    "description": "Improve your code commenting with colored annotations like alerts, queries, TODOs, and more.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments"
},
{
    "id": 545,
    "title": "Error Lens",
    "creator": "Alexander",
    "image": "https://github.com/usernamehw/vscode-error-lens/raw/master/images/logo.png",
    "description": "Show error messages inline with your code to improve visibility of problems.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens"
},
{
    "id": 546,
    "title": "Import Cost",
    "creator": "wix",
    "image": "https://github.com/wix/import-cost/raw/master/images/logo.png",
    "description": "Display the size of imported packages inline in your JavaScript/TypeScript code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost"
},
{
    "id": 547,
    "title": "TabNine",
    "creator": "TabNine",
    "image": "https://github.com/codota/tabnine-vscode/raw/master/images/logo.png",
    "description": "AI-powered autocompletion that learns from your code to provide smart suggestions.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode"
},
{
    "id": 548,
    "title": "Git Graph",
    "creator": "mhutchie",
    "image": "https://github.com/mhutchie/vscode-git-graph/raw/master/resources/logo.png",
    "description": "View a visual graph of your Git repository and perform Git actions directly from the graph.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph"
},
{
    "id": 549,
    "title": "Git History",
    "creator": "Don Jayamanne",
    "image": "https://github.com/DonJayamanne/gitHistoryVSCode/raw/master/images/logo.png",
    "description": "View Git log, file history, compare branches or commits with a powerful UI.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory"
},
{
    "id": 550,
    "title": "Project Manager",
    "creator": "Alessandro Fragnani",
    "image": "https://github.com/alefragnani/vscode-project-manager/raw/master/images/logo.png",
    "description": "Easily switch between projects with a dedicated sidebar and saved projects list.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager"
},
{
    "id": 551,
    "title": "Remote Development",
    "creator": "Microsoft",
    "image": "https://github.com/microsoft/vscode-remote-release/raw/main/resources/remote-extension-pack.png",
    "description": "Extension pack that enables remote development via containers, WSL, or SSH.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack"
},
{
    "id": 552,
    "title": "Live Share",
    "creator": "Microsoft",
    "image": "https://github.com/MicrosoftDocs/live-share/raw/main/images/vscode-logo.png",
    "description": "Real-time collaborative development with shared debugging, terminals, and more.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare"
},
{
    "id": 553,
    "title": "Code Spell Checker",
    "creator": "Street Side Software",
    "image": "https://github.com/streetsidesoftware/vscode-spell-checker/raw/master/images/logo.png",
    "description": "Spell checking for source code that helps catch common spelling errors.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"
},
{
    "id": 554,
    "title": "indent-rainbow",
    "creator": "oderwat",
    "image": "https://github.com/oderwat/vscode-indent-rainbow/raw/master/images/logo.png",
    "description": "Makes indentation more readable by coloring each level with a different color.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow"
},
{
    "id": 555,
    "title": "Babel JavaScript",
    "creator": "Michael McDermott",
    "image": "https://github.com/michaelgmcd/vscode-babel-repl/raw/master/images/logo.png",
    "description": "Syntax highlighting for modern JavaScript with Babel support.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel"
},
{
    "id": 556,
    "title": "JavaScript (ES6) code snippets",
    "creator": "charalampos karypidis",
    "image": "https://github.com/xabikos/vscode-javascript/raw/master/images/logo.png",
    "description": "Code snippets for JavaScript in ES6 syntax to speed up development.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets"
},
{
    "id": 557,
    "title": "TypeScript Importer",
    "creator": "pmneo",
    "image": "https://github.com/pmneo/vscode-ts-importer/raw/master/images/logo.png",
    "description": "Automatically searches for TypeScript definitions in your workspace when importing.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter"
},
{
    "id": 558,
    "title": "npm Intellisense",
    "creator": "Christian Kohler",
    "image": "https://github.com/ChristianKohler/NpmIntellisense/raw/master/images/logo.png",
    "description": "Autocompletes npm modules in import statements for JavaScript/TypeScript.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense"
},
{
    "id": 559,
    "title": "Version Lens",
    "creator": "pflannery",
    "image": "https://github.com/pflannery/vscode-versionlens/raw/master/images/logo.png",
    "description": "Shows the latest version for each package in package.json when available.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens"
},
{
    "id": 560,
    "title": "Regex Previewer",
    "creator": "chrmarti",
    "image": "https://github.com/chrmarti/vscode-regex/raw/master/images/logo.png",
    "description": "Real-time regex testing side-by-side with your JavaScript or TypeScript code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=chrmarti.regex"
},
{
    "id": 561,
    "title": "Peacock",
    "creator": "John Papa",
    "image": "https://github.com/johnpapa/vscode-peacock/raw/main/resources/peacock-icon.png",
    "description": "Subtly change the color of your workspace to differentiate between projects.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock"
},
{
    "id": 562,
    "title": "Color Highlight",
    "creator": "Sergii Naumov",
    "image": "https://github.com/sergiirocks/vscode-color-highlight/raw/master/images/logo.png",
    "description": "Highlight web colors in your editor to visualize them as you code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight"
},
{
    "id": 563,
    "title": "Color Picker",
    "creator": "Sergii Naumov",
    "image": "https://github.com/sergiirocks/vscode-ext-color-picker/raw/master/images/logo.png",
    "description": "Helper to select colors from a visual picker and insert them into your code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=anseki.vscode-color"
},
{
    "id": 564,
    "title": "CSS Peek",
    "creator": "Pranay Prakash",
    "image": "https://github.com/pranaygp/vscode-css-peek/raw/master/images/logo.png",
    "description": "Allow peeking to CSS ID and class strings as definitions from HTML files.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek"
},
{
    "id": 565,
    "title": "HTML CSS Support",
    "creator": "ecmel",
    "image": "https://github.com/ecmel/vscode-html-css/raw/master/images/logo.png",
    "description": "CSS Intellisense for HTML documents that suggests classes and IDs from your workspace.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css"
},
{
    "id": 566,
    "title": "IntelliSense for CSS class names",
    "creator": "Zignd",
    "image": "https://github.com/Zignd/HTML-CSS-Class-Completion/raw/master/images/logo.png",
    "description": "Provides CSS class name completion based on the definitions found in your workspace.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion"
},
{
    "id": 567,
    "title": "Sass",
    "creator": "Syler",
    "image": "https://github.com/Syler/vscode-sass-indented/raw/master/images/logo.png",
    "description": "Indented Sass syntax highlighting, autocomplete and formatter with .sass support.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented"
},
{
    "id": 568,
    "title": "stylelint",
    "creator": "stylelint",
    "image": "https://github.com/stylelint/vscode-stylelint/raw/master/images/logo.png",
    "description": "Modern CSS/SCSS/Less linter that helps enforce consistent conventions and avoid errors.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint"
},
{
    "id": 569,
    "title": "Tailwind CSS IntelliSense",
    "creator": "Tailwind Labs",
    "image": "https://github.com/tailwindlabs/tailwindcss-intellisense/raw/master/packages/vscode-tailwindcss/logo.png",
    "description": "Smart autocomplete, syntax highlighting, and linting for Tailwind CSS projects.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
},
{
    "id": 570,
    "title": "Auto Close Tag",
    "creator": "Jun Han",
    "image": "https://github.com/formulahendry/vscode-auto-close-tag/raw/master/images/logo.png",
    "description": "Automatically add HTML/XML close tag when you type the opening tag.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"
},
{
    "id": 571,
    "title": "Auto Complete Tag",
    "creator": "Jun Han",
    "image": "https://github.com/formulahendry/vscode-auto-complete-tag/raw/master/images/logo.png",
    "description": "Extension to auto complete paired HTML/XML tags similar to Visual Studio IDE.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag"
},
{
    "id": 572,
    "title": "HTML Snippets",
    "creator": "Mohamed Abusaid",
    "image": "https://github.com/abusaidm/html-snippets/raw/master/images/logo.png",
    "description": "Full HTML tags including HTML5 snippets for faster development.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets"
},
{
    "id": 573,
    "title": "HTMLHint",
    "creator": "HTMLHint",
    "image": "https://github.com/HTMLHint/HTMLHint/raw/master/images/logo.png",
    "description": "Static code analysis tool for HTML that helps detect potential issues.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint"
},
{
    "id": 574,
    "title": "IntelliJ IDEA Keybindings",
    "creator": "Keisuke Kato",
    "image": "https://github.com/k--kato/vscode-intellij-idea-keybindings/raw/master/images/logo.png",
    "description": "Port of IntelliJ IDEA key bindings for VS Code users transitioning from JetBrains IDEs.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings"
},
{
    "id": 575,
    "title": "Dart",
    "creator": "Dart Code",
    "image": "https://github.com/Dart-Code/Dart-Code/raw/master/images/logo.png",
    "description": "Dart language support with syntax highlighting, debugging, and Flutter integration.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code"
},
{
    "id": 576,
    "title": "Flutter",
    "creator": "Dart Code",
    "image": "https://github.com/Dart-Code/Flutter/raw/master/images/logo.png",
    "description": "Flutter support with widget editing assists, debugging, and Dart language integration.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter"
},
{
    "id": 577,
    "title": "Kotlin Language",
    "creator": "fwcd",
    "image": "https://github.com/fwcd/kotlin/raw/master/icons/logo.png",
    "description": "Kotlin language support with syntax highlighting and basic completions.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=fwcd.kotlin"
},
{
    "id": 578,
    "title": "Scala (Metals)",
    "creator": "Scalameta",
    "image": "https://github.com/scalameta/metals-vscode/raw/master/images/logo.png",
    "description": "Scala support through Metals language server with rich IDE features.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=scalameta.metals"
},
{
    "id": 579,
    "title": "Haskell",
    "creator": "Haskell",
    "image": "https://github.com/haskell/vscode-haskell/raw/master/images/logo.png",
    "description": "Syntax highlighting and hie (Haskell IDE Engine) integration for Haskell development.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=haskell.haskell"
},
{
    "id": 580,
    "title": "ElixirLS",
    "creator": "Jake Becker",
    "image": "https://github.com/elixir-lsp/elixir-ls/raw/master/images/logo.png",
    "description": "Elixir language support with debugger, autocomplete, and other IDE features.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=JakeBecker.elixir-ls"
},
{
    "id": 581,
    "title": "Clojure",
    "creator": "BetterThanTomorrow",
    "image": "https://github.com/BetterThanTomorrow/calva/raw/master/assets/icon.png",
    "description": "Clojure and ClojureScript support with REPL integration and structural editing.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=betterthantomorrow.calva"
},
{
    "id": 582,
    "title": "Erlang",
    "creator": "Pierrick Gourlain",
    "image": "https://github.com/pgourlain/vscode_erlang/raw/master/images/logo.png",
    "description": "Erlang language support with syntax highlighting and basic features.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=pgourlain.erlang"
},
{
    "id": 583,
    "title": "F#",
    "creator": "Ionide",
    "image": "https://github.com/ionide/ionide-vscode-fsharp/raw/master/images/logo.png",
    "description": "F# support with Ionide providing rich language features and tooling.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=Ionide.Ionide-fsharp"
},
{
    "id": 584,
    "title": "OCaml Platform",
    "creator": "OCaml Labs",
    "image": "https://github.com/ocamllabs/vscode-ocaml-platform/raw/master/images/logo.png",
    "description": "OCaml language support with Merlin integration for IDE features.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ocamllabs.ocaml-platform"
},
{
    "id": 585,
    "title": "Perl",
    "creator": "Henning",
    "image": "https://github.com/handyorg/handyorg-vscode-perl/raw/master/images/logo.png",
    "description": "Perl language support with syntax highlighting and basic features.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=henning.perl"
},
{
    "id": 586,
    "title": "Puppet",
    "creator": "Puppet",
    "image": "https://github.com/puppetlabs/puppet-vscode/raw/master/images/logo.png",
    "description": "Puppet language support with syntax highlighting, linting, and other features.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=puppet.puppet-vscode"
},
{
    "id": 587,
    "title": "R",
    "creator": "Ikuyadeu",
    "image": "https://github.com/Ikuyadeu/vscode-R/raw/master/images/logo.png",
    "description": "R language support with syntax highlighting, snippets, and R terminal integration.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=Ikuyadeu.r"
},
{
    "id": 588,
    "title": "Ruby",
    "creator": "Peng Lv",
    "image": "https://github.com/rubyide/vscode-ruby/raw/master/images/logo.png",
    "description": "Ruby language support with debugging, IntelliSense, and formatting.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby"
},
{
    "id": 589,
    "title": "Rust Analyzer",
    "creator": "Rust Analyzer Team",
    "image": "https://github.com/rust-lang/rust-analyzer/raw/master/assets/logo.png",
    "description": "Experimental Rust compiler front-end for IDEs with rich code analysis.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer"
},
{
    "id": 590,
    "title": "ShellCheck",
    "creator": "Timon Wong",
    "image": "https://github.com/vscode-shellcheck/vscode-shellcheck/raw/master/images/logo.png",
    "description": "Integrates ShellCheck linter for bash/sh shell scripts with diagnostics.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=timonwong.shellcheck"
},
{
    "id": 591,
    "title": "Terraform",
    "creator": "HashiCorp",
    "image": "https://github.com/hashicorp/vscode-terraform/raw/master/images/logo.png",
    "description": "Terraform HCL language support with syntax highlighting and formatting.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=HashiCorp.terraform"
},
{
    "id": 592,
    "title": "Vim",
    "creator": "VSCodeVim",
    "image": "https://github.com/VSCodeVim/Vim/raw/master/images/logo.png",
    "description": "Vim emulation for Visual Studio Code with keybindings and modes.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=vscodevim.vim"
},
{
    "id": 593,
    "title": "Docker Explorer",
    "creator": "formulahendry",
    "image": "https://github.com/formulahendry/vscode-docker-explorer/raw/master/images/logo.png",
    "description": "Manage Docker containers, images, volumes and networks directly from VS Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=formulahendry.docker-explorer"
},
{
    "id": 594,
    "title": "Kubernetes",
    "creator": "Microsoft",
    "image": "https://github.com/Azure/vscode-kubernetes-tools/raw/master/images/logo.png",
    "description": "Develop, deploy and debug Kubernetes applications from VS Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools"
},
{
    "id": 595,
    "title": "Azure Tools",
    "creator": "Microsoft",
    "image": "https://github.com/microsoft/vscode-azuretools/raw/main/images/logo.png",
    "description": "Extensions for working with Azure resources directly from VS Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack"
},
{
    "id": 596,
    "title": "AWS Toolkit",
    "creator": "Amazon",
    "image": "https://github.com/aws/aws-toolkit-vscode/raw/master/media/aws-toolkit.png",
    "description": "Official AWS toolkit for VS Code with Lambda, CloudFormation and other services support.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.aws-toolkit-vscode"
},
{
    "id": 597,
    "title": "Google Cloud Code",
    "creator": "Google",
    "image": "https://github.com/GoogleCloudPlatform/cloud-code-vscode/raw/master/images/logo.png",
    "description": "Develop, deploy and debug Kubernetes applications on Google Cloud from VS Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=GoogleCloudTools.cloudcode"
},
{
    "id": 598,
    "title": "Serverless IDE",
    "creator": "Threadheap",
    "image": "https://github.com/threadheap/serverless-ide-vscode/raw/master/images/logo.png",
    "description": "YAML validation, autocompletion and navigation for serverless framework files.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ThreadHeap.serverless-ide-vscode"
},
{
    "id": 599,
    "title": "Azure Functions",
    "creator": "Microsoft",
    "image": "https://github.com/microsoft/vscode-azurefunctions/raw/main/images/logo.png",
    "description": "Create, debug, manage, and deploy serverless apps directly from VS Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions"
},
{
    "id": 600,
    "title": "Azure App Service",
    "creator": "Microsoft",
    "image": "https://github.com/microsoft/vscode-azureappservice/raw/main/images/logo.png",
    "description": "Deploy and manage Azure Web Apps directly from VS Code.",
    "downloadUrl": "https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice"
},
    {
    "id": 601,
    "title": "Metasploit Framework",
    "creator": "Rapid7",
    "image": "https://www.metasploit.com/img/metasploit-logo.svg",
    "description": "Penetration testing platform for developing and executing exploit code against remote targets.",
    "downloadUrl": "https://www.metasploit.com/download"
},
{
    "id": 602,
    "title": "Nmap",
    "creator": "Gordon Lyon",
    "image": "https://nmap.org/images/sitelogo-nmap.png",
    "description": "Network discovery and security auditing tool with host discovery and service detection capabilities.",
    "downloadUrl": "https://nmap.org/download.html"
},
{
    "id": 603,
    "title": "Wireshark",
    "creator": "Wireshark Foundation",
    "image": "https://www.wireshark.org/assets/images/wslogo.png",
    "description": "Network protocol analyzer for troubleshooting, analysis, and protocol development.",
    "downloadUrl": "https://www.wireshark.org/download.html"
},
{
    "id": 604,
    "title": "Burp Suite",
    "creator": "PortSwigger",
    "image": "https://portswigger.net/burp/frontpage/images/logos/burp_suite.svg",
    "description": "Web application security testing platform with scanner, intruder, repeater and other tools.",
    "downloadUrl": "https://portswigger.net/burp/releases"
},
{
    "id": 605,
    "title": "John the Ripper",
    "creator": "Openwall",
    "image": "https://www.openwall.com/john/logo.png",
    "description": "Password cracking tool that detects weak Unix passwords and supports hundreds of hash types.",
    "downloadUrl": "https://www.openwall.com/john/"
},
{
    "id": 606,
    "title": "Aircrack-ng",
    "creator": "Thomas d'Otreppe",
    "image": "https://www.aircrack-ng.org/images/logo.png",
    "description": "Complete suite of tools to assess WiFi network security including monitoring, attacking and cracking.",
    "downloadUrl": "https://www.aircrack-ng.org/downloads.html"
},
{
    "id": 607,
    "title": "Hydra",
    "creator": "van Hauser",
    "image": "https://github.com/vanhauser-thc/thc-hydra/raw/master/docs/hydra-logo.png",
    "description": "Parallelized login cracker which supports numerous protocols to attack.",
    "downloadUrl": "https://github.com/vanhauser-thc/thc-hydra"
},
{
    "id": 608,
    "title": "SQLmap",
    "creator": "Bernardo Damele",
    "image": "https://sqlmap.org/sqlmap.png",
    "description": "Automatic SQL injection and database takeover tool with powerful detection engine.",
    "downloadUrl": "https://sqlmap.org/"
},
{
    "id": 609,
    "title": "Maltego",
    "creator": "Paterva",
    "image": "https://www.maltego.com/wp-content/uploads/2020/07/maltego-logo.svg",
    "description": "Interactive data mining tool that renders directed graphs for link analysis and data visualization.",
    "downloadUrl": "https://www.maltego.com/downloads/"
},
{
    "id": 610,
    "title": "OWASP ZAP",
    "creator": "OWASP",
    "image": "https://www.zaproxy.org/img/zap-logo.png",
    "description": "Open source web application security scanner for finding vulnerabilities during development.",
    "downloadUrl": "https://www.zaproxy.org/download/"
},
{
    "id": 611,
    "title": "Kali Linux",
    "creator": "Offensive Security",
    "image": "https://www.kali.org/images/kali-logo.svg",
    "description": "Linux distribution packed with security and penetration testing tools for ethical hacking.",
    "downloadUrl": "https://www.kali.org/get-kali/"
},
{
    "id": 612,
    "title": "Hashcat",
    "creator": "Hashcat team",
    "image": "https://hashcat.net/hashcat/hashcat_logo.png",
    "description": "Advanced password recovery tool supporting multiple hash types and attack modes.",
    "downloadUrl": "https://hashcat.net/hashcat/"
},
{
    "id": 613,
    "title": "Cain & Abel",
    "creator": "Massimiliano Montoro",
    "image": "https://www.oxid.it/images/ca_logo.png",
    "description": "Password recovery tool for Microsoft Operating Systems with network sniffing capabilities.",
    "downloadUrl": "https://www.oxid.it/cain.html"
},
{
    "id": 614,
    "title": "Nikto",
    "creator": "Chris Sullo",
    "image": "https://cirt.net/images/nikto-logo.png",
    "description": "Web server scanner that performs comprehensive tests against web servers for vulnerabilities.",
    "downloadUrl": "https://github.com/sullo/nikto"
},
{
    "id": 615,
    "title": "Ettercap",
    "creator": "ALoR & NaGA",
    "image": "https://www.ettercap-project.org/wp-content/uploads/2019/02/ettercap_logo.png",
    "description": "Comprehensive suite for man-in-the-middle attacks on LAN with sniffing and content filtering.",
    "downloadUrl": "https://www.ettercap-project.org/downloads.html"
},
{
    "id": 616,
    "title": "Ghidra",
    "creator": "NSA",
    "image": "https://ghidra-sre.org/images/GHIDRA_1.png",
    "description": "Software reverse engineering framework developed by NSA with decompiler and disassembler.",
    "downloadUrl": "https://ghidra-sre.org/"
},
{
    "id": 617,
    "title": "Social Engineer Toolkit (SET)",
    "creator": "TrustedSec",
    "image": "https://www.trustedsec.com/wp-content/uploads/2019/12/set-logo.png",
    "description": "Penetration testing framework designed for social engineering attacks.",
    "downloadUrl": "https://github.com/trustedsec/social-engineer-toolkit"
},
{
    "id": 618,
    "title": "BeEF",
    "creator": "Wade Alcorn",
    "image": "https://beefproject.com/images/beef-logo.png",
    "description": "Browser Exploitation Framework for launching attacks against web browsers.",
    "downloadUrl": "https://beefproject.com/"
},
{
    "id": 619,
    "title": "WPScan",
    "creator": "WPScan Team",
    "image": "https://wpscan.com/assets/images/logo.png",
    "description": "Black box WordPress vulnerability scanner for security professionals.",
    "downloadUrl": "https://wpscan.com/wordpress-security-scanner"
},
{
    "id": 620,
    "title": "OpenVAS",
    "creator": "Greenbone Networks",
    "image": "https://www.openvas.org/images/openvas-logo.png",
    "description": "Full-featured vulnerability scanner with daily updated feeds of vulnerability tests.",
    "downloadUrl": "https://www.openvas.org/download.html"
},
{
    "id": 621,
    "title": "THC-Hydra",
    "creator": "van Hauser",
    "image": "https://github.com/vanhauser-thc/thc-hydra/raw/master/docs/hydra-logo.png",
    "description": "Parallelized login cracker supporting numerous protocols for brute-force attacks.",
    "downloadUrl": "https://github.com/vanhauser-thc/thc-hydra"
},
{
    "id": 622,
    "title": "Responder",
    "creator": "Laurent Gaffié",
    "image": "https://github.com/lgandx/Responder/raw/master/Responder-Logo.png",
    "description": "LLMNR/NBT-NS/mDNS poisoner with built-in HTTP/SMB/MSSQL/FTP/LDAP rogue auth server.",
    "downloadUrl": "https://github.com/lgandx/Responder"
},
{
    "id": 623,
    "title": "Impacket",
    "creator": "Core Security",
    "image": "https://github.com/SecureAuthCorp/impacket/raw/master/impacket.png",
    "description": "Collection of Python classes for working with network protocols and performing attacks.",
    "downloadUrl": "https://github.com/SecureAuthCorp/impacket"
},
{
    "id": 624,
    "title": "Cuckoo Sandbox",
    "creator": "Cuckoo Foundation",
    "image": "https://cuckoosandbox.org/static/img/logo.png",
    "description": "Automated malware analysis system for detonating and analyzing suspicious files.",
    "downloadUrl": "https://cuckoosandbox.org/download"
},
{
    "id": 625,
    "title": "Radare2",
    "creator": "pancake",
    "image": "https://www.radare.org/img/logo.png",
    "description": "Complete framework for reverse-engineering and analyzing binaries with CLI tools.",
    "downloadUrl": "https://www.radare.org/r/"
},
{
    "id": 626,
    "title": "Frida",
    "creator": "Frida Developers",
    "image": "https://frida.re/img/logo.svg",
    "description": "Dynamic instrumentation toolkit for developers and reverse-engineers with JavaScript API.",
    "downloadUrl": "https://frida.re/"
},
{
    "id": 627,
    "title": "Volatility",
    "creator": "Volatility Foundation",
    "image": "https://www.volatilityfoundation.org/images/logo.png",
    "description": "Advanced memory forensics framework for incident response and malware analysis.",
    "downloadUrl": "https://www.volatilityfoundation.org/releases"
},
{
    "id": 628,
    "title": "Snort",
    "creator": "Cisco",
    "image": "https://www.snort.org/assets/images/snort_logo.png",
    "description": "Open source intrusion prevention system capable of real-time traffic analysis.",
    "downloadUrl": "https://www.snort.org/downloads"
},
{
    "id": 629,
    "title": "Bro/Zeek",
    "creator": "Zeek Project",
    "image": "https://zeek.org/wp-content/uploads/2019/10/zeek-logo.svg",
    "description": "Powerful network analysis framework focusing on network security monitoring.",
    "downloadUrl": "https://zeek.org/get-zeek/"
},
{
    "id": 630,
    "title": "The Sleuth Kit",
    "creator": "Brian Carrier",
    "image": "https://www.sleuthkit.org/images/tsk_logo.png",
    "description": "Library and collection of command-line tools for forensic analysis of disk images.",
    "downloadUrl": "https://www.sleuthkit.org/sleuthkit/download.php"
},
{
    "id": 631,
    "title": "Autopsy",
    "creator": "Basis Technology",
    "image": "https://www.autopsy.com/wp-content/uploads/2020/04/autopsy_logo.png",
    "description": "Graphical interface to The Sleuth Kit for digital forensics investigations.",
    "downloadUrl": "https://www.autopsy.com/download/"
},
{
    "id": 632,
    "title": "YARA",
    "creator": "VirusTotal",
    "image": "https://virustotal.github.io/yara/images/yaralogo.png",
    "description": "Tool aimed at helping malware researchers identify and classify malware samples.",
    "downloadUrl": "https://github.com/VirusTotal/yara"
},
{
    "id": 633,
    "title": "PEiD",
    "creator": "Jibz",
    "image": "https://www.softpedia.com/base_img/softpedia_free_award_f.gif",
    "description": "Detects most common packers, cryptors and compilers for PE files (Windows executables).",
    "downloadUrl": "https://www.softpedia.com/get/Programming/Packers-Crypters-Protectors/PEiD-updated.shtml"
},
{
    "id": 634,
    "title": "OllyDbg",
    "creator": "Oleh Yuschuk",
    "image": "https://www.ollydbg.de/ollydbg.png",
    "description": "32-bit assembler-level analyzing debugger for Microsoft Windows applications.",
    "downloadUrl": "https://www.ollydbg.de/"
},
{
    "id": 635,
    "title": "IDA Pro",
    "creator": "Hex-Rays",
    "image": "https://www.hex-rays.com/wp-content/uploads/2021/03/IDA_Pro_Home_logo.svg",
    "description": "Interactive disassembler and debugger for software reverse engineering.",
    "downloadUrl": "https://www.hex-rays.com/products/ida/support/download.shtml"
},
{
    "id": 636,
    "title": "Immunity Debugger",
    "creator": "Immunity Inc",
    "image": "https://www.immunityinc.com/images/immunity_logo.png",
    "description": "Powerful debugger for analyzing malware and vulnerabilities with Python scripting.",
    "downloadUrl": "https://www.immunityinc.com/products/debugger/"
},
{
    "id": 637,
    "title": "WinDbg",
    "creator": "Microsoft",
    "image": "https://docs.microsoft.com/en-us/windows-hardware/drivers/images/windbg-logo.png",
    "description": "Multipurpose debugger for Windows with kernel-mode and user-mode debugging.",
    "downloadUrl": "https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/debugger-download-tools"
},
{
    "id": 638,
    "title": "GDB",
    "creator": "GNU Project",
    "image": "https://www.gnu.org/graphics/gnu-head-sm.jpg",
    "description": "The GNU Project debugger for C, C++, and other programming languages.",
    "downloadUrl": "https://www.gnu.org/software/gdb/"
},
{
    "id": 639,
    "title": "Binwalk",
    "creator": "Craig Heffner",
    "image": "https://github.com/ReFirmLabs/binwalk/raw/master/docs/images/binwalk-logo.png",
    "description": "Firmware analysis tool for searching embedded files and executable code.",
    "downloadUrl": "https://github.com/ReFirmLabs/binwalk"
},
{
    "id": 640,
    "title": "Radare2",
    "creator": "pancake",
    "image": "https://www.radare.org/img/logo.png",
    "description": "Complete framework for reverse-engineering and analyzing binaries with CLI tools.",
    "downloadUrl": "https://www.radare.org/r/"
},
{
    "id": 641,
    "title": "Firmwalker",
    "creator": "Craig Smith",
    "image": "https://github.com/craigz28/firmwalker/raw/master/firmwalker.png",
    "description": "Simple bash script for searching extracted firmware file systems for interesting items.",
    "downloadUrl": "https://github.com/craigz28/firmwalker"
},
{
    "id": 642,
    "title": "ROPgadget",
    "creator": "Jonathan Salwan",
    "image": "https://github.com/JonathanSalwan/ROPgadget/raw/master/logo.png",
    "description": "Tool for searching gadgets in binaries to facilitate ROP exploitation techniques.",
    "downloadUrl": "https://github.com/JonathanSalwan/ROPgadget"
},
{
    "id": 643,
    "title": "pwntools",
    "creator": "Gallopsled",
    "image": "https://github.com/Gallopsled/pwntools/raw/dev/docs/source/logo.png",
    "description": "CTF framework and exploit development library for rapid prototyping.",
    "downloadUrl": "https://github.com/Gallopsled/pwntools"
},
{
    "id": 644,
    "title": "angr",
    "creator": "angr team",
    "image": "https://angr.io/img/angr.png",
    "description": "Python framework for analyzing binaries with symbolic execution and more.",
    "downloadUrl": "https://angr.io/"
},
{
    "id": 645,
    "title": "QIRA",
    "creator": "George Hotz",
    "image": "https://github.com/geohot/qira/raw/master/logo.png",
    "description": "Timeless debugger for analyzing program execution with reverse engineering capabilities.",
    "downloadUrl": "https://github.com/geohot/qira"
},
{
    "id": 646,
    "title": "Ghidra",
    "creator": "NSA",
    "image": "https://ghidra-sre.org/images/GHIDRA_1.png",
    "description": "Software reverse engineering framework developed by NSA with decompiler and disassembler.",
    "downloadUrl": "https://ghidra-sre.org/"
},
{
    "id": 647,
    "title": "x64dbg",
    "creator": "x64dbg team",
    "image": "https://x64dbg.com/img/logo.png",
    "description": "Open-source x64/x32 debugger for Windows with reverse engineering capabilities.",
    "downloadUrl": "https://x64dbg.com/"
},
{
    "id": 648,
    "title": "PE Explorer",
    "creator": "Heaventools",
    "image": "https://www.heaventools.com/images/pe-explorer-logo.png",
    "description": "Disassembler and resource editor for Windows PE files with dependency scanning.",
    "downloadUrl": "https://www.heaventools.com/download-pe-explorer.htm"
},
{
    "id": 649,
    "title": "Detect It Easy",
    "creator": "horsicq",
    "image": "https://github.com/horsicq/DIE-engine/raw/master/images/logo.png",
    "description": "Program for determining types of files with PE/ELF/MACH-O binary analysis.",
    "downloadUrl": "https://github.com/horsicq/Detect-It-Easy"
},
{
    "id": 650,
    "title": "Cutter",
    "creator": "Radare Org",
    "image": "https://github.com/radareorg/cutter/raw/master/src/img/cutter.svg",
    "description": "GUI for Radare2 reverse engineering framework with disassembly and decompilation.",
    "downloadUrl": "https://github.com/radareorg/cutter"
},
{
    "id": 651,
    "title": "Binary Ninja",
    "creator": "Vector35",
    "image": "https://binary.ninja/images/bn-logo.png",
    "description": "Reverse engineering platform with interactive disassembler and decompiler.",
    "downloadUrl": "https://binary.ninja/"
},
{
    "id": 652,
    "title": "Hopper",
    "creator": "Cryptic Apps",
    "image": "https://www.hopperapp.com/images/logo.png",
    "description": "Reverse engineering tool for macOS and Linux with disassembler and decompiler.",
    "downloadUrl": "https://www.hopperapp.com/"
},
{
    "id": 653,
    "title": "dnSpy",
    "creator": "0xd4d",
    "image": "https://github.com/dnSpy/dnSpy/raw/master/Images/dnSpy.png",
    "description": ".NET debugger and assembly editor with decompilation capabilities.",
    "downloadUrl": "https://github.com/dnSpy/dnSpy"
},
{
    "id": 654,
    "title": "ILSpy",
    "creator": "icsharpcode",
    "image": "https://github.com/icsharpcode/ILSpy/raw/master/Images/ILSpy_128.png",
    "description": ".NET assembly browser and decompiler with support for PDB generation.",
    "downloadUrl": "https://github.com/icsharpcode/ILSpy"
},
{
    "id": 655,
    "title": "JD-GUI",
    "creator": "Java Decompiler",
    "image": "https://java-decompiler.github.io/img/jd-gui-logo.png",
    "description": "Standalone Java decompiler with GUI for inspecting .class files.",
    "downloadUrl": "https://java-decompiler.github.io/"
},
{
    "id": 656,
    "title": "Apktool",
    "creator": "Connor Tumbleson",
    "image": "https://ibotpeaches.github.io/Apktool/favicon.ico",
    "description": "Tool for reverse engineering Android apk files with resource rebuilding.",
    "downloadUrl": "https://ibotpeaches.github.io/Apktool/"
},
{
    "id": 657,
    "title": "Frida",
    "creator": "Frida Developers",
    "image": "https://frida.re/img/logo.svg",
    "description": "Dynamic instrumentation toolkit for developers and reverse-engineers with JavaScript API.",
    "downloadUrl": "https://frida.re/"
},
{
    "id": 658,
    "title": "Objection",
    "creator": "SensePost",
    "image": "https://github.com/sensepost/objection/raw/master/images/logo.png",
    "description": "Runtime mobile exploration toolkit powered by Frida with Android/iOS support.",
    "downloadUrl": "https://github.com/sensepost/objection"
},
{
    "id": 659,
    "title": "MobSF",
    "creator": "MobSF",
    "image": "https://mobsf.github.io/Mobile-Security-Framework-MobSF/images/mobsf_logo.png",
    "description": "Automated mobile application pentesting framework for Android/iOS/Windows.",
    "downloadUrl": "https://github.com/MobSF/Mobile-Security-Framework-MobSF"
},
{
    "id": 660,
    "title": "Burp Suite Mobile Assistant",
    "creator": "PortSwigger",
    "image": "https://portswigger.net/burp/frontpage/images/logos/burp_suite.svg",
    "description": "Tool for testing iOS and Android apps by intercepting traffic through Burp Suite.",
    "downloadUrl": "https://portswigger.net/burp/documentation/desktop/tools/mobile-assistant"
},
{
    "id": 661,
    "title": "Androguard",
    "creator": "Androguard Team",
    "image": "https://github.com/androguard/androguard/raw/master/androguard.png",
    "description": "Python tools for reverse engineering and analysis of Android applications.",
    "downloadUrl": "https://github.com/androguard/androguard"
},
{
    "id": 662,
    "title": "Jadx",
    "creator": "skylot",
    "image": "https://github.com/skylot/jadx/raw/master/jadx-gui/src/main/resources/logos/jadx-logo.png",
    "description": "Dex to Java decompiler with GUI for Android application analysis.",
    "downloadUrl": "https://github.com/skylot/jadx"
},
{
    "id": 663,
    "title": "Bytecode Viewer",
    "creator": "Konloch",
    "image": "https://github.com/Konloch/bytecode-viewer/raw/master/images/logo.png",
    "description": "Java/Android reverse engineering suite with multiple decompilers and bytecode analysis.",
    "downloadUrl": "https://github.com/Konloch/bytecode-viewer"
},
{
    "id": 664,
    "title": "Drozer",
    "creator": "MWR InfoSecurity",
    "image": "https://labs.f-secure.com/assets/BlogImages/drozer-logo.png",
    "description": "Comprehensive security testing framework for Android applications.",
    "downloadUrl": "https://labs.f-secure.com/tools/drozer/"
},
{
    "id": 665,
    "title": "QARK",
    "creator": "LinkedIn",
    "image": "https://github.com/linkedin/qark/raw/master/docs/_static/qark-logo.png",
    "description": "Tool for identifying security vulnerabilities in Android applications.",
    "downloadUrl": "https://github.com/linkedin/qark"
},
{
    "id": 666,
    "title": "FuzzDB",
    "creator": "FuzzDB Project",
    "image": "https://github.com/fuzzdb-project/fuzzdb/raw/master/images/fuzzdb-logo.png",
    "description": "Dictionary of attack patterns and primitives for black-box application testing.",
    "downloadUrl": "https://github.com/fuzzdb-project/fuzzdb"
},
{
    "id": 667,
    "title": "SecLists",
    "creator": "Daniel Miessler",
    "image": "https://github.com/danielmiessler/SecLists/raw/master/images/seclists-logo.png",
    "description": "Collection of multiple types of security testing lists for penetration testers.",
    "downloadUrl": "https://github.com/danielmiessler/SecLists"
},
{
    "id": 668,
    "title": "PayloadsAllTheThings",
    "creator": "swisskyrepo",
    "image": "https://github.com/swisskyrepo/PayloadsAllTheThings/raw/master/.github/logo.png",
    "description": "List of useful payloads and bypasses for Web Application Security.",
    "downloadUrl": "https://github.com/swisskyrepo/PayloadsAllTheThings"
},
{
    "id": 669,
    "title": "Exploit-DB",
    "creator": "Offensive Security",
    "image": "https://www.exploit-db.com/apple-touch-icon.png",
    "description": "Archive of exploits and vulnerable software maintained by Offensive Security.",
    "downloadUrl": "https://www.exploit-db.com/"
},
{
    "id": 670,
    "title": "Vulners",
    "creator": "Vulners Team",
    "image": "https://vulners.com/static/img/vulners_logo.png",
    "description": "Search engine for vulnerabilities in software components and exploits.",
    "downloadUrl": "https://vulners.com/"
},
{
    "id": 671,
    "title": "SearchSploit",
    "creator": "Offensive Security",
    "image": "https://www.exploit-db.com/apple-touch-icon.png",
    "description": "Command line search tool for Exploit-DB's archive of exploits.",
    "downloadUrl": "https://www.exploit-db.com/searchsploit"
},
{
    "id": 672,
    "title": "CVE Details",
    "creator": "CVE Details",
    "image": "https://www.cvedetails.com/img/cvelogo.png",
    "description": "Database of Common Vulnerabilities and Exposures with search functionality.",
    "downloadUrl": "https://www.cvedetails.com/"
},
{
    "id": 673,
    "title": "Shodan",
    "creator": "John Matherly",
    "image": "https://www.shodan.io/static/img/favicon.png",
    "description": "Search engine for Internet-connected devices with vulnerability data.",
    "downloadUrl": "https://www.shodan.io/"
},
{
    "id": 674,
    "title": "Censys",
    "creator": "Censys Team",
    "image": "https://censys.io/static/images/censys-logo.svg",
    "description": "Platform for Internet-wide scanning and vulnerability assessment.",
    "downloadUrl": "https://censys.io/"
},
{
    "id": 675,
    "title": "ZoomEye",
    "creator": "Knownsec",
    "image": "https://www.zoomeye.org/static/img/favicon.ico",
    "description": "Cybersecurity search engine for network devices and components.",
    "downloadUrl": "https://www.zoomeye.org/"
},
{
    "id": 676,
    "title": "SpiderFoot",
    "creator": "Steve Micallef",
    "image": "https://www.spiderfoot.net/wp-content/uploads/2018/03/spiderfoot-logo.png",
    "description": "Open source intelligence automation tool for footprinting and reconnaissance.",
    "downloadUrl": "https://www.spiderfoot.net/download/"
},
{
    "id": 677,
    "title": "theHarvester",
    "creator": "laramies",
    "image": "https://github.com/laramies/theHarvester/raw/master/theHarvester-logo.png",
    "description": "Email, subdomain and name reconnaissance tool for penetration testing.",
    "downloadUrl": "https://github.com/laramies/theHarvester"
},
{
    "id": 678,
    "title": "Recon-ng",
    "creator": "LaNMaSteR53",
    "image": "https://github.com/lanmaster53/recon-ng/raw/master/data/logo.png",
    "description": "Full-featured web reconnaissance framework written in Python.",
    "downloadUrl": "https://github.com/lanmaster53/recon-ng"
},
{
    "id": 679,
    "title": "OSINT Framework",
    "creator": "Justin Nordine",
    "image": "https://osintframework.com/favicon.ico",
    "description": "Collection of OSINT tools and resources organized by categories.",
    "downloadUrl": "https://osintframework.com/"
},
{
    "id": 680,
    "title": "Maltego",
    "creator": "Paterva",
    "image": "https://www.maltego.com/wp-content/uploads/2020/07/maltego-logo.svg",
    "description": "Interactive data mining tool that renders directed graphs for link analysis.",
    "downloadUrl": "https://www.maltego.com/downloads/"
},
{
    "id": 681,
    "title": "Spyse",
    "creator": "Spyse Team",
    "image": "https://spyse.com/static/images/spyse-logo.svg",
    "description": "Cybersecurity search engine for networks, domains and vulnerabilities.",
    "downloadUrl": "https://spyse.com/"
},
{
    "id": 682,
    "title": "Amass",
    "creator": "OWASP",
    "image": "https://owasp.org/www-project-amass/assets/images/logo.png",
    "description": "In-depth attack surface mapping and asset discovery tool.",
    "downloadUrl": "https://github.com/OWASP/Amass"
},
{
    "id": 683,
    "title": "Aquatone",
    "creator": "michenriksen",
    "image": "https://github.com/michenriksen/aquatone/raw/master/aquatone.png",
    "description": "Tool for visual inspection of websites across many hosts with screenshots.",
    "downloadUrl": "https://github.com/michenriksen/aquatone"
},
{
    "id": 684,
    "title": "DNSDumpster",
    "creator": "DNSDumpster",
    "image": "https://dnsdumpster.com/static/favicon.ico",
    "description": "Online DNS reconnaissance tool for discovering hosts related to a domain.",
    "downloadUrl": "https://dnsdumpster.com/"
},
{
    "id": 685,
    "title": "Sn1per",
    "creator": "1N3",
    "image": "https://github.com/1N3/Sn1per/raw/master/sniper-logo.png",
    "description": "Automated pentest reconnaissance scanner for gathering information.",
    "downloadUrl": "https://github.com/1N3/Sn1per"
},
{
    "id": 686,
    "title": "Photon",
    "creator": "s0md3v",
    "image": "https://github.com/s0md3v/Photon/raw/master/images/photon.png",
    "description": "Incredibly fast crawler designed for OSINT with extractors for various data types.",
    "downloadUrl": "https://github.com/s0md3v/Photon"
},
{
    "id": 687,
    "title": "Sherlock",
    "creator": "sherlock-project",
    "image": "https://github.com/sherlock-project/sherlock/raw/master/images/logo.png",
    "description": "Hunt down social media accounts by username across many sites.",
    "downloadUrl": "https://github.com/sherlock-project/sherlock"
},
{
    "id": 688,
    "title": "Social Mapper",
    "creator": "Greenwolf",
    "image": "https://github.com/Greenwolf/social_mapper/raw/master/social_mapper_small.png",
    "description": "Automated tool for correlating social media profiles via facial recognition.",
    "downloadUrl": "https://github.com/Greenwolf/social_mapper"
},
{
    "id": 689,
    "title": "Trape",
    "creator": "jofpin",
    "image": "https://github.com/jofpin/trape/raw/master/static/img/logo.png",
    "description": "People tracker on the Internet to learn the art of human tracking.",
    "downloadUrl": "https://github.com/jofpin/trape"
},
{
    "id": 690,
    "title": "Creepy",
    "creator": "ilektrojohn",
    "image": "https://github.com/ilektrojohn/creepy/raw/master/data/images/creepy.png",
    "description": "Geolocation OSINT tool for gathering location information from social platforms.",
    "downloadUrl": "https://github.com/ilektrojohn/creepy"
},
{
    "id": 691,
    "title": "GHunt",
    "creator": "mxrch",
    "image": "https://github.com/mxrch/GHunt/raw/master/doc/logo.png",
    "description": "OSINT tool for investigating Google accounts with email address.",
    "downloadUrl": "https://github.com/mxrch/GHunt"
},
{
    "id": 692,
    "title": "Buster",
    "creator": "sherlock-project",
    "image": "https://github.com/sham00n/buster/raw/master/docs/logo.png",
    "description": "Advanced tool for email reconnaissance and information gathering.",
    "downloadUrl": "https://github.com/sham00n/buster"
},
{
    "id": 693,
    "title": "CloudFail",
    "creator": "m0rtem",
    "image": "https://github.com/m0rtem/CloudFail/raw/master/img/logo.png",
    "description": "Unmask server IPs hidden behind Cloudflare by searching old database records.",
    "downloadUrl": "https://github.com/m0rtem/CloudFail"
},
{
    "id": 694,
    "title": "CloudFlair",
    "creator": "christophetd",
    "image": "https://github.com/christophetd/CloudFlair/raw/master/logo.png",
    "description": "Find origin servers of websites protected by CloudFlare using Internet scan data.",
    "downloadUrl": "https://github.com/christophetd/CloudFlair"
},
{
    "id": 695,
    "title": "Bucket Finder",
    "creator": "social-engineering",
    "image": "https://github.com/social-engineering/bucket-finder/raw/master/docs/logo.png",
    "description": "Tool for finding publicly accessible Amazon S3 buckets and files.",
    "downloadUrl": "https://github.com/social-engineering/bucket-finder"
},
{
    "id": 696,
    "title": "S3Scanner",
    "creator": "sa7mon",
    "image": "https://github.com/sa7mon/S3Scanner/raw/master/docs/logo.png",
    "description": "Scan for open S3 buckets and dump their contents for analysis.",
    "downloadUrl": "https://github.com/sa7mon/S3Scanner"
},
{
    "id": 697,
    "title": "GitDumper",
    "creator": "arthaud",
    "image": "https://github.com/arthaud/git-dumper/raw/master/docs/logo.png",
    "description": "Tool for dumping Git repositories from misconfigured web servers.",
    "downloadUrl": "https://github.com/arthaud/git-dumper"
},
{
    "id": 698,
    "title": "GitTools",
    "creator": "internetwache",
    "image": "https://github.com/internetwache/GitTools/raw/master/logo.png",
    "description": "Collection of tools for finding and downloading Git repositories.",
    "downloadUrl": "https://github.com/internetwache/GitTools"
},
{
    "id": 699,
    "title": "GitHacker",
    "creator": "lijiejie",
    "image": "https://github.com/lijiejie/GitHack/raw/master/docs/logo.png",
    "description": "Restore source code from exposed .git folders on web servers.",
    "downloadUrl": "https://github.com/lijiejie/GitHack"
},
{
    "id": 700,
    "title": "DVCS Ripper",
    "creator": "kost",
    "image": "https://github.com/kost/dvcs-ripper/raw/master/logo.png",
    "description": "Rip web accessible Git, Mercurial, and other version control repos.",
    "downloadUrl": "https://github.com/kost/dvcs-ripper"
        },
        {
        "id": 708,
        "title": "GIMP",
        "creator": "The GIMP Development Team",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_GIMP_icon_-_gnome.svg/1200px-The_GIMP_icon_-_gnome.svg.png",
        "description": "Free and open-source image editor for graphic design",
        "downloadUrl": "https://www.gimp.org/downloads/"
    },
    {
        "id": 709,
        "title": "Inkscape",
        "creator": "Inkscape Community",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Inkscape_Logo.svg/1200px-Inkscape_Logo.svg.png",
        "description": "Professional vector graphics editor",
        "downloadUrl": "https://inkscape.org/release/"
    },
    {
        "id": 710,
        "title": "Figma",
        "creator": "Figma, Inc",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Figma-logo.svg/1200px-Figma-logo.svg.png",
        "description": "Collaborative interface design tool",
        "downloadUrl": "https://www.figma.com/downloads/"
    },
    {
        "id": 711,
        "title": "Adobe XD",
        "creator": "Adobe Inc.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png",
        "description": "UX/UI design and prototyping tool",
        "downloadUrl": "https://www.adobe.com/products/xd.html"
    },
    {
        "id": 712,
        "title": "Sketch",
        "creator": "Bohemian Coding",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/1200px-Sketch_Logo.svg.png",
        "description": "Digital design toolkit for Mac",
        "downloadUrl": "https://www.sketch.com/get/"
    },
    {
        "id": 713,
        "title": "FileZilla",
        "creator": "Tim Kosse",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/FileZilla_logo.svg/1200px-FileZilla_logo.svg.png",
        "description": "Free FTP solution for file transfers",
        "downloadUrl": "https://filezilla-project.org/download.php"
    },
    {
        "id": 714,
        "title": "WinSCP",
        "creator": "Martin Prikryl",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/WinSCP_logo.svg/1200px-WinSCP_logo.svg.png",
        "description": "SFTP, FTP, WebDAV and SCP client for Windows",
        "downloadUrl": "https://winscp.net/eng/download.php"
    },
    {
        "id": 715,
        "title": "Postman",
        "creator": "Postman Inc.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Postman_%28software%29.png/240px-Postman_%28software%29.png",
        "description": "API development and testing environment",
        "downloadUrl": "https://www.postman.com/downloads/"
    },
    {
        "id": 716,
        "title": "Insomnia",
        "creator": "Kong Inc.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Insomnia_Logo.png/240px-Insomnia_Logo.png",
        "description": "Cross-platform REST client for API testing",
        "downloadUrl": "https://insomnia.rest/download"
    },
    {
        "id": 717,
        "title": "Git",
        "creator": "Linus Torvalds",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png",
        "description": "Distributed version control system",
        "downloadUrl": "https://git-scm.com/downloads"
    },
    {
        "id": 718,
        "title": "GitHub Desktop",
        "creator": "GitHub",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png",
        "description": "GUI client for GitHub repositories",
        "downloadUrl": "https://desktop.github.com/"
    },
    {
        "id": 719,
        "title": "Sourcetree",
        "creator": "Atlassian",
        "image": "https://wac-cdn.atlassian.com/dam/jcr:81b15cde-be2e-4f4a-8af7-9436f4a1b431/Sourcetree-icon-blue.svg",
        "description": "Free Git GUI client for Windows and Mac",
        "downloadUrl": "https://www.sourcetreeapp.com"
    },
    {
        "id": 720,
        "title": "TortoiseGit",
        "creator": "TortoiseGit Team",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/TortoiseGit_logo.svg/1200px-TortoiseGit_logo.svg.png",
        "description": "Windows Shell Interface to Git",
        "downloadUrl": "https://tortoisegit.org/download/"
    },
    {
        "id": 721,
        "title": "Node.js",
        "creator": "OpenJS Foundation",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
        "description": "JavaScript runtime built on Chrome's V8 engine",
        "downloadUrl": "https://nodejs.org/en/download/"
    },
    {
        "id": 722,
        "title": "npm",
        "creator": "npm, Inc.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png",
        "description": "Package manager for JavaScript",
        "downloadUrl": "https://www.npmjs.com/get-npm"
    },
    {
        "id": 723,
        "title": "Yarn",
        "creator": "Facebook",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Yarn_Logo.svg/1200px-Yarn_Logo.svg.png",
        "description": "Fast, reliable JavaScript dependency management",
        "downloadUrl": "https://classic.yarnpkg.com/en/docs/install"
    },
    {
        "id": 724,
        "title": "Docker",
        "creator": "Docker, Inc.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1200px-Docker_%28container_engine%29_logo.svg.png",
        "description": "Containerization platform for developing applications",
        "downloadUrl": "https://www.docker.com/products/docker-desktop"
    },
    {
        "id": 725,
        "title": "XAMPP",
        "creator": "Apache Friends",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Xampp_logo.svg/1200px-Xampp_logo.svg.png",
        "description": "Apache distribution containing MySQL, PHP and Perl",
        "downloadUrl": "https://www.apachefriends.org/download.html"
    },
    {
        "id": 726,
        "title": "WampServer",
        "creator": "Romain Bourdon",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/WampServer-logo.svg/1200px-WampServer-logo.svg.png",
        "description": "Windows web development environment",
        "downloadUrl": "http://www.wampserver.com/en/"
    },
    {
        "id": 727,
        "title": "MAMP",
        "creator": "appsolute GmbH",
        "image": "https://www.mamp.info/images/icons/mamp/mamp-pro-icon.png",
        "description": "Macintosh web server solution",
        "downloadUrl": "https://www.mamp.info/en/downloads/"
    },
    {
        "id": 728,
        "title": "Laragon",
        "creator": "Le Ngoc Anh",
        "image": "https://laragon.org/images/logo.png",
        "description": "Portable, isolated, fast PHP development environment",
        "downloadUrl": "https://laragon.org/download/index.html"
    },
    {
        "id": 729,
        "title": "Composer",
        "creator": "Nils Adermann, Jordi Boggiano",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Composer-Logo.svg/1200px-Composer-Logo.svg.png",
        "description": "Dependency Manager for PHP",
        "downloadUrl": "https://getcomposer.org/download/"
    },
    {
        "id": 730,
        "title": "Webpack",
        "creator": "OpenJS Foundation",
        "image": "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png",
        "description": "Static module bundler for JavaScript applications",
        "downloadUrl": "https://webpack.js.org/guides/installation/"
    },
    {
        "id": 731,
        "title": "Gulp",
        "creator": "Fractal",
        "image": "https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png",
        "description": "JavaScript task runner and build system",
        "downloadUrl": "https://gulpjs.com/docs/en/getting-started/quick-start"
    },
    {
        "id": 732,
        "title": "Grunt",
        "creator": "Grunt Team",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grunt-logo.svg/1200px-Grunt-logo.svg.png",
        "description": "JavaScript task runner for automation",
        "downloadUrl": "https://gruntjs.com/getting-started"
    },
    {
        "id": 733,
        "title": "Babel",
        "creator": "Sebastian McKenzie",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/1200px-Babel_Logo.svg.png",
        "description": "JavaScript compiler for next-gen JS",
        "downloadUrl": "https://babeljs.io/setup"
    },
    {
        "id": 734,
        "title": "ESLint",
        "creator": "Nicholas C. Zakas",
        "image": "https://eslint.org/assets/img/logo.svg",
        "description": "Static code analysis tool for JavaScript",
        "downloadUrl": "https://eslint.org/docs/user-guide/getting-started"
    },
    {
        "id": 735,
        "title": "Prettier",
        "creator": "James Long",
        "image": "https://prettier.io/icon.png",
        "description": "Opinionated code formatter for consistent style",
        "downloadUrl": "https://prettier.io/docs/en/install.html"
    },
    {
        "id": 736,
        "title": "Bootstrap",
        "creator": "Twitter",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
        "description": "Front-end component library for responsive sites",
        "downloadUrl": "https://getbootstrap.com/docs/5.0/getting-started/download/"
    },
    {
        "id": 737,
        "title": "Tailwind CSS",
        "creator": "Adam Wathan",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
        "description": "Utility-first CSS framework",
        "downloadUrl": "https://tailwindcss.com/docs/installation"
    },
    {
        "id": 738,
        "title": "Sass",
        "creator": "Hampton Catlin, Natalie Weizenbaum",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",
        "description": "CSS preprocessor with advanced features",
        "downloadUrl": "https://sass-lang.com/install"
    },
    {
        "id": 739,
        "title": "Less",
        "creator": "Alexis Sellier",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Less_Logo.svg/1200px-Less_Logo.svg.png",
        "description": "Backwards-compatible CSS extension language",
        "downloadUrl": "http://lesscss.org/usage/"
    },
    {
        "id": 740,
        "title": "PostCSS",
        "creator": "Andrey Sitnik",
        "image": "https://postcss.org/_/web_modules/Hero/postcss.svg",
        "description": "Tool for transforming CSS with JavaScript",
        "downloadUrl": "https://postcss.org/docs/"
    },
    {
        "id": 741,
        "title": "Pug",
        "creator": "TJ Holowaychuk",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Pug-logo.svg/1200px-Pug-logo.svg.png",
        "description": "High-performance template engine",
        "downloadUrl": "https://pugjs.org/api/getting-started.html"
    },
    {
        "id": 742,
        "title": "Handlebars",
        "creator": "Yehuda Katz",
        "image": "https://handlebarsjs.com/images/handlebars_logo.png",
        "description": "Semantic templating system",
        "downloadUrl": "https://handlebarsjs.com/installation/"
    },
    {
        "id": 743,
        "title": "EJS",
        "creator": "Matthew Eernisse",
        "image": "https://cdn.rawgit.com/tj/ejs/master/assets/img/ejs-logo.png",
        "description": "Embedded JavaScript templating",
        "downloadUrl": "https://ejs.co/#install"
    },
    {
        "id": 744,
        "title": "React",
        "creator": "Facebook",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        "description": "JavaScript library for building user interfaces",
        "downloadUrl": "https://reactjs.org/docs/getting-started.html"
    },
    {
        "id": 745,
        "title": "Vue.js",
        "creator": "Evan You",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        "description": "Progressive JavaScript framework",
        "downloadUrl": "https://vuejs.org/v2/guide/installation.html"
    },
    {
        "id": 746,
        "title": "Angular",
        "creator": "Google",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
        "description": "Platform for building mobile and desktop web applications",
        "downloadUrl": "https://angular.io/guide/setup-local"
    },
    {
        "id": 747,
        "title": "Svelte",
        "creator": "Rich Harris",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
        "description": "Component framework that compiles to efficient JavaScript",
        "downloadUrl": "https://svelte.dev/blog/the-easiest-way-to-get-started"
    },
    {
        "id": 748,
        "title": "Ember.js",
        "creator": "Yehuda Katz",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ember.js_Logo_and_Mascot.png/240px-Ember.js_Logo_and_Mascot.png",
        "description": "Framework for ambitious web applications",
        "downloadUrl": "https://guides.emberjs.com/release/getting-started/"
    },
    {
        "id": 749,
        "title": "Next.js",
        "creator": "Vercel",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png",
        "description": "React framework for server-rendered applications",
        "downloadUrl": "https://nextjs.org/docs/getting-started"
    },
    {
        "id": 750,
        "title": "Nuxt.js",
        "creator": "Nuxt Team",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1200px-Nuxt_logo.svg.png",
        "description": "Vue.js framework for universal applications",
        "downloadUrl": "https://nuxtjs.org/docs/2.x/get-started/installation"
    },
    {
        "id": 751,
        "title": "Gatsby",
        "creator": "Kyle Mathews",
        "image": "https://www.gatsbyjs.com/Gatsby-Monogram.svg",
        "description": "React-based static site generator",
        "downloadUrl": "https://www.gatsbyjs.com/docs/quick-start/"
    },
    {
        "id": 752,
        "title": "Eleventy",
        "creator": "Zach Leatherman",
        "image": "https://www.11ty.dev/img/logo-github.png",
        "description": "Simpler static site generator",
        "downloadUrl": "https://www.11ty.dev/docs/getting-started/"
    },
    {
        "id": 753,
        "title": "Jekyll",
        "creator": "Tom Preston-Werner",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Jekyll_%28software%29_Logo.png/240px-Jekyll_%28software%29_Logo.png",
        "description": "Static site generator written in Ruby",
        "downloadUrl": "https://jekyllrb.com/docs/installation/"
    },
    {
        "id": 754,
        "title": "Hugo",
        "creator": "Steve Francia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hugo-Release-0.30-Logo.png/240px-Hugo-Release-0.30-Logo.png",
        "description": "Fast static site generator in Go",
        "downloadUrl": "https://gohugo.io/getting-started/installing/"
    },
    {
        "id": 755,
        "title": "Hexo",
        "creator": "Tommy Chen",
        "image": "https://hexo.io/logo.svg",
        "description": "Fast, simple blog framework powered by Node.js",
        "downloadUrl": "https://hexo.io/docs/"
    },
    {
        "id": 756,
        "title": "Docusaurus",
        "creator": "Facebook",
        "image": "https://docusaurus.io/img/docusaurus.svg",
        "description": "Easy-to-maintain open source documentation websites",
        "downloadUrl": "https://docusaurus.io/docs/installation"
    },
    {
        "id": 757,
        "title": "Storybook",
        "creator": "Storybook Team",
        "image": "https://storybook.js.org/images/logos/logo-storybook.svg",
        "description": "UI component explorer for frontend developers",
        "downloadUrl": "https://storybook.js.org/docs/react/get-started/install"
    },
    {
        "id": 758,
        "title": "Chrome DevTools",
        "creator": "Google",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Google_Chrome_icon_%282011%29.svg/1200px-Google_Chrome_icon_%282011%29.svg.png",
        "description": "Built-in web developer tools in Chrome browser",
        "downloadUrl": "https://developer.chrome.com/docs/devtools/"
    },
    {
        "id": 759,
        "title": "Firefox Developer Tools",
        "creator": "Mozilla",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png",
        "description": "Built-in web developer tools in Firefox",
        "downloadUrl": "https://developer.mozilla.org/en-US/docs/Tools"
    },
    {
        "id": 760,
        "title": "Lighthouse",
        "creator": "Google",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lighthouse_%28Google%29_Logo.svg/1200px-Lighthouse_%28Google%29_Logo.svg.png",
        "description": "Automated tool for improving web page quality",
        "downloadUrl": "https://developer.chrome.com/docs/lighthouse/overview/"
    },
    {
        "id": 761,
        "title": "WebPageTest",
        "creator": "Patrick Meenan",
        "image": "https://www.webpagetest.org/images/logo.svg",
        "description": "Performance testing for web pages",
        "downloadUrl": "https://www.webpagetest.org/"
    },
    {
        "id": 762,
        "title": "BrowserStack",
        "creator": "Ritesh Arora",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/BrowserStack_Logo.svg/1200px-BrowserStack_Logo.svg.png",
        "description": "Cross-browser testing platform",
        "downloadUrl": "https://www.browserstack.com/"
    },
    {
        "id": 763,
        "title": "Sauce Labs",
        "creator": "Jason Huggins",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Sauce_Labs_Logo.svg/1200px-Sauce_Labs_Logo.svg.png",
        "description": "Cloud-based testing platform",
        "downloadUrl": "https://saucelabs.com/"
    },
    {
        "id": 764,
        "title": "LambdaTest",
        "creator": "LambdaTest",
        "image": "https://www.lambdatest.com/resources/images/logos/logo.svg",
        "description": "Cross-browser testing cloud",
        "downloadUrl": "https://www.lambdatest.com/"
    },
    {
        "id": 765,
        "title": "CrossBrowserTesting",
        "creator": "SmartBear",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/SmartBear_Software_logo.svg/1200px-SmartBear_Software_logo.svg.png",
        "description": "Live interactive cross-browser testing",
        "downloadUrl": "https://crossbrowsertesting.com/"
    },
    {
        "id": 766,
        "title": "Responsively",
        "creator": "Responsively Team",
        "image": "https://responsively.app/assets/img/responsively-logo.png",
        "description": "Tool for responsive web development",
        "downloadUrl": "https://responsively.app/download"
    },
    {
        "id": 767,
        "title": "Polypane",
        "creator": "Kilian Valkhof",
        "image": "https://polypane.app/icons/icon-512x512.png",
        "description": "Browser for developers and designers",
        "downloadUrl": "https://polypane.app/download/"
    },
    {
        "id": 768,
        "title": "Local by Flywheel",
        "creator": "Flywheel",
        "image": "https://getflywheel.com/wp-content/uploads/2018/11/local-by-flywheel-logo-color.svg",
        "description": "Local WordPress development tool",
        "downloadUrl": "https://localwp.com/"
    },
    {
        "id": 769,
        "title": "DevKinsta",
        "creator": "Kinsta",
        "image": "https://kinsta.com/wp-content/uploads/2021/01/devkinsta-logo.png",
        "description": "Free local WordPress development suite",
        "downloadUrl": "https://kinsta.com/devkinsta/"
    },
    {
        "id": 770,
        "title": "Lando",
        "creator": "Lando Team",
        "image": "https://docs.lando.dev/images/icon.png",
        "description": "Local development environment tool",
        "downloadUrl": "https://lando.dev/"
    },
    {
        "id": 771,
        "title": "DDEV",
        "creator": "DDEV Team",
        "image": "https://ddev.com/favicon.ico",
        "description": "Local web development environment tool",
        "downloadUrl": "https://ddev.com/get-started/"
    },
    {
        "id": 772,
        "title": "Vagrant",
        "creator": "HashiCorp",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Vagrant.png/1200px-Vagrant.png",
        "description": "Tool for building development environments",
        "downloadUrl": "https://www.vagrantup.com/downloads"
    },
    {
        "id": 773,
        "title": "VirtualBox",
        "creator": "Oracle",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Virtualbox_logo.png/1200px-Virtualbox_logo.png",
        "description": "Virtualization product for running multiple OS",
        "downloadUrl": "https://www.virtualbox.org/wiki/Downloads"
    },
    {
        "id": 774,
        "title": "WSL",
        "creator": "Microsoft",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Windows_terminal_logo.svg/1200px-Windows_terminal_logo.svg.png",
        "description": "Windows Subsystem for Linux",
        "downloadUrl": "https://docs.microsoft.com/en-us/windows/wsl/install"
    },
    {
        "id": 775,
        "title": "Hyper",
        "creator": "Vercel",
        "image": "https://hyper.is/static/hyper.png",
        "description": "Terminal built on web technologies",
        "downloadUrl": "https://hyper.is/"
    },
    {
        "id": 776,
        "title": "iTerm2",
        "creator": "George Nachman",
        "image": "https://iterm2.com/img/logo2x.jpg",
        "description": "Terminal emulator for macOS",
        "downloadUrl": "https://iterm2.com/downloads.html"
    },
    {
        "id": 777,
        "title": "Windows Terminal",
        "creator": "Microsoft",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Windows_terminal_logo.svg/1200px-Windows_terminal_logo.svg.png",
        "description": "Modern terminal application for Windows",
        "downloadUrl": "https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701"
    },
    {
        "id": 778,
        "title": "Oh My Zsh",
        "creator": "Robby Russell",
        "image": "https://ohmyz.sh/img/OMZLogo_BnW.png",
        "description": "Framework for managing Zsh configuration",
        "downloadUrl": "https://ohmyz.sh/#install"
    },
    {
        "id": 779,
        "title": "PowerShell",
        "creator": "Microsoft",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/PowerShell_5.0_icon.png/1200px-PowerShell_5.0_icon.png",
        "description": "Task automation and configuration management",
        "downloadUrl": "https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell"
    },
    {
        "id": 780,
        "title": "Cmder",
        "creator": "Cmder Team",
        "image": "https://cmder.net/img/logo.svg",
        "description": "Console emulator package for Windows",
        "downloadUrl": "https://cmder.net/"
    },
    {
        "id": 781,
        "title": "ConEmu",
        "creator": "Maximus5",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/ConEmu_Logo.png/240px-ConEmu_Logo.png",
        "description": "Customizable Windows terminal",
        "downloadUrl": "https://conemu.github.io/"
    },
    {
        "id": 782,
        "title": "Alacritty",
        "creator": "Joe Wilm",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Alacritty_logo.svg/1200px-Alacritty_logo.svg.png",
        "description": "Cross-platform terminal emulator",
        "downloadUrl": "https://github.com/alacritty/alacritty/releases"
    },
    {
        "id": 783,
        "title": "Tabby",
        "creator": "Eugene Pankov",
        "image": "https://tabby.sh/images/logo.png",
        "description": "Modern terminal for Windows, macOS and Linux",
        "downloadUrl": "https://tabby.sh/"
    },
    {
        "id": 784,
        "title": "Terminus",
        "creator": "Eugene Pankov",
        "image": "https://github.com/Eugeny/tabby/raw/master/docs/readme.png",
        "description": "Highly configurable terminal emulator",
        "downloadUrl": "https://github.com/Eugeny/tabby/releases"
    },
    {
        "id": 785,
        "title": "Notepad++",
        "creator": "Don Ho",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Notepad%2B%2B_Logo.png/240px-Notepad%2B%2B_Logo.png",
        "description": "Source code editor with syntax highlighting",
        "downloadUrl": "https://notepad-plus-plus.org/downloads/"
    },
    {
        "id": 786,
        "title": "Brackets",
        "creator": "Adobe",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brackets_Icon.svg/1200px-Brackets_Icon.svg.png",
        "description": "Modern open-source code editor for web design",
        "downloadUrl": "http://brackets.io/"
    },
    {
        "id": 787,
        "title": "Bluefish",
        "creator": "Bluefish Team",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bluefish-logo.svg/1200px-Bluefish-logo.svg.png",
        "description": "Powerful editor for programmers and web developers",
        "downloadUrl": "http://bluefish.openoffice.nl/download.html"
    },
    {
        "id": 788,
        "title": "Aptana Studio",
        "creator": "Aptana",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aptana_Logo.png/240px-Aptana_Logo.png",
        "description": "Web development IDE with HTML, CSS, JavaScript support",
        "downloadUrl": "http://www.aptana.com/products/studio3/download.html"
    },
    {
        "id": 789,
        "title": "Komodo Edit",
        "creator": "ActiveState",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Komodo_Edit_icon.png/240px-Komodo_Edit_icon.png",
        "description": "Free multi-language code editor",
        "downloadUrl": "https://www.activestate.com/products/komodo-edit/download-edit/"
    },
    {
        "id": 790,
        "title": "Light Table",
        "creator": "Chris Granger",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Light_Table_Logo.png/240px-Light_Table_Logo.png",
        "description": "Interactive IDE with instant feedback",
        "downloadUrl": "http://lighttable.com/"
    },
    {
        "id": 791,
        "title": "TextMate",
        "creator": "Allan Odgaard",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/TextMate_Logo.png/240px-TextMate_Logo.png",
        "description": "GUI text editor for macOS",
        "downloadUrl": "https://macromates.com/download"
    },
    {
        "id": 792,
        "title": "BBEdit",
        "creator": "Bare Bones Software",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/BBEdit_Icon.png/240px-BBEdit_Icon.png",
        "description": "Professional HTML and text editor for macOS",
        "downloadUrl": "https://www.barebones.com/products/bbedit/download.html"
    },
    {
        "id": 793,
        "title": "Coda",
        "creator": "Panic",
        "image": "https://panic.com/coda/images/coda-logo@2x.png",
        "description": "Web development IDE for macOS",
        "downloadUrl": "https://panic.com/coda/"
    },
    {
        "id": 794,
        "title": "Espresso",
        "creator": "MacRabbit",
        "image": "https://www.macrabbit.com/espresso/images/espresso-icon.png",
        "description": "Web editor for macOS with CSSEdit tools",
        "downloadUrl": "https://www.macrabbit.com/espresso/"
    },
    {
        "id": 795,
        "title": "UltraEdit",
        "creator": "IDM Computer Solutions",
        "image": "https://www.ultraedit.com/wp-content/uploads/2020/10/UE-Logo-1.png",
        "description": "Powerful text editor for Windows, Mac and Linux",
        "downloadUrl": "https://www.ultraedit.com/downloads/"
    },
    {
        "id": 796,
        "title": "EditPlus",
        "creator": "ES-Computing",
        "image": "https://www.editplus.com/images/logo.gif",
        "description": "Text editor for Windows with HTML tools",
        "downloadUrl": "https://www.editplus.com/download.html"
    },
    {
        "id": 797,
        "title": "EmEditor",
        "creator": "Emurasoft",
        "image": "https://www.emeditor.com/wp-content/uploads/2021/01/emeditor-logo.png",
        "description": "Fast text editor for large files",
        "downloadUrl": "https://www.emeditor.com/download/"
    },
    {
        "id": 798,
        "title": "Geany",
        "creator": "Geany Team",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Geany_logo.svg/1200px-Geany_logo.svg.png",
        "description": "Lightweight cross-platform IDE",
        "downloadUrl": "https://www.geany.org/download/releases"
    },
    {
        "id": 799,
        "title": "Kate",
        "creator": "KDE",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kate_Logo.svg/1200px-Kate_Logo.svg.png",
        "description": "Advanced text editor for KDE",
        "downloadUrl": "https://kate-editor.org/download/"
    },
    {
        "id": 800,
        "title": "Vim",
        "creator": "Bram Moolenaar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/1200px-Vimlogo.svg.png",
        "description": "Highly configurable text editor",
        "downloadUrl": "https://www.vim.org/download.php"
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
