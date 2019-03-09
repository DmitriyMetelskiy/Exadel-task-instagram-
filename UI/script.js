
var photoPosts = [
    {
        id: '1',
        descriprion: 'New film!',
        createdAt: new Date('1964-01-07T23:00:00'),
        author: 'Nicolas Cage',
        photoLink: 'https://en.wikipedia.org/wiki/Nicolas_Cage#/media/File:Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_(Mostra).jpg'
    },
    {
        id: '2',
        descriprion: 'When I was five I think, that\'s when I started wanting to be an actress. I loved to play.',
        createdAt: new Date('1926-06-01T23:00:00'),
        author: 'Marilyn Monroe',
        photoLink: 'https://images-na.ssl-images-amazon.com/images/I/71jhI7QEcPL._SX425_.jpg'
    },
    {
        id: '3',
        descriprion: 'Being Prime Minister is a lonely job. In a sense, it ought to be: you cannot lead from the crowd.',
        createdAt: new Date('1925-10-13T23:00:00'),
        author: 'Margaret Thatcher',
        photoLink: 'https://en.wikipedia.org/wiki/File:Margaret_Thatcher.png'
    },
    {
        id: '4',
        descriprion: ' I didn\'t like the world around me because it was kind of grim, but I loved to play house.',
        createdAt: new Date('1926-06-01T23:00:00'),
        author: 'Marilyn Monroe',
        photoLink: 'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-boln7p6918vj8t9ptkbgf7lm12-20180201185439.Medi.jpeg'
    },
    {
        id: '5',
        descriprion: 'Where is my faith? Even deep down ... there is nothing but emptiness and darkness...',
        createdAt: new Date('1910-08-26T23:00:00'),
        author: 'Mother Teresa',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mother_Teresa_1.jpg/220px-Mother_Teresa_1.jpg'
    },
    {
        id: '6',
        descriprion: 'Both parties deprecated war, but one of them would make war rather than let the Nation survive, and the other would accept war rather than let it perish, and the war came.',
        createdAt: new Date('1809-02-12T23:00:00'),
        author: 'Abraham Lincoln',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg'
    },
    {
        id: '7',
        descriprion: 'All this will not be finished in the first one hundred days. Nor will it be finished in the first one thousand days, nor in the life of this Administration, nor even perhaps in our lifetime on this planet. But let us begin.',
        createdAt: new Date('1917-05-29T23:00:00'),
        author: 'John F. Kennedy',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/1/12/John_Fitzgerald_Kennedy.png'
    },
    {
        id: '8',
        descriprion: 'In October 1838, that is, fifteen months after I had begun my systematic enquiry, I happened to read for amusement Malthus on Population, and being well prepared to appreciate the struggle for existence which everywhere goes on from long-continued observation of the habits of animals and plants, it at once struck me that under these circumstances favourable variations would tend to be preserved, and unfavourable ones to be destroyed.',
        createdAt: new Date('1809-02-12T23:00:00'),
        author: 'Charles Darwin',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/220px-Charles_Darwin_seated_crop.jpg'
    },
    {
        id: '9',
        descriprion: 'I believe that this nation should commit itself to achieving the goal, before this decade is out, of landing a man on the Moon and returning him safely to the Earth. No single space project in this period will be more impressive to mankind, or more important for the long-range exploration of space; and none will be so difficult or expensive to accomplish.',
        createdAt: new Date('1917-05-29T23:00:00'),
        author: 'John F. Kennedy',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy,_White_House_color_photo_portrait.jpg/220px-John_F._Kennedy,_White_House_color_photo_portrait.jpg'
    },
    {
        id: '10',
        descriprion: 'Pardon me, sorry! Always I am mistaken for Professor Einstein.',
        createdAt: new Date('1879-09-14T23:00:00'),
        author: 'Albert Einstein',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/220px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg'
    },
    {
        id: '11',
        descriprion: 'Leonardo di ser Piero da Vinci.',
        createdAt: new Date('1452-04-15T23:00:00'),
        author: 'Leonardo da Vinci',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Francesco_Melzi_-_Portrait_of_Leonardo_-_WGA14795.jpg/220px-Francesco_Melzi_-_Portrait_of_Leonardo_-_WGA14795.jpg'
    },
    {
        id: '12',
        descriprion: 'Take a look at my star in Hollywood!',
        createdAt: new Date('1964-01-07T23:00:00'),
        author: 'Nicolas Cage',
        photoLink: 'https://en.wikipedia.org/wiki/Nicolas_Cage#/media/File:Nicolas_Cage_Walk_of_Fame.jpg'
    },
    {
        id: '13',
        descriprion: 'Columbus was not a scholarly man. Yet he studied these books, made hundreds of marginal notations in them and came out with ideas about the world that were characteristically simple and strong and sometimes wrong, ...',
        createdAt: new Date('1451-10-31T23:00:00'),
        author: 'Christopher Columbus',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Christopher_Columbus_at_the_gates_of_the_monastery_of_Santa_Maria_de_la_Rabida_with_his_son_Diego.jpg/170px-Christopher_Columbus_at_the_gates_of_the_monastery_of_Santa_Maria_de_la_Rabida_with_his_son_Diego.jpg'
    },
    {
        id: '14',
        descriprion: 'I do but quote from one of those speeches when I declare that "I have no purpose, directly or indirectly, to interfere with the institution of slavery in the States where it exists.',
        createdAt: new Date('1809-02-12T23:00:00'),
        author: 'Abraham Lincoln',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Lincoln_O-17_by_Brady%2C_1860.png/220px-Lincoln_O-17_by_Brady%2C_1860.png'
    },
    {
        id: '15',
        descriprion: 'Up in front, there with the screen so big, a little kid all alone, and I loved it.',
        createdAt: new Date('1926-06-01T23:00:00'),
        author: 'Marilyn Monroe',
        photoLink: 'https://thingsthatarerectangles.files.wordpress.com/2009/10/marilyn-monroe.jpg'
    },
    {
        id: '16',
        descriprion: 'The result of this would be the formation of new species. Here, then, I had at last got a theory by which to work...',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Charles Darwin',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Charles_Darwin_by_Maull_and_Polyblank%2C_1855-crop.png'
    },
    {
        id: '17',
        descriprion: 'For nine days I was as one lost, without hope of life. Eyes never beheld the sea so angry, so high, so covered with foam. The wind not only prevented our progress, but offered no opportunity to run behind any headland for shelter; hence we were forced to keep out in this bloody ocean, seething like a pot on a hot fire.',
        createdAt: new Date('1453-07-21T23:00:00'),
        author: 'Christopher Columbus',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg/220px-Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg'
    },
    {
        id: '18',
        descriprion: 'As many more individuals of each species are born than can possibly survive.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Charles Darwin',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Charles_Darwin_by_Julia_Margaret_Cameron_2.jpg/220px-Charles_Darwin_by_Julia_Margaret_Cameron_2.jpg'
    },
    {
        id: '19',
        descriprion: 'But with Denis there I was never alone. What a man. What a husband. What a friend.',
        createdAt: new Date('1925-10-13T23:00:00'),
        author: 'Margaret Thatcher',
        photoLink: 'https://secure.i.telegraph.co.uk/multimedia/archive/02532/denis-margaret-tha_2532944b.jpg'
    },
    {
        id: '20',
        descriprion: 'My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery.',
        createdAt: new Date('1809-02-12T23:00:00'),
        author: 'Abraham Lincoln',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Emancipation_proclamation.jpg/1024px-Emancipation_proclamation.jpg'
    },
    {
        id: '21',
        descriprion: 'Vincent Willem van Gogh.',
        createdAt: new Date('1853-03-30T23:00:00'),
        author: 'Vincent Van Gogh',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/220px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg'
    },
];