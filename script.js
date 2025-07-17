// Дані команд криптовалют
const cryptoTeams = [
    { name: 'BTC', logo: 'logo/btc.png' },
    { name: 'ETH', logo: 'logo/eth.png' },
    { name: 'BNB', logo: 'logo/bnb.png' },
    { name: 'SOL', logo: 'logo/sol.png' },
    { name: 'ADA', logo: 'logo/ada.png' },
    { name: 'AVAX', logo: 'logo/avax.png' },
    { name: 'DOT', logo: 'logo/dot.png' },
    { name: 'MATIC', logo: 'logo/pol.png' },
    { name: 'ATOM', logo: 'logo/atom.png' },
    { name: 'NEAR', logo: 'logo/near.png' },
    { name: 'FIL', logo: 'logo/fil.png' },
    { name: 'ICP', logo: 'logo/icp.png' },
    { name: 'UNI', logo: 'logo/uni.png' },
    { name: 'LTC', logo: 'logo/ltc.png' },
    { name: 'TRX', logo: 'logo/trx.png' },
    { name: 'XRP', logo: 'logo/xrp.png' },
    { name: 'DOGE', logo: 'logo/doge.png' },
    { name: 'SHIB', logo: 'logo/shib.png' },
    { name: 'DAI', logo: 'logo/dai.png' },
    { name: 'TON', logo: 'logo/ton.png' },
    { name: 'OP', logo: 'logo/op.png' },
    { name: 'ARB', logo: 'logo/arb.png' },
    { name: 'INJ', logo: 'logo/inj.png' },
    { name: 'STRK', logo: 'logo/strk.png' },
    { name: 'JUP', logo: 'logo/jup.png' },
    { name: 'KAS', logo: 'logo/kas.png' },
    { name: 'KSM', logo: 'logo/ksm.png' },
    { name: 'MNT', logo: 'logo/mnt.png' },
    { name: 'CRV', logo: 'logo/crv.png' },
    { name: 'CAKE', logo: 'logo/cake.png' },
    { name: '1INCH', logo: 'logo/1inch.png' },
    { name: 'APT', logo: 'logo/apt.png' }
];

// Переклади
const translations = {
    uk: {
        'play': 'Грати',
        'group': 'Група',
        'news': 'Новини',
        'daily': 'Щоденний турнір',
        'mega': 'Мега турнір',
        'fan': 'Фан-сектор',
        'about': 'Про гру',
        'contact': 'Контакти',
        'crypto-liga-news': 'Crypto Liga News',
        'latest-news': 'Останні новини',
        'news-1-title': '100x за 3 дні!',
        'news-1-desc': 'Гравець який зарезервував команду FIL в MEGA Tournament отримав приз 310 TON...',
        'news-1-full-desc': 'Гравець який зарезервував команду FIL в MEGA Tournament отримав неймовірний приз 310 TON, зарезервувавши команду всього за 3 TON. ETH , який зайняв 2 місце отримав 77 TON, тобто 26х від внеску.',
        'news-2-title': 'Про призові',
        'news-2-desc': 'За вихід в фінальну частину MEGA Tournament команди отримали по 10 TON...',
        'news-2-full-desc': 'За вихід в фінальну частину MEGA Tournament команди отримали по 10 TON! Команди півфіналісти отримали ще по 20 TON.',
        'news-3-title': 'ATOM переможець Daily Tournament!',
        'news-3-desc': 'Вітаємо переможця щоденного Day Tournament! Гравець що зарезервував...',
        'news-3-full-desc': 'Вітаємо переможця щоденного Daily Tournament! Гравець що зарезервував команду ATOM за 1 TON отримав приз 25 TON. тобто 25х від внеску. FIL , який зайняв 2 місце отримав 10 TON. тобто 10х від внеску.',
        'news-4-title': 'Призовий фонд збільшено!',
        'news-4-desc': 'Вже на зараз призовий фонд Weekend Tournament складає 60 TON...',
        'news-4-full-desc': 'Вже на зараз призовий фонд Weekend Tournament складає 60 TON! Нагадуємо що для участі в турнірі що проходить в неділю, необхідно взяти участь хоча б в одному Daily турнірі.',
        'news-5-title': 'Команда місяця',
        'news-5-desc': '10 денних турнірів липня позаду і вже сформувалась команда лідер...',
        'news-5-full-desc': '10 денних турнірів липня позаду і вже сформувалась команда лідер ARB з 10 балами, тричі посівши 1 місце і один раз 2 місце , його наздоганяє CAKE з 5 балами.',
        'team': 'КОМАНДА',
        'first-places': '1st',
        'second-places': '2nd',
        'pts': 'PTS',
        'days': 'ДНІ',
        'hours': 'ГОДИНИ',
        'minutes': 'ХВИЛИНИ',
        'seconds': 'СЕКУНДИ',
        'nft-collection': 'NFT Колекція',
        'nft-description': 'Скоро тут будуть доступні унікальні NFT пов\'язані з CryptoLiga!',
        'instruction-1-title': 'Реєстрація',
        'instruction-1-desc': 'Перейдіть на вкладку Фінанси і зареєструйтеся щоб мати змогу поповнити ігровий рахунок.',
        'instruction-2-title': 'TON Connect',
        'instruction-2-desc': 'Щоб зареєструватися натисніть кнопку "Register" і прив\'яжіть свій Ton гаманець використовуючи TON Connect',
        'instruction-3-title': 'Вибір команди',
        'instruction-3-desc': 'Оберіть одну з доступних криптокоманд для участі в турнірі, натисніть кнопку "Reserve".',
        'instruction-4-title': 'Щоденні турніри',
        'instruction-4-desc': 'Беріть участь у щоденних турнірах , дойдіть до фіналу зі своєю командою і отримуйте від 10х призових.',
        'instruction-5-title': 'Мега турніри',
        'instruction-5-desc': 'Щомісячні мега турніри з більшими призовими , пройдіть груповий турнір і отримуйте винагороду за кожен матч плей-офф, а команди фіналісти отримують мега призи!',
        'instruction-6-title': 'Онлайн',
        'instruction-6-desc': 'Слідкуйте за матчами в онлайн режимі використовуючи офіційний телеграм бот.',
        'instruction-7-title': 'Новини',
        'instruction-7-desc': 'Отримуйте найсвіжіші новини про турніри та команди, слідкуйте за акціями і оголошенями в офіційному телеграм каналі і на сайті.',
        'instruction-8-title': 'Реферальна програма',
        'instruction-8-desc': 'Отримуйте додатковий дохід від реферальної програми, запрошуйте друзів і отримуйте відсоток від їх внесків.',
        'game-title': 'Crypto Liga',
        'game-description': 'Crypto Liga - криптогра, симулятор спортивних змагань, з турнірним геймплеєм і змаганням криптокоманд і реальними криптовалютними нагородами.',
        'game-description-2': 'Перед початком турніру гравці можуть обрати одну з доступних криптокоманд і зарезервувати її з фіксованим внеском.',
        'contact-title': 'Зв\'яжіться з нами'
    },
    en: {
        'play': 'Play',
        'group': 'Group',
        'news': 'News',
        'daily': 'Daily Tournament',
        'mega': 'Mega Tournament',
        'fan': 'Fan Sector',
        'about': 'About Game',
        'contact': 'Contact',
        'crypto-liga-news': 'Crypto Liga News',
        'latest-news': 'Latest News',
        'news-1-title': '100x in 3 days!',
        'news-1-desc': 'Player who reserved FIL team in MEGA Tournament received 310 TON prize...',
        'news-1-full-desc': 'Player who reserved FIL team in MEGA Tournament received incredible 310 TON prize, reserved the team for 3 TON. ETH , which took 2nd place, received 77 TON, that is 26x from the contribution.',
        'news-2-title': 'About prizes',
        'news-2-desc': 'For reaching MEGA Tournament finals teams received 10 TON each...',
        'news-2-full-desc': 'For reaching MEGA Tournament finals teams received 10 TON each! The teams of the semi-finals received an additional 20 TON.',
        'news-3-title': 'ATOM wins Daily Tournament!',
        'news-3-desc': 'Congratulations to daily Day Tournament winner! Player who reserved...',
        'news-3-full-desc': 'Congratulations to daily Day Tournament winner! Player who reserved ATOM team for 1 TON received 25 TON prize, that is 25x from the contribution. FIL , which took 2nd place, received 10 TON, that is 10x from the contribution.',
        'news-4-title': 'Prize pool increased!',
        'news-4-desc': 'Weekend Tournament prize pool now consists of 60 TON...',
        'news-4-full-desc': 'Weekend Tournament prize pool now consists of 60 TON! We remind you that to participate in the tournament that takes place on Sunday, you must participate in at least one Daily tournament.',
        'news-5-title': 'Team of the month',
        'news-5-desc': '10 daily tournaments of July are behind and leader team has formed...',
        'news-5-full-desc': '10 daily tournaments of July are behind and leader team has formed ARB with 10 points, three times taking 1st place and once 2nd place, he is being chased by CAKE with 5 points.',
        'team': 'TEAM',
        'first-places': '1st',
        'second-places': '2nd',
        'pts': 'PTS',
        'days': 'DAYS',
        'hours': 'HOURS',
        'minutes': 'MINUTES',
        'seconds': 'SECONDS',
        'nft-collection': 'NFT Collection',
        'nft-description': 'Unique NFTs related to CryptoLiga will be available here soon!',
        'instruction-1-title': 'Registration',
        'instruction-1-desc': 'Go to the Finances tab and register to be able to top up your game account.',
        'instruction-2-title': 'Ton Connect',
        'instruction-2-desc': 'Click "Register" button and connect your Ton wallet using TON Connect.',
        'instruction-3-title': 'team selection',
        'instruction-3-desc': 'Choose one of the available crypto teams to participate in the tournament, click the "Reserve" button.',
        'instruction-4-title': 'Daily Tournaments',
        'instruction-4-desc': 'Participate in daily tournaments, reach the finals with your team and receive from 10x prizes.',
        'instruction-5-title': 'Mega Tournaments',
        'instruction-5-desc': 'Monthly mega tournaments with bigger prize pools, pass the group stage and receive a reward for each match of the playoffs, and the team of the finalists receives a mega prize!',
        'instruction-6-title': 'Online',
        'instruction-6-desc': 'Follow the matches in online mode using the official Telegram bot.',
        'instruction-7-title': 'News',
        'instruction-7-desc': 'Get the latest news about tournaments and teams, follow the announcements and news in the official Telegram channel and on the site.',
        'instruction-8-title': 'Referral Program',
        'instruction-8-desc': 'Receive additional income from the referral program, invite friends and receive a percentage of their deposits.',
        'game-title': 'Crypto Liga',
        'game-description': 'Crypto Liga - crypto game, sports competition simulator with tournament gameplay and crypto team competitions with real cryptocurrency rewards.',
        'game-description-2': 'Before tournament starts players can choose one of available crypto teams and reserve it with fixed contribution.',
        'contact-title': 'Contact Us'
    }
};

// Інструкції для слайдера
const instructions = [
    {
        image: 'instructions/1.png',
        titleKey: 'instruction-1-title',
        descKey: 'instruction-1-desc'
    },
    {
        image: 'instructions/about.jpg',
        titleKey: 'instruction-2-title',
        descKey: 'instruction-2-desc'
    }
];

// Глобальні змінні
let currentLang = 'uk';
let currentSlide = 0;
let dailyTimer, megaTimer;

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    generateCryptoTeamsGrid();
    generateTopScores();
    generateTournamentResults();
    setupInstructionsSlider();
    startTimers();
    setLanguage(currentLang);
}

function setupEventListeners() {
    // Перемикач мов
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            setLanguage(lang);
        });
    });

    // Меню-тоггл
    const menuToggle = document.getElementById('menuToggle');
    const navigation = document.getElementById('navigation');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    // Навігація по сторінках
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showPage(targetId);
            navigation.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Ініціалізація слайдера новин
    initNewsSlider();

    // Кнопки раундів
    document.querySelectorAll('.round-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.round-btn').forEach(el => el.classList.remove('active'));
            this.classList.add('active');
            const round = this.dataset.round;
            showRoundResults(round);
        });
    });

    // Кнопки груп
    document.querySelectorAll('.group-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.group-btn').forEach(el => el.classList.remove('active'));
            this.classList.add('active');
            const group = this.dataset.group;
            showGroupResults(group);
        });
    });

    // Слайдер
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));
}

function setLanguage(lang) {
    currentLang = lang;
    
    // Оновити активну кнопку мови
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Перекласти всі елементи
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function generateCryptoTeamsGrid() {
    const marquee = document.getElementById('teamsMarquee');
    if (!marquee) return;

    marquee.innerHTML = '';
    
    // Створюємо два набори лого для безшовного скролінгу
    const createTeamLogos = () => {
        return cryptoTeams.map(team => {
            const teamElement = document.createElement('img');
            teamElement.src = team.logo;
            teamElement.alt = team.name;
            teamElement.className = 'team-logo';
            teamElement.title = team.name;
            return teamElement;
        });
    };
    
    // Додаємо перший набір
    const firstSet = createTeamLogos();
    firstSet.forEach(logo => marquee.appendChild(logo));
    
    // Додаємо другий набір для безшовності
    const secondSet = createTeamLogos();
    secondSet.forEach(logo => marquee.appendChild(logo));
    
    // Додаємо третій набір для гарантованої безшовності
    const thirdSet = createTeamLogos();
    thirdSet.forEach(logo => marquee.appendChild(logo));
}

function generateTopScores() {
    const scoresContainer = document.getElementById('teamScores');
    if (!scoresContainer) return;

    // Повна таблиця з 32 командами
    const sampleData = [
        { team: 'TON', logo: 'logo/ton.png', first: 5, second: 1, pts: 16 },
        { team: 'BTC', logo: 'logo/btc.png', first: 5, second: 0, pts: 15 },
        { team: 'ETH', logo: 'logo/eth.png', first: 4, second: 2, pts: 14 },
        { team: '1INCH', logo: 'logo/1inch.png', first: 4, second: 1, pts: 13 },
        { team: 'ADA', logo: 'logo/ada.png', first: 4, second: 0, pts: 12 },
        { team: 'SOL', logo: 'logo/sol.png', first: 3, second: 2, pts: 11 },
        { team: 'BNB', logo: 'logo/bnb.png', first: 3, second: 1, pts: 10 },
        { team: 'DOGE', logo: 'logo/doge.png', first: 3, second: 0, pts: 9 },
        { team: 'AVAX', logo: 'logo/avax.png', first: 2, second: 2, pts: 8 },
        { team: 'DOT', logo: 'logo/dot.png', first: 2, second: 1, pts: 7 },
        { team: 'UNI', logo: 'logo/uni.png', first: 2, second: 0, pts: 6 },
        { team: 'ATOM', logo: 'logo/atom.png', first: 1, second: 2, pts: 5 },
        { team: 'XRP', logo: 'logo/xrp.png', first: 1, second: 1, pts: 4 },
        { team: 'LTC', logo: 'logo/ltc.png', first: 1, second: 0, pts: 3 },
        { team: 'OP', logo: 'logo/op.png', first: 0, second: 2, pts: 2 },
        { team: 'ARB', logo: 'logo/arb.png', first: 0, second: 1, pts: 1 },
        { team: 'SHIB', logo: 'logo/shib.png', first: 0, second: 0, pts: 0 },
        { team: 'TRX', logo: 'logo/trx.png', first: 0, second: 0, pts: 0 },
        { team: 'FIL', logo: 'logo/fil.png', first: 0, second: 0, pts: 0 },
        { team: 'ICP', logo: 'logo/icp.png', first: 0, second: 0, pts: 0 },
        { team: 'INJ', logo: 'logo/inj.png', first: 0, second: 0, pts: 0 },
        { team: 'JUP', logo: 'logo/jup.png', first: 0, second: 0, pts: 0 },
        { team: 'KAS', logo: 'logo/kas.png', first: 0, second: 0, pts: 0 },
        { team: 'KSM', logo: 'logo/ksm.png', first: 0, second: 0, pts: 0 },
        { team: 'MNT', logo: 'logo/mnt.png', first: 0, second: 0, pts: 0 },
        { team: 'NEAR', logo: 'logo/near.png', first: 0, second: 0, pts: 0 },
        { team: 'POL', logo: 'logo/pol.png', first: 0, second: 0, pts: 0 },
        { team: 'STRK', logo: 'logo/strk.png', first: 0, second: 0, pts: 0 },
        { team: 'APT', logo: 'logo/apt.png', first: 0, second: 0, pts: 0 },
        { team: 'CRV', logo: 'logo/crv.png', first: 0, second: 0, pts: 0 },
        { team: 'DAI', logo: 'logo/dai.png', first: 0, second: 0, pts: 0 },
        { team: 'CAKE', logo: 'logo/cake.png', first: 0, second: 0, pts: 0 }
    ];

    scoresContainer.innerHTML = '';
    sampleData.forEach((data, index) => {
        const row = document.createElement('div');
        row.className = 'team-row';
        row.innerHTML = `
            <div class="team-info">
                <span>${index + 1}</span>
                <img src="${data.logo}" alt="${data.team}">
                <span class="team-name">${data.team}</span>
            </div>
            <span>${data.first}</span>
            <span>${data.second}</span>
            <span class="pts">${data.pts}</span>
        `;
        scoresContainer.appendChild(row);
    });
}

function generateTournamentResults() {
    generateDrawResults();
    generateDailyResults();
    generateMegaResults();
}

function generateDrawResults() {
    const container = document.getElementById('drawMatches');
    if (!container) return;

    const matches = [
        { team1: 'TON', team2: 'CAKE', logo1: 'logo/ton.png', logo2: 'logo/cake.png' },
        { team1: 'BTC', team2: 'DAI', logo1: 'logo/btc.png', logo2: 'logo/dai.png' },
        { team1: 'ETH', team2: 'CRV', logo1: 'logo/eth.png', logo2: 'logo/crv.png' },
        { team1: '1INCH', team2: 'APT', logo1: 'logo/1inch.png', logo2: 'logo/apt.png' },
        { team1: 'ADA', team2: 'STRK', logo1: 'logo/ada.png', logo2: 'logo/strk.png' },
        { team1: 'SOL', team2: 'POL', logo1: 'logo/sol.png', logo2: 'logo/pol.png' },
        { team1: 'BNB', team2: 'NEAR', logo1: 'logo/bnb.png', logo2: 'logo/near.png' },
        { team1: 'DOGE', team2: 'MNT', logo1: 'logo/doge.png', logo2: 'logo/mnt.png' },
        { team1: 'AVAX', team2: 'KSM', logo1: 'logo/avax.png', logo2: 'logo/ksm.png' },
        { team1: 'DOT', team2: 'KAS', logo1: 'logo/dot.png', logo2: 'logo/kas.png' },
        { team1: 'UNI', team2: 'JUP', logo1: 'logo/uni.png', logo2: 'logo/jup.png' },
        { team1: 'ATOM', team2: 'INJ', logo1: 'logo/atom.png', logo2: 'logo/inj.png' },
        { team1: 'XRP', team2: 'ICP', logo1: 'logo/xrp.png', logo2: 'logo/icp.png' },
        { team1: 'LTC', team2: 'FIL', logo1: 'logo/ltc.png', logo2: 'logo/fil.png' },
        { team1: 'OP', team2: 'TRX', logo1: 'logo/op.png', logo2: 'logo/trx.png' },
        { team1: 'ARB', team2: 'SHIB', logo1: 'logo/arb.png', logo2: 'logo/shib.png' }
    ];

    container.innerHTML = '';
    matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.innerHTML = `
            <div class="match-teams">
                <div class="team">
                    <img src="${match.logo1}" alt="${match.team1}">
                    <span>${match.team1}</span>
                </div>
                <span class="vs">VS</span>
                <div class="team">
                    <img src="${match.logo2}" alt="${match.team2}">
                    <span>${match.team2}</span>
                </div>
            </div>
        `;
        container.appendChild(matchCard);
    });
}

function generateDailyResults() {
    showRoundResults('1/16');
}

function showRoundResults(round) {
    const container = document.getElementById('dailyResults');
    if (!container) return;

    const results = {
        '1/16': [
            { team1: 'TON', team2: 'CAKE', score1: 4, score2: 1, logo1: 'logo/ton.png', logo2: 'logo/cake.png' },
            { team1: 'BTC', team2: 'DAI', score1: 3, score2: 0, logo1: 'logo/btc.png', logo2: 'logo/dai.png' },
            { team1: 'ETH', team2: 'CRV', score1: 2, score2: 1, logo1: 'logo/eth.png', logo2: 'logo/crv.png' },
            { team1: '1INCH', team2: 'APT', score1: 1, score2: 2, logo1: 'logo/1inch.png', logo2: 'logo/apt.png' },
            { team1: 'ADA', team2: 'STRK', score1: 3, score2: 1, logo1: 'logo/ada.png', logo2: 'logo/strk.png' },
            { team1: 'SOL', team2: 'POL', score1: 2, score2: 0, logo1: 'logo/sol.png', logo2: 'logo/pol.png' },
            { team1: 'BNB', team2: 'NEAR', score1: 1, score2: 3, logo1: 'logo/bnb.png', logo2: 'logo/near.png' },
            { team1: 'DOGE', team2: 'MNT', score1: 2, score2: 1, logo1: 'logo/doge.png', logo2: 'logo/mnt.png' },
            { team1: 'AVAX', team2: 'KSM', score1: 0, score2: 1, logo1: 'logo/avax.png', logo2: 'logo/ksm.png' },
            { team1: 'DOT', team2: 'KAS', score1: 4, score2: 0, logo1: 'logo/dot.png', logo2: 'logo/kas.png' },
            { team1: 'UNI', team2: 'JUP', score1: 3, score2: 2, logo1: 'logo/uni.png', logo2: 'logo/jup.png' },
            { team1: 'ATOM', team2: 'INJ', score1: 1, score2: 2, logo1: 'logo/atom.png', logo2: 'logo/inj.png' },
            { team1: 'XRP', team2: 'ICP', score1: 2, score2: 1, logo1: 'logo/xrp.png', logo2: 'logo/icp.png' },
            { team1: 'LTC', team2: 'FIL', score1: 1, score2: 0, logo1: 'logo/ltc.png', logo2: 'logo/fil.png' },
            { team1: 'OP', team2: 'TRX', score1: 0, score2: 3, logo1: 'logo/op.png', logo2: 'logo/trx.png' },
            { team1: 'ARB', team2: 'SHIB', score1: 1, score2: 4, logo1: 'logo/arb.png', logo2: 'logo/shib.png' }
        ],
        '1/8': [
            { team1: 'TON', team2: 'BTC', score1: 2, score2: 1, logo1: 'logo/ton.png', logo2: 'logo/btc.png' },
            { team1: 'ETH', team2: 'APT', score1: 3, score2: 0, logo1: 'logo/eth.png', logo2: 'logo/apt.png' },
            { team1: 'ADA', team2: 'SOL', score1: 1, score2: 2, logo1: 'logo/ada.png', logo2: 'logo/sol.png' },
            { team1: 'NEAR', team2: 'DOGE', score1: 0, score2: 1, logo1: 'logo/near.png', logo2: 'logo/doge.png' },
            { team1: 'KSM', team2: 'DOT', score1: 1, score2: 3, logo1: 'logo/ksm.png', logo2: 'logo/dot.png' },
            { team1: 'UNI', team2: 'INJ', score1: 2, score2: 1, logo1: 'logo/uni.png', logo2: 'logo/inj.png' },
            { team1: 'XRP', team2: 'LTC', score1: 1, score2: 0, logo1: 'logo/xrp.png', logo2: 'logo/ltc.png' },
            { team1: 'TRX', team2: 'SHIB', score1: 0, score2: 2, logo1: 'logo/trx.png', logo2: 'logo/shib.png' }
        ],
        '1/4': [
            { team1: 'TON', team2: 'ETH', score1: 3, score2: 1, logo1: 'logo/ton.png', logo2: 'logo/eth.png' },
            { team1: 'SOL', team2: 'DOGE', score1: 2, score2: 0, logo1: 'logo/sol.png', logo2: 'logo/doge.png' },
            { team1: 'DOT', team2: 'UNI', score1: 1, score2: 2, logo1: 'logo/dot.png', logo2: 'logo/uni.png' },
            { team1: 'XRP', team2: 'SHIB', score1: 0, score2: 1, logo1: 'logo/xrp.png', logo2: 'logo/shib.png' }
        ],
        '1/2': [
            { team1: 'TON', team2: 'SOL', score1: 2, score2: 1, logo1: 'logo/ton.png', logo2: 'logo/sol.png' },
            { team1: 'UNI', team2: 'SHIB', score1: 1, score2: 3, logo1: 'logo/uni.png', logo2: 'logo/shib.png' }
        ],
        'final': [
            { team1: 'TON', team2: 'SHIB', score1: 4, score2: 1, logo1: 'logo/ton.png', logo2: 'logo/shib.png' }
        ]
    };

    container.innerHTML = '';
    if (results[round]) {
        results[round].forEach(match => {
            const matchCard = document.createElement('div');
            matchCard.className = 'match-card';
            matchCard.innerHTML = `
                <div class="match-teams">
                    <div class="team">
                        <img src="${match.logo1}" alt="${match.team1}">
                        <span>${match.team1}</span>
                    </div>
                    <span class="vs">VS</span>
                    <div class="team">
                        <img src="${match.logo2}" alt="${match.team2}">
                        <span>${match.team2}</span>
                    </div>
                </div>
                <div class="match-score">${match.score1} : ${match.score2}</div>
            `;
            container.appendChild(matchCard);
        });
    }
}

function generateMegaResults() {
    showGroupResults('A');
}

function showGroupResults(group) {
    const container = document.getElementById('megaResults');
    if (!container) return;

    const groupResults = {
        'A': `
            <div class="group-table">
                <div class="table-header">
                    <span>TEAM</span>
                    <span>P</span>
                    <span>W</span>
                    <span>D</span>
                    <span>L</span>
                    <span>PTS</span>
                </div>
                <div class="team-row qualified">
                    <div class="team-info">
                        <span>1</span>
                        <img src="logo/ton.png" alt="TON">
                        <span class="team-name">TON</span>
                    </div>
                    <span>7</span>
                    <span>6</span>
                    <span>1</span>
                    <span>0</span>
                    <span class="pts">19</span>
                </div>
                <div class="team-row qualified">
                    <div class="team-info">
                        <span>2</span>
                        <img src="logo/btc.png" alt="BTC">
                        <span class="team-name">BTC</span>
                    </div>
                    <span>7</span>
                    <span>5</span>
                    <span>2</span>
                    <span>0</span>
                    <span class="pts">17</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>3</span>
                        <img src="logo/eth.png" alt="ETH">
                        <span class="team-name">ETH</span>
                    </div>
                    <span>7</span>
                    <span>4</span>
                    <span>2</span>
                    <span>1</span>
                    <span class="pts">14</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>4</span>
                        <img src="logo/ada.png" alt="ADA">
                        <span class="team-name">ADA</span>
                    </div>
                    <span>7</span>
                    <span>3</span>
                    <span>2</span>
                    <span>2</span>
                    <span class="pts">11</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>5</span>
                        <img src="logo/sol.png" alt="SOL">
                        <span class="team-name">SOL</span>
                    </div>
                    <span>7</span>
                    <span>3</span>
                    <span>1</span>
                    <span>3</span>
                    <span class="pts">10</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>6</span>
                        <img src="logo/doge.png" alt="DOGE">
                        <span class="team-name">DOGE</span>
                    </div>
                    <span>7</span>
                    <span>2</span>
                    <span>1</span>
                    <span>4</span>
                    <span class="pts">7</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>7</span>
                        <img src="logo/avax.png" alt="AVAX">
                        <span class="team-name">AVAX</span>
                    </div>
                    <span>7</span>
                    <span>1</span>
                    <span>2</span>
                    <span>4</span>
                    <span class="pts">5</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>8</span>
                        <img src="logo/op.png" alt="OP">
                        <span class="team-name">OP</span>
                    </div>
                    <span>7</span>
                    <span>0</span>
                    <span>1</span>
                    <span>6</span>
                    <span class="pts">1</span>
                </div>
            </div>
            <div class="group-matches">
                <h4>Matches A:</h4>
                <div class="matches-grid">
                    <div class="match-result">TON 2-1 BTC</div>
                    <div class="match-result">ETH 1-1 ADA</div>
                    <div class="match-result">SOL 2-0 DOGE</div>
                    <div class="match-result">AVAX 0-3 OP</div>
                    <div class="match-result">TON 3-0 ETH</div>
                    <div class="match-result">BTC 2-1 ADA</div>
                    <div class="match-result">SOL 1-2 AVAX</div>
                    <div class="match-result">DOGE 1-0 OP</div>
                    <div class="match-result">TON 2-2 ADA</div>
                    <div class="match-result">BTC 1-1 ETH</div>
                    <div class="match-result">SOL 0-1 OP</div>
                    <div class="match-result">DOGE 2-1 AVAX</div>
                    <div class="match-result">TON 1-0 SOL</div>
                    <div class="match-result">BTC 3-1 DOGE</div>
                    <div class="match-result">ETH 2-0 AVAX</div>
                    <div class="match-result">ADA 1-0 OP</div>
                    <div class="match-result">TON 2-1 DOGE</div>
                    <div class="match-result">BTC 1-1 SOL</div>
                    <div class="match-result">ETH 3-2 OP</div>
                    <div class="match-result">ADA 0-1 AVAX</div>
                    <div class="match-result">TON 1-0 AVAX</div>
                    <div class="match-result">BTC 2-0 OP</div>
                    <div class="match-result">ETH 1-2 SOL</div>
                    <div class="match-result">ADA 2-1 DOGE</div>
                    <div class="match-result">TON 0-0 OP</div>
                    <div class="match-result">BTC 1-0 AVAX</div>
                    <div class="match-result">ETH 1-1 DOGE</div>
                    <div class="match-result">ADA 0-2 SOL</div>
                </div>
            </div>
        `,
        'B': `
            <div class="group-table">
                <div class="table-header">
                    <span>TEAM</span>
                    <span>P</span>
                    <span>W</span>
                    <span>D</span>
                    <span>L</span>
                    <span>PTS</span>
                </div>
                <div class="team-row qualified">
                    <div class="team-info">
                        <span>1</span>
                        <img src="logo/bnb.png" alt="BNB">
                        <span class="team-name">BNB</span>
                    </div>
                    <span>7</span>
                    <span>5</span>
                    <span>2</span>
                    <span>0</span>
                    <span class="pts">17</span>
                </div>
                <div class="team-row qualified">
                    <div class="team-info">
                        <span>2</span>
                        <img src="logo/dot.png" alt="DOT">
                        <span class="team-name">DOT</span>
                    </div>
                    <span>7</span>
                    <span>5</span>
                    <span>1</span>
                    <span>1</span>
                    <span class="pts">16</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>3</span>
                        <img src="logo/uni.png" alt="UNI">
                        <span class="team-name">UNI</span>
                    </div>
                    <span>7</span>
                    <span>4</span>
                    <span>1</span>
                    <span>2</span>
                    <span class="pts">13</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>4</span>
                        <img src="logo/atom.png" alt="ATOM">
                        <span class="team-name">ATOM</span>
                    </div>
                    <span>7</span>
                    <span>3</span>
                    <span>2</span>
                    <span>2</span>
                    <span class="pts">11</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>5</span>
                        <img src="logo/xrp.png" alt="XRP">
                        <span class="team-name">XRP</span>
                    </div>
                    <span>7</span>
                    <span>2</span>
                    <span>2</span>
                    <span>3</span>
                    <span class="pts">8</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>6</span>
                        <img src="logo/ltc.png" alt="LTC">
                        <span class="team-name">LTC</span>
                    </div>
                    <span>7</span>
                    <span>2</span>
                    <span>1</span>
                    <span>4</span>
                    <span class="pts">7</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>7</span>
                        <img src="logo/arb.png" alt="ARB">
                        <span class="team-name">ARB</span>
                    </div>
                    <span>7</span>
                    <span>1</span>
                    <span>2</span>
                    <span>4</span>
                    <span class="pts">5</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>8</span>
                        <img src="logo/trx.png" alt="TRX">
                        <span class="team-name">TRX</span>
                    </div>
                    <span>7</span>
                    <span>0</span>
                    <span>3</span>
                    <span>4</span>
                    <span class="pts">3</span>
                </div>
            </div>
            <div class="group-matches">
                <h4>Matches B:</h4>
                <div class="matches-grid">
                    <div class="match-result">BNB 2-0 DOT</div>
                    <div class="match-result">UNI 1-1 ATOM</div>
                    <div class="match-result">XRP 3-1 LTC</div>
                    <div class="match-result">ARB 0-0 TRX</div>
                    <div class="match-result">BNB 1-0 UNI</div>
                    <div class="match-result">DOT 2-1 ATOM</div>
                    <div class="match-result">XRP 0-2 ARB</div>
                    <div class="match-result">LTC 1-1 TRX</div>
                    <div class="match-result">BNB 1-1 ATOM</div>
                    <div class="match-result">DOT 3-0 UNI</div>
                    <div class="match-result">XRP 2-2 TRX</div>
                    <div class="match-result">LTC 0-1 ARB</div>
                    <div class="match-result">BNB 2-1 XRP</div>
                    <div class="match-result">DOT 1-0 LTC</div>
                    <div class="match-result">UNI 3-1 ARB</div>
                    <div class="match-result">ATOM 2-0 TRX</div>
                    <div class="match-result">BNB 1-0 LTC</div>
                    <div class="match-result">DOT 2-1 XRP</div>
                    <div class="match-result">UNI 0-1 TRX</div>
                    <div class="match-result">ATOM 1-2 ARB</div>
                    <div class="match-result">BNB 0-0 ARB</div>
                    <div class="match-result">DOT 1-0 TRX</div>
                    <div class="match-result">UNI 2-1 XRP</div>
                    <div class="match-result">ATOM 0-1 LTC</div>
                    <div class="match-result">BNB 1-1 TRX</div>
                    <div class="match-result">DOT 0-1 ARB</div>
                    <div class="match-result">UNI 2-0 LTC</div>
                    <div class="match-result">ATOM 1-1 XRP</div>
                </div>
            </div>
        `,
        'C': `
            <div class="group-table">
                <div class="table-header">
                    <span>TEAM</span>
                    <span>P</span>
                    <span>W</span>
                    <span>D</span>
                    <span>L</span>
                    <span>PTS</span>
                </div>
                <div class="team-row qualified">
                    <div class="team-info">
                        <span>1</span>
                        <img src="logo/1inch.png" alt="1INCH">
                        <span class="team-name">1INCH</span>
                    </div>
                    <span>7</span>
                    <span>6</span>
                    <span>0</span>
                    <span>1</span>
                    <span class="pts">18</span>
                </div>
                <div class="team-row qualified">
                    <div class="team-info">
                        <span>2</span>
                        <img src="logo/shib.png" alt="SHIB">
                        <span class="team-name">SHIB</span>
                    </div>
                    <span>7</span>
                    <span>4</span>
                    <span>2</span>
                    <span>1</span>
                    <span class="pts">14</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>3</span>
                        <img src="logo/fil.png" alt="FIL">
                        <span class="team-name">FIL</span>
                    </div>
                    <span>7</span>
                    <span>4</span>
                    <span>1</span>
                    <span>2</span>
                    <span class="pts">13</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>4</span>
                        <img src="logo/icp.png" alt="ICP">
                        <span class="team-name">ICP</span>
                    </div>
                    <span>7</span>
                    <span>3</span>
                    <span>1</span>
                    <span>3</span>
                    <span class="pts">10</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>5</span>
                        <img src="logo/inj.png" alt="INJ">
                        <span class="team-name">INJ</span>
                    </div>
                    <span>7</span>
                    <span>2</span>
                    <span>3</span>
                    <span>2</span>
                    <span class="pts">9</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>6</span>
                        <img src="logo/jup.png" alt="JUP">
                        <span class="team-name">JUP</span>
                    </div>
                    <span>7</span>
                    <span>2</span>
                    <span>2</span>
                    <span>3</span>
                    <span class="pts">8</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>7</span>
                        <img src="logo/kas.png" alt="KAS">
                        <span class="team-name">KAS</span>
                    </div>
                    <span>7</span>
                    <span>1</span>
                    <span>1</span>
                    <span>5</span>
                    <span class="pts">4</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>8</span>
                        <img src="logo/ksm.png" alt="KSM">
                        <span class="team-name">KSM</span>
                    </div>
                    <span>7</span>
                    <span>0</span>
                    <span>2</span>
                    <span>5</span>
                    <span class="pts">2</span>
                </div>
            </div>
            <div class="group-matches">
                <h4>Matches C:</h4>
                <div class="matches-grid">
                    <div class="match-result">1INCH 3-1 SHIB</div>
                    <div class="match-result">FIL 2-0 ICP</div>
                    <div class="match-result">INJ 1-1 JUP</div>
                    <div class="match-result">KAS 0-2 KSM</div>
                    <div class="match-result">1INCH 2-0 FIL</div>
                    <div class="match-result">SHIB 1-1 ICP</div>
                    <div class="match-result">INJ 0-1 KAS</div>
                    <div class="match-result">JUP 3-0 KSM</div>
                    <div class="match-result">1INCH 1-0 ICP</div>
                    <div class="match-result">SHIB 2-1 FIL</div>
                    <div class="match-result">INJ 2-2 KSM</div>
                    <div class="match-result">JUP 1-2 KAS</div>
                    <div class="match-result">1INCH 4-1 INJ</div>
                    <div class="match-result">SHIB 0-2 JUP</div>
                    <div class="match-result">FIL 3-0 KAS</div>
                    <div class="match-result">ICP 1-0 KSM</div>
                    <div class="match-result">1INCH 2-1 JUP</div>
                    <div class="match-result">SHIB 1-0 KAS</div>
                    <div class="match-result">FIL 1-2 INJ</div>
                    <div class="match-result">ICP 2-1 KSM</div>
                    <div class="match-result">1INCH 0-1 KAS</div>
                    <div class="match-result">SHIB 3-1 KSM</div>
                    <div class="match-result">FIL 0-0 JUP</div>
                    <div class="match-result">ICP 1-1 INJ</div>
                    <div class="match-result">1INCH 1-0 KSM</div>
                    <div class="match-result">SHIB 2-2 INJ</div>
                    <div class="match-result">FIL 2-1 ICP</div>
                    <div class="match-result">JUP 1-1 KAS</div>
                </div>
            </div>
        `,
        'D': `
            <div class="group-table">
                <div class="table-header">
                    <span>TEAM</span>
                    <span>P</span>
                    <span>W</span>
                    <span>D</span>
                    <span>L</span>
                    <span>PTS</span>
                </div>
                <div class="team-row qualified">
                    <div class="team-info">
                        <span>1</span>
                        <img src="logo/near.png" alt="NEAR">
                        <span class="team-name">NEAR</span>
                    </div>
                    <span>7</span>
                    <span>5</span>
                    <span>1</span>
                    <span>1</span>
                    <span class="pts">16</span>
                </div>
                <div class="team-row qualified">
                    <div class="team-info">
                        <span>2</span>
                        <img src="logo/pol.png" alt="POL">
                        <span class="team-name">POL</span>
                    </div>
                    <span>7</span>
                    <span>4</span>
                    <span>3</span>
                    <span>0</span>
                    <span class="pts">15</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>3</span>
                        <img src="logo/mnt.png" alt="MNT">
                        <span class="team-name">MNT</span>
                    </div>
                    <span>7</span>
                    <span>3</span>
                    <span>2</span>
                    <span>2</span>
                    <span class="pts">11</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>7</span>
                        <img src="logo/crv.png" alt="CRV">
                        <span class="team-name">CRV</span>
                    </div>
                    <span>7</span>
                    <span>3</span>
                    <span>1</span>
                    <span>3</span>
                    <span class="pts">10</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>5</span>
                        <img src="logo/cake.png" alt="CAKE">
                        <span class="team-name">CAKE</span>
                    </div>
                    <span>7</span>
                    <span>2</span>
                    <span>3</span>
                    <span>2</span>
                    <span class="pts">9</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>6</span>
                        <img src="logo/apt.png" alt="APT">
                        <span class="team-name">APT</span>
                    </div>
                    <span>7</span>
                    <span>1</span>
                    <span>3</span>
                    <span>3</span>
                    <span class="pts">6</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>7</span>
                        <img src="logo/strk.png" alt="STRK">
                        <span class="team-name">STRK</span>
                    </div>
                    <span>7</span>
                    <span>1</span>
                    <span>2</span>
                    <span>4</span>
                    <span class="pts">5</span>
                </div>
                <div class="team-row">
                    <div class="team-info">
                        <span>8</span>
                        <img src="logo/dai.png" alt="DAI">
                        <span class="team-name">DAI</span>
                    </div>
                    <span>7</span>
                    <span>1</span>
                    <span>1</span>
                    <span>5</span>
                    <span class="pts">4</span>
                </div>
            </div>
            <div class="group-matches">
                <h4>Matches D:</h4>
                <div class="matches-grid">
                    <div class="match-result">NEAR 2-1 POL</div>
                    <div class="match-result">MNT 0-0 CRV</div>
                    <div class="match-result">CAKE 1-1 APT</div>
                    <div class="match-result">STRK 2-0 DAI</div>
                    <div class="match-result">NEAR 1-0 MNT</div>
                    <div class="match-result">POL 2-2 CRV</div>
                    <div class="match-result">CAKE 0-1 STRK</div>
                    <div class="match-result">APT 1-1 DAI</div>
                    <div class="match-result">NEAR 3-1 CRV</div>
                    <div class="match-result">POL 1-1 MNT</div>
                    <div class="match-result">CAKE 2-0 DAI</div>
                    <div class="match-result">APT 0-0 STRK</div>
                    <div class="match-result">NEAR 0-1 CAKE</div>
                    <div class="match-result">POL 3-0 APT</div>
                    <div class="match-result">MNT 2-1 STRK</div>
                    <div class="match-result">CRV 1-0 DAI</div>
                    <div class="match-result">NEAR 1-2 APT</div>
                    <div class="match-result">POL 0-0 STRK</div>
                    <div class="match-result">MNT 1-1 CAKE</div>
                    <div class="match-result">CRV 2-1 STRK</div>
                    <div class="match-result">NEAR 2-0 STRK</div>
                    <div class="match-result">POL 1-0 CAKE</div>
                    <div class="match-result">MNT 3-2 APT</div>
                    <div class="match-result">CRV 0-1 CAKE</div>
                    <div class="match-result">NEAR 1-1 DAI</div>
                    <div class="match-result">POL 2-1 DAI</div>
                    <div class="match-result">MNT 0-2 CRV</div>
                    <div class="match-result">APT 1-1 CAKE</div>
                </div>
            </div>
        `,
        'playoffs': `
            <div class="playoff-bracket">
                <h4>1/4:</h4>
                <div class="playoff-round">
                    <div class="match-card">
                        <div class="match-teams">
                            <div class="team">
                                <img src="logo/ton.png" alt="TON">
                                <span>TON</span>
                            </div>
                            <span class="vs">VS</span>
                            <div class="team">
                                <img src="logo/pol.png" alt="POL">
                                <span>POL</span>
                            </div>
                        </div>
                        <div class="match-score">3 : 1</div>
                    </div>
                    <div class="match-card">
                        <div class="match-teams">
                            <div class="team">
                                <img src="logo/btc.png" alt="BTC">
                                <span>BTC</span>
                            </div>
                            <span class="vs">VS</span>
                            <div class="team">
                                <img src="logo/near.png" alt="NEAR">
                                <span>NEAR</span>
                            </div>
                        </div>
                        <div class="match-score">2 : 1</div>
                    </div>
                    <div class="match-card">
                        <div class="match-teams">
                            <div class="team">
                                <img src="logo/bnb.png" alt="BNB">
                                <span>BNB</span>
                            </div>
                            <span class="vs">VS</span>
                            <div class="team">
                                <img src="logo/shib.png" alt="SHIB">
                                <span>SHIB</span>
                            </div>
                        </div>
                        <div class="match-score">0 : 2</div>
                    </div>
                    <div class="match-card">
                        <div class="match-teams">
                            <div class="team">
                                <img src="logo/dot.png" alt="DOT">
                                <span>DOT</span>
                            </div>
                            <span class="vs">VS</span>
                            <div class="team">
                                <img src="logo/1inch.png" alt="1INCH">
                                <span>1INCH</span>
                            </div>
                        </div>
                        <div class="match-score">1 : 3</div>
                    </div>
                </div>
                
                <h4>1/2:</h4>
                <div class="playoff-round">
                    <div class="match-card">
                        <div class="match-teams">
                            <div class="team">
                                <img src="logo/ton.png" alt="TON">
                                <span>TON</span>
                            </div>
                            <span class="vs">VS</span>
                            <div class="team">
                                <img src="logo/btc.png" alt="BTC">
                                <span>BTC</span>
                            </div>
                        </div>
                        <div class="match-score">1 : 2</div>
                    </div>
                    <div class="match-card">
                        <div class="match-teams">
                            <div class="team">
                                <img src="logo/shib.png" alt="SHIB">
                                <span>SHIB</span>
                            </div>
                            <span class="vs">VS</span>
                            <div class="team">
                                <img src="logo/1inch.png" alt="1INCH">
                                <span>1INCH</span>
                            </div>
                        </div>
                        <div class="match-score">2 : 0</div>
                    </div>
                </div>
                
                <h4>Фінал:</h4>
                <div class="playoff-round final">
                    <div class="match-card winner">
                        <div class="match-teams">
                            <div class="team">
                                <img src="logo/btc.png" alt="BTC">
                                <span>BTC</span>
                            </div>
                            <span class="vs">VS</span>
                            <div class="team">
                                <img src="logo/shib.png" alt="SHIB">
                                <span>SHIB</span>
                            </div>
                        </div>
                        <div class="match-score">3 : 1</div>
                        <div class="winner-badge">🏆 BTC Winner of Mega Tournament!</div>
                    </div>
                </div>
            </div>
        `
    };

    container.innerHTML = groupResults[group] || groupResults['A'];
}

function setupInstructionsSlider() {
    const dotsContainer = document.querySelector('.slider-dots');
    const slides = document.querySelectorAll('.slide');
    
    if (!dotsContainer) return;

    // Встановити background-image для кожного слайда
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img) {
            slide.style.backgroundImage = `url(${img.src})`;
        }
    });

    // Створити точки для слайдера
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.className = i === 0 ? 'dot active' : 'dot';
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function startTimers() {
    startDailyTimer();
    startMegaTimer();
}

function startDailyTimer() {
    function updateDailyTimer() {
        const now = new Date();
        const today18 = new Date(now);
        today18.setHours(18, 0, 0, 0);
        
        let target = today18;
        if (now > today18) {
            target = new Date(today18);
            target.setDate(target.getDate() + 1);
        }
        
        const diff = target - now;
        
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            updateTimerDisplay('daily', days, hours, minutes, seconds);
        }
    }
    
    updateDailyTimer();
    dailyTimer = setInterval(updateDailyTimer, 1000);
}

function startMegaTimer() {
    function updateMegaTimer() {
        const now = new Date();
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        endOfMonth.setHours(18, 0, 0, 0);
        
        const diff = endOfMonth - now;
        
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            updateTimerDisplay('mega', days, hours, minutes, seconds);
        }
    }
    
    updateMegaTimer();
    megaTimer = setInterval(updateMegaTimer, 1000);
}

function updateTimerDisplay(type, days, hours, minutes, seconds) {
    const pad = (num) => num.toString().padStart(2, '0');
    
    const daysEl = document.getElementById(`${type}Days`);
    const hoursEl = document.getElementById(`${type}Hours`);
    const minutesEl = document.getElementById(`${type}Minutes`);
    const secondsEl = document.getElementById(`${type}Seconds`);
    
    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minutesEl) minutesEl.textContent = pad(minutes);
    if (secondsEl) secondsEl.textContent = pad(seconds);
}

// Додати плавний скролінг для горизонтальних контейнерів
document.addEventListener('DOMContentLoaded', function() {
    const scrollContainers = document.querySelectorAll('.matches-scroll');
    
    scrollContainers.forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.classList.add('active');
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
        
        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.classList.remove('active');
        });
        
        container.addEventListener('mouseup', () => {
            isDown = false;
            container.classList.remove('active');
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
    });
});

// Додати ефекти при скролінгу
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.glass-effect');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
});

// Слайдер новин
let newsSlider = {
    currentSlide: 0,
    totalSlides: 0,
    autoplayInterval: null,
    isAutoplay: true,
    touchStartX: 0,
    touchEndX: 0
};

function initNewsSlider() {
    const slider = document.getElementById('newsSlider');
    const slides = document.querySelectorAll('.news-slide');
    const dots = document.querySelectorAll('.news-dot');
    const prevBtn = document.querySelector('.news-prev');
    const nextBtn = document.querySelector('.news-next');
    
    if (!slider) return;
    
    newsSlider.totalSlides = slides.length;
    
    // Навігаційні кнопки
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            pauseAutoplay();
            previousSlide();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            pauseAutoplay();
            nextSlide();
        });
    }
    
    // Пагінація (точки)
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            pauseAutoplay();
            goToSlide(index);
        });
    });
    
    // Свайп функціональність
    slider.addEventListener('touchstart', handleTouchStart, false);
    slider.addEventListener('touchmove', handleTouchMove, false);
    slider.addEventListener('touchend', handleTouchEnd, false);
    
    // Паузити автопрогравання при ховері
    slider.addEventListener('mouseenter', pauseAutoplay);
    slider.addEventListener('mouseleave', resumeAutoplay);
    
    // Запустити автопрогравання
    startAutoplay();
    
    // Паузити автопрогравання при зміні активності сторінки
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pauseAutoplay();
        } else {
            resumeAutoplay();
        }
    });
}

function nextSlide() {
    newsSlider.currentSlide = (newsSlider.currentSlide + 1) % newsSlider.totalSlides;
    updateSlider();
}

function previousSlide() {
    newsSlider.currentSlide = newsSlider.currentSlide === 0 ? 
        newsSlider.totalSlides - 1 : newsSlider.currentSlide - 1;
    updateSlider();
}

function goToSlide(slideIndex) {
    newsSlider.currentSlide = slideIndex;
    updateSlider();
}

function updateSlider() {
    const slider = document.getElementById('newsSlider');
    const slides = document.querySelectorAll('.news-slide');
    const dots = document.querySelectorAll('.news-dot');
    
    if (!slider) return;
    
    // Оновити позицію слайдера
    slider.style.transform = `translateX(-${newsSlider.currentSlide * 100}%)`;
    
    // Оновити активні класи слайдів
    slides.forEach((slide, index) => {
        if (index === newsSlider.currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    // Оновити активну точку
    dots.forEach((dot, index) => {
        if (index === newsSlider.currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function startAutoplay() {
    if (newsSlider.autoplayInterval) return;
    
    newsSlider.autoplayInterval = setInterval(() => {
        if (newsSlider.isAutoplay) {
            nextSlide();
        }
    }, 5000); // Змінити слайд кожні 5 секунд
}

function pauseAutoplay() {
    newsSlider.isAutoplay = false;
    if (newsSlider.autoplayInterval) {
        clearInterval(newsSlider.autoplayInterval);
        newsSlider.autoplayInterval = null;
    }
}

function resumeAutoplay() {
    newsSlider.isAutoplay = true;
    startAutoplay();
}

// Функції для свайпу
function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    newsSlider.touchStartX = firstTouch.clientX;
}

function handleTouchMove(evt) {
    // Запобігти скролінгу сторінки під час свайпу
    if (Math.abs(evt.touches[0].clientX - newsSlider.touchStartX) > 10) {
        evt.preventDefault();
    }
}

function handleTouchEnd(evt) {
    newsSlider.touchEndX = evt.changedTouches[0].clientX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50; // Мінімальна відстань для розпізнавання свайпу
    const swipeDistance = newsSlider.touchEndX - newsSlider.touchStartX;
    
    if (Math.abs(swipeDistance) < swipeThreshold) return;
    
    pauseAutoplay();
    
    if (swipeDistance > 0) {
        // Свайп вправо - попередній слайд
        previousSlide();
    } else {
        // Свайп вліво - наступний слайд
        nextSlide();
    }
    
    // Відновити автопрогравання через 3 секунди після свайпу
    setTimeout(() => {
        resumeAutoplay();
    }, 3000);
}