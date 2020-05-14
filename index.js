// basic login function from stackoverflow.com
// function login() {
//     var user = document.getElementById("username").value;
//     var pass = document.getElementById("password").value;
//     if(user == "lab18" && pass == "lab18") {
//         alert("Logged In");
//         locate="new11.html"
//         return false;
//     } else {
//         alert("wrong user/pass");
//         return false;
//         }
//     }

let users = [
    {
        username: 'jjvansly',
        passwd: '2Bornot2b'
    },
    {
        username: 'borntoread',
        passwd: 'Readingisfun'
    }
];
let buttonNames = [
    'Login',
    'Navigators Calling',
    'Navigators Values',
    'Navigators Vision',
    'Why a new reading plan?',
    'Why read the entire bible?',
    'Read the bible',
    'About Kitsap Navigators'
];
let content = [
    `Currently under construction.`,
    `To know Christ, make him known, and help others to do the same.`,
    `The passion to know, love and become like Jesus Christ. Phil. 3:10, Matt. 10:24,25 <br>
    The truth and sufficiency of the Scriptures for the whole of life. II Tim 3:16,17, II Pet. 1:3,4 <br>
    The transforming power of the Gospel. Rom. 1:16 <br>
    The leading and empowering of the Holy Spirit. Acts 1:8, II Cor. 3:18 <br>
    Expectant faith and persevering prayer rooted in the promises of God. Rom 4:19,20, Heb. 11:6 <br>
    The dignity and value of every person. Is. 51:1,2; 60:22 <br>
    Love and grace expressed among us in community. John 13:34,35,Col. 3:12-17 <br>
    Families and relational networks in discipling the nations. I Thess. 1 <br>
    Interdependent relationships in the Body of Christ in advancing the Gospel. Phil 1:3-14 <br>`,
    `We see a vital movement of the Gospel, fueled by prevailing prayer, flowing freely through relational networks and
    out into the nations. Workers for the Kingdom are next door to everywhere!  What characterizes this movement? A heart for the whole person ... climates of grace ... compassion for the vulnerable and broken ... sacrificial unity embracing diversity ... cultural relevance and sensitivity ... interdependence with others in the wider family of God ... transformed men and women, fragrant with humility and the aroma of Christ. They are marked by a deep engagement with and obedience to the Scriptures as the Word of God. They believe the promises of God. Both personally and in committed communities, they seek to know and pursue the purposes of God. Laborers and leaders are emerging, with an increasing passion for Jesus Christ. They demonstrate faith and courage as they live and move among their friends and families. As spiritual parents, they model authenticity and relevance. Ordinary people, in many walks of life, are joyfully leading integrated lives. They live as fruitful insiders among the lost. There is perseverance in the face of hardship and suffering. Around the world, many are coming to faith. As they become   established in discipleship, some grow to be foundational for further generations. The Gospel spreads naturally and powerfully, as believers share Christ ... life upon life ... family to family. Crossing cultures into new cities and nations, teams of mobile pioneers intentionally proclaim and embody the good news of Jesus Christ, in such a way that transformed communities multiply. These communities are bringing joy and hope to their surrounding environments as relationships are healed and justice increases. Indeed, the lost and unreached burn in their hearts, as they move the Gospel into the nations. The leaders of this movement, developed and empowered for God’s service, live out a growing commitment to Christlikeness. They are dependent upon the Holy Spirit. New generations of leaders are emerging, rooted incarnationally in their local and national contexts. An international leadership community brings focus, alignment and energy to their movement. These leaders are clearly committed to long-term impact in 
    generational ministry.`,
    `I haven't found one that allows the flexibility that I am looking for to choose how to read the bible.  This bible reading plan provides you the most flexibility in choosing how to read the bible.  Read as many chapters or verses (future option) as you want each day.  There is no pressure.  If you miss a day or don't finish reading for the day, no worries, your plan will be waiting for you to pick up where you left off when you are ready (Don't wait too long, though.  The longer you wait, the harder it will be to pick it back up again).  Your goal should be to know the only true living God and Jesus Christ whom he has sent (John 17:3), developing your relationship with him, not sticking to a specific reading plan.  So, take your time.  Learn to enjoy spending time with God in his word.  You have a lifetime to spend with him, and an eternity afterwards.`,
    `There are many plans and devotions out there that hit specific topics, and they are useful, but "All Scripture is inspired by God and profitable for teaching, for reproof, for correction, for training in righteousness; so that the man of God may be adequate, equipped for every good work."  (2 Timothy 3:16-17)  My fear is that many of today's Christians have a limited view and knowledge of God because they only do "popcorn" plans and devotions that interest them, and only get a one-sided view of God as a result.`,
    `Let's get started.`,
    `Redirected to an external web page.`
];
let version = [
    {fullname: 'King James Version', shortname: 'KJV'}, 
    {fullname: 'English Standard Version', shortname: 'ESV'}, 
    {fullname: 'New International Version', shortname: 'NIV'}
];
let bbooks = [
    {bk: 'Genesis', maxchap: 50},
    {bk: 'Exodus' , maxchap: 40},
    {bk: 'Leviticus', maxchap: 27},
    {bk: 'Numbers', maxchap: 36},
    {bk: 'Deuteronomy', maxchap: 34},
    {bk: 'Joshua', maxchap: 24},
    {bk: 'Judges', maxchap: 21},
    {bk: 'Ruth', maxchap: 4},
    {bk: '1 Samuel', maxchap: 31},
    {bk: '2 Samuel', maxchap: 24},
    {bk: '1 Kings', maxchap: 22},
    {bk: '2 Kings', maxchap: 25},
    {bk: '1 Chronicles', maxchap: 29},
    {bk: '2 Chronicles', maxchap: 36},
    {bk: 'Ezra', maxchap: 10},
    {bk: 'Nehemiah', maxchap: 13},
    {bk: 'Esther', maxchap: 10},
    {bk: 'Job', maxchap: 42},
    {bk: 'Psalms', maxchap: 150},
    {bk: 'Proverbs', maxchap: 31},
    {bk: 'Ecclesiastes', maxchap: 12},
    {bk: 'Song of Solomon', maxchap: 8},
    {bk: 'Isaiah', maxchap: 66},
    {bk: 'Jeremiah', maxchap: 52},
    {bk: 'Lamentations', maxchap: 5},
    {bk: 'Ezekiel', maxchap: 48},
    {bk: 'Daniel', maxchap: 12},
    {bk: 'Hosea', maxchap: 14},
    {bk: 'Joel', maxchap: 3},
    {bk: 'Amos', maxchap: 9},
    {bk: 'Obadiah', maxchap: 1},
    {bk: 'Jonah', maxchap: 4},
    {bk: 'Micah', maxchap: 7},
    {bk: 'Nahum', maxchap: 3},
    {bk: 'Habakkuk', maxchap: 3},
    {bk: 'Zephaniah', maxchap: 3},
    {bk: 'Haggai', maxchap: 2},
    {bk: 'Zechariah', maxchap: 14},
    {bk: 'Malachi', maxchap: 4},
    {bk: 'Matthew', maxchap: 28},
    {bk: 'Mark', maxchap: 16},
    {bk: 'Luke', maxchap: 24},
    {bk: 'John', maxchap: 21},
    {bk: 'Acts', maxchap: 28},
    {bk: 'Romans', maxchap: 16},
    {bk: '1 Corinthians', maxchap: 16},
    {bk: '2 Corinthians', maxchap: 13},
    {bk: 'Galatians', maxchap: 6},
    {bk: 'Ephesians', maxchap: 6},
    {bk: 'Philippians', maxchap: 4},
    {bk: 'Collosians', maxchap: 4},
    {bk: '1 Thessalonians', maxchap: 5},
    {bk: '2 Thessalonians', maxchap: 3},
    {bk: '1 Timothy', maxchap: 6},
    {bk: '2 Timothy', maxchap: 4},
    {bk: 'Titus', maxchap: 3},
    {bk: 'Philemon', maxchap: 1},
    {bk: 'Hebrews', maxchap: 13},
    {bk: 'James', maxchap: 5},
    {bk: '1 Peter', maxchap: 5},
    {bk: '2 Peter', maxchap: 3},
    {bk: '1 John', maxchap: 5},
    {bk: '2 John', maxchap: 1},
    {bk: '3 John', maxchap: 1},
    {bk: 'Jude', maxchap: 1},
    {bk: 'Revelation', maxchap: 22}
];
let selvers;
let selbk;
let selch;

console.log(bbooks[1].bk, bbooks[1].maxchap);


window.onload = function(){
    // bring in root div from html
    let root = document.querySelector('#root');
    console.log(root);

    // create grid and add to html root
    let container = document.createElement("div");
    container.setAttribute('class', 'grid-container');
    console.log(container);
    root.appendChild(container);

    // add header section to grid
    let heading = document.createElement("div");
    heading.setAttribute('class', 'header');
    console.log(heading);
    container.appendChild(heading);

    // add menu to grid
    let menu = document.createElement("div");
    menu.setAttribute('class', 'left');
    console.log(menu);
    container.appendChild(menu);

    // add main section to grid
    let main = document.createElement("div");
    main.setAttribute('class', 'middle');
    console.log(main);
    container.appendChild(main);
    main.innerHTML = 'Read the bible your way ...';

    // add right section to grid
    let right = document.createElement("div");
    right.setAttribute('class', 'right');
    console.log(right);
    container.appendChild(right);

    // add footer section to grid
    let foot = document.createElement("div");
    foot.setAttribute('class', 'footer');
    console.log(foot);
    container.appendChild(foot);

    // add image to heading
    let image = document.createElement('img');
    image.src = 'assets/images/KitsapNavigators.jpg';
    image.setAttribute('width', '50%');
    image.setAttribute('alt', 'Kitsap Navigators Logo');
    console.log(image)
    heading.appendChild(image)

    // create login element
    let form = document.createElement('form');
    form.setAttribute('name', 'Form');
    form.setAttribute('input', 'login()');
    let input = document.createElement('input');
    input.setAttribute('type', 'submit');
    input.setAttribute('value', 'Log In');
    input.setAttribute('style', 'font-family: "Comic Sans Ms"');

   // add buttons to menu
    for (let i = 0; i < buttonNames.length - 2; i++) {
        let button = document.createElement('button');
        button.innerHTML = buttonNames[i];
        console.log(button);
        menu.appendChild(button);
        button.addEventListener('click', function(){
            main.innerHTML = content[i];
        });
    }

    let button2ndLast = document.createElement('button');
    button2ndLast.innerHTML = buttonNames[buttonNames.length - 2];
    console.log(button2ndLast);
    menu.appendChild(button2ndLast);
    button2ndLast.addEventListener('click', function(){
        main.innerHTML = content[buttonNames.length - 2] + '<br>';
        main.appendChild(vers);
    });
    
    let buttonLast = document.createElement('button');
    buttonLast.innerHTML = buttonNames[buttonNames.length - 1];
    console.log(buttonLast);
    menu.appendChild(buttonLast);
    buttonLast.addEventListener('click', function (){
        main.innerHTML = content[buttonNames.length - 1];
        var win = window.open('https://www.navigators.org/staff/23831807/', '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        };
    });

    // select bible version
    let vers = document.createElement('div');
    vers.setAttribute('class', 'dropdown');

    let versel = document.createElement('button');
    versel.setAttribute('class', 'dropbtn');
    versel.innerHTML = 'Select Bible Version';
    vers.appendChild(versel);

    let dropdn = document.createElement('div');
    dropdn.setAttribute('class', 'dropdown-content');
    versel.appendChild(dropdn)

    for (let i = 0; i < version.length; i++) {
        let vers = document.createElement('button');
        vers.setAttribute('class', 'button2')
        vers.innerHTML = version[i].fullname;
        dropdn.appendChild(vers);
        vers.addEventListener('click', function(){
            selvers = i;
            console.log(version[selvers].shortname);
            main.innerHTML = `Selected version: ${version[selvers].fullname} <br>`;
            main.appendChild(books);
        });
    };

    // select book of the bible
    let books = document.createElement('div');
    books.setAttribute('class', 'dropdown');

    let book = document.createElement('button');
    book.setAttribute('class', 'dropbtn');
    book.innerHTML = 'Select Book of the Bible';
    books.appendChild(book);

    let bookdrop = document.createElement('div');
    bookdrop.setAttribute('class', 'dropdown-content');
    book.appendChild(bookdrop)

    for (let i = 0; i < bbooks.length; i++) {
        let bookButt = document.createElement('button');
        bookButt.setAttribute('class', 'button2')
        bookButt.innerHTML = bbooks[i].bk;
        bookdrop.appendChild(bookButt);
        bookButt.addEventListener('click', function(){
            selbk = i;
            console.log(bbooks[selbk].bk);
            main.innerHTML = `Selected version: ${version[selvers].fullname} <br> Selected book: ${bbooks[selbk].bk} <br>`;
            main.appendChild(chapters);
        });
    };

    // select chapter   
    let chapters = document.createElement('div');
    chapters.setAttribute('class', 'dropdown');

    let chapter = document.createElement('button');
    chapter.setAttribute('class', 'dropbtn');
    chapter.innerHTML = 'Select Chapter';
    chapters.appendChild(chapter);

    let chaptdrop = document.createElement('div');
    chaptdrop.setAttribute('class', 'dropdown-content');
    chapter.appendChild(chaptdrop)

    for (let i = 0; i < bbooks.length; i++) {
        let chaptButt = document.createElement('button');
        chaptButt.setAttribute('class', 'button2')
        chaptButt.innerHTML = i+1;
        chaptdrop.appendChild(chaptButt);
        chaptButt.addEventListener('click', function(){
            selch = i+1;
            console.log(selch);
            main.innerHTML = `Selected version: ${version[selvers].fullname} <br> Selected book: ${bbooks[selbk].bk} <br> Selected chapter: ${selch} <br>`;
            main.appendChild(getPassage);
        });
    };

    let getPassage = document.createElement('div');
    getPassage.setAttribute('class', 'dropdown');

    let passage = document.createElement('button');
    passage.setAttribute('class', 'dropbtn');
    passage.innerHTML = 'Get Passage';
    getPassage.appendChild(passage);
    
    passage.addEventListener('click', function (){
        let psg = `https://www.biblegateway.com/passage?search=${bbooks[selbk].bk}+${selch}&version=${version[selvers].shortname}`;
        main.innerHTML = content[buttonNames.length - 1];
        var win = window.open(psg, '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        };
    });
}