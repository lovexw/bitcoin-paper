// 多语言翻译数据
const translations = {
    'copy_success': {
        'zh': '复制成功',
        'en': 'Copied successfully',
        'ja': 'コピーしました',
        'ko': '복사 성공',
        'es': 'Copiado con éxito',
        'fr': 'Copié avec succès',
        'de': 'Erfolgreich kopiert',
        'it': 'Copiato con successo',
        'pt': 'Copiado com sucesso',
        'ru': 'Скопировано успешно',
        'tr': 'Başarıyla kopyalandı',
        'ar': 'تم النسخ بنجاح',
        'he': 'הועתק בהצלחה',
        'hi': 'सफलतापूर्वक कॉपी किया गया',
        'id': 'Berhasil disalin',
        'th': 'คัดลอกสำเร็จ',
        'vi': 'Đã sao chép thành công',
        'fa': 'با موفقیت کپی شد',
        'el': 'Αντιγράφηκε με επιτυχία',
        'pl': 'Skopiowano pomyślnie',
        'nl': 'Succesvol gekopieerd'
    },
    'zh': {
        'title': '比特币：一种点对点的电子现金系统',
        'author': 'Satoshi Nakamoto',
        'date': '2008年10月31日',
        'download_title': '下载白皮书',
        'download_button': 'PDF 下载',
        'license': 'Released under the MIT license',
        'copyright': '© Bitcoin Project 2009-2023'
    },
    'en': {
        'title': 'Bitcoin: A Peer-to-Peer Electronic Cash System',
        'author': 'Satoshi Nakamoto',
        'date': 'October 31, 2008',
        'download_title': 'Download Whitepaper',
        'download_button': 'PDF Download',
        'license': 'Released under the MIT license',
        'copyright': '© Bitcoin Project 2009-2023'
    },
    // 其他语言翻译数据保持不变...
};

// 页面内容更新函数
function updateContent(lang) {
    document.documentElement.lang = lang;
    const t = translations[lang] || translations['en'];

    // 更新页面标题和元数据
    document.title = t.title;
    document.querySelector('meta[property="og:title"]').content = t.title;

    // 更新页面内容
    document.querySelector('h1').textContent = t.title;
    document.querySelector('.author').textContent = t.author;
    document.querySelector('.date').textContent = t.date;
    document.querySelector('.download-section h2').textContent = t.download_title;

    // 更新页脚内容
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        copyrightElement.textContent = `${t.copyright} ${t.license}`;
    }

    // 更新所有下载按钮的文本
    document.querySelectorAll('.download-button').forEach(button => {
        button.textContent = t.download_button;
    });
}

// 语言选择器事件监听
document.getElementById('languageSelect').addEventListener('change', function(e) {
    const lang = e.target.value;
    updateContent(lang);
});

// 页面加载时初始化语言
document.addEventListener('DOMContentLoaded', function() {
    const userLang = navigator.language.split('-')[0];
    const availableLangs = Object.keys(translations);
    const initialLang = availableLangs.includes(userLang) ? userLang : 'zh';
    
    document.getElementById('languageSelect').value = initialLang;
    updateContent(initialLang);

    // 比特币地址复制功能
    const bitcoinAddress = document.querySelector('.bitcoin-address');
    
    if (bitcoinAddress) {
        bitcoinAddress.addEventListener('click', async function() {
            const address = this.textContent;
            try {
                await navigator.clipboard.writeText(address);
                
                // 创建复制成功提示
                const notification = document.createElement('div');
                notification.className = 'copy-success';
                notification.textContent = translations.copy_success[document.documentElement.lang] || translations.copy_success['en'];
                document.body.appendChild(notification);
                
                // 2秒后移除提示
                setTimeout(() => {
                    notification.remove();
                }, 2000);
            } catch (err) {
                console.error('复制失败:', err);
            }
        });
    }
});