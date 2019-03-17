(function() {
    let photoPosts = [
        {
            id: '1',
            descriprion: 'New film!',
            createdAt: new Date('1964-01-07T15:25:00'),
            author: 'Nicolas Cage',
            photoLink: 'https://en.wikipedia.org/wiki/Nicolas_Cage#/media/File:Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_(Mostra).jpg',
            hashTags: ['filmmaking', 'actor', 'ghostrider'],
            likes: []
        },
        {
            id: '2',
            descriprion: 'When I was five I think, that\'s when I started wanting to be an actress. I loved to play.',
            createdAt: new Date('1926-06-01T18:56:00'),
            author: 'Marilyn Monroe',
            photoLink: 'https://images-na.ssl-images-amazon.com/images/I/71jhI7QEcPL._SX425_.jpg',
            hashTags: ['sex-symbol', 'beuty'],
            likes: []
        },
        {
            id: '3',
            descriprion: 'Being Prime Minister is a lonely job. In a sense, it ought to be: you cannot lead from the crowd.',
            createdAt: new Date('1925-10-13T10:38:00'),
            author: 'Margaret Thatcher',
            photoLink: 'https://en.wikipedia.org/wiki/File:Margaret_Thatcher.png',
            hashTags: ['iron', 'lady'],
            likes: []
        },
        {
            id: '4',
            descriprion: ' I didn\'t like the world around me because it was kind of grim, but I loved to play house.',
            createdAt: new Date('1936-06-01T17:23:00'),
            author: 'Marilyn Monroe',
            photoLink: 'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-boln7p6918vj8t9ptkbgf7lm12-20180201185439.Medi.jpeg',
            hashTags: ['sex-symbol', 'beuty'],
            likes: []
        },
        {
            id: '5',
            descriprion: 'Where is my faith? Even deep down ... there is nothing but emptiness and darkness...',
            createdAt: new Date('1910-08-26T12:35:17'),
            author: 'Mother Teresa',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mother_Teresa_1.jpg/220px-Mother_Teresa_1.jpg',
            hashTags: ['help', 'help_each_other'],
            likes: []
        },
        {
            id: '6',
            descriprion: 'Both parties deprecated war, but one of them would make war rather than let the Nation survive, and the other would accept war rather than let it perish, and the war came.',
            createdAt: new Date('1809-02-12T19:15:00'),
            author: 'Abraham Lincoln',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg',
            hashTags: ['president', 'noslavery'],
            likes: []
        },
        {
            id: '7',
            descriprion: 'All this will not be finished in the first one hundred days. Nor will it be finished in the first one thousand days, nor in the life of this Administration, nor even perhaps in our lifetime on this planet. But let us begin.',
            createdAt: new Date('1917-05-29T21:14:00'),
            author: 'John F. Kennedy',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/1/12/John_Fitzgerald_Kennedy.png',
            hashTags: ['president'],
            likes: []
        },
        {
            id: '8',
            descriprion: 'In October 1838, that is, fifteen months after I had begun my systematic enquiry, I happened to read for amusement Malthus on Population, and being well prepared to appreciate the struggle for existence which everywhere goes on from long-continued observation of the habits of animals and plants, it at once struck me that under these circumstances favourable variations would tend to be preserved, and unfavourable ones to be destroyed.',
            createdAt: new Date('1809-02-12T22:48:00'),
            author: 'Charles Darwin',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/220px-Charles_Darwin_seated_crop.jpg',
            hashTags: ['species', 'theory', 'ultimate_survival'],
            likes: []
        },
        {
            id: '9',
            descriprion: 'I believe that this nation should commit itself to achieving the goal, before this decade is out, of landing a man on the Moon and returning him safely to the Earth. No single space project in this period will be more impressive to mankind, or more important for the long-range exploration of space; and none will be so difficult or expensive to accomplish.',
            createdAt: new Date('1937-05-29T11:44:00'),
            author: 'John F. Kennedy',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy,_White_House_color_photo_portrait.jpg/220px-John_F._Kennedy,_White_House_color_photo_portrait.jpg',
            hashTags: ['president'],
            likes: []
        },
        {
            id: '10',
            descriprion: 'Pardon me, sorry! Always I am mistaken for Professor Einstein.',
            createdAt: new Date('1879-09-14T23:12:00'),
            author: 'Albert Einstein',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/220px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
            hashTags: ['math', 'physics', 'science'],
            likes: []
        },
        {
            id: '11',
            descriprion: 'Leonardo di ser Piero da Vinci.',
            createdAt: new Date('1452-04-15T11:19:00'),
            author: 'Leonardo da Vinci',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Francesco_Melzi_-_Portrait_of_Leonardo_-_WGA14795.jpg/220px-Francesco_Melzi_-_Portrait_of_Leonardo_-_WGA14795.jpg',
            hashTags: ['masterpiece', 'helicopter', 'engineer', 'sculptor'],
            likes: []
        },
        {
            id: '12',
            descriprion: 'Take a look at my star in Hollywood!',
            createdAt: new Date('1994-01-07T13:27:00'),
            author: 'Nicolas Cage',
            photoLink: 'https://en.wikipedia.org/wiki/Nicolas_Cage#/media/File:Nicolas_Cage_Walk_of_Fame.jpg',
            hashTags: ['filmmaking', 'actor', 'ghostrider'],
            likes: []
        },
        {
            id: '13',
            descriprion: 'Columbus was not a scholarly man. Yet he studied these books, made hundreds of marginal notations in them and came out with ideas about the world that were characteristically simple and strong and sometimes wrong, ...',
            createdAt: new Date('1451-10-31T16:42:00'),
            author: 'Christopher Columbus',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Christopher_Columbus_at_the_gates_of_the_monastery_of_Santa_Maria_de_la_Rabida_with_his_son_Diego.jpg/170px-Christopher_Columbus_at_the_gates_of_the_monastery_of_Santa_Maria_de_la_Rabida_with_his_son_Diego.jpg',
            hashTags: ['ocean', 'hopes', 'sea', 'notations', 'worldwide'],
            likes: []
        },
        {
            id: '14',
            descriprion: 'I do but quote from one of those speeches when I declare that "I have no purpose, directly or indirectly, to interfere with the institution of slavery in the States where it exists.',
            createdAt: new Date('1829-02-12T22:57:00'),
            author: 'Abraham Lincoln',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Lincoln_O-17_by_Brady%2C_1860.png/220px-Lincoln_O-17_by_Brady%2C_1860.png',
            hashTags: ['president', 'noslavery'],
            likes: []
        },
        {
            id: '15',
            descriprion: 'Up in front, there with the screen so big, a little kid all alone, and I loved it.',
            createdAt: new Date('1956-06-01T15:05:21'),
            author: 'Marilyn Monroe',
            photoLink: 'https://thingsthatarerectangles.files.wordpress.com/2009/10/marilyn-monroe.jpg',
            hashTags: ['sex-symbol', 'beuty'],
            likes: []
        },
        {
            id: '16',
            descriprion: 'The result of this would be the formation of new species. Here, then, I had at last got a theory by which to work...',
            createdAt: new Date('1819-02-12T16:15:03'),
            author: 'Charles Darwin',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Charles_Darwin_by_Maull_and_Polyblank%2C_1855-crop.png',
            hashTags: ['species', 'theory', 'ultimate_survival'],
            likes: []
        },
        {
            id: '17',
            descriprion: 'For nine days I was as one lost, without hope of life. Eyes never beheld the sea so angry, so high, so covered with foam. The wind not only prevented our progress, but offered no opportunity to run behind any headland for shelter; hence we were forced to keep out in this bloody ocean, seething like a pot on a hot fire.',
            createdAt: new Date('1453-07-21T21:56:53'),
            author: 'Christopher Columbus',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg/220px-Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg',
            hashTags: ['ocean', 'hopes', 'sea', 'sunbathe', 'worldwide'],
            likes: []
        },
        {
            id: '18',
            descriprion: 'As many more individuals of each species are born than can possibly survive.',
            createdAt: new Date('1825-02-12T15:46:00'),
            author: 'Charles Darwin',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Charles_Darwin_by_Julia_Margaret_Cameron_2.jpg/220px-Charles_Darwin_by_Julia_Margaret_Cameron_2.jpg',
            hashTags: ['species', 'theory', 'ultimate_survival'],
            likes: []
        },
        {
            id: '19',
            descriprion: 'But with Denis there I was never alone. What a man. What a husband. What a friend.',
            createdAt: new Date('1950-10-13T17:29:00'),
            author: 'Margaret Thatcher',
            photoLink: 'https://secure.i.telegraph.co.uk/multimedia/archive/02532/denis-margaret-tha_2532944b.jpg',
            hashTags: ['iron', 'lady'],
            likes: []
        },
        {
            id: '20',
            descriprion: 'My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery.',
            createdAt: new Date('1839-02-12T14:23:07'),
            author: 'Abraham Lincoln',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Emancipation_proclamation.jpg/1024px-Emancipation_proclamation.jpg',
            hashTags: ['president', 'noslavery'],
            likes: []
        },
        {
            id: '21',
            descriprion: 'Vincent Willem van Gogh.',
            createdAt: new Date('1853-03-30T19:15:26'),
            author: 'Vincent Van Gogh',
            photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/220px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg',
            hashTags: ['picture'],
            likes: []

        }
    ];

    let filter1 = { // 15, 4 & 2
        author: 'Marilyn Monroe'
    }
    let filter2 = { // 20 & 14
        author: 'Abraham Lincoln',
        hashTags: ['president'],
        date: {
            from: new Date(1810, 1, 1),
            till: new Date(1840, 12, 31)
        }
    }
    let filter3 = { // 20, 14 & 6
        author: 'Abraham Lincoln',
        hashTags: ['president']
    }
    let filter4 = { // 11
        hashTags: ['helicopter', 'engineer'],
        date: {
            from: new Date(1450, 1, 1),
            till: new Date(1600, 12, 31)
        }
    }
    let filter5 = { // []
        hashTags: ['masterpiece'],
        date: {
            from: new Date(1500, 1, 1),
            till: new Date(1600, 12, 31)
        }
    }
    let filter6 = { // 10, 21, 20, 14, 18, 16, 8, 6, 17, 11, 13
        date: {
            from: new Date(1400, 1, 1),
            till: new Date(1900, 12, 31)
        }
    }

    function getPhotoPosts(skip = 0, top = 10, filterConfig = {}) {
        if(typeof skip === "number" && !isNaN(skip) && skip >= 0 &&
            typeof top === "number" && !isNaN(top) && top >= 0 &&
             typeof filterConfig === "object" && filterConfig !== null) {
            let res = photoPosts.slice();
            if (filterConfig.author) {
                res = res.filter((item) => item.author === filterConfig.author);
            }
            if(filterConfig.hashtags) {
                res = res.filter((item) => filterConfig.hashTags.every((tag) => item.hashTags.includes(tag)));
            }
            if(filterConfig.date) {
                res = res.filter((item) => item.createdAt >= filterConfig.date.from &&
                                            item.createdAt <= filterConfig.date.till);
            }
            res = res.sort((a, b) => b.createdAt - a.createdAt);
            res = res.slice(skip, skip + top);
            return res;
        }
        else {
            return;
        }
    }
    
    function getPhotoPost(id) {
        if(typeof id !== 'string') {
            return;
        }
        let index = photoPosts.findIndex((item) => item.id === id);
        if(index === -1) {
            return;
        }
        return photoPosts[index];
    }

    let photoPost1 = {
        id: '20',
        descriprion: 'My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery.',
        createdAt: new Date('1839-02-12T14:23:07'),
        author: 'Abraham Lincoln',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Emancipation_proclamation.jpg/1024px-Emancipation_proclamation.jpg',
        hashTags: ['president', 'noslavery'],
        likes: []
    }
    let photoPost2 = {
        id: '25',
        descriprion: 'My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery.',
        createdAt: new Date('1839-02-12T14:23:07'),
        author: '',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Emancipation_proclamation.jpg/1024px-Emancipation_proclamation.jpg',
        hashTags: ['president', 'noslavery'],
        likes: []
    }
    let photoPost3 = {
        id: '25',
        descriprion: '',
        createdAt: new Date('1839-02-12T14:23:07'),
        author: 'Abraham Lincoln',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Emancipation_proclamation.jpg/1024px-Emancipation_proclamation.jpg',
        hashTags: ['president', 'noslavery'],
        likes: []
    }
    let photoPost4 = {
        id: '25',
        descriprion: 'My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery.',
        createdAt: new Date('1839-02-12T14:23:07'),
        author: 'Abraham Lincoln',
        photoLink: '',
        hashTags: ['president', 'noslavery'],
        likes: []
    }
    let photoPost5 = {
        id: '25',
        descriprion: 'My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery.',
        createdAt: new Date('1839-02-12T14:23:07'),
        author: 'Abraham Lincoln',
        hashTags: ['president', 'noslavery'],
        likes: []
    }
    let photoPost6 = {
        id: '25',
        descriprion: 'Newly added post[6]',
        createdAt: new Date('2007-03-12T17:22:07'),
        author: 'Abba',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Emancipation_proclamation.jpg/1024px-Emancipation_proclamation.jpg',
        hashTags: ['new', 'brand_new'],
        likes: []
    }

    function validatePhotoPost(photoPost) {
        if (typeof photoPost === 'object' && photoPost !== null) {
            if (photoPost.id && photoPost.descriprion && photoPost.createdAt && photoPost.author &&
            photoPost.photoLink) {
                if (typeof photoPost.id === 'string' && typeof photoPost.descriprion === 'string' && 
                typeof photoPost.createdAt === 'object' && typeof photoPost.author === 'string' &&
                typeof photoPost.photoLink === 'string') {
                    if (typeof getPhotoPost(photoPost.id) === 'undefined' && photoPost.author !== '' &&
                    photoPost.descriprion.length < 200 && photoPost.photoLink !== '') {
                        if (Array.isArray(photoPost.hashTags)) {
                            if (photoPost.hashTags.length !== 0 && 
                            photoPost.hashTags.filter((item) => typeof item !== 'string').length !== 0) {
                                return false;
                            }
                        }
                        if (Array.isArray(photoPost.likes)) {
                            if (photoPost.likes.length !== 0 &&
                            photoPost.likes.filter((item) => typeof item !== 'string').length !== 0) {
                                return false;
                            }
                        }
                        return true;
                    }
                }
            }
        }
        return false;
    }

    function addPhotoPost(photoPost) {
        if(validatePhotoPost(photoPost)) {
            photoPosts.push(photoPost);
            return true;
        }
        else {
            return false;
        }
    }

    let editor1 = {
        descriprion: [],
        photoLink: 'http://haradok.info/static/news/5/4565/preview.jpg'
    }
    let editor2 = {
        author: 'abcda',
        hashTags: ['new like', 'edited like']
    }

    function editPhotoPost(id, photoPost) {
        let index = photoPosts.findIndex((item) => item.id === id);
        if (index === -1) {
            return false;
        }
        let post = photoPosts[index];
        if(typeof photoPost.descriprion === 'string' && photoPost.descriprion.length < 200) {
            post.descriprion = photoPost.descriprion;
        }
        if(typeof photoPost.photoLink === 'string' && photoPost.photoLink.length !== 0) {
            post.photoLink = photoPost.photoLink;
        }
        if (Array.isArray(photoPost.hashTags)) {
            if (photoPost.hashTags.length === 0) {
                post.hashTags = [];
            }
            else if (photoPost.hashTags.filter((item) => typeof item !== 'string').length === 0) {
                post.hashTags = photoPost.hashTags.slice();
            }
        }
        if (Array.isArray(photoPost.likes)) {
            if (photoPost.likes.length === 0) {
                post.likes = [];
            }
            else if (photoPost.likes.filter((item) => typeof item !== 'string').length === 0) {
                post.likes = photoPost.likes.slice();
            }
        }
        return true;
    }

    function removePhotoPost(id) {
        let index = photoPosts.findIndex((item) => item.id === id);
        if (index !== -1) {
            photoPosts.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }

// Тестовые запуски для getPhotoPosts(...);
//    console.log(getPhotoPosts(null));   // Error!
//    console.log(getPhotoPosts(0, null));    // Error!
//    console.log(getPhotoPosts(0, 10, null));    // Error!
//    console.log(getPhotoPosts(NaN));    // Error!
//    console.log(getPhotoPosts(0, NaN)); // Error!
//    console.log(getPhotoPosts(0, 10, NaN)); // Error!
//    console.log(getPhotoPosts(0, 0));   // []
//    console.log(getPhotoPosts(18, 32)); // outputs from 19 till the end(21)
//    console.log(getPhotoPosts(30, 12)); // []
//    console.log(getPhotoPosts(1, 1, filter1));  // outputs post with id = 4
//    console.log(getPhotoPosts(0, 10, filter2)); // 20, 14
//    console.log(getPhotoPosts(0, 10, filter3)); // 20, 14, 6
//    console.log(getPhotoPosts(0, 10, filter4)); // 11
//    console.log(getPhotoPosts(0, 10, filter5)); // []
//    console.log(getPhotoPosts(0, 21, filter6)); // 10, 21, 20, 14, 18, 16, 8, 6, 17, 11, 13
//    console.log(getPhotoPosts(3, 6, filter6));  // 14, 18, 16, 8, 6, 17

/*    console.log('=========================');
// Тестовые запуски для getPhotoPost(...);
    console.log(getPhotoPost('0')); // undefined
    console.log(getPhotoPost(14));  // undefined
    console.log(getPhotoPost('14'));    // 14
*/
/*    console.log('=========================');
// Тестовые запуски для validatePhotoPost(...);
    console.log(validatePhotoPost(photoPost1)); // false
    console.log(validatePhotoPost(photoPost2)); // false
    console.log(validatePhotoPost(photoPost3)); // true
    console.log(validatePhotoPost(photoPost4)); // false
    console.log(validatePhotoPost(photoPost5)); // false
    console.log(validatePhotoPost(photoPost6)); // true
*/
/*    console.log('=========================');
// Тестовые запуски для addPhotoPost(...);
    console.log(addPhotoPost(photoPost1)); // false
    console.log(addPhotoPost(photoPost2)); // false
    console.log(addPhotoPost(photoPost3)); // true
    console.log(addPhotoPost(photoPost4)); // false
    console.log(addPhotoPost(photoPost5)); // false
    console.log(addPhotoPost(photoPost6)); // false, т.к. с таким id уже добавлен <photoPost3>.
*/
/*    console.log('=========================');
// Тестовые запуски для editPhotoPost(...);
    console.log(getPhotoPost('1'));
    console.log(editPhotoPost('1', editor1)); // true
    console.log(getPhotoPost('1'));

    console.log(getPhotoPost('5'));
    console.log(editPhotoPost('5', editor2)); // true
    console.log(getPhotoPost('5'));

    console.log(getPhotoPost('6'));
    console.log(editPhotoPost('6',photoPost3)); // true
    console.log(getPhotoPost('6'));

    console.log(getPhotoPost('25'));
    console.log(editPhotoPost('25', photoPost4)); // false
    console.log(getPhotoPost('25'));

    console.log(getPhotoPost('20'));
    console.log(editPhotoPost('20', photoPosts[20])); // true
    console.log(getPhotoPost('20'));

    console.log(getPhotoPost('14'));
    console.log(editPhotoPost('14', photoPost6)); // true
    console.log(getPhotoPost('14'));
*/
/*    console.log('=========================');
// Тестовые запуски для removePhotoPost(...);
    console.log(removePhotoPost('4')); // true
    console.log(removePhotoPost('6')); // true
    console.log(removePhotoPost('1')); // true
    console.log(removePhotoPost('9')); // true
    console.log(removePhotoPost('5')); // true
    console.log(removePhotoPost('6')); // false, т.к. уже удалён
*/
}());