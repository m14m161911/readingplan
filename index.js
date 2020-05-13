let users = [
    {
        username: 'jjvansly',
        passwd: '2Bornot2b'
    },
    {
        username: 'borntoread',
        passwd: 'Readingisfun'
    }
]
let content = [
    `Build your bible reading plan your way ...`,
    `I haven't found one that allows the flexibility that I am looking for to choose how to read the bible.  This bible reading plan provides you the most flexibility in choosing how to read the bible.  Read as many chapters or verses (future option) as you want each day.  There is no pressure.  If you miss a day or don't finish reading for the day, no worries, your plan will be waiting for you to pick up where you left off when you are ready (Don't wait too long, though.  The longer you wait, the harder it will be to pick it back up again).  Your goal should be to know the only true living God and Jesus Christ whom he has sent (John 17:3), developing your relationship with him, not sticking to a specific reading plan.  So, take your time.  Learn to enjoy spending time with God in his word.  You have a lifetime to spend with him, and an eternity afterwards.`,
    `There are many plans and devotions out there that hit specific topics, and they are useful, but "All Scripture is inspired by God and profitable for teaching, for reproof, for correction, for training in righteousness; so that the man of God may be adequate, equipped for every good work."  (2 Timothy 3:16-17)  My fear is that many of today's Christians have a limited view and knowledge of God because they only do "popcorn" plans and devotions that interest them, and only get a one-sided view of God as a result.`,
    `Let's get started.`,
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
    `Redirected to an external web page.`
]
let version = ['KJV', 'ESV', 'NIV'];
let selvers = [];
let bbooks = ['Genesis', 'Psalms', 'Matthew']

// basic login function from stackoverflow.com
function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(user == "lab18" && pass == "lab18") {
        alert("Logged In");
        locate="new11.html"
        return false;
    } else {
        alert("wrong user/pass");
        return false;
        }
    }

console.log(content);

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
    main.innerHTML = content[0];

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

    // create bible version drop down menu
    let vers = document.createElement('div');
    vers.setAttribute('class', 'dropdown')
    let versel = document.createElement('button');
    versel.setAttribute('class', 'dropbtn');
    versel.innerHTML = 'Select Bible Version';
    vers.appendChild(versel);
    let dropdn = document.createElement('div');
    dropdn.setAttribute('class', 'dropdown-content');
    versel.appendChild(dropdn)
    let vers1 = document.createElement('button');
    vers1.setAttribute('class', 'button2')
    vers1.innerHTML = 'Genesis';
    dropdn.appendChild(vers1);
    let vers2 = document.createElement('button');
    vers2.setAttribute('class', 'button2')
    vers2.innerHTML = 'Psalms';
    dropdn.appendChild(vers2);
    let vers3= document.createElement('button');
    vers3.setAttribute('class', 'button2')
    vers3.innerHTML = 'Matthew';
    dropdn.appendChild(vers3);

    // select book and chapter of the bible
    // let books = document.createElement('div');
    // books.setAttribute('class', 'dropdown')
    // let book = document.createElement('button');
    // book.setAttribute('class', 'dropbtn');
    // book.innerHTML = 'Select Book of the Bible';
    // books.appendChild(book);
    // let bookdrop = document.createElement('div');
    // bookdrop.setAttribute('class', 'dropdown-content');
    // book1.appendChild(bookdrop)
    // let book1 = document.createElement('button');
    // book1.setAttribute('class', 'button2')
    // book1.innerHTML = 'King James Version (KJV)';
    // bookdrop.appendChild(book1);
    // let book2 = document.createElement('button');
    // book2.setAttribute('class', 'button2')
    // book2.innerHTML = 'English Standard Version (ESV)';
    // bookdrop.appendChild(book2);
    // let book3= document.createElement('button');
    // book3.setAttribute('class', 'button2')
    // book3.innerHTML = 'New International Version (NIV)';
    // bookdrop.appendChild(book3);

    // add buttons to menu
    let button0 = document.createElement('button');
    button0.innerHTML = 'Login'
    console.log(button0);
    menu.appendChild(button0);
    
    let button1 = document.createElement('button');
    button1.innerHTML = 'Why a new reading plan?';
    console.log(button1);
    menu.appendChild(button1);
    
    let button2 = document.createElement('button');
    button2.innerHTML = 'Why read the entire bible?';
    console.log(button2);
    menu.appendChild(button2);
    
    let button3 = document.createElement('button');
    button3.innerHTML = "Reading Plan";
    console.log(button3);
    menu.appendChild(button3);
    
    let button4 = document.createElement('button');
    button4.innerHTML = 'Navigators Calling';
    console.log(button4);
    menu.appendChild(button4);
    
    let button5 = document.createElement('button');
    button5.innerHTML = 'Navigators Values';
    console.log(button5);
    menu.appendChild(button5);
    
    let button6 = document.createElement('button');
    button6.innerHTML = 'Navigators Vision';
    console.log(button6);
    menu.appendChild(button6);
    
    let button7 = document.createElement('button');
    button7.innerHTML = 'About Kitsap Navigators';
    console.log(button7);
    menu.appendChild(button7);

    // make buttons work
    button0.addEventListener('click', function(){
        // main.innerHTML = form;
    })
    button1.addEventListener('click', function(){
        main.innerHTML = content[1];
    })
    button2.addEventListener('click', function(){
        main.innerHTML = content[2];
    })
    button3.addEventListener('click', function(){
        main.innerHTML = content[3] + '<br>';
        main.appendChild(vers);
        vers1.addEventListener('click', function(){
            selvers = version[0];
            console.log(selvers);
            main.innerHTML = 'Selected version is King James Version';
        })
        vers2.addEventListener('click', function(){
            selvers = version[1];
            console.log(selvers);
            main.innerHTML = 'Selected version is English Standard Version';
        })
        vers3.addEventListener('click', function(){
            selvers = version[2];
            console.log(selvers);
            main.innerHTML = 'Selected version is  New International Version';
        })
        main.appendChild(groups);
    })
    button4.addEventListener('click', function(){
        main.innerHTML = content[4];
    })
    button5.addEventListener('click', function(){
        main.innerHTML = content[5];
    })
    button6.addEventListener('click', function(){
        main.innerHTML = content[6];
    })
    button7.addEventListener('click', function (){
        main.innerHTML = content[7];
        var win = window.open('https://www.navigators.org/staff/23831807/', '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    })
}