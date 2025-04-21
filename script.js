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
