// DOM Elements
const dropzone = document.getElementById('dropzone');
const imageInput = document.getElementById('image-input');
const browseBtn = document.querySelector('.browse-btn');
const workspace = document.getElementById('workspace');
const canvas = document.getElementById('meme-canvas');
const ctx = canvas.getContext('2d');

const generateBtn = document.getElementById('generate-btn');
const captionText = document.getElementById('caption-text');
const posRadios = document.querySelectorAll('input[name="position"]');
const posLabels = document.querySelectorAll('.toggle-label');
const fontSizeInput = document.getElementById('font-size');
const fontSizeVal = document.getElementById('font-size-val');
const colorInput = document.getElementById('text-color');
const colorPreview = document.getElementById('color-preview');
const downloadBtn = document.getElementById('download-btn');
const newImageBtn = document.getElementById('new-image-btn');
const spinner = document.getElementById('loading-spinner');

const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const toastIcon = document.getElementById('toast-icon');



// App State
let currentImage = null;
let base64Image = null;

// Utilities
const showToast = (message, isError = true) => {
    toastMessage.textContent = message;

    // Set SVG based on error state
    if (isError) {
        toastIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
        toast.classList.add('error');
    } else {
        toastIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
        toast.classList.remove('error');
    }

    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
};

// Image Handling
const handleImageFile = (file) => {
    if (!file || !file.type.startsWith('image/')) {
        showToast('Please select a valid image file (PNG, JPG, WEBP).');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        base64Image = e.target.result;
        const img = new Image();
        img.onload = () => {
            currentImage = img;
            setupCanvas();
            dropzone.style.display = 'none';
            workspace.style.display = 'grid';
            // Scroll to workspace
            document.getElementById('generator').scrollIntoView({ behavior: 'smooth' });
            setTimeout(drawMeme, 50);
        };
        img.src = base64Image;
    };
    reader.onerror = () => showToast('Failed to read file.');
    reader.readAsDataURL(file);
};

// Canvas Setup & Rendering
const setupCanvas = () => {
    const maxWidth = 800; // Increased for better quality
    let width = currentImage.width;
    let height = currentImage.height;

    if (width > maxWidth) {
        const ratio = maxWidth / width;
        width = maxWidth;
        height = height * ratio;
    }

    canvas.width = width;
    canvas.height = height;
};

const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(' ');
    let line = '';
    const lines = [];

    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > maxWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    const totalHeight = lines.length * lineHeight;
    let currentY = y;

    const position = document.querySelector('input[name="position"]:checked').value;
    if (position === 'bottom') {
        currentY = canvas.height - 30 - totalHeight + lineHeight;
    } else if (position === 'center') {
        currentY = (canvas.height - totalHeight) / 2 + (lineHeight / 2);
    }

    for (let i = 0; i < lines.length; i++) {
        const currentLine = lines[i].trim();
        context.strokeText(currentLine, x, currentY);
        context.fillText(currentLine, x, currentY);
        currentY += lineHeight;
    }
};

const drawMeme = () => {
    if (!currentImage) return;

    // Clear & draw background image
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);

    const text = captionText.value.trim().toUpperCase();
    if (!text) return;

    const fontSize = parseInt(fontSizeInput.value, 10);
    const scaleFactor = canvas.width / 600; // Adjust font size based on canvas width
    const scaledFontSize = Math.max(20, fontSize * scaleFactor);

    const color = colorInput.value;
    const position = document.querySelector('input[name="position"]:checked').value;

    // Text styling
    ctx.font = `${scaledFontSize}px 'Impact', 'Bangers', sans-serif`;
    ctx.fillStyle = color;
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = Math.max(3, scaledFontSize / 8);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const x = canvas.width / 2;
    let startY;

    if (position === 'top') {
        startY = 30 + scaledFontSize / 2;
    } else if (position === 'center') {
        startY = canvas.height / 2;
    } else {
        startY = canvas.height - 30; // Adjusted inside wrapText
    }

    const maxWidth = canvas.width - 40;
    const lineHeight = scaledFontSize * 1.1;

    wrapText(ctx, text, x, startY, maxWidth, lineHeight);
};

// Built-in Captions
const MOCK_CAPTIONS = [
    "Hum pe to hai he noo 😎",
    "Do bhai dono tabahi 💀🔥",
    "Us after seeing a 10/10 baddie 👀💘",
    "Ye buddha kon hai bhai 🤨",
    "Agli baar modi sarkar 😂",
    "Nikal maa ke pakode 😭",
    "Oye battry 🔋",
    "Ab ki baar 400 paar 🚀",
    "Mere mittroooo 🤝",
    "Chat vote me 👇",
    "Nah, I'd win 🔥",
    "Masterstroke incoming 🤫",
    "When the opposition says they have a chance 😂",
    "Modiji calculating his 400 paar strategy 📈",
    "Me and my homie ready to ignore red flags 🚩😎",
    "Chapri final boss unlocked 💀",
    "Matrix me entry lete hue 😎",
    "When you buy sunglasses worth ₹150 from linking road 💸",
    "Drip check pass ✅"
];

// Caption Generation
const generateCaption = async () => {
    if (!base64Image) {
        showToast('Please upload an image first.');
        return;
    }

    generateBtn.disabled = true;
    spinner.style.display = 'block';
    generateBtn.querySelector('span').style.opacity = '0.5';

    // Simulate generation delay for dramatic effect
    setTimeout(() => {
        const randomCaption = MOCK_CAPTIONS[Math.floor(Math.random() * MOCK_CAPTIONS.length)];
        captionText.value = randomCaption;
        drawMeme();

        generateBtn.disabled = false;
        spinner.style.display = 'none';
        generateBtn.querySelector('span').style.opacity = '1';

        showToast('Caption generated successfully!', false);
    }, 800);
};

const downloadMeme = () => {
    if (!currentImage) return;
    try {
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'antigravity-meme.png';
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('Meme downloaded!', false);
    } catch (err) {
        console.error(err);
        showToast('Download failed. Could be a CORS issue with the image source.');
    }
};

const resetWorkspace = () => {
    currentImage = null;
    base64Image = null;
    captionText.value = '';
    workspace.style.display = 'none';
    dropzone.style.display = 'block';
    imageInput.value = '';
    document.getElementById('generator').scrollIntoView({ behavior: 'smooth' });
};

// Event Listeners Registration
dropzone.addEventListener('click', () => imageInput.click());
browseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    imageInput.click();
});

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
});
dropzone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
});
dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    if (e.dataTransfer.files?.length) {
        handleImageFile(e.dataTransfer.files[0]);
    }
});

imageInput.addEventListener('change', (e) => {
    if (e.target.files?.length) {
        handleImageFile(e.target.files[0]);
    }
});

generateBtn.addEventListener('click', generateCaption);
downloadBtn.addEventListener('click', downloadMeme);
newImageBtn.addEventListener('click', resetWorkspace);

captionText.addEventListener('input', drawMeme);

// Color preview
colorInput.addEventListener('input', (e) => {
    colorPreview.style.backgroundColor = e.target.value;
    drawMeme();
});

fontSizeInput.addEventListener('input', (e) => {
    fontSizeVal.textContent = e.target.value;
    drawMeme();
});

// Custom Radio Buttons
posRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        posLabels.forEach(label => label.classList.remove('active'));
        e.target.closest('.toggle-label').classList.add('active');
        drawMeme();
    });
});

// Initial render logic
document.fonts.ready.then(() => {
    if (currentImage) drawMeme();
});
